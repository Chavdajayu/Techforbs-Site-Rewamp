/**
 * TechForbs section component library.
 *
 * Every block of the home page is exported here as a self-contained,
 * drop-in component. Build a new page by composing these instead of copying
 * markup — a copy drifts, these do not.
 *
 *   import { Navbar, HeroSection, ContactSection, Footer, SmoothScroll } from "@/components";
 *
 * Each section owns its own markup, styling hooks and GSAP timeline, and all
 * of its props are optional: rendered bare, it is identical to the home page.
 * See ./README.md for the catalogue and the per-section props.
 */

// --- Page chrome -----------------------------------------------------------
export { default as Navbar } from "./navigation/Navbar";
export type { NavbarProps } from "./navigation/Navbar";

export { default as Footer } from "./footer/Footer";
export type { FooterProps } from "./footer/Footer";

export { default as SmoothScroll } from "./smooth-scroll/SmoothScroll";

// --- Home sections, in page order ------------------------------------------
export { default as HeroSection } from "./hero/HeroSection";
export type { HeroSectionProps } from "./hero/HeroSection";

export { default as WhoWeBuildFor } from "./who-we-build-for/WhoWeBuildFor";
export type { WhoWeBuildForProps } from "./who-we-build-for/WhoWeBuildFor";

export { default as BrandLogos } from "./brand-logos/BrandLogos";
export type { BrandLogosProps } from "./brand-logos/BrandLogos";

export { default as CustomersSection } from "./customers/CustomersSection";
export type { CustomersSectionProps } from "./customers/CustomersSection";

export { default as SolutionsSection } from "./solutions/SolutionsSection";
export type { SolutionsSectionProps } from "./solutions/SolutionsSection";

export { default as PortfolioSection } from "./portfolio/PortfolioSection";
export type { PortfolioSectionProps } from "./portfolio/PortfolioSection";

export { default as PortfolioCard } from "./portfolio/PortfolioCard";
export type { PortfolioCardProps } from "./portfolio/PortfolioCard";

export { default as PortfolioCases } from "./portfolio/PortfolioCases";
export type { PortfolioCasesProps } from "./portfolio/PortfolioCases";

export { default as TestimonialsSection } from "./testimonials/TestimonialsSection";
export type { TestimonialsSectionProps } from "./testimonials/TestimonialsSection";

export { default as TeamSection } from "./team/TeamSection";
export type { TeamSectionProps } from "./team/TeamSection";

export { default as ContactSection } from "./contact/ContactSection";
export type { ContactSectionProps } from "./contact/ContactSection";

// --- Inner-page sections ---------------------------------------------------
// Blocks used by the technology and service pages rather than the home page.
export { default as TechEcosystem } from "./technologies/TechEcosystem";
export type { TechEcosystemProps } from "./technologies/TechEcosystem";

// --- Page-level animation bootstrappers ------------------------------------
// These drive the shared Webflow-style classes (.fade-up-alt, .title-circle,
// .faq-item, ...) used by the technology and service page bodies. They are NOT
// needed by the sections above, which each own their animations.
export { default as TechClientInteractions } from "./technologies/TechClientInteractions";
export { default as AIAutomationClientInteractions } from "./services/AIAutomationClientInteractions";

// --- Shared contracts ------------------------------------------------------
export { cx } from "./types";
export type { SectionBaseProps } from "./types";
