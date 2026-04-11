# SEO Automation Landing Page - PRD

## Problem Statement
Full SEO Automation landing page matching saas.seamanshelp.com with all features, pages, widgets, and integrations.

## Architecture
- **Frontend**: React 19 + Tailwind CSS + Lucide React + React Router v7 + Google Translate
- **Backend**: FastAPI + MongoDB + Resend
- **Font**: Manrope | **Theme**: Dark (#050505) + green (#00D26A)

## Implemented

### Landing Page (12 sections)
Navbar, Hero, Stats, Features (12), Transparency, How It Works, Benefits, Integrations, Pricing, Testimonials, FAQ, Footer

### Pages (8 routes)
`/` `/pricing` `/contact` `/terms` `/privacy` `/register` `/login` `/ghid-configurare`

### Integrations
- **Resend**: Emails to martechassistance@gmail.com (HTML template, reply_to)
- **Google Translate**: 5 langs (RO/EN/FR/DE/IT), flag images from flagcdn.com, cookie+reload, localStorage persistence
- **MongoDB**: Contact messages

### Widgets
- **Cookie Consent** (bottom-left): ACCEPT/REJECT, localStorage, browsehappy.com link
- **Language Selector** (bottom-right): Google Translate, flag images (not emoji), notranslate class

### Backend
- `POST /api/contact` → MongoDB + Resend email
- `GET /api/contact/messages`

## Testing: 7 iterations, all 100%
## Backlog: P1 JWT auth | P2 Google Analytics | P2 SEO meta tags
