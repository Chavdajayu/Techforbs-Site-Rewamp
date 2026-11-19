# Changelog

All notable changes to the TechForbs Next.js project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [Precision Fidelity Pass #23: Blurry Frosted Glass Overhaul for Navbar & All Dropdown Menus] - 2026-11-19

### Added & Refined
- **All Dropdowns Blurry Frosted Glass Overhaul (Technologies, Services, Portfolio, Company):**
  - Eliminated opaque dirty grey background styles (`background-color: rgb(58, 58, 58)` and `var(--gray-200)` / `var(--gray-80)`) inherited from Webflow.
  - Applied semi-translucent frosted glass (`linear-gradient(135deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.06) 40%, rgba(12, 18, 30, 0.50) 100%)`) with `36px` backdrop blur (`saturate(200%) brightness(1.15)`), `1px` specular border (`rgba(255, 255, 255, 0.22)`), and inset highlight (`rgba(255, 255, 255, 0.25)`).
  - Added inline React hardware acceleration styles on `.header__nav-sub-inner` and `.header__nav-sub-body` in `Navbar.tsx` to guarantee blur rendering across all browsers without CSS minifier stripping.
  - Transformed Services megamenu into a unified frosted glass card: converted left column from solid grey to translucent glass tint (`rgba(255, 255, 255, 0.04)`) and tinted service icons with brand cyan/blue (`rgba(0, 119, 255, 0.18)`).
  - Removed obsolete opaque `#3A3A3A` SVG arrow triangles for a clean, modern floating glass panel look.
- **Navbar Frosted Luminous Calibration (Elimination of "Black Transparent"):**
  - Replaced the dark 65% charcoal tint with a luminous frosted glass recipe (`rgba(255, 255, 255, 0.18)` to `rgba(10, 15, 28, 0.35)` with `32px` blur, `saturate(200%)`, and `brightness(1.15)`).
  - Preserved crisp legibility of navigation items while allowing underlying 3D models and backgrounds to shine through in glowing, frosted diffusion.

---

## [Precision Fidelity Pass #22.4: Full-Width Navbar Placement & Blurry Frosted Glass Effect] - 2026-11-19

### Added & Refined
- **Full-Width Viewport Navbar Positioning (Zero Dead Space on Edges):**
  - Removed container restriction `max-width: 1320px` that forced the logo and right-hand navigation items inward, eliminating the dead empty margins marked in user feedback.
  - Set `.header__container` and `.header__inner` to full width (`width: 100% !important; max-width: 100% !important; justify-content: space-between !important;`) with symmetric padding (`padding-left: 1.5rem; padding-right: 1.5rem;`).
  - Precisely anchored the TechForbs logo at 23.72px from the screen's left edge and the "Let's Talk" CTA button at 23.72px from the screen's right edge across all wide displays.
- **Hardware-Accelerated Blurry Frosted Glass Effect (Not Directly Transparent):**
  - Resolved root cause where Next.js CSS minification discarded `backdrop-filter` due to vendor prefix order.
  - Implemented direct inline React styles on `.header__nav-list` and `.header__cta .button` (`backdropFilter: "blur(28px) saturate(190%) brightness(1.1)"`, `WebkitBackdropFilter: "blur(28px) saturate(190%) brightness(1.1)"`), guaranteeing persistent hardware-accelerated blur across all browser engines.
  - Calibrated a 65% semi-translucent smoky dark gradient (`linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(18, 24, 38, 0.65) 100%)`) with a subtle 1px specular highlight border (`rgba(255, 255, 255, 0.18)`).
  - Background elements (such as the 3D green Shopify bag and section text) are softly diffused and blurred in frosted glass underneath the navigation pill rather than appearing through clear glass.
- **Harmonized Frosted Cyan-Blue Glass CTA Button:**
  - Styled `.header__cta .button` with `linear-gradient(135deg, rgba(0, 119, 255, 0.32) 0%, rgba(0, 60, 160, 0.28) 100%)`, 28px backdrop blur, and 10px rounded corners, transitioning into electric `#0077ff` on hover.

---

## [Precision Fidelity Pass #21: Navbar Recovery, Luxury Dark Scrollbar, Smooth Solutions Scroll, & AI Services Page Redesign] - 2026-11-18

### Added & Refined
- **Navbar Full Visibility & Animation Decoupling Recovery:**
  - Resolved root cause of Navbar disappearing from the viewport: removed `initialHidden` inline transform styles that were conflicting with GSAP's `yPercent` transform matrix calculations.
  - Implemented clean `gsap.fromTo(header, { y: -80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.85, ease: 'power2.out', clearProps: 'transform' })` in `HeroSection.tsx`, guaranteeing `.header` returns to its natural `transform: none` state.
  - Restored 100% full visibility, exact top positioning (`top: 7.9px`), and interactivity across all pages.
- **Custom Luxury Dark Scrollbar:**
  - Implemented modern slim scrollbar design across both `techforbs-theme.css` and static site styles (`scrollbar-width: thin; scrollbar-color: rgba(255, 255, 255, 0.25) #090a0f;`).
  - Added custom `::-webkit-scrollbar` with 7px width, obsidian track `#090a0f`, rounded translucent pill thumb with 1px border, and smooth `#0077ff` cyan/blue glow on hover.
  - Replaced the wide, dated default Windows 10/11 browser scrollbar with a sleek, native dark luxury aesthetic.
- **What We Do (Solutions) Section — Silky-Smooth Scroll Dynamics:**
  - Reduced pinned scroll distance from an excessive `end: "+=3200"` to an agile, natural `end: "+=1500"` in `SolutionsSection.tsx`.
  - Snapped scrub response time from `0.5s` to `0.2s` (`scrub: 0.2`), eliminating the heavy, sluggish drag sensation and providing responsive tab switching.
- **AI & Automation Services Page — Box Blue Background Theme Overhaul (Image 1):**
  - Removed outdated red/maroon background PNGs (`68d52d57009f7380eb0f180d_tech-services-card-bg-1.png`) across all 8 service cards in Section 02 ("What do our AI & automation services include?") and Section 10 ("Businesses we serve with AI & automation").
  - Upgraded `.tech-service-card` to a sleek TechForbs blue/cyan radial theme: `radial-gradient(circle at 85% 85%, rgba(0, 119, 255, 0.18) 0%, rgba(0, 163, 255, 0.06) 45%, rgba(13, 14, 21, 0.98) 100%)` with `1px solid rgba(0, 163, 255, 0.22)` and glowing hover transitions.
  - Updated button styles to match TechForbs blue branding.
- **AI & Automation Services Page — Portfolio Carousel 2-at-once (Image 2):**
  - Updated Swiper responsive breakpoints in `PortfolioCases.tsx` so desktop displays exactly `slidesPerView: 2` with `spaceBetween: 28` alongside the sticky Sunil Panchani sidebar.
  - Sized each case study card with spacious width (~386px each), eliminating cramped 3-card squishing.
- **AI & Automation Services Page — Testimonials 3D Orbital Deck Integration (Image 3):**
  - Replaced legacy static chat-bubble testimonial section with the newly perfected Home page `<TestimonialsSection className="is-services-page" title="What our clients say… for real" label="TESTIMONIALS" />`.
  - Added solid opaque obsidian black card backgrounds (`#090a0f`) to prevent text bleed-through during transitions.
  - Calibrated `.is-services-page` orbital card scale and angle to fit seamlessly inside the content column.

---

## [Precision Fidelity Pass #20: Hero Intro Flash Elimination, Subtle Hero BG Shadow, Testimonials Vertical Gap & Void Removal] - 2026-11-18

### Added & Refined
- **Hero Initial Load / Refresh Flash Elimination (Zero FOUC / Zero Stuck Background):**
  - Resolved root cause where Next.js SSR rendered `.hero__content-top` at default full scale prior to client-side GSAP hydration, causing the background image and pedestal to momentarily flash/stick on screen for 0.5s–1s before the curtain animation triggered.
  - Initialized `.hero__content-top` directly in SSR HTML and CSS with `scale(0.001); opacity: 0; transform-origin: 50% 50%; will-change: transform, opacity`.
  - Initialized `<Navbar initialHidden />` on home page with `transform: translateY(-100%); opacity: 0;` ensuring pure dark opening canvas.
  - GSAP intro timeline seamlessly scales stage to `1` and fades in smoothly as the dark curtain sweeps open.
  - Verified with `01-hero-initial-load-zero-fouc.png` capturing pure dark initial paint with JS disabled.
- **Hero Background Image — Subtle Shadow Overlay:**
  - Added dedicated `.hero__bg-shadow-overlay` inside the background image container.
  - Applied subtle architectural grading to `.hero__content-top-bg`: `filter: brightness(0.86) contrast(1.04) !important`.
  - Added a soft vignette overlay (`radial-gradient(circle at 65% 45%, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.28) 100%)` layered with `linear-gradient(rgba(8, 8, 12, 0.18), rgba(8, 8, 12, 0.35))`).
  - Preserved 100% luminosity on typography and the Shopify 3D model while giving the background refined cinematic depth.
- **Testimonials Section — Heading to Card Deck Gap Fix:**
  - Identified root cause of title overlapping active cards: `.portfolio__heading` had `top: 5.3125rem` (85px) in `webflow.css`, which was inherited when `position: relative` was applied to `.testimonials-heading`.
  - Overrode with `top: auto !important; bottom: auto !important; padding-top: 0 !important; padding-bottom: 0 !important; margin-bottom: clamp(32px, 4vh, 48px) !important;`.
  - Restored a crisp 40px vertical breathing room between heading and center card deck.
- **Testimonials Section — Compact Proportions (Bottom Void Elimination):**
  - Reduced `.testimonials-deck-card` height from `375px` to `285px`, eliminating the large ~140px empty black void at the bottom of shorter testimonials.
  - Reduced `.testimonials-orbital-wrapper` height to `300px`.
  - Recalibrated header padding (`16px 28px 12px`), avatar size (`56px`), pullquote font (`24px`, line-height `1.22`), and body text (`14.5px`, line-height `1.52`).
  - Re-anchored orbital side card tilts: left card at `rotate(-13deg) scale(0.78)` and right card at `rotate(13deg) scale(0.78)`.
  - The entire testimonial section fits cleanly within one viewport (780px) with zero scroll clipping.

---

## [Precision Fidelity Pass #19: "Who We Build For" Dynamic Morphing Text & Single-Screen Viewport Fit] - 2026-11-18

### Added & Refined
- **"Who We Build For" Interactive Dynamic Morphing Headline:**
  - Added dynamic word flip cycling in sync with the active category cards (`Agencies`, `SMEs & Scaleups`, `Startups`, `Enterprise`).
  - Animated with smooth vertical slide + blur-fade transitions matching the hero section headline.
- **Vertical Spacing Optimization (Who We Build For & What We Do):**
  - Removed excessive top/bottom margins and dead gaps between section headers and card grids.
  - Guaranteed full visibility of all active cards within a single 780px viewport without clipping bottom edges or action tags.

---

## [Precision Fidelity Pass #18: Testimonials 3D Orbital Carousel Redesign] - 2026-11-18

### Added & Refined
- **Orbital Perspective Testimonials Deck:**
  - Redesigned testimonials from a vertical stack to an expansive 3D horizontal orbital perspective carousel.
  - Active card centered with elevated glow; previous and next cards tilted on left and right orbital wings (`-13deg` / `+13deg`).
  - Single-screen fit ensuring full section visibility without requiring vertical page scroll.

---

## [Precision Fidelity Pass #17: Testimonials Scale & Avatar Face Framing] - 2026-11-18

### Added & Refined
- **Typography & Scale Adjustment:**
  - Scaled testimonial card container width and typography for clear legibility.
  - Adjusted avatar aspect-ratio and object-position to ensure human faces are centered and framed cleanly without cropping.

---

## [Precision Fidelity Pass #16: Adeeva Portfolio Card Removal & 3D Stacked Card Deck Testimonials Redesign] - 2026-11-18

### Added & Refined
- **Portfolio Section Adeeva Card Removal:**
  - Removed exclusively the Adeeva carousel card (`02-adeeva`) from the Portfolio carousel as directed.
  - Kept all remaining 9 portfolio brands intact in exact sequence (ALLMAX, Kilon'Gwan, GIMA, Bodhi Health, Finarkein, Hype Distribution, Digicio, Bridge Studio, Peddlers 30A) across both Next.js (`siteData.ts`, `PortfolioSection.tsx`) and static site (`Techforbs-New-Site/index.html`).
- **Complete Visual Redesign of Testimonials Section (Stacked 3D Card Deck):**
  - Built from scratch based on the user's uploaded visual reference (`media_1794983671175_c77a30fd.png`).
  - **3-Card Layered Fan Stack**:
    - Active front card: `rotate(0deg) scale(1)` with deep obsidian black background (`#090a0f`), 18px rounded radius, subtle metallic border (`1px solid rgba(255, 255, 255, 0.15)`), and elevation drop-shadow (`0 28px 60px rgba(0, 0, 0, 0.85)`).
    - 2nd card peeking underneath (+1): `translate3d(14px, 24px, 0) rotate(-2.8deg) scale(0.97)` with `opacity: 0.82` and subtle surface highlight.
    - 3rd card peeking deeper (+2): `translate3d(6px, 44px, 0) rotate(2.2deg) scale(0.94)` with `opacity: 0.55`.
    - Remaining cards smoothly positioned off-stage (`opacity: 0; pointer-events: none;`).
  - **Zone A (Header)**: Circular client avatar (58px), bold white author name (18px), muted company (15px), and exact slanted geometric quote emblem (`\ \ •` in `#9CA3AF`).
  - **Full-Width Hairline Divider**: Crisp 1px horizontal rule (`rgba(255, 255, 255, 0.12)`) spanning 100% of the card width.
  - **Zone B (Body Split)**:
    - Left column (`44%`): Large Editorial Serif pull-quote (`Georgia`, `29px`, line-height `1.15`, pure white typography with no vertical line).
    - Right column (`56%`): Full detailed quote in clean sans-serif (`Inter`, `14.5px`, line-height `1.58`, muted white/gray `rgba(255, 255, 255, 0.72)` in quotes).
  - **Bottom Pagination Bar**: Centered underneath with 1 active elongated pill (`36×6px`, white) and 5 inactive rounded dots (`8×6px`, `rgba(255, 255, 255, 0.28)`).
  - **Interactive Mechanics**: Click/tap advances card; drag/swipe gesture support; dot click jumps to specific card; auto-advance every 5.5s with pause on hover; keyboard arrow navigation.
  - **6 Authentic TechForbs Client Testimonials**:
    1. Dr. James Meschino (`Meschino Health`)
    2. Brad (`Allmax Nutrition`)
    3. Robert Whitehead (`Whitehead Consulting`)
    4. Adeeva Nutrition Team (`Adeeva Health`)
    5. GIMA Academy (`Global Integrative Medicine`)
    6. Bodhi Health (`Bodhi Health Inc.`)
- **Port & Verification**:
  - Live on `http://localhost:5500` with zero extraneous background ports.
  - Validated with Puppeteer visual QA across desktop and mobile viewports.

---

## [Precision Fidelity Pass #15: "Our Customers" Carousel Overhaul — 7 Unique Lifestyle/Brand Visuals & Normalized Sizing] - 2026-11-18

### Added & Refined
- **Replaced Recycled Mockups with Exactly 7 Unique Designer Visuals:**
  - Sourced all 7 brand-new full-bleed customer visuals from `F:\__TECHFORBS-web-Redesign\Website-Crausol-Images\Our-Customers-crausol-images`:
    1. **ALLMAX Nutrition**: `customer-01-allmax.webp` (athlete drinking from shaker in gym)
    2. **GLOBAL Integrative Medicine Academy (GIMA)**: `customer-02-gima.webp` (medical doctors & educators in scrubs with tablet)
    3. **BODHI Health Inc.**: `customer-03-bodhi-health.webp` (wellness woman in kitchen with health product)
    4. **Finarkein**: `customer-04-fintech.webp` (corporate executive with open-finance digital data tablet)
    5. **HYPE Distribution**: `customer-05-hype.webp` (modern high-capacity wholesale warehouse with pallets)
    6. **digicio**: `customer-06-digicio.webp` (modern tech workstations and digital innovation lab)
    7. **Kilon'Gwan**: `customer-07-kilongwan.webp` (lifestyle couple in premium lounge apparel)
  - Resized and compressed all 7 raw images (previously 70MB total) into high-fidelity 1092×930 Retina WebP and fallback JPEG formats (<700KB total carousel payload).
- **Auto-Trimmed & Normalized Logo Optical Sizing:**
  - Ingested all 7 customer logos from `F:\__TECHFORBS-web-Redesign\Website-Crausol-Images\Our-Customers-crausol-images-Logos`.
  - Processed with `sharp.trim()` to eliminate 100% of dead transparent margins (fixing Whitehead's microscopic text and Kilongwan's 66% dead vertical padding).
  - Enforced uniform optical container bounds (`.customers__item-logo-wrap` at `height: 48px`, `.customers__item-logo` at `max-height: 42px`, `max-width: 180px`).
  - Pre-rendered crisp white high-resolution PNG assets with subtle drop shadow (`filter: drop-shadow(0 2px 6px rgba(0,0,0,0.75))`), eliminating clunky gray capsules or mismatched badge styles, matching the CHE IT reference site.
- **Enhanced Card Overlay & Typography:**
  - Replaced shallow bottom overlay with seamless dual-zone gradient (`linear-gradient(180deg, rgba(8,8,12,0.35) 0%, rgba(8,8,12,0.05) 35%, rgba(8,8,12,0.70) 70%, rgba(8,8,12,0.95) 100%)`).
  - Verified 2–3 line customer description text at bottom-left in crisp white typography.
  - Fixed mobile title row non-breaking space between "people" and "we".
- **Synchronized Across Both Architectures:**
  - Updated `CUSTOMERS_CARDS` in `TechForbs-NextJS-Rewamp/src/data/siteData.ts`, `CustomersSection.tsx`, and `techforbs-theme.css`.
  - Mirrored identical card slides, assets, and styling into static site `Techforbs-New-Site/index.html` and `css/techforbs-theme.css`.
- **Live Verification on Port 5500:**
  - Rebuilt production bundle and validated on `http://localhost:5500` with Puppeteer.
  - Confirmed all 7 cards load with exact optical dimensions and crisp rendering on desktop and mobile viewports.

---

## [Precision Fidelity Pass #14: Hero Shadow Removal, Brighter 2880px Hero Background & 10 Designer Carousel Images Replacement] - 2026-11-18

### Added & Refined
- **Hero 3D Model Dark Shadow Complete Removal:**
  - Fully deleted `shadowMesh`, `createGroundShadow()`, contact ground shadow canvas layers, and radial gradient textures from `Hero3DCanvas.tsx`.
  - The 3D Shopify bag now floats cleanly and weightlessly in pure levitation over the architectural stage with zero dark/dirty shadow patch underneath.
- **Brighter Boosted Hero Architectural Background (`hero-2880-boosted.png`):**
  - Integrated the brighter, clean 2880×1101 architectural booster asset from `E:\__TECHFORBS-web-Redesign\scratch\hero-2880-boosted.png`.
  - Processed into high-fidelity WebP (`hero-section-image-extended.webp`), AVIF (`hero-section-image-extended.avif`), and PNG across both Next.js `public/images/hero/` and static `Techforbs-New-Site/images/hero/`.
  - Perfectly preserved the 60% Left (Editorial Typography) / 40% Right (Square Pedestal + 3D Model) layout with enhanced low-poly facet clarity and metallic pedestal finish.
- **Portfolio Carousel 10-Brand Designer Images Replacement:**
  - Sourced and imported all 10 brand-new designer showcase images from `F:\__TECHFORBS-web-Redesign\Website-Crausol-Images\NEW-website-crausol-images`:
    1. **ALLMAX Nutrition**: `01-allmax.webp` (from `ALLMAX.png`, 1080×1080)
    2. **Adeeva**: `02-adeeva.webp` (uniform 1080×1080 device mockup with soft `#f2f6f0` background)
    3. **Kilon'Gwan**: `03-kilongwan.webp` (from `kilongwan.png`, 1080×1080)
    4. **GLOBAL Integrative Medicine Academy (GIMA)**: `04-gima.webp` (from `global.png`, 1080×1080)
    5. **BODHI Health Inc.**: `05-bodhi-health.webp` (from `bodhi- #e8f4d1.png`, 1080×1080)
    6. **Finarkein**: `06-finarkein.webp` (from `finarkin 2.png`, 1080×1080)
    7. **HYPE Distribution**: `07-hype-distribution.webp` (from `hypedistribution  - #bcadd9.png`, 1080×1080)
    8. **digicio**: `08-digicio.webp` (from `digicio - #d6fff3.png`, 1080×1080)
    9. **BRIDGE STUDIO**: `09-bridge-studio.webp` (from `bridge studio - #dedede.png`, 1080×1080)
    10. **Peddlers 30A**: `10-peddlers-30a.webp` (from `peddlers 1.png`, 1080×1080)
  - Processed all assets to optimized WebP and PNG format in both `TechForbs-NextJS-Rewamp/public/images/portfolio/` and `Techforbs-New-Site/images/portfolio/`.
  - Maintained exact 1-to-10 brand sequence matching the brand logos strip.
  - Uniform card framing, 2.25rem asymmetric border-radius, smooth Swiper looping, and GSAP ScrollTrigger entrance animation.
- **Verification & Deployment:**
  - Verified on `http://localhost:5500` with desktop and mobile viewport checks.
  - Zero extraneous ports running in background.

---

## [Precision Fidelity Pass #13: Hero Vertical Centering, Autonomous Bobbing 3D Model, & Navbar Alignment] - 2026-11-17

### Added & Refined
- **Hero Vertical Alignment ("Top Centred" Composition & Blank Space Elimination):**
  - Eliminated the massive ~300px blank void between the navbar and the headline by reducing `.hero__content-top` excessive padding (`paddingTop: 4.25rem`, `paddingBottom: 1.5rem`, `minHeight: clamp(600px, 78vh, 780px)`).
  - Shifted `.hero-split-container` into the upper-middle focal zone (`margin-top: -5.5rem`), elevating both the headline and the 3D stage.
  - Balanced the extended background artwork focal position (`object-position: 78% 40%`) so the architectural square pedestal rises synchronously with the composition.
  - Scaled headline typography to bold, commanding dimensions (`clamp(3.8rem, 7.0vw, 7.2rem)`), ensuring the hero fills the viewport gracefully without feeling empty or pushed down to the bottom.
- **Autonomous Continuous Floating / Bobbing 3D Model (Non-Interactive):**
  - Removed user drag and pointer capture event listeners (`pointerdown`, `pointermove`, `pointerup`, `pointercancel`) from `Hero3DCanvas.tsx`; reset cursor to default.
  - Implemented smooth sinusoidal vertical bobbing (`floatCycle = now * 0.0018`, ~3.5s period) creating an organic levitation effect over the pedestal.
  - Added subtle floating pitch and roll dynamics (`rotation.x` and `rotation.z` micro-oscillations) combined with continuous gentle Y-axis rotation (`0.45 * delta`).
  - Synchronized the contact ground shadow geometry and opacity dynamically with the model's floating elevation (scales and breathes naturally).
- **3D Model Illumination & Brand Colors (Clean, Vibrant, Non-Dark):**
  - Replaced single harsh light with a balanced studio 3-point lighting setup:
    - Pure white ambient baseline (`intensity: 1.05`) to eliminate murky dark green crevices.
    - Key directional light (`intensity: 1.45`) from `(18, 40, 35)`.
    - Fill directional light (`intensity: 0.65`) from `(-25, 18, 25)`.
    - Top rim light (`intensity: 0.40`) to highlight bag handles and top edges.
  - Updated materials to authentic, vivid Shopify brand colors: `#95BF46` (body front), `#7CA836` (body sides), `#5E8E3E` (fold), and `#FFFFFF` (embossed 'S').
- **Navbar Realignment & Polish:**
  - **Logo Vertical Centering:** Updated `.header__inner`, `.header__logo`, and `.header__logo-image` with `display: flex; align-items: center; justify-content: space-between; height: 3.25rem`. The TechForbs logo is now 100% vertically centered (11.7px padding above and below), completely eliminating the issue where the logo touched the top border.
  - **Right-side Nav Container:** Reconciled `.header__nav-list` with the CHE IT reference design:
    - Added sleek `border-radius: 0.625rem` (10px smooth pill radius).
    - Applied translucent dark blur background (`rgba(18, 18, 20, 0.78)` + `backdrop-filter: blur(14px)`).
    - Styled with subtle boundary border `1px solid rgba(255, 255, 255, 0.12)` and soft shadow.
  - **"Let's Talk" CTA Button:** Styled with matching `border-radius: 0.625rem`, subtle translucent blue fill, and glowing hover state.
- **Verification & Server Status:**
  - Verified on `http://localhost:5500` across desktop and mobile viewports.
  - Zero extra background processes; running exclusively on port 5500.

---

## [Precision Fidelity Pass #12: Hero 60/40 Redesign & Left-Extended Stage Background] - 2026-11-17

### Added & Refined
- **Single-Target Task: Full Hero Section 60/40 Asymmetric Redesign:**
  - Removed outdated noisy, grainy background image and removed fake glowing "Shopify" text on the bottom stage faces.
  - Sourced authentic clean, matte-black architectural reference artwork from `hero-section-image.avif` (2136×1101).
  - Engineered seamless left-extended artwork (`hero-section-image-extended.avif`, `.webp`, `.png`) at 2880×1101 resolution:
    - Shifted the square architectural stage cleanly to the **Right 40% column** (~77%–78% X center).
    - Synthesized a seamless low-poly polygonal wall and dark floor continuation across the entire **Left 60% column** with 0% stage overlap and exact color/lighting continuity (`#08080a`–`#16161a`).
    - Maintained exact unbranded, matte-black pedestal geometry without horizontal stretching.
- **Left 60% Column Editorial Typography:**
  - Replaced center-split 3-column headline with a cohesive, left-aligned editorial statement:
    - Line 1: `Stores built`
    - Line 2: `to ` + kinetic rotating accent word (`sell.` → `scale.` → `convert.` → `win.`) in vibrant TechForbs cyan (`#00e5ff`).
  - Oversized bold Sora typography (`font-size: clamp(3.2rem, 6.2vw, 6.2rem)`), zero text wrap on longest word (`convert.`).
- **Right 40% Column 3D Model & Stage Vertical Alignment:**
  - Placed interactive Three.js 3D Shopify logo model in the Right 40% column directly centered over the square stage (`X = 78% ± 10px`).
  - Vertically positioned the 3D model and its contact ground shadow to hover naturally above the top surface of the pedestal.
  - Enabled smooth 360° horizontal drag rotation, controlled tilt, subtle idle resume, and non-blocking vertical scroll (`touch-action: pan-y`).
- **Responsive Stacking:**
  - Desktop (`>= 1024px`): Strict 60/40 side-by-side asymmetric split.
  - Mobile & Tablet (`< 992px`): Clean stacked layout with headline and supporting text on top, and 3D model centered over the square stage below (`object-position: 78% center`).
- **Server Deployment:**
  - Running on `http://localhost:5500` with all extra background ports terminated.

---

## [Precision Fidelity Pass #11: Portfolio Carousel 10 Designer Post Images & Exact 10-Brand Sequence Alignment] - 2026-11-17

### Added & Refined
- **Single-Target Task: Portfolio Carousel 10-Brand Expansion & Designer Post Graphics:**
  - Audited the designer images in `F:\__TECHFORBS-web-Redesign\Website-Crausol-Images\website crausol images` containing high-resolution 4:3 rectangular mockups.
  - Processed all assets into optimized 1600×1200 WebP format (~1.1MB total footprint across all 10 cards) maintaining full retina clarity without payload bloat.
  - Sourced authentic client mockups for missing brands (Slide 02: Adeeva, Slide 03: Kilon'Gwan) from authentic TechForbs assets to ensure a 100% complete 10-brand showcase.
  - Strictly aligned the portfolio sequence 1-to-10 with the Brand Logos section:
    1. **ALLMAX Nutrition**: High-Performance Sports Nutrition (`01-allmax.webp`)
    2. **Adeeva**: Evidence-Based Clinical Nutraceuticals (`02-adeeva.webp`)
    3. **Kilon'Gwan**: Premium Lifestyle Apparel (`03-kilongwan.webp`)
    4. **GLOBAL Integrative Medicine Academy (GIMA)**: Global Integrative Medicine Academy (`04-gima.webp`)
    5. **BODHI Health Inc.**: Precision Sublingual Technology (`05-bodhi-health.webp`)
    6. **Finarkein**: Open-Finance Data Ecosystem (`06-finarkein.webp`)
    7. **HYPE Distribution**: Digital Showroom & Wholesale (`07-hype-distribution.webp`)
    8. **digicio (Digital Innovation)**: Strategic Technology Innovation Partner (`08-digicio.webp`)
    9. **BRIDGE STUDIO**: Architecture & Spatial Design Portfolio (`09-bridge-studio.webp`)
    10. **Peddlers 30A**: Premier Coastal Bike Rentals & Retail (`10-peddlers-30a.webp`)
- **Card Geometry & Styling Normalization:**
  - Removed outdated SVG circle overlay (`case-bg.svg`) in `PortfolioCard.tsx` that previously clashed with designer mockup borders.
  - Standardized `.case-item-image` container styling to `border-top-right-radius: 2.25rem`, `overflow: hidden`, and `object-fit: cover; object-position: center` across all 10 cards.
  - Set `loading="eager"` and `decoding="async"` for seamless carousel scrolling without blank loading gaps.
  - Updated both Next.js app (`TechForbs-NextJS-Rewamp`) and static distribution (`Techforbs-New-Site/index.html`).
- **Codebase Rollback & White-Label Preservation:**
  - Preserved the new "White-label development" card and tab in Solutions / "What We Do" as the 6th sub-point, as requested, while discarding experimental hero modifications.
- **Verification & QA:**
  - Verified on `localhost:3000` across Desktop and Mobile viewports via Puppeteer automated testing suite. All 10 cards load with `naturalWidth: 1600`, `naturalHeight: 1200`, and proper aspect ratio.

---

## [Pass #17: Precision Fidelity Pass — Global UI Refinements + Technology Page Alignment + First Complete Services Page: AI & Automation] - 2026-11-03

### Added & Refined
- **Change 01: Finarkein Logo High-Contrast & Light-Green Hover:**
  - Upgraded Finarkein logo in brand logos strip under "WHO WE BUILD FOR" with high-contrast white brightness default (`filter: brightness(0) invert(1) drop-shadow(...)`).
  - Added smooth transition to subtle light-green tone (`#4ade80` / `#22c55e`) on hover. Preserved all other 9 brand logos in their established default states.
- **Change 02: What We Do "Check details" Button Removal:**
  - Cleaned up `SolutionsSection.tsx` by removing all "Check details" CTA buttons and their container (`.solutions__tabs-buttons`) from all 5 service categories while preserving titles, bullets, icons, and tab switching animations.
- **Change 03: Technology Page "Get guidance" CTA Enlargement (+15-20%):**
  - Enlarged "Get guidance" Hero CTA button across all 8 Technology pages (`padding: 1.05rem 2.4rem`, `font-size: 1.08rem`, `min-height: 52px`) with enhanced font prominence, hover lift, and glow, while strictly preserving `#contact-section` smooth scroll anchor.
- **Change 04: Technology Founder Composition Center-Alignment (Sunil Sir):**
  - Unified alignment of founder profile composition on all 8 Technology pages along a single vertical center axis: avatar image centered, name "Sunil Panchani" centered, designation "Founder & Director, TechForbs" centered, and "Contact" button centered across both sticky aside and footer CTA banner.
- **Change 05: Site-Wide Sentence-Case Headings (GET IN TOUCH in All Caps):**
  - Converted major headings across homepage, 8 technology pages, and the new service page to proper sentence case while preserving proper nouns (`AI`, `SEO`, `Shopify`, `TechForbs`, `FAQ`). Preserved `GET IN TOUCH` in ALL CAPS in Contact section.
- **Objective B: First Complete Services Page — AI & Automation (`/services/ai-automation`):**
  - Implemented the complete individual Services page matching local CHE IT reference source (`services/ai-automation.html`):
    - Hero section with title `AI & Automation = Faster Workflows → Higher ROI`, subtext, TechForbs cyan circle drawing animation (`#00e5ff`), and "Book a call" CTA.
    - Section 02: "What do our AI & automation services include?" with 4 core service cards (Workflow automation, AI in your workflows, Email & document processing, Ops for sales & support).
    - Section 03: "AI + automation: better together" 4-point architecture (From insights to action, Measurable impact, not hype, Secure by default, Human-in-the-loop).
    - Section 04: "How we build automations that work" 4-phase methodology (Discovery & mapping, Integration & setup, AI enhancement, Testing & handoff).
    - Section 05: "Winning with us: our clients' success" featuring authentic TechForbs portfolio work (SACLAB, TechHunt, HIVE).
    - Section 06: "Why teams choose TechForbs" with reliable communication, rapid iteration, and predictable delivery.
    - Section 07: "Enterprise AI automation architecture" technical standards and capabilities.
    - Section 08: "Technologies we use in AI & automation" ecosystem grid (Make, n8n, Python, Node.js, Next.js, React, Shopify, WooCommerce, PHP).
    - Section 09: "What our clients say… for real" authentic testimonials with interactive chat bubble UI.
    - Section 10: "Businesses we serve with AI & automation" tailored to Agencies, Startups, SMEs, and Enterprises.
    - Section 11 & 12: Centrally aligned Sunil Sir founder profile composition in sticky aside and footer CTA banner.
    - Section 13: AI & Automation FAQ with single-open accordion behavior.
    - Section 14: Shared TechForbs `ContactSection` with `GET IN TOUCH` in ALL CAPS.
- **Navigation Integration:**
  - Updated "AI & automation" link in Services dropdown in `Navbar.tsx` to point to `/services/ai-automation`.

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
