# SEO Automation Landing Page - PRD

## Problem Statement
Full SEO Automation landing page matching saas.seamanshelp.com with all features, pages, widgets, and integrations.

## Architecture
- **Frontend**: React 19 + Tailwind CSS + Lucide React + React Router v7 + Google Translate
- **Backend**: FastAPI + MongoDB + Resend (email)
- **Font**: Manrope | **Theme**: Dark (#050505) + green (#00D26A)

## Implemented (Jan 2026)

### Landing Page (12 sections)
Navbar, Hero, Stats, Features (12 cards), Transparency, How It Works, Benefits, Integrations, Pricing, Testimonials, FAQ, Footer

### Pages (8 routes)
`/` `/pricing` `/contact` `/terms` `/privacy` `/register` `/login` `/ghid-configurare`

### Integrations
- **Resend**: Contact form emails sent to martechassistance@gmail.com with HTML template
- **Google Translate**: 5 languages (RO, EN, FR, DE, IT) - script in index.html, cookie-based switching
- **MongoDB**: Contact messages stored

### Global Widgets
- **Cookie Consent** (bottom-left): ACCEPT/REJECT, localStorage, link to browsehappy.com
- **Language Selector** (bottom-right): Google Translate with custom dropdown UI

### Backend Endpoints
- `POST /api/contact` - Save message + send email via Resend
- `GET /api/contact/messages` - Get messages

### Key Details
- Email: martechassistance@gmail.com | Phone: +40 721 578 660 | Constanta, Romania
- Company: SEO Phoenix Martech Assistance
- Plans: Starter €19, Pro €49, Agency €99, Enterprise €199

## Testing: 6 iterations, all 100%

## Backlog
- P1: Real JWT auth | P2: Google Analytics | P2: SEO meta tags
