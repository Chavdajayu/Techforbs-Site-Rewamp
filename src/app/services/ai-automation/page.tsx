import type { Metadata } from "next";
import Navbar from "@/components/navigation/Navbar";
import PortfolioSection from "@/components/portfolio/PortfolioSection";
import TechEcosystemSection from "@/components/tech-ecosystem/TechEcosystemSection";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import BrandLogos from "@/components/brand-logos/BrandLogos";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/footer/Footer";
import SmoothScroll from "@/components/smooth-scroll/SmoothScroll";
import AIAutomationClientInteractions from "@/components/services/AIAutomationClientInteractions";
import { AI_AUTOMATION_CASES, AI_AUTOMATION_TESTIMONIALS } from "@/data/siteData";

export const metadata: Metadata = {
  title: "AI & Automation Services (Make, n8n, Zapier, Retool) | TechForbs",
  description:
    "AI-driven business process automation with Make, n8n, Zapier, Retool. Smart email/document parsing, CRM sync, lead enrichment, ticket triage, HR onboarding with safe AI, human-in-the-loop, and measurable ROI by TechForbs.",
  keywords: [
    "AI automation",
    "Make automation",
    "n8n automation",
    "Zapier integration",
    "workflow automation",
    "intelligent agents",
    "LLM workflows",
    "TechForbs AI",
  ],
};

