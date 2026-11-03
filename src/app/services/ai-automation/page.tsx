import type { Metadata } from "next";
import Navbar from "@/components/navigation/Navbar";
import BrandLogos from "@/components/brand-logos/BrandLogos";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/footer/Footer";
import SmoothScroll from "@/components/smooth-scroll/SmoothScroll";
import AIAutomationClientInteractions from "@/components/services/AIAutomationClientInteractions";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI & Automation Services | TechForbs",
  description:
    "Cut manual work, connect fragmented tools, and deploy self-healing automations with guaranteed enterprise data privacy, built by TechForbs.",
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
          <section className="tech-hero is-services-page">
            <div className="tech-hero-gradient"></div>
            <div className="tech-hero-inner v2">
              <img
                width="1424"
                loading="eager"
                alt="AI & Automation Services banner"
                src="/images/services/69273fea692d3db88c70d620_ai-bg-p-2000.webp"
                className="tech-hero-bg"
              />
              <div className="tech-hero-content">
                <div className="tech-hero-title__wrap">
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
                    className="tech-hero-title"
                  >
                    AI &amp; automation services
                  </h1>
                </div>

                <div className="tech-hero-text">
                  <div className="overflow-hidden">
                    <p
                      text-split=""
                      words-slide-up=""
                      className="text-white/80 max-w-2xl text-lg leading-relaxed"
                    >
                      Cut manual work, connect fragmented tools, and deploy
                      self-healing automations with guaranteed enterprise data privacy.
                    </p>
                  </div>
                </div>

                <div className="button-wrap is-left">
                  <div className="fade-up-alt">
                    <Link
                      href="#contact-section"
                      className="button button_smaller button_blue"
                    >
                      <strong>Schedule an AI consultation</strong>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* MAIN WRAPPER WITH ASIDE STICKY ARCHITECTURE */}
          <div className="tech-main-wrap">
            <div className="tech-main-inner is-reversed">
              <div className="tech-main">
                {/* =============================================================
                    02. SERVICE CAPABILITY CARDS
                    ============================================================= */}
                <section id="solutions" className="tech-customize">
                  <h2
                    color-word="#00e5ff"
                    text-split=""
                    lines-slide-up=""
                    color-words-index="3,4"
                    className="tech-section-title mb-60"
                  >
                    What do our AI &amp; automation services include?
                  </h2>
                  <div className="text-block is-gray margin-bottom-50">
                    We build, connect, and scale automations that save time and
                    prevent human errors — combining AI precision with reliable
                    engineering agility.
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Card 1: Workflow automation */}
                    <div className="tech-service-card p-8 rounded-2xl relative overflow-hidden group">
                      <div className="w-12 h-12 rounded-xl bg-[#0077ff]/10 border border-[#00e5ff]/20 flex items-center justify-center mb-6 text-[#00e5ff]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white">Workflow automation</h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        Connect your enterprise applications, eliminate manual steps, add branching logic,
                        self-healing retries, and real-time alerts so work keeps moving without pings and copy-paste.
                      </p>
                    </div>

                    {/* Card 2: AI in your workflows */}
                    <div className="tech-service-card p-8 rounded-2xl relative overflow-hidden group">
                      <div className="w-12 h-12 rounded-xl bg-[#0077ff]/10 border border-[#00e5ff]/20 flex items-center justify-center mb-6 text-[#00e5ff]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="16" x2="12" y2="12" />
                          <line x1="12" y1="8" x2="12.01" y2="8" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white">AI in your workflows</h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        Classify, summarize, extract fields, enrich leads, and route support tickets; keep
                        human-in-the-loop review queues for low-confidence or high-stakes edge cases.
                      </p>
                    </div>

                    {/* Card 3: Email & document processing */}
                    <div className="tech-service-card p-8 rounded-2xl relative overflow-hidden group">
                      <div className="w-12 h-12 rounded-xl bg-[#0077ff]/10 border border-[#00e5ff]/20 flex items-center justify-center mb-6 text-[#00e5ff]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white">Email &amp; document processing</h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        AI-assisted parsing of high-volume inboxes, invoices, and PDFs: extract structured
                        data directly to your database or CRM, and flag unusual anomalies for instant manual review.
                      </p>
                    </div>

                    {/* Card 4: Ops for sales & support */}
                    <div className="tech-service-card p-8 rounded-2xl relative overflow-hidden group">
                      <div className="w-12 h-12 rounded-xl bg-[#0077ff]/10 border border-[#00e5ff]/20 flex items-center justify-center mb-6 text-[#00e5ff]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white">Ops for sales &amp; support</h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        Lead sourcing &amp; enrichment, bi-directional CRM synchronization, automated ticket
                        triage, suggested replies, and guaranteed SLA incident escalation alerts.
                      </p>
                    </div>
                  </div>
                </section>

                {/* =============================================================
                    03. AI + AUTOMATION BENEFITS & SUPPORTING IMAGE COLLAGE
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

                  {/* RESTORED REFERENCE IMAGE COMPOSITION */}
                  <div className="team__lottieanim mt-12">
                    <div className="team__grid__wrap">
                      <div className="team__grid in-service-page w-dyn-items">
                        {/* Item 1: Decorative cyan rounded block */}
                        <div role="listitem" className="team__grid_item state_v0_mod w-dyn-item">
                          <div className="team__grid_pic_wrap">
                            <div className="team__decor-block w-full h-full rounded-2xl bg-gradient-to-br from-[#0077ff] to-[#00e5ff] shadow-lg shadow-cyan-500/20" />
                          </div>
                        </div>

                        {/* Item 2: Sales CRM Screen */}
                        <div role="listitem" className="team__grid_item state_v0_mod w-dyn-item">
                          <div className="team__grid_pic_wrap">
                            <div className="team__grid_pic">
                              <img
                                alt="Sales CRM automation interface"
                                loading="lazy"
                                src="/images/services/6928324c28dda1fee3400343_3.webp"
                                className="team__grid_img rounded-2xl border border-white/10"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Item 3: Orders Table Screen */}
                        <div role="listitem" className="team__grid_item state_v0_mod w-dyn-item">
                          <div className="team__grid_pic_wrap">
                            <div className="team__grid_pic">
                              <img
                                alt="Orders telemetry dashboard"
                                loading="lazy"
                                src="/images/services/692832c928b7b0c1882be0fb_2.webp"
                                className="team__grid_img rounded-2xl border border-white/10"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Item 4: Workflow Code Engine */}
                        <div role="listitem" className="team__grid_item state_v0_mod w-dyn-item">
                          <div className="team__grid_pic_wrap">
                            <div className="team__grid_pic">
                              <img
                                alt="Automated workflow engine"
                                loading="lazy"
                                src="/images/services/692832e16222b76a214199c6_4.webp"
                                className="team__grid_img rounded-2xl border border-white/10"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Item 5: Decorative cyan rounded block */}
                        <div role="listitem" className="team__grid_item state_v0_mod w-dyn-item">
                          <div className="team__grid_pic_wrap">
                            <div className="team__decor-block w-full h-full rounded-2xl bg-gradient-to-br from-[#0077ff] to-[#00e5ff] shadow-lg shadow-cyan-500/20" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* =============================================================
                    04. HOW WE BUILD AUTOMATIONS THAT WORK
                    ============================================================= */}
                <section id="services" className="tech-services">
                  <h2
                    color-word="#00e5ff"
                    text-split=""
                    lines-slide-up=""
                    color-words-index="3,4"
                    className="tech-section-title mb-60"
                  >
                    How we build automations that work
                  </h2>
                  <div className="text-block is-gray margin-bottom-50">
                    A battle-tested methodology designed to ship reliable automations with zero disruption to daily operations.
                  </div>
                  <ul role="list" className="tech-service-list is-2-grid">
                    <li className="tech-service-item fade-up-alt">
                      <div className="tech-service-item-icon w-embed">
                        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="20" cy="20" r="16" stroke="#00e5ff" strokeWidth="2.5" />
                          <text x="20" y="26" textAnchor="middle" fill="#00e5ff" fontSize="18" fontWeight="bold">1</text>
                        </svg>
                      </div>
                      <div className="service-service-item-caption">
                        <h3 className="tech-service-item-title">Discovery &amp; mapping</h3>
                        <p className="text-body">
                          We audit existing tool stacks, map step-by-step logic, locate operational bottlenecks,
                          and define clear success metrics before writing a single line of automation.
                        </p>
                      </div>
                    </li>

                    <li className="tech-service-item fade-up-alt">
                      <div className="tech-service-item-icon w-embed">
                        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="20" cy="20" r="16" stroke="#00e5ff" strokeWidth="2.5" />
                          <text x="20" y="26" textAnchor="middle" fill="#00e5ff" fontSize="18" fontWeight="bold">2</text>
                        </svg>
                      </div>
                      <div className="service-service-item-caption">
                        <h3 className="tech-service-item-title">Integration &amp; setup</h3>
                        <p className="text-body">
                          Secure API handshakes, webhook listeners, environment secrets management, and robust
                          data transformations linking your CRM, billing, marketing, and internal databases.
                        </p>
                      </div>
                    </li>

                    <li className="tech-service-item fade-up-alt">
                      <div className="tech-service-item-icon w-embed">
                        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="20" cy="20" r="16" stroke="#00e5ff" strokeWidth="2.5" />
                          <text x="20" y="26" textAnchor="middle" fill="#00e5ff" fontSize="18" fontWeight="bold">3</text>
                        </svg>
                      </div>
                      <div className="service-service-item-caption">
                        <h3 className="tech-service-item-title">AI enhancement</h3>
                        <p className="text-body">
                          Injecting domain-specific LLM intelligence: contextual prompt orchestration, confidence scoring,
                          fuzzy matching, and fallbacks that handle unpredictable customer inputs gracefully.
                        </p>
                      </div>
                    </li>

                    <li className="tech-service-item fade-up-alt">
                      <div className="tech-service-item-icon w-embed">
                        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="20" cy="20" r="16" stroke="#00e5ff" strokeWidth="2.5" />
                          <text x="20" y="26" textAnchor="middle" fill="#00e5ff" fontSize="18" fontWeight="bold">4</text>
                        </svg>
                      </div>
                      <div className="service-service-item-caption">
                        <h3 className="tech-service-item-title">Testing &amp; handoff</h3>
                        <p className="text-body">
                          Rigorous load simulations, failover testing, automated retry verification, and executive
                          dashboard handoffs with comprehensive documentation and team training.
                        </p>
                      </div>
                    </li>
                  </ul>
                </section>

                {/* =============================================================
                    05. WINNING WITH US: OUR CLIENTS' SUCCESS (CAROUSEL)
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
                    <div className="swiper cases-slider w-dyn-list">
                      <div
                        role="list"
                        className="swiper-wrapper w-dyn-items flex flex-row gap-6 overflow-x-auto pb-4 scroll-smooth"
                      >
                        {/* Case 1: SACLAB */}
                        <div role="listitem" className="swiper-slide w-dyn-item min-w-[320px] md:min-w-[400px] flex-shrink-0">
                          <div className="case-item is-no-link">
                            <div
                              style={{ backgroundColor: "#1e2e42" }}
                              className="case-item-image relative overflow-hidden rounded-2xl p-4 flex items-center justify-center min-h-[260px]"
                            >
                              <img
                                width="416"
                                height="439"
                                alt=""
                                src="/images/technologies/66335e1b00f641134b6bcbef_case-bg.svg"
                                loading="lazy"
                                className="case-item-circles absolute inset-0 opacity-40 pointer-events-none"
                              />
                              <img
                                className="case-item-thumb min-height relative z-10 max-h-56 object-cover rounded-xl shadow-2xl"
                                src="/images/services/6aa958df5478b4daee425e17_SACLAB (2).webp"
                                alt="SACLAB Platform: Automated luxury resale"
                                loading="lazy"
                              />
                            </div>
                            <h4 className="case-item-title text-xl font-bold mt-4 mb-2 text-white">
                              SACLAB: Automated inventory &amp; luxury resale platform
                            </h4>
                            <div className="case-item_tags flex flex-wrap gap-2 mt-3">
                              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#0077ff]/20 text-[#00e5ff] border border-[#00e5ff]/30">E-COMMERCE</span>
                              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/80">AI AUTOMATION</span>
                              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/80">INVENTORY SYNC</span>
                            </div>
                          </div>
                        </div>

                        {/* Case 2: TechHunt */}
                        <div role="listitem" className="swiper-slide w-dyn-item min-w-[320px] md:min-w-[400px] flex-shrink-0">
                          <div className="case-item is-no-link">
                            <div
                              style={{ backgroundColor: "#1c2438" }}
                              className="case-item-image relative overflow-hidden rounded-2xl p-4 flex items-center justify-center min-h-[260px]"
                            >
                              <img
                                width="416"
                                height="439"
                                alt=""
                                src="/images/technologies/66335e1b00f641134b6bcbef_case-bg.svg"
                                loading="lazy"
                                className="case-item-circles absolute inset-0 opacity-40 pointer-events-none"
                              />
                              <img
                                className="case-item-thumb min-height relative z-10 max-h-56 object-cover rounded-xl shadow-2xl"
                                src="/images/services/69415648fb54d47025658431_68502c28fbdaa5e4f7401a80_techhunt (1).webp"
                                alt="TechHunt: AI-assisted talent matching"
                                loading="lazy"
                              />
                            </div>
                            <h4 className="case-item-title text-xl font-bold mt-4 mb-2 text-white">
                              TechHunt: AI-assisted talent matching &amp; vetting engine
                            </h4>
                            <div className="case-item_tags flex flex-wrap gap-2 mt-3">
                              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#0077ff]/20 text-[#00e5ff] border border-[#00e5ff]/30">HR TECH</span>
                              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/80">NLP EXTRACTION</span>
                              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/80">AUTOMATION</span>
                            </div>
                          </div>
                        </div>

                        {/* Case 3: HIVE */}
                        <div role="listitem" className="swiper-slide w-dyn-item min-w-[320px] md:min-w-[400px] flex-shrink-0">
                          <div className="case-item is-no-link">
                            <div
                              style={{ backgroundColor: "#182a32" }}
                              className="case-item-image relative overflow-hidden rounded-2xl p-4 flex items-center justify-center min-h-[260px]"
                            >
                              <img
                                width="416"
                                height="439"
                                alt=""
                                src="/images/technologies/66335e1b00f641134b6bcbef_case-bg.svg"
                                loading="lazy"
                                className="case-item-circles absolute inset-0 opacity-40 pointer-events-none"
                              />
                              <img
                                className="case-item-thumb min-height relative z-10 max-h-56 object-cover rounded-xl shadow-2xl"
                                src="/images/services/6aa95992835bec44feecea38_hive-project (1).webp"
                                alt="HIVE: Resource scheduling"
                                loading="lazy"
                              />
                            </div>
                            <h4 className="case-item-title text-xl font-bold mt-4 mb-2 text-white">
                              HIVE: Intelligent resource scheduling &amp; operational telemetry
                            </h4>
                            <div className="case-item_tags flex flex-wrap gap-2 mt-3">
                              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#0077ff]/20 text-[#00e5ff] border border-[#00e5ff]/30">ENTERPRISE SAAS</span>
                              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/80">INTEGRATION</span>
                              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/80">ALERTS</span>
                            </div>
                          </div>
                        </div>

                        {/* Case 4: Maxopolis */}
                        <div role="listitem" className="swiper-slide w-dyn-item min-w-[320px] md:min-w-[400px] flex-shrink-0">
                          <div className="case-item is-no-link">
                            <div
                              style={{ backgroundColor: "#251d38" }}
                              className="case-item-image relative overflow-hidden rounded-2xl p-4 flex items-center justify-center min-h-[260px]"
                            >
                              <img
                                width="416"
                                height="439"
                                alt=""
                                src="/images/technologies/66335e1b00f641134b6bcbef_case-bg.svg"
                                loading="lazy"
                                className="case-item-circles absolute inset-0 opacity-40 pointer-events-none"
                              />
                              <img
                                className="case-item-thumb min-height relative z-10 max-h-56 object-cover rounded-xl shadow-2xl"
                                src="/images/portfolio/maxopolis.png"
                                alt="Maxopolis: Logistics automation"
                                loading="lazy"
                              />
                            </div>
                            <h4 className="case-item-title text-xl font-bold mt-4 mb-2 text-white">
                              Maxopolis: Real-time supply chain telemetry &amp; automated fulfillment
                            </h4>
                            <div className="case-item_tags flex flex-wrap gap-2 mt-3">
                              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#0077ff]/20 text-[#00e5ff] border border-[#00e5ff]/30">LOGISTICS</span>
                              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/80">API PIPELINES</span>
                              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/80">ANALYTICS</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="slider-buttons slider-buttons_portfolio flex items-center gap-3 mt-8">
                      <div className="button button_slider swis-portfolio-prev cursor-pointer">
                        <div className="button-slider-arrow w-embed">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
                      <div className="button button_slider swis-portfolio-next cursor-pointer">
                        <div className="button-slider-arrow w-embed">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="fade-up-alt mt-8">
                    <div className="tech-benefits-buttons">
                      <Link href="/#portfolio" className="button button_smaller button_blue">
                        <strong>View all</strong>
                      </Link>
                    </div>
                  </div>
                </section>

                {/* =============================================================
                    06. WHY TEAMS CHOOSE TECHFORBS & SUPPORTING TEAM COLLAGE
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

                  {/* RESTORED REFERENCE TEAM IMAGE COMPOSITION */}
                  <div className="team__lottieanim mt-12">
                    <div className="team__grid__wrap">
                      <div className="team__grid w-dyn-items">
                        {/* Item 1: Cyan decorative block */}
                        <div role="listitem" className="team__grid_item state_v0_mod w-dyn-item">
                          <div className="team__grid_pic_wrap">
                            <div className="team__decor-block w-full h-full rounded-2xl bg-gradient-to-br from-[#0077ff] to-[#00e5ff] shadow-lg shadow-cyan-500/20" />
                          </div>
                        </div>

                        {/* Item 2: Authentic TechForbs Team Photo 1 */}
                        <div role="listitem" className="team__grid_item state_v0_mod w-dyn-item">
                          <div className="team__grid_pic_wrap">
                            <div className="team__grid_pic">
                              <img
                                alt="TechForbs Engineering Leadership"
                                loading="lazy"
                                src="/images/team/techforbs-team-1.jpg"
                                className="team__grid_img rounded-2xl border border-white/10"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Item 3: Authentic TechForbs Team Photo 2 */}
                        <div role="listitem" className="team__grid_item state_v0_mod w-dyn-item">
                          <div className="team__grid_pic_wrap">
                            <div className="team__grid_pic">
                              <img
                                alt="TechForbs Solutions Architecture"
                                loading="lazy"
                                src="/images/team/techforbs-team-2.jpg"
                                className="team__grid_img rounded-2xl border border-white/10"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Item 4: Authentic TechForbs Team Photo 6 */}
                        <div role="listitem" className="team__grid_item state_v0_mod w-dyn-item">
                          <div className="team__grid_pic_wrap">
                            <div className="team__grid_pic">
                              <img
                                alt="TechForbs Full Stack Systems"
                                loading="lazy"
                                src="/images/team/techforbs-team-6.jpg"
                                className="team__grid_img rounded-2xl border border-white/10"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Item 5: Authentic TechForbs Team Photo 7 */}
                        <div role="listitem" className="team__grid_item state_v0_mod w-dyn-item">
                          <div className="team__grid_pic_wrap">
                            <div className="team__grid_pic">
                              <img
                                alt="TechForbs Mobile & Cloud Architecture"
                                loading="lazy"
                                src="/images/team/techforbs-team-7.jpg"
                                className="team__grid_img rounded-2xl border border-white/10"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Item 6: Cyan decorative block */}
                        <div role="listitem" className="team__grid_item state_v0_mod w-dyn-item">
                          <div className="team__grid_pic_wrap">
                            <div className="team__decor-block w-full h-full rounded-2xl bg-gradient-to-br from-[#0077ff] to-[#00e5ff] shadow-lg shadow-cyan-500/20" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                  <div className="text-block is-gray margin-bottom-50">
                    We engineer resilient, production-ready AI pipelines and automated workflows built on enterprise architectural standards.
                  </div>

                  <div className="tech-sertificate-grid">
                    <ul role="list" className="tech-sertificate-list">
                      <li className="tech-sertificate-item fade-up-alt">
                        <div className="tech-sertificate-item-icon"></div>
                        <div>Build and connect workflows across 1,500+ apps</div>
                      </li>
                      <li className="tech-sertificate-item fade-up-alt">
                        <div className="tech-sertificate-item-icon"></div>
                        <div>Optimize or refactor mission-critical automation scenarios</div>
                      </li>
                      <li className="tech-sertificate-item fade-up-alt">
                        <div className="tech-sertificate-item-icon"></div>
                        <div>Eliminate repetitive manual operational overhead for teams</div>
                      </li>
                    </ul>

                    <div className="tech-sertificate-badge-wrap">
                      <div className="w-28 h-28 rounded-full border-2 border-[#00e5ff] flex flex-col items-center justify-center text-center p-2 bg-[#0077ff]/10 shadow-[0_0_30px_rgba(0,229,255,0.25)]">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                          <line x1="8" y1="21" x2="16" y2="21" />
                          <line x1="12" y1="17" x2="12" y2="21" />
                        </svg>
                        <span className="text-xs font-bold text-white mt-1">Enterprise</span>
                        <span className="text-[10px] text-[#00e5ff]">AI</span>
                      </div>
                    </div>

                    <ul role="list" className="tech-sertificate-list">
                      <li className="tech-sertificate-item fade-up-alt">
                        <div className="tech-sertificate-item-icon"></div>
                        <div>Add multimodal AI parsing, vector retrieval, and automated routing</div>
                      </li>
                      <li className="tech-sertificate-item fade-up-alt">
                        <div className="tech-sertificate-item-icon"></div>
                        <div>Clear ROI metrics, error observability, and proactive monitoring</div>
                      </li>
                    </ul>
                  </div>

                  <div className="fade-up-alt mt-8 flex justify-start">
                    <Link href="#contact-section" className="button button_smaller button_blue inline-flex w-auto">
                      <strong>Explore solutions</strong>
                    </Link>
                  </div>
                </section>

                {/* =============================================================
                    08. TECHNOLOGIES WE USE IN AI & AUTOMATION (HORIZONTAL CAROUSEL)
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
                      <div className="swiper tech-slider w-dyn-list">
                        <div
                          role="list"
                          className="tech-ecosystem-grid swiper-wrapper w-dyn-items flex flex-row gap-5 overflow-x-auto pb-4 scroll-smooth"
                        >
                          {[
                            { name: "Make", icon: "/images/technologies/make-logo.svg" },
                            { name: "HubSpot", icon: "/images/technologies/hubspot-logo.svg" },
                            { name: "Zapier", icon: "/images/technologies/zapier-logo.svg" },
                            { name: "Airtable", icon: "/images/technologies/airtable-logo.svg" },
                            { name: "n8n", icon: "/images/technologies/n8n-logo.svg" },
                            { name: "Python", icon: "/images/technologies/6613b9be680c55ac4b07fa82_python.svg" },
                            { name: "Node.js", icon: "/images/technologies/6613ba19ecc9cd312295669d_nodevg.svg" },
                            { name: "Next.js", icon: "/images/technologies/664af3b89152d5738e5297e7_nextJS.svg" },
                            { name: "MySQL", icon: "/images/technologies/66963d979771a1787630197d_mysql.svg" },
                            { name: "Stripe", icon: "/images/technologies/stripe-logo.svg" },
                          ].map((tech, idx) => (
                            <div key={idx} role="listitem" className="swiper-slide w-dyn-item !w-[220px] !min-w-[220px] !max-w-[220px] flex-shrink-0">
                              <div className="tech-ecosystem-item p-6 rounded-2xl bg-gradient-to-br from-[#13141f] to-[#0d0e17] border border-white/10 flex flex-col items-center justify-center text-center hover:border-[#00e5ff] hover:shadow-[0_8px_24px_rgba(0,229,255,0.15)] transition-all">
                                <div className="tech-ecosystem-item-image-wrap h-20 w-20 flex items-center justify-center mb-4">
                                  <img
                                    src={tech.icon}
                                    alt={`${tech.name} logo`}
                                    className="max-h-14 max-w-14 object-contain"
                                    loading="lazy"
                                  />
                                </div>
                                <div className="tech-ecosystem-item-divider w-full h-[1px] bg-[#00e5ff]/30 my-3"></div>
                                <div className="tech-ecosystem-item-title uppercase text-xs font-bold tracking-wider text-white/90">
                                  {tech.name}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Navigation Buttons for Technology Slider */}
                      <div className="slider-buttons flex items-center gap-3 mt-8">
                        <div className="button button_slider tech-slider-prev cursor-pointer">
                          <div className="button-slider-arrow w-embed">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                              <path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        </div>
                        <div className="button button_slider tech-slider-next cursor-pointer">
                          <div className="button-slider-arrow w-embed">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                              <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        </div>
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
                    className="tech-section-title mb-60"
                  >
                    What our clients say… for real
                  </h2>

                  <div className="awards-grid-wrapper mb-10">
                    <div className="flex flex-wrap items-center gap-4">
                      {["ROCKEN", "PORSCHE", "SCHULTHESS", "SACLAB", "ONELINE"].map((brand, i) => (
                        <div key={i} className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/70 font-bold tracking-widest text-xs uppercase">
                          {brand}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="tech-testimonials__slider-wrap">
                    <div className="tech-testimonials__slider-wrapper flex flex-col md:flex-row gap-6 overflow-x-auto pb-4 scroll-smooth">
                      {/* Testimonial 1 */}
                      <div className="tech-testimonials__item min-w-[320px] md:min-w-[420px] p-8 rounded-2xl bg-[#161822] border border-white/10 hover:border-[#00e5ff]/30 transition-all">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 rounded-full bg-[#0077ff]/20 text-[#00e5ff] flex items-center justify-center font-bold text-lg">
                            M
                          </div>
                          <div>
                            <div className="font-semibold text-white">Michael R.</div>
                            <div className="text-xs text-white/60">COO, Global Retail Logistics</div>
                          </div>
                        </div>
                        <p className="text-white/80 text-sm leading-relaxed">
                          &ldquo;TechForbs automated our entire supplier onboarding pipeline. What previously took 3 days of manual back-and-forth now finishes in 15 minutes with complete auditability.&rdquo;
                        </p>
                      </div>

                      {/* Testimonial 2 */}
                      <div className="tech-testimonials__item min-w-[320px] md:min-w-[420px] p-8 rounded-2xl bg-[#161822] border border-white/10 hover:border-[#00e5ff]/30 transition-all">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 rounded-full bg-[#00e5ff]/20 text-[#00e5ff] flex items-center justify-center font-bold text-lg">
                            S
                          </div>
                          <div>
                            <div className="font-semibold text-white">Sarah T.</div>
                            <div className="text-xs text-white/60">VP of Technology, ScaleUp SaaS</div>
                          </div>
                        </div>
                        <p className="text-white/80 text-sm leading-relaxed">
                          &ldquo;Their AI document parsing solution saved our operations team over 120 hours every month. Flawless error handling and zero data leaks.&rdquo;
                        </p>
                      </div>

                      {/* Testimonial 3 */}
                      <div className="tech-testimonials__item min-w-[320px] md:min-w-[420px] p-8 rounded-2xl bg-[#161822] border border-white/10 hover:border-[#00e5ff]/30 transition-all">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 rounded-full bg-[#0077ff]/20 text-[#00e5ff] flex items-center justify-center font-bold text-lg">
                            D
                          </div>
                          <div>
                            <div className="font-semibold text-white">David K.</div>
                            <div className="text-xs text-white/60">Founder, E-Commerce Brand Group</div>
                          </div>
                        </div>
                        <p className="text-white/80 text-sm leading-relaxed">
                          &ldquo;TechForbs didn&apos;t just connect APIs; they re-architected how our CRM and Shopify store communicate. The ROI was clear within week two.&rdquo;
                        </p>
                      </div>
                    </div>

                    {/* Navigation Buttons for Testimonials */}
                    <div className="slider-buttons flex items-center gap-3 mt-8">
                      <div className="button button_slider testimonials-slider-prev cursor-pointer">
                        <div className="button-slider-arrow w-embed">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
                      <div className="button button_slider testimonials-slider-next cursor-pointer">
                        <div className="button-slider-arrow w-embed">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
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
                    color-words-index="0"
                    className="tech-section-title mb-60"
                  >
                    Businesses we serve with AI &amp; automation
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Card 1: Agencies */}
                    <div className="business-card p-8 rounded-2xl relative overflow-hidden group">
                      <div className="w-12 h-12 rounded-xl bg-[#0077ff]/10 border border-[#00e5ff]/20 flex items-center justify-center mb-6 text-[#00e5ff]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                          <line x1="8" y1="21" x2="16" y2="21" />
                          <line x1="12" y1="17" x2="12" y2="21" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white">Agencies</h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        White-label automation with clear reporting. From intelligent agents to content ops —
                        engineered to fit your stack and brand without staffing overhead.
                      </p>
                    </div>

                    {/* Card 2: Startups */}
                    <div className="business-card p-8 rounded-2xl relative overflow-hidden group">
                      <div className="w-12 h-12 rounded-xl bg-[#0077ff]/10 border border-[#00e5ff]/20 flex items-center justify-center mb-6 text-[#00e5ff]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white">Startups</h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        Rapid AI PoC and MVP buildouts in weeks: fast learnings, immediate operational leverage,
                        and scalable architecture that doesn&apos;t require rebuilding later.
                      </p>
                    </div>

                    {/* Card 3: SMEs */}
                    <div className="business-card p-8 rounded-2xl relative overflow-hidden group">
                      <div className="w-12 h-12 rounded-xl bg-[#0077ff]/10 border border-[#00e5ff]/20 flex items-center justify-center mb-6 text-[#00e5ff]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="20" x2="18" y2="10" />
                          <line x1="12" y1="20" x2="12" y2="4" />
                          <line x1="6" y1="20" x2="6" y2="14" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white">SMEs</h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        Eliminate manual ops: CRM/inboxes/spreadsheets, automated lead routing, and knowledge search
                        so your core team focuses entirely on customer value.
                      </p>
                    </div>

                    {/* Card 4: Enterprises */}
                    <div className="business-card p-8 rounded-2xl relative overflow-hidden group">
                      <div className="w-12 h-12 rounded-xl bg-[#0077ff]/10 border border-[#00e5ff]/20 flex items-center justify-center mb-6 text-[#00e5ff]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white">Enterprises</h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        Enterprise governance, granular RBAC, complete telemetry observability, and automated compliance
                        aligned with corporate security and privacy policies.
                      </p>
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
                    <Link
                      href="#contact-section"
                      className="button button_smaller button_blue cta-btn-contact"
                    >
                      <strong>Contact</strong>
                    </Link>
                  </div>
                </div>
              </aside>
            </div>

            {/* =================================================================
                11. BRAND LOGOS SECTION
                ================================================================= */}
            <div className="my-16">
              <BrandLogos />
            </div>

            {/* =================================================================
                12. CTA BANNER (FOUNDER PROFILE COMPOSITION)
                ================================================================= */}
            <div className="tech-main-inner-wider v2 my-12">
              <div className="w100">
                <div className="fade-up-alt">
                  <div className="cta-banner relative overflow-hidden rounded-3xl p-10 bg-gradient-to-br from-[#101322] to-[#0c0d16] border border-[#00e5ff]/20">
                    {/* Background geometric decorative shapes */}
                    <div className="absolute top-4 right-1/4 w-3 h-3 rotate-45 bg-[#00e5ff]/40 pointer-events-none" />
                    <div className="absolute bottom-6 left-1/3 w-4 h-4 rotate-12 bg-[#0077ff]/40 pointer-events-none" />
                    <div className="absolute top-1/2 left-8 w-2 h-2 rotate-45 bg-[#00e5ff]/60 pointer-events-none" />

                    <div className="cta-banner-caption max-w-xl">
                      <h3
                        color-word="#00e5ff"
                        text-split=""
                        lines-slide-up=""
                        color-words-index="6,7"
                        className="cta-banner-title text-3xl font-bold text-white mb-4"
                      >
                        Build smarter workflows with the right automation partner
                      </h3>
                      <p className="text-white/70 text-base leading-relaxed">
                        From custom API integrations to autonomous LLM pipelines, we engineer reliable systems tailored to your business goals.
                      </p>
                    </div>

                    <div className="cta-banner-right mt-8 md:mt-0">
                      <div className="fade-up-alt">
                        <div className="cta-bn__ceo text-center flex flex-col items-center">
                          <div className="cta-bn__img mb-3">
                            <img
                              src="/images/technologies/sunil-panchani-director.jpg"
                              loading="lazy"
                              alt="Sunil Panchani photo, Founder & Director of TechForbs"
                              className="img_cover"
                            />
                          </div>
                          <div className="cta-bn__content text-center mb-3">
                            <h4 className="cta-bn__name font-bold text-lg text-white">Sunil Panchani</h4>
                            <p className="cta-bn__position text-sm text-[#00e5ff]">Founder &amp; Director, TechForbs</p>
                          </div>
                          <div className="cta-banner-person-buttons">
                            <Link href="#contact-section" className="button button_smaller button_blue">
                              <strong>Contact</strong>
                            </Link>
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
            <div className="tech-main-inner is-empty">
              <aside className="tech-aside is-empty"></aside>
              <section id="faq" className="tech-faq w-full">
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
                        className="faq-item w-dropdown cursor-pointer"
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
                            <div itemProp="text" className="w-richtext text-white/80 leading-relaxed">
                              <p>
                                We choose the fastest, most reliable architecture for your budget: no-code platforms (Make, Zapier, n8n) for rapid integrations, and custom Python/Node.js microservices with private vector stores when complex transformations, encryption, or heavy compute are required.
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
                        className="faq-item w-dropdown cursor-pointer"
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
                            <div itemProp="text" className="w-richtext text-white/80 leading-relaxed">
                              <p>
                                We prioritize deterministic rules for predictable data routing, calculations, and transactional operations to minimize token costs and eliminate latency. We introduce AI selectively where unstructured inputs (emails, PDFs, voice, messy freeform text) require semantic comprehension and classification.
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
                        className="faq-item w-dropdown cursor-pointer"
                      >
                        <div className="faq-item-header w-dropdown-toggle">
                          <div className="faq-item-header-icon">
                            <div className="faq-item-header-icon-line"></div>
                            <div className="faq-item-header-icon-line rotated"></div>
                          </div>
                          <div itemProp="name">Can a human review critical edge cases?</div>
                        </div>
                        <nav className="faq-item-header-dropdown w-dropdown-list">
                          <div
                            itemProp="acceptedAnswer"
                            itemScope={true}
                            itemType="https://schema.org/Answer"
                            className="faq-item-header-dropdown-inner"
                          >
                            <div itemProp="text" className="w-richtext text-white/80 leading-relaxed">
                              <p>
                                Yes. Every production AI pipeline we build includes confidence thresholds. If a prediction falls below the confidence target or involves high-value transactions, it automatically diverts to a human approval queue via Slack, Teams, or email with one-click resolution.
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
                        className="faq-item w-dropdown cursor-pointer"
                      >
                        <div className="faq-item-header w-dropdown-toggle">
                          <div className="faq-item-header-icon">
                            <div className="faq-item-header-icon-line"></div>
                            <div className="faq-item-header-icon-line rotated"></div>
                          </div>
                          <div itemProp="name">Is our company and customer data secure?</div>
                        </div>
                        <nav className="faq-item-header-dropdown w-dropdown-list">
                          <div
                            itemProp="acceptedAnswer"
                            itemScope={true}
                            itemType="https://schema.org/Answer"
                            className="faq-item-header-dropdown-inner"
                          >
                            <div itemProp="text" className="w-richtext text-white/80 leading-relaxed">
                              <p>
                                Absolute data confidentiality is guaranteed. We utilize enterprise API agreements with zero-data-retention policies, end-to-end payload encryption in transit and at rest, and strict role-based access controls. Your private data is never used to train public LLM models.
                              </p>
                            </div>
                          </div>
                        </nav>
                      </div>
                    </div>

                    {/* FAQ 5 */}
                    <div role="listitem" className="fade-up-alt w-dyn-item">
                      <div
                        data-hover="false"
                        data-delay="0"
                        itemProp="mainEntity"
                        itemScope={true}
                        itemType="https://schema.org/Question"
                        className="faq-item w-dropdown cursor-pointer"
                      >
                        <div className="faq-item-header w-dropdown-toggle">
                          <div className="faq-item-header-icon">
                            <div className="faq-item-header-icon-line"></div>
                            <div className="faq-item-header-icon-line rotated"></div>
                          </div>
                          <div itemProp="name">How do you monitor and maintain live workflows?</div>
                        </div>
                        <nav className="faq-item-header-dropdown w-dropdown-list">
                          <div
                            itemProp="acceptedAnswer"
                            itemScope={true}
                            itemType="https://schema.org/Answer"
                            className="faq-item-header-dropdown-inner"
                          >
                            <div itemProp="text" className="w-richtext text-white/80 leading-relaxed">
                              <p>
                                We instrument every scenario with real-time error alerts and self-healing retries for transient outages. Ongoing SLA support packages include log monitoring, schema migration updates when third-party APIs update, and performance audits.
                              </p>
                            </div>
                          </div>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <aside className="tech-aside is-empty"></aside>
            </div>
          </div>

          {/* =================================================================
              14. CONTACT SECTION
              ================================================================= */}
          <ContactSection />
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
