# SEO Automation Landing Page - PRD

## Problem Statement
Recreate and update the SEO Automation landing page (originally at saas.seamanshelp.com) to match the original design exactly, with all 12 application features and updated sections.

## Architecture
- **Frontend**: React 19 + Tailwind CSS + Lucide React icons
- **Backend**: FastAPI (default, not used for landing page)
- **Font**: Manrope (Google Fonts)
- **Theme**: Dark (#050505) with green accent (#00D26A)

## What's Been Implemented (Jan 2026)

### Iteration 1 - Initial Build
- Full landing page with 11 sections

### Iteration 2 - Design Match with Original
- **Navbar**: Matched original - 3 nav links (Funcționalități, Prețuri, Testimoniale) + Autentificare + Începe Gratuit
- **Hero**: Added Romanian diacritics, green text (not gradient), rectangular buttons matching original
- **Stats**: Removed icons, just green numbers + labels (matching original)
- **Features**: Changed to 4-column grid, gray badge (not green), white title (no gradient), 12 feature cards
- **Transparency Section**: New section matching original - "Folosesti propriile tale chei API" + €79 Setup card
- **Footer CTA**: Added "Gata să începi?" badge
- **Footer**: Updated to "SEO Phoenix Martech Assistance", added legal links (Termeni și Condiții, Confidențialitate, Contact)
- All other sections preserved: HowItWorks, Benefits, Integrations, Pricing, Testimonials, FAQ

### Full Section List:
1. Navbar (fixed, scroll-aware, mobile responsive)
2. Hero Section (badge, headline with diacritics, subtitle, CTAs, trust badges)
3. Stats (10K+, 500+, 150%, 24/7 - no icons)
4. Features (12 cards in 4-column grid)
5. Transparency (API keys info + €79 setup card)
6. How It Works (3 steps)
7. Benefits (8 items)
8. Integrations (9 platforms)
9. Pricing (Starter €19, Pro €49, Agency €99)
10. Testimonials (3 reviews)
11. FAQ (7 items)
12. Footer CTA + Footer (SEO Phoenix Martech Assistance)

## Testing
- Iteration 1: 15/15 tests passed (100%)
- Iteration 2: 15/15 tests passed (100%)

## Backlog
- P1: Connect CTA buttons to real registration/login
- P1: Analytics tracking (Google Analytics)
- P2: Cookie consent banner
- P2: Performance optimization
- P2: Blog/resources section
