# TechForbs — Next.js Production Website Revamp
> **Precision Fidelity Pass #16** | Hero Animation Reconstruction + Typography Enlargement + What We Do Visibility Fix + Digital Marketing Simplification + Portfolio Carousel Reference-Size Restoration (Three.js 3D Canvas, TailwindCSS v4, TypeScript, GSAP, and Netlify Deployment).

---

## 🚀 Overview

This repository houses the modern Next.js production revamp for **TechForbs** ([techforbs.com](https://techforbs.com/)), completely migrated from the approved baseline design while implementing precision homepage revisions and establishing a production-grade React App Router architecture.

Following **Precision Fidelity Pass #16**, the following key areas have been perfected:
1. **Hero Animation Reconstruction (Change 01):** Authentic CHE IT Webflow IX2 choreography reproduced using GSAP:
   - Initial state: 3D stage and Shopify model scaled to `0.01` at `(-2.25rem, 4rem)`, background atmosphere at `0.0001`, words masked at `yPercent: 120`, header hidden at `yPercent: -100`.
   - At 0.75s: 3D stage and Shopify model scale to 1.0 and translate to center (duration 1.5s, ease `expo.inOut`).
   - At 1.75s: Atmospheric faceted background fades in (duration 1.5s, ease `power2.out`) concurrently with Row 1 words (`POWERING` / `SHOPIFY`) revealing upward (duration 1.25s, ease `expo.inOut`).
   - At 1.95s: Row 2 words (`STORES TO` / `GROW`) reveal upward (duration 1.25s, ease `expo.inOut`).
   - At 2.75s: Header navbar slides down into place (duration 0.5s, ease `expo.out`).
   - At 3.30s & 3.60s: Supporting text and CTA buttons fade in.
2. **Double Hero Headline Font Size (Change 02):** Headline font size doubled to `clamp(3.8rem, 7.2vw, 9.2rem)` at 1440px/1920px (~2.0× of Pass #15). `"STORES TO"` strictly on ONE line on desktop (`white-space: nowrap !important;`). Central 3D Shopify model maintained in reserved center column (`minmax(320px, 420px)`) with ZERO text/model overlap. Mobile layout cleanly stacked with 3D model between upper and lower headline rows.
3. **What We Do Blank-on-Scroll Fix (Change 03):** Established fail-open CSS and GSAP lifecycle architecture (`.solutions__inner { opacity: 1 !important; }`). Immediate visibility if scrolled into view or past; failsafe timeout ensures section is never locked at opacity 0 under any scroll speed.
4. **Digital Marketing Simplification (Change 04):** Removed all 8 subpoint descriptions from Digital Marketing, retaining strictly the 8 approved service titles in a clean, balanced 2-column layout (4 left, 4 right) with glowing cyan bullets (`#00e5ff`). Removed category description paragraph for Digital Marketing. Left all other 4 categories (`Shopify Development`, `WordPress / WooCommerce Development`, `Custom Web Application`, `AI & Automation`) completely intact.
5. **Portfolio Carousel Reference-Size Restoration (Change 05):** Restored large card dimensions matching Image 3 from Netlify and the original CHE IT reference (`height: clamp(480px, 44vw, 560px)` image container, `min-height: clamp(560px, 50vw, 680px)` card). Signature reversed asymmetric capsule geometry (`border-top-left-radius: 0px`, `border-top-right-radius: 2.25rem`). Swiper breakpoints: `1.25` on mobile, `1.45` at 480px, `2.2` at 768px, `2.5` at 992px, `2.8` at 1440px with 40px spacing across all 7 cards (ALLMAX, Bodhi Health, Finarkein, Hype Distribution, Digicio, Kilongwan, GIMA).

---

## 📋 QA Verification Suite (Pass #16)

Full visual proofs and execution metrics are documented in [`QA/precision-pass-16/QA-REPORT.md`](./QA/precision-pass-16/QA-REPORT.md).

All 15 required QA verification screenshots have been successfully captured and validated in `QA/precision-pass-16/`:
- `01-hero-before.png` — Baseline Hero layout from Pass #15
- `02-hero-opening-frame.png` — Opening animation frame showing 3D stage scaled down to 0.01 at offset (-36px, 64px), hidden words, and translucent background
- `03-hero-background-reveal.png` — Hero at 1.75s: 3D stage scaled up, background image fading in, row 1 appearing
- `04-hero-model-entrance.png` — Hero showing 3D Shopify bag entrance and positioning
- `05-hero-final-2x-typography.png` — Hero with 2× headline font size, zero model overlap, "STORES TO" on one single line
- `06-hero-responsive-desktop.png` — Hero desktop layout at 1920x1080 resolution
- `07-hero-mobile.png` — Hero mobile viewport (390x844) with clean vertical stack
- `08-what-we-do-scroll-entry.png` — What We Do section scrolled into view, verified visible and never blank
- `09-what-we-do-after-animation.png` — What We Do fully rendered and interactable
- `10-digital-marketing-titles-only.png` — Digital Marketing tab showing ONLY the 8 service titles in 2 columns, NO sub-descriptions, NO category description paragraph
- `11-portfolio-reference-measurements.png` — Portfolio section showing reference large card proportions (~520-560px) and reversed capsule geometry
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
