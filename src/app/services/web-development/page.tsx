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
import { WEB_DEVELOPMENT_ECOSYSTEM } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Web Development Services | Fast, Scalable & Enterprise-Grade - TechForbs",
  description:
    "Build high-performance web applications, customer portals, custom CRMs, and scalable digital platforms engineered with modern React, Next.js, and Node stacks by TechForbs.",
  keywords: [
    "Web development",
    "Next.js development",
    "React web development",
    "custom CRM development",
    "enterprise web portals",
    "full stack engineering",
    "TechForbs web development",
  ],
};

export default function WebDevelopmentPage() {
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
                src="/images/services/web-development/web-dev-hero.png"
                loading="eager"
                alt="Web Development Background"
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
                      Web development that launches fast &amp; scales safely
                    </h1>
                  </div>
                  <div className="service-hero__content-text">
                    Rapid start → clear communication → valuable outcomes. We help ambitious startups,
                    growing agencies, and enterprise brands build resilient web platforms that deliver
                    measurable business growth.
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
                    02. BUSINESSES WE SERVE WITH WEB DEVELOPMENT
                    ============================================================= */}
                <section id="solutions" className="tech-customize">
                  <h2
                    color-word="#00e5ff"
                    text-split=""
                    lines-slide-up=""
                    color-words-index="4,5,6"
                    className="tech-section-title mb-60"
                  >
                    Businesses we serve with web development services
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
                              White-label delivery with structured sprint reporting and proactive updates.
                              Expand your team’s execution bandwidth without hiring overhead.
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
                              Launch functional MVPs in weeks using modern full-stack frameworks.
                              Built cleanly with robust architecture so your product grows smoothly after launch.
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
                              Modernize legacy platforms, automate operational bottlenecks, and connect your
                              customer touchpoints with unified CRM, ERP, and payment integrations.
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
                              Mission-critical web portals, enterprise data governance, high-concurrency cloud
                              architectures, and rock-solid 99.9% uptime SLA compliance.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* =============================================================
                    03. WHAT DO OUR WEB DEVELOPMENT SERVICES INCLUDE?
                    ============================================================= */}
                <section id="services" className="tech-services">
                  <h2
                    color-word="#00e5ff"
                    text-split=""
                    lines-slide-up=""
                    color-words-index="3,4"
                    className="tech-section-title mb-60"
                  >
                    What do our web development services include?
                  </h2>
                  <div className="text-block is-gray margin-bottom-50">
                    From initial technical discovery to full-scale cloud deployment, we cover every aspect of high-performance web engineering.
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
                        <h3 className="tech-service-item-title">Custom web applications</h3>
                        <p className="text-body">
                          Tailored business platforms, SaaS architectures, client portals, and bespoke management systems engineered with clean TypeScript, React, and Node.js codebases.
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
                        <h3 className="tech-service-item-title">Frontend engineering</h3>
                        <p className="text-body">
                          Pixel-perfect, accessible, and ultra-fast user interfaces powered by Next.js, React, and Tailwind CSS. Built with fluid responsiveness across mobile, tablet, and ultra-wide screens.
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
                        <h3 className="tech-service-item-title">API &amp; backend architecture</h3>
                        <p className="text-body">
                          Secure REST and GraphQL endpoints, microservices, asynchronous message queues, database indexing, and seamless third-party ERP/CRM integrations.
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
                        <h3 className="tech-service-item-title">Dedicated web team extension</h3>
                        <p className="text-body">
                          Staff augmentation and dedicated squads tailored to your tech stack. Hire vetted engineers who integrate immediately into your Git workflows and daily sprints.
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
                    We combine engineering rigor with commercial awareness to build software that scales reliably.
                  </div>
                  <ul role="list" className="tech-service-list is-2-grid">
                    <li className="tech-service-item fade-up-alt">
                      <div className="tech-service-item-icon w-embed">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                      </div>
                      <div className="service-service-item-caption">
                        <h3 className="tech-service-item-title">Communication you can rely on</h3>
                        <p className="text-body">
                          Proactive updates, transparent GitHub PR reviews, clear sprint milestones, and zero technical jargon. We keep stakeholders aligned at every step.
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
                        <h3 className="tech-service-item-title">Speed without chaos</h3>
                        <p className="text-body">
                          Automated CI/CD pipelines, strict code reviews, and comprehensive unit tests ensure velocity never compromises product quality or production uptime.
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
                        <h3 className="tech-service-item-title">Predictable &amp; secure delivery</h3>
                        <p className="text-body">
                          Clear scope control, strict bilateral NDA compliance, enterprise data encryption, and transparent sprint estimation with no surprise invoices.
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
                        <h3 className="tech-service-item-title">Long-term engineering partnership</h3>
                        <p className="text-body">
                          We don’t just ship code and disappear; we provide ongoing maintenance, feature expansion, performance monitoring, and SLA-backed support.
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
                    06. TECHNOLOGIES WE USE IN DEVELOPMENT
                    ============================================================= */}
                <TechEcosystem
                  title="Technologies we use in development"
                  items={WEB_DEVELOPMENT_ECOSYSTEM}
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
                    Engineered for high performance &amp; growth
                  </h2>
                  <div className="tech-customize__list-wrapper w-dyn-list">
                    <div role="list" className="tech-customize__list is-2-grid w-dyn-items">
                      <div role="listitem" className="w-dyn-item">
                        <div className="tech-service-card">
                          <div className="tech-services-card-bg is-first"></div>
                          <div className="tech-service-card-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="12" cy="12" r="10"></circle>
                              <line x1="2" y1="12" x2="22" y2="12"></line>
                              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                            </svg>
                          </div>
                          <div className="tech-service-card-caption">
                            <h3 className="tech-service-item-title">Global scalability</h3>
                            <p className="text-body in-tech-service-card">
                              Architected with edge caching, automated database scaling, and content delivery networks so your application performs flawlessly across continents.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div role="listitem" className="w-dyn-item">
                        <div className="tech-service-card">
                          <div className="tech-services-card-bg is-first"></div>
                          <div className="tech-service-card-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            </svg>
                          </div>
                          <div className="tech-service-card-caption">
                            <h3 className="tech-service-item-title">Security &amp; compliance</h3>
                            <p className="text-body in-tech-service-card">
                              Built from day one with ISO/SOC-2 alignment, automated dependency vulnerability scanning, sanitization, and strict encryption protocols.
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
                    Ready to engineer your web platform with TechForbs?
                  </h3>
                  <p className="text-body cta-banner-sub">
                    Speak directly with our senior engineering team to scope your architecture, deliverables, and timeline.
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
                            <div itemProp="name">What does the web development process include?</div>
                          </div>
                          <nav className="faq-item-header-dropdown w-dropdown-list">
                            <div
                              itemProp="acceptedAnswer"
                              itemScope={true}
                              itemType="https://schema.org/Answer"
                              className="faq-item-header-dropdown-inner"
                            >
                              <div itemProp="text" className="w-richtext">
                                <p>Our process covers discovery and architectural roadmap, UX wireframing, UI design systems, full-stack frontend & backend programming, automated QA, and seamless production deployment with complete documentation.</p>
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
                            <div itemProp="name">What are the benefits of partnering with TechForbs?</div>
                          </div>
                          <nav className="faq-item-header-dropdown w-dropdown-list">
                            <div
                              itemProp="acceptedAnswer"
                              itemScope={true}
                              itemType="https://schema.org/Answer"
                              className="faq-item-header-dropdown-inner"
                            >
                              <div itemProp="text" className="w-richtext">
                                <p>You gain senior-level full-stack engineers with rapid onboarding, daily transparent communication, zero management overhead, and flexible scaling based on your project roadmap.</p>
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
                            <div itemProp="name">How do you safeguard our intellectual property and code?</div>
                          </div>
                          <nav className="faq-item-header-dropdown w-dropdown-list">
                            <div
                              itemProp="acceptedAnswer"
                              itemScope={true}
                              itemType="https://schema.org/Answer"
                              className="faq-item-header-dropdown-inner"
                            >
                              <div itemProp="text" className="w-richtext">
                                <p>We execute strict mutual NDAs before any technical discussion. All source code, design assets, and intellectual property remain 100% owned by your company with secure private repositories and isolated access controls.</p>
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
                            <div itemProp="name">Can you take over or modernize an existing application?</div>
                          </div>
                          <nav className="faq-item-header-dropdown w-dropdown-list">
                            <div
                              itemProp="acceptedAnswer"
                              itemScope={true}
                              itemType="https://schema.org/Answer"
                              className="faq-item-header-dropdown-inner"
                            >
                              <div itemProp="text" className="w-richtext">
                                <p>Yes. We begin with a comprehensive code and architecture audit to evaluate performance, security, and technical debt, then outline a phased refactor or migration plan with zero service disruption.</p>
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
                            <div itemProp="name">How fast can our project or team extension kick off?</div>
                          </div>
                          <nav className="faq-item-header-dropdown w-dropdown-list">
                            <div
                              itemProp="acceptedAnswer"
                              itemScope={true}
                              itemType="https://schema.org/Answer"
                              className="faq-item-header-dropdown-inner"
                            >
                              <div itemProp="text" className="w-richtext">
                                <p>Depending on requirements and team composition, we can initiate discovery and assign vetted engineers within 3 to 7 business days.</p>
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
