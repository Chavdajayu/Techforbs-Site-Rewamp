# Changelog

All notable changes to the TechForbs Next.js project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [Pass #16: Hero Animation Reconstruction + Typography Enlargement + What We Do Visibility Fix + Digital Marketing Simplification + Portfolio Carousel Reference-Size Restoration] - 2026-10-31

### Added & Refined
- **Change 01: Hero Animation Reconstruction (Authentic CHE IT Webflow IX2 Choreography):**
  - Mapped the exact preloader and opening interaction from `webflow.achunk.3363b12de58399c3.js` using GSAP:
    - Initial stage offset: `scale: 0.01, x: -36px (-2.25rem), y: 64px (4rem), transformOrigin: "50% 50%"`.
    - Hero background & atmospheric texture: `opacity: 0.0001`.
    - Heading words: `yPercent: 120, opacity: 0` (hidden below overflow masks).
    - Header navbar: `yPercent: -100, opacity: 0`.
    - Timing & Delays:
      - At 0.75s: 3D stage and Shopify model scale up to 1.0 and translate to center (duration 1.5s, ease `expo.inOut`).
      - At 1.75s: Background atmosphere fades in (duration 1.5s, ease `power2.out`) concurrently with Row 1 words (`POWERING` / `SHOPIFY`) rising into view (duration 1.25s, ease `expo.inOut`).
      - At 1.95s: Row 2 words (`STORES TO` / `GROW`) rise into view (duration 1.25s, ease `expo.inOut`).
      - At 2.75s: Header slides down into place (duration 0.5s, ease `expo.out`).
      - At 3.30s & 3.60s: Supporting text and CTA buttons fade in smoothly.
    - Full `prefers-reduced-motion` compliance immediately sets all elements to static resting states.
- **Change 02: Double Hero Headline Font Size (Target ~2.0× with Zero 3D Model Overlap):**
  - Doubled computed headline font size from Pass #15 (`clamp(2.3rem, 4.0vw, 4.8rem)`) to `clamp(3.8rem, 7.2vw, 9.2rem)` at 1440px/1920px with `line-height: 0.98` and `letter-spacing: -0.04em`.
  - Expanded `.hero-composition-wrap` to `max-width: 1720px` with fluid responsive padding.
  - Reserved central column for 3D Shopify model (`minmax(320px, 420px)`), with Left column (1fr) and Right column (1fr).
  - Enforced `white-space: nowrap !important;` on `.hero-grid-left-2` so `"STORES TO"` strictly remains on ONE line on desktop.
  - Zero text overlap or collision with the central 3D Shopify model across 1920px, 1440px, and responsive breakpoints.
  - Mobile layout updated to a clean vertical stack with "POWERING SHOPIFY" above the 3D model and "STORES TO GROW" below.
- **Change 03: What We Do Blank-on-Scroll Fix (Fail-Open Visibility Architecture):**
  - Resolved root cause of section blanking during fast scroll or delayed ScrollTrigger execution.
  - Established CSS fail-open default: `.solutions__inner { opacity: 1 !important; }`.
  - GSAP lifecycle updated to detect if section is already in viewport or scrolled past; keeps section visible immediately.
  - Added safety failsafe timeout (forces `opacity: 1` after 2000ms if ScrollTrigger hasn't fired) and added `ScrollTrigger.refresh()`.
- **Change 04: Digital Marketing Simplification (8 Titles Only & Clean 2-Column Grid):**
  - Removed all 8 subpoint descriptions from Digital Marketing, keeping strictly the 8 approved service titles:
    1. AI SEO (GEO/AEO)
    2. Technical SEO Audit
    3. On-Page & Content SEO
    4. Local SEO
    5. Paid Advertising (PPC)
    6. Social Media Marketing
    7. Email & Marketing Automation
    8. Analytics & Conversion Optimization
  - Arranged in a clean, balanced 2-column layout (4 left, 4 right) with glowing cyan bullet markers (`#00e5ff`).
  - Removed category description paragraph for Digital Marketing.
  - Left the other 4 service categories (`Shopify Development`, `WordPress / WooCommerce Development`, `Custom Web Application`, `AI & Automation`) completely intact.
- **Change 05: Portfolio Carousel Reference-Size Restoration (Image 3 Proportions):**
  - Restored large card dimensions matching Image 3 from Netlify and the original CHE IT reference.
  - Updated card image container: `height: clamp(480px, 44vw, 560px) !important;` and card min-height: `clamp(560px, 50vw, 680px) !important;`.
  - Maintained signature reversed asymmetric capsule geometry (`border-top-left-radius: 0px`, `border-top-right-radius: 2.25rem`).
  - Updated Swiper breakpoints: `1.25` on mobile, `1.45` at 480px, `2.2` at 768px, `2.5` at 992px, and `2.8` at 1440px with 40px spacing.
  - Ensured all 7 cards (ALLMAX, Bodhi Health, Finarkein, Hype Distribution, Digicio, Kilongwan, GIMA) share uniform large dimensions.
- **QA Verification:**
  - 15 full-resolution screenshots captured in `QA/precision-pass-16/`.
  - Next.js production build and ESLint passed with 0 errors.

---

## [Pass #15: Advanced Visual Refinement + Animation Restoration + What We Do Content Update + Contact & Footer Update] - 2026-10-31

### Added & Refined
- **Change 01: Hero Headline Line Spacing & Text Wrapping:**
  - Significantly reduced excessive vertical gap between upper row (`POWERING` / `SHOPIFY`) and lower row (`STORES TO` / `GROW`) via `align-self: end` on row 1 and `align-self: start` on row 2, bringing them into a tight, harmonious vertical composition alongside the centered 3D model.
  - Enforced `white-space: nowrap` on `.hero-grid-left-2` and the text span so `"STORES TO"` strictly remains on ONE line on all desktop screens.
  - Maintained 3-column reserved-space layout with 3D model centered and zero text overlap; preserved semantic H1 with screen-reader text for SEO and accessibility.
- **Change 02: Portfolio Carousel Card Size:**
  - Preserved authentic CHE IT reference card dimensions without shrinking. All 7 cards maintain uniform height (`clamp(380px, 34vw, 440px)`), full width, and reversed asymmetric capsule geometry (`border-radius: 0 2.25rem 2.25rem 0`).
  - Swiper breakpoints aligned to reference: `1.25` default, `1.45` at 480px, `2.2` at 768px, `3.0` at 992px, and `3.2` at 1440px with 40px spacing.
  - Maintained exact 7-brand sequence: ALLMAX, Bodhi Health, Finarkein, Hype Distribution, Digicio, Kilongwan, GIMA.
- **Change 03: Brand Logos Section (+20% Size Enhancement):**
  - Expanded visible artwork footprint by +20% across all 10 logos (ALLMAX, Adeeva, Kilongwan, GIMA, Bodhi Health, Finarkein, Hype Distribution, Digicio, Bridge Studio, Peddlers). Meschino completely excluded.
  - Increased section padding to 4.5rem top/bottom and comfortable 2.25rem grid gaps.
  - Maintained high-contrast monochrome silver/white default filter (`brightness(2.2) contrast(1.1)`) restoring natural brand colors on hover.
- **Change 04: Global Innovation Continuous Seamless Marquee:**
  - Re-implemented infinite horizontal continuous marquee motion: `"Global Innovation · Scalable Web Platforms · Certified Specialists · TechForbs Delivery"`.
  - Configured hardware-accelerated 60/120fps CSS linear loop (`marqueeLoop` with `translate3d(-50%, 0, 0)`) with duplicate text blocks for a seamless continuous flow with zero jump/reset. Pauses smoothly on hover and respects `prefers-reduced-motion`.
- **Change 05: Complete Hero & Whole Website Animation Refinement:**
  - Verified and fine-tuned Webflow IX2 / GSAP opening sequence, section reveals, SVG circle drawing around "pixel perfect", strikethrough lines, and Lenis smooth scroll synchronization with `ScrollTrigger.update()`.
- **Change 06: What We Do Section — 5 New Service Categories:**
  - Preserved interactive tab navigation and illuminated glassmorphic card.
  - Replaced legacy tabs with the 5 exact approved categories:
    1. **Shopify Development** (Exactly 8 subpoints)
    2. **WordPress / WooCommerce Development** (Exactly 9 subpoints)
    3. **Custom Web Application** (Exactly 9 subpoints)
    4. **AI & Automation** (Exactly 5 subpoints)
    5. **Digital Marketing** (Exactly 8 subpoints with bold titles AND full descriptions).
- **Change 07: Contact Section — Country Order Update:**
  - Updated Global Delivery Hubs to exactly 3 countries in order: **1. CANADA**, **2. USA**, **3. AUSTRALIA**.
  - Created authentic circular 16x16 local SVG assets (`flag-ca.svg`, `flag-us.svg`, `flag-au.svg`) in `public/images/ui/`.
- **Change 08: Footer — LinkedIn Only:**
  - Removed Instagram and third-party social buttons from Footer. Retained strictly ONE social icon: TechForbs LinkedIn (`https://in.linkedin.com/company/techforbs`).
- **QA Verification:**
  - Complete 18-screenshot QA artifact suite captured in `QA/precision-pass-15/`.

---

## [Pass #14: Complete Animation Restoration + Hero Composition + Carousel & Logo Refinement] - 2026-10-30

### Added & Restored
- **Webflow IX2 Preloader & Opening Choreography:** Restored authentic opening sequence (hero stage scales from 0.01 to 1.0 with `expo.inOut`, words slide up from below with `expo.out`, background opacity fades from 0 to 1.0, header reveals smoothly).
- **Three-Column Reserved-Space Hero Composition:**
  - `POWERING` (Row 1 Left) | `[3D MODEL]` (Center column spanning both rows) | `SHOPIFY` (Row 1 Right)
  - `STORES TO` (Row 2 Left) | `[3D MODEL]` (Center column spanning both rows) | `GROW` (Row 2 Right)
  - Zero text overlap with 3D model. Semantic H1 with screen-reader text for SEO and accessibility. Mobile view collapses into clean vertical stack.
- **Services Mega-Menu CTA Refinement:** Reconfigured `.services-book-call-btn` ("Book a call") to change text color ONLY: transparent background with `#0077ff` text (default) -> transparent background with `#ffffff` text (hover). Zero filled background.
- **10 Brand Logos Visibility & Sizing:** Increased visible artwork footprint by +18–22%. Default state styled in high-contrast bright monochrome white/silver (`brightness(2.2) contrast(1.1)`), transitioning to full natural brand colors on hover. Preserved exact 5+5 arrangement.
- **Customers Carousel Refinement:** Recreated authentic CHE IT reference Swiper breakpoints (`300: 1.1`, `768: 2.2`, `992: 3.53`, `1600: 4.35`), reference navigation buttons (`.slider-buttons.slider-buttons_customers`) positioned cleanly at top right of the section with zero overlap onto logos, and animated strikethrough line across "companies".
- **Portfolio Carousel Uniformity:** All 7 cards computed-pixel identical in height and dimensions: uniform `.case-item`, `.case-item-image` (350px tall), `.case-item-title`, `.case-item-description` (clamped 2 lines). Preserved reversed capsule geometry (`border-radius: 0 2.25rem 2.25rem 0`). Exact 7-brand sequence.
- **Testimonials Chat Bubble Animation:** Staggered bounce scale entrance (`scale: 0 -> 1`, `height: 0 -> 2.375rem`, `ease: "back.out(1.4)"`, `stagger: 0.45s`) on ScrollTrigger and slide change.
- **Team Grid Morphing State Machine:** Restored dynamic grid state transitions (`state_v0_mod` through `state_v5_mod`) with `min-width: 992px` and timed delays `[2.2, 2.5, 1.2, 2.0, 1.5, 1.0]`.
- **Lenis Smooth Scroll & ScrollTrigger Synchronization:** Connected `lenis.on('scroll', ScrollTrigger.update)` for seamless scroll-driven animation calculations.
- **QA Verification Suite:** Complete 13-screenshot QA artifact suite captured in `QA/precision-pass-14/`.

---

## [Pass #13: Visual Regression Recovery] - 2026-10-30

### Fixed
- **Visual Baseline Restoration:** Resolved major visual regressions from initial Next.js migration (Image 1) to restore exact fidelity with approved baseline (Image 2).
- **Who We Build For:** Replaced generic stacked text panels with authentic two-column Webflow layout: sticky left header/text and right-hand visual cards with glowing blue borders, category badges, and rich illustration mockups.
- **Cyan Ellipse Alignments:**
  - Portfolio Section: Centered cyan oval tightly around "pixel perfect" via `.portfolio-circle-wrap` with responsive sizing and coordinate translation.
  - Team Section: Centered cyan oval tightly around "expert team" via `.team-circle-wrap`.
- **Contact Section:** Removed oversized blue SVG arrow that consumed the entire viewport. Restored original two-column layout with Global Headquarters, Delivery Hubs, Direct Contact, and clean "Get in touch" form.
- **Footer Social Icons:** Resolved oversized full-viewport social icons by enforcing 20px SVG dimensions with `loading="eager"`.
- **Eager Asset Loading:** Configured key offscreen portfolio, team, customer, and footer assets with `loading="eager"` to eliminate blank card backgrounds during initial page loads and headless captures.
- **TypeScript 3D Geometry:** Fixed `ShapePath.toShapes()` signature in `Hero3DCanvas.tsx` to ensure clean zero-error production builds.

### Retained (Pass #12 Requirements)
- **Change 01 (Hero 3D Model):** +18% scale, natural brand colors (`#95BF46`, `#5E8E3E`, `#FFFFFF`), soft dark ground shadow, 360° mouse drag orbit with inertia damping & 2.0s auto-idle rotation resumption.
- **Change 02 (Hero Headline):** Bold typography, fluid `clamp()`, non-overlapping two-line headline ("Powering Shopify" top, "Stores to Grow" bottom).
- **Change 03 (Navbar):** "Home" link removed from all menus.
- **Change 04 (Services Menu):** "Book a call" hover state reversed: blue background default, white background on hover.
- **Change 05 (Technologies Menu):** Exact 8 technologies in 2x4 grid with smooth scrolling.
- **Change 06 (Navbar CTA):** Renamed to "Let's Talk".
- **Change 07 (Hero Background):** Authentic high-resolution `hero-section-image.png`.
- **Change 08 (Brand Logos):** Exactly 10 logos in 5+5 arrangement: Row 1 (ALLMAX, Adeeva, Kilongwan, GIMA, Bodhi Health), Row 2 (Finarkein, Hype Distribution, Digicio, Bridge Studio, Peddlers 30A). Meschino removed.
- **Change 09 (Customers Carousel):** Dedicated square previous/next arrow buttons in top-right heading zone.
- **Change 10 (Portfolio):** Reversed asymmetric capsule geometry (0px left, 2.25rem right) and exact 7-brand sequence.

---

## [Pass #12: Next.js Production Migration] - 2026-10-30

### Added
- Created modern Next.js 16 App Router application in `TechForbs-NextJS-Rewamp`.
- Configured TypeScript 5 in strict mode.
- Integrated TailwindCSS v4 with preserved Webflow and TechForbs design systems.
- Re-architected Three.js 3D canvas for Shopify model with vector extrusion and soft ground shadows.
- Integrated Lenis smooth scrolling and Swiper carousel navigation.
- Configured Netlify App Router production deployment via `netlify.toml` and `@netlify/plugin-nextjs`.
