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
      <div className="relative min-h-screen bg-[#101010] text-white selection:bg-[#00e5ff] selection:text-black overflow-x-hidden">
        <Navbar />
        <AIAutomationClientInteractions />

        <main className="relative z-10 flex flex-col w-full overflow-x-hidden">
          {/* =================================================================
              01. HERO SECTION
              ================================================================= */}
          <section className="services-hero">
            <div className="tech-hero-gradient"></div>
            <div className="service-hero-inner">
              <img
                width="1424"
                height="800"
                loading="eager"
                alt="AI & Automation Services banner"
                src="/images/services/69273fea692d3db88c70d620_ai-bg-p-2000.webp"
                className="service-hero-bg"
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
                      AI &amp; automation = faster workflows → higher ROI
                    </h1>
                  </div>

                  <p className="service-hero__content-text">
                    Free your team’s time for what truly matters. From lead handling
                    to document parsing - we turn repetitive tasks into smart,
                    connected workflows.
                  </p>

                  <div className="button-wrap on-service-page">
                    <Link
                      href="#contact-section"
                      className="button button_blue"
                    >
                      <strong>Explore solutions</strong>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* =================================================================
              MAIN CONTENT CONTAINER (EXACT REFERENCE TWO-COLUMN ARCHITECTURE)
              ================================================================= */}
          <div className="tech-main padding-top-112 pb-0">
            <div className="tech-main-inner services-pages">
              {/* PRIMARY CONTENT COLUMN */}
              <div className="tech-content">
                {/* -------------------------------------------------------------
                    02. SERVICE CAPABILITY CARDS
                    ------------------------------------------------------------- */}
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

                  <div className="tech-service-cards">
                    {/* Card 1: Workflow automation */}
                    <div className="tech-service-card">
                      <div className="tech-service-card-icon">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                        </svg>
                      </div>
                      <div className="tech-service-card-caption">
                        <h3 className="tech-service-item-title text-xl font-bold mb-2 text-white">Workflow automation</h3>
                        <p className="text-body in-tech-service-card text-white/70 text-sm leading-relaxed">
                          Connect your enterprise applications, eliminate manual steps, add branching logic,
                          self-healing retries, and real-time alerts so work keeps moving without pings and copy-paste.
                        </p>
                      </div>
                    </div>

                    {/* Card 2: AI in your workflows */}
                    <div className="tech-service-card">
                      <div className="tech-service-card-icon">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="16" x2="12" y2="12" />
                          <line x1="12" y1="8" x2="12.01" y2="8" />
                        </svg>
                      </div>
                      <div className="tech-service-card-caption">
                        <h3 className="tech-service-item-title text-xl font-bold mb-2 text-white">AI in your workflows</h3>
                        <p className="text-body in-tech-service-card text-white/70 text-sm leading-relaxed">
                          Classify, summarize, extract fields, enrich leads, and route support tickets; keep
                          human-in-the-loop review queues for low-confidence or high-stakes edge cases.
                        </p>
                      </div>
                    </div>

                    {/* Card 3: Email & document processing */}
                    <div className="tech-service-card">
                      <div className="tech-service-card-icon">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                      </div>
                      <div className="tech-service-card-caption">
                        <h3 className="tech-service-item-title text-xl font-bold mb-2 text-white">Email &amp; document processing</h3>
                        <p className="text-body in-tech-service-card text-white/70 text-sm leading-relaxed">
                          AI-assisted parsing of high-volume inboxes, invoices, and PDFs: extract structured
                          data directly to your database or CRM, and flag unusual anomalies for instant manual review.
                        </p>
                      </div>
                    </div>

                    {/* Card 4: Ops for sales & support */}
                    <div className="tech-service-card">
                      <div className="tech-service-card-icon">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                        </svg>
                      </div>
                      <div className="tech-service-card-caption">
                        <h3 className="tech-service-item-title text-xl font-bold mb-2 text-white">Ops for sales &amp; support</h3>
                        <p className="text-body in-tech-service-card text-white/70 text-sm leading-relaxed">
                          Lead sourcing and enrichment, real-time CRM synchronization, outbound automation,
                          ticket intake, automatic triage, and SLA escalation alerts.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* -------------------------------------------------------------
                    03. AI + AUTOMATION: BETTER TOGETHER
                    ------------------------------------------------------------- */}
                <section id="services-together" className="tech-services">
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
                    AI provides context and intelligence; automation executes actions at instant speed.
                    Together, they eliminate friction and scale productivity.
                  </div>

                  <ul role="list" className="tech-service-list is-2-grid grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                    <li className="tech-service-item p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#00e5ff] mt-2 flex-shrink-0" />
                      <div>
                        <strong className="text-white block text-sm font-semibold">Smart lead routing</strong>
                        <span className="text-white/60 text-xs">Context-aware qualification, CRM enrichment, and automated rep assignment.</span>
                      </div>
                    </li>
                    <li className="tech-service-item p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#00e5ff] mt-2 flex-shrink-0" />
                      <div>
                        <strong className="text-white block text-sm font-semibold">Document extraction</strong>
                        <span className="text-white/60 text-xs">Parse tables, receipts, and invoices into structured JSON schemas automatically.</span>
                      </div>
                    </li>
                    <li className="tech-service-item p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#00e5ff] mt-2 flex-shrink-0" />
                      <div>
                        <strong className="text-white block text-sm font-semibold">Ticket escalation</strong>
                        <span className="text-white/60 text-xs">Sentiment analysis routes critical bugs and VIP inquiries in seconds.</span>
                      </div>
                    </li>
                    <li className="tech-service-item p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#00e5ff] mt-2 flex-shrink-0" />
                      <div>
                        <strong className="text-white block text-sm font-semibold">Data hygiene</strong>
                        <span className="text-white/60 text-xs">Continuous background deduplication across databases and apps.</span>
                      </div>
                    </li>
                  </ul>

                  {/* VISUAL WORKFLOW MOCKUP COLLAGE */}
                  <div className="team__grid__wrap">
                    <div className="team__lottieanim is-in-services">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="rounded-xl overflow-hidden border border-white/10 bg-[#13141f] shadow-xl">
                          <img
                            src="/images/services/6928324c28dda1fee3400343_3.webp"
                            alt="Sales CRM automation dashboard"
                            className="w-full h-auto object-cover"
                          />
                        </div>
                        <div className="rounded-xl overflow-hidden border border-white/10 bg-[#13141f] shadow-xl">
                          <img
                            src="/images/services/692832c928b7b0c1882be0fb_2.webp"
                            alt="Lead enrichment workflow view"
                            className="w-full h-auto object-cover"
                          />
                        </div>
                        <div className="rounded-xl overflow-hidden border border-white/10 bg-[#13141f] shadow-xl">
                          <img
                            src="/images/services/692832e16222b76a214199c6_4.webp"
                            alt="Automated ops analytics table"
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* -------------------------------------------------------------
                    04. HOW WE BUILD AUTOMATIONS THAT WORK
                    ------------------------------------------------------------- */}
                <section id="how-we-build" className="tech-services">
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
                    A proven, battle-tested engineering methodology ensuring
                    reliable deployments that run 24/7 without fail.
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="tech-service-card">
                      <span className="text-xs font-mono uppercase tracking-wider text-[#00e5ff] font-semibold block mb-2">01. Step</span>
                      <h3 className="text-lg font-bold text-white mb-2">Discovery &amp; scoping</h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        Deep-dive audit of toolstacks, data flow bottlenecks, manual copy-paste tasks, and edge cases.
                      </p>
                    </div>

                    <div className="tech-service-card">
                      <span className="text-xs font-mono uppercase tracking-wider text-[#00e5ff] font-semibold block mb-2">02. Step</span>
                      <h3 className="text-lg font-bold text-white mb-2">Architecture &amp; integration</h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        Connect APIs, webhooks, databases, and LLM endpoints with robust exception logic and self-healing.
                      </p>
                    </div>

                    <div className="tech-service-card">
                      <span className="text-xs font-mono uppercase tracking-wider text-[#00e5ff] font-semibold block mb-2">03. Step</span>
                      <h3 className="text-lg font-bold text-white mb-2">Testing &amp; validation</h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        Shadow execution against production data, verifying schema integrity and human review triggers.
                      </p>
                    </div>

                    <div className="tech-service-card">
                      <span className="text-xs font-mono uppercase tracking-wider text-[#00e5ff] font-semibold block mb-2">04. Step</span>
                      <h3 className="text-lg font-bold text-white mb-2">Deployment &amp; monitoring</h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        Live rollout with real-time alerting, audit logging, automatic retries, and comprehensive reporting.
                      </p>
                    </div>
                  </div>
                </section>

                {/* -------------------------------------------------------------
                    05. CASE STUDIES CAROUSEL
                    ------------------------------------------------------------- */}
                <section id="why-we" className="tech-benefits">
                  <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                    <div>
                      <h2
                        color-word="#00e5ff"
                        text-split=""
                        lines-slide-up=""
                        color-words-index="3,4"
                        className="tech-section-title"
                      >
                        Winning with us: our clients&#x27; success
                      </h2>
                      <p className="text-white/60 text-sm mt-2">
                        Real production workflows delivering measurable operational leverage.
                      </p>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        className="swis-portfolio-prev swiper-btn-prev"
                        aria-label="Previous case study"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="15 18 9 12 15 6" />
                        </svg>
                      </button>
                      <button
                        type="button"
                        className="swis-portfolio-next swiper-btn-next"
                        aria-label="Next case study"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="cases-slider">
                    <div className="swiper-wrapper">
                      {/* Case 1: SACLAB */}
                      <div className="swiper-slide">
                        <div className="tech-service-card h-full flex flex-col justify-between">
                          <div>
                            <div className="rounded-xl overflow-hidden mb-4 bg-black/40 border border-white/5">
                              <img
                                src="/images/services/6aa958df5478b4daee425e17_SACLAB (2).webp"
                                alt="SACLAB automated inventory & logistics"
                                className="w-full h-48 object-cover"
                              />
                            </div>
                            <span className="text-xs font-mono uppercase tracking-wider text-[#00e5ff] font-semibold block mb-2">Logistics &amp; AI</span>
                            <h3 className="text-lg font-bold text-white mb-2">SACLAB</h3>
                            <p className="text-white/70 text-xs leading-relaxed">
                              Automated inventory forecasting, predictive stock replenishment, and order dispatch pipelines.
                            </p>
                          </div>
                          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#00e5ff]">
                            <span>Read case study</span>
                            <span>→</span>
                          </div>
                        </div>
                      </div>

                      {/* Case 2: TechHunt */}
                      <div className="swiper-slide">
                        <div className="tech-service-card h-full flex flex-col justify-between">
                          <div>
                            <div className="rounded-xl overflow-hidden mb-4 bg-black/40 border border-white/5">
                              <img
                                src="/images/services/69415648fb54d47025658431_68502c28fbdaa5e4f7401a80_techhunt (1).webp"
                                alt="TechHunt automated recruitment platform"
                                className="w-full h-48 object-cover"
                              />
                            </div>
                            <span className="text-xs font-mono uppercase tracking-wider text-[#00e5ff] font-semibold block mb-2">Recruitment Ops</span>
                            <h3 className="text-lg font-bold text-white mb-2">TechHunt</h3>
                            <p className="text-white/70 text-xs leading-relaxed">
                              Automated candidate screening, talent pool categorization, and personalized outreach sequence sync.
                            </p>
                          </div>
                          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#00e5ff]">
                            <span>Read case study</span>
                            <span>→</span>
                          </div>
                        </div>
                      </div>

                      {/* Case 3: HIVE */}
                      <div className="swiper-slide">
                        <div className="tech-service-card h-full flex flex-col justify-between">
                          <div>
                            <div className="rounded-xl overflow-hidden mb-4 bg-black/40 border border-white/5">
                              <img
                                src="/images/services/6aa95992835bec44feecea38_hive-project (1).webp"
                                alt="HIVE customer support routing"
                                className="w-full h-48 object-cover"
                              />
                            </div>
                            <span className="text-xs font-mono uppercase tracking-wider text-[#00e5ff] font-semibold block mb-2">Support AI</span>
                            <h3 className="text-lg font-bold text-white mb-2">HIVE</h3>
                            <p className="text-white/70 text-xs leading-relaxed">
                              Intelligent ticket classification, multi-language translation, and SLA auto-escalation engine.
                            </p>
                          </div>
                          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#00e5ff]">
                            <span>Read case study</span>
                            <span>→</span>
                          </div>
                        </div>
                      </div>

                      {/* Case 4: Maxopolis */}
                      <div className="swiper-slide">
                        <div className="tech-service-card h-full flex flex-col justify-between">
                          <div>
                            <div className="rounded-xl overflow-hidden mb-4 bg-black/40 border border-white/5">
                              <img
                                src="/images/services/68502b378775a7fe00bb4fab_habitat.webp"
                                alt="Maxopolis automated contract parsing"
                                className="w-full h-48 object-cover"
                              />
                            </div>
                            <span className="text-xs font-mono uppercase tracking-wider text-[#00e5ff] font-semibold block mb-2">FinTech &amp; Real Estate</span>
                            <h3 className="text-lg font-bold text-white mb-2">Maxopolis</h3>
                            <p className="text-white/70 text-xs leading-relaxed">
                              Automated lease parsing, financial ledger synchronization, and tenant document processing.
                            </p>
                          </div>
                          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#00e5ff]">
                            <span>Read case study</span>
                            <span>→</span>
                          </div>
                        </div>
                      </div>

                      {/* Case 5: CabSpot */}
                      <div className="swiper-slide">
                        <div className="tech-service-card h-full flex flex-col justify-between">
                          <div>
                            <div className="rounded-xl overflow-hidden mb-4 bg-black/40 border border-white/5">
                              <img
                                src="/images/services/69415707d03780662cf56620_coinweb.webp"
                                alt="CabSpot dispatch automation"
                                className="w-full h-48 object-cover"
                              />
                            </div>
                            <span className="text-xs font-mono uppercase tracking-wider text-[#00e5ff] font-semibold block mb-2">Fleet Management</span>
                            <h3 className="text-lg font-bold text-white mb-2">CabSpot</h3>
                            <p className="text-white/70 text-xs leading-relaxed">
                              Real-time dispatch automation, automated rider communications, and dynamic routing sync.
                            </p>
                          </div>
                          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#00e5ff]">
                            <span>Read case study</span>
                            <span>→</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* -------------------------------------------------------------
                    06. WHY TEAMS CHOOSE TECHFORBS
                    ------------------------------------------------------------- */}
                <section id="why-teams" className="tech-services">
                  <h2
                    color-word="#00e5ff"
                    text-split=""
                    lines-slide-up=""
                    color-words-index="3,4"
                    className="tech-section-title mb-60"
                  >
                    Why teams choose TechForbs
                  </h2>
                  <div className="text-block is-gray margin-bottom-50">
                    Enterprise engineering rigor combined with boutique agility.
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="tech-service-card">
                      <div className="text-2xl font-bold text-[#00e5ff] mb-2">01</div>
                      <h3 className="text-base font-bold text-white mb-2">Zero vendor lock-in</h3>
                      <p className="text-white/70 text-xs leading-relaxed">
                        We build directly into your stack. You own 100% of the code, scripts, credentials, and workflows.
                      </p>
                    </div>

                    <div className="tech-service-card">
                      <div className="text-2xl font-bold text-[#00e5ff] mb-2">02</div>
                      <h3 className="text-base font-bold text-white mb-2">Strict data privacy</h3>
                      <p className="text-white/70 text-xs leading-relaxed">
                        SOC2 and GDPR compliance. Your proprietary business data is never used to train public AI models.
                      </p>
                    </div>

                    <div className="tech-service-card">
                      <div className="text-2xl font-bold text-[#00e5ff] mb-2">03</div>
                      <h3 className="text-base font-bold text-white mb-2">Direct engineer access</h3>
                      <p className="text-white/70 text-xs leading-relaxed">
                        Work directly with lead automation architects and software engineers without non-technical middlemen.
                      </p>
                    </div>
                  </div>

                  {/* AUTHENTIC TECHFORBS TEAM COLLAGE */}
                  <div className="team__grid__wrap">
                    <div className="team__lottieanim">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div className="rounded-xl overflow-hidden border border-white/10 bg-[#13141f]">
                          <img
                            src="/images/team/sunil-panchani-director.jpg"
                            alt="Sunil Panchani, Director"
                            className="w-full h-36 object-cover"
                          />
                        </div>
                        <div className="rounded-xl overflow-hidden border border-white/10 bg-[#13141f]">
                          <img
                            src="/images/services/6850286683615deed2605b11_munir.webp"
                            alt="TechForbs engineering lead"
                            className="w-full h-36 object-cover"
                          />
                        </div>
                        <div className="rounded-xl overflow-hidden border border-white/10 bg-[#13141f]">
                          <img
                            src="/images/services/68502a0bc839a090ed9be559_pedersen.webp"
                            alt="TechForbs automation architect"
                            className="w-full h-36 object-cover"
                          />
                        </div>
                        <div className="rounded-xl overflow-hidden border border-white/10 bg-[#13141f]">
                          <img
                            src="/images/services/68502b31c839a090ed9cb36d_kozak.webp"
                            alt="TechForbs systems engineer"
                            className="w-full h-36 object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* -------------------------------------------------------------
                    07. CERTIFIED PARTNER
                    ------------------------------------------------------------- */}
                <section className="tech-sertificate">
                  <div className="tech-service-card p-8 border border-[#00e5ff]/30 bg-gradient-to-r from-[#13141f] via-[#0d0e17] to-[#13141f]">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                      <div>
                        <span className="text-xs font-mono uppercase tracking-wider text-[#00e5ff] font-semibold block mb-2">Industry Credentials</span>
                        <h2 className="text-2xl font-bold text-white mb-2">Certified automation partner</h2>
                        <p className="text-white/70 text-sm max-w-xl leading-relaxed">
                          Certified expertise across Make, Zapier, n8n, OpenAI, and enterprise cloud APIs.
                          We follow rigorous engineering standards and continuous monitoring protocols.
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <Link
                          href="#contact-section"
                          className="button button_blue"
                        >
                          <strong>Explore solutions</strong>
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>

                {/* -------------------------------------------------------------
                    08. TECHNOLOGIES SLIDER
                    ------------------------------------------------------------- */}
                <section id="ecosystem" className="tech-ecosystem">
                  <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                    <div>
                      <h2
                        color-word="#00e5ff"
                        text-split=""
                        lines-slide-up=""
                        color-words-index="3,4"
                        className="tech-section-title"
                      >
                        Technologies we use in AI &amp; automation
                      </h2>
                      <p className="text-white/60 text-sm mt-2">
                        Battle-tested low-code orchestrators, custom code runtimes, and frontier AI models.
                      </p>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        className="tech-slider-prev swiper-btn-prev"
                        aria-label="Previous technology"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="15 18 9 12 15 6" />
                        </svg>
                      </button>
                      <button
                        type="button"
                        className="tech-slider-next swiper-btn-next"
                        aria-label="Next technology"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="tech-slider">
                    <div className="tech-ecosystem-grid swiper-wrapper">
                      {/* Tech 1: Make */}
                      <div className="swiper-slide">
                        <div className="tech-service-card text-center p-6 flex flex-col items-center justify-center min-h-[160px]">
                          <img src="/images/technologies/make-logo.svg" alt="Make logo" className="h-10 w-auto mb-3" />
                          <h3 className="text-sm font-bold text-white">Make</h3>
                          <span className="text-xs text-white/50">Enterprise Orchestration</span>
                        </div>
                      </div>

                      {/* Tech 2: HubSpot */}
                      <div className="swiper-slide">
                        <div className="tech-service-card text-center p-6 flex flex-col items-center justify-center min-h-[160px]">
                          <img src="/images/technologies/hubspot-logo.svg" alt="HubSpot logo" className="h-10 w-auto mb-3" />
                          <h3 className="text-sm font-bold text-white">HubSpot</h3>
                          <span className="text-xs text-white/50">CRM Automation</span>
                        </div>
                      </div>

                      {/* Tech 3: Zapier */}
                      <div className="swiper-slide">
                        <div className="tech-service-card text-center p-6 flex flex-col items-center justify-center min-h-[160px]">
                          <img src="/images/technologies/zapier-logo.svg" alt="Zapier logo" className="h-10 w-auto mb-3" />
                          <h3 className="text-sm font-bold text-white">Zapier</h3>
                          <span className="text-xs text-white/50">App Connectivity</span>
                        </div>
                      </div>

                      {/* Tech 4: Airtable */}
                      <div className="swiper-slide">
                        <div className="tech-service-card text-center p-6 flex flex-col items-center justify-center min-h-[160px]">
                          <img src="/images/technologies/airtable-logo.svg" alt="Airtable logo" className="h-10 w-auto mb-3" />
                          <h3 className="text-sm font-bold text-white">Airtable</h3>
                          <span className="text-xs text-white/50">Relational Database</span>
                        </div>
                      </div>

                      {/* Tech 5: n8n */}
                      <div className="swiper-slide">
                        <div className="tech-service-card text-center p-6 flex flex-col items-center justify-center min-h-[160px]">
                          <img src="/images/technologies/n8n-logo.svg" alt="n8n logo" className="h-10 w-auto mb-3" />
                          <h3 className="text-sm font-bold text-white">n8n</h3>
                          <span className="text-xs text-white/50">Self-Hosted Workflows</span>
                        </div>
                      </div>

                      {/* Tech 6: Python */}
                      <div className="swiper-slide">
                        <div className="tech-service-card text-center p-6 flex flex-col items-center justify-center min-h-[160px]">
                          <img src="/images/technologies/6850232c66d819b168926940_python.svg" alt="Python logo" className="h-10 w-auto mb-3" />
                          <h3 className="text-sm font-bold text-white">Python</h3>
                          <span className="text-xs text-white/50">AI Pipelines &amp; Scripts</span>
                        </div>
                      </div>

                      {/* Tech 7: Node.js */}
                      <div className="swiper-slide">
                        <div className="tech-service-card text-center p-6 flex flex-col items-center justify-center min-h-[160px]">
                          <img src="/images/technologies/685021eb48a6026938e55cf9_node.svg" alt="Node.js logo" className="h-10 w-auto mb-3" />
                          <h3 className="text-sm font-bold text-white">Node.js</h3>
                          <span className="text-xs text-white/50">Custom Microservices</span>
                        </div>
                      </div>

                      {/* Tech 8: Next.js */}
                      <div className="swiper-slide">
                        <div className="tech-service-card text-center p-6 flex flex-col items-center justify-center min-h-[160px]">
                          <img src="/images/technologies/6850232cf8e805f63d276b1f_next.svg" alt="Next.js logo" className="h-10 w-auto mb-3" />
                          <h3 className="text-sm font-bold text-white">Next.js</h3>
                          <span className="text-xs text-white/50">Internal Portals</span>
                        </div>
                      </div>

                      {/* Tech 9: MySQL */}
                      <div className="swiper-slide">
                        <div className="tech-service-card text-center p-6 flex flex-col items-center justify-center min-h-[160px]">
                          <img src="/images/technologies/6850232c1c68f0cb64670275_mysql.svg" alt="MySQL logo" className="h-10 w-auto mb-3" />
                          <h3 className="text-sm font-bold text-white">MySQL</h3>
                          <span className="text-xs text-white/50">Data Warehousing</span>
                        </div>
                      </div>

                      {/* Tech 10: Stripe */}
                      <div className="swiper-slide">
                        <div className="tech-service-card text-center p-6 flex flex-col items-center justify-center min-h-[160px]">
                          <img src="/images/technologies/stripe-logo.svg" alt="Stripe logo" className="h-10 w-auto mb-3" />
                          <h3 className="text-sm font-bold text-white">Stripe</h3>
                          <span className="text-xs text-white/50">Payment Automations</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* -------------------------------------------------------------
                    09. TESTIMONIALS
                    ------------------------------------------------------------- */}
                <section id="testimonials-section" className="tech-testimonials">
                  <h2
                    color-word="#00e5ff"
                    text-split=""
                    lines-slide-up=""
                    color-words-index="3,4"
                    className="tech-section-title mb-60"
                  >
                    What our clients say… for real
                  </h2>
                  <div className="text-block is-gray margin-bottom-50">
                    Trusted by operations leaders worldwide.
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="tech-service-card">
                      <p className="text-white/80 text-sm italic mb-6 leading-relaxed">
                        &quot;TechForbs completely restructured our operations. What used to take four team members
                        half a day is now fully automated in seconds with zero human errors.&quot;
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#0077ff]/20 border border-[#00e5ff]/40 flex items-center justify-center font-bold text-white text-sm">
                          AH
                        </div>
                        <div>
                          <strong className="text-white block text-sm">Alexander H.</strong>
                          <span className="text-white/50 text-xs">COO, LogiSync Operations</span>
                        </div>
                      </div>
                    </div>

                    <div className="tech-service-card">
                      <p className="text-white/80 text-sm italic mb-6 leading-relaxed">
                        &quot;The team delivered a custom AI document processing engine that saved us hundreds of manual
                        hours every week. Truly exceptional engineering and reliable communication.&quot;
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#0077ff]/20 border border-[#00e5ff]/40 flex items-center justify-center font-bold text-white text-sm">
                          EV
                        </div>
                        <div>
                          <strong className="text-white block text-sm">Elena V.</strong>
                          <span className="text-white/50 text-xs">VP of Product, RetailNova</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* -------------------------------------------------------------
                    10. BUSINESSES WE SERVE
                    ------------------------------------------------------------- */}
                <section id="businesses-serve" className="tech-customize">
                  <h2
                    color-word="#00e5ff"
                    text-split=""
                    lines-slide-up=""
                    color-words-index="3,4"
                    className="tech-section-title mb-60"
                  >
                    Businesses we serve with AI &amp; automation
                  </h2>
                  <div className="text-block is-gray margin-bottom-50">
                    Tailored architectures designed specifically for your stage of growth and operational velocity.
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="tech-service-card">
                      <span className="text-xs font-mono uppercase tracking-wider text-[#00e5ff] font-semibold block mb-2">Segment 01</span>
                      <h3 className="text-lg font-bold text-white mb-2">Agencies</h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        Automate client onboarding, multi-channel reporting, task handoffs, and asset delivery.
                      </p>
                    </div>

                    <div className="tech-service-card">
                      <span className="text-xs font-mono uppercase tracking-wider text-[#00e5ff] font-semibold block mb-2">Segment 02</span>
                      <h3 className="text-lg font-bold text-white mb-2">Startups</h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        Build 10x leaner by connecting core product APIs to support, sales, and analytics without adding headcount.
                      </p>
                    </div>

                    <div className="tech-service-card">
                      <span className="text-xs font-mono uppercase tracking-wider text-[#00e5ff] font-semibold block mb-2">Segment 03</span>
                      <h3 className="text-lg font-bold text-white mb-2">SMEs</h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        Eliminate legacy software silos, manual spreadsheet data entry, and slow reconciliation cycles.
                      </p>
                    </div>

                    <div className="tech-service-card">
                      <span className="text-xs font-mono uppercase tracking-wider text-[#00e5ff] font-semibold block mb-2">Segment 04</span>
                      <h3 className="text-lg font-bold text-white mb-2">Enterprises</h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        Custom AI pipelines, secure self-hosted LLM orchestration, audit logging, and ironclad SLA uptime.
                      </p>
                    </div>
                  </div>
                </section>
              </div>

              {/* ---------------------------------------------------------------
                  STICKY ASIDE (FOUNDER PROFILE)
                  --------------------------------------------------------------- */}
              <aside className="tech-aside mobile-fixed is-sticky">
                <div className="tech-service-card text-center p-6 border border-[#00e5ff]/20">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-[#00e5ff] shadow-lg mb-4">
                    <img
                      src="/images/team/sunil-panchani-director.jpg"
                      alt="Sunil Panchani, Director & Founder"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">Sunil Panchani</h3>
                  <p className="text-[#00e5ff] text-xs font-semibold mb-3">Director &amp; Founder</p>
                  <p className="text-white/60 text-xs mb-6 leading-relaxed">
                    Discuss your automation roadmap directly with our founding leadership.
                  </p>
                  <Link
                    href="#contact-section"
                    className="button button_smaller button_blue w-full block text-center"
                  >
                    <strong>Let&#x27;s talk</strong>
                  </Link>
                </div>
              </aside>
            </div>

            {/* -----------------------------------------------------------------
                11. BRAND LOGOS & INDUSTRY RECOGNITION
                ----------------------------------------------------------------- */}
            <section className="section-swis-awards v2 my-16">
              <div className="text-center mb-10">
                <p className="text-xs font-mono uppercase tracking-widest text-[#00e5ff] font-semibold">
                  By choosing us you choose results and industry recognition
                </p>
              </div>
              <BrandLogos />
            </section>

            {/* -----------------------------------------------------------------
                12. HIGH-CONVERTING CTA BANNER
                ----------------------------------------------------------------- */}
            <div className="tech-main-inner-wider max-w-[69.75rem] mx-auto px-4 my-16">
              <div className="tech-service-card p-10 md:p-14 border border-[#00e5ff]/30 bg-gradient-to-r from-[#13141f] via-[#0d0e17] to-[#13141f] rounded-3xl">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                  <div className="max-w-2xl text-center lg:text-left">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      Build smarter workflows with the right automation partner
                    </h3>
                    <p className="text-white/70 text-sm md:text-base leading-relaxed">
                      Eliminate busywork, connect your technology ecosystem, and accelerate your business velocity today.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#00e5ff] shadow-lg hidden sm:block">
                      <img
                        src="/images/team/sunil-panchani-director.jpg"
                        alt="Sunil Panchani"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <Link
                      href="#contact-section"
                      className="button button_blue"
                    >
                      <strong>Book a discovery call</strong>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* -----------------------------------------------------------------
                13. FREQUENTLY ASKED QUESTIONS (FAQ)
                ----------------------------------------------------------------- */}
            <div className="tech-main-inner margin-bottom-7-5 overflow-hidden">
              <div className="tech-content">
                <section id="faq" className="tech-faq">
                  <h2
                    color-word="#00e5ff"
                    text-split=""
                    lines-slide-up=""
                    color-words-index="3,4"
                    className="tech-section-title mb-60"
                  >
                    Frequently asked questions (FAQ)
                  </h2>

                  <div className="faq flex flex-col gap-4">
                    {/* FAQ 1 */}
                    <div className="faq-item border border-white/10 rounded-2xl p-6 bg-[#13141f]/70">
                      <div className="faq-item-header flex items-center justify-between cursor-pointer">
                        <h3 className="text-base font-semibold text-white pr-4">
                          How fast can TechForbs deploy an AI automation workflow?
                        </h3>
                        <div className="faq-item-header-icon flex-shrink-0 w-8 h-8 rounded-full border border-[#00e5ff]/30 flex items-center justify-center text-[#00e5ff]">
                          +
                        </div>
                      </div>
                      <div className="faq-item-header-dropdown mt-4 pt-4 border-t border-white/10 text-white/70 text-sm leading-relaxed hidden">
                        Standard automations connecting common tools (CRMs, email, databases) typically go live within 5 to 10 business days. Complex custom AI document processing pipelines or multi-system enterprise integrations typically deploy within 2 to 4 weeks, with staged milestone rollouts and shadow testing throughout.
                      </div>
                    </div>

                    {/* FAQ 2 */}
                    <div className="faq-item border border-white/10 rounded-2xl p-6 bg-[#13141f]/70">
                      <div className="faq-item-header flex items-center justify-between cursor-pointer">
                        <h3 className="text-base font-semibold text-white pr-4">
                          Do we need to replace our current software and CRM tools?
                        </h3>
                        <div className="faq-item-header-icon flex-shrink-0 w-8 h-8 rounded-full border border-[#00e5ff]/30 flex items-center justify-center text-[#00e5ff]">
                          +
                        </div>
                      </div>
                      <div className="faq-item-header-dropdown mt-4 pt-4 border-t border-white/10 text-white/70 text-sm leading-relaxed hidden">
                        No. We engineer directly around your existing ecosystem — including HubSpot, Salesforce, Airtable, Google Workspace, Slack, and custom legacy databases. We connect and orchestrate what you already use rather than forcing an expensive rip-and-replace migration.
                      </div>
                    </div>

                    {/* FAQ 3 */}
                    <div className="faq-item border border-white/10 rounded-2xl p-6 bg-[#13141f]/70">
                      <div className="faq-item-header flex items-center justify-between cursor-pointer">
                        <h3 className="text-base font-semibold text-white pr-4">
                          How is enterprise data security and privacy maintained?
                        </h3>
                        <div className="faq-item-header-icon flex-shrink-0 w-8 h-8 rounded-full border border-[#00e5ff]/30 flex items-center justify-center text-[#00e5ff]">
                          +
                        </div>
                      </div>
                      <div className="faq-item-header-dropdown mt-4 pt-4 border-t border-white/10 text-white/70 text-sm leading-relaxed hidden">
                        We adhere to SOC2 and GDPR compliance protocols. All API data transfers are encrypted in transit via TLS 1.3 and at rest. Whenever frontier LLMs are utilized, zero-data-retention agreements are configured so that your proprietary business data is never logged or used to train third-party public models.
                      </div>
                    </div>

                    {/* FAQ 4 */}
                    <div className="faq-item border border-white/10 rounded-2xl p-6 bg-[#13141f]/70">
                      <div className="faq-item-header flex items-center justify-between cursor-pointer">
                        <h3 className="text-base font-semibold text-white pr-4">
                          What happens if a connected third-party API changes or fails?
                        </h3>
                        <div className="faq-item-header-icon flex-shrink-0 w-8 h-8 rounded-full border border-[#00e5ff]/30 flex items-center justify-center text-[#00e5ff]">
                          +
                        </div>
                      </div>
                      <div className="faq-item-header-dropdown mt-4 pt-4 border-t border-white/10 text-white/70 text-sm leading-relaxed hidden">
                        Every workflow is built with defensive engineering: exponential backoff retries, dead-letter queue routing, fallback paths, and instant real-time alerting to our on-call engineering channel. If an external service has an outage, payloads are safely queued and retried automatically once service is restored.
                      </div>
                    </div>

                    {/* FAQ 5 */}
                    <div className="faq-item border border-white/10 rounded-2xl p-6 bg-[#13141f]/70">
                      <div className="faq-item-header flex items-center justify-between cursor-pointer">
                        <h3 className="text-base font-semibold text-white pr-4">
                          How does post-launch support and maintenance work?
                        </h3>
                        <div className="faq-item-header-icon flex-shrink-0 w-8 h-8 rounded-full border border-[#00e5ff]/30 flex items-center justify-center text-[#00e5ff]">
                          +
                        </div>
                      </div>
                      <div className="faq-item-header-dropdown mt-4 pt-4 border-t border-white/10 text-white/70 text-sm leading-relaxed hidden">
                        We provide full documentation, comprehensive handover training, and optional ongoing maintenance SLA packages with active uptime monitoring, schema updates, optimization, and engineering support.
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <aside className="tech-aside is-empty" />
            </div>
          </div>
        </main>

        <ContactSection />
        <Footer />
      </div>
    </SmoothScroll>
  );
}
