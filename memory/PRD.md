# SEO Automation Landing Page - PRD

## Problem Statement
Full SEO Automation landing page with all features, pages, widgets matching saas.seamanshelp.com and martechassistance.com.

## Architecture
- **Frontend**: React 19 + Tailwind CSS + Lucide React + React Router v7 + Google Translate
- **Backend**: FastAPI + MongoDB
- **Font**: Manrope | **Theme**: Dark (#050505) + green (#00D26A)

## Implemented (Jan 2026)

### Landing Page (12 sections)
Navbar, Hero, Stats, Features (12 cards, 4-col grid), Transparency, How It Works, Benefits, Integrations, Pricing, Testimonials, FAQ, Footer CTA + Footer

### Pages (8 routes)
- `/` Landing | `/pricing` Full pricing (4 plans + comparison + FAQ) | `/contact` (form + info cards)
- `/terms` Termeni | `/privacy` Confidențialitate | `/register` Înregistrare | `/login` Autentificare | `/ghid-configurare` Setup Guide

### Global Widgets
- **Cookie Consent** (bottom-left): ACCEPT/REJECT, localStorage persistence
- **Google Translate** (bottom-right): RO, English, Français, Deutsch, Italiano with flag dropdown

### Backend
- `POST /api/contact` - Save contact messages to MongoDB
- `GET /api/contact/messages` - Get messages

### Key Details
- Email: martechassistance@gmail.com | Phone: +40 721 578 660 | Address: Constanta, Romania
- Company: SEO Phoenix Martech Assistance
- Plans: Starter €19, Pro €49, Agency €99, Enterprise €199

## Testing History
- Iter 1: 15/15 | Iter 2: 15/15 | Iter 3: 23/23 | Iter 4: 12/12 | Iter 5: 14/14
- **Total: 79/79 tests passed (100%)**

## Backlog
- P1: Real JWT auth | P1: Resend email integration | P2: Google Analytics | P2: SEO meta tags
