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
  description:
    "Ship high-performing native and cross-platform mobile apps for iOS and Android. Built with React Native, Flutter, Swift, and Kotlin by TechForbs engineers.",
  keywords: [
    "Mobile app development",
    "iOS development",
    "Android development",
    "React Native development",
    "Flutter app development",
    "cross platform apps",
    "TechForbs mobile apps",
  ],
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
                src="/images/services/mobile-development/67b8471a05886fd350ce39c4_mobile-bg.webp"
                loading="eager"
                alt="Mobile App Development Background"
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
                      Mobile app development that gets you to the app stores fast
                    </h1>
                  </div>
                  <div className="service-hero__content-text">
                    Launch faster, ship safely, and scale confidently. We engineer fluid, high-retention
                    mobile apps for iOS and Android with battle-tested cross-platform and native architectures.
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
                    02. WHAT TYPES OF APPS WE BUILD
                    ============================================================= */}
                <section id="solutions" className="tech-customize">
                  <h2
                    color-word="#00e5ff"
                    text-split=""
                    lines-slide-up=""
                    color-words-index="3,4"
                    className="tech-section-title mb-60"
                  >
                    What types of apps we build for your business
                  </h2>
                  <div className="tech-customize__list-wrapper w-dyn-list">
                    <div role="list" className="tech-customize__list is-2-grid w-dyn-items">
                      {/* Card 1 */}
                      <div role="listitem" className="w-dyn-item">
                        <div className="tech-service-card">
                          <div className="tech-services-card-bg is-first"></div>
                          <div className="tech-service-card-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="9" cy="21" r="1"></circle>
                              <circle cx="20" cy="21" r="1"></circle>
                              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                            </svg>
                          </div>
                          <div className="tech-service-card-caption">
                            <h3 className="tech-service-item-title">E-commerce &amp; retail</h3>
                            <p className="text-body in-tech-service-card">
                              Seamless catalogs, 1-click Apple Pay/Google Pay checkout, push re-engagement campaigns,
                              inventory synchronizations, and real-time delivery tracking.
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
                              <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                              <line x1="1" y1="10" x2="23" y2="10"></line>
                            </svg>
                          </div>
                          <div className="tech-service-card-caption">
                            <h3 className="tech-service-item-title">Banking &amp; fintech</h3>
                            <p className="text-body in-tech-service-card">
                              Bank-grade data encryption, biometric authentication (FaceID/Fingerprint), multi-currency
                              wallets, compliance-ready KYC verification, and instant transaction logs.
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
                              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg>
                          </div>
                          <div className="tech-service-card-caption">
                            <h3 className="tech-service-item-title">Health &amp; wellness</h3>
                            <p className="text-body in-tech-service-card">
                              Real-time wearable telemetry sync (Apple HealthKit / Google Fit), telehealth appointment
                              booking, automated medication reminders, and HIPAA-compliant data security.
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
                              <circle cx="12" cy="12" r="10"></circle>
                              <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                            </svg>
                          </div>
                          <div className="tech-service-card-caption">
                            <h3 className="tech-service-item-title">On-demand &amp; marketplaces</h3>
                            <p className="text-body in-tech-service-card">
                              Live GPS routing, dynamic driver/vendor matching algorithms, in-app messaging,
                              automated rating prompts, and responsive provider administration panels.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* =============================================================
                    03. MOBILE APP DEVELOPMENT SERVICES WE OFFER
                    ============================================================= */}
                <section id="services" className="tech-services">
                  <h2
                    color-word="#00e5ff"
                    text-split=""
                    lines-slide-up=""
                    color-words-index="3,4"
                    className="tech-section-title mb-60"
                  >
                    Mobile app development services we offer
                  </h2>
                  <div className="text-block is-gray margin-bottom-50">
                    Comprehensive mobile engineering tailored to App Store standards and high user engagement.
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
                        <h3 className="tech-service-item-title">iOS app development</h3>
                        <p className="text-body">
                          Native Swift &amp; SwiftUI engineering with full iOS ecosystem support (Widgets, Apple Pay, PushKit, CoreML). Designed strictly according to Apple Human Interface Guidelines.
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
                        <h3 className="tech-service-item-title">Android app development</h3>
                        <p className="text-body">
                          Modern Kotlin &amp; Jetpack Compose architectures tested across hundreds of screen resolutions and hardware profiles for consistent, fluid performance on Google Play.
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
                        <h3 className="tech-service-item-title">Cross-platform (React Native &amp; Flutter)</h3>
                        <p className="text-body">
                          Shared business logic and near-native performance that cuts development cost and time-to-market in half without sacrificing smooth gesture response or native device access.
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
                        <h3 className="tech-service-item-title">Mobile backend &amp; cloud sync</h3>
                        <p className="text-body">
                          High-throughput GraphQL / REST APIs, real-time WebSockets, offline caching with SQLite/WatermelonDB, automated push notification servers, and analytics pipelines.
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
                    We engineer apps that pass store review on the first submission and maintain five-star ratings.
                  </div>
                  <ul role="list" className="tech-service-list is-2-grid">
                    <li className="tech-service-item fade-up-alt">
                      <div className="tech-service-item-icon w-embed">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>
                      </div>
                      <div className="service-service-item-caption">
                        <h3 className="tech-service-item-title">App store submission guarantee</h3>
                        <p className="text-body">
                          We manage the entire submission, certificates, provisioning profiles, and review process for Apple App Store and Google Play until your application goes live.
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
                        <h3 className="tech-service-item-title">Battery &amp; performance tuning</h3>
                        <p className="text-body">
                          Memory leak profiling, background task throttling, and frame rate optimization ensure your app stays responsive, cool, and lightweight on users’ devices.
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
                        <h3 className="tech-service-item-title">Strict intellectual property safety</h3>
                        <p className="text-body">
                          Comprehensive NDA agreements, private client repositories, and complete transfer of all build pipelines, signing keys, and source code upon milestone delivery.
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
                        <h3 className="tech-service-item-title">Post-launch OS upgrades &amp; support</h3>
                        <p className="text-body">
                          Active monitoring and rapid compatibility updates for annual iOS and Android major releases, security patches, and third-party library lifecycle updates.
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
                    Built for store feature &amp; high retention
                  </h2>
                  <div className="tech-customize__list-wrapper w-dyn-list">
                    <div role="list" className="tech-customize__list is-2-grid w-dyn-items">
                      <div role="listitem" className="w-dyn-item">
                        <div className="tech-service-card">
                          <div className="tech-services-card-bg is-first"></div>
                          <div className="tech-service-card-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                          </div>
                          <div className="tech-service-card-caption">
                            <h3 className="tech-service-item-title">Delightful micro-interactions</h3>
                            <p className="text-body in-tech-service-card">
                              Haptic feedback, fluid transitions, and gesture controls that make the app feel like second nature and drive 5-star organic reviews.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div role="listitem" className="w-dyn-item">
                        <div className="tech-service-card">
                          <div className="tech-services-card-bg is-first"></div>
                          <div className="tech-service-card-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                            </svg>
                          </div>
                          <div className="tech-service-card-caption">
                            <h3 className="tech-service-item-title">Intelligent engagement pipelines</h3>
                            <p className="text-body in-tech-service-card">
                              Segmented push messaging, custom in-app alerts, dynamic deeplinking, and event-based tracking configured for maximum lifetime customer value.
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
                    Ready to build your mobile application with TechForbs?
                  </h3>
                  <p className="text-body cta-banner-sub">
                    Consult with our senior mobile architects to review requirements, technology trade-offs, and go-to-market milestones.
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
                            <div itemProp="name">Do you assist in developing an early-stage mobile app idea?</div>
                          </div>
                          <nav className="faq-item-header-dropdown w-dropdown-list">
                            <div
                              itemProp="acceptedAnswer"
                              itemScope={true}
                              itemType="https://schema.org/Answer"
                              className="faq-item-header-dropdown-inner"
                            >
                              <div itemProp="text" className="w-richtext">
                                <p>Yes. We guide early-stage concepts through product discovery, technical feasibility analysis, clickable prototyping, user journey mapping, and MVP scoping so you invest with confidence.</p>
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
                            <div itemProp="name">How do you safeguard our intellectual property?</div>
                          </div>
                          <nav className="faq-item-header-dropdown w-dropdown-list">
                            <div
                              itemProp="acceptedAnswer"
                              itemScope={true}
                              itemType="https://schema.org/Answer"
                              className="faq-item-header-dropdown-inner"
                            >
                              <div itemProp="text" className="w-richtext">
                                <p>We execute bilateral non-disclosure agreements upfront. You retain 100% ownership of all source code, graphic assets, patents, and developer accounts upon delivery.</p>
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
                            <div itemProp="name">How can my company benefit from outsourcing mobile development?</div>
                          </div>
                          <nav className="faq-item-header-dropdown w-dropdown-list">
                            <div
                              itemProp="acceptedAnswer"
                              itemScope={true}
                              itemType="https://schema.org/Answer"
                              className="faq-item-header-dropdown-inner"
                            >
                              <div itemProp="text" className="w-richtext">
                                <p>Outsourcing with TechForbs bypasses lengthy local recruitment cycles, gives you immediate access to seasoned mobile architects, and accelerates your release timeline while cutting total delivery costs by 40-60%.</p>
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
                            <div itemProp="name">Should we choose native development or cross-platform?</div>
                          </div>
                          <nav className="faq-item-header-dropdown w-dropdown-list">
                            <div
                              itemProp="acceptedAnswer"
                              itemScope={true}
                              itemType="https://schema.org/Answer"
                              className="faq-item-header-dropdown-inner"
                            >
                              <div itemProp="text" className="w-richtext">
                                <p>For most commercial applications, React Native or Flutter provides identical performance and saves significant cost with a single codebase. For heavy 3D graphics, low-level Bluetooth, or intensive ARKit requirements, pure native Swift and Kotlin is recommended.</p>
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
                            <div itemProp="name">How do you handle App Store and Google Play approvals?</div>
                          </div>
                          <nav className="faq-item-header-dropdown w-dropdown-list">
                            <div
                              itemProp="acceptedAnswer"
                              itemScope={true}
                              itemType="https://schema.org/Answer"
                              className="faq-item-header-dropdown-inner"
                            >
                              <div itemProp="text" className="w-richtext">
                                <p>We manage testflight beta distributions, store listing assets, compliance checks, privacy disclosures, and directly address review notes from Apple and Google reviewers until your app is officially approved.</p>
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
