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
import { DEDICATED_TEAM_ECOSYSTEM } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Hire a Dedicated Development Team | Managed Squads & Staff Augmentation - TechForbs",
  description:
    "Scale engineering delivery without scaling payroll overhead. Hire vetted full-stack engineers, AI specialists, and managed product squads with TechForbs.",
  keywords: [
    "Dedicated development team",
    "hire developers",
    "staff augmentation",
    "managed engineering squads",
    "remote software developers",
    "dedicated React engineers",
    "TechForbs dedicated teams",
  ],
};

export default function DedicatedTeamPage() {
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
                src="/images/services/dedicated-team/67b8471a05886fd350ce39c4_mobile-bg.webp"
                loading="eager"
                alt="Dedicated Development Team Background"
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
                      Hire a dedicated team you can rely on
                    </h1>
                  </div>
                  <div className="service-hero__content-text">
                    Scale delivery without scaling payroll. Add vetted senior engineers or an end-to-end
                    managed squad that integrates smoothly with your product culture and delivers on schedule.
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
                    02. WHO BENEFITS FROM A DEDICATED TEAM
                    ============================================================= */}
                <section id="solutions" className="tech-customize">
                  <h2
                    color-word="#00e5ff"
                    text-split=""
                    lines-slide-up=""
                    color-words-index="3,4"
                    className="tech-section-title mb-60"
                  >
                    Who benefits from a dedicated team
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
                            <h3 className="tech-service-item-title">Startups eager to grow</h3>
                            <p className="text-body in-tech-service-card">
                              Spin up an agile squad in days—from initial MVP to fast feature expansion.
                              Flexible scaling with predictable monthly burn and zero recruiting lag.
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
                            <h3 className="tech-service-item-title">Growing SMEs</h3>
                            <p className="text-body in-tech-service-card">
                              Extend your internal team long-term to clear backlog bottlenecks, accelerate key
                              product releases, and integrate complex technical architectures.
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
                            <h3 className="tech-service-item-title">Multi-task long projects</h3>
                            <p className="text-body in-tech-service-card">
                              A persistent team that retains deep domain knowledge, manages multiple concurrent
                              workstreams, and minimizes context-switching loss.
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
                            <h3 className="tech-service-item-title">Enterprise departments</h3>
                            <p className="text-body in-tech-service-card">
                              Delegate specialized digital initiatives to dedicated squads that comply with your
                              internal SOC-2, Git governance, security policies, and SLA requirements.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* =============================================================
                    03. WHAT DO OUR DEDICATED TEAM SERVICES INCLUDE?
                    ============================================================= */}
                <section id="services" className="tech-services">
                  <h2
                    color-word="#00e5ff"
                    text-split=""
                    lines-slide-up=""
                    color-words-index="3,4"
                    className="tech-section-title mb-60"
                  >
                    What do our dedicated team services include?
                  </h2>
                  <div className="text-block is-gray margin-bottom-50">
                    Flexible engagement models designed to complement your current workflow and technical leadership.
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
                        <h3 className="tech-service-item-title">Team extension (staff augmentation)</h3>
                        <p className="text-body">
                          Seamlessly embed senior React, Node.js, Python, or Mobile engineers directly into your sprints, daily standups, and codebase reviews with immediate impact.
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
                        <h3 className="tech-service-item-title">Dedicated web squads (managed)</h3>
                        <p className="text-body">
                          A complete cross-functional squad (Frontend, Backend, QA Engineer, Project Manager) that takes ownership of defined epics and delivers production-ready features.
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
                        <h3 className="tech-service-item-title">Dedicated mobile squads (managed)</h3>
                        <p className="text-body">
                          Specialized iOS, Android, and cross-platform teams that manage mobile release cycles, beta distribution, App Store guidelines, and device compatibility.
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
                        <h3 className="tech-service-item-title">AI &amp; automation engineering squad</h3>
                        <p className="text-body">
                          Specialists in workflow orchestration, n8n/Make automation, custom Python agent pipelines, and LLM fine-tuning to automate business processes rapidly.
                        </p>
                      </div>
                    </li>
                  </ul>
                </section>

                {/* =============================================================
                    04. WHAT ARE THE BENEFITS OF DEDICATED TEAMS?
                    ============================================================= */}
                <section id="services" className="tech-services">
                  <h2
                    color-word="#00e5ff"
                    text-split=""
                    lines-slide-up=""
                    color-words-index="3,4"
                    className="tech-section-title mb-60"
                  >
                    What are the benefits of dedicated teams?
                  </h2>
                  <div className="text-block is-gray margin-bottom-50">
                    High agility, lower overhead, and direct accountability without employment friction.
                  </div>
                  <ul role="list" className="tech-service-list is-2-grid">
                    <li className="tech-service-item fade-up-alt">
                      <div className="tech-service-item-icon w-embed">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                        </svg>
                      </div>
                      <div className="service-service-item-caption">
                        <h3 className="tech-service-item-title">Cost predictability &amp; zero overhead</h3>
                        <p className="text-body">
                          Fixed monthly rates without benefits, equipment stipends, recruiting agency fees, or severance liabilities. You only pay for engineering value.
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
                        <h3 className="tech-service-item-title">Immediate ramp-up speed</h3>
                        <p className="text-body">
                          Avoid 3-month recruiting cycles. Onboard vetted engineers aligned with your tech stack within 3 to 7 business days.
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
                        <h3 className="tech-service-item-title">Strict IP protection &amp; security</h3>
                        <p className="text-body">
                          All code commits, documentation, and architecture diagrams belong entirely to you with airtight NDAs and encrypted access keys.
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
                        <h3 className="tech-service-item-title">High adaptability &amp; flexibility</h3>
                        <p className="text-body">
                          Scale your team up during critical launch sprints or scale back during maintenance phases without team disruption.
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
                  items={DEDICATED_TEAM_ECOSYSTEM}
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
                    Seamless integration with your engineering culture
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
                            <h3 className="tech-service-item-title">Timezone &amp; communication overlap</h3>
                            <p className="text-body in-tech-service-card">
                              Our engineers provide daily synchronized overlap with North American, European, and Gulf timezones to ensure seamless real-time collaboration.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div role="listitem" className="w-dyn-item">
                        <div className="tech-service-card">
                          <div className="tech-services-card-bg is-first"></div>
                          <div className="tech-service-card-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                              <circle cx="8.5" cy="7" r="4"></circle>
                              <polyline points="17 11 19 13 23 9"></polyline>
                            </svg>
                          </div>
                          <div className="tech-service-card-caption">
                            <h3 className="tech-service-item-title">Plug-and-play toolchain</h3>
                            <p className="text-body in-tech-service-card">
                              We join your existing Slack, Microsoft Teams, Jira, Linear, and GitHub repositories directly—zero disruption to your established engineering habits.
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
                    Ready to scale your engineering velocity with TechForbs?
                  </h3>
                  <p className="text-body cta-banner-sub">
                    Tell us about your technical requirements and team composition needs. We will assemble candidate profiles within 48 hours.
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
                            <div itemProp="name">What is a dedicated development team?</div>
                          </div>
                          <nav className="faq-item-header-dropdown w-dropdown-list">
                            <div
                              itemProp="acceptedAnswer"
                              itemScope={true}
                              itemType="https://schema.org/Answer"
                              className="faq-item-header-dropdown-inner"
                            >
                              <div itemProp="text" className="w-richtext">
                                <p>A dedicated development team is an exclusive squad of software engineers, QA specialists, and technical leads allocated 100% to your company. They work exclusively on your products, adopt your internal workflows, and act as a seamless extension of your in-house engineering team.</p>
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
                            <div itemProp="name">Why hire a dedicated team instead of full-time in-house staff?</div>
                          </div>
                          <nav className="faq-item-header-dropdown w-dropdown-list">
                            <div
                              itemProp="acceptedAnswer"
                              itemScope={true}
                              itemType="https://schema.org/Answer"
                              className="faq-item-header-dropdown-inner"
                            >
                              <div itemProp="text" className="w-richtext">
                                <p>A dedicated team saves months of costly recruitment, bypasses local payroll taxes and benefits, allows rapid scaling up or down, and provides immediate access to pre-vetted senior engineers with proven delivery track records.</p>
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
                            <div itemProp="name">How is the dedicated team managed day-to-day?</div>
                          </div>
                          <nav className="faq-item-header-dropdown w-dropdown-list">
                            <div
                              itemProp="acceptedAnswer"
                              itemScope={true}
                              itemType="https://schema.org/Answer"
                              className="faq-item-header-dropdown-inner"
                            >
                              <div itemProp="text" className="w-richtext">
                                <p>You can manage the engineers directly via your existing sprint ceremonies (Agile/Scrum), or leverage a TechForbs Delivery Lead who oversees task allocation, velocity tracking, code reviews, and milestone reporting.</p>
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
                            <div itemProp="name">How do you ensure code quality and accountability?</div>
                          </div>
                          <nav className="faq-item-header-dropdown w-dropdown-list">
                            <div
                              itemProp="acceptedAnswer"
                              itemScope={true}
                              itemType="https://schema.org/Answer"
                              className="faq-item-header-dropdown-inner"
                            >
                              <div itemProp="text" className="w-richtext">
                                <p>We enforce automated linting, test-driven PRs, mandatory peer code reviews, continuous integration checks, and regular architectural audits. You have complete transparency over all Git commits and issue trackers.</p>
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
                            <div itemProp="name">What happens if a developer needs to be replaced?</div>
                          </div>
                          <nav className="faq-item-header-dropdown w-dropdown-list">
                            <div
                              itemProp="acceptedAnswer"
                              itemScope={true}
                              itemType="https://schema.org/Answer"
                              className="faq-item-header-dropdown-inner"
                            >
                              <div itemProp="text" className="w-richtext">
                                <p>We guarantee seamless resource continuity. If any engineer is not the right fit or requires replacement, we provide a replacement engineer with overlapping knowledge transfer at no extra cost.</p>
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
