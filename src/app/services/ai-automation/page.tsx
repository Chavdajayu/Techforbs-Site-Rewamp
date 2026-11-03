import type { Metadata } from "next";
import Navbar from "@/components/navigation/Navbar";
import BrandLogos from "@/components/brand-logos/BrandLogos";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/footer/Footer";
import SmoothScroll from "@/components/smooth-scroll/SmoothScroll";
import AIAutomationClientInteractions from "@/components/services/AIAutomationClientInteractions";

export const metadata: Metadata = {
  title: "AI & Automation Services | Intelligent Workflows & Agent Engineering - TechForbs",
  description:
    "Deploy custom intelligent agents, end-to-end workflow automation, and LLM orchestration engineered for high ROI, measurable speed, and enterprise reliability by TechForbs.",
  keywords: [
    "AI automation",
    "intelligent agents",
    "workflow automation",
    "n8n automation",
    "Make automation",
    "LLM integration",
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
                      AI &amp; Automation = Faster Workflows → Higher ROI
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
                    What do our AI &amp; automation services include?
                  </h2>
                  <div className="text-block is-gray margin-bottom-50">
                    We build, connect, and scale automations that save time and prevent human errors —
                    combining AI precision with reliable engineering agility.
                  </div>
                  <div className="w-dyn-list">
                    <div role="list" className="tech-service-cards w-dyn-items">
                      {/* Card 1 */}
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
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                            </svg>
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

                      {/* Card 2 */}
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
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="M12 16v-4"></path>
                              <path d="M12 8h.01"></path>
                            </svg>
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

                      {/* Card 3 */}
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
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                              <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                          </div>
                          <div className="tech-service-card-caption">
                            <h3 className="tech-service-item-title">
                              Email &amp; document processing
                            </h3>
                            <p className="text-body in-tech-service-card">
                              AI-assisted parsing of high-volume inboxes, invoices, and PDFs: extract structured data
                              directly to your database or CRM, and flag unusual anomalies for instant manual review.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Card 4 */}
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
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                            </svg>
                          </div>
                          <div className="tech-service-card-caption">
                            <h3 className="tech-service-item-title">
                              Ops for sales &amp; support
                            </h3>
                            <p className="text-body in-tech-service-card">
                              Lead sourcing &amp; enrichment, bi-directional CRM synchronization, automated ticket
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
                    AI + automation: better together
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
                          <circle cx="20" cy="20" r="16" stroke="#00e5ff" strokeWidth="3" />
                          <path d="M14 20l4 4 8-8" stroke="#00e5ff" strokeWidth="3" strokeLinecap="round" />
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
                <section id="services" className="tech-services">
                  <h2
                    color-word="#00e5ff"
                    text-split=""
                    lines-slide-up=""
                    color-words-index="3,4,5"
                    className="tech-section-title mb-60"
                  >
                    How we build automations that work
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
                        <h3 className="tech-service-item-title">Discovery &amp; mapping</h3>
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
                        <h3 className="tech-service-item-title">Integration &amp; setup</h3>
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
                        <h3 className="tech-service-item-title">Testing &amp; handoff</h3>
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
                    05. WINNING WITH US: OUR CLIENTS' SUCCESS (CASE STUDIES)
                    ============================================================= */}
                <section id="why-we" className="tech-benefits">
                  <h2
                    color-word="#00e5ff"
                    text-split=""
                    lines-slide-up=""
                    color-words-index="5,6"
                    className="tech-section-title mb-60"
                  >
                    Winning with us: our clients&#x27; success
                  </h2>
                  <div className="cases-wrap is-services-page">
                    <div className="cases-slider w-dyn-list">
                      <div role="list" className="swiper-wrapper w-dyn-items flex flex-col md:flex-row gap-6 overflow-x-auto pb-4">
                        {/* Case 1: SACLAB */}
                        <div role="listitem" className="swiper-slide w-dyn-item min-w-[340px] md:min-w-[420px]">
                          <div className="case-item is-no-link bg-[#181818] p-6 rounded-2xl border border-white/10 hover:border-[#00e5ff]/40 transition-all">
                            <div className="case-item-image rounded-xl overflow-hidden mb-5 bg-[#122336] p-4 flex items-center justify-center">
                              <img
                                src="/images/home/f4e1f7273934d40237194f475ed8563c_Cover.webp"
                                alt="SACLAB Platform"
                                className="case-item-thumb rounded-lg max-h-48 object-cover"
                              />
                            </div>
                            <h4 className="title_20 font-semibold mb-2">
                              SACLAB: Automated inventory &amp; luxury resale platform
                            </h4>
                            <p className="text-body body-smaller text-white/70">
                              Integrated multi-channel inventory sync, automated authentication workflows, and instantaneous catalog generation.
                            </p>
                          </div>
                        </div>

                        {/* Case 2: TechHunt */}
                        <div role="listitem" className="swiper-slide w-dyn-item min-w-[340px] md:min-w-[420px]">
                          <div className="case-item is-no-link bg-[#181818] p-6 rounded-2xl border border-white/10 hover:border-[#00e5ff]/40 transition-all">
                            <div className="case-item-image rounded-xl overflow-hidden mb-5 bg-[#251532] p-4 flex items-center justify-center">
                              <img
                                src="/images/home/d8a87383a15993bdf8be94f08f0290ca_cover.webp"
                                alt="TechHunt Platform"
                                className="case-item-thumb rounded-lg max-h-48 object-cover"
                              />
                            </div>
                            <h4 className="title_20 font-semibold mb-2">
                              TechHunt: AI-assisted talent matching &amp; vetting engine
                            </h4>
                            <p className="text-body body-smaller text-white/70">
                              Automated resume parsing, semantic candidate scoring, and calendar scheduling integrations handling thousands of applicants.
                            </p>
                          </div>
                        </div>

                        {/* Case 3: HIVE */}
                        <div role="listitem" className="swiper-slide w-dyn-item min-w-[340px] md:min-w-[420px]">
                          <div className="case-item is-no-link bg-[#181818] p-6 rounded-2xl border border-white/10 hover:border-[#00e5ff]/40 transition-all">
                            <div className="case-item-image rounded-xl overflow-hidden mb-5 bg-[#1a2d1d] p-4 flex items-center justify-center">
                              <img
                                src="/images/home/hive-cover.webp"
                                alt="HIVE Platform"
                                className="case-item-thumb rounded-lg max-h-48 object-cover"
                              />
                            </div>
                            <h4 className="title_20 font-semibold mb-2">
                              HIVE: Intelligent resource scheduling &amp; operational telemetry
                            </h4>
                            <p className="text-body body-smaller text-white/70">
                              Dynamic utilization forecasting, real-time Slack/webhook alerts, and automated client billing pipelines.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* =============================================================
                    06. WHY TEAMS CHOOSE TECHFORBS
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
                          documentation for every workflow so your team always knows what was shipped.
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
                          We iterate rapidly through modular automation components. You receive functional,
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
                          Every automation scenario is built with explicit rollback provisions, end-to-end logging,
                          and strict adherence to ISO and SOC security guidelines.
                        </p>
                      </div>
                    </li>
                  </ul>
                </section>

                {/* =============================================================
                    07. ENTERPRISE AI AUTOMATION ARCHITECTURE
                    ============================================================= */}
                <section className="tech-sertificate">
                  <h2
                    color-word="#00e5ff"
                    text-split=""
                    lines-slide-up=""
                    color-words-index="1"
                    className="tech-section-title"
                  >
                    Enterprise AI automation architecture
                  </h2>
                  <div className="text-body">
                    We engineer resilient, production-ready AI pipelines and automated workflows
                    built on enterprise architectural standards.
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
                      <div className="w-32 h-32 rounded-2xl bg-[#141414] border border-[#00e5ff]/30 flex flex-col items-center justify-center p-4 shadow-[0_0_30px_rgba(0,229,255,0.15)]">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                          <line x1="8" y1="21" x2="16" y2="21"></line>
                          <line x1="12" y1="17" x2="12" y2="21"></line>
                        </svg>
                        <span className="text-xs uppercase tracking-wider font-semibold text-[#00e5ff] mt-2">Enterprise AI</span>
                      </div>
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
                    08. TECHNOLOGIES WE USE IN AI & AUTOMATION
                    ============================================================= */}
                <section id="ecosystem" className="tech-ecosystem">
                  <h2
                    color-word="#00e5ff"
                    text-split=""
                    lines-slide-up=""
                    color-words-index="0"
                    className="tech-section-title mb-60"
                  >
                    Technologies we use in AI &amp; automation
                  </h2>
                  <div className="fade-up-alt">
                    <div className="tech-slider-wrap">
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {[
                          { name: "Make / Integromat", icon: "/images/services/ai-automation/69522e11748d65f95259bf76_make-color 1.svg" },
                          { name: "n8n Automation", icon: "/images/services/ai-automation/69522e119ada4a224d43f995_n8n-color 1.svg" },
                          { name: "Python AI & Agents", icon: "/images/technologies/6613b9be680c55ac4b07fa82_python.svg" },
                          { name: "Node.js Services", icon: "/images/technologies/6613ba19ecc9cd312295669d_nodevg.svg" },
                          { name: "Next.js & React", icon: "/images/technologies/6613b9d1ecb1cc050a0e9b21_react.svg" },
                          { name: "Shopify Ecosystem", icon: "/images/technologies/6613ba0792d3339b64c8a066_hopify.svg" },
                          { name: "WooCommerce API", icon: "/images/technologies/6613b99db664ec9b28788819_woocom.svg" },
                          { name: "Enterprise PHP", icon: "/images/technologies/6613b9a8135ca957aa3d95c4_php.svg" },
                        ].map((tech, idx) => (
                          <div key={idx} className="tech-ecosystem-item p-4 rounded-xl bg-[#161616] border border-white/10 flex flex-col items-center justify-center text-center hover:border-[#00e5ff]/40 transition-all">
                            <div className="tech-ecosystem-item-image-wrap h-12 w-12 flex items-center justify-center mb-3">
                              <img
                                src={tech.icon}
                                alt={tech.name}
                                className="max-h-10 max-w-10 object-contain"
                              />
                            </div>
                            <div className="text-sm font-medium text-white/90">{tech.name}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                {/* =============================================================
                    09. TESTIMONIALS SECTION
                    ============================================================= */}
                <section id="testimonials-section" className="tech-testimonials">
                  <h2
                    data-testimonials-title=""
                    text-split=""
                    lines-slide-up=""
                    color-words-index="4,5"
                    color-word="#00e5ff"
                    className="tech-section-title mb-60 desktop"
                  >
                    What our clients say… for real
                  </h2>
                  <h2
                    data-testimonials-title=""
                    text-split=""
                    lines-slide-up=""
                    color-words-index="4,5"
                    color-word="#00e5ff"
                    className="tech-section-title mb-60 mobile"
                  >
                    What our clients say…<br />for real
                  </h2>
                  <div className="fade-up-alt">
                    <div className="tech-testimonials__slider">
                      <div className="tech-testimonials__slider-wrapper tech-variant swiper w-dyn-list">
                        <div role="list" className="swiper-wrapper w-dyn-items flex flex-col md:flex-row gap-6 overflow-x-auto pb-4">
                          {/* Testimonial 1 */}
                          <div role="listitem" className="swiper-slide w-dyn-item min-w-[340px] md:min-w-[420px]">
                            <div className="testimonials__card tech-variant">
                              <div className="testimonials__card-inner">
                                <div style={{ backgroundColor: "#00e5ff22" }} className="testimonials__card-bg"></div>
                                <div className="testimonials__card-caption tech-variant">
                                  <img
                                    loading="lazy"
                                    alt="Client avatar"
                                    src="/images/technologies/68502c460e19db138dd98e5a_kiseliova.webp"
                                    className="testimonials__card-avatar tech-variant"
                                  />
                                  <p className="testimonials__card-name">Iryna Kyselova</p>
                                  <p className="testimonials__card-position body-smaller text-uppercase">CEO, TechHunt</p>
                                </div>
                                <div className="testimonials__card-inner-scroller">
                                  <div className="testimonials__card-list">
                                    <div className="testimonials__card-message-wrapper tech-variant">
                                      <div className="testimonials__card-message tech-variant">
                                        <p className="testimonials__card-message-text tech-variant">Automated matching pipeline works flawlessly</p>
                                        <p className="testimonials__card-message-time tech-variant color-white-70">4:45 PM</p>
                                      </div>
                                    </div>
                                    <div className="testimonials__card-message-wrapper">
                                      <div className="testimonials__card-message tech-variant">
                                        <p className="testimonials__card-message-text tech-variant">Saved 30+ recruiting hours every week</p>
                                        <p className="testimonials__card-message-time tech-variant color-white-70">4:56 PM</p>
                                      </div>
                                    </div>
                                    <div className="testimonials__card-message-wrapper">
                                      <div className="testimonials__card-message tech-variant">
                                        <p className="testimonials__card-message-text tech-variant">Highly recommend TechForbs team!</p>
                                        <p className="testimonials__card-message-time tech-variant color-white-70">4:58 PM</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Testimonial 2 */}
                          <div role="listitem" className="swiper-slide w-dyn-item min-w-[340px] md:min-w-[420px]">
                            <div className="testimonials__card tech-variant">
                              <div className="testimonials__card-inner">
                                <div style={{ backgroundColor: "#22c55e22" }} className="testimonials__card-bg"></div>
                                <div className="testimonials__card-caption tech-variant">
                                  <img
                                    loading="lazy"
                                    alt="Client avatar"
                                    src="/images/technologies/68502b31c839a090ed9cb36d_kozak.webp"
                                    className="testimonials__card-avatar tech-variant"
                                  />
                                  <p className="testimonials__card-name">Oleksandra Kozak</p>
                                  <p className="testimonials__card-position body-smaller text-uppercase">CXO, Habitat</p>
                                </div>
                                <div className="testimonials__card-inner-scroller">
                                  <div className="testimonials__card-list">
                                    <div className="testimonials__card-message-wrapper tech-variant">
                                      <div className="testimonials__card-message tech-variant">
                                        <p className="testimonials__card-message-text tech-variant">Automation handles 75k daily operations</p>
                                        <p className="testimonials__card-message-time tech-variant color-white-70">12:28 AM</p>
                                      </div>
                                    </div>
                                    <div className="testimonials__card-message-wrapper">
                                      <div className="testimonials__card-message tech-variant">
                                        <p className="testimonials__card-message-text tech-variant">Zero downtime during peak spikes</p>
                                        <p className="testimonials__card-message-time tech-variant color-white-70">12:32 AM</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

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
                    Businesses we serve with AI &amp; automation
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
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                              <line x1="8" y1="21" x2="16" y2="21"></line>
                              <line x1="12" y1="17" x2="12" y2="21"></line>
                            </svg>
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
                                "url('/images/services/ai-automation/68d52d57009f7380eb0f180d_tech-services-card-bg-1.png')",
                            }}
                            className="tech-services-card-bg is-first"
                          ></div>
                          <div className="tech-service-card-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
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
                                "url('/images/services/ai-automation/68d52d57009f7380eb0f180d_tech-services-card-bg-1.png')",
                            }}
                            className="tech-services-card-bg is-first"
                          ></div>
                          <div className="tech-service-card-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="18" y1="20" x2="18" y2="10"></line>
                              <line x1="12" y1="20" x2="12" y2="4"></line>
                              <line x1="6" y1="20" x2="6" y2="14"></line>
                            </svg>
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
                                "url('/images/services/ai-automation/68d52d57009f7380eb0f180d_tech-services-card-bg-1.png')",
                            }}
                            className="tech-services-card-bg is-first"
                          ></div>
                          <div className="tech-service-card-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            </svg>
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
