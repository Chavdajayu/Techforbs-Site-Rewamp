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
  description: "Build high-performance web applications, customer portals, custom CRMs, and scalable digital platforms engineered with modern React, Next.js, and Node stacks by TechForbs.",
  keywords: ["Web development", "Next.js development", "React web development", "custom CRM development", "enterprise web portals", "full stack engineering", "TechForbs web development"],
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
                alt="Service Hero Background"
                className="service-hero-bg"
              />
              <img
                src="/images/services/web-development/hero-decor.svg"
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
                      Web development that launches fast & scales safely
                    </h1>
                  </div>
                  <div className="service-hero__content-text">
                    Rapid start → Clear communication → Valuable outcomes. From customer portals to high-performance SaaS applications, we engineer web platforms that scale effortlessly.
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
                    What do our web development services include?
                  </h2>
                  <div className="text-block is-gray margin-bottom-50">
                    Full-cycle engineering that connects front-end precision with robust back-end resilience.
                  </div>
                  <div className="w-dyn-list">
                    <div role="list" className="tech-service-cards w-dyn-items">
                      <div role="listitem" className="w-dyn-item">
                        <div className="tech-service-card">
                          <div className="tech-services-card-bg is-first"></div>
                          <div className="tech-service-card-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                          </div>
                          <div className="tech-service-card-caption">
                            <h3 className="tech-service-item-title">
                              Custom web applications
                            </h3>
                            <p className="text-body in-tech-service-card">
                              Bespoke SaaS architectures, customer portals, and internal tooling engineered with Next.js, React, Node, and TypeScript for maximum speed and security.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <div className="tech-service-card">
                          <div className="tech-services-card-bg is-first"></div>
                          <div className="tech-service-card-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                          </div>
                          <div className="tech-service-card-caption">
                            <h3 className="tech-service-item-title">
                              E-commerce & marketplaces
                            </h3>
                            <p className="text-body in-tech-service-card">
                              High-converting storefronts, multi-currency checkout pipelines, inventory synchronizations, and custom headless integrations.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <div className="tech-service-card">
                          <div className="tech-services-card-bg is-first"></div>
                          <div className="tech-service-card-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
                          </div>
                          <div className="tech-service-card-caption">
                            <h3 className="tech-service-item-title">
                              API & systems integration
                            </h3>
                            <p className="text-body in-tech-service-card">
                              Bi-directional CRM, ERP, payment gateway, and third-party data pipelines with automated failure handling and guaranteed message delivery.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <div className="tech-service-card">
                          <div className="tech-services-card-bg is-first"></div>
                          <div className="tech-service-card-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                          </div>
                          <div className="tech-service-card-caption">
                            <h3 className="tech-service-item-title">
                              Performance & modern migrations
                            </h3>
                            <p className="text-body in-tech-service-card">
                              Migrate legacy codebases to modern Next.js/React stacks with sub-second page loads, 95+ Core Web Vitals, and zero downtime.
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
                    Web engineering built for scale & speed
                  </h2>
                  <div className="text-block is-gray margin-bottom-50">
                    We combine engineering rigor with commercial awareness to build digital flagships.
                  </div>
                  <ul role="list" className="tech-service-list is-2-grid">
                    <li className="tech-service-item fade-up-alt">
                      <div className="tech-service-item-icon w-embed">
                        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="16" stroke="#00e5ff" strokeWidth="3" /><path d="M20 10v10l6 4" stroke="#00e5ff" strokeWidth="3" strokeLinecap="round" /></svg>
                      </div>
                      <div className="service-service-item-caption">
                        <h3 className="tech-service-item-title">Sub-second load times</h3>
                        <p className="text-body">
                          Optimized server-side rendering, intelligent edge caching, and asset bundling to ensure lightning-fast responses on every device.
                        </p>
                      </div>
                    </li>
                    <li className="tech-service-item fade-up-alt">
                      <div className="tech-service-item-icon w-embed">
                        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6l12 5v9c0 8-5 13-12 16-7-3-12-8-12-16v-9l12-5z" stroke="#00e5ff" strokeWidth="3" strokeLinejoin="round" /></svg>
                      </div>
                      <div className="service-service-item-caption">
                        <h3 className="tech-service-item-title">Enterprise-grade security</h3>
                        <p className="text-body">
                          Strict CSP policies, end-to-end encryption, automated OWASP scanning, and SOC 2 aligned access controls baked in from day one.
                        </p>
                      </div>
                    </li>
                    <li className="tech-service-item fade-up-alt">
                      <div className="tech-service-item-icon w-embed">
                        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="6" width="12" height="12" rx="2" stroke="#00e5ff" strokeWidth="2.5" /><rect x="22" y="6" width="12" height="12" rx="2" stroke="#00e5ff" strokeWidth="2.5" /><rect x="6" y="22" width="12" height="12" rx="2" stroke="#00e5ff" strokeWidth="2.5" /><rect x="22" y="22" width="12" height="12" rx="2" stroke="#00e5ff" strokeWidth="2.5" /></svg>
                      </div>
                      <div className="service-service-item-caption">
                        <h3 className="tech-service-item-title">Modular component architecture</h3>
                        <p className="text-body">
                          Design-system backed reusable UI components that empower your marketing and product teams to ship updates without dev friction.
                        </p>
                      </div>
                    </li>
                    <li className="tech-service-item fade-up-alt">
                      <div className="tech-service-item-icon w-embed">
                        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="16" stroke="#00e5ff" strokeWidth="3" /><path d="M14 20l4 4 8-8" stroke="#00e5ff" strokeWidth="3" strokeLinecap="round" /></svg>
                      </div>
                      <div className="service-service-item-caption">
                        <h3 className="tech-service-item-title">Continuous delivery & telemetry</h3>
                        <p className="text-body">
                          Automated CI/CD pipelines with zero-downtime rollouts, comprehensive error tracing with Sentry, and real-time performance alerts.
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
                    How we deliver web projects
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
                        <h3 className="tech-service-item-title">Architecture & technical discovery</h3>
                        <p className="text-body">
                          We audit requirements, select optimal frameworks, define API contracts, and establish database schemas before writing a single line.
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
                        <h3 className="tech-service-item-title">Interactive prototyping & sprint planning</h3>
                        <p className="text-body">
                          Rapid component buildouts and bi-weekly sprint deliverables so your team can test working software early and often.
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
                        <h3 className="tech-service-item-title">Full-stack build & system integration</h3>
                        <p className="text-body">
                          End-to-end feature engineering, automated unit and integration tests, and seamless third-party service connections.
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
                        <h3 className="tech-service-item-title">Optimization, security audit & deployment</h3>
                        <p className="text-body">
                          Rigorous load testing, SEO optimization, security hardening, and zero-downtime deployment to your cloud environment.
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
                    Modern web architecture standards
                  </h2>
                  <div className="text-body">
                    We engineer resilient, high-concurrency web systems built on enterprise architectural standards.
                  </div>
                  <div className="w-layout-grid tech_3col">
                    <div className="tech_sertificate_item">
                      <div className="tech_sertificate_point">
                        <div className="tech_sertificate_dot"></div>
                        <div className="tech_sertificate_text">
                          Next.js & React edge rendering
                        </div>
                      </div>
                      <div className="tech_sertificate_point">
                        <div className="tech_sertificate_dot"></div>
                        <div className="tech_sertificate_text">
                          Microservices & headless API backbones
                        </div>
                      </div>
                      <div className="tech_sertificate_point">
                        <div className="tech_sertificate_dot"></div>
                        <div className="tech_sertificate_text">
                          Automated CI/CD with zero-downtime deployments
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
                        <span className="text-xs uppercase tracking-wider font-semibold text-[#00e5ff] mt-2">Enterprise Web</span>
                      </div>
                    </div>

                    <div className="tech_sertificate_item">
                      <div className="tech_sertificate_point">
                        <div className="tech_sertificate_dot"></div>
                        <div className="tech_sertificate_text">
                          Sub-second database querying & Redis caching
                        </div>
                      </div>
                      <div className="tech_sertificate_point">
                        <div className="tech_sertificate_dot"></div>
                        <div className="tech_sertificate_text">
                          99.99% uptime SLA with active Sentry monitoring
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
                  title="Technologies we use in web development"
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
            <div className="tech-main-inner services-pages services-lower-split">
              <div className="tech-content tab-mw-100">
                <section id="solutions" className="tech-customize">
                  <h2
                    color-word="#00e5ff"
                    text-split=""
                    lines-slide-up=""
                    color-words-index="0,1,2"
                    className="tech-section-title mb-60"
                  >
                    Businesses we serve with web development
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
                            <div itemProp="name">What tech stacks do you specialize in for web development?</div>
                          </div>
                          <nav className="faq-item-header-dropdown w-dropdown-list">
                            <div
                              itemProp="acceptedAnswer"
                              itemScope
                              itemType="https://schema.org/Answer"
                              className="faq-item-header-dropdown-inner"
                            >
                              <div itemProp="text" className="w-richtext">
                                <p>We specialize in modern JavaScript/TypeScript ecosystems including React, Next.js, Node.js, Python, Laravel, and headless CMS platforms. We choose the stack that best fits your product requirements, scalability goals, and existing infrastructure.</p>
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
                          itemScope
                          itemType="https://schema.org/Question"
                          className="faq-item w-dropdown"
                        >
                          <div className="faq-item-header w-dropdown-toggle">
                            <div className="faq-item-header-icon">
                              <div className="faq-item-header-icon-line"></div>
                              <div className="faq-item-header-icon-line rotated"></div>
                            </div>
                            <div itemProp="name">How do you ensure high performance and Core Web Vitals?</div>
                          </div>
                          <nav className="faq-item-header-dropdown w-dropdown-list">
                            <div
                              itemProp="acceptedAnswer"
                              itemScope
                              itemType="https://schema.org/Answer"
                              className="faq-item-header-dropdown-inner"
                            >
                              <div itemProp="text" className="w-richtext">
                                <p>Performance is engineered into our architecture: server-side rendering, streaming SSR, edge caching, image optimization, dynamic imports, and lightweight client bundles. We target 90+ mobile Core Web Vitals scores across all deployments.</p>
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
                          itemScope
                          itemType="https://schema.org/Question"
                          className="faq-item w-dropdown"
                        >
                          <div className="faq-item-header w-dropdown-toggle">
                            <div className="faq-item-header-icon">
                              <div className="faq-item-header-icon-line"></div>
                              <div className="faq-item-header-icon-line rotated"></div>
                            </div>
                            <div itemProp="name">Can you take over and refactor an existing codebase?</div>
                          </div>
                          <nav className="faq-item-header-dropdown w-dropdown-list">
                            <div
                              itemProp="acceptedAnswer"
                              itemScope
                              itemType="https://schema.org/Answer"
                              className="faq-item-header-dropdown-inner"
                            >
                              <div itemProp="text" className="w-richtext">
                                <p>Yes. We frequently conduct code audits, identify technical debt, and incrementally modernize legacy systems using micro-frontends or modular refactoring without disrupting ongoing business operations.</p>
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
                          itemScope
                          itemType="https://schema.org/Question"
                          className="faq-item w-dropdown"
                        >
                          <div className="faq-item-header w-dropdown-toggle">
                            <div className="faq-item-header-icon">
                              <div className="faq-item-header-icon-line"></div>
                              <div className="faq-item-header-icon-line rotated"></div>
                            </div>
                            <div itemProp="name">What is your typical project timeline?</div>
                          </div>
                          <nav className="faq-item-header-dropdown w-dropdown-list">
                            <div
                              itemProp="acceptedAnswer"
                              itemScope
                              itemType="https://schema.org/Answer"
                              className="faq-item-header-dropdown-inner"
                            >
                              <div itemProp="text" className="w-richtext">
                                <p>A typical MVP or customer portal takes between 4 to 8 weeks, while comprehensive enterprise platforms take 10 to 16 weeks. We work in 2-week agile sprints with working software delivered at every stage.</p>
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
                          itemScope
                          itemType="https://schema.org/Question"
                          className="faq-item w-dropdown"
                        >
                          <div className="faq-item-header w-dropdown-toggle">
                            <div className="faq-item-header-icon">
                              <div className="faq-item-header-icon-line"></div>
                              <div className="faq-item-header-icon-line rotated"></div>
                            </div>
                            <div itemProp="name">Do you provide post-launch maintenance and support?</div>
                          </div>
                          <nav className="faq-item-header-dropdown w-dropdown-list">
                            <div
                              itemProp="acceptedAnswer"
                              itemScope
                              itemType="https://schema.org/Answer"
                              className="faq-item-header-dropdown-inner"
                            >
                              <div itemProp="text" className="w-richtext">
                                <p>Yes. We offer flexible post-launch SLAs covering proactive 24/7 monitoring, security patches, performance tuning, and ongoing feature iterations.</p>
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