export default function AIAutomationPage() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#101010] text-white selection:bg-[#00e5ff] selection:text-black">
        <Navbar />
        <AIAutomationClientInteractions />

        <main className="relative z-10 flex flex-col">
          {/* =================================================================
              01. HERO SECTION
              ================================================================= */}
          <section className="services-hero">
            <div className="tech-hero-gradient"></div>
            <div className="service-hero-inner">
              <img
                src="/images/services/ai-automation/69273fea692d3db88c70d620_ai-bg.webp"
                loading="eager"
                alt="AI & Automation Background"
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
                      AI & Automation = Faster Workflows → Higher ROI
                    </h1>
                  </div>
                  <div className="service-hero__content-text">
                    Free your team’s time for what truly matters. From intelligent autonomous agents
                    to document parsing — we turn repetitive operational bottlenecks into smart,
                    connected workflows.
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
              MAIN CONTENT WRAPPER
              ================================================================= */}
          <main className="tech-main padding-top-112 pb-0">
            <div className="tech-main-inner services-pages">
              <div className="tech-content tab-mw-100">
                {/* =============================================================
                    02. WHAT DO OUR AI & AUTOMATION SERVICES INCLUDE?
                    ============================================================= */}
                <section id="solutions" className="tech-customize">
                  <h2
                    color-word="#00e5ff"
                    text-split=""
                    lines-slide-up=""
                    color-words-index="2,3,4,5,6"
                    className="tech-section-title mb-60"
                  >
                    What do our <span className="text-[#00e5ff]">AI & automation services include?</span>
                  </h2>
                  <div className="text-block is-gray margin-bottom-50">
                    We build, connect, and scale automations that save time and prevent human errors —
                    combining AI precision with reliable engineering agility.
                  </div>
                  <div className="w-dyn-list">
                    <div role="list" className="tech-service-cards w-dyn-items">
                      {/* Card 1: Workflow automation */}
                      <div role="listitem" className="w-dyn-item">
                        <div className="tech-service-card">
                          <div
                            style={{
                              backgroundImage:
                                "url('/images/services/ai-automation/68d52d57009f7380eb0f180d_tech-services-card-bg-1.png')",
                            }}
                            className="tech-services-card-bg is-first"
                          ></div>
                          <div className="tech-service-card-icon">
                            <img
                              src="/images/services/ai-automation/692742a882a7dc0bc18fedfe_cug.svg"
                              loading="lazy"
                              alt="Workflow automation icon"
                            />
                          </div>
                          <div className="tech-service-card-caption">
                            <h3 className="tech-service-item-title">
                              Workflow automation
                            </h3>
                            <p className="text-body in-tech-service-card">
                              Connect your enterprise applications, eliminate manual steps, add branching logic,
                              self-healing retries, and real-time alerts so work keeps moving without pings and copy-paste.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Card 2: AI in your workflows */}
                      <div role="listitem" className="w-dyn-item">
                        <div className="tech-service-card">
                          <div
                            style={{
                              backgroundImage:
                                "url('/images/services/ai-automation/68d52ea3fbeee273024f9d8a_tech-services-card-bg-2.webp')",
                            }}
                            className="tech-services-card-bg is-first"
                          ></div>
                          <div className="tech-service-card-icon">
                            <img
                              src="/images/services/ai-automation/6927431ee95570ca22524488_head.svg"
                              loading="lazy"
                              alt="AI in workflows icon"
                            />
                          </div>
                          <div className="tech-service-card-caption">
                            <h3 className="tech-service-item-title">
                              AI in your workflows
                            </h3>
                            <p className="text-body in-tech-service-card">
                              Classify, summarize, extract fields, enrich leads, and route support tickets; keep
                              human-in-the-loop review queues for low-confidence or high-stakes edge cases.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Card 3: Email & document processing */}
                      <div role="listitem" className="w-dyn-item">
                        <div className="tech-service-card">
                          <div
                            style={{
                              backgroundImage:
                                "url('/images/services/ai-automation/68d52ef3a569956809ce0677_tech-services-card-bg-3.webp')",
                            }}
                            className="tech-services-card-bg is-first"
                          ></div>
                          <div className="tech-service-card-icon">
                            <img
                              src="/images/services/ai-automation/69282fa87f3ced4dd7b3569c_lucide_mail.svg"
                              loading="lazy"
                              alt="Email & document processing icon"
                            />
                          </div>
                          <div className="tech-service-card-caption">
                            <h3 className="tech-service-item-title">
                              Email & document processing
                            </h3>
                            <p className="text-body in-tech-service-card">
                              AI-assisted parsing of high-volume inboxes, invoices, and PDFs: extract structured data
                              directly to your database or CRM, and flag unusual anomalies for instant manual review.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Card 4: Ops for sales & support */}
                      <div role="listitem" className="w-dyn-item">
                        <div className="tech-service-card">
                          <div
                            style={{
                              backgroundImage:
                                "url('/images/services/ai-automation/68d52f0b354fc6199419a618_tech-services-card-bg-4.webp')",
                            }}
                            className="tech-services-card-bg is-first"
                          ></div>
                          <div className="tech-service-card-icon">
                            <img
                              src="/images/services/ai-automation/692830135db380f7128cf54f_hugeicons_briefcase-03.svg"
                              loading="lazy"
                              alt="Sales and support operations icon"
                            />
                          </div>
                          <div className="tech-service-card-caption">
                            <h3 className="tech-service-item-title">
                              Ops for sales & support
                            </h3>
                            <p className="text-body in-tech-service-card">
                              Lead sourcing & enrichment, bi-directional CRM synchronization, automated ticket
                              triage, suggested replies, and guaranteed SLA incident escalation alerts.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* =============================================================
                    03. AI + AUTOMATION: BETTER TOGETHER
                    ============================================================= */}
                <section id="services" className="tech-services">
                  <h2
                    color-word="#00e5ff"
                    text-split=""
                    lines-slide-up=""
                    color-words-index="3,4"
                    className="tech-section-title mb-60"
                  >
                    AI + automation: <span className="text-[#00e5ff]">better together</span>
                  </h2>
                  <div className="text-block is-gray margin-bottom-50">
                    AI gives context, automation delivers action. Together, they turn manual effort into measurable growth.
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
                        <h3 className="tech-service-item-title">From insights to action</h3>
                        <p className="text-body">
                          AI analyzes unstructured inputs and produces real-time decisions; automation triggers
                          the appropriate system calls, database writes, and communications instantly.
                        </p>
                      </div>
                    </li>

                    <li className="tech-service-item fade-up-alt">
                      <div className="tech-service-item-icon w-embed">
                        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="4" y="0" width="8.5" height="20" rx="2" fill="#00e5ff" />
                          <rect x="15.7" y="0" width="8.5" height="8.5" rx="2" fill="#00e5ff" />
                          <rect x="15.7" y="11.7" width="8.5" height="8.5" rx="4.2" fill="white" fillOpacity="0.3" />
                          <rect x="4" y="23.5" width="8.5" height="8.5" rx="4.2" fill="white" fillOpacity="0.3" />
                        </svg>
                      </div>
                      <div className="service-service-item-caption">
                        <h3 className="tech-service-item-title">Measurable impact, not hype</h3>
                        <p className="text-body">
                          We prioritize high-leverage workflows with verifiable KPIs: hours saved per sprint,
                          decreased error rates, faster client turnaround, and lower operational costs.
                        </p>
                      </div>
                    </li>

                    <li className="tech-service-item fade-up-alt">
                      <div className="tech-service-item-icon w-embed">
                        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="6" y="10" width="28" height="24" rx="4" stroke="#00e5ff" strokeWidth="2.5" />
                          <path d="M12 10V6a8 8 0 0 1 16 0v4" stroke="#00e5ff" strokeWidth="2.5" />
                        </svg>
                      </div>
                      <div className="service-service-item-caption">
                        <h3 className="tech-service-item-title">Secure by default</h3>
                        <p className="text-body">
                          Encrypted data transport, sandboxed execution environments, zero-data-retention AI
                          configurations, and strict adherence to enterprise compliance frameworks.
                        </p>
                      </div>
                    </li>

                    <li className="tech-service-item fade-up-alt">
                      <div className="tech-service-item-icon w-embed">
                        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="16" cy="14" r="6" stroke="#00e5ff" strokeWidth="2" />
                          <circle cx="28" cy="18" r="4" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="2" />
                          <path d="M6 34c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="#00e5ff" strokeWidth="2" />
                        </svg>
                      </div>
                      <div className="service-service-item-caption">
                        <h3 className="tech-service-item-title">Human-in-the-loop</h3>
                        <p className="text-body">
                          Automated workflows flag low-confidence predictions, routing them to designated team
                          members via Slack, Teams, or email with one-click approval workflows.
                        </p>
                      </div>
                    </li>
                  </ul>
                </section>

                {/* =============================================================
                    04. HOW WE BUILD AUTOMATIONS THAT WORK
                    ============================================================= */}
                <section className="tech-services">
                  <h2
                    color-word="#00e5ff"
                    text-split=""
                    lines-slide-up=""
                    color-words-index="3,4,5"
                    className="tech-section-title mb-60"
                  >
                    How we build <span className="text-[#00e5ff]">automations that work</span>
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
                        <h3 className="tech-service-item-title">Discovery & mapping</h3>
                        <p className="text-body">
                          We analyze your operational workflows, audit tool stacks, identify friction points,
                          and model high-ROI automation candidates.
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
                        <h3 className="tech-service-item-title">Integration & setup</h3>
                        <p className="text-body">
                          Connect APIs, configure secure webhooks, set up reliable queuing systems, and establish
                          idempotent data pipelines across your services.
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
                        <h3 className="tech-service-item-title">AI enhancement</h3>
                        <p className="text-body">
                          Integrate targeted LLM models, vector retrieval indices, multimodal document parsers,
                          and semantic routing logic where standard code falls short.
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
                        <h3 className="tech-service-item-title">Testing & handoff</h3>
                        <p className="text-body">
                          Comprehensive failure simulation, telemetry setup, automated documentation, and
                          interactive handoff sessions to empower your team.
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
                    05. WINNING WITH US: OUR CLIENTS' SUCCESS (PORTFOLIO SECTION)
                    Exact Reusable Component from Home Page configured for Services!
                    ============================================================= */}
                <PortfolioSection
                  id="why-we"
                  variant="services"
                  title={
                    <>
                      Winning with us: <span className="text-[#00e5ff]">our clients&apos; success</span>
                    </>
                  }
                  items={AI_AUTOMATION_CASES}
                  showViewAll={true}
                  viewAllHref="/#portfolio-section"
                  viewAllText="View all"
                />

                {/* =============================================================
                    06. WHY TEAMS CHOOSE TECHFORBS
                    ============================================================= */}
                <section className="tech-services">
                  <h2
                    color-word="#00e5ff"
                    text-split=""
                    lines-slide-up=""
                    color-words-index="3,4"
                    className="tech-section-title mb-60"
                  >
                    Why teams <span className="text-[#00e5ff]">choose TechForbs</span>
                  </h2>
                  <ul role="list" className="tech-service-list">
                    <li className="tech-service-item fade-up-alt">
                      <div className="tech-service-item-icon is-large w-embed">
                        <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="0.387" y="0.387" width="47.2" height="47.2" rx="13.5" stroke="#FAFAFA" strokeOpacity="0.3" strokeWidth="0.77" />
                          <path d="M22 25.4c.34 0 .62.28.62.62v6.54c0 .55-.67.83-1.06.44l-6.52-6.54c-.39-.39-.11-1.06.44-1.06H22Z" fill="white" fillOpacity="0.3" />
                          <path d="M22.6 15.2c.34 0 .62.28.62.62v6.53c0 .55-.67.83-1.06.44L15.6 16.2c-.39-.39-.11-1.06.44-1.06h6.53Z" fill="white" fillOpacity="0.3" />
                          <path d="M32.5 25.2c.34 0 .62.28.62.62v6.53c0 .55-.67.83-1.06.44l-6.52-6.54c-.39-.39-.11-1.06.44-1.06h6.53Z" fill="white" fillOpacity="0.3" />
                          <path d="M33.1 15.2c.34 0 .62.28.62.62v6.53c0 .55-.67.83-1.06.44L26.1 16.2c-.39-.39-.11-1.06.44-1.06h6.53Z" fill="#00e5ff" />
                        </svg>
                      </div>
                      <div className="service-service-item-caption">
                        <h3 className="tech-service-item-title">Communication you can rely on</h3>
                        <p className="text-body">
                          Direct Slack channels, rapid response cadences, structured weekly reviews, and clear
                          documentation for every workflow so your team always knows what was shipped.
                        </p>
                      </div>
                    </li>

                    <li className="tech-service-item fade-up-alt">
                      <div className="tech-service-item-icon is-large w-embed">
                        <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="0.387" y="0.387" width="47.2" height="47.2" rx="13.5" stroke="#FAFAFA" strokeOpacity="0.3" strokeWidth="0.77" />
                          <circle cx="27.5" cy="21.5" r="8.1" fill="white" fillOpacity="0.3" />
                          <circle cx="21.5" cy="27.5" r="8.1" fill="#00e5ff" />
                        </svg>
                      </div>
                      <div className="service-service-item-caption">
                        <h3 className="tech-service-item-title">Speed without chaos</h3>
                        <p className="text-body">
                          We iterate rapidly through modular automation components. You receive functional,
                          tested prototypes within days, not months of theoretical architecture discussions.
                        </p>
                      </div>
                    </li>

                    <li className="tech-service-item fade-up-alt">
                      <div className="tech-service-item-icon is-large w-embed">
                        <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="0.387" y="0.387" width="47.2" height="47.2" rx="13.5" stroke="#FAFAFA" strokeOpacity="0.3" strokeWidth="0.77" />
                          <path opacity="0.3" d="M19.3 16.4l11.8 11.8-3 3-11.8-11.8 3-3Z" fill="white" />
                          <rect x="12.4" y="12.4" width="8.5" height="8.5" rx="4.25" fill="#00e5ff" />
                        </svg>
                      </div>
                      <div className="service-service-item-caption">
                        <h3 className="tech-service-item-title">Predictable & secure delivery</h3>
                        <p className="text-body">
                          Every automation scenario is built with explicit rollback provisions, end-to-end logging,
                          and strict adherence to ISO and SOC security guidelines.
                        </p>
                      </div>
                    </li>
                  </ul>
                </section>

                {/* =============================================================
                    07. CERTIFIED PARTNER & ARCHITECTURE
                    ============================================================= */}
                <section className="tech-sertificate">
                  <h2
                    color-word="#00e5ff"
                    text-split=""
                    lines-slide-up=""
                    color-words-index="1"
                    className="tech-section-title"
                  >
                    Certified <span className="text-[#00e5ff]">automation partner</span>
                  </h2>
                  <div className="text-body">
                    We’re officially certified automation specialists — meaning your enterprise automations
                    are engineered and optimized by verified experts.
                  </div>
                  <div className="w-layout-grid tech_3col">
                    <div className="tech_sertificate_item">
                      <div className="tech_sertificate_point">
                        <div className="tech_sertificate_dot"></div>
                        <div className="tech_sertificate_text">
                          Build and connect workflows across 1,500+ apps
                        </div>
                      </div>
                      <div className="tech_sertificate_point">
                        <div className="tech_sertificate_dot"></div>
                        <div className="tech_sertificate_text">
                          Optimize or refactor mission-critical automation scenarios
                        </div>
                      </div>
                      <div className="tech_sertificate_point">
                        <div className="tech_sertificate_dot"></div>
                        <div className="tech_sertificate_text">
                          Eliminate repetitive manual operational overhead for teams
                        </div>
                      </div>
                    </div>

                    <div className="tech_sertificate_img flex items-center justify-center p-4">
                      <img
                        src="/images/services/ai-automation/693050f600731f56aa77d6d2_Group 1171276601.png"
                        loading="lazy"
                        alt="Make certified partner badge"
                        className="max-h-40 object-contain"
                      />
                    </div>

                    <div className="tech_sertificate_item">
                      <div className="tech_sertificate_point">
                        <div className="tech_sertificate_dot"></div>
                        <div className="tech_sertificate_text">
                          Add multimodal AI parsing, vector retrieval, and automated routing
                        </div>
                      </div>
                      <div className="tech_sertificate_point is-last">
                        <div className="tech_sertificate_dot"></div>
                        <div className="tech_sertificate_text">
                          Clear ROI metrics, error observability, and proactive monitoring
                        </div>
                      </div>
                    </div>
                  </div>
                  <a href="#contact-section" className="button button_smaller">
                    Explore solutions
                  </a>
                </section>

                {/* =============================================================
                    08. TECHNOLOGIES WE USE IN AI & AUTOMATION (SWIPER ECOSYSTEM)
                    Exact Reusable Component matching authentic Webflow ecosystem slider!
                    ============================================================= */}
                <TechEcosystemSection />

                {/* =============================================================
                    09. TESTIMONIALS SECTION (SWIPER CLIENT CHAT REVIEWS)
                    Exact Reusable Component configured with authentic service reviews!
                    ============================================================= */}
                <TestimonialsSection
                  id="testimonials-section"
                  variant="services"
                  title={
                    <>
                      What our clients say… <span className="text-[#00e5ff]">for real</span>
                    </>
                  }
                  items={AI_AUTOMATION_TESTIMONIALS}
                />

                {/* =============================================================
                    10. BUSINESSES WE SERVE WITH AI & AUTOMATION
                    ============================================================= */}
                <section id="solutions" className="tech-customize">
                  <h2
                    color-word="#00e5ff"
                    text-split=""
                    lines-slide-up=""
                    color-words-index="0,1,2"
                    className="tech-section-title mb-60"
                  >
                    <span className="text-[#00e5ff]">Businesses we serve</span> with AI & automation
                  </h2>
                  <div className="w-dyn-list">
                    <div role="list" className="tech-service-cards w-dyn-items">
                      {/* Card 1: Agencies */}
                      <div role="listitem" className="w-dyn-item">
                        <div className="tech-service-card">
                          <div
                            style={{
                              backgroundImage:
                                "url('/images/services/ai-automation/68d52d57009f7380eb0f180d_tech-services-card-bg-1.png')",
                            }}
                            className="tech-services-card-bg is-first"
                          ></div>
                          <div className="tech-service-card-icon">
                            <img
                              src="/images/services/ai-automation/68d52e481162e0f92ee41817_Group 63800.svg"
                              loading="lazy"
                              alt="Agencies icon"
                            />
                          </div>
                          <div className="tech-service-card-caption">
                            <h3 className="tech-service-item-title">Agencies</h3>
                            <p className="text-body in-tech-service-card">
                              White-label automation with clear reporting. From intelligent agents to content ops —
                              engineered to fit your stack and brand without staffing overhead.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Card 2: Startups */}
                      <div role="listitem" className="w-dyn-item">
                        <div className="tech-service-card">
                          <div
                            style={{
                              backgroundImage:
                                "url('/images/services/ai-automation/68d52ea3fbeee273024f9d8a_tech-services-card-bg-2.webp')",
                            }}
                            className="tech-services-card-bg is-first"
                          ></div>
                          <div className="tech-service-card-icon">
                            <img
                              src="/images/services/ai-automation/68d52ec3d584a70bcfbed5c1_Group 63801.svg"
                              loading="lazy"
                              alt="Startups icon"
                            />
                          </div>
                          <div className="tech-service-card-caption">
                            <h3 className="tech-service-item-title">Startups</h3>
                            <p className="text-body in-tech-service-card">
                              Rapid AI PoC and MVP buildouts in weeks: fast learnings, immediate operational
                              leverage, and scalable architecture that doesn&#x27;t require rebuilding later.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Card 3: SMEs */}
                      <div role="listitem" className="w-dyn-item">
                        <div className="tech-service-card">
                          <div
                            style={{
                              backgroundImage:
                                "url('/images/services/ai-automation/68d52ef3a569956809ce0677_tech-services-card-bg-3.webp')",
                            }}
                            className="tech-services-card-bg is-first"
                          ></div>
                          <div className="tech-service-card-icon">
                            <img
                              src="/images/services/ai-automation/68d52edfe5970647b0d82282_Group 63800(1).svg"
                              loading="lazy"
                              alt="SMEs icon"
                            />
                          </div>
                          <div className="tech-service-card-caption">
                            <h3 className="tech-service-item-title">SMEs</h3>
                            <p className="text-body in-tech-service-card">
                              Eliminate manual ops: CRM/inboxes/spreadsheets, automated lead routing, and
                              knowledge search so your core team focuses entirely on customer value.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Card 4: Enterprises */}
                      <div role="listitem" className="w-dyn-item">
                        <div className="tech-service-card">
                          <div
                            style={{
                              backgroundImage:
                                "url('/images/services/ai-automation/68d52f0b354fc6199419a618_tech-services-card-bg-4.webp')",
                            }}
                            className="tech-services-card-bg is-first"
                          ></div>
                          <div className="tech-service-card-icon">
                            <img
                              src="/images/services/ai-automation/68d52ed92cec1b33151e415c_Group 63800.svg"
                              loading="lazy"
                              alt="Enterprises icon"
                            />
                          </div>
                          <div className="tech-service-card-caption">
                            <h3 className="tech-service-item-title">Enterprises</h3>
                            <p className="text-body in-tech-service-card">
                              Enterprise governance, granular RBAC, complete telemetry observability, and
                              automated compliance aligned with corporate security and privacy policies.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              {/* =============================================================
                  ASIDE STICKY: FOUNDER PROFILE (SUNIL PANCHANI)
                  ============================================================= */}
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
                        <div className="cta-bn__position">Founder & Director, TechForbs</div>
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
                11. BRAND LOGOS SECTION
                ================================================================= */}
            <BrandLogos />

            {/* =================================================================
                12. CTA BANNER (FOUNDER PROFILE COMPOSITION)
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
                            <p className="cta-bn__position">Founder & Director, TechForbs</p>
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

            {/* =================================================================
                13. FAQ SECTION (AI & AUTOMATION SPECIFIC)
                ================================================================= */}
            <div className="tech-main-inner margin-bottom-7-5 overflow-hidden">
              <div className="tech-content">
                <section id="faq" className="tech-faq">
                  <h2 lines-slide-up="" text-split="" className="tech-section-title mb-60">
                    Frequently asked questions (FAQ)
                  </h2>
                  <div className="w-dyn-list">
                    <div
                      itemType="https://schema.org/FAQPage"
                      itemScope={true}
                      role="list"
                      className="faq w-dyn-items"
                    >
                      {/* FAQ 1 */}
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
                            <div itemProp="name">Do you build everything with custom code?</div>
                          </div>
                          <nav className="faq-item-header-dropdown w-dropdown-list">
                            <div
                              itemProp="acceptedAnswer"
                              itemScope={true}
                              itemType="https://schema.org/Answer"
                              className="faq-item-header-dropdown-inner"
                            >
                              <div itemProp="text" className="w-richtext">
                                <p>
                                  We adopt a hybrid, high-leverage approach. We utilize modern orchestration engines (n8n, Make, Vercel AI SDK) for rapid deployment and cost-effectiveness, and write custom microservices and TypeScript/Python code for complex business logic, bespoke data pipelines, and high-performance algorithms.
                                </p>
                              </div>
                            </div>
                          </nav>
                        </div>
                      </div>

                      {/* FAQ 2 */}
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
                            <div itemProp="name">Where do you use AI vs. simple deterministic rules?</div>
                          </div>
                          <nav className="faq-item-header-dropdown w-dropdown-list">
                            <div
                              itemProp="acceptedAnswer"
                              itemScope={true}
                              itemType="https://schema.org/Answer"
                              className="faq-item-header-dropdown-inner"
                            >
                              <div itemProp="text" className="w-richtext">
                                <p>
                                  We deploy AI for classification, entity extraction, summarization, and context-dependent decisions. Clear Boolean conditions, structured data formatting, and calculation logic remain rule-based — which is faster, cheaper, and 100% deterministic.
                                </p>
                              </div>
                            </div>
                          </nav>
                        </div>
                      </div>

                      {/* FAQ 3 */}
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
                            <div itemProp="name">Can a human review critical or high-stakes steps?</div>
                          </div>
                          <nav className="faq-item-header-dropdown w-dropdown-list">
                            <div
                              itemProp="acceptedAnswer"
                              itemScope={true}
                              itemType="https://schema.org/Answer"
                              className="faq-item-header-dropdown-inner"
                            >
                              <div itemProp="text" className="w-richtext">
                                <p>
                                  Yes. We integrate human-in-the-loop (HITL) checkpoints with custom confidence thresholds, interactive Slack/Teams notifications, escalation queues, and audit logging to ensure your team maintains absolute control.
                                </p>
                              </div>
                            </div>
                          </nav>
                        </div>
                      </div>

                      {/* FAQ 4 */}
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
                            <div itemProp="name">Which tools and platforms do you support?</div>
                          </div>
                          <nav className="faq-item-header-dropdown w-dropdown-list">
                            <div
                              itemProp="acceptedAnswer"
                              itemScope={true}
                              itemType="https://schema.org/Answer"
                              className="faq-item-header-dropdown-inner"
                            >
                              <div itemProp="text" className="w-richtext">
                                <p>
                                  We connect with Make, n8n, Zapier, Retool, LangChain, OpenAI, Anthropic Claude, Slack, HubSpot, Salesforce, PostgreSQL, Shopify, Webflow, and custom REST/GraphQL enterprise endpoints.
                                </p>
                              </div>
                            </div>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <aside className="tech-aside is-empty"></aside>
            </div>

            {/* =================================================================
                14. CONTACT SECTION
                ================================================================= */}
            <ContactSection />
          </main>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}

