# SEO Automation Landing Page - PRD

## Problem Statement
Recreate the SEO Automation landing page with all features, functional pages, and design matching saas.seamanshelp.com.

## Architecture
- **Frontend**: React 19 + Tailwind CSS + Lucide React + React Router v7
- **Backend**: FastAPI + MongoDB (contact messages)
- **Font**: Manrope (Google Fonts)
- **Theme**: Dark (#050505) + green accent (#00D26A)

## What's Been Implemented (Jan 2026)

### Iteration 1-2: Landing Page + Design Match
- 12 landing page sections matching original design

### Iteration 3: All Pages & Links
- 6 sub-pages: Terms, Privacy, Contact, Register, Login, Setup Guide
- All links functional

### Iteration 4: Contact Redesign + Full Pricing Page
- **Contact page redesigned**: Two-column layout matching original (Email/Phone/Address cards + form)
- **Email updated everywhere**: martechassistance@gmail.com  
- **Phone**: +40 721 578 660, **Address**: Constanta, Romania
- **Full Pricing page** (/pricing): 4 plans (Starter €19, Pro €49, Agency €99, Enterprise €199)
  - Monthly/Annual toggle (-20% discount)
  - Feature comparison table (9 rows: Sites, Articles, GSC, Backlinks, Reports, WooCommerce, Social Media, Audit SEO, Support)
  - FAQ section (4 items)
- **Backend /api/contact**: Saves contact messages to MongoDB
- **"Vezi toate funcționalitățile"** → /pricing

### Routes:
- `/` - Landing page
- `/pricing` - Full pricing page (4 plans + comparison + FAQ)
- `/contact` - Contact (form + info cards)
- `/terms` - Termeni și Condiții
- `/privacy` - Politica de Confidențialitate
- `/register` - Înregistrare
- `/login` - Autentificare
- `/ghid-configurare` - Ghid de Configurare

### API Endpoints:
- `POST /api/contact` - Save contact message
- `GET /api/contact/messages` - Get all messages

## Testing
- Iteration 1: 15/15 (100%)
- Iteration 2: 15/15 (100%)
- Iteration 3: 23/23 (100%)
- Iteration 4: 12/12 (100%) backend + frontend

## Backlog
- P1: Real auth backend (JWT registration/login)
- P1: Resend integration for contact form email delivery
- P2: Google Analytics
- P2: Cookie consent banner
