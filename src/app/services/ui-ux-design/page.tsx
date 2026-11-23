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
  title: "UI/UX Design Services | Web & Mobile Product Design - TechForbs",
  description:
    "Research-driven, conversion-focused UI/UX design. From wireframes and clickable prototypes to polished design systems and developer-ready Figma tokens by TechForbs.",
  keywords: [
    "UI UX design",
    "web design services",
    "product design",
    "Figma design system",
    "mobile app UI UX",
    "conversion rate optimization",
    "TechForbs design",
  ],
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
                src="/images/services/ui-ux-design/664c528d48ff839d28caaab9_ui-ux-design-p-1600.webp"
                loading="eager"
                alt="UI UX Design Background"
                className="service-hero-bg"
              />
              <img
                src="/images/services/ai-automation/664319142c43bfb250429812_decor.svg"
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
                    Research-driven, conversion-focused, and dev-ready. From wireframes and prototypes
                    to polished interfaces and scalable design systems, we craft digital experiences
                    that engage users and accelerate business growth.
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
              MAIN CONTENT WRAPPER (SPLIT 2-COLUMN LAYOUT)
              ================================================================= */}
          <main className="tech-main padding-top-112 pb-0">
            <div className="tech-main-inner services-pages">
              <div className="tech-main-inner__col">
                {/* =============================================================
                    02. BUSINESSES WE SERVE WITH WEB DESIGN
                    ============================================================= */}
                <section id="solutions" className="tech-customize">
                  <h2
                    color-word="#00e5ff"
                    text-split=""
                    lines-slide-up=""
                    color-words-index="4,5,6"
                    className="tech-section-title mb-60"
                  >
                    Businesses we serve with web design services
                  </h2>
                  <div className="tech-customize__list-wrapper w-dyn-list">
                    <div role="list" className="tech-customize__list is-2-grid w-dyn-items">
                      {/* Card 1 */}
                      <div role="listitem" className="w-dyn-item">
                        <div className="tech-service-card">
                          <div className="tech-services-card-bg is-first"></div>
                          <div className="tech-service-card-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                              <polyline points="2 17 12 22 22 17"></polyline>
                              <polyline points="2 12 12 17 22 12"></polyline>
                            </svg>
                          </div>
                          <div className="tech-service-card-caption">
                            <h3 className="tech-service-item-title">Agencies</h3>
                            <p className="text-body in-tech-service-card">
                              White-label UI/UX with dev-ready Figma files, atomic design tokens, and proactive sprint updates that match your creative workflows seamlessly.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Card 2 */}
                      <div role="listitem" className="w-dyn-item">
                        <div className="tech-service-card">
                          <div className="tech-services-card-bg is-first"></div>
                          <div className="tech-service-card-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                            </svg>
                          </div>
                          <div className="tech-service-card-caption">
                            <h3 className="tech-service-item-title">Startups</h3>
                            <p className="text-body in-tech-service-card">
                              Clickable high-fidelity prototypes and MVP product interfaces in weeks. Discovery research, user flows, and persuasive screens ready for investor buy-in.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Card 3 */}
                      <div role="listitem" className="w-dyn-item">
                        <div className="tech-service-card">
                          <div className="tech-services-card-bg is-first"></div>
                          <div className="tech-service-card-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                              <line x1="8" y1="21" x2="16" y2="21"></line>
                              <line x1="12" y1="17" x2="12" y2="21"></line>
                            </svg>
                          </div>
                          <div className="tech-service-card-caption">
                            <h3 className="tech-service-item-title">SMEs</h3>
                            <p className="text-body in-tech-service-card">
                              Comprehensive UX audits and redesigns that remove conversion friction, streamline checkout funnels, and elevate brand perception to enterprise grade.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Card 4 */}
                      <div role="listitem" className="w-dyn-item">
                        <div className="tech-service-card">
                          <div className="tech-services-card-bg is-first"></div>
                          <div className="tech-service-card-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                              <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                              <line x1="12" y1="22.08" x2="12" y2="12"></line>
                            </svg>
                          </div>
                          <div className="tech-service-card-caption">
                            <h3 className="tech-service-item-title">Enterprises</h3>
                            <p className="text-body in-tech-service-card">
                              Modular multi-product design systems, WCAG 2.1 AA accessibility governance, and continuous design-to-code synchronizations across large engineering departments.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* =============================================================
                    03. WHAT DO OUR UI/UX DESIGN SERVICES INCLUDE?
                    ============================================================= */}
                <section id="services" className="tech-services">
                  <h2
                    color-word="#00e5ff"
                    text-split=""
                    lines-slide-up=""
                    color-words-index="3,4"
                    className="tech-section-title mb-60"
                  >
                    What do our UI/UX design services include?
                  </h2>
                  <div className="text-block is-gray margin-bottom-50">
                    From user psychology to pixel-precision Figma components, we design interfaces that convert.
                  </div>
                  <ul role="list" className="tech-service-list is-2-grid">
                    <li className="tech-service-item fade-up-alt">
                      <div className="tech-service-item-icon w-embed">
                        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="4" y="0" width="8.5" height="20" rx="2" fill="#00e5ff" />
                          <rect x="16" y="0" width="8.5" height="8.5" rx="2" fill="#00e5ff" />
                          <rect x="16" y="12" width="8.5" height="8.5" rx="4.2" fill="white" fillOpacity="0.3" />
                          <rect x="4" y="24" width="8.5" height="8.5" rx="4.2" fill="white" fillOpacity="0.3" />
                        </svg>
                      </div>
                      <div className="service-service-item-caption">
                        <h3 className="tech-service-item-title">Digital product UX</h3>
                        <p className="text-body">
                          UX discovery, competitive benchmarking, user journey mapping, low- and high-fidelity wireframing, and rigorous usability testing sessions.
                        </p>
                      </div>
                    </li>
                    <li className="tech-service-item fade-up-alt">
                      <div className="tech-service-item-icon w-embed">
                        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="4" y="0" width="8.5" height="8.5" rx="2" fill="#00e5ff" />
                          <rect x="16" y="0" width="8.5" height="20" rx="2" fill="#00e5ff" />
                          <rect x="4" y="12" width="8.5" height="8.5" rx="4.2" fill="white" fillOpacity="0.3" />
                          <rect x="16" y="24" width="8.5" height="8.5" rx="4.2" fill="white" fillOpacity="0.3" />
                        </svg>
                      </div>
                      <div className="service-service-item-caption">
                        <h3 className="tech-service-item-title">UI &amp; design systems</h3>
                        <p className="text-body">
                          Comprehensive visual languages, auto-layout Figma components, standardized color/typography tokens, and responsive grid specifications.
                        </p>
                      </div>
                    </li>
                    <li className="tech-service-item fade-up-alt">
                      <div className="tech-service-item-icon w-embed">
                        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="4" y="12" width="8.5" height="20" rx="2" fill="#00e5ff" />
                          <rect x="16" y="4" width="8.5" height="8.5" rx="2" fill="#00e5ff" />
                          <rect x="4" y="0" width="8.5" height="8.5" rx="4.2" fill="white" fillOpacity="0.3" />
                          <rect x="16" y="16" width="8.5" height="8.5" rx="4.2" fill="white" fillOpacity="0.3" />
                        </svg>
                      </div>
                      <div className="service-service-item-caption">
                        <h3 className="tech-service-item-title">Web experiences</h3>
                        <p className="text-body">
                          High-converting SaaS landing pages, marketing websites, and complex web application dashboards where clarity and speed drive customer engagement.
                        </p>
                      </div>
                    </li>
                    <li className="tech-service-item fade-up-alt">
                      <div className="tech-service-item-icon w-embed">
                        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="16" y="12" width="8.5" height="20" rx="2" fill="#00e5ff" />
                          <rect x="4" y="4" width="8.5" height="8.5" rx="2" fill="#00e5ff" />
                          <rect x="16" y="0" width="8.5" height="8.5" rx="4.2" fill="white" fillOpacity="0.3" />
                          <rect x="4" y="16" width="8.5" height="8.5" rx="4.2" fill="white" fillOpacity="0.3" />
                        </svg>
                      </div>
                      <div className="service-service-item-caption">
                        <h3 className="tech-service-item-title">Mobile UI/UX</h3>
                        <p className="text-body">
                          iOS and Android interface design tailored to native interaction paradigms, gesture choreography, bottom sheet states, and dark/light modes.
                        </p>
                      </div>
                    </li>
                  </ul>
                </section>

                {/* =============================================================
                    04. WHY TEAMS PICK TECHFORBS
                    ============================================================= */}
                <section id="services" className="tech-services">
                  <h2
                    color-word="#00e5ff"
                    text-split=""
                    lines-slide-up=""
                    color-words-index="3,4"
                    className="tech-section-title mb-60"
                  >
                    Why teams pick TechForbs
                  </h2>
                  <div className="text-block is-gray margin-bottom-50">
                    We bridge the gap between design vision and technical implementation.
                  </div>
                  <ul role="list" className="tech-service-list is-2-grid">
                    <li className="tech-service-item fade-up-alt">
                      <div className="tech-service-item-icon w-embed">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                      </div>
                      <div className="service-service-item-caption">
                        <h3 className="tech-service-item-title">Dev-ready Figma handoff</h3>
                        <p className="text-body">
                          Every frame uses auto-layout, named layers, exported SVG assets, responsive breakpoints, and clear state variations (hover, active, disabled, loading).
                        </p>
                      </div>
                    </li>
                    <li className="tech-service-item fade-up-alt">
                      <div className="tech-service-item-icon w-embed">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                        </svg>
                      </div>
                      <div className="service-service-item-caption">
                        <h3 className="tech-service-item-title">Conversion &amp; data driven</h3>
                        <p className="text-body">
                          We don’t design purely for decoration; every hierarchy choice, typography scale, and call-to-action is engineered to maximize conversion rates.
                        </p>
                      </div>
                    </li>
                    <li className="tech-service-item fade-up-alt">
                      <div className="tech-service-item-icon w-embed">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                        </svg>
                      </div>
                      <div className="service-service-item-caption">
                        <h3 className="tech-service-item-title">Interactive clickable prototypes</h3>
                        <p className="text-body">
                          Experience the full product flow before writing a line of code. Test real users, validate hypotheses, and align executives early.
                        </p>
                      </div>
                    </li>
                    <li className="tech-service-item fade-up-alt">
                      <div className="tech-service-item-icon w-embed">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <div className="service-service-item-caption">
                        <h3 className="tech-service-item-title">Collaborative design sprints</h3>
                        <p className="text-body">
                          Direct collaboration with senior product designers in Figma, weekly design reviews, and rapid iteration loops that respect your timelines.
                        </p>
                      </div>
                    </li>
                  </ul>
                </section>

                {/* =============================================================
                    05. WINNING WITH US: OUR CLIENTS' SUCCESS
                    ============================================================= */}
                <PortfolioCases />

                {/* =============================================================
                    06. TECHNOLOGIES AND TOOLS WE USE IN UI/UX
                    ============================================================= */}
                <TechEcosystem
                  title="Technologies and tools we use in UI/UX"
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
                    <div className="cta-banner-person-buttons">
                      <a href="#contact-section" className="cta-bn__btn is-fill w-inline-block">
                        <div className="text-body is-cta-btn">Contact</div>
                      </a>
                    </div>
                  </div>
                </div>
              </aside>
            </div>

            {/* =================================================================
                07. TESTIMONIALS SECTION (FULL-WIDTH SCREEN COVERAGE)
                ================================================================= */}
            <div className="w-full relative z-10 overflow-hidden">
              <TestimonialsSection />
            </div>

            {/* =================================================================
                BAND 3: LOWER SPLIT LAYOUT (FOUNDER PROFILE RE-ENTRY)
                ================================================================= */}
            <div className="tech-main-inner services-pages">
              <div className="tech-main-inner__col">
                <section id="solutions" className="tech-customize">
                  <h2
                    color-word="#00e5ff"
                    text-split=""
                    lines-slide-up=""
                    color-words-index="3,4"
                    className="tech-section-title mb-60"
                  >
                    Crafted for emotional connection &amp; conversion
                  </h2>
                  <div className="tech-customize__list-wrapper w-dyn-list">
                    <div role="list" className="tech-customize__list is-2-grid w-dyn-items">
                      <div role="listitem" className="w-dyn-item">
                        <div className="tech-service-card">
                          <div className="tech-services-card-bg is-first"></div>
                          <div className="tech-service-card-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                              <line x1="9" y1="9" x2="9.01" y2="9"></line>
                              <line x1="15" y1="9" x2="15.01" y2="9"></line>
                            </svg>
                          </div>
                          <div className="tech-service-card-caption">
                            <h3 className="tech-service-item-title">Human-centered empathy</h3>
                            <p className="text-body in-tech-service-card">
                              Designs rooted in authentic user research, accessibility guidelines, and cognitive principles that turn first-time visitors into brand champions.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div role="listitem" className="w-dyn-item">
                        <div className="tech-service-card">
                          <div className="tech-services-card-bg is-first"></div>
                          <div className="tech-service-card-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="18" y1="20" x2="18" y2="10"></line>
                              <line x1="12" y1="20" x2="12" y2="4"></line>
                              <line x1="6" y1="20" x2="6" y2="14"></line>
                            </svg>
                          </div>
                          <div className="tech-service-card-caption">
                            <h3 className="tech-service-item-title">Measurable impact</h3>
                            <p className="text-body in-tech-service-card">
                              Clear KPI tracking: higher sign-up conversion, reduced bounce rates, faster task completion, and reduced customer onboarding support costs.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              {/* ASIDE STICKY: FOUNDER PROFILE (SUNIL PANCHANI) - RETURNS TO CENTER-RIGHT */}
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
                    <div className="cta-banner-person-buttons">
                      <a href="#contact-section" className="cta-bn__btn is-fill w-inline-block">
                        <div className="text-body is-cta-btn">Contact</div>
                      </a>
                    </div>
                  </div>
                </div>
              </aside>
            </div>

            {/* =================================================================
                08. BRAND LOGOS SECTION
                ================================================================= */}
            <BrandLogos />

            {/* =================================================================
                09. CTA BANNER (FOUNDER PROFILE COMPOSITION)
                ================================================================= */}
            <div className="tech-main-inner-wider v2">
              <div className="cta-banner is-small">
                <div className="cta-banner-top">
                  <div className="cta-banner-circle w-embed">
                    <svg width="100%" height="100%" viewBox="0 0 200 60" fill="none">
                      <ellipse cx="100" cy="30" rx="90" ry="25" stroke="#00e5ff" strokeWidth="2" strokeDasharray="6 4" />
                    </svg>
                  </div>
                  <h3 className="cta-banner-title">
                    Ready to elevate your digital experience with TechForbs?
                  </h3>
                  <p className="text-body cta-banner-sub">
                    Collaborate directly with our design leads to map your product roadmap and design sprint deliverables.
                  </p>
                </div>
                <div className="cta-banner-bot">
                  <div className="cta-banner-person">
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
                        <a href="#contact-section" className="cta-bn__btn is-fill w-inline-block">
                          <div className="text-body is-cta-btn">Book a call</div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

                        {/* =================================================================
                10. FAQ SECTION (CENTERED)
                ================================================================= */}
            <div className="tech-main-inner is-faq-centered margin-bottom-7-5 overflow-hidden">
              <div className="tech-content" style={{ maxWidth: "880px", margin: "0 auto", width: "100%" }}>
                <section id="faq" className="tech-faq" style={{ textAlign: "center" }}>
                  <h2 lines-slide-up="" text-split="" className="tech-section-title mb-60" style={{ textAlign: "center" }}>
                    Frequently asked questions (FAQ)
                  </h2>
                  <div className="w-dyn-list" style={{ textAlign: "left" }}>
                    <div
                      itemType="https://schema.org/FAQPage"
                      itemScope={true}
                      role="list"
                      className="faq w-dyn-items"
                    >
                      <div role="listitem" className="fade-up-alt w-dyn-item">
                        <div
                          data-hover="false"
                          data-delay="0"
                          itemProp="mainEntity"
                          itemScope={true}
                          itemType="https://schema.org/Question"
                          className="faq-item w-dropdown"
                        >
                          <div className="faq-item-header w-dropdown-toggle">
                            <div className="faq-item-header-icon">
                              <div className="faq-item-header-icon-line"></div>
                              <div className="faq-item-header-icon-line rotated"></div>
                            </div>
                            <div itemProp="name">What are UI and UX design services?</div>
                          </div>
                          <nav className="faq-item-header-dropdown w-dropdown-list">
                            <div
                              itemProp="acceptedAnswer"
                              itemScope={true}
                              itemType="https://schema.org/Answer"
                              className="faq-item-header-dropdown-inner"
                            >
                              <div itemProp="text" className="w-richtext">
                                <p>UX (User Experience) design focuses on the architecture, logic, user journeys, and problem-solving framework of a product. UI (User Interface) design creates the visual styling, color systems, typography, buttons, and micro-interactions that make the product intuitive and delightful to use.</p>
                              </div>
                            </div>
                          </nav>
                        </div>
                      </div>
                      <div role="listitem" className="fade-up-alt w-dyn-item">
                        <div
                          data-hover="false"
                          data-delay="0"
                          itemProp="mainEntity"
                          itemScope={true}
                          itemType="https://schema.org/Question"
                          className="faq-item w-dropdown"
                        >
                          <div className="faq-item-header w-dropdown-toggle">
                            <div className="faq-item-header-icon">
                              <div className="faq-item-header-icon-line"></div>
                              <div className="faq-item-header-icon-line rotated"></div>
                            </div>
                            <div itemProp="name">How will UI/UX consulting help our digital product?</div>
                          </div>
                          <nav className="faq-item-header-dropdown w-dropdown-list">
                            <div
                              itemProp="acceptedAnswer"
                              itemScope={true}
                              itemType="https://schema.org/Answer"
                              className="faq-item-header-dropdown-inner"
                            >
                              <div itemProp="text" className="w-richtext">
                                <p>Strategic UI/UX design uncovers hidden customer friction, optimizes funnel progression, lowers churn, and establishes clear brand authority that significantly lifts customer lifetime value and product adoption.</p>
                              </div>
                            </div>
                          </nav>
                        </div>
                      </div>
                      <div role="listitem" className="fade-up-alt w-dyn-item">
                        <div
                          data-hover="false"
                          data-delay="0"
                          itemProp="mainEntity"
                          itemScope={true}
                          itemType="https://schema.org/Question"
                          className="faq-item w-dropdown"
                        >
                          <div className="faq-item-header w-dropdown-toggle">
                            <div className="faq-item-header-icon">
                              <div className="faq-item-header-icon-line"></div>
                              <div className="faq-item-header-icon-line rotated"></div>
                            </div>
                            <div itemProp="name">What deliverables do we receive at the conclusion of a design sprint?</div>
                          </div>
                          <nav className="faq-item-header-dropdown w-dropdown-list">
                            <div
                              itemProp="acceptedAnswer"
                              itemScope={true}
                              itemType="https://schema.org/Answer"
                              className="faq-item-header-dropdown-inner"
                            >
                              <div itemProp="text" className="w-richtext">
                                <p>You receive complete, organized Figma files with auto-layout components, interactive clickable prototypes, design token documentation, exported vector graphic assets, and developer handoff guidelines.</p>
                              </div>
                            </div>
                          </nav>
                        </div>
                      </div>
                      <div role="listitem" className="fade-up-alt w-dyn-item">
                        <div
                          data-hover="false"
                          data-delay="0"
                          itemProp="mainEntity"
                          itemScope={true}
                          itemType="https://schema.org/Question"
                          className="faq-item w-dropdown"
                        >
                          <div className="faq-item-header w-dropdown-toggle">
                            <div className="faq-item-header-icon">
                              <div className="faq-item-header-icon-line"></div>
                              <div className="faq-item-header-icon-line rotated"></div>
                            </div>
                            <div itemProp="name">Can you design within an existing brand style guide?</div>
                          </div>
                          <nav className="faq-item-header-dropdown w-dropdown-list">
                            <div
                              itemProp="acceptedAnswer"
                              itemScope={true}
                              itemType="https://schema.org/Answer"
                              className="faq-item-header-dropdown-inner"
                            >
                              <div itemProp="text" className="w-richtext">
                                <p>Absolutely. We respect existing typography, color palettes, and brand rules while enhancing their digital applicability, contrast ratios, and modern UI component adaptability.</p>
                              </div>
                            </div>
                          </nav>
                        </div>
                      </div>
                      <div role="listitem" className="fade-up-alt w-dyn-item">
                        <div
                          data-hover="false"
                          data-delay="0"
                          itemProp="mainEntity"
                          itemScope={true}
                          itemType="https://schema.org/Question"
                          className="faq-item w-dropdown"
                        >
                          <div className="faq-item-header w-dropdown-toggle">
                            <div className="faq-item-header-icon">
                              <div className="faq-item-header-icon-line"></div>
                              <div className="faq-item-header-icon-line rotated"></div>
                            </div>
                            <div itemProp="name">How do you collaborate with engineering teams during development?</div>
                          </div>
                          <nav className="faq-item-header-dropdown w-dropdown-list">
                            <div
                              itemProp="acceptedAnswer"
                              itemScope={true}
                              itemType="https://schema.org/Answer"
                              className="faq-item-header-dropdown-inner"
                            >
                              <div itemProp="text" className="w-richtext">
                                <p>Our designers work hand-in-hand with frontend engineers. We participate in design QA reviews, inspect staging builds, verify responsive breakpoint fidelity, and ensure zero disconnect between Figma and production code.</p>
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
                11. CONTACT SECTION
                ================================================================= */}
            <ContactSection />
          </main>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
