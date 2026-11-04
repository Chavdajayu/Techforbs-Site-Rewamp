import type { Metadata } from "next";
import Navbar from "@/components/navigation/Navbar";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/footer/Footer";
import SmoothScroll from "@/components/smooth-scroll/SmoothScroll";
import AIAutomationClientInteractions from "@/components/services/AIAutomationClientInteractions";
import { BRAND_LOGOS } from "@/data/siteData";
import "@/styles/ai-automation-page.css";

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
      <div className="ai-automation-page relative min-h-screen bg-[#101010] text-white selection:bg-[#00e5ff] selection:text-black">
        <Navbar />
        <AIAutomationClientInteractions />

        <main className="relative z-10 flex flex-col">
          {/* =================================================================
              01. HERO SECTION
              ================================================================= */}
          <section className="services-hero">
            <div className="service-hero-gradient"></div>
            <div className="service-hero-inner">
              <img
                src="/images/services/ai-automation/69273fea692d3db88c70d620_ai-bg.webp"
                loading="eager"
                alt="AI & Automation Workflow Architecture"
                className="service-hero-bg"
              />
              <img
                src="/images/services/ai-automation/664319142c43bfb250429812_decor.svg"
                loading="lazy"
                alt=""
                className="service-hero-inner-decor"
              />
              <div className="service-hero__content width-42 relative z-10">
                <div className="fade-up-alt">
                  <div className="services-hero-title-wrap">
                    <div
                      data-wf--title-circle--variant="base"
                      className="title-circle service-hero_circle"
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
                    <h1 className="service-hero-title">
                      AI &amp; automation ={" "}
                      <span className="text-[#00e5ff]">faster workflows → higher ROI</span>
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
              MAIN CONTENT WITH STICKY FOUNDER PROFILE ASIDE
              ================================================================= */}
          <div className="tech-main padding-top-112 pb-0">
            <div className="tech-main-inner services-pages">
              <div className="tech-content tab-mw-100">
                {/* =============================================================
                    02. WHAT DO OUR AI & AUTOMATION SERVICES INCLUDE?
                    ============================================================= */}
                <section id="solutions" className="tech-customize mb-24">
                  <h2 className="tech-section-title mb-60">
                    What do our{" "}
                    <span className="accent-text">AI &amp; automation services include?</span>
                  </h2>
                  <div className="text-block is-gray margin-bottom-50 text-white/70 text-lg mb-8">
                    We build, connect, and scale automations that save time and prevent human errors —
                    combining AI precision with reliable engineering agility.
                  </div>
                  <div className="w-dyn-list">
                    <div role="list" className="tech-service-cards w-dyn-items">
                      {/* Card 1 */}
                      <div role="listitem" className="w-dyn-item">
                        <div className="tech-service-card group">
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
                        <div className="tech-service-card group">
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
                        <div className="tech-service-card group">
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
                        <div className="tech-service-card group">
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
                    03. AI + AUTOMATION: BETTER TOGETHER + RESTORED WORKFLOW UI ILLUSTRATION
                    ============================================================= */}
                <section id="services" className="tech-services mb-24">
                  <h2 className="tech-section-title mb-60">
                    AI + automation: <span className="accent-text">better together</span>
                  </h2>
                  <div className="text-block is-gray margin-bottom-50 text-white/70 text-lg mb-8">
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

                  {/* CRITICAL RESTORED WORKFLOW / UI ILLUSTRATION GRID */}
                  <div className="workflow-illustration-wrap fade-up-alt">
                    <div className="team__grid in-service-page">
                      {/* Grid Item 1: Cyan/Blue gradient accent cap */}
                      <div className="team__grid_item">
                        <div className="team__grid_pic_wrap"></div>
                      </div>

                      {/* Grid Item 2: Sales CRM screen */}
                      <div className="team__grid_item">
                        <div className="team__grid_pic_wrap">
                          <div className="team__grid_pic">
                            <img
                              alt="Sales CRM automation dashboard"
                              loading="lazy"
                              src="/images/services/ai-automation/ui-screen-crm.webp"
                              className="team__grid_img"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Grid Item 3: Slack communication screen */}
                      <div className="team__grid_item">
                        <div className="team__grid_pic_wrap">
                          <div className="team__grid_pic">
                            <img
                              alt="Real-time messaging & automation triggers"
                              loading="lazy"
                              src="/images/services/ai-automation/ui-screen-slack.webp"
                              className="team__grid_img"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Grid Item 4: Retool database & order management dashboard */}
                      <div className="team__grid_item">
                        <div className="team__grid_pic_wrap">
                          <div className="team__grid_pic">
                            <img
                              alt="Internal order management and operations system"
                              loading="lazy"
                              src="/images/services/ai-automation/ui-screen-retool.webp"
                              className="team__grid_img"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Grid Item 5: AI chat & LLM categorization queue */}
                      <div className="team__grid_item">
                        <div className="team__grid_pic_wrap">
                          <div className="team__grid_pic">
                            <img
                              alt="OpenAI chat orchestration and query classification"
                              loading="lazy"
                              src="/images/services/ai-automation/ui-screen-chatgpt.webp"
                              className="team__grid_img"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Grid Item 6: Spacer */}
                      <div className="team__grid_item">
                        <div className="team__grid_pic_wrap">
                          <div className="team__grid_pic"></div>
                        </div>
                      </div>

                      {/* Grid Item 7: Cyan/Blue gradient accent cap */}
                      <div className="team__grid_item">
                        <div className="team__grid_pic_wrap"></div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* =============================================================
                    04. HOW WE BUILD AUTOMATIONS THAT WORK
                    ============================================================= */}
                <section id="how-we-build" className="tech-services mb-24">
                  <h2 className="tech-section-title mb-60">
                    How we build <span className="accent-text">automations that work</span>
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
                    05. WINNING WITH US: OUR CLIENTS' SUCCESS (RESTORED CAROUSEL)
                    ============================================================= */}
                <section id="why-we" className="tech-benefits mb-24">
                  <h2 className="tech-section-title mb-60">
                    Winning with us: <span className="accent-text">our clients&#x27; success</span>
                  </h2>
                  <div className="cases-wrap is-services-page">
                    <div className="portfolio-slider-container">
                      {/* Case 1: SACLAB */}
                      <div className="portfolio-slide-item">
                        <div className="case-item is-no-link">
                          <div style={{ backgroundColor: "#cae3fe" }} className="case-item-image">
                            <img
                              src="/images/services/ai-automation/case-bg.svg"
                              alt=""
                              className="case-item-circles"
                            />
                            <img
                              src="/images/services/ai-automation/case-saclab.webp"
                              alt="SACLAB platform dashboard preview"
                              className="case-item-thumb"
                            />
                          </div>
                          <h4 className="case-item-title">
                            SACLAB: Automated inventory &amp; luxury resale platform
                          </h4>
                          <p className="text-body text-white/70 text-sm mb-4">
                            Integrated multi-channel inventory sync, automated authentication workflows, and instantaneous catalog generation.
                          </p>
                          <div className="case-item_tags">
                            <span className="cms-tag">E-Commerce</span>
                            <span className="cms-tag">Automation</span>
                            <span className="cms-tag">Multi-Channel</span>
                          </div>
                        </div>
                      </div>

                      {/* Case 2: TechHunt */}
                      <div className="portfolio-slide-item">
                        <div className="case-item is-no-link">
                          <div style={{ backgroundColor: "#1e3a5f" }} className="case-item-image">
                            <img
                              src="/images/services/ai-automation/case-bg.svg"
                              alt=""
                              className="case-item-circles"
                            />
                            <img
                              src="/images/services/ai-automation/case-techhunt.webp"
                              alt="TechHunt talent matching portal"
                              className="case-item-thumb"
                            />
                          </div>
                          <h4 className="case-item-title">
                            TechHunt: AI-assisted talent matching &amp; vetting engine
                          </h4>
                          <p className="text-body text-white/70 text-sm mb-4">
                            Automated resume parsing, semantic candidate scoring, and calendar scheduling integrations handling thousands of applicants.
                          </p>
                          <div className="case-item_tags">
                            <span className="cms-tag">Recruitment</span>
                            <span className="cms-tag">LLM Agents</span>
                            <span className="cms-tag">Next.js</span>
                          </div>
                        </div>
                      </div>

                      {/* Case 3: HIVE */}
                      <div className="portfolio-slide-item">
                        <div className="case-item is-no-link">
                          <div style={{ backgroundColor: "#1b3323" }} className="case-item-image">
                            <img
                              src="/images/services/ai-automation/case-bg.svg"
                              alt=""
                              className="case-item-circles"
                            />
                            <img
                              src="/images/services/ai-automation/case-hive.webp"
                              alt="HIVE operational telemetry dashboard"
                              className="case-item-thumb"
                            />
                          </div>
                          <h4 className="case-item-title">
                            HIVE: Intelligent resource scheduling &amp; operational telemetry
                          </h4>
                          <p className="text-body text-white/70 text-sm mb-4">
                            Dynamic utilization forecasting, real-time Slack/webhook alerts, and automated client billing pipelines.
                          </p>
                          <div className="case-item_tags">
                            <span className="cms-tag">Enterprise Ops</span>
                            <span className="cms-tag">Webhooks</span>
                            <span className="cms-tag">Telemetry</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Carousel Controls */}
                    <div className="flex items-center justify-between mt-4">
                      <div className="slider-buttons">
                        <button
                          type="button"
                          className="button_slider swis-portfolio-prev"
                          aria-label="Previous project"
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 18l-6-6 6-6" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="button_slider swis-portfolio-next"
                          aria-label="Next project"
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 18l6-6-6-6" />
                          </svg>
                        </button>
                      </div>
                      <a href="#contact-section" className="button button_smaller">
                        Explore all case studies
                      </a>
                    </div>
                  </div>
                </section>

                {/* =============================================================
                    06. WHY TEAMS CHOOSE TECHFORBS + RESTORED TEAM COLLAGE
                    ============================================================= */}
                <section id="why-teams-choose" className="tech-services mb-24">
                  <h2 className="tech-section-title mb-60">
                    Why teams choose <span className="accent-text">TechForbs</span>
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

                  {/* CRITICAL RESTORED TEAM PHOTO COLLAGE */}
                  <div className="team-collage-wrap fade-up-alt">
                    <div className="team__grid in-service-page">
                      {/* Collage Item 1: Cyan/Blue gradient accent cap */}
                      <div className="team__grid_item">
                        <div className="team__grid_pic_wrap"></div>
                      </div>

                      {/* Collage Item 2: Authentic TechForbs Team Photo 1 */}
                      <div className="team__grid_item">
                        <div className="team__grid_pic_wrap">
                          <div className="team__grid_pic">
                            <img
                              alt="TechForbs engineering team"
                              loading="lazy"
                              src="/images/team/tf-team-collage-1.jpg"
                              className="team__grid_img"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Collage Item 3: Authentic TechForbs Team Photo 2 */}
                      <div className="team__grid_item">
                        <div className="team__grid_pic_wrap">
                          <div className="team__grid_pic">
                            <img
                              alt="TechForbs development sprint"
                              loading="lazy"
                              src="/images/team/tf-team-collage-2.jpg"
                              className="team__grid_img"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Collage Item 4: Authentic TechForbs Team Photo 3 */}
                      <div className="team__grid_item">
                        <div className="team__grid_pic_wrap">
                          <div className="team__grid_pic">
                            <img
                              alt="TechForbs architects collaborative session"
                              loading="lazy"
                              src="/images/team/tf-team-collage-3.jpg"
                              className="team__grid_img"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Collage Item 5: Authentic TechForbs Team Photo 4 */}
                      <div className="team__grid_item">
                        <div className="team__grid_pic_wrap">
                          <div className="team__grid_pic">
                            <img
                              alt="TechForbs workflow engineering review"
                              loading="lazy"
                              src="/images/team/tf-team-collage-4.jpg"
                              className="team__grid_img"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Collage Item 6: Authentic TechForbs Team Photo 5 */}
                      <div className="team__grid_item">
                        <div className="team__grid_pic_wrap">
                          <div className="team__grid_pic">
                            <img
                              alt="TechForbs team members"
                              loading="lazy"
                              src="/images/team/tf-team-collage-5.jpg"
                              className="team__grid_img"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Collage Item 7: Cyan/Blue gradient accent cap */}
                      <div className="team__grid_item">
                        <div className="team__grid_pic_wrap"></div>
                      </div>
                    </div>
                  </div>

                  <div className="tech-benefits-buttons fade-up-alt">
                    <a href="#contact-section" className="button button_smaller">
                      Get expert advice
                    </a>
                  </div>
                </section>

                {/* =============================================================
                    07. ENTERPRISE AI AUTOMATION ARCHITECTURE
                    ============================================================= */}
                <section className="tech-sertificate mb-24">
                  <h2 className="tech-section-title">
                    Enterprise <span className="accent-text">AI automation architecture</span>
                  </h2>
                  <div className="text-body text-white/70 max-w-2xl mb-4">
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

                    {/* Central High-Tech Architecture Badge */}
                    <div className="tech_sertificate_img">
                      <div className="w-40 h-40 rounded-full bg-[#121216] border-2 border-[#00e5ff] flex flex-col items-center justify-center p-4 text-center shadow-[0_0_35px_rgba(0,229,255,0.3)] relative">
                        <div className="absolute inset-1 rounded-full border border-[#00e5ff]/20 animate-pulse"></div>
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="mb-2">
                          <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                          <rect x="9" y="9" width="6" height="6"></rect>
                          <line x1="9" y1="1" x2="9" y2="4"></line>
                          <line x1="15" y1="1" x2="15" y2="4"></line>
                          <line x1="9" y1="20" x2="9" y2="23"></line>
                          <line x1="15" y1="20" x2="15" y2="23"></line>
                          <line x1="20" y1="9" x2="23" y2="9"></line>
                          <line x1="20" y1="14" x2="23" y2="14"></line>
                          <line x1="1" y1="9" x2="4" y2="9"></line>
                          <line x1="1" y1="14" x2="4" y2="14"></line>
                        </svg>
                        <span className="text-[10px] tracking-wider uppercase font-bold text-white leading-tight">
                          Enterprise AI
                        </span>
                        <span className="text-[8px] tracking-widest uppercase font-semibold text-[#00e5ff] mt-0.5">
                          Architecture
                        </span>
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
                    08. TECHNOLOGIES WE USE IN AI & AUTOMATION (HORIZONTAL CAROUSEL)
                    ============================================================= */}
                <section id="ecosystem" className="tech-ecosystem mb-24">
                  <h2 className="tech-section-title mb-60">
                    <span className="accent-text">Technologies</span> we use in AI &amp; automation
                  </h2>
                  <div className="fade-up-alt">
                    <div className="tech-slider-wrap">
                      <div className="tech-slider-container">
                        {[
                          { name: "Make / Integromat", icon: "/images/services/ai-automation/69522e11748d65f95259bf76_make-color 1.svg" },
                          { name: "n8n Automation", icon: "/images/services/ai-automation/69522e119ada4a224d43f995_n8n-color 1.svg" },
                          { name: "Python & LangChain", icon: "/images/technologies/6613b9be680c55ac4b07fa82_python.svg" },
                          { name: "Node.js Services", icon: "/images/technologies/6613ba19ecc9cd312295669d_nodevg.svg" },
                          { name: "React & Next.js", icon: "/images/technologies/6613b9d1ecb1cc050a0e9b21_react.svg" },
                          { name: "Shopify Ecosystem", icon: "/images/technologies/6613ba0792d3339b64c8a066_hopify.svg" },
                          { name: "WooCommerce API", icon: "/images/technologies/6613b99db664ec9b28788819_woocom.svg" },
                          { name: "Enterprise PHP", icon: "/images/technologies/6613b9a8135ca957aa3d95c4_php.svg" },
                        ].map((tech, idx) => (
                          <div key={idx} className="tech-slider-card">
                            <div className="tech-ecosystem-item">
                              <div className="tech-ecosystem-item-image-wrap">
                                <img
                                  src={tech.icon}
                                  alt={tech.name}
                                  className="tech-ecosystem-item-image"
                                />
                              </div>
                              <div className="tech-ecosystem-item-divider"></div>
                              <div className="tech-ecosystem-item-title">{tech.name}</div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Carousel Arrow Controls */}
                      <div className="slider-buttons">
                        <button
                          type="button"
                          className="button_slider tech-slider-prev"
                          aria-label="Previous technology"
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 18l-6-6 6-6" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="button_slider tech-slider-next"
                          aria-label="Next technology"
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 18l6-6-6-6" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </section>

                {/* =============================================================
                    09. TESTIMONIALS SECTION (LOGO STRIP + MULTI-CARD CAROUSEL)
                    ============================================================= */}
                <section id="testimonials-section" className="tech-testimonials mb-24">
                  <h2 className="tech-section-title mb-60">
                    What our clients say… <span className="accent-text">for real</span>
                  </h2>

                  {/* Partner Brand Logo Strip */}
                  <div className="tech-testimonials-nav-wrapper">
                    <img
                      src="/images/clients/whitehead-consulting.png"
                      alt="Whitehead Consulting logo"
                      className="tech-nav-image"
                    />
                    <img
                      src="/images/clients/bodhi.png"
                      alt="Bodhi Health logo"
                      className="tech-nav-image"
                    />
                    <img
                      src="/images/clients/hype-distribution.png"
                      alt="Hype Distribution logo"
                      className="tech-nav-image"
                    />
                    <img
                      src="/images/clients/allmax-nutrition.png"
                      alt="ALLMAX Nutrition logo"
                      className="tech-nav-image"
                    />
                    <img
                      src="/images/clients/adeeva.png"
                      alt="Adeeva Health logo"
                      className="tech-nav-image"
                    />
                    <img
                      src="/images/clients/finarkein.png"
                      alt="Finarkein logo"
                      className="tech-nav-image"
                    />
                  </div>

                  {/* Multi-Card Horizontal Testimonials Carousel */}
                  <div className="fade-up-alt mt-6">
                    <div className="testimonials-slider-container">
                      {/* Testimonial Card 1: TechHunt (Pastel Purple) */}
                      <div className="testimonial-slide-item">
                        <div className="testimonials__card tech-variant">
                          <div className="testimonials__card-inner">
                            <div style={{ backgroundColor: "#dbbaf4" }} className="testimonials__card-bg"></div>
                            <img
                              src="/images/services/ai-automation/case-techhunt.webp"
                              alt="TechHunt platform overview"
                              className="testimonials__card-overview tech-variant"
                            />
                            <div className="testimonials__card-caption tech-variant">
                              <img
                                src="/images/technologies/68502c460e19db138dd98e5a_kiseliova.webp"
                                alt="Iryna Kyselova"
                                className="testimonials__card-avatar tech-variant"
                              />
                              <p className="testimonials__card-name">Iryna Kyselova</p>
                              <p className="testimonials__card-position">CEO, TECHHUNT</p>
                            </div>
                            <div className="testimonials__card-inner-scroller">
                              <div className="testimonials__card-list">
                                <div className="testimonials__card-message tech-variant">
                                  <p className="testimonials__card-message-text tech-variant">Automated matching pipeline works flawlessly</p>
                                  <p className="testimonials__card-message-time tech-variant">4:45 PM</p>
                                </div>
                                <div className="testimonials__card-message tech-variant">
                                  <p className="testimonials__card-message-text tech-variant">Saved 30+ recruiting hours every week</p>
                                  <p className="testimonials__card-message-time tech-variant">4:56 PM</p>
                                </div>
                                <div className="testimonials__card-message tech-variant">
                                  <p className="testimonials__card-message-text tech-variant">On time as promised</p>
                                  <p className="testimonials__card-message-time tech-variant">4:57 PM</p>
                                </div>
                                <div className="testimonials__card-message tech-variant">
                                  <p className="testimonials__card-message-text tech-variant">Highly recommend TechForbs team!</p>
                                  <p className="testimonials__card-message-time tech-variant">4:58 PM</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Testimonial Card 2: Habitat (Mint Green) */}
                      <div className="testimonial-slide-item">
                        <div className="testimonials__card tech-variant">
                          <div className="testimonials__card-inner">
                            <div style={{ backgroundColor: "#a0eeb0" }} className="testimonials__card-bg"></div>
                            <img
                              src="/images/services/ai-automation/case-saclab.webp"
                              alt="Habitat platform overview"
                              className="testimonials__card-overview tech-variant"
                            />
                            <div className="testimonials__card-caption tech-variant">
                              <img
                                src="/images/technologies/68502b31c839a090ed9cb36d_kozak.webp"
                                alt="Oleksandra Kozak"
                                className="testimonials__card-avatar tech-variant"
                              />
                              <p className="testimonials__card-name">Oleksandra Kozak</p>
                              <p className="testimonials__card-position">CXO, HABITAT</p>
                            </div>
                            <div className="testimonials__card-inner-scroller">
                              <div className="testimonials__card-list">
                                <div className="testimonials__card-message tech-variant">
                                  <p className="testimonials__card-message-text tech-variant">Platform handles 75k users now</p>
                                  <p className="testimonials__card-message-time tech-variant">12:28 AM</p>
                                </div>
                                <div className="testimonials__card-message tech-variant">
                                  <p className="testimonials__card-message-text tech-variant">92% satisfaction rate across workflows</p>
                                  <p className="testimonials__card-message-time tech-variant">12:32 AM</p>
                                </div>
                                <div className="testimonials__card-message tech-variant">
                                  <p className="testimonials__card-message-text tech-variant">User engagement +45%</p>
                                  <p className="testimonials__card-message-time tech-variant">12:34 AM</p>
                                </div>
                                <div className="testimonials__card-message tech-variant">
                                  <p className="testimonials__card-message-text tech-variant">Revenue growing fast 🔥</p>
                                  <p className="testimonials__card-message-time tech-variant">12:35 AM</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Testimonial Card 3: Whitehead Consulting (Steel Blue) */}
                      <div className="testimonial-slide-item">
                        <div className="testimonials__card tech-variant">
                          <div className="testimonials__card-inner">
                            <div style={{ backgroundColor: "#a5c9f5" }} className="testimonials__card-bg"></div>
                            <img
                              src="/images/portfolio/aldonexport.png"
                              alt="Whitehead portal preview"
                              className="testimonials__card-overview tech-variant"
                            />
                            <div className="testimonials__card-caption tech-variant">
                              <img
                                src="/images/testimonials/robert-bajac.jpeg"
                                alt="Robert Bajac"
                                className="testimonials__card-avatar tech-variant"
                              />
                              <p className="testimonials__card-name">Robert Bajac</p>
                              <p className="testimonials__card-position">MANAGING DIRECTOR, WHITEHEAD</p>
                            </div>
                            <div className="testimonials__card-inner-scroller">
                              <div className="testimonials__card-list">
                                <div className="testimonials__card-message tech-variant">
                                  <p className="testimonials__card-message-text tech-variant">Architectural depth exceeded every expectation</p>
                                  <p className="testimonials__card-message-time tech-variant">10:15 AM</p>
                                </div>
                                <div className="testimonials__card-message tech-variant">
                                  <p className="testimonials__card-message-text tech-variant">Mission-critical platform with rock-solid stability</p>
                                  <p className="testimonials__card-message-time tech-variant">10:18 AM</p>
                                </div>
                                <div className="testimonials__card-message tech-variant">
                                  <p className="testimonials__card-message-text tech-variant">Outstanding engineering precision</p>
                                  <p className="testimonials__card-message-time tech-variant">10:22 AM</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Testimonial Card 4: Bodhi Health (Teal / Warm) */}
                      <div className="testimonial-slide-item">
                        <div className="testimonials__card tech-variant">
                          <div className="testimonials__card-inner">
                            <div style={{ backgroundColor: "#85d4cb" }} className="testimonials__card-bg"></div>
                            <img
                              src="/images/portfolio/bodhi.png"
                              alt="Bodhi Health platform preview"
                              className="testimonials__card-overview tech-variant"
                            />
                            <div className="testimonials__card-caption tech-variant">
                              <img
                                src="/images/testimonials/dr-james-meschino.jpeg"
                                alt="Dr. James Meschino"
                                className="testimonials__card-avatar tech-variant"
                              />
                              <p className="testimonials__card-name">Dr. James Meschino</p>
                              <p className="testimonials__card-position">CSO, BODHI HEALTH</p>
                            </div>
                            <div className="testimonials__card-inner-scroller">
                              <div className="testimonials__card-list">
                                <div className="testimonials__card-message tech-variant">
                                  <p className="testimonials__card-message-text tech-variant">Flawlessly communicates our clinical credibility</p>
                                  <p className="testimonials__card-message-time tech-variant">2:10 PM</p>
                                </div>
                                <div className="testimonials__card-message tech-variant">
                                  <p className="testimonials__card-message-text tech-variant">Maximizing consumer conversions across channels</p>
                                  <p className="testimonials__card-message-time tech-variant">2:14 PM</p>
                                </div>
                                <div className="testimonials__card-message tech-variant">
                                  <p className="testimonials__card-message-text tech-variant">Phenomenal team to work with</p>
                                  <p className="testimonials__card-message-time tech-variant">2:16 PM</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Carousel Navigation Buttons */}
                    <div className="slider-buttons mt-6">
                      <button
                        type="button"
                        className="button_slider testimonials-slider-prev"
                        aria-label="Previous testimonial"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M15 18l-6-6 6-6" />
                        </svg>
                      </button>
                      <button
                        type="button"
                        className="button_slider testimonials-slider-next"
                        aria-label="Next testimonial"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 18l6-6-6-6" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </section>

                {/* =============================================================
                    10. BUSINESSES WE SERVE WITH AI & AUTOMATION
                    ============================================================= */}
                <section id="businesses-we-serve" className="tech-customize mb-24">
                  <h2 className="tech-section-title mb-60">
                    Businesses we serve with <span className="accent-text">AI &amp; automation</span>
                  </h2>
                  <div className="w-dyn-list">
                    <div role="list" className="tech-service-cards w-dyn-items">
                      {/* Card 1: Agencies */}
                      <div role="listitem" className="w-dyn-item">
                        <div className="tech-service-card group">
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
                        <div className="tech-service-card group">
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
                        <div className="tech-service-card group">
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
                        <div className="tech-service-card group">
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
                  STICKY ASIDE: FOUNDER PROFILE (SUNIL PANCHANI)
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
                      className="cta-btn-contact"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </aside>
            </div>

            {/* =================================================================
                11. TRUST LOGO GRID (2 ROWS X 5 COLS)
                ================================================================= */}
            <section className="section-swis-awards v2 container mx-auto px-6 mb-24">
              <h2 className="tech-section-title text-center mb-4">
                Recognized by leading review platforms and{" "}
                <span className="accent-text">industry categories</span>
              </h2>
              <div className="awards-grid">
                {BRAND_LOGOS.map((logo) => (
                  <div key={logo.name} className="awards-grid__item">
                    <img
                      src={logo.src}
                      loading="lazy"
                      alt={logo.alt}
                      className="awards-grid__image"
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* =================================================================
                12. FOUNDER CTA BANNER
                ================================================================= */}
            <div className="tech-main-inner-wider v2 mb-24">
              <div className="cta-banner">
                <div className="cta-banner-caption">
                  <h3 className="cta-banner-title">
                    Choose a tech partner that{" "}
                    <span className="accent-text">challenges, guides, and delivers</span>
                  </h3>
                </div>
                <div className="cta-banner-right">
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
                    <a href="#contact-section" className="button button_smaller">
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================================
                13. FAQ SECTION (AI & AUTOMATION SPECIFIC)
                ================================================================= */}
            <div className="tech-main-inner margin-bottom-7-5 overflow-hidden max-w-[78rem] mx-auto px-6 mb-24">
              <div className="tech-content w-full">
                <section id="faq" className="tech-faq">
                  <h2 className="tech-section-title mb-60">
                    Frequently asked questions (FAQ)
                  </h2>
                  <div className="faq">
                    {/* FAQ 1 */}
                    <div className="faq-item">
                      <div className="faq-item-header">
                        <div>Do you build everything with custom code?</div>
                        <div className="faq-item-header-icon">
                          <div className="faq-item-header-icon-line"></div>
                          <div className="faq-item-header-icon-line rotated"></div>
                        </div>
                      </div>
                      <div className="faq-item-header-dropdown">
                        <div className="faq-item-header-dropdown-inner">
                          <p>
                            We adopt a hybrid, high-leverage approach. We utilize modern orchestration engines (n8n, Make, Vercel AI SDK) for rapid deployment and cost-effectiveness, and write custom microservices and TypeScript/Python code for complex business logic, bespoke data pipelines, and high-performance algorithms.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* FAQ 2 */}
                    <div className="faq-item">
                      <div className="faq-item-header">
                        <div>Where do you use AI vs. simple deterministic rules?</div>
                        <div className="faq-item-header-icon">
                          <div className="faq-item-header-icon-line"></div>
                          <div className="faq-item-header-icon-line rotated"></div>
                        </div>
                      </div>
                      <div className="faq-item-header-dropdown">
                        <div className="faq-item-header-dropdown-inner">
                          <p>
                            We deploy AI for classification, entity extraction, summarization, and context-dependent decisions. Clear Boolean conditions, structured data formatting, and calculation logic remain rule-based — which is faster, cheaper, and 100% deterministic.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* FAQ 3 */}
                    <div className="faq-item">
                      <div className="faq-item-header">
                        <div>Can a human review critical or high-stakes steps?</div>
                        <div className="faq-item-header-icon">
                          <div className="faq-item-header-icon-line"></div>
                          <div className="faq-item-header-icon-line rotated"></div>
                        </div>
                      </div>
                      <div className="faq-item-header-dropdown">
                        <div className="faq-item-header-dropdown-inner">
                          <p>
                            Yes. We integrate human-in-the-loop (HITL) checkpoints with custom confidence thresholds, interactive Slack/Teams notifications, escalation queues, and audit logging to ensure your team maintains absolute control.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* FAQ 4 */}
                    <div className="faq-item">
                      <div className="faq-item-header">
                        <div>Which tools and platforms do you support?</div>
                        <div className="faq-item-header-icon">
                          <div className="faq-item-header-icon-line"></div>
                          <div className="faq-item-header-icon-line rotated"></div>
                        </div>
                      </div>
                      <div className="faq-item-header-dropdown">
                        <div className="faq-item-header-dropdown-inner">
                          <p>
                            We connect with Make, n8n, Zapier, Retool, LangChain, OpenAI, Anthropic Claude, Slack, HubSpot, Salesforce, PostgreSQL, Shopify, Webflow, and custom REST/GraphQL enterprise endpoints.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            {/* =================================================================
                14. CONTACT SECTION
                ================================================================= */}
            <ContactSection />
          </div>
        </main>

        {/* =====================================================================
            15. GLOBAL FOOTER
            ===================================================================== */}
        <Footer />
      </div>
    </SmoothScroll>
  );
}
