# TechForbs section component library

Every block of the home page lives here as a **self-contained, drop-in
component**. To build a new page, compose these — never copy the markup.
A copy drifts: the classes survive, the GSAP timings quietly do not.

```tsx
import { Navbar, HeroSection, PortfolioSection, ContactSection, Footer, SmoothScroll } from "@/components";

export default function AboutPage() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#101010] text-white selection:bg-[#00e5ff] selection:text-black">
        <Navbar />
        <main className="relative z-10 flex flex-col">
          <PortfolioSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
```

## The rules

1. **Every prop is optional.** A section rendered bare (`<PortfolioSection />`)
   produces byte-for-byte the same DOM — and runs the same timeline — as it
   does on the home page. This is verified: the prerendered HTML of all pages
   is identical before and after this library was extracted.
2. **Each section owns its animation.** The GSAP context is scoped to the
   section's own root element, so a section animates correctly wherever it is
   placed, and two instances on one page do not fight. No page-level setup is
   required beyond `SmoothScroll`.
3. **`SmoothScroll` wraps the page, once.** It starts Lenis and wires it into
   `ScrollTrigger`. Without it the sections still work, but scrolling is
   native and ScrollTrigger positions are not synced.
4. **Content lives in `src/data/siteData.ts`.** Sections read their defaults
   from there. Edit the data to change the site; pass props to vary one page.
5. **Pass a unique `id` if you use a section twice in one document.** The
   default id is the home-page one, which the in-page anchors point at.

## Catalogue

Listed in home-page order. All accept `id` and `className`
(`SectionBaseProps`) unless noted.

| Component | Default `id` | Content props | Animation |
|---|---|---|---|
| `Navbar` | — (`className` only) | — | Entrance driven by `HeroSection`; Escape closes menus |
| `HeroSection` | none | `words`, `srHeadline`, `backgroundImage`, `backgroundAlt`, `supportingText`, `ctaHref`, `animateHeader` | 2.3s intro timeline: header, 3D stage bloom, gradient, headline rows, text, button |
| `WhoWeBuildFor` | `build-for-section` | `label`, `title`, `description`, `cards` | Cards rise 50px, 0.16s stagger, at 75% |
| `BrandLogos` | `brands-section` | `logos` | Grid items rise 25px, 0.06s stagger, at 80% |
| `CustomersSection` | `customers-section` | `label`, `cards` | Heading strikethrough grows 0→100% at 75%; arrow-driven Swiper |
| `SolutionsSection` | `solutions-section` | `label`, `title`, `solutions` | Inner block rises 35px at 80%, then `ScrollTrigger.refresh()` |
| `PortfolioSection` | `portfolio-section` | `label`, `items` | Circle SVG self-draws 1.2s; cards rise, 0.1s stagger; autoplay Swiper (3.5s, pause on hover) |
| `TestimonialsSection` | `testimonials-section` | `label`, `title`, `testimonials` | Cards rise 60px, 0.12s stagger, at 78%; chat bubbles pop in per active slide |
| `TeamSection` | `team-section` | `label`, `headingPrefix`, `headingHighlight`, `caption`, `quote` | Heading reveal, circle self-draw, photo grid cycles layout states (desktop only) |
| `ContactSection` | `contact-section` | `label`, `fieldIdPrefix`, `onSubmit` | Columns rise 35px, 0.15s stagger, at 80%; reverses on scroll out |
| `Footer` | — (`className` only) | — | None |

## Inner-page sections

Blocks used by the technology and service pages rather than the home page.

| Component | Default `id` | Content props | Notes |
|---|---|---|---|
| `PortfolioCases` | `why-we` | `title`, `items`, `portfolioHref`, `viewAllLabel` | "Winning with us" carousel. Same `PortfolioCard` as the home portfolio, in the services-page `cases-wrap` shell with arrows and a "View all" button |
| `TechEcosystem` | `ecosystem` | `title`, `colorWordsIndex`, `items` (required) | "Technologies we use" logo carousel: 4 tiles per view on desktop, 3 on tablet, 2 on phones |
| `PortfolioCard` | — | `item`, `href` | The single `case-item` card definition shared by `PortfolioSection` and `PortfolioCases`. Use it rather than writing card markup |

> **Why `TechEcosystem` runs a real Swiper.** The Webflow markup styles
> `.tech-ecosystem-grid` as a CSS grid, but Swiper's stylesheet
> (`.swiper-wrapper{display:flex}` / `.swiper-slide{width:100%}`) is loaded
> after it and wins. Without Swiper actually running, the grid collapses to a
> single full-width tile. The technology pages still carry the raw markup and
> show that collapse — migrate them to this component to fix it.

Also exported: `SmoothScroll`, and the two page-level animation
bootstrappers `TechClientInteractions` / `AIAutomationClientInteractions`,
which drive the shared Webflow classes (`.fade-up-alt`, `.title-circle`,
`.faq-item`, …) used by the technology and service page **bodies**. The
sections above do not need them.

## Varying a section on a new page

Same design and animation, different content:

```tsx
import { PortfolioSection, type PortfolioSectionProps } from "@/components";
import { PORTFOLIO_DATA } from "@/data/siteData";

<PortfolioSection
  id="shopify-portfolio"
  label="Shopify work"
  items={PORTFOLIO_DATA.filter((p) => p.industry.includes("E-Commerce"))}
/>
```

Two instances in one document — give each its own `id` (and, for the contact
form, its own `fieldIdPrefix`):

```tsx
<ContactSection />
<ContactSection id="contact-footer" fieldIdPrefix="contact-footer" />
```

## Adding a new section

Put it in `src/components/<kebab-name>/<PascalName>.tsx` and follow the
existing shape:

- `"use client"` at the top if it animates or holds state.
- `export interface <Name>Props extends SectionBaseProps` with every prop optional.
- A `sectionRef`, and `gsap.context(() => { … }, sectionRef)` so selectors stay scoped.
- Bail out early on `prefers-reduced-motion`, and `ctx.revert()` on unmount.
- `id={id}` and `className={cx("<base-classes>", className)}`.
- Default content in `src/data/siteData.ts`, not inline.
- Export it from `src/components/index.ts` and add a row to the table above.
