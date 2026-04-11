from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import asyncio
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List
import uuid
from datetime import datetime, timezone
import resend

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Resend setup
resend.api_key = os.environ.get('RESEND_API_KEY', '')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')
CONTACT_EMAIL = os.environ.get('CONTACT_EMAIL', 'martechassistance@gmail.com')

# Create the main app
app = FastAPI()
api_router = APIRouter(prefix="/api")


# Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class ContactMessage(BaseModel):
    name: str
    email: str
    subject: str
    message: str

class ContactResponse(BaseModel):
    success: bool
    message: str


# Routes
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/contact", response_model=ContactResponse)
async def submit_contact(msg: ContactMessage):
    # Save to MongoDB
    doc = msg.model_dump()
    doc['timestamp'] = datetime.now(timezone.utc).isoformat()
    doc['read'] = False
    await db.contact_messages.insert_one(doc)

    # Send email via Resend
    try:
        html_content = f"""
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #00D26A; border-bottom: 2px solid #00D26A; padding-bottom: 10px;">
                Mesaj nou de contact - SEO Automation
            </h2>
            <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                <tr>
                    <td style="padding: 8px 0; color: #666; width: 100px;"><strong>Nume:</strong></td>
                    <td style="padding: 8px 0;">{msg.name}</td>
                </tr>
                <tr>
                    <td style="padding: 8px 0; color: #666;"><strong>Email:</strong></td>
                    <td style="padding: 8px 0;"><a href="mailto:{msg.email}">{msg.email}</a></td>
                </tr>
                <tr>
                    <td style="padding: 8px 0; color: #666;"><strong>Subiect:</strong></td>
                    <td style="padding: 8px 0;">{msg.subject}</td>
                </tr>
            </table>
            <div style="margin-top: 20px; padding: 15px; background: #f5f5f5; border-radius: 8px;">
                <strong>Mesaj:</strong>
                <p style="margin-top: 8px; line-height: 1.6;">{msg.message}</p>
            </div>
            <p style="margin-top: 20px; font-size: 12px; color: #999;">
                Trimis de pe saas.seamanshelp.com la {datetime.now(timezone.utc).strftime('%d.%m.%Y %H:%M')} UTC
            </p>
        </div>
        """
        params = {
            "from": SENDER_EMAIL,
            "to": [CONTACT_EMAIL],
            "subject": f"[Contact SEO Automation] {msg.subject}",
            "html": html_content,
            "reply_to": msg.email,
        }
        email_result = await asyncio.to_thread(resend.Emails.send, params)
        logger.info(f"Email sent to {CONTACT_EMAIL}, id: {email_result.get('id', 'unknown')}")
    except Exception as e:
        logger.error(f"Failed to send email via Resend: {str(e)}")

    return ContactResponse(success=True, message="Mesaj trimis cu succes!")

@api_router.get("/contact/messages")
async def get_contact_messages():
    messages = await db.contact_messages.find({}, {"_id": 0}).to_list(100)
    return messages

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks

# Include router
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
