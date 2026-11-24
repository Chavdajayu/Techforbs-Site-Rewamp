import type { Metadata } from "next";
import {
  Navbar,
  BrandLogos,
  ContactSection,
  Footer,
  SmoothScroll,
  ServiceClientInteractions,
  PortfolioCases,
  TechEcosystem,
  TestimonialsSection,
} from "@/components";
import { UI_UX_DESIGN_ECOSYSTEM } from "@/data/siteData";

export const metadata: Metadata = {
  title: "UI/UX & Web Design Services | High-Converting Interfaces - TechForbs",
  description: "Design intuitive digital products, responsive web apps, and design systems crafted for high conversion rates, user delight, and seamless developer handoff by TechForbs.",
  keywords: ["UI/UX design", "Web design", "Figma design systems", "product design", "conversion rate optimization", "TechForbs design"],
};

export default function UIUXDesignPage() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#101010] text-white selection:bg-[#00e5ff] selection:text-black">
        <Navbar />
        <ServiceClientInteractions />

        <main className="relative z-10 flex flex-col">
          {/* =================================================================
              01. HERO SECTION
              ================================================================= */}
          <section className="services-hero">
            <div className="tech-hero-gradient"></div>
            <div className="service-hero-inner">
              <img
                src="/images/services/ui-ux-design/ui-ux-hero.webp"
                loading="eager"
                alt="Service Hero Background"
                className="service-hero-bg"
              />
              <img
                src="/images/services/ui-ux-design/hero-decor.svg"
                loading="lazy"
                alt=""
                className="service-hero-inner-decor"
              />
              <div className="service-hero__content width-42">
                <div className="fade-up-alt">
                  <div className="services-hero-title-wrap">
                    <div
                      data-wf--title-circle--variant="base"
                      className="title-circle service-hero_circle w-embed"
                    >
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 453 89"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M316.771 87C405.472 79.7966 451 58.571 451 43.7797C451 20.7054 350.488 2 226.5 2C102.512 2 2.00001 20.7054 2.00001 43.7797C2.00001 66.8539 102.512 85.5593 226.5 85.5593C268.367 85.5593 324.621 81.9576 362.299 71.8729"
                          stroke="#00e5ff"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <h1
                      circle-width="27"
                      text-split=""
                      lines-slide-up=""
                      circle-index="0"
                      className="service-hero-title"
                    >
                      Web design that looks great and works even better
                    </h1>
                  </div>
                  <div className="service-hero__content-text">
                    Research-driven, conversion-focused, and dev-ready. From wireframes and prototypes to polished interfaces and design systems your team can scale.
                  </div>
                  <div className="button-wrap on-service-page">
                    <a href="#contact-section" className="button">
                      Book a call
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* =================================================================
              MAIN CONTENT WRAPPER: 2-COLUMN SPLIT LAYOUT (CONTENT + STICKY ASIDE)
              ================================================================= */}
          <main className="tech-main padding-top-112 pb-0">
            <div className="tech-main-inner services-pages">
              <div className="tech-content tab-mw-100">
                <section id="solutions" className="tech-customize">
                  <h2
                    color-word="#00e5ff"
                    text-split=""
                    lines-slide-up=""
                    color-words-index="0,1,2"
                    className="tech-section-title mb-60"
                  >
                    What do our design services include?
                  </h2>
                  <div className="text-block is-gray margin-bottom-50">
                    Design that transforms complex user workflows into intuitive, engaging, and high-converting interfaces.
                  </div>
                  <div className="w-dyn-list">
                    <div role="list" className="tech-service-cards w-dyn-items">
                      <div role="listitem" className="w-dyn-item">
                        <div className="tech-service-card">
                          <div className="tech-services-card-bg is-first"></div>
                          <div className="tech-service-card-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>
                          </div>
                          <div className="tech-service-card-caption">
                            <h3 className="tech-service-item-title">
                              Product & SaaS interface design
                            </h3>
                            <p className="text-body in-tech-service-card">
                              Complex dashboard interfaces, data visualizations, and multi-step workflows simplified into clean, user-centric experiences.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <div className="tech-service-card">
                          <div className="tech-services-card-bg is-first"></div>
                          <div className="tech-service-card-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                          </div>
                          <div className="tech-service-card-caption">
                            <h3 className="tech-service-item-title">
                              Design systems & component libraries
                            </h3>
                            <p className="text-body in-tech-service-card">
                              Scalable Figma design tokens, atomic UI components, and accessible color palettes that keep your product cohesive as it grows.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <div className="tech-service-card">
                          <div className="tech-services-card-bg is-first"></div>
                          <div className="tech-service-card-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                          </div>
                          <div className="tech-service-card-caption">
                            <h3 className="tech-service-item-title">
                              Conversion rate optimization (CRO)
                            </h3>
                            <p className="text-body in-tech-service-card">
                              User research, heatmaps, and funnel auditing that pinpoint drop-offs and redesign checkout or onboarding journeys for higher conversion.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <div className="tech-service-card">
                          <div className="tech-services-card-bg is-first"></div>
                          <div className="tech-service-card-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                          </div>
                          <div className="tech-service-card-caption">
                            <h3 className="tech-service-item-title">
                              Pixel-perfect developer handoff
                            </h3>
                            <p className="text-body in-tech-service-card">
                              Auto-layout Figma files with comprehensive spacing specs, responsive breakpoints, interaction states, and exported SVG assets.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="services" className="tech-services">
                  <h2
                    color-word="#00e5ff"
                    text-split=""
                    lines-slide-up=""
                    color-words-index="3,4"
                    className="tech-section-title mb-60"
                  >
                    Design that drives measurable business growth
                  </h2>
                  <div className="text-block is-gray margin-bottom-50">
                    We bridge aesthetic beauty with cognitive science and business metrics.
                  </div>
                  <ul role="list" className="tech-service-list is-2-grid">
                    <li className="tech-service-item fade-up-alt">
                      <div className="tech-service-item-icon w-embed">
                        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="8" width="28" height="24" rx="3" stroke="#00e5ff" strokeWidth="2.5" /><line x1="6" y1="16" x2="34" y2="16" stroke="#00e5ff" strokeWidth="2.5" /></svg>
                      </div>
                      <div className="service-service-item-caption">
                        <h3 className="tech-service-item-title">User-tested wireframes</h3>
                        <p className="text-body">
                          Rapid low-fidelity validation to confirm user journeys, architecture hierarchy, and interaction mechanics before visual styling.
                        </p>
                      </div>
                    </li>
                    <li className="tech-service-item fade-up-alt">
                      <div className="tech-service-item-icon w-embed">
                        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="16" stroke="#00e5ff" strokeWidth="3" /><circle cx="20" cy="14" r="3" fill="#00e5ff" /><path d="M12 20h16M20 20v10" stroke="#00e5ff" strokeWidth="2.5" /></svg>
                      </div>
                      <div className="service-service-item-caption">
                        <h3 className="tech-service-item-title">WCAG AA accessibility</h3>
                        <p className="text-body">
                          Contrast-compliant colors, screen-reader friendly typography scales, and keyboard accessible focus states.
                        </p>
                      </div>
                    </li>
                    <li className="tech-service-item fade-up-alt">
                      <div className="tech-service-item-icon w-embed">
                        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><polyline points="12 16 6 20 12 24" stroke="#00e5ff" strokeWidth="2.5" /><polyline points="28 16 34 20 28 24" stroke="#00e5ff" strokeWidth="2.5" /><line x1="22" y1="12" x2="18" y2="28" stroke="#00e5ff" strokeWidth="2.5" /></svg>
                      </div>
                      <div className="service-service-item-caption">
                        <h3 className="tech-service-item-title">Design tokens for dev speed</h3>
                        <p className="text-body">
                          Design variables mapped directly to Tailwind CSS or CSS variables, enabling engineering teams to implement designs 2x faster.
                        </p>
                      </div>
                    </li>
                    <li className="tech-service-item fade-up-alt">
                      <div className="tech-service-item-icon w-embed">
                        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><polygon points="20 4 24 14 34 16 26 23 28 34 20 28 12 34 14 23 6 16 16 14 20 4" stroke="#00e5ff" strokeWidth="2.5" /></svg>
                      </div>
                      <div className="service-service-item-caption">
                        <h3 className="tech-service-item-title">Micro-interactions & animations</h3>
                        <p className="text-body">
                          Subtle motion choreography that guides user attention, provides clear feedback, and elevates perceived brand polish.
                        </p>
                      </div>
                    </li>
                  </ul>
                </section>

                <section id="services" className="tech-services">
                  <h2
                    color-word="#00e5ff"
                    text-split=""
                    lines-slide-up=""
                    color-words-index="3,4,5"
                    className="tech-section-title mb-60"
                  >
                    How we design digital products
                  </h2>
                  <ul role="list" className="tech-service-list">
                    <li className="tech-service-item fade-up-alt">
                      <div className="tech-service-item-icon w-embed">
                        <svg viewBox="0 0 30 30" fill="none" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="15" cy="15" r="13" stroke="#00e5ff" strokeWidth="2" />
                          <path d="M10 15l3.5 3.5L20 11" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </div>
                      <div className="service-service-item-caption">
                        <h3 className="tech-service-item-title">User research & product discovery</h3>
                        <p className="text-body">
                          Stakeholder interviews, competitor benchmarking, and user persona mapping to establish clear product goals.
                        </p>
                      </div>
                    </li>
                    <li className="tech-service-item fade-up-alt">
                      <div className="tech-service-item-icon w-embed">
                        <svg viewBox="0 0 30 30" fill="none" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="15" cy="15" r="13" stroke="#00e5ff" strokeWidth="2" />
                          <path d="M10 15l3.5 3.5L20 11" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </div>
                      <div className="service-service-item-caption">
                        <h3 className="tech-service-item-title">Wireframing & user flow validation</h3>
                        <p className="text-body">
                          Iterative low-fidelity wireframes mapped to core conversion funnels, tested and aligned with your team.
                        </p>
                      </div>
                    </li>
                    <li className="tech-service-item fade-up-alt">
                      <div className="tech-service-item-icon w-embed">
                        <svg viewBox="0 0 30 30" fill="none" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="15" cy="15" r="13" stroke="#00e5ff" strokeWidth="2" />
                          <path d="M10 15l3.5 3.5L20 11" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </div>
                      <div className="service-service-item-caption">
                        <h3 className="tech-service-item-title">High-fidelity visual design & UI polish</h3>
                        <p className="text-body">
                          Modern typography, bespoke iconography, responsive layout variations, and dark/light mode specifications in Figma.
                        </p>
                      </div>
                    </li>
                    <li className="tech-service-item fade-up-alt">
                      <div className="tech-service-item-icon w-embed">
                        <svg viewBox="0 0 30 30" fill="none" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="15" cy="15" r="13" stroke="#00e5ff" strokeWidth="2" />
                          <path d="M10 15l3.5 3.5L20 11" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </div>
                      <div className="service-service-item-caption">
                        <h3 className="tech-service-item-title">Interactive prototyping & developer handoff</h3>
                        <p className="text-body">
                          Clickable prototypes for stakeholder sign-off and dev-ready component documentation with zero ambiguity.
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div className="tech-benefits-buttons fade-up-alt">
                    <a href="#contact-section" className="button button_smaller">
                      Book a call
                    </a>
                  </div>
                </section>

                {/* =============================================================
                    WINNING WITH US: OUR CLIENTS' SUCCESS (PORTFOLIO CASES)
                    ============================================================= */}
                <PortfolioCases />

                {/* =============================================================
                    WHY TEAMS CHOOSE TECHFORBS (NO UKRAINIAN HOODIE PHOTO GRID)
                    ============================================================= */}
                <section id="services" className="tech-services">
                  <h2
                    color-word="#00e5ff"
                    text-split=""
                    lines-slide-up=""
                    color-words-index="3,4"
                    className="tech-section-title mb-60"
                  >
                    Why teams choose TechForbs
                  </h2>
                  <ul role="list" className="tech-service-list">
                    <li className="tech-service-item fade-up-alt">
                      <div className="tech-service-item-icon is-large w-embed">
                        <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="0.5" y="0.5" width="47" height="47" rx="13" stroke="#00e5ff" strokeWidth="1" strokeOpacity="0.4" />
                          <path d="M22 26l-6-6 6-6M26 26l6-6-6-6" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </div>
                      <div className="service-service-item-caption">
                        <h3 className="tech-service-item-title">Communication you can rely on</h3>
                        <p className="text-body">
                          Direct Slack channels, rapid response cadences, structured weekly reviews, and clear
                          documentation for every sprint so your team always knows what was shipped.
                        </p>
                      </div>
                    </li>

                    <li className="tech-service-item fade-up-alt">
                      <div className="tech-service-item-icon is-large w-embed">
                        <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="0.5" y="0.5" width="47" height="47" rx="13" stroke="#00e5ff" strokeWidth="1" strokeOpacity="0.4" />
                          <circle cx="24" cy="24" r="10" stroke="#00e5ff" strokeWidth="2" />
                          <path d="M24 18v6l4 2" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </div>
                      <div className="service-service-item-caption">
                        <h3 className="tech-service-item-title">Speed without chaos</h3>
                        <p className="text-body">
                          We iterate rapidly through modular components. You receive functional,
                          tested prototypes within days, not months of theoretical architecture discussions.
                        </p>
                      </div>
                    </li>

                    <li className="tech-service-item fade-up-alt">
                      <div className="tech-service-item-icon is-large w-embed">
                        <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="0.5" y="0.5" width="47" height="47" rx="13" stroke="#00e5ff" strokeWidth="1" strokeOpacity="0.4" />
                          <path d="M16 24l5 5 11-11" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div className="service-service-item-caption">
                        <h3 className="tech-service-item-title">Predictable &amp; secure delivery</h3>
                        <p className="text-body">
                          Every deliverable is built with explicit rollback provisions, end-to-end logging,
                          and strict adherence to enterprise security guidelines.
                        </p>
                      </div>
                    </li>
                  </ul>
                </section>

                <section className="tech-sertificate">
                  <h2
                    color-word="#00e5ff"
                    text-split=""
                    lines-slide-up=""
                    color-words-index="1"
                    className="tech-section-title"
                  >
                    Enterprise design system standards
                  </h2>
                  <div className="text-body">
                    We engineer scalable design systems and token architectures aligned with enterprise development practices.
                  </div>
                  <div className="w-layout-grid tech_3col">
                    <div className="tech_sertificate_item">
                      <div className="tech_sertificate_point">
                        <div className="tech_sertificate_dot"></div>
                        <div className="tech_sertificate_text">
                          Atomic component libraries with Figma variables & tokens
                        </div>
                      </div>
                      <div className="tech_sertificate_point">
                        <div className="tech_sertificate_dot"></div>
                        <div className="tech_sertificate_text">
                          WCAG 2.1 AA accessible color systems & readable typography
                        </div>
                      </div>
                      <div className="tech_sertificate_point">
                        <div className="tech_sertificate_dot"></div>
                        <div className="tech_sertificate_text">
                          Interactive prototypes for real user validation
                        </div>
                      </div>
                    </div>

                    <div className="tech_sertificate_img flex items-center justify-center p-4">
                      <div className="w-32 h-32 rounded-2xl bg-[#141414] border border-[#00e5ff]/30 flex flex-col items-center justify-center p-4 shadow-[0_0_30px_rgba(0,229,255,0.15)]">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                          <line x1="8" y1="21" x2="16" y2="21"></line>
                          <line x1="12" y1="17" x2="12" y2="21"></line>
                        </svg>
                        <span className="text-xs uppercase tracking-wider font-semibold text-[#00e5ff] mt-2">Enterprise Design</span>
                      </div>
                    </div>

                    <div className="tech_sertificate_item">
                      <div className="tech_sertificate_point">
                        <div className="tech_sertificate_dot"></div>
                        <div className="tech_sertificate_text">
                          Auto-layout flexbox alignment for 1:1 React handoff
                        </div>
                      </div>
                      <div className="tech_sertificate_point">
                        <div className="tech_sertificate_dot"></div>
                        <div className="tech_sertificate_text">
                          Zero-friction developer documentation with exported assets
                        </div>
                      </div>
                    </div>
                  </div>
                  <a href="#contact-section" className="button button_smaller">
                    Explore solutions
                  </a>
                </section>

                {/* =============================================================
                    TECHNOLOGIES WE USE
                    ============================================================= */}
                <TechEcosystem
                  title="Technologies we use in design"
                  items={UI_UX_DESIGN_ECOSYSTEM}
                />
              </div>

              {/* ASIDE STICKY: FOUNDER PROFILE (SUNIL PANCHANI) - CENTER-RIGHT DOCKED */}
              <aside className="tech-aside mobile-fixed is-sticky">
                <div className="fade-up-alt_desktop">
                  <div className="cta-bn__ceo">
                    <div className="hide-mob-landscape">
                      <div className="cta-bn__img">
                        <img
                          src="/images/technologies/sunil-panchani-director.jpg"
                          loading="lazy"
                          alt="Sunil Panchani photo, Founder & Director of TechForbs"
                          className="img_cover"
                        />
                      </div>
                      <div className="cta-bn__content">
                        <div className="cta-bn__name">Sunil Panchani</div>
                        <div className="cta-bn__position">Founder &amp; Director, TechForbs</div>
                      </div>
                    </div>
                    <a
                      href="#contact-section"
                      className="button button_smaller button_red cta-btn-contact"
                    >
                      <strong>Contact</strong>
                    </a>
                  </div>
                </div>
              </aside>
            </div>

            {/* =================================================================
                FULL-WIDTH TESTIMONIALS SECTION (COVERS WHOLE SCREEN WIDTH)
                ================================================================= */}
            <div className="w-full relative z-10 overflow-hidden">
              <TestimonialsSection
                className="is-services-page full-width-testimonials"
                title="What our clients say… for real"
                label="TESTIMONIALS"
              />
            </div>

            {/* =================================================================
                BAND 3: LOWER SPLIT LAYOUT (BUSINESSES WE SERVE + FOUNDER PROFILE)
                ================================================================= */}
            <div className="tech-main-inner services-pages">
              <div className="tech-content tab-mw-100">
                <section id="solutions" className="tech-customize">
                  <h2
                    color-word="#00e5ff"
                    text-split=""
                    lines-slide-up=""
                    color-words-index="0,1,2"
                    className="tech-section-title mb-60"
                  >
                    Businesses we serve with web design
                  </h2>

                  <div className="w-dyn-list">
                    <div role="list" className="tech-service-cards w-dyn-items">
                      <div role="listitem" className="w-dyn-item">
                        <div className="tech-service-card">
                          <div className="tech-services-card-bg is-first"></div>
                          <div className="tech-service-card-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                          </div>
                          <div className="tech-service-card-caption">
                            <h3 className="tech-service-item-title">
                              Agencies
                            </h3>
                            <p className="text-body in-tech-service-card">
                              White-label technical delivery with reliable sprint updates. We adapt seamlessly to your stack, tools, and brand so collaboration feels completely in-house minus the overhead.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <div className="tech-service-card">
                          <div className="tech-services-card-bg is-first"></div>
                          <div className="tech-service-card-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                          </div>
                          <div className="tech-service-card-caption">
                            <h3 className="tech-service-item-title">
                              Startups
                            </h3>
                            <p className="text-body in-tech-service-card">
                              Rapid MVP builds and technical velocity in weeks. Fast learnings, scalable foundation, and robust architectures engineered to scale without having to rebuild when funding arrives.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <div className="tech-service-card">
                          <div className="tech-services-card-bg is-first"></div>
                          <div className="tech-service-card-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                          </div>
                          <div className="tech-service-card-caption">
                            <h3 className="tech-service-item-title">
                              SMEs
                            </h3>
                            <p className="text-body in-tech-service-card">
                              Redesign, modernize, and integrate your core systems. Connect high-traffic customer portals with CRM and ERP backbones without disrupting daily business operations.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <div className="tech-service-card">
                          <div className="tech-services-card-bg is-first"></div>
                          <div className="tech-service-card-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                          </div>
                          <div className="tech-service-card-caption">
                            <h3 className="tech-service-item-title">
                              Enterprises
                            </h3>
                            <p className="text-body in-tech-service-card">
                              Enterprise-grade governance, strict SOC 2 aligned security policies, role-based access control (RBAC), and robust data pipelines designed for global compliance.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              {/* ASIDE STICKY: FOUNDER PROFILE (SUNIL PANCHANI) - CENTER-RIGHT DOCKED */}
              <aside className="tech-aside mobile-fixed is-sticky">
                <div className="fade-up-alt_desktop">
                  <div className="cta-bn__ceo">
                    <div className="hide-mob-landscape">
                      <div className="cta-bn__img">
                        <img
                          src="/images/technologies/sunil-panchani-director.jpg"
                          loading="lazy"
                          alt="Sunil Panchani photo, Founder & Director of TechForbs"
                          className="img_cover"
                        />
                      </div>
                      <div className="cta-bn__content">
                        <div className="cta-bn__name">Sunil Panchani</div>
                        <div className="cta-bn__position">Founder &amp; Director, TechForbs</div>
                      </div>
                    </div>
                    <a
                      href="#contact-section"
                      className="button button_smaller button_red cta-btn-contact"
                    >
                      <strong>Contact</strong>
                    </a>
                  </div>
                </div>
              </aside>
            </div>

            {/* =================================================================
                BRAND LOGOS SECTION (TRUSTED BY INDUSTRY LEADERS)
                ================================================================= */}
            <BrandLogos />

            {/* =================================================================
                CTA BANNER (CHOOSE A TECH PARTNER)
                ================================================================= */}
            <div className="tech-main-inner-wider v2">
              <div className="w100">
                <div className="fade-up-alt">
                  <div className="cta-banner">
                    <div className="cta-banner-caption">
                      <h3
                        color-word="#00e5ff"
                        text-split=""
                        lines-slide-up=""
                        color-words-index="5,6,7,8"
                        className="cta-banner-title"
                      >
                        Choose a tech partner that challenges, guides, and delivers
                      </h3>
                    </div>
                    <div className="cta-banner-right">
                      <div className="fade-up-alt">
                        <div className="cta-bn__ceo">
                          <div className="cta-bn__img">
                            <img
                              src="/images/technologies/sunil-panchani-director.jpg"
                              loading="lazy"
                              alt="Sunil Panchani photo, Founder & Director of TechForbs"
                              className="img_cover"
                            />
                          </div>
                          <div className="cta-bn__content">
                            <h4 className="cta-bn__name">Sunil Panchani</h4>
                            <p className="cta-bn__position">Founder &amp; Director, TechForbs</p>
                          </div>
                          <div className="cta-banner-person-buttons">
                            <a href="#contact-section" className="button button_smaller button_red">
                              Contact
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="tech-main-inner is-faq-centered margin-bottom-7-5 overflow-hidden">
              <div className="tech-content" style={{ maxWidth: "880px", margin: "0 auto", width: "100%" }}>
                <section id="faq" className="tech-faq" style={{ textAlign: "center" }}>
                  <h2 lines-slide-up="" text-split="" className="tech-section-title mb-60" style={{ textAlign: "center" }}>
                    Frequently asked questions (FAQ)
                  </h2>
                  <div className="w-dyn-list" style={{ textAlign: "left" }}>
                    <div
                      itemType="https://schema.org/FAQPage"
                      itemScope
                      role="list"
                      className="faq w-dyn-items"
                    >
                      <div role="listitem" className="fade-up-alt w-dyn-item">
                        <div
                          data-hover="false"
                          data-delay="0"
                          itemProp="mainEntity"
                          itemScope
                          itemType="https://schema.org/Question"
                          className="faq-item w-dropdown"
                        >
                          <div className="faq-item-header w-dropdown-toggle">
                            <div className="faq-item-header-icon">
                              <div className="faq-item-header-icon-line"></div>
                              <div className="faq-item-header-icon-line rotated"></div>
                            </div>
                            <div itemProp="name">What deliverables do we receive at the end of a design project?</div>
                          </div>
                          <nav className="faq-item-header-dropdown w-dropdown-list">
                            <div
                              itemProp="acceptedAnswer"
                              itemScope
                              itemType="https://schema.org/Answer"
                              className="faq-item-header-dropdown-inner"
                            >
                              <div itemProp="text" className="w-richtext">
                                <p>You receive organized, fully auto-layout Figma source files, a comprehensive component design system with tokens, interactive prototypes, and production-ready SVG/image assets.</p>
                              </div>
                            </div>
                          </nav>
                        </div>
                      </div>\n                      <div role="listitem" className="fade-up-alt w-dyn-item">
                        <div
                          data-hover="false"
                          data-delay="0"
                          itemProp="mainEntity"
                          itemScope
                          itemType="https://schema.org/Question"
                          className="faq-item w-dropdown"
                        >
                          <div className="faq-item-header w-dropdown-toggle">
                            <div className="faq-item-header-icon">
                              <div className="faq-item-header-icon-line"></div>
                              <div className="faq-item-header-icon-line rotated"></div>
                            </div>
                            <div itemProp="name">How do you ensure developers can build what is designed?</div>
                          </div>
                          <nav className="faq-item-header-dropdown w-dropdown-list">
                            <div
                              itemProp="acceptedAnswer"
                              itemScope
                              itemType="https://schema.org/Answer"
                              className="faq-item-header-dropdown-inner"
                            >
                              <div itemProp="text" className="w-richtext">
                                <p>Our designers understand front-end code (HTML, CSS, React). We design within standard grid systems (like 8pt grids) and auto-layout flexbox models, ensuring zero friction during developer handoff.</p>
                              </div>
                            </div>
                          </nav>
                        </div>
                      </div>\n                      <div role="listitem" className="fade-up-alt w-dyn-item">
                        <div
                          data-hover="false"
                          data-delay="0"
                          itemProp="mainEntity"
                          itemScope
                          itemType="https://schema.org/Question"
                          className="faq-item w-dropdown"
                        >
                          <div className="faq-item-header w-dropdown-toggle">
                            <div className="faq-item-header-icon">
                              <div className="faq-item-header-icon-line"></div>
                              <div className="faq-item-header-icon-line rotated"></div>
                            </div>
                            <div itemProp="name">Can you redesign our existing platform without changing the backend?</div>
                          </div>
                          <nav className="faq-item-header-dropdown w-dropdown-list">
                            <div
                              itemProp="acceptedAnswer"
                              itemScope
                              itemType="https://schema.org/Answer"
                              className="faq-item-header-dropdown-inner"
                            >
                              <div itemProp="text" className="w-richtext">
                                <p>Yes. We frequently redesign legacy web and mobile apps to improve usability and conversions while keeping existing APIs and databases completely intact.</p>
                              </div>
                            </div>
                          </nav>
                        </div>
                      </div>\n                      <div role="listitem" className="fade-up-alt w-dyn-item">
                        <div
                          data-hover="false"
                          data-delay="0"
                          itemProp="mainEntity"
                          itemScope
                          itemType="https://schema.org/Question"
                          className="faq-item w-dropdown"
                        >
                          <div className="faq-item-header w-dropdown-toggle">
                            <div className="faq-item-header-icon">
                              <div className="faq-item-header-icon-line"></div>
                              <div className="faq-item-header-icon-line rotated"></div>
                            </div>
                            <div itemProp="name">Do you conduct user testing during the design process?</div>
                          </div>
                          <nav className="faq-item-header-dropdown w-dropdown-list">
                            <div
                              itemProp="acceptedAnswer"
                              itemScope
                              itemType="https://schema.org/Answer"
                              className="faq-item-header-dropdown-inner"
                            >
                              <div itemProp="text" className="w-richtext">
                                <p>Yes. We build interactive clickable Figma prototypes and run moderated or unmoderated user testing sessions to validate UX hypotheses before engineering begins.</p>
                              </div>
                            </div>
                          </nav>
                        </div>
                      </div>\n                      <div role="listitem" className="fade-up-alt w-dyn-item">
                        <div
                          data-hover="false"
                          data-delay="0"
                          itemProp="mainEntity"
                          itemScope
                          itemType="https://schema.org/Question"
                          className="faq-item w-dropdown"
                        >
                          <div className="faq-item-header w-dropdown-toggle">
                            <div className="faq-item-header-icon">
                              <div className="faq-item-header-icon-line"></div>
                              <div className="faq-item-header-icon-line rotated"></div>
                            </div>
                            <div itemProp="name">How long does a typical product design project take?</div>
                          </div>
                          <nav className="faq-item-header-dropdown w-dropdown-list">
                            <div
                              itemProp="acceptedAnswer"
                              itemScope
                              itemType="https://schema.org/Answer"
                              className="faq-item-header-dropdown-inner"
                            >
                              <div itemProp="text" className="w-richtext">
                                <p>A landing page or marketing website takes 1-2 weeks. A comprehensive SaaS product MVP or complex web platform typically takes 3-6 weeks across wireframing, high-fidelity UI, and design system creation.</p>
                              </div>
                            </div>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            {/* =================================================================
                CONTACT SECTION & FOOTER
                ================================================================= */}
            <ContactSection />
            <Footer />
          </main>
        </main>
      </div>
    </SmoothScroll>
  );
}
