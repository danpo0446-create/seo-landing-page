# SEO Automation Landing Page - PRD

## Problem Statement
Recreate and update the SEO Automation landing page (originally at saas.seamanshelp.com) with all features, functional links, and complete pages.

## Architecture
- **Frontend**: React 19 + Tailwind CSS + Lucide React icons
- **Backend**: FastAPI (default, not used)
- **Font**: Manrope (Google Fonts)
- **Theme**: Dark (#050505) with green accent (#00D26A)
- **Routing**: React Router DOM v7

## What's Been Implemented (Jan 2026)

### Iteration 1 - Initial Build
- Full landing page with 11 sections

### Iteration 2 - Design Match
- Matched original design from saas.seamanshelp.com
- Added Transparency section, updated Navbar, Stats, Features, Footer

### Iteration 3 - All Links & Pages
- **6 new pages created**: Terms, Privacy, Contact, Register, Login, Setup Guide
- **All links now functional** - no more dead `href="#"` links
- **Footer pages**: Full legal content in Romanian (Terms 10+ sections, Privacy 9+ sections GDPR)
- **Contact page**: Form with name, email, subject, message + success state
- **Register page**: Signup form with password toggle, links to Login + Terms + Privacy
- **Login page**: Auth form with password toggle, links to Register
- **Setup Guide page**: 4-step configuration guide + €79 setup CTA
- **PageLayout component**: Shared header + footer for sub-pages
- **Navigation**: Navbar Autentificare → /login, Începe Gratuit → /register
- **All CTAs**: Pricing buttons, Hero CTA, Footer CTA → /register
- **Transparency links**: → /ghid-configurare

### Routes:
- `/` - Landing page
- `/terms` - Termeni și Condiții
- `/privacy` - Politica de Confidențialitate
- `/contact` - Contact (form)
- `/register` - Înregistrare
- `/login` - Autentificare
- `/ghid-configurare` - Ghid de Configurare

## Testing
- Iteration 1: 15/15 passed (100%)
- Iteration 2: 15/15 passed (100%)
- Iteration 3: 23/23 passed (100%)

## Backlog
- P1: Real auth backend (registration/login with JWT)
- P1: Google Analytics integration
- P2: Cookie consent banner
- P2: Contact form email sending (Resend integration)
