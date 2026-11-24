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
import { MOBILE_DEVELOPMENT_ECOSYSTEM } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Mobile App Development Services | iOS, Android & Flutter - TechForbs",
  description: "Ship high-performing native and cross-platform mobile apps for iOS and Android. Built with React Native, Flutter, Swift, and Kotlin by TechForbs engineers.",
  keywords: ["Mobile app development", "iOS development", "Android development", "React Native development", "Flutter app development", "cross platform apps", "TechForbs mobile apps"],
};

export default function MobileDevelopmentPage() {
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
                src="/images/services/mobile-development/mobile-hero.webp"
                loading="eager"
                alt="Service Hero Background"
                className="service-hero-bg"
              />
              <img
                src="/images/services/mobile-development/hero-decor.svg"
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
                      Mobile app development that gets you to the app stores fast
                    </h1>
                  </div>
                  <div className="service-hero__content-text">
                    Launch faster, ship safely, and scale confidently with a mobile development team that speaks business outcomes, not just code.
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
                    What do our mobile development services include?
                  </h2>
                  <div className="text-block is-gray margin-bottom-50">
                    End-to-end mobile engineering from product concept through App Store and Google Play approvals.
                  </div>
                  <div className="w-dyn-list">
                    <div role="list" className="tech-service-cards w-dyn-items">
                      <div role="listitem" className="w-dyn-item">
                        <div className="tech-service-card">
                          <div className="tech-services-card-bg is-first"></div>
                          <div className="tech-service-card-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                          </div>
                          <div className="tech-service-card-caption">
                            <h3 className="tech-service-item-title">
                              Cross-platform mobile apps
                            </h3>
                            <p className="text-body in-tech-service-card">
                              High-velocity apps built with React Native and Flutter that deliver 99% shared codebase efficiency with true native 60fps performance.
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
                              Native iOS & Android engineering
                            </h3>
                            <p className="text-body in-tech-service-card">
                              Bespoke Swift and Kotlin implementations for hardware-intensive features, Bluetooth, biometric security, and OS-specific capabilities.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <div className="tech-service-card">
                          <div className="tech-services-card-bg is-first"></div>
                          <div className="tech-service-card-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>
                          </div>
                          <div className="tech-service-card-caption">
                            <h3 className="tech-service-item-title">
                              Offline-first & mobile backends
                            </h3>
                            <p className="text-body in-tech-service-card">
                              Resilient data synchronization, GraphQL/REST backends, SQLite/WatermelonDB offline storage, and instantaneous push notifications.
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
                              App store submission & ASO
                            </h3>
                            <p className="text-body in-tech-service-card">
                              Guidance through Apple App Store and Google Play compliance review, test flight distribution, and automated CI/CD deployment pipelines.
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
                    Mobile experiences users love to open
                  </h2>
                  <div className="text-block is-gray margin-bottom-50">
                    We obsess over micro-interactions, startup times, and offline reliability.
                  </div>
                  <ul role="list" className="tech-service-list is-2-grid">
                    <li className="tech-service-item fade-up-alt">
                      <div className="tech-service-item-icon w-embed">
                        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="4" width="20" height="32" rx="4" stroke="#00e5ff" strokeWidth="2.5" /><circle cx="20" cy="30" r="1.5" fill="#00e5ff" /></svg>
                      </div>
                      <div className="service-service-item-caption">
                        <h3 className="tech-service-item-title">Native 60fps fluid UI</h3>
                        <p className="text-body">
                          Smooth gesture handlers, GPU-accelerated animations, and zero UI thread jank across budget and flagship handsets.
                        </p>
                      </div>
                    </li>
                    <li className="tech-service-item fade-up-alt">
                      <div className="tech-service-item-icon w-embed">
                        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 20a12 12 0 0 1 24 0v4H8v-4z" stroke="#00e5ff" strokeWidth="2.5" /></svg>
                      </div>
                      <div className="service-service-item-caption">
                        <h3 className="tech-service-item-title">Offline-first resilience</h3>
                        <p className="text-body">
                          Local-first data persistence ensures uninterrupted app functionality even in airplane mode or spotty connectivity.
                        </p>
                      </div>
                    </li>
                    <li className="tech-service-item fade-up-alt">
                      <div className="tech-service-item-icon w-embed">
                        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6l12 5v9c0 8-5 13-12 16-7-3-12-8-12-16v-9l12-5z" stroke="#00e5ff" strokeWidth="3" strokeLinejoin="round" /></svg>
                      </div>
                      <div className="service-service-item-caption">
                        <h3 className="tech-service-item-title">Biometric & device security</h3>
                        <p className="text-body">
                          Keychain/Keystore token encryption, biometric authentication, jailbreak detection, and secure network pinning.
                        </p>
                      </div>
                    </li>
                    <li className="tech-service-item fade-up-alt">
                      <div className="tech-service-item-icon w-embed">
                        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="16" stroke="#00e5ff" strokeWidth="3" /><path d="M14 20l4 4 8-8" stroke="#00e5ff" strokeWidth="3" strokeLinecap="round" /></svg>
                      </div>
                      <div className="service-service-item-caption">
                        <h3 className="tech-service-item-title">Automated store deployments</h3>
                        <p className="text-body">
                          Fastlane and cloud CI/CD pipelines for automated screenshot generation, metadata updates, and instant test builds.
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
                    How we build mobile applications
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
                        <h3 className="tech-service-item-title">Product definition & wireframing</h3>
                        <p className="text-body">
                          We map user journeys, screen architectures, device permissions, and technical constraints before building.
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
                        <h3 className="tech-service-item-title">Rapid prototype & UX validation</h3>
                        <p className="text-body">
                          Clickable prototypes and sprint-by-sprint TestFlight/Internal testing builds that let stakeholders touch real screens early.
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
                        <h3 className="tech-service-item-title">Full-stack mobile & API engineering</h3>
                        <p className="text-body">
                          Robust state management, native bridges, offline cache layers, and scalable cloud API integrations.
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
                        <h3 className="tech-service-item-title">Store submission & post-launch telemetry</h3>
                        <p className="text-body">
                          App Store Review guidelines compliance, launch coordination, crash telemetry with Sentry, and user analytics.
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
                    Enterprise mobile engineering standards
                  </h2>
                  <div className="text-body">
                    We engineer resilient, 60fps mobile applications built on enterprise architectural standards.
                  </div>
                  <div className="w-layout-grid tech_3col">
                    <div className="tech_sertificate_item">
                      <div className="tech_sertificate_point">
                        <div className="tech_sertificate_dot"></div>
                        <div className="tech_sertificate_text">
                          React Native & Flutter shared codebase architecture
                        </div>
                      </div>
                      <div className="tech_sertificate_point">
                        <div className="tech_sertificate_dot"></div>
                        <div className="tech_sertificate_text">
                          Local-first SQLite & WatermelonDB synchronization
                        </div>
                      </div>
                      <div className="tech_sertificate_point">
                        <div className="tech_sertificate_dot"></div>
                        <div className="tech_sertificate_text">
                          Automated Fastlane App Store & Play Store pipelines
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
                        <span className="text-xs uppercase tracking-wider font-semibold text-[#00e5ff] mt-2">Enterprise Mobile</span>
                      </div>
                    </div>

                    <div className="tech_sertificate_item">
                      <div className="tech_sertificate_point">
                        <div className="tech_sertificate_dot"></div>
                        <div className="tech_sertificate_text">
                          Hardware-level biometric encryption & token keychain
                        </div>
                      </div>
                      <div className="tech_sertificate_point">
                        <div className="tech_sertificate_dot"></div>
                        <div className="tech_sertificate_text">
                          Sub-100ms cold startup times with proactive telemetry
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
                  title="Technologies we use in mobile development"
                  items={MOBILE_DEVELOPMENT_ECOSYSTEM}
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
                    Businesses we serve with mobile development
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
                            <div itemProp="name">Should I choose React Native, Flutter, or Native (Swift/Kotlin)?</div>
                          </div>
                          <nav className="faq-item-header-dropdown w-dropdown-list">
                            <div
                              itemProp="acceptedAnswer"
                              itemScope
                              itemType="https://schema.org/Answer"
                              className="faq-item-header-dropdown-inner"
                            >
                              <div itemProp="text" className="w-richtext">
                                <p>For 90% of business applications, React Native or Flutter offers the best balance of fast time-to-market, cost efficiency, and 60fps native feel. If your app requires heavy background processing, AR, or low-level Bluetooth protocols, we recommend pure native.</p>
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
                            <div itemProp="name">How do you handle the Apple App Store and Google Play approval process?</div>
                          </div>
                          <nav className="faq-item-header-dropdown w-dropdown-list">
                            <div
                              itemProp="acceptedAnswer"
                              itemScope
                              itemType="https://schema.org/Answer"
                              className="faq-item-header-dropdown-inner"
                            >
                              <div itemProp="text" className="w-richtext">
                                <p>We handle the entire submission process: configuring certificates, provisioning profiles, privacy nutrition labels, in-app purchases, and addressing any reviewer feedback to ensure guaranteed approval.</p>
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
                            <div itemProp="name">Can my mobile app work seamlessly offline?</div>
                          </div>
                          <nav className="faq-item-header-dropdown w-dropdown-list">
                            <div
                              itemProp="acceptedAnswer"
                              itemScope
                              itemType="https://schema.org/Answer"
                              className="faq-item-header-dropdown-inner"
                            >
                              <div itemProp="text" className="w-richtext">
                                <p>Yes. We design offline-first architectures using local databases (like WatermelonDB or SQLite) that queue user mutations and synchronize automatically when connectivity is restored.</p>
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
                            <div itemProp="name">How do you handle push notifications and deep linking?</div>
                          </div>
                          <nav className="faq-item-header-dropdown w-dropdown-list">
                            <div
                              itemProp="acceptedAnswer"
                              itemScope
                              itemType="https://schema.org/Answer"
                              className="faq-item-header-dropdown-inner"
                            >
                              <div itemProp="text" className="w-richtext">
                                <p>We implement reliable multi-channel push notification pipelines via Firebase (FCM) and Apple Push (APNs), complete with universal deep links that direct users straight to specific in-app content.</p>
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
                            <div itemProp="name">What is your testing process across different devices?</div>
                          </div>
                          <nav className="faq-item-header-dropdown w-dropdown-list">
                            <div
                              itemProp="acceptedAnswer"
                              itemScope
                              itemType="https://schema.org/Answer"
                              className="faq-item-header-dropdown-inner"
                            >
                              <div itemProp="text" className="w-richtext">
                                <p>We test across real iOS and Android physical devices and automated device cloud farms, verifying responsiveness across diverse screen sizes, OS versions, and network speeds.</p>
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
