# TechForbs — Next.js Production Website Revamp
> **Precision Fidelity Pass #17** | Global UI Refinements + Technology Page Alignment + First Complete Services Page: AI & Automation (`/services/ai-automation`), Sunil Sir Founder Profile Alignment, Sentence-Case Headings, and Vercel Production Deployment.

---

## 🚀 Overview

This repository houses the modern Next.js production revamp for **TechForbs** ([techforbs.com](https://techforbs.com/)), completely migrated from the approved baseline design while implementing precision homepage revisions and establishing a production-grade React App Router architecture.

Following **Precision Fidelity Pass #17**, the following key areas have been perfected:
1. **Finarkein Logo High-Contrast & Light-Green Hover (Change 01):** Upgraded Finarkein logo in the brand logos strip to high-contrast white brightness default with smooth transition to light-green hover effect (`#4ade80`). All other 9 brand logos strictly preserved.
2. **What We Do "Check details" Removal (Change 02):** Removed all redundant "Check details" CTA buttons from all 5 service categories in `SolutionsSection.tsx`.
3. **Technology Hero "Get guidance" CTA Enlargement (Change 03):** Enlarged "Get guidance" CTA button by ~15-20% across all 8 Technology pages while preserving anchor `#contact-section` smooth scrolling.
4. **Technology Founder Profile Center-Alignment (Change 04):** Unified center-alignment of Sunil Sir's avatar, name "Sunil Panchani", role "Founder & Director, TechForbs", and "Contact" button across both sticky aside and footer CTA banner on all 8 Technology pages.
5. **Site-Wide Sentence-Case Headings (Change 05):** Converted major headings across the application to sentence case while preserving proper nouns/acronyms (`AI`, `SEO`, `Shopify`, `TechForbs`, `FAQ`). Preserved `GET IN TOUCH` in ALL CAPS in Contact section.
6. **First Complete Services Page — AI & Automation (Objective B):** Created `/services/ai-automation` route matching the local CHE IT reference source (`services/ai-automation.html`), adapted to authentic TechForbs capabilities (Intelligent Agent Development, Conversational AI & Chatbots, AI Application Development, AI Integration & Implementation, AI Strategy & Consulting), with full responsive layout, GSAP animations, case studies, tech ecosystem, testimonials, and FAQ accordion.
7. **Navbar Services Integration:** Linked "AI & automation" in Services dropdown in `Navbar.tsx` to `/services/ai-automation`.

---

## 📋 QA Verification Suite (Pass #17)

Full visual proofs and execution metrics are documented in [`QA/precision-pass-17/QA-REPORT.md`](./QA/precision-pass-17/QA-REPORT.md).

All 14 required QA verification screenshots have been successfully captured and validated in `QA/precision-pass-17/`:
- `01-finarkein-default.png` — Finarkein logo in bright high-contrast default
- `02-finarkein-hover-green.png` — Finarkein logo light-green hover transition
- `03-what-we-do-no-check-details.png` — What We Do service cards without "Check details" buttons
- `04-tech-hero-cta-enlarged.png` — Technology page Hero with enlarged "Get guidance" CTA (+15-20%)
- `05-founder-center-aligned-aside.png` — Sunil Sir founder profile centrally aligned in sticky aside
- `06-founder-center-aligned-banner.png` — Sunil Sir founder profile centrally aligned in bottom CTA banner
- `07-sentence-case-headlines.png` — Sentence case headings on Technology page
- `08-ai-services-hero.png` — AI & Automation Services Hero with cyan circle drawing animation
- `09-ai-services-cards.png` — 4 Core Service Cards in AI & Automation section
- `10-ai-better-together.png` — "AI + Automation: Better Together" architecture section
- `12-ai-cases-architecture.png` — Case studies & enterprise architecture sections
- `13-ai-faq-accordion.png` — FAQ section with single-open accordion behavior
- `14-ai-mobile-responsive.png` — Mobile responsive layout (390x844)
- `15-fullpage-ai-automation.png` — Complete desktop fullpage capture of `/services/ai-automation`

---

## Prior Passes
- [`QA/precision-pass-16/QA-REPORT.md`](./QA/precision-pass-16/QA-REPORT.md) — Pass #16 Verification
- `12-portfolio-large-card-uniformity.png` — Carousel showing large card uniformity across all 7 brands
- `13-portfolio-carousel-navigation.png` — Carousel actively navigated to next slide
- `14-fullpage-desktop.png` — Complete homepage desktop fullpage screenshot
- `15-fullpage-mobile.png` — Complete homepage mobile fullpage screenshot

---

## 🛠️ Tech Stack & Architecture

- **Framework:** [Next.js](https://nextjs.org/) (App Router, React 19)
- **Language:** TypeScript 5 (Strict Mode)
- **Styling:** TailwindCSS v4 + Preserved Webflow/TechForbs Design System (`globals.css`)
- **3D Graphics:** [Three.js](https://threejs.org/) (`r186`) with authentic vector extruded geometries & procedural soft ground shadows
- **Animations:** [GSAP 3](https://gsap.com/) & ScrollTrigger
- **Smooth Scroll:** [Lenis](https://github.com/darkroomengineering/lenis)
- **Carousels:** [Swiper 14](https://swiperjs.com/) with custom responsive navigation
- **Deployment:** Netlify via `@netlify/plugin-nextjs` and OpenNext App Router runtime

---

## 🏃 Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run production build
npm run build

# Start production server
npm run start
```
Open [http://localhost:3000](http://localhost:3000) to view the application.
