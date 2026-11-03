import type { Metadata } from "next";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";
import SmoothScroll from "@/components/smooth-scroll/SmoothScroll";
import AIAutomationClientInteractions from "@/components/services/AIAutomationClientInteractions";

export const metadata: Metadata = {
  title: "AI & Automation Services | TechForbs",
  description:
    "AI-driven business process automation with Make, n8n, and frontier AI models. Built by TechForbs.",
};

export default function AIAutomationPage() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#101010] text-white selection:bg-[#00e5ff] selection:text-black">
        <Navbar />
        <AIAutomationClientInteractions />
        <main className="relative z-10 flex flex-col">
          
      <section className="services-hero">
        <div className="tech-hero-gradient"></div>
        <div className="service-hero-inner">
          <img
            src="https://cdn.prod.website-files.com/64d20115d5be49b3874991ac/69273fea692d3db88c70d620_ai-bg.webp"
            loading="lazy"
            sizes="(max-width: 2848px) 100vw, 2848px"
            srcSet="
              https://cdn.prod.website-files.com/64d20115d5be49b3874991ac/69273fea692d3db88c70d620_ai-bg-p-500.webp   500w,
              https://cdn.prod.website-files.com/64d20115d5be49b3874991ac/69273fea692d3db88c70d620_ai-bg-p-800.webp   800w,
              https://cdn.prod.website-files.com/64d20115d5be49b3874991ac/69273fea692d3db88c70d620_ai-bg-p-1080.webp 1080w,
              https://cdn.prod.website-files.com/64d20115d5be49b3874991ac/69273fea692d3db88c70d620_ai-bg-p-1600.webp 1600w,
              https://cdn.prod.website-files.com/64d20115d5be49b3874991ac/69273fea692d3db88c70d620_ai-bg-p-2000.webp 2000w,
              https://cdn.prod.website-files.com/64d20115d5be49b3874991ac/69273fea692d3db88c70d620_ai-bg-p-2600.webp 2600w,
              https://cdn.prod.website-files.com/64d20115d5be49b3874991ac/69273fea692d3db88c70d620_ai-bg.webp        2848w
            "
            alt=""
            className="service-hero-bg"
          /><img
            src="https://cdn.prod.website-files.com/64d20115d5be49b3874991ac/664319142c43bfb250429812_decor.svg"
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
                      stroke="#EB5951"
                      stroke-width="3"
                      stroke-linecap="round"
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
                Free your team’s time for what truly matters. From lead handling
                to document parsing - we turn repetitive tasks into smart,
                connected workflows.
              </div>
              <div className="button-wrap on-service-page">
                <a href="/contact" className="button">Book a call</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <main className="tech-main padding-top-112 pb-0">
        <div className="tech-main-inner services-pages">
          <div className="tech-content">
            <section id="solutions" className="tech-customize">
              <h2
                color-word="#eb5951"
                text-split=""
                lines-slide-up=""
                color-words-index="2,3,4,5,6"
                className="tech-section-title mb-60"
              >
                what do our ai &amp; automation services include?
              </h2>
              <div className="text-block is-gray margin-bottom-50">
                We build, connect, and scale automations that save time and
                prevent human errors - combining AI precision with low-code
                agility.
              </div>
              <div className="w-dyn-list">
                <div role="list" className="tech-service-cards w-dyn-items">
                  <div role="listitem" className="w-dyn-item">
                    <div className="tech-service-card">
                      <div
                        style={{"backgroundImage":"url('https"}}
                        className="tech-services-card-bg is-first"
                      ></div>
                      <div className="tech-service-card-icon">
                        <img
                          src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/692742a882a7dc0bc18fedfe_cug.svg"
                          loading="lazy"
                          alt=""
                        />
                      </div>
                      <div className="tech-service-card-caption">
                        <h3 className="tech-service-item-title">
                          Workflow automation
                        </h3>
                        <p className="text-body in-tech-service-card">
                          Connect your apps, remove manual steps, add branching
                          logic, retries, alerts, so work keeps moving without
                          pings and copy-paste.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <div className="tech-service-card">
                      <div
                        style={{"backgroundImage":"url('https"}}
                        className="tech-services-card-bg is-first"
                      ></div>
                      <div className="tech-service-card-icon">
                        <img
                          src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/6927431ee95570ca22524488_head.svg"
                          loading="lazy"
                          alt=""
                        />
                      </div>
                      <div className="tech-service-card-caption">
                        <h3 className="tech-service-item-title">
                          AI in your workflows
                        </h3>
                        <p className="text-body in-tech-service-card">
                          Classify, summarize, extract fields, enrich leads,
                          route tickets; keep human-in-the-loop for
                          low-confidence cases.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <div className="tech-service-card">
                      <div
                        style={{"backgroundImage":"url('https"}}
                        className="tech-services-card-bg is-first"
                      ></div>
                      <div className="tech-service-card-icon">
                        <img
                          src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/69282fa87f3ced4dd7b3569c_lucide_mail.svg"
                          loading="lazy"
                          alt=""
                        />
                      </div>
                      <div className="tech-service-card-caption">
                        <h3 className="tech-service-item-title">
                          Email &amp; document processing
                        </h3>
                        <p className="text-body in-tech-service-card">
                          AI-assisted parsing of high-volume inboxes and docs:
                          extract key data to your DB/CRM, flag edge-cases for
                          review.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <div className="tech-service-card">
                      <div
                        style={{"backgroundImage":"url('https"}}
                        className="tech-services-card-bg is-first"
                      ></div>
                      <div className="tech-service-card-icon">
                        <img
                          src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/692830135db380f7128cf54f_hugeicons_briefcase-03.svg"
                          loading="lazy"
                          alt=""
                        />
                      </div>
                      <div className="tech-service-card-caption">
                        <h3 className="tech-service-item-title">
                          Ops for Sales &amp; Support
                        </h3>
                        <p className="text-body in-tech-service-card">
                          Lead sourcing &amp; enrichment, CRM sync, outbound
                          orchestration; ticket intake, auto-triage, suggested
                          replies, SLA notifications.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                src="https://cdn.prod.website-files.com/64d20115d5be49b3874991ac/693c49f7e5d2f2750fc299d9_ai-decor.svg"
                loading="lazy"
                alt=""
                className="ai-left-top-decor"
              />
            </section>
            <section id="services" className="tech-services">
              <h2
                color-word="#eb5951"
                text-split=""
                lines-slide-up=""
                color-words-index="3,4"
                className="tech-section-title mb-60"
              >
                ai + automation: better together
              </h2>
              <div className="text-block is-gray margin-bottom-50">
                AI gives context, automation delivers action. Together, they
                turn manual effort into measurable growth.
              </div>
              <ul role="list" className="tech-service-list is-2-grid">
                <li className="tech-service-item fade-up-alt">
                  <div className="tech-service-item-icon w-embed">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d_9725_865)">
                        <rect
                          x="4"
                          y="0.000976562"
                          width="8.53295"
                          height="20.2665"
                          rx="1.46296"
                          fill="#EB5951"
                        />
                        <rect
                          x="15.7308"
                          y="0.0012207"
                          width="8.53295"
                          height="8.53324"
                          rx="1.46296"
                          fill="#EB5951"
                        />
                        <rect
                          x="15.7308"
                          y="11.7344"
                          width="8.53295"
                          height="8.53324"
                          rx="4.26647"
                          fill="white"
                          fill-opacity="0.3"
                        />
                        <rect
                          x="4"
                          y="23.4673"
                          width="8.53295"
                          height="8.53324"
                          rx="4.26647"
                          fill="white"
                          fill-opacity="0.3"
                        />
                        <rect
                          x="35.9999"
                          y="32.0024"
                          width="8.53295"
                          height="20.2665"
                          rx="1.46296"
                          transform="rotate(-180 35.9999 32.0024)"
                          fill="#585858"
                        />
                        <rect
                          x="35.9999"
                          y="8.5332"
                          width="8.53295"
                          height="8.53324"
                          rx="4.26647"
                          transform="rotate(-180 35.9999 8.5332)"
                          fill="white"
                          fill-opacity="0.3"
                        />
                        <rect
                          x="15.4254"
                          y="23.4673"
                          width="8.53295"
                          height="8.53324"
                          rx="1.46296"
                          fill="#EB5951"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_9725_865"
                          x="0"
                          y="0"
                          width="39.9999"
                          height="40.0024"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="4" />
                          <feGaussianBlur stdDeviation="2" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_9725_865"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_9725_865"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                  <div className="tech-service-item-caption">
                    <h3 className="tech-service-item-title">
                      From insights to action
                    </h3>
                    <p className="text-body">
                      AI classification &amp; extraction trigger seamless,
                      automated next steps — boosting efficiency across
                      workflows.
                    </p>
                  </div>
                </li>
                <li className="tech-service-item fade-up-alt">
                  <div className="tech-service-item-icon w-embed">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d_9725_865)">
                        <rect
                          x="4"
                          y="0.000976562"
                          width="8.53295"
                          height="20.2665"
                          rx="1.46296"
                          fill="#EB5951"
                        />
                        <rect
                          x="15.7308"
                          y="0.0012207"
                          width="8.53295"
                          height="8.53324"
                          rx="1.46296"
                          fill="#EB5951"
                        />
                        <rect
                          x="15.7308"
                          y="11.7344"
                          width="8.53295"
                          height="8.53324"
                          rx="4.26647"
                          fill="white"
                          fill-opacity="0.3"
                        />
                        <rect
                          x="4"
                          y="23.4673"
                          width="8.53295"
                          height="8.53324"
                          rx="4.26647"
                          fill="white"
                          fill-opacity="0.3"
                        />
                        <rect
                          x="35.9999"
                          y="32.0024"
                          width="8.53295"
                          height="20.2665"
                          rx="1.46296"
                          transform="rotate(-180 35.9999 32.0024)"
                          fill="#585858"
                        />
                        <rect
                          x="35.9999"
                          y="8.5332"
                          width="8.53295"
                          height="8.53324"
                          rx="4.26647"
                          transform="rotate(-180 35.9999 8.5332)"
                          fill="white"
                          fill-opacity="0.3"
                        />
                        <rect
                          x="15.4254"
                          y="23.4673"
                          width="8.53295"
                          height="8.53324"
                          rx="1.46296"
                          fill="#EB5951"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_9725_865"
                          x="0"
                          y="0"
                          width="39.9999"
                          height="40.0024"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="4" />
                          <feGaussianBlur stdDeviation="2" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_9725_865"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_9725_865"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                  <div className="tech-service-item-caption">
                    <h3 className="tech-service-item-title">
                      Measurable impact, not hype
                    </h3>
                    <p className="text-body">
                      Focus on KPIs (handling time, % automation, deflection),
                      ship small experiments, scale what works.
                    </p>
                  </div>
                </li>
                <li className="tech-service-item fade-up-alt">
                  <div className="tech-service-item-icon w-embed">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d_9725_865)">
                        <rect
                          x="4"
                          y="0.000976562"
                          width="8.53295"
                          height="20.2665"
                          rx="1.46296"
                          fill="#EB5951"
                        />
                        <rect
                          x="15.7308"
                          y="0.0012207"
                          width="8.53295"
                          height="8.53324"
                          rx="1.46296"
                          fill="#EB5951"
                        />
                        <rect
                          x="15.7308"
                          y="11.7344"
                          width="8.53295"
                          height="8.53324"
                          rx="4.26647"
                          fill="white"
                          fill-opacity="0.3"
                        />
                        <rect
                          x="4"
                          y="23.4673"
                          width="8.53295"
                          height="8.53324"
                          rx="4.26647"
                          fill="white"
                          fill-opacity="0.3"
                        />
                        <rect
                          x="35.9999"
                          y="32.0024"
                          width="8.53295"
                          height="20.2665"
                          rx="1.46296"
                          transform="rotate(-180 35.9999 32.0024)"
                          fill="#585858"
                        />
                        <rect
                          x="35.9999"
                          y="8.5332"
                          width="8.53295"
                          height="8.53324"
                          rx="4.26647"
                          transform="rotate(-180 35.9999 8.5332)"
                          fill="white"
                          fill-opacity="0.3"
                        />
                        <rect
                          x="15.4254"
                          y="23.4673"
                          width="8.53295"
                          height="8.53324"
                          rx="1.46296"
                          fill="#EB5951"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_9725_865"
                          x="0"
                          y="0"
                          width="39.9999"
                          height="40.0024"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="4" />
                          <feGaussianBlur stdDeviation="2" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_9725_865"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_9725_865"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                  <div className="tech-service-item-caption">
                    <h3 className="tech-service-item-title">Secure by default</h3>
                    <p className="text-body">
                      NDA, role-based access, and no training of vendor models
                      on your private data by default.
                    </p>
                  </div>
                </li>
                <li className="tech-service-item fade-up-alt">
                  <div className="tech-service-item-icon w-embed">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d_9725_865)">
                        <rect
                          x="4"
                          y="0.000976562"
                          width="8.53295"
                          height="20.2665"
                          rx="1.46296"
                          fill="#EB5951"
                        />
                        <rect
                          x="15.7308"
                          y="0.0012207"
                          width="8.53295"
                          height="8.53324"
                          rx="1.46296"
                          fill="#EB5951"
                        />
                        <rect
                          x="15.7308"
                          y="11.7344"
                          width="8.53295"
                          height="8.53324"
                          rx="4.26647"
                          fill="white"
                          fill-opacity="0.3"
                        />
                        <rect
                          x="4"
                          y="23.4673"
                          width="8.53295"
                          height="8.53324"
                          rx="4.26647"
                          fill="white"
                          fill-opacity="0.3"
                        />
                        <rect
                          x="35.9999"
                          y="32.0024"
                          width="8.53295"
                          height="20.2665"
                          rx="1.46296"
                          transform="rotate(-180 35.9999 32.0024)"
                          fill="#585858"
                        />
                        <rect
                          x="35.9999"
                          y="8.5332"
                          width="8.53295"
                          height="8.53324"
                          rx="4.26647"
                          transform="rotate(-180 35.9999 8.5332)"
                          fill="white"
                          fill-opacity="0.3"
                        />
                        <rect
                          x="15.4254"
                          y="23.4673"
                          width="8.53295"
                          height="8.53324"
                          rx="1.46296"
                          fill="#EB5951"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_9725_865"
                          x="0"
                          y="0"
                          width="39.9999"
                          height="40.0024"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="4" />
                          <feGaussianBlur stdDeviation="2" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_9725_865"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_9725_865"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                  <div className="tech-service-item-caption">
                    <h3 className="tech-service-item-title">Human-in-the-loop</h3>
                    <p className="text-body">
                      Confidence thresholds, manual reviews, logs, and alerts
                      keep quality under control.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="team__lottieanim">
                <div className="team__grid__wrap">
                  <div className="hidden w-embed">
                    <style dangerouslySetInnerHTML={{ __html: `
                      .team__grid {
                        display: grid;
                        gap: 0.4375em;
                      }

                      @media only screen and (min-width: 992px) {
                        .team__grid {
                          grid-template-rows: 15em 13.125em 7.5em;
                          grid-template-columns: 6.3em 2em 19.625em 5.625em 13.25em 12.875em 20.625em;
                        }

                        .team__grid.in-service-page {
                          grid-template-rows: 9em 7.875em 4.625em;
                          grid-template-columns: 3.875em 1.125em 11.875em 10.25em 9em 12.375em;
                        }
                      }

                      @media only screen and (max-width: 991px) {
                        .team__grid {
                          grid-template-columns: 16% 1fr 16%;
                          grid-auto-flow: row;
                        }
                      }

                      .team__grid_item {
                        position: relative;
                        z-index: 2;
                      }

                      .team__grid_item:nth-child(7n + 1) {
                        grid-column: 1 / 3;
                        grid-row: 1 / 2;
                      }

                      @media only screen and (max-width: 991px) {
                        .team__grid_item:nth-child(7n + 1) {
                          grid-column: 1 / 2;
                          grid-row: 1 / 2;
                        }
                      }

                      .team__grid_item:nth-child(7n + 2) {
                        grid-column: 3 / 4;
                        grid-row: 1 / 2;
                      }

                      @media only screen and (max-width: 991px) {
                        .team__grid_item:nth-child(7n + 2) {
                          grid-column: 2 / 4;
                          grid-row: 1 / 2;
                        }
                      }

                      .team__grid_item:nth-child(7n + 3) {
                        grid-row: 2 / 3;
                        grid-column: 3 / 4;
                      }

                      @media only screen and (max-width: 991px) {
                        .team__grid_item:nth-child(7n + 3) {
                          grid-column: 1 / 4;
                          grid-row: 2 / 3;
                        }
                      }

                      .team__grid_item:nth-child(7n + 4) {
                        grid-row: 1 / 3;
                        grid-column: 4 / 6;
                      }

                      @media only screen and (max-width: 991px) {
                        .team__grid_item:nth-child(7n + 4) {
                          grid-column: 1 / 4;
                          grid-row: 3 / 4;
                        }
                      }

                      .team__grid_item:nth-child(7n + 5) {
                        grid-row: 1 / 3;
                        grid-column: 6 / 7;
                      }

                      @media only screen and (max-width: 991px) {
                        .team__grid_item:nth-child(7n + 5) {
                          grid-column: 1 / 3;
                          grid-row: 4 / 5;
                        }
                      }

                      .team__grid_item:nth-child(7n + 6) {
                        grid-column: 3 / 5;
                      }

                      @media only screen and (max-width: 991px) {
                        .team__grid_item:nth-child(7n + 6) {
                          grid-column: 1 / 4;
                          grid-row: 5 / 6;
                        }
                      }

                      .team__grid_item:nth-child(7n + 7) {
                        grid-column: 5 / 6;
                      }

                      @media only screen and (max-width: 991px) {
                        .team__grid_item:nth-child(7n + 7) {
                          grid-column: 3 / 4;
                          grid-row: 4 / 5;
                        }
                      }

                      .team__grid_pic {
                        position: absolute;
                        top: 0;
                        left: 0;
                        z-index: 2;
                        width: 100%;
                        height: 100%;
                        transition: all 0.9s cubic-bezier(0.7, 0, 0.1, 1);
                      }

                      .team__grid_pic:not(:first-child) {
                        clip-path: inset(0 0 100% 100%);
                      }

                      .team__grid_item:nth-child(2).state_v1_mod
                        .team__grid_pic:not(:first-child),
                      .team__grid_item:nth-child(2).state_v2_mod
                        .team__grid_pic:not(:first-child),
                      .team__grid_item:nth-child(5).state_v3_mod
                        .team__grid_pic:not(:first-child),
                      .team__grid_item:nth-child(5).state_v4_mod
                        .team__grid_pic:not(:first-child) {
                        clip-path: inset(0 0 0 0);
                      }

                      .team__grid_pic:first-child {
                        clip-path: inset(0 0 0 0);
                      }

                      .team__grid_item:nth-child(2).state_v1_mod
                        .team__grid_pic:first-child,
                      .team__grid_item:nth-child(5).state_v3_mod
                        .team__grid_pic:first-child {
                        transition-delay: 0.7s;
                        clip-path: inset(100% 100% 0 0);
                      }

                      .team__grid_item:nth-child(2).state_v2_mod
                        .team__grid_pic:first-child,
                      .team__grid_item:nth-child(2).state_v3_mod
                        .team__grid_pic:first-child,
                      .team__grid_item:nth-child(2).state_v4_mod
                        .team__grid_pic:first-child,
                      .team__grid_item:nth-child(2).state_v5_mod
                        .team__grid_pic:first-child,
                      .team__grid_item:nth-child(5).state_v4_mod
                        .team__grid_pic:first-child,
                      .team__grid_item:nth-child(5).state_v5_mod
                        .team__grid_pic:first-child {
                        transition: all 1s cubic-bezier(0.7, 0, 0.1, 1);
                        z-index: 3;
                      }

                      @media only screen and (max-width: 991px) {
                        .team__grid_pic:first-child {
                          position: relative;
                        }
                      }

                      .team__grid_pic_wrap {
                        border-radius: 1.625em 0.25em 1.625em 0.25em;
                        overflow: hidden;
                      }

                      .team__grid_item:nth-child(1) .team__grid_pic_wrap:after,
                      .team__grid_item:nth-child(7) .team__grid_pic_wrap:after {
                        position: absolute;
                        top: 0;
                        left: 0;
                        display: block;
                        width: 100%;
                        height: 100%;
                        background-color: rgb(235, 89, 81);
                        content: "";
                        border-radius: 1.625em 0.25em 1.625em 0.25em;
                      }

                      @media only screen and (min-width: 992px) {
                        .team__grid_item:nth-child(7n + 1)
                          .team__grid_pic_wrap {
                          transition: all 0.7s cubic-bezier(0.7, 0, 0.1, 1);
                          height: 17.375em;
                        }
                      }

                      .team__grid_item:nth-child(7n + 1).state_v1_mod
                        .team__grid_pic_wrap,
                      .team__grid_item:nth-child(7n + 1).state_v2_mod
                        .team__grid_pic_wrap {
                        height: 7.875em;
                        margin-top: 9.5em;
                      }

                      .team__grid_item:nth-child(7n + 1).state_v3_mod
                        .team__grid_pic_wrap {
                        height: 9em;
                      }

                      .team__grid_item:nth-child(7n + 1).state_v4_mod
                        .team__grid_pic_wrap {
                        transition-delay: 0.7s;
                        height: 22.375em;
                      }

                      .team__grid_item:nth-child(7n + 2) .team__grid_pic_wrap {
                        height: 9em;
                      }

                      .team__grid_item:nth-child(7n + 2).state_v1_mod
                        .team__grid_pic_wrap {
                        width: 15.5em;
                        margin-left: -5.875em;
                      }

                      .team__grid_item:nth-child(7n + 2).state_v2_mod
                        .team__grid_pic_wrap,
                      .team__grid_item:nth-child(7n + 2).state_v3_mod
                        .team__grid_pic_wrap {
                        width: 9.625em;
                      }

                      .team__grid_item:nth-child(7n + 2).state_v0_mod
                        .team__grid_pic_wrap,
                      .team__grid_item:nth-child(7n + 2).state_v4_mod
                        .team__grid_pic_wrap,
                      .team__grid_item:nth-child(7n + 2).state_v5_mod
                        .team__grid_pic_wrap {
                        width: 100%;
                      }

                      .team__grid_item:nth-child(7n + 3) .team__grid_pic_wrap {
                        height: 7.875em;
                      }

                      .team__grid_item:nth-child(7n + 3).state_v0_mod
                        .team__grid_pic_wrap {
                        width: 100%;
                      }

                      .team__grid_item:nth-child(7n + 3).state_v1_mod
                        .team__grid_pic_wrap,
                      .team__grid_item:nth-child(7n + 3).state_v2_mod
                        .team__grid_pic_wrap {
                        width: 9.625em;
                      }

                      .team__grid_item:nth-child(7n + 3).state_v3_mod
                        .team__grid_pic_wrap {
                        width: 11.125em;
                        margin-left: -1.5em;
                        transition-delay: 0.3s;
                      }

                      .team__grid_item:nth-child(7n + 3).state_v4_mod
                        .team__grid_pic_wrap,
                      .team__grid_item:nth-child(7n + 3).state_v5_mod
                        .team__grid_pic_wrap {
                        width: 100%;
                      }

                      .team__grid_item:nth-child(7n + 4) .team__grid_pic_wrap {
                        height: 17.375em;
                      }

                      .team__grid_item:nth-child(7n + 4).state_v1_mod
                        .team__grid_pic_wrap {
                        width: 15.5em;
                        margin-left: -2.25em;
                      }

                      .team__grid_item:nth-child(7n + 4).state_v2_mod
                        .team__grid_pic_wrap,
                      .team__grid_item:nth-child(7n + 4).state_v3_mod
                        .team__grid_pic_wrap {
                        width: 22em;
                        margin-left: -2.25em;
                      }

                      .team__grid_item:nth-child(7n + 4).state_v0_mod
                        .team__grid_pic_wrap,
                      .team__grid_item:nth-child(7n + 4).state_v4_mod
                        .team__grid_pic_wrap,
                      .team__grid_item:nth-child(7n + 4).state_v5_mod
                        .team__grid_pic_wrap {
                        width: 100%;
                      }

                      .team__grid_item:nth-child(7n + 5) .team__grid_pic_wrap {
                        height: 100%;
                      }

                      .team__grid_item:nth-child(7n + 5).state_v0_mod
                        .team__grid_pic_wrap {
                        width: 100%;
                      }

                      .team__grid_item:nth-child(7n + 5).state_v1_mod
                        .team__grid_pic_wrap {
                        width: 18.75em;
                        margin-left: -6.4125em;
                      }

                      .team__grid_item:nth-child(7n + 5).state_v2_mod
                        .team__grid_pic_wrap,
                      .team__grid_item:nth-child(7n + 5).state_v3_mod
                        .team__grid_pic_wrap {
                        width: 100%;
                      }

                      .team__grid_item:nth-child(7n + 5).state_v3_mod
                        .team__grid_pic_wrap {
                        height: 22.375em;
                        transition-delay: 0.3s;
                      }

                      .team__grid_item:nth-child(7n + 5).state_v4_mod
                        .team__grid_pic_wrap,
                      .team__grid_item:nth-child(7n + 5).state_v5_mod
                        .team__grid_pic_wrap {
                        width: 100%;
                      }

                      @media only screen and (max-width: 991px) {
                        .team__grid_item:nth-child(7n + 2).state_v0_mod
                          .team__grid_pic_wrap,
                        .team__grid_item:nth-child(7n + 3).state_v0_mod
                          .team__grid_pic_wrap,
                        .team__grid_item:nth-child(7n + 4).state_v0_mod
                          .team__grid_pic_wrap,
                        .team__grid_item:nth-child(7n + 5).state_v0_mod
                          .team__grid_pic_wrap {
                          width: 100%;
                          height: 100%;
                        }
                      }

                      @media only screen and (min-width: 992px) {
                        .team__grid_item:nth-child(7n + 7)
                          .team__grid_pic_wrap {
                          transition: all 0.7s cubic-bezier(0.7, 0, 0.1, 1);
                          right: 0;
                          left: auto;
                        }
                      }

                      .team__grid_item:nth-child(7n + 7).state_v0_mod
                        .team__grid_pic_wrap,
                      .team__grid_item:nth-child(7n + 7).state_v4_mod
                        .team__grid_pic_wrap,
                      .team__grid_item:nth-child(7n + 7).state_v5_mod
                        .team__grid_pic_wrap {
                        transition-delay: 0.7s;
                        width: 21.75em;
                        margin-right: -12.75rem;
                      }

                      .team__grid_item:nth-child(7n + 7).state_v1_mod
                        .team__grid_pic_wrap,
                      .team__grid_item:nth-child(7n + 7).state_v2_mod
                        .team__grid_pic_wrap {
                        width: 20.625em;
                        margin-right: -21.25em;
                      }

                      .team__grid_item:nth-child(7n + 7).state_v3_mod
                        .team__grid_pic_wrap {
                        width: 100%;
                      }

                      @media only screen and (min-width: 992px) {
                        .team__grid_pic_wrap {
                          position: absolute;
                          top: 0;
                          left: 0;
                          width: 100%;
                          height: 100%;
                          transition: all 1.2s cubic-bezier(0.7, 0, 0.1, 1);
                        }
                      }

                      .team__grid_img {
                        display: block;
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        object-position: center;
                      }

                      @media only screen and (max-width: 991px) {
                        .team__grid_pic:first-child {
                          position: relative;
                        }
                        .team__grid_pic_wrap,
                        .team__grid_item:nth-child(1)
                          .team__grid_pic_wrap:after,
                        .team__grid_item:nth-child(7)
                          .team__grid_pic_wrap:after {
                          border-radius: 1em 0.05em 1em 0.05em;
                        }
                      }
                    ` }} />
                  </div>
                  <div className="w-dyn-list">
                    <div
                      role="list"
                      className="team__grid in-service-page w-dyn-items"
                    >
                      <div
                        role="listitem"
                        className="team__grid_item state_v0_mod w-dyn-item"
                      >
                        <div className="team__grid_pic_wrap">
                          <div className="team__grid_pic w-condition-invisible">
                            <img
                              alt=""
                              loading="lazy"
                              src=""
                              className="team__grid_img w-dyn-bind-empty"
                            />
                          </div>
                          <div className="team__grid_pic w-condition-invisible">
                            <img
                              alt=""
                              loading="eager"
                              src=""
                              className="team__grid_img w-dyn-bind-empty"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        role="listitem"
                        className="team__grid_item state_v0_mod w-dyn-item"
                      >
                        <div className="team__grid_pic_wrap">
                          <div className="team__grid_pic">
                            <img
                              alt="Sales CRM screen "
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/6928324c28dda1fee3400343_3.webp"
                              className="team__grid_img"
                            />
                          </div>
                          <div className="team__grid_pic w-condition-invisible">
                            <img
                              alt=""
                              loading="eager"
                              src=""
                              className="team__grid_img w-dyn-bind-empty"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        role="listitem"
                        className="team__grid_item state_v0_mod w-dyn-item"
                      >
                        <div className="team__grid_pic_wrap">
                          <div className="team__grid_pic">
                            <img
                              alt="Messaging tool screen"
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/692832c928b7b0c1882be0fb_2.webp"
                              className="team__grid_img"
                            />
                          </div>
                          <div className="team__grid_pic w-condition-invisible">
                            <img
                              alt=""
                              loading="eager"
                              src=""
                              className="team__grid_img w-dyn-bind-empty"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        role="listitem"
                        className="team__grid_item state_v0_mod w-dyn-item"
                      >
                        <div className="team__grid_pic_wrap">
                          <div className="team__grid_pic">
                            <img
                              alt="Retool Amazon image"
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/692832e16222b76a214199c6_4.webp"
                              sizes="100vw"
                              srcSet="
                                https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/692832e16222b76a214199c6_4-p-500.webp 500w,
                                https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/692832e16222b76a214199c6_4.webp       630w
                              "
                              className="team__grid_img"
                            />
                          </div>
                          <div className="team__grid_pic w-condition-invisible">
                            <img
                              alt=""
                              loading="eager"
                              src=""
                              className="team__grid_img w-dyn-bind-empty"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        role="listitem"
                        className="team__grid_item state_v0_mod w-dyn-item"
                      >
                        <div className="team__grid_pic_wrap">
                          <div className="team__grid_pic">
                            <img
                              alt="Open AI chat list example"
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/69283310425023798e7d27fb_Frame%201249186468.webp"
                              className="team__grid_img"
                            />
                          </div>
                          <div className="team__grid_pic w-condition-invisible">
                            <img
                              alt=""
                              loading="eager"
                              src=""
                              className="team__grid_img w-dyn-bind-empty"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        role="listitem"
                        className="team__grid_item state_v0_mod w-dyn-item"
                      >
                        <div className="team__grid_pic_wrap w-condition-invisible">
                          <div className="team__grid_pic w-condition-invisible">
                            <img
                              alt=""
                              loading="lazy"
                              src=""
                              className="team__grid_img w-dyn-bind-empty"
                            />
                          </div>
                          <div className="team__grid_pic w-condition-invisible">
                            <img
                              alt=""
                              loading="eager"
                              src=""
                              className="team__grid_img w-dyn-bind-empty"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        role="listitem"
                        className="team__grid_item state_v0_mod w-dyn-item"
                      >
                        <div className="team__grid_pic_wrap">
                          <div className="team__grid_pic w-condition-invisible">
                            <img
                              alt=""
                              loading="lazy"
                              src=""
                              className="team__grid_img w-dyn-bind-empty"
                            />
                          </div>
                          <div className="team__grid_pic w-condition-invisible">
                            <img
                              alt=""
                              loading="eager"
                              src=""
                              className="team__grid_img w-dyn-bind-empty"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="services" className="tech-services">
              <h2
                color-word="#eb5951"
                text-split=""
                lines-slide-up=""
                color-words-index="3,4,5"
                className="tech-section-title mb-60"
              >
                how we build automations that work
              </h2>
              <ul role="list" className="tech-service-list">
                <li className="tech-service-item fade-up-alt">
                  <div className="tech-service-item-icon w-embed">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.27729 5.27727C7.7642 2.79039 11.2034 1.25 15 1.25C18.7966 1.25 22.2358 2.79039 24.7227 5.27728C27.2096 7.76419 28.75 11.2034 28.75 15C28.75 18.7966 27.2096 22.2358 24.7227 24.7227C22.2358 27.2096 18.7966 28.75 15 28.75C11.2034 28.75 7.7642 27.2096 5.27728 24.7227C2.7904 22.2358 1.25 18.7966 1.25 15C1.25 11.2034 2.79041 7.76419 5.27729 5.27727ZM15 3.75C11.8931 3.75 9.08229 5.00783 7.04504 7.04505C5.00782 9.08231 3.75 11.8931 3.75 15C3.75 18.1069 5.00783 20.9177 7.04505 22.9549C9.0823 24.9922 11.8931 26.25 15 26.25C18.1069 26.25 20.9177 24.9922 22.9549 22.9549C24.9922 20.9177 26.25 18.1069 26.25 15C26.25 11.8931 24.9922 9.0823 22.9549 7.04505C20.9177 5.00783 18.1069 3.75 15 3.75ZM22.1339 10.3661C22.622 10.8543 22.622 11.6457 22.1339 12.1339L14.6339 19.6339C14.1457 20.122 13.3543 20.122 12.8661 19.6339L9.11612 15.8839C8.62796 15.3957 8.62796 14.6043 9.11612 14.1161C9.60427 13.628 10.3957 13.628 10.8839 14.1161L13.75 16.9822L20.3661 10.3661C20.8543 9.87796 21.6457 9.87796 22.1339 10.3661Z"
                        fill="#616161"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.04504 7.04505C9.08229 5.00783 11.8931 3.75 15 3.75C18.1069 3.75 20.9177 5.00783 22.9549 7.04505C24.9922 9.0823 26.25 11.8931 26.25 15C26.25 18.1069 24.9922 20.9177 22.9549 22.9549C20.9177 24.9922 18.1069 26.25 15 26.25C11.8931 26.25 9.0823 24.9922 7.04505 22.9549C5.00783 20.9177 3.75 18.1069 3.75 15C3.75 11.8931 5.00782 9.08231 7.04504 7.04505ZM22.1339 10.3661C22.622 10.8543 22.622 11.6457 22.1339 12.1339L14.6339 19.6339C14.1457 20.122 13.3543 20.122 12.8661 19.6339L9.11612 15.8839C8.62796 15.3957 8.62796 14.6043 9.11612 14.1161C9.60427 13.628 10.3957 13.628 10.8839 14.1161L13.75 16.9822L20.3661 10.3661C20.8543 9.87796 21.6457 9.87796 22.1339 10.3661Z"
                        fill="#A0EEB0"
                      />
                    </svg>
                  </div>
                  <div className="service-service-item-caption">
                    <h3 className="tech-service-item-title">
                      Discovery &amp; Mapping
                    </h3>
                    <p className="text-body">
                      We analyze your workflows, find repetitive steps, and spot
                      automation opportunities.
                    </p>
                  </div>
                </li>
                <li className="tech-service-item fade-up-alt">
                  <div className="tech-service-item-icon w-embed">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.27729 5.27727C7.7642 2.79039 11.2034 1.25 15 1.25C18.7966 1.25 22.2358 2.79039 24.7227 5.27728C27.2096 7.76419 28.75 11.2034 28.75 15C28.75 18.7966 27.2096 22.2358 24.7227 24.7227C22.2358 27.2096 18.7966 28.75 15 28.75C11.2034 28.75 7.7642 27.2096 5.27728 24.7227C2.7904 22.2358 1.25 18.7966 1.25 15C1.25 11.2034 2.79041 7.76419 5.27729 5.27727ZM15 3.75C11.8931 3.75 9.08229 5.00783 7.04504 7.04505C5.00782 9.08231 3.75 11.8931 3.75 15C3.75 18.1069 5.00783 20.9177 7.04505 22.9549C9.0823 24.9922 11.8931 26.25 15 26.25C18.1069 26.25 20.9177 24.9922 22.9549 22.9549C24.9922 20.9177 26.25 18.1069 26.25 15C26.25 11.8931 24.9922 9.0823 22.9549 7.04505C20.9177 5.00783 18.1069 3.75 15 3.75ZM22.1339 10.3661C22.622 10.8543 22.622 11.6457 22.1339 12.1339L14.6339 19.6339C14.1457 20.122 13.3543 20.122 12.8661 19.6339L9.11612 15.8839C8.62796 15.3957 8.62796 14.6043 9.11612 14.1161C9.60427 13.628 10.3957 13.628 10.8839 14.1161L13.75 16.9822L20.3661 10.3661C20.8543 9.87796 21.6457 9.87796 22.1339 10.3661Z"
                        fill="#616161"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.04504 7.04505C9.08229 5.00783 11.8931 3.75 15 3.75C18.1069 3.75 20.9177 5.00783 22.9549 7.04505C24.9922 9.0823 26.25 11.8931 26.25 15C26.25 18.1069 24.9922 20.9177 22.9549 22.9549C20.9177 24.9922 18.1069 26.25 15 26.25C11.8931 26.25 9.0823 24.9922 7.04505 22.9549C5.00783 20.9177 3.75 18.1069 3.75 15C3.75 11.8931 5.00782 9.08231 7.04504 7.04505ZM22.1339 10.3661C22.622 10.8543 22.622 11.6457 22.1339 12.1339L14.6339 19.6339C14.1457 20.122 13.3543 20.122 12.8661 19.6339L9.11612 15.8839C8.62796 15.3957 8.62796 14.6043 9.11612 14.1161C9.60427 13.628 10.3957 13.628 10.8839 14.1161L13.75 16.9822L20.3661 10.3661C20.8543 9.87796 21.6457 9.87796 22.1339 10.3661Z"
                        fill="#A0EEB0"
                      />
                    </svg>
                  </div>
                  <div className="service-service-item-caption">
                    <h3 className="tech-service-item-title">
                      Integration &amp; Setup
                    </h3>
                    <p className="text-body">
                      Build in Make/n8n/Zapier/Retool, connect CRMs, inboxes,
                      and databases.
                    </p>
                  </div>
                </li>
                <li className="tech-service-item fade-up-alt">
                  <div className="tech-service-item-icon w-embed">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.27729 5.27727C7.7642 2.79039 11.2034 1.25 15 1.25C18.7966 1.25 22.2358 2.79039 24.7227 5.27728C27.2096 7.76419 28.75 11.2034 28.75 15C28.75 18.7966 27.2096 22.2358 24.7227 24.7227C22.2358 27.2096 18.7966 28.75 15 28.75C11.2034 28.75 7.7642 27.2096 5.27728 24.7227C2.7904 22.2358 1.25 18.7966 1.25 15C1.25 11.2034 2.79041 7.76419 5.27729 5.27727ZM15 3.75C11.8931 3.75 9.08229 5.00783 7.04504 7.04505C5.00782 9.08231 3.75 11.8931 3.75 15C3.75 18.1069 5.00783 20.9177 7.04505 22.9549C9.0823 24.9922 11.8931 26.25 15 26.25C18.1069 26.25 20.9177 24.9922 22.9549 22.9549C24.9922 20.9177 26.25 18.1069 26.25 15C26.25 11.8931 24.9922 9.0823 22.9549 7.04505C20.9177 5.00783 18.1069 3.75 15 3.75ZM22.1339 10.3661C22.622 10.8543 22.622 11.6457 22.1339 12.1339L14.6339 19.6339C14.1457 20.122 13.3543 20.122 12.8661 19.6339L9.11612 15.8839C8.62796 15.3957 8.62796 14.6043 9.11612 14.1161C9.60427 13.628 10.3957 13.628 10.8839 14.1161L13.75 16.9822L20.3661 10.3661C20.8543 9.87796 21.6457 9.87796 22.1339 10.3661Z"
                        fill="#616161"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.04504 7.04505C9.08229 5.00783 11.8931 3.75 15 3.75C18.1069 3.75 20.9177 5.00783 22.9549 7.04505C24.9922 9.0823 26.25 11.8931 26.25 15C26.25 18.1069 24.9922 20.9177 22.9549 22.9549C20.9177 24.9922 18.1069 26.25 15 26.25C11.8931 26.25 9.0823 24.9922 7.04505 22.9549C5.00783 20.9177 3.75 18.1069 3.75 15C3.75 11.8931 5.00782 9.08231 7.04504 7.04505ZM22.1339 10.3661C22.622 10.8543 22.622 11.6457 22.1339 12.1339L14.6339 19.6339C14.1457 20.122 13.3543 20.122 12.8661 19.6339L9.11612 15.8839C8.62796 15.3957 8.62796 14.6043 9.11612 14.1161C9.60427 13.628 10.3957 13.628 10.8839 14.1161L13.75 16.9822L20.3661 10.3661C20.8543 9.87796 21.6457 9.87796 22.1339 10.3661Z"
                        fill="#A0EEB0"
                      />
                    </svg>
                  </div>
                  <div className="service-service-item-caption">
                    <h3 className="tech-service-item-title">AI Enhancement</h3>
                    <p className="text-body">
                      Add smart layers: parsing, enrichment, classification,
                      summarization.
                    </p>
                  </div>
                </li>
                <li className="tech-service-item fade-up-alt">
                  <div className="tech-service-item-icon w-embed">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.27729 5.27727C7.7642 2.79039 11.2034 1.25 15 1.25C18.7966 1.25 22.2358 2.79039 24.7227 5.27728C27.2096 7.76419 28.75 11.2034 28.75 15C28.75 18.7966 27.2096 22.2358 24.7227 24.7227C22.2358 27.2096 18.7966 28.75 15 28.75C11.2034 28.75 7.7642 27.2096 5.27728 24.7227C2.7904 22.2358 1.25 18.7966 1.25 15C1.25 11.2034 2.79041 7.76419 5.27729 5.27727ZM15 3.75C11.8931 3.75 9.08229 5.00783 7.04504 7.04505C5.00782 9.08231 3.75 11.8931 3.75 15C3.75 18.1069 5.00783 20.9177 7.04505 22.9549C9.0823 24.9922 11.8931 26.25 15 26.25C18.1069 26.25 20.9177 24.9922 22.9549 22.9549C24.9922 20.9177 26.25 18.1069 26.25 15C26.25 11.8931 24.9922 9.0823 22.9549 7.04505C20.9177 5.00783 18.1069 3.75 15 3.75ZM22.1339 10.3661C22.622 10.8543 22.622 11.6457 22.1339 12.1339L14.6339 19.6339C14.1457 20.122 13.3543 20.122 12.8661 19.6339L9.11612 15.8839C8.62796 15.3957 8.62796 14.6043 9.11612 14.1161C9.60427 13.628 10.3957 13.628 10.8839 14.1161L13.75 16.9822L20.3661 10.3661C20.8543 9.87796 21.6457 9.87796 22.1339 10.3661Z"
                        fill="#616161"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.04504 7.04505C9.08229 5.00783 11.8931 3.75 15 3.75C18.1069 3.75 20.9177 5.00783 22.9549 7.04505C24.9922 9.0823 26.25 11.8931 26.25 15C26.25 18.1069 24.9922 20.9177 22.9549 22.9549C20.9177 24.9922 18.1069 26.25 15 26.25C11.8931 26.25 9.0823 24.9922 7.04505 22.9549C5.00783 20.9177 3.75 18.1069 3.75 15C3.75 11.8931 5.00782 9.08231 7.04504 7.04505ZM22.1339 10.3661C22.622 10.8543 22.622 11.6457 22.1339 12.1339L14.6339 19.6339C14.1457 20.122 13.3543 20.122 12.8661 19.6339L9.11612 15.8839C8.62796 15.3957 8.62796 14.6043 9.11612 14.1161C9.60427 13.628 10.3957 13.628 10.8839 14.1161L13.75 16.9822L20.3661 10.3661C20.8543 9.87796 21.6457 9.87796 22.1339 10.3661Z"
                        fill="#A0EEB0"
                      />
                    </svg>
                  </div>
                  <div className="service-service-item-caption">
                    <h3 className="tech-service-item-title">
                      Testing &amp; Handoff
                    </h3>
                    <p className="text-body">
                      Review, measure KPIs, and train your team to maintain
                      automations.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="tech-benefits-buttons fade-up-alt">
                <a href="/contact" className="button button_smaller">Book a call</a>
              </div>
            </section>
            <section id="why-we" className="tech-benefits">
              <h2
                color-word="#eb5951"
                text-split=""
                lines-slide-up=""
                color-words-index="5,6"
                className="tech-section-title mb-60"
              >
                winning with us: our clients&#x27; success
              </h2>
              <div className="cases-wrap is-services-page">
                <div className="swiper cases-slider w-dyn-list">
                  <div
                    itemType="https://schema.org/ItemList"
                    itemScope={true}
                    role="list"
                    className="swiper-wrapper w-dyn-items"
                  >
                    <div
                      itemProp="itemListElement"
                      itemScope={true}
                      itemType="https://schema.org/CreativeWork"
                      role="listitem"
                      className="swiper-slide w-dyn-item"
                    >
                      <div className="case-item is-no-link">
                        <a
                          href="/portfolio/ai-procurement-assistant"
                          className="case-item_link w-inline-block"
                          ><div className="hidden">
                            procurement co-pilot for AI-powered tender
                            management
                          </div></a
                        >
                        <div
                          style={{"backgroundColor":"#3269ac"}}
                          className="case-item-image"
                        >
                          <img
                            width="416"
                            height="439"
                            alt=""
                            src="https://cdn.prod.website-files.com/64d20115d5be49b3874991ac/66335e1b00f641134b6bcbef_case-bg.svg"
                            loading="lazy"
                            className="case-item-circles"
                          /><img
                            className="case-item-thumb min-height"
                            src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/68023525725115f2d217da9f_Card%20Cover.webp"
                            width="745"
                            height="618"
                            alt="Order management dashboard screenshot with sales and revenue charts, portfolio project for Che IT Group"
                            sizes="(max-width: 767px) 100vw, 745px"
                            itemProp="image"
                            loading="lazy"
                            srcSet="
                              https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/68023525725115f2d217da9f_Card%20Cover-p-500.webp 500w,
                              https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/68023525725115f2d217da9f_Card%20Cover.webp       745w
                            "
                          />
                        </div>
                        <h4 itemProp="headline" className="case-item-title">
                          procurement co-pilot for AI-powered tender management
                        </h4>
                        <p
                          itemProp="description"
                          className="case-item-excerpt hidden w-condition-invisible w-dyn-bind-empty"
                        ></p>
                        <div className="case-item_tags">
                          <div className="w-dyn-list">
                            <div role="list" className="cms-tag_list w-dyn-items">
                              <div role="listitem" className="cms-tag w-dyn-item">
                                <div fs-list-field="industry">Government</div>
                              </div>
                              <div role="listitem" className="cms-tag w-dyn-item">
                                <div fs-list-field="industry">Procurement</div>
                              </div>
                            </div>
                          </div>
                          <div className="w-dyn-list">
                            <div role="list" className="cms-tag_list w-dyn-items">
                              <div role="listitem" className="cms-tag w-dyn-item">
                                <div fs-list-field="сapability">
                                  Custom Web Development
                                </div>
                              </div>
                              <div role="listitem" className="cms-tag w-dyn-item">
                                <div fs-list-field="сapability">
                                  AI &amp; Automation
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hidden">
                          <div fs-cmsfilter-field="country">Lithuania</div>
                          <div fs-cmsfilter-field="techstack">Python</div>
                          <div fs-cmsfilter-field="techstack">Node.js</div>
                          <div fs-cmsfilter-field="techstack">React</div>
                        </div>
                      </div>
                    </div>
                    <div
                      itemProp="itemListElement"
                      itemScope={true}
                      itemType="https://schema.org/CreativeWork"
                      role="listitem"
                      className="swiper-slide w-dyn-item"
                    >
                      <div className="case-item is-no-link">
                        <a
                          href="/portfolio/time-maestro-platform"
                          className="case-item_link w-inline-block"
                          ><div className="hidden">
                            beyond tracking: building our perfect internal
                            management platform
                          </div></a
                        >
                        <div
                          style={{"backgroundColor":"#356445"}}
                          className="case-item-image"
                        >
                          <img
                            width="416"
                            height="439"
                            alt=""
                            src="https://cdn.prod.website-files.com/64d20115d5be49b3874991ac/66335e1b00f641134b6bcbef_case-bg.svg"
                            loading="lazy"
                            className="case-item-circles"
                          /><img
                            className="case-item-thumb min-height"
                            src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/681b3e5f8560d4a7e784e232_Card%20Cover.webp"
                            width="745"
                            height="618"
                            alt="Che IT Group internal dashboard screenshot showing time tracker and worklogs"
                            sizes="(max-width: 767px) 100vw, 745px"
                            itemProp="image"
                            loading="lazy"
                            srcSet="
                              https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/681b3e5f8560d4a7e784e232_Card%20Cover-p-500.webp 500w,
                              https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/681b3e5f8560d4a7e784e232_Card%20Cover.webp       745w
                            "
                          />
                        </div>
                        <h4 itemProp="headline" className="case-item-title">
                          beyond tracking: building our perfect internal
                          management platform
                        </h4>
                        <p
                          itemProp="description"
                          className="case-item-excerpt hidden w-condition-invisible w-dyn-bind-empty"
                        ></p>
                        <div className="case-item_tags">
                          <div className="w-dyn-list">
                            <div role="list" className="cms-tag_list w-dyn-items">
                              <div role="listitem" className="cms-tag w-dyn-item">
                                <div fs-list-field="industry">IT services</div>
                              </div>
                              <div role="listitem" className="cms-tag w-dyn-item">
                                <div fs-list-field="industry">SaaS</div>
                              </div>
                            </div>
                          </div>
                          <div className="w-dyn-list">
                            <div role="list" className="cms-tag_list w-dyn-items">
                              <div role="listitem" className="cms-tag w-dyn-item">
                                <div fs-list-field="сapability">UX/UI</div>
                              </div>
                              <div role="listitem" className="cms-tag w-dyn-item">
                                <div fs-list-field="сapability">
                                  Custom Web Development
                                </div>
                              </div>
                              <div role="listitem" className="cms-tag w-dyn-item">
                                <div fs-list-field="сapability">
                                  Systems Integration
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hidden">
                          <div fs-cmsfilter-field="country">Switzerland</div>
                          <div fs-cmsfilter-field="techstack">PHP</div>
                          <div
                            fs-cmsfilter-field="techstack"
                            className="w-dyn-bind-empty"
                          ></div>
                          <div
                            fs-cmsfilter-field="techstack"
                            className="w-dyn-bind-empty"
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div
                      itemProp="itemListElement"
                      itemScope={true}
                      itemType="https://schema.org/CreativeWork"
                      role="listitem"
                      className="swiper-slide w-dyn-item"
                    >
                      <div className="case-item is-no-link">
                        <a
                          href="/portfolio/construction-automation-platform"
                          className="case-item_link w-inline-block"
                          ><div className="hidden">
                            revolutionizing construction project management with
                            automation
                          </div></a
                        >
                        <div
                          style={{"backgroundColor":"#cae3fe"}}
                          className="case-item-image"
                        >
                          <img
                            width="416"
                            height="439"
                            alt=""
                            src="https://cdn.prod.website-files.com/64d20115d5be49b3874991ac/66335e1b00f641134b6bcbef_case-bg.svg"
                            loading="lazy"
                            className="case-item-circles"
                          /><img
                            className="case-item-thumb min-height"
                            src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/682c6a34d60f448a3c023395_11.webp"
                            width="745"
                            height="618"
                            alt="ConstructPro project dashboard screenshot, portfolio project for Che IT Group"
                            sizes="(max-width: 767px) 100vw, 745px"
                            itemProp="image"
                            loading="lazy"
                            srcSet="
                              https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/682c6a34d60f448a3c023395_11-p-500.webp 500w,
                              https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/682c6a34d60f448a3c023395_11.webp       745w
                            "
                          />
                        </div>
                        <h4 itemProp="headline" className="case-item-title">
                          revolutionizing construction project management with
                          automation
                        </h4>
                        <p
                          itemProp="description"
                          className="case-item-excerpt hidden w-condition-invisible w-dyn-bind-empty"
                        ></p>
                        <div className="case-item_tags">
                          <div className="w-dyn-list">
                            <div role="list" className="cms-tag_list w-dyn-items">
                              <div role="listitem" className="cms-tag w-dyn-item">
                                <div fs-list-field="industry">Real estate</div>
                              </div>
                              <div role="listitem" className="cms-tag w-dyn-item">
                                <div fs-list-field="industry">Proptech</div>
                              </div>
                            </div>
                          </div>
                          <div className="w-dyn-list">
                            <div role="list" className="cms-tag_list w-dyn-items">
                              <div role="listitem" className="cms-tag w-dyn-item">
                                <div fs-list-field="сapability">
                                  Custom Web Development
                                </div>
                              </div>
                              <div role="listitem" className="cms-tag w-dyn-item">
                                <div fs-list-field="сapability">UX/UI</div>
                              </div>
                              <div role="listitem" className="cms-tag w-dyn-item">
                                <div fs-list-field="сapability">
                                  Systems Integration
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hidden">
                          <div fs-cmsfilter-field="country">USA</div>
                          <div fs-cmsfilter-field="techstack">react</div>
                          <div fs-cmsfilter-field="techstack">python</div>
                          <div
                            fs-cmsfilter-field="techstack"
                            className="w-dyn-bind-empty"
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div
                      itemProp="itemListElement"
                      itemScope={true}
                      itemType="https://schema.org/CreativeWork"
                      role="listitem"
                      className="swiper-slide w-dyn-item"
                    >
                      <div className="case-item is-no-link">
                        <a
                          href="/portfolio/ai-furniture-design-platform"
                          className="case-item_link w-inline-block"
                          ><div className="hidden">
                            smart spaces: how AI furnished a design revolution
                          </div></a
                        >
                        <div
                          style={{"backgroundColor":"#86bfff"}}
                          className="case-item-image"
                        >
                          <img
                            width="416"
                            height="439"
                            alt=""
                            src="https://cdn.prod.website-files.com/64d20115d5be49b3874991ac/66335e1b00f641134b6bcbef_case-bg.svg"
                            loading="lazy"
                            className="case-item-circles"
                          /><img
                            className="case-item-thumb min-height"
                            src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/682ed8126e0fdb65110409a0_Card%20Cover.webp"
                            width="745"
                            height="618"
                            alt="Smart Spaces AI interior design platform homepage screenshot, portfolio project for CheIT Group"
                            sizes="(max-width: 767px) 100vw, 745px"
                            itemProp="image"
                            loading="lazy"
                            srcSet="
                              https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/682ed8126e0fdb65110409a0_Card%20Cover-p-500.webp 500w,
                              https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/682ed8126e0fdb65110409a0_Card%20Cover.webp       745w
                            "
                          />
                        </div>
                        <h4 itemProp="headline" className="case-item-title">
                          smart spaces: how AI furnished a design revolution
                        </h4>
                        <p
                          itemProp="description"
                          className="case-item-excerpt hidden w-condition-invisible w-dyn-bind-empty"
                        ></p>
                        <div className="case-item_tags">
                          <div className="w-dyn-list">
                            <div role="list" className="cms-tag_list w-dyn-items">
                              <div role="listitem" className="cms-tag w-dyn-item">
                                <div fs-list-field="industry">Retail</div>
                              </div>
                              <div role="listitem" className="cms-tag w-dyn-item">
                                <div fs-list-field="industry">
                                  Manufacturing
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="w-dyn-list">
                            <div role="list" className="cms-tag_list w-dyn-items">
                              <div role="listitem" className="cms-tag w-dyn-item">
                                <div fs-list-field="сapability">
                                  Platform Development
                                </div>
                              </div>
                              <div role="listitem" className="cms-tag w-dyn-item">
                                <div fs-list-field="сapability">UX/UI</div>
                              </div>
                              <div role="listitem" className="cms-tag w-dyn-item">
                                <div fs-list-field="сapability">
                                  AI &amp; Automation
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hidden">
                          <div fs-cmsfilter-field="country">USA</div>
                          <div fs-cmsfilter-field="techstack">react</div>
                          <div fs-cmsfilter-field="techstack">node.js</div>
                          <div fs-cmsfilter-field="techstack">AI</div>
                        </div>
                      </div>
                    </div>
                    <div
                      itemProp="itemListElement"
                      itemScope={true}
                      itemType="https://schema.org/CreativeWork"
                      role="listitem"
                      className="swiper-slide w-dyn-item"
                    >
                      <div className="case-item is-no-link">
                        <a
                          href="/portfolio/lead-generation-platform"
                          className="case-item_link w-inline-block"
                          ><div className="hidden">
                            intelligent B2B lead generation automation
                          </div></a
                        >
                        <div
                          style={{"backgroundColor":"#65728a"}}
                          className="case-item-image"
                        >
                          <img
                            width="416"
                            height="439"
                            alt=""
                            src="https://cdn.prod.website-files.com/64d20115d5be49b3874991ac/66335e1b00f641134b6bcbef_case-bg.svg"
                            loading="lazy"
                            className="case-item-circles"
                          /><img
                            className="case-item-thumb min-height"
                            src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/68381b612098e700ff329e46_Card%20Cover.webp"
                            width="745"
                            height="618"
                            alt="B2B lead generation automation screenshot, portfolio project"
                            sizes="(max-width: 767px) 100vw, 745px"
                            itemProp="image"
                            loading="lazy"
                            srcSet="
                              https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/68381b612098e700ff329e46_Card%20Cover-p-500.webp 500w,
                              https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/68381b612098e700ff329e46_Card%20Cover.webp       745w
                            "
                          />
                        </div>
                        <h4 itemProp="headline" className="case-item-title">
                          intelligent B2B lead generation automation
                        </h4>
                        <p
                          itemProp="description"
                          className="case-item-excerpt hidden w-condition-invisible w-dyn-bind-empty"
                        ></p>
                        <div className="case-item_tags">
                          <div className="w-dyn-list">
                            <div role="list" className="cms-tag_list w-dyn-items">
                              <div role="listitem" className="cms-tag w-dyn-item">
                                <div fs-list-field="industry">Martech</div>
                              </div>
                              <div role="listitem" className="cms-tag w-dyn-item">
                                <div fs-list-field="industry">SaaS</div>
                              </div>
                            </div>
                          </div>
                          <div className="w-dyn-list">
                            <div role="list" className="cms-tag_list w-dyn-items">
                              <div role="listitem" className="cms-tag w-dyn-item">
                                <div fs-list-field="сapability">
                                  AI &amp; Automation
                                </div>
                              </div>
                              <div role="listitem" className="cms-tag w-dyn-item">
                                <div fs-list-field="сapability">UX/UI</div>
                              </div>
                              <div role="listitem" className="cms-tag w-dyn-item">
                                <div fs-list-field="сapability">
                                  Systems Integration
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hidden">
                          <div fs-cmsfilter-field="country">Switzerland</div>
                          <div fs-cmsfilter-field="techstack">PHP</div>
                          <div
                            fs-cmsfilter-field="techstack"
                            className="w-dyn-bind-empty"
                          ></div>
                          <div
                            fs-cmsfilter-field="techstack"
                            className="w-dyn-bind-empty"
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div
                      itemProp="itemListElement"
                      itemScope={true}
                      itemType="https://schema.org/CreativeWork"
                      role="listitem"
                      className="swiper-slide w-dyn-item"
                    >
                      <div className="case-item is-no-link">
                        <a
                          href="/portfolio/1800d2c-platform"
                          className="case-item_link w-inline-block"
                          ><div className="hidden">
                            Webflow membership platform for 500+ verified D2C
                            tools
                          </div></a
                        >
                        <div
                          style={{"backgroundColor":"#fff575"}}
                          className="case-item-image"
                        >
                          <img
                            width="416"
                            height="439"
                            alt=""
                            src="https://cdn.prod.website-files.com/64d20115d5be49b3874991ac/66335e1b00f641134b6bcbef_case-bg.svg"
                            loading="lazy"
                            className="case-item-circles"
                          /><img
                            className="case-item-thumb min-height"
                            src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/698b0c4b6eca90ab852bf26c_(745x618).webp"
                            width="745"
                            height="618"
                            alt="1800DTC homepage screenshot, portfolio project for a directory platform discovering tools and brands"
                            sizes="(max-width: 767px) 100vw, 745px"
                            itemProp="image"
                            loading="lazy"
                            srcSet="
                              https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/698b0c4b6eca90ab852bf26c_(745x618)-p-500.webp 500w,
                              https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/698b0c4b6eca90ab852bf26c_(745x618).webp       745w
                            "
                          />
                        </div>
                        <h4 itemProp="headline" className="case-item-title">
                          Webflow membership platform for 500+ verified D2C
                          tools
                        </h4>
                        <p
                          itemProp="description"
                          className="case-item-excerpt hidden w-condition-invisible w-dyn-bind-empty"
                        ></p>
                        <div className="case-item_tags">
                          <div className="w-dyn-list">
                            <div role="list" className="cms-tag_list w-dyn-items">
                              <div role="listitem" className="cms-tag w-dyn-item">
                                <div fs-list-field="industry">Web portals</div>
                              </div>
                              <div role="listitem" className="cms-tag w-dyn-item">
                                <div fs-list-field="industry">E-commerce</div>
                              </div>
                            </div>
                          </div>
                          <div className="w-dyn-list">
                            <div role="list" className="cms-tag_list w-dyn-items">
                              <div role="listitem" className="cms-tag w-dyn-item">
                                <div fs-list-field="сapability">
                                  No-code development
                                </div>
                              </div>
                              <div role="listitem" className="cms-tag w-dyn-item">
                                <div fs-list-field="сapability">
                                  Systems Integration
                                </div>
                              </div>
                              <div role="listitem" className="cms-tag w-dyn-item">
                                <div fs-list-field="сapability">
                                  CMS Development
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hidden">
                          <div fs-cmsfilter-field="country">USA</div>
                          <div fs-cmsfilter-field="techstack">Webflow</div>
                          <div fs-cmsfilter-field="techstack">Memberstack</div>
                          <div fs-cmsfilter-field="techstack">Make</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-buttons slider-buttons_portfolio">
                  <div className="button button_slider swis-portfolio-prev">
                    <div className="button-slider-arrow w-embed">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M15 6L9 12L15 18"
                          stroke="currentColor"
                          stroke-width="2"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="button button_slider swis-portfolio-next">
                    <div className="button-slider-arrow w-embed">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M9 6L15 12L9 18"
                          stroke="currentColor"
                          stroke-width="2"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fade-up-alt">
                <div className="tech-benefits-buttons">
                  <a href="/portfolio" target="_blank" className="button"
                    >View all</a
                  >
                </div>
              </div>
            </section>
            <section id="services" className="tech-services">
              <h2
                color-word="#eb5951"
                text-split=""
                lines-slide-up=""
                color-words-index="3,4"
                className="tech-section-title mb-60"
              >
                why teams pick Che IT
              </h2>
              <ul role="list" className="tech-service-list">
                <li className="tech-service-item fade-up-alt">
                  <div className="tech-service-item-icon is-large w-embed">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.387097"
                        y="0.387097"
                        width="47.2258"
                        height="47.2258"
                        rx="13.5484"
                        stroke="#FAFAFA"
                        stroke-opacity="0.3"
                        stroke-width="0.774194"
                      />
                      <path
                        d="M21.959 25.4158C22.301 25.4161 22.5781 25.6937 22.5777 26.0357L22.5716 32.5666C22.5711 33.1184 21.9037 33.3941 21.5139 33.0036L14.9891 26.4665C14.5993 26.076 14.8763 25.4091 15.4281 25.4096L21.959 25.4158Z"
                        fill="white"
                        fill-opacity="0.3"
                      />
                      <path
                        d="M22.5863 15.1583C22.9284 15.1586 23.2054 15.4362 23.2051 15.7782L23.1989 22.3091C23.1984 22.8609 22.531 23.1366 22.1412 22.7461L15.6165 16.2091C15.2267 15.8185 15.5036 15.1516 16.0554 15.1522L22.5863 15.1583Z"
                        fill="white"
                        fill-opacity="0.3"
                      />
                      <path
                        d="M32.4576 25.2321C32.7997 25.2324 33.0767 25.51 33.0764 25.8521L33.0703 32.383C33.0697 32.9348 32.4023 33.2105 32.0125 32.8199L25.4878 26.2829C25.098 25.8923 25.3749 25.2255 25.9267 25.226L32.4576 25.2321Z"
                        fill="white"
                        fill-opacity="0.3"
                      />
                      <path
                        d="M33.0847 15.1681C33.4268 15.1685 33.7038 15.446 33.7035 15.7881L33.6973 22.319C33.6968 22.8708 33.0294 23.1465 32.6396 22.7559L26.1149 16.2189C25.7251 15.8283 26.002 15.1615 26.5538 15.162L33.0847 15.1681Z"
                        fill="#EB5951"
                      />
                    </svg>
                  </div>
                  <div className="tech-service-item-caption">
                    <h3 className="tech-service-item-title">
                      Communication you can rely on
                    </h3>
                    <p className="text-body">
                      Proactive updates, structured reporting, and smooth
                      handovers. Feels in‑house - without hiring overhead.
                    </p>
                  </div>
                </li>
                <li className="tech-service-item fade-up-alt">
                  <div className="tech-service-item-icon is-large w-embed">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.387097"
                        y="0.387097"
                        width="47.2258"
                        height="47.2258"
                        rx="13.5484"
                        stroke="#FAFAFA"
                        stroke-opacity="0.3"
                        stroke-width="0.774194"
                      />
                      <circle
                        cx="27.5681"
                        cy="21.5266"
                        r="6.40072"
                        transform="rotate(-45 27.5681 21.5266)"
                        fill="white"
                        fill-opacity="0.3"
                      />
                      <circle
                        cx="21.5272"
                        cy="27.5677"
                        r="8.11557"
                        transform="rotate(-45 21.5272 27.5677)"
                        fill="#EB5951"
                      />
                    </svg>
                  </div>
                  <div className="tech-service-item-caption">
                    <h3 className="tech-service-item-title">Speed without chaos</h3>
                    <p className="text-body">
                      Launch without delays or downtime; we plan for stable
                      growth from day one.
                    </p>
                  </div>
                </li>
                <li className="tech-service-item fade-up-alt">
                  <div className="tech-service-item-icon is-large w-embed">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.387097"
                        y="0.387097"
                        width="47.2258"
                        height="47.2258"
                        rx="13.5484"
                        stroke="#FAFAFA"
                        stroke-opacity="0.3"
                        stroke-width="0.774194"
                      />
                      <path
                        opacity="0.3"
                        d="M19.3238 16.4124L31.1745 28.263L28.1088 31.3286L16.2582 19.478L19.3238 16.4124Z"
                        fill="white"
                      />
                      <rect
                        x="12.3871"
                        y="12.3872"
                        width="8.51613"
                        height="8.51613"
                        rx="4.25806"
                        fill="#EB5951"
                      />
                      <rect
                        opacity="0.3"
                        x="13.1613"
                        y="27.8711"
                        width="6.96774"
                        height="6.96774"
                        rx="3.48387"
                        fill="white"
                      />
                      <rect
                        opacity="0.3"
                        x="27.871"
                        y="13.1614"
                        width="6.96774"
                        height="6.96774"
                        rx="3.48387"
                        fill="white"
                      />
                      <rect
                        x="27.0968"
                        y="27.0969"
                        width="8.51613"
                        height="8.51613"
                        rx="4.25806"
                        fill="#EB5951"
                      />
                    </svg>
                  </div>
                  <div className="tech-service-item-caption">
                    <h3 className="tech-service-item-title">
                      Predictable &amp; secure delivery
                    </h3>
                    <p className="text-body">
                      Clear scope control, NDA, limited access, and backups - so
                      your IP stays safe.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="team__lottieanim">
                <div className="team__grid__wrap">
                  <div className="hidden w-embed">
                    <style dangerouslySetInnerHTML={{ __html: `
                      .team__grid {
                        display: grid;
                        gap: 0.4375em;
                      }

                      @media only screen and (min-width: 992px) {
                        .team__grid {
                          grid-template-rows: 15em 13.125em 7.5em;
                          grid-template-columns: 6.3em 2em 19.625em 5.625em 13.25em 12.875em 20.625em;
                        }

                        .team__grid.in-service-page {
                          grid-template-rows: 9em 7.875em 4.625em;
                          grid-template-columns: 3.875em 1.125em 11.875em 10.25em 9em 12.375em;
                        }
                      }

                      @media only screen and (max-width: 991px) {
                        .team__grid {
                          grid-template-columns: 16% 1fr 16%;
                          grid-auto-flow: row;
                        }
                      }

                      .team__grid_item {
                        position: relative;
                        z-index: 2;
                      }

                      .team__grid_item:nth-child(7n + 1) {
                        grid-column: 1 / 3;
                        grid-row: 1 / 2;
                      }

                      @media only screen and (max-width: 991px) {
                        .team__grid_item:nth-child(7n + 1) {
                          grid-column: 1 / 2;
                          grid-row: 1 / 2;
                        }
                      }

                      .team__grid_item:nth-child(7n + 2) {
                        grid-column: 3 / 4;
                        grid-row: 1 / 2;
                      }

                      @media only screen and (max-width: 991px) {
                        .team__grid_item:nth-child(7n + 2) {
                          grid-column: 2 / 4;
                          grid-row: 1 / 2;
                        }
                      }

                      .team__grid_item:nth-child(7n + 3) {
                        grid-row: 2 / 3;
                        grid-column: 3 / 4;
                      }

                      @media only screen and (max-width: 991px) {
                        .team__grid_item:nth-child(7n + 3) {
                          grid-column: 1 / 4;
                          grid-row: 2 / 3;
                        }
                      }

                      .team__grid_item:nth-child(7n + 4) {
                        grid-row: 1 / 3;
                        grid-column: 4 / 6;
                      }

                      @media only screen and (max-width: 991px) {
                        .team__grid_item:nth-child(7n + 4) {
                          grid-column: 1 / 4;
                          grid-row: 3 / 4;
                        }
                      }

                      .team__grid_item:nth-child(7n + 5) {
                        grid-row: 1 / 3;
                        grid-column: 6 / 7;
                      }

                      @media only screen and (max-width: 991px) {
                        .team__grid_item:nth-child(7n + 5) {
                          grid-column: 1 / 3;
                          grid-row: 4 / 5;
                        }
                      }

                      .team__grid_item:nth-child(7n + 6) {
                        grid-column: 3 / 5;
                      }

                      @media only screen and (max-width: 991px) {
                        .team__grid_item:nth-child(7n + 6) {
                          grid-column: 1 / 4;
                          grid-row: 5 / 6;
                        }
                      }

                      .team__grid_item:nth-child(7n + 7) {
                        grid-column: 5 / 6;
                      }

                      @media only screen and (max-width: 991px) {
                        .team__grid_item:nth-child(7n + 7) {
                          grid-column: 3 / 4;
                          grid-row: 4 / 5;
                        }
                      }

                      .team__grid_pic {
                        position: absolute;
                        top: 0;
                        left: 0;
                        z-index: 2;
                        width: 100%;
                        height: 100%;
                        transition: all 0.9s cubic-bezier(0.7, 0, 0.1, 1);
                      }

                      .team__grid_pic:not(:first-child) {
                        clip-path: inset(0 0 100% 100%);
                      }

                      .team__grid_item:nth-child(2).state_v1_mod
                        .team__grid_pic:not(:first-child),
                      .team__grid_item:nth-child(2).state_v2_mod
                        .team__grid_pic:not(:first-child),
                      .team__grid_item:nth-child(5).state_v3_mod
                        .team__grid_pic:not(:first-child),
                      .team__grid_item:nth-child(5).state_v4_mod
                        .team__grid_pic:not(:first-child) {
                        clip-path: inset(0 0 0 0);
                      }

                      .team__grid_pic:first-child {
                        clip-path: inset(0 0 0 0);
                      }

                      .team__grid_item:nth-child(2).state_v1_mod
                        .team__grid_pic:first-child,
                      .team__grid_item:nth-child(5).state_v3_mod
                        .team__grid_pic:first-child {
                        transition-delay: 0.7s;
                        clip-path: inset(100% 100% 0 0);
                      }

                      .team__grid_item:nth-child(2).state_v2_mod
                        .team__grid_pic:first-child,
                      .team__grid_item:nth-child(2).state_v3_mod
                        .team__grid_pic:first-child,
                      .team__grid_item:nth-child(2).state_v4_mod
                        .team__grid_pic:first-child,
                      .team__grid_item:nth-child(2).state_v5_mod
                        .team__grid_pic:first-child,
                      .team__grid_item:nth-child(5).state_v4_mod
                        .team__grid_pic:first-child,
                      .team__grid_item:nth-child(5).state_v5_mod
                        .team__grid_pic:first-child {
                        transition: all 1s cubic-bezier(0.7, 0, 0.1, 1);
                        z-index: 3;
                      }

                      @media only screen and (max-width: 991px) {
                        .team__grid_pic:first-child {
                          position: relative;
                        }
                      }

                      .team__grid_pic_wrap {
                        border-radius: 1.625em 0.25em 1.625em 0.25em;
                        overflow: hidden;
                      }

                      .team__grid_item:nth-child(1) .team__grid_pic_wrap:after,
                      .team__grid_item:nth-child(7) .team__grid_pic_wrap:after {
                        position: absolute;
                        top: 0;
                        left: 0;
                        display: block;
                        width: 100%;
                        height: 100%;
                        background-color: rgb(235, 89, 81);
                        content: "";
                        border-radius: 1.625em 0.25em 1.625em 0.25em;
                      }

                      @media only screen and (min-width: 992px) {
                        .team__grid_item:nth-child(7n + 1)
                          .team__grid_pic_wrap {
                          transition: all 0.7s cubic-bezier(0.7, 0, 0.1, 1);
                          height: 17.375em;
                        }
                      }

                      .team__grid_item:nth-child(7n + 1).state_v1_mod
                        .team__grid_pic_wrap,
                      .team__grid_item:nth-child(7n + 1).state_v2_mod
                        .team__grid_pic_wrap {
                        height: 7.875em;
                        margin-top: 9.5em;
                      }

                      .team__grid_item:nth-child(7n + 1).state_v3_mod
                        .team__grid_pic_wrap {
                        height: 9em;
                      }

                      .team__grid_item:nth-child(7n + 1).state_v4_mod
                        .team__grid_pic_wrap {
                        transition-delay: 0.7s;
                        height: 22.375em;
                      }

                      .team__grid_item:nth-child(7n + 2) .team__grid_pic_wrap {
                        height: 9em;
                      }

                      .team__grid_item:nth-child(7n + 2).state_v1_mod
                        .team__grid_pic_wrap {
                        width: 15.5em;
                        margin-left: -5.875em;
                      }

                      .team__grid_item:nth-child(7n + 2).state_v2_mod
                        .team__grid_pic_wrap,
                      .team__grid_item:nth-child(7n + 2).state_v3_mod
                        .team__grid_pic_wrap {
                        width: 9.625em;
                      }

                      .team__grid_item:nth-child(7n + 2).state_v0_mod
                        .team__grid_pic_wrap,
                      .team__grid_item:nth-child(7n + 2).state_v4_mod
                        .team__grid_pic_wrap,
                      .team__grid_item:nth-child(7n + 2).state_v5_mod
                        .team__grid_pic_wrap {
                        width: 100%;
                      }

                      .team__grid_item:nth-child(7n + 3) .team__grid_pic_wrap {
                        height: 7.875em;
                      }

                      .team__grid_item:nth-child(7n + 3).state_v0_mod
                        .team__grid_pic_wrap {
                        width: 100%;
                      }

                      .team__grid_item:nth-child(7n + 3).state_v1_mod
                        .team__grid_pic_wrap,
                      .team__grid_item:nth-child(7n + 3).state_v2_mod
                        .team__grid_pic_wrap {
                        width: 9.625em;
                      }

                      .team__grid_item:nth-child(7n + 3).state_v3_mod
                        .team__grid_pic_wrap {
                        width: 11.125em;
                        margin-left: -1.5em;
                        transition-delay: 0.3s;
                      }

                      .team__grid_item:nth-child(7n + 3).state_v4_mod
                        .team__grid_pic_wrap,
                      .team__grid_item:nth-child(7n + 3).state_v5_mod
                        .team__grid_pic_wrap {
                        width: 100%;
                      }

                      .team__grid_item:nth-child(7n + 4) .team__grid_pic_wrap {
                        height: 17.375em;
                      }

                      .team__grid_item:nth-child(7n + 4).state_v1_mod
                        .team__grid_pic_wrap {
                        width: 15.5em;
                        margin-left: -2.25em;
                      }

                      .team__grid_item:nth-child(7n + 4).state_v2_mod
                        .team__grid_pic_wrap,
                      .team__grid_item:nth-child(7n + 4).state_v3_mod
                        .team__grid_pic_wrap {
                        width: 22em;
                        margin-left: -2.25em;
                      }

                      .team__grid_item:nth-child(7n + 4).state_v0_mod
                        .team__grid_pic_wrap,
                      .team__grid_item:nth-child(7n + 4).state_v4_mod
                        .team__grid_pic_wrap,
                      .team__grid_item:nth-child(7n + 4).state_v5_mod
                        .team__grid_pic_wrap {
                        width: 100%;
                      }

                      .team__grid_item:nth-child(7n + 5) .team__grid_pic_wrap {
                        height: 100%;
                      }

                      .team__grid_item:nth-child(7n + 5).state_v0_mod
                        .team__grid_pic_wrap {
                        width: 100%;
                      }

                      .team__grid_item:nth-child(7n + 5).state_v1_mod
                        .team__grid_pic_wrap {
                        width: 18.75em;
                        margin-left: -6.4125em;
                      }

                      .team__grid_item:nth-child(7n + 5).state_v2_mod
                        .team__grid_pic_wrap,
                      .team__grid_item:nth-child(7n + 5).state_v3_mod
                        .team__grid_pic_wrap {
                        width: 100%;
                      }

                      .team__grid_item:nth-child(7n + 5).state_v3_mod
                        .team__grid_pic_wrap {
                        height: 22.375em;
                        transition-delay: 0.3s;
                      }

                      .team__grid_item:nth-child(7n + 5).state_v4_mod
                        .team__grid_pic_wrap,
                      .team__grid_item:nth-child(7n + 5).state_v5_mod
                        .team__grid_pic_wrap {
                        width: 100%;
                      }

                      @media only screen and (max-width: 991px) {
                        .team__grid_item:nth-child(7n + 2).state_v0_mod
                          .team__grid_pic_wrap,
                        .team__grid_item:nth-child(7n + 3).state_v0_mod
                          .team__grid_pic_wrap,
                        .team__grid_item:nth-child(7n + 4).state_v0_mod
                          .team__grid_pic_wrap,
                        .team__grid_item:nth-child(7n + 5).state_v0_mod
                          .team__grid_pic_wrap {
                          width: 100%;
                          height: 100%;
                        }
                      }

                      @media only screen and (min-width: 992px) {
                        .team__grid_item:nth-child(7n + 7)
                          .team__grid_pic_wrap {
                          transition: all 0.7s cubic-bezier(0.7, 0, 0.1, 1);
                          right: 0;
                          left: auto;
                        }
                      }

                      .team__grid_item:nth-child(7n + 7).state_v0_mod
                        .team__grid_pic_wrap,
                      .team__grid_item:nth-child(7n + 7).state_v4_mod
                        .team__grid_pic_wrap,
                      .team__grid_item:nth-child(7n + 7).state_v5_mod
                        .team__grid_pic_wrap {
                        transition-delay: 0.7s;
                        width: 21.75em;
                        margin-right: -12.75rem;
                      }

                      .team__grid_item:nth-child(7n + 7).state_v1_mod
                        .team__grid_pic_wrap,
                      .team__grid_item:nth-child(7n + 7).state_v2_mod
                        .team__grid_pic_wrap {
                        width: 20.625em;
                        margin-right: -21.25em;
                      }

                      .team__grid_item:nth-child(7n + 7).state_v3_mod
                        .team__grid_pic_wrap {
                        width: 100%;
                      }

                      @media only screen and (min-width: 992px) {
                        .team__grid_pic_wrap {
                          position: absolute;
                          top: 0;
                          left: 0;
                          width: 100%;
                          height: 100%;
                          transition: all 1.2s cubic-bezier(0.7, 0, 0.1, 1);
                        }
                      }

                      .team__grid_img {
                        display: block;
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        object-position: center;
                      }

                      @media only screen and (max-width: 991px) {
                        .team__grid_pic:first-child {
                          position: relative;
                        }
                        .team__grid_pic_wrap,
                        .team__grid_item:nth-child(1)
                          .team__grid_pic_wrap:after,
                        .team__grid_item:nth-child(7)
                          .team__grid_pic_wrap:after {
                          border-radius: 1em 0.05em 1em 0.05em;
                        }
                      }
                    ` }} />
                  </div>
                  <div className="w-dyn-list">
                    <div
                      role="list"
                      className="team__grid in-service-page w-dyn-items"
                    >
                      <div
                        role="listitem"
                        className="team__grid_item state_v0_mod w-dyn-item"
                      >
                        <div className="team__grid_pic_wrap">
                          <div className="team__grid_pic w-condition-invisible">
                            <img
                              alt=""
                              loading="lazy"
                              src=""
                              className="team__grid_img w-dyn-bind-empty"
                            />
                          </div>
                          <div className="team__grid_pic w-condition-invisible">
                            <img
                              alt=""
                              loading="eager"
                              src=""
                              className="team__grid_img w-dyn-bind-empty"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        role="listitem"
                        className="team__grid_item state_v0_mod w-dyn-item"
                      >
                        <div className="team__grid_pic_wrap">
                          <div className="team__grid_pic">
                            <img
                              alt=""
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/68b16384bc82562dbb06e978_item6.jpg"
                              sizes="100vw"
                              srcSet="
                                https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/68b16384bc82562dbb06e978_item6-p-500.webp  500w,
                                https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/68b16384bc82562dbb06e978_item6-p-800.webp  800w,
                                https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/68b16384bc82562dbb06e978_item6.jpg        1962w
                              "
                              className="team__grid_img"
                            />
                          </div>
                          <div className="team__grid_pic">
                            <img
                              alt="CheIT Group team member works on terrace"
                              loading="eager"
                              src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/654d32a3c70833d9812a979a_image1.webp"
                              sizes="100vw"
                              srcSet="
                                https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/654d32a3c70833d9812a979a_image1-p-500.webp 500w,
                                https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/654d32a3c70833d9812a979a_image1.webp       708w
                              "
                              className="team__grid_img"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        role="listitem"
                        className="team__grid_item state_v0_mod w-dyn-item"
                      >
                        <div className="team__grid_pic_wrap">
                          <div className="team__grid_pic">
                            <img
                              alt="CheIT Group team on bicycles on the street"
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/68b16408edee885012895bc1_item7.jpg"
                              sizes="100vw"
                              srcSet="
                                https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/68b16408edee885012895bc1_item7-p-500.webp   500w,
                                https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/68b16408edee885012895bc1_item7-p-800.webp   800w,
                                https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/68b16408edee885012895bc1_item7-p-1080.webp 1080w,
                                https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/68b16408edee885012895bc1_item7.jpg         1995w
                              "
                              className="team__grid_img"
                            />
                          </div>
                          <div className="team__grid_pic w-condition-invisible">
                            <img
                              alt=""
                              loading="eager"
                              src=""
                              className="team__grid_img w-dyn-bind-empty"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        role="listitem"
                        className="team__grid_item state_v0_mod w-dyn-item"
                      >
                        <div className="team__grid_pic_wrap">
                          <div className="team__grid_pic">
                            <img
                              alt="CheIT Group team meet"
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/68b1642724ef4f812b34ab8d_item8.jpg"
                              sizes="100vw"
                              srcSet="
                                https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/68b1642724ef4f812b34ab8d_item8-p-500.webp   500w,
                                https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/68b1642724ef4f812b34ab8d_item8-p-800.webp   800w,
                                https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/68b1642724ef4f812b34ab8d_item8-p-1080.webp 1080w,
                                https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/68b1642724ef4f812b34ab8d_item8-p-1600.webp 1600w,
                                https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/68b1642724ef4f812b34ab8d_item8-p-2000.webp 2000w,
                                https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/68b1642724ef4f812b34ab8d_item8.jpg         4000w
                              "
                              className="team__grid_img"
                            />
                          </div>
                          <div className="team__grid_pic w-condition-invisible">
                            <img
                              alt=""
                              loading="eager"
                              src=""
                              className="team__grid_img w-dyn-bind-empty"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        role="listitem"
                        className="team__grid_item state_v0_mod w-dyn-item"
                      >
                        <div className="team__grid_pic_wrap">
                          <div className="team__grid_pic">
                            <img
                              alt="Che IT team photo in front of building"
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/68b1635694cdf6c0f3622d66_item5.jpg"
                              sizes="100vw"
                              srcSet="
                                https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/68b1635694cdf6c0f3622d66_item5-p-500.webp   500w,
                                https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/68b1635694cdf6c0f3622d66_item5-p-800.webp   800w,
                                https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/68b1635694cdf6c0f3622d66_item5-p-1080.webp 1080w,
                                https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/68b1635694cdf6c0f3622d66_item5.jpg         1995w
                              "
                              className="team__grid_img"
                            />
                          </div>
                          <div className="team__grid_pic">
                            <img
                              alt="CheIT Group team meeting"
                              loading="eager"
                              src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/68b16705d6aec8cc05df963c_image6.webp"
                              sizes="100vw"
                              srcSet="
                                https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/68b16705d6aec8cc05df963c_image6-p-500.webp 500w,
                                https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/68b16705d6aec8cc05df963c_image6-p-800.webp 800w,
                                https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/68b16705d6aec8cc05df963c_image6.webp       990w
                              "
                              className="team__grid_img"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        role="listitem"
                        className="team__grid_item state_v0_mod w-dyn-item"
                      >
                        <div className="team__grid_pic_wrap w-condition-invisible">
                          <div className="team__grid_pic w-condition-invisible">
                            <img
                              alt=""
                              loading="lazy"
                              src=""
                              className="team__grid_img w-dyn-bind-empty"
                            />
                          </div>
                          <div className="team__grid_pic w-condition-invisible">
                            <img
                              alt=""
                              loading="eager"
                              src=""
                              className="team__grid_img w-dyn-bind-empty"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        role="listitem"
                        className="team__grid_item state_v0_mod w-dyn-item"
                      >
                        <div className="team__grid_pic_wrap">
                          <div className="team__grid_pic w-condition-invisible">
                            <img
                              alt=""
                              loading="lazy"
                              src=""
                              className="team__grid_img w-dyn-bind-empty"
                            />
                          </div>
                          <div className="team__grid_pic w-condition-invisible">
                            <img
                              alt=""
                              loading="eager"
                              src=""
                              className="team__grid_img w-dyn-bind-empty"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tech-benefits-buttons fade-up-alt">
                <a href="#contact-section" className="button button_smaller"
                  >Get expert advice</a
                >
              </div>
            </section>
            <section className="tech-sertificate">
              <h2
                color-word="#eb5951"
                text-split=""
                lines-slide-up=""
                color-words-index="1"
                className="tech-section-title"
              >
                certified make partner
              </h2>
              <div className="text-body">
                We’re officially a Make Partner - meaning your automations are
                built and optimized by certified experts.
              </div>
              <div className="w-layout-grid tech_3col">
                <div
                  id="w-node-_64ac1c47-0c32-e10d-6b86-4defe2f02af6-71bc7570"
                  className="tech_sertificate_item"
                >
                  <div className="tech_sertificate_point">
                    <div className="tech_sertificate_dot"></div>
                    <div className="tech_sertificate_text">
                      Build and connect workflows across 1,500+ apps
                    </div>
                  </div>
                  <div className="tech_sertificate_point">
                    <div className="tech_sertificate_dot"></div>
                    <div className="tech_sertificate_text">
                      Optimize or fix existing Make scenarios
                    </div>
                  </div>
                  <div className="tech_sertificate_point">
                    <div className="tech_sertificate_dot"></div>
                    <div className="tech_sertificate_text">
                      Reduce manual work for your team
                    </div>
                  </div>
                </div>
                <div
                  id="w-node-_1bf0703a-eb06-78f3-f561-1e4ee47f5fde-71bc7570"
                  className="tech_sertificate_img"
                >
                  <img
                    src="https://cdn.prod.website-files.com/64d20115d5be49b3874991ac/693050f600731f56aa77d6d2_Group%201171276601.png"
                    loading="lazy"
                    alt="Make certified partner badge"
                  />
                </div>
                <div
                  id="w-node-bab295d0-a07d-cfcd-25a8-19e957d0edb6-71bc7570"
                  className="tech_sertificate_item"
                >
                  <div className="tech_sertificate_point">
                    <div className="tech_sertificate_dot"></div>
                    <div className="tech_sertificate_text">
                      Add AI parsing, enrichment, and routing where needed
                    </div>
                  </div>
                  <div className="tech_sertificate_point is-last">
                    <div className="tech_sertificate_dot"></div>
                    <div className="tech_sertificate_text">
                      Clear guidance on automation priorities &amp; ROI
                    </div>
                  </div>
                </div>
              </div>
              <a href="/technologies/make" className="button button_smaller"
                >About Make</a
              >
            </section>
            <section id="ecosystem" className="tech-ecosystem">
              <h2
                color-word="#eb5951"
                text-split=""
                lines-slide-up=""
                color-words-index="0"
                className="tech-section-title mb-60"
              >
                technologies we use in ai &amp; automation
              </h2>
              <div className="fade-up-alt">
                <div className="tech-slider-wrap">
                  <div className="swiper tech-slider w-dyn-list">
                    <div
                      role="list"
                      className="tech-ecosystem-grid swiper-wrapper w-dyn-items"
                    >
                      <div role="listitem" className="swiper-slide w-dyn-item">
                        <a href="#" className="tech-ecosystem-item w-inline-block"
                          ><div className="tech-ecosystem-item-image-wrap">
                            <img
                              src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/688c609479d7f378d3a90e0a_make.svg"
                              loading="lazy"
                              alt="Make (Integromat) automation platform logo"
                              className="tech-ecosystem-item-image"
                            />
                          </div>
                          <div className="tech-ecosystem-item-divider"></div>
                          <div className="tech-ecosystem-item-title">Make</div></a
                        >
                      </div>
                      <div role="listitem" className="swiper-slide w-dyn-item">
                        <a href="#" className="tech-ecosystem-item w-inline-block"
                          ><div className="tech-ecosystem-item-image-wrap">
                            <img
                              src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/664af16516e4c502e7f45038_hubspot.svg"
                              loading="lazy"
                              alt="HubSpot logo"
                              className="tech-ecosystem-item-image"
                            />
                          </div>
                          <div className="tech-ecosystem-item-divider"></div>
                          <div className="tech-ecosystem-item-title">
                            Hubspot
                          </div></a
                        >
                      </div>
                      <div role="listitem" className="swiper-slide w-dyn-item">
                        <a href="#" className="tech-ecosystem-item w-inline-block"
                          ><div className="tech-ecosystem-item-image-wrap">
                            <img
                              src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/664af11caf11aec9d18151c7_zapier.svg"
                              loading="lazy"
                              alt="Zapier logo"
                              className="tech-ecosystem-item-image"
                            />
                          </div>
                          <div className="tech-ecosystem-item-divider"></div>
                          <div className="tech-ecosystem-item-title">Zapier</div></a
                        >
                      </div>
                      <div role="listitem" className="swiper-slide w-dyn-item">
                        <a href="#" className="tech-ecosystem-item w-inline-block"
                          ><div className="tech-ecosystem-item-image-wrap">
                            <img
                              src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/66963dc71dd45225934947f6_airtable-svgrepo-com%20(1)%201.svg"
                              loading="lazy"
                              alt="Airtable logo"
                              className="tech-ecosystem-item-image"
                            />
                          </div>
                          <div className="tech-ecosystem-item-divider"></div>
                          <div className="tech-ecosystem-item-title">
                            Airtable
                          </div></a
                        >
                      </div>
                    </div>
                  </div>
                  <div className="slider-buttons">
                    <div className="button button_slider tech-slider-prev">
                      <div className="button-slider-arrow w-embed">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M15 6L9 12L15 18"
                            stroke="currentColor"
                            stroke-width="2"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="button button_slider tech-slider-next">
                      <div className="button-slider-arrow w-embed">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M9 6L15 12L9 18"
                            stroke="currentColor"
                            stroke-width="2"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="testimonials-section" className="tech-testimonials">
              <h2
                data-testimonials-title=""
                text-split=""
                lines-slide-up=""
                color-words-index="4,5"
                color-word="#eb5951"
                className="tech-section-title mb-60 desktop"
              >
                what our clients say… for real
              </h2>
              <h2
                data-testimonials-title=""
                text-split=""
                lines-slide-up=""
                color-words-index="4,5"
                color-word="#eb5951"
                className="tech-section-title mb-60 mobile"
              >
                what our clients say…<br />for real
              </h2>
              <div className="fade-up-alt">
                <div className="tech-testimonials-nav-wrapper">
                  <img
                    loading="lazy"
                    width="388"
                    alt="Rocken logo"
                    src="https://cdn.prod.website-files.com/64d20115d5be49b3874991ac/6728d7bf836265b91b254072_18a913691312578a585d58229f3c678d_rocken.svg"
                    className="tech-nav-image"
                  /><img
                    loading="lazy"
                    width="388"
                    alt="Porsche logo"
                    src="https://cdn.prod.website-files.com/64d20115d5be49b3874991ac/689c07329e44da2cc1a1e83b_1c70833c7f74d1c57bb7cf76f8864b3f_porsche.svg"
                    className="tech-nav-image"
                  /><img
                    loading="lazy"
                    width="388"
                    alt="Schulthess logo"
                    src="https://cdn.prod.website-files.com/64d20115d5be49b3874991ac/689c07074c6a141440e0d2bf_226637c022b6798b3c761027f2846685_schulthess.svg"
                    className="tech-nav-image"
                  /><img
                    loading="lazy"
                    width="388"
                    alt="Saclab logo"
                    src="https://cdn.prod.website-files.com/64d20115d5be49b3874991ac/689c08adbd25c4e4049dd52f_saclab2.svg"
                    className="tech-nav-image"
                  /><img
                    loading="lazy"
                    width="388"
                    alt="ONELINE company logo"
                    src="https://cdn.prod.website-files.com/64d20115d5be49b3874991ac/689c076ede348681637aa039_d312de86af198654ae64e71cde86e325_oneline.svg"
                    className="tech-nav-image"
                  />
                </div>
              </div>
              <div className="fade-up-alt">
                <div className="tech-testimonials__slider">
                  <div
                    className="tech-testimonials__slider-wrapper tech-variant swiper w-dyn-list"
                  >
                    <div role="list" className="swiper-wrapper w-dyn-items">
                      <div role="listitem" className="swiper-slide w-dyn-item">
                        <div className="testimonials__card tech-variant">
                          <div className="testimonials__card-inner">
                            <div
                              style={{"backgroundColor":"#dbbaf4"}}
                              className="testimonials__card-bg"
                            ></div>
                            <img
                              loading="lazy"
                              width="388"
                              alt="Screenshot from TechHunt (AM) website"
                              src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/69415648fb54d47025658431_68502c28fbdaa5e4f7401a80_techhunt%20(1).webp"
                              sizes="(max-width: 479px) 100vw, 388px"
                              srcSet="
                                https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/69415648fb54d47025658431_68502c28fbdaa5e4f7401a80_techhunt%20(1)-p-500.webp 500w,
                                https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/69415648fb54d47025658431_68502c28fbdaa5e4f7401a80_techhunt%20(1).webp       620w
                              "
                              className="testimonials__card-overview tech-variant"
                            />
                            <div
                              className="testimonials__card-caption tech-variant"
                            >
                              <img
                                loading="lazy"
                                alt="Client icon"
                                src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/68502c460e19db138dd98e5a_kiseliova.webp"
                                className="testimonials__card-avatar tech-variant"
                              />
                              <p className="testimonials__card-name">
                                Iryna Kyselova
                              </p>
                              <p
                                className="testimonials__card-position body-smaller text-uppercase"
                              >
                                CEO, TechHunt (AM)
                              </p>
                            </div>
                            <div className="testimonials__card-inner-scroller">
                              <div className="testimonials__card-list">
                                <div
                                  className="testimonials__card-message-wrapper tech-variant"
                                >
                                  <div
                                    className="testimonials__card-message tech-variant"
                                  >
                                    <p
                                      className="testimonials__card-message-text tech-variant"
                                    >
                                      Ok
                                    </p>
                                    <p
                                      className="testimonials__card-message-time tech-variant color-white-70"
                                    >
                                      4:45 PM
                                    </p>
                                  </div>
                                </div>
                                <div className="testimonials__card-message-wrapper">
                                  <div
                                    className="testimonials__card-message tech-variant"
                                  >
                                    <p
                                      className="testimonials__card-message-text tech-variant"
                                    >
                                      Site works great
                                    </p>
                                    <p
                                      className="testimonials__card-message-time tech-variant color-white-70"
                                    >
                                      4:56 PM
                                    </p>
                                  </div>
                                </div>
                                <div className="testimonials__card-message-wrapper">
                                  <div
                                    className="testimonials__card-message tech-variant"
                                  >
                                    <p
                                      className="testimonials__card-message-text tech-variant"
                                    >
                                      On time as promised
                                    </p>
                                    <p
                                      className="testimonials__card-message-time tech-variant color-white-70"
                                    >
                                      4:57 PM
                                    </p>
                                  </div>
                                </div>
                                <div className="testimonials__card-message-wrapper">
                                  <div
                                    className="testimonials__card-message tech-variant"
                                  >
                                    <p
                                      className="testimonials__card-message-text tech-variant"
                                    >
                                      Reasonable price
                                    </p>
                                    <p
                                      className="testimonials__card-message-time tech-variant color-white-70"
                                    >
                                      4:58 PM
                                    </p>
                                  </div>
                                </div>
                                <div className="testimonials__card-message-wrapper">
                                  <div
                                    className="testimonials__card-message tech-variant"
                                  >
                                    <p
                                      className="testimonials__card-message-text tech-variant"
                                    >
                                      Will recommend
                                    </p>
                                    <p
                                      className="testimonials__card-message-time tech-variant color-white-70"
                                    >
                                      4:59 PM
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className="testimonials__card-message-wrapper w-condition-invisible"
                                >
                                  <div className="testimonials__card-message">
                                    <p
                                      className="testimonials__card-message-text w-dyn-bind-empty"
                                    ></p>
                                    <p
                                      className="testimonials__card-message-time body-smaller color-white-70 w-dyn-bind-empty"
                                    ></p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="swiper-slide w-dyn-item">
                        <div className="testimonials__card tech-variant">
                          <div className="testimonials__card-inner">
                            <div
                              style={{"backgroundColor":"#a0eeb0"}}
                              className="testimonials__card-bg"
                            ></div>
                            <img
                              loading="lazy"
                              width="388"
                              alt="Text screenshot from Habitat website"
                              src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/68502b378775a7fe00bb4fab_habitat.webp"
                              sizes="(max-width: 479px) 100vw, 388px"
                              srcSet="
                                https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/68502b378775a7fe00bb4fab_habitat-p-500.webp 500w,
                                https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/68502b378775a7fe00bb4fab_habitat.webp       620w
                              "
                              className="testimonials__card-overview tech-variant"
                            />
                            <div
                              className="testimonials__card-caption tech-variant"
                            >
                              <img
                                loading="lazy"
                                alt="Oleksandra Kozak photo, CXO at Habitat"
                                src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/68502b31c839a090ed9cb36d_kozak.webp"
                                className="testimonials__card-avatar tech-variant"
                              />
                              <p className="testimonials__card-name">
                                Oleksandra Kozak
                              </p>
                              <p
                                className="testimonials__card-position body-smaller text-uppercase"
                              >
                                CXO, Habitat
                              </p>
                            </div>
                            <div className="testimonials__card-inner-scroller">
                              <div className="testimonials__card-list">
                                <div
                                  className="testimonials__card-message-wrapper tech-variant"
                                >
                                  <div
                                    className="testimonials__card-message tech-variant"
                                  >
                                    <p
                                      className="testimonials__card-message-text tech-variant"
                                    >
                                      Platform handles 75k users now
                                    </p>
                                    <p
                                      className="testimonials__card-message-time tech-variant color-white-70"
                                    >
                                      12:28 AM
                                    </p>
                                  </div>
                                </div>
                                <div className="testimonials__card-message-wrapper">
                                  <div
                                    className="testimonials__card-message tech-variant"
                                  >
                                    <p
                                      className="testimonials__card-message-text tech-variant"
                                    >
                                      92% satisfaction!
                                    </p>
                                    <p
                                      className="testimonials__card-message-time tech-variant color-white-70"
                                    >
                                      12:32 AM
                                    </p>
                                  </div>
                                </div>
                                <div className="testimonials__card-message-wrapper">
                                  <div
                                    className="testimonials__card-message tech-variant"
                                  >
                                    <p
                                      className="testimonials__card-message-text tech-variant"
                                    >
                                      user engagement +45%
                                    </p>
                                    <p
                                      className="testimonials__card-message-time tech-variant color-white-70"
                                    >
                                      12:34 AM
                                    </p>
                                  </div>
                                </div>
                                <div className="testimonials__card-message-wrapper">
                                  <div
                                    className="testimonials__card-message tech-variant"
                                  >
                                    <p
                                      className="testimonials__card-message-text tech-variant"
                                    >
                                      revenue is growing so fast 🔥
                                    </p>
                                    <p
                                      className="testimonials__card-message-time tech-variant color-white-70"
                                    >
                                      12:45 AM
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className="testimonials__card-message-wrapper w-condition-invisible"
                                >
                                  <div
                                    className="testimonials__card-message tech-variant"
                                  >
                                    <p
                                      className="testimonials__card-message-text tech-variant w-dyn-bind-empty"
                                    ></p>
                                    <p
                                      className="testimonials__card-message-time tech-variant color-white-70 w-dyn-bind-empty"
                                    ></p>
                                  </div>
                                </div>
                                <div
                                  className="testimonials__card-message-wrapper w-condition-invisible"
                                >
                                  <div className="testimonials__card-message">
                                    <p
                                      className="testimonials__card-message-text w-dyn-bind-empty"
                                    ></p>
                                    <p
                                      className="testimonials__card-message-time body-smaller color-white-70 w-dyn-bind-empty"
                                    ></p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="swiper-slide w-dyn-item">
                        <div className="testimonials__card tech-variant">
                          <div className="testimonials__card-inner">
                            <div
                              style={{"backgroundColor":"#ffb3b3"}}
                              className="testimonials__card-bg"
                            ></div>
                            <img
                              loading="lazy"
                              width="388"
                              alt="Norwegian-Ukrainian Chamber of Commerce website screenshot"
                              src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/694156c8a2a51c888dc8f3d8_68502a3f8efdae84c0a2bfa5_nucc%20(1).webp"
                              sizes="(max-width: 479px) 100vw, 388px"
                              srcSet="
                                https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/694156c8a2a51c888dc8f3d8_68502a3f8efdae84c0a2bfa5_nucc%20(1)-p-500.webp 500w,
                                https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/694156c8a2a51c888dc8f3d8_68502a3f8efdae84c0a2bfa5_nucc%20(1).webp       620w
                              "
                              className="testimonials__card-overview tech-variant"
                            />
                            <div
                              className="testimonials__card-caption tech-variant"
                            >
                              <img
                                loading="lazy"
                                alt="Client logo"
                                src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/68502a0bc839a090ed9be559_pedersen.webp"
                                className="testimonials__card-avatar tech-variant"
                              />
                              <p className="testimonials__card-name">
                                Kjartan Pedersen
                              </p>
                              <p
                                className="testimonials__card-position body-smaller text-uppercase"
                              >
                                Managing Director, NUCC
                              </p>
                            </div>
                            <div className="testimonials__card-inner-scroller">
                              <div className="testimonials__card-list">
                                <div
                                  className="testimonials__card-message-wrapper tech-variant"
                                >
                                  <div
                                    className="testimonials__card-message tech-variant"
                                  >
                                    <p
                                      className="testimonials__card-message-text tech-variant"
                                    >
                                      traffic increased tenfold!
                                    </p>
                                    <p
                                      className="testimonials__card-message-time tech-variant color-white-70"
                                    >
                                      11:24 AM
                                    </p>
                                  </div>
                                </div>
                                <div className="testimonials__card-message-wrapper">
                                  <div
                                    className="testimonials__card-message tech-variant"
                                  >
                                    <p
                                      className="testimonials__card-message-text tech-variant"
                                    >
                                      288 → 3,614 visitors
                                    </p>
                                    <p
                                      className="testimonials__card-message-time tech-variant color-white-70"
                                    >
                                      11:27 AM
                                    </p>
                                  </div>
                                </div>
                                <div className="testimonials__card-message-wrapper">
                                  <div
                                    className="testimonials__card-message tech-variant"
                                  >
                                    <p
                                      className="testimonials__card-message-text tech-variant"
                                    >
                                      love working with specialists
                                    </p>
                                    <p
                                      className="testimonials__card-message-time tech-variant color-white-70"
                                    >
                                      11:28 AM
                                    </p>
                                  </div>
                                </div>
                                <div className="testimonials__card-message-wrapper">
                                  <div
                                    className="testimonials__card-message tech-variant"
                                  >
                                    <p
                                      className="testimonials__card-message-text tech-variant"
                                    >
                                      always available
                                    </p>
                                    <p
                                      className="testimonials__card-message-time tech-variant color-white-70"
                                    >
                                      11:31 AM
                                    </p>
                                  </div>
                                </div>
                                <div className="testimonials__card-message-wrapper">
                                  <div
                                    className="testimonials__card-message tech-variant"
                                  >
                                    <p
                                      className="testimonials__card-message-text tech-variant"
                                    >
                                      ok this is impressive
                                    </p>
                                    <p
                                      className="testimonials__card-message-time tech-variant color-white-70"
                                    >
                                      11:31 AM
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className="testimonials__card-message-wrapper w-condition-invisible"
                                >
                                  <div className="testimonials__card-message">
                                    <p
                                      className="testimonials__card-message-text w-dyn-bind-empty"
                                    ></p>
                                    <p
                                      className="testimonials__card-message-time body-smaller color-white-70 w-dyn-bind-empty"
                                    ></p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="swiper-slide w-dyn-item">
                        <div className="testimonials__card tech-variant">
                          <div className="testimonials__card-inner">
                            <div
                              style={{"backgroundColor":"#bfecff"}}
                              className="testimonials__card-bg"
                            ></div>
                            <img
                              loading="lazy"
                              width="388"
                              alt="Coinweb website page screenshot"
                              src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/69415707d03780662cf56620_coinweb.webp"
                              sizes="(max-width: 479px) 100vw, 388px"
                              srcSet="
                                https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/69415707d03780662cf56620_coinweb-p-500.webp 500w,
                                https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/69415707d03780662cf56620_coinweb.webp       620w
                              "
                              className="testimonials__card-overview tech-variant"
                            />
                            <div
                              className="testimonials__card-caption tech-variant"
                            >
                              <img
                                loading="lazy"
                                alt="Shawn Munir photo, COO at Coinweb"
                                src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/6850286683615deed2605b11_munir.webp"
                                className="testimonials__card-avatar tech-variant"
                              />
                              <p className="testimonials__card-name">Shawn Munir</p>
                              <p
                                className="testimonials__card-position body-smaller text-uppercase"
                              >
                                COO, Coinweb
                              </p>
                            </div>
                            <div className="testimonials__card-inner-scroller">
                              <div className="testimonials__card-list">
                                <div
                                  className="testimonials__card-message-wrapper tech-variant"
                                >
                                  <div
                                    className="testimonials__card-message tech-variant"
                                  >
                                    <p
                                      className="testimonials__card-message-text tech-variant"
                                    >
                                      Website is LIVE
                                    </p>
                                    <p
                                      className="testimonials__card-message-time tech-variant color-white-70"
                                    >
                                      3:24 PM
                                    </p>
                                  </div>
                                </div>
                                <div className="testimonials__card-message-wrapper">
                                  <div
                                    className="testimonials__card-message tech-variant"
                                  >
                                    <p
                                      className="testimonials__card-message-text tech-variant"
                                    >
                                      Bookings increased immediately
                                    </p>
                                    <p
                                      className="testimonials__card-message-time tech-variant color-white-70"
                                    >
                                      3:56 PM
                                    </p>
                                  </div>
                                </div>
                                <div className="testimonials__card-message-wrapper">
                                  <div
                                    className="testimonials__card-message tech-variant"
                                  >
                                    <p
                                      className="testimonials__card-message-text tech-variant"
                                    >
                                      Super responsive team
                                    </p>
                                    <p
                                      className="testimonials__card-message-time tech-variant color-white-70"
                                    >
                                      3:57 PM
                                    </p>
                                  </div>
                                </div>
                                <div className="testimonials__card-message-wrapper">
                                  <div
                                    className="testimonials__card-message tech-variant"
                                  >
                                    <p
                                      className="testimonials__card-message-text tech-variant"
                                    >
                                      Thanks for the quick fixes
                                    </p>
                                    <p
                                      className="testimonials__card-message-time tech-variant color-white-70"
                                    >
                                      4:09 PM
                                    </p>
                                  </div>
                                </div>
                                <div className="testimonials__card-message-wrapper">
                                  <div
                                    className="testimonials__card-message tech-variant"
                                  >
                                    <p
                                      className="testimonials__card-message-text tech-variant"
                                    >
                                      Respect how you handle everythin
                                    </p>
                                    <p
                                      className="testimonials__card-message-time tech-variant color-white-70"
                                    >
                                      4:12 PM
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className="testimonials__card-message-wrapper w-condition-invisible"
                                >
                                  <div className="testimonials__card-message">
                                    <p
                                      className="testimonials__card-message-text w-dyn-bind-empty"
                                    ></p>
                                    <p
                                      className="testimonials__card-message-time body-smaller color-white-70 w-dyn-bind-empty"
                                    ></p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="swiper-slide w-dyn-item">
                        <div className="testimonials__card tech-variant">
                          <div className="testimonials__card-inner">
                            <div
                              style={{"backgroundColor":"#f8ca86"}}
                              className="testimonials__card-bg"
                            ></div>
                            <img
                              loading="lazy"
                              width="388"
                              alt="Hexagon agency website screenshot"
                              src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/68502798cd0fd320d06be075_hexagon.webp"
                              sizes="(max-width: 479px) 100vw, 388px"
                              srcSet="
                                https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/68502798cd0fd320d06be075_hexagon-p-500.webp 500w,
                                https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/68502798cd0fd320d06be075_hexagon.webp       620w
                              "
                              className="testimonials__card-overview tech-variant"
                            />
                            <div
                              className="testimonials__card-caption tech-variant"
                            >
                              <img
                                loading="lazy"
                                alt="Sviatoslav Iablonsky photo, CEO at Hexagon agency"
                                src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/685023339af3e8fa707e5d2c_iablonsky.webp"
                                className="testimonials__card-avatar tech-variant"
                              />
                              <p className="testimonials__card-name">
                                Sviatoslav Iablonsky
                              </p>
                              <p
                                className="testimonials__card-position body-smaller text-uppercase"
                              >
                                CEO, Hexagon Agency
                              </p>
                            </div>
                            <div className="testimonials__card-inner-scroller">
                              <div className="testimonials__card-list">
                                <div
                                  className="testimonials__card-message-wrapper tech-variant"
                                >
                                  <div
                                    className="testimonials__card-message tech-variant"
                                  >
                                    <p
                                      className="testimonials__card-message-text tech-variant"
                                    >
                                      end client loves it!
                                    </p>
                                    <p
                                      className="testimonials__card-message-time tech-variant color-white-70"
                                    >
                                      2:34 PM
                                    </p>
                                  </div>
                                </div>
                                <div className="testimonials__card-message-wrapper">
                                  <div
                                    className="testimonials__card-message tech-variant"
                                  >
                                    <p
                                      className="testimonials__card-message-text tech-variant"
                                    >
                                      conversions up by 20% already
                                    </p>
                                    <p
                                      className="testimonials__card-message-time tech-variant color-white-70"
                                    >
                                      2:54 PM
                                    </p>
                                  </div>
                                </div>
                                <div className="testimonials__card-message-wrapper">
                                  <div
                                    className="testimonials__card-message tech-variant"
                                  >
                                    <p
                                      className="testimonials__card-message-text tech-variant"
                                    >
                                      hitting all deadlines like pros
                                    </p>
                                    <p
                                      className="testimonials__card-message-time tech-variant color-white-70"
                                    >
                                      2:56 PM
                                    </p>
                                  </div>
                                </div>
                                <div className="testimonials__card-message-wrapper">
                                  <div
                                    className="testimonials__card-message tech-variant"
                                  >
                                    <p
                                      className="testimonials__card-message-text tech-variant"
                                    >
                                      even the crazy tight ones
                                    </p>
                                    <p
                                      className="testimonials__card-message-time tech-variant color-white-70"
                                    >
                                      2:59 PM
                                    </p>
                                  </div>
                                </div>
                                <div className="testimonials__card-message-wrapper">
                                  <div
                                    className="testimonials__card-message tech-variant"
                                  >
                                    <p
                                      className="testimonials__card-message-text tech-variant"
                                    >
                                      even the crazy tight ones
                                    </p>
                                    <p
                                      className="testimonials__card-message-time tech-variant color-white-70"
                                    >
                                      3:09 PM
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className="testimonials__card-message-wrapper w-condition-invisible"
                                >
                                  <div className="testimonials__card-message">
                                    <p
                                      className="testimonials__card-message-text w-dyn-bind-empty"
                                    ></p>
                                    <p
                                      className="testimonials__card-message-time body-smaller color-white-70 w-dyn-bind-empty"
                                    ></p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="swiper-slide w-dyn-item">
                        <div className="testimonials__card tech-variant">
                          <div className="testimonials__card-inner">
                            <div
                              style={{"backgroundColor":"#ed9315"}}
                              className="testimonials__card-bg"
                            ></div>
                            <img
                              loading="lazy"
                              width="388"
                              alt="Hive website image"
                              src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/6aa95992835bec44feecea38_hive-project%20(1).webp"
                              sizes="(max-width: 479px) 100vw, 388px"
                              srcSet="
                                https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/6aa95992835bec44feecea38_hive-project%20(1)-p-500.webp 500w,
                                https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/6aa95992835bec44feecea38_hive-project%20(1).webp       525w
                              "
                              className="testimonials__card-overview tech-variant"
                            />
                            <div
                              className="testimonials__card-caption tech-variant"
                            >
                              <img
                                loading="lazy"
                                alt="Kotryna Žukauskaitė photo"
                                src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/6722311109ddd6473f33fe99_Group%2063854.webp"
                                className="testimonials__card-avatar tech-variant"
                              />
                              <p className="testimonials__card-name">
                                Kotryna Žukauskaitė
                              </p>
                              <p
                                className="testimonials__card-position body-smaller text-uppercase"
                              >
                                Project Manager, Researcher
                              </p>
                            </div>
                            <div className="testimonials__card-inner-scroller">
                              <div className="testimonials__card-list">
                                <div
                                  className="testimonials__card-message-wrapper tech-variant"
                                >
                                  <div
                                    className="testimonials__card-message tech-variant"
                                  >
                                    <p
                                      className="testimonials__card-message-text tech-variant"
                                    >
                                      Have You sent me invoice?
                                    </p>
                                    <p
                                      className="testimonials__card-message-time tech-variant color-white-70"
                                    >
                                      4:54 PM
                                    </p>
                                  </div>
                                </div>
                                <div className="testimonials__card-message-wrapper">
                                  <div
                                    className="testimonials__card-message tech-variant"
                                  >
                                    <p
                                      className="testimonials__card-message-text tech-variant"
                                    >
                                      And once again
                                    </p>
                                    <p
                                      className="testimonials__card-message-time tech-variant color-white-70"
                                    >
                                      4:54 PM
                                    </p>
                                  </div>
                                </div>
                                <div className="testimonials__card-message-wrapper">
                                  <div
                                    className="testimonials__card-message tech-variant"
                                  >
                                    <p
                                      className="testimonials__card-message-text tech-variant"
                                    >
                                      What a great week
                                    </p>
                                    <p
                                      className="testimonials__card-message-time tech-variant color-white-70"
                                    >
                                      4:56 PM
                                    </p>
                                  </div>
                                </div>
                                <div className="testimonials__card-message-wrapper">
                                  <div
                                    className="testimonials__card-message tech-variant"
                                  >
                                    <p
                                      className="testimonials__card-message-text tech-variant"
                                    >
                                      with your fellas
                                    </p>
                                    <p
                                      className="testimonials__card-message-time tech-variant color-white-70"
                                    >
                                      4:56 PM
                                    </p>
                                  </div>
                                </div>
                                <div className="testimonials__card-message-wrapper">
                                  <div
                                    className="testimonials__card-message tech-variant"
                                  >
                                    <p
                                      className="testimonials__card-message-text tech-variant"
                                    >
                                      Great guys, perfect pro!
                                    </p>
                                    <p
                                      className="testimonials__card-message-time tech-variant color-white-70"
                                    >
                                      4:57 PM
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className="testimonials__card-message-wrapper w-condition-invisible"
                                >
                                  <div className="testimonials__card-message">
                                    <p
                                      className="testimonials__card-message-text w-dyn-bind-empty"
                                    ></p>
                                    <p
                                      className="testimonials__card-message-time body-smaller color-white-70 w-dyn-bind-empty"
                                    ></p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="swiper-slide w-dyn-item">
                        <div className="testimonials__card tech-variant">
                          <div className="testimonials__card-inner">
                            <div
                              style={{"backgroundColor":"#ffcfcf"}}
                              className="testimonials__card-bg"
                            ></div>
                            <img
                              loading="lazy"
                              width="388"
                              alt="ONELINE agency website image"
                              src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/6aa95a0dc043c50f1ab78970_one-line%20(1).webp"
                              sizes="(max-width: 479px) 100vw, 388px"
                              srcSet="
                                https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/6aa95a0dc043c50f1ab78970_one-line%20(1)-p-500.webp 500w,
                                https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/6aa95a0dc043c50f1ab78970_one-line%20(1).webp       525w
                              "
                              className="testimonials__card-overview tech-variant"
                            />
                            <div
                              className="testimonials__card-caption tech-variant"
                            >
                              <img
                                loading="lazy"
                                alt="Sami Gashi photo, ONELINE agency"
                                src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/6542649d61617fe267c93157_one-line%202.webp"
                                sizes="100vw"
                                srcSet="
                                  https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/6542649d61617fe267c93157_one-line%202-p-500.webp 500w,
                                  https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/6542649d61617fe267c93157_one-line%202.webp       512w
                                "
                                className="testimonials__card-avatar tech-variant"
                              />
                              <p className="testimonials__card-name">Sami Gashi</p>
                              <p
                                className="testimonials__card-position body-smaller text-uppercase"
                              >
                                Managing partner at One-line
                              </p>
                            </div>
                            <div className="testimonials__card-inner-scroller">
                              <div className="testimonials__card-list">
                                <div
                                  className="testimonials__card-message-wrapper tech-variant"
                                >
                                  <div
                                    className="testimonials__card-message tech-variant"
                                  >
                                    <p
                                      className="testimonials__card-message-text tech-variant"
                                    >
                                      impressive
                                    </p>
                                    <p
                                      className="testimonials__card-message-time tech-variant color-white-70"
                                    >
                                      10:10
                                    </p>
                                  </div>
                                </div>
                                <div className="testimonials__card-message-wrapper">
                                  <div
                                    className="testimonials__card-message tech-variant"
                                  >
                                    <p
                                      className="testimonials__card-message-text tech-variant"
                                    >
                                      fast and precise delivery
                                    </p>
                                    <p
                                      className="testimonials__card-message-time tech-variant color-white-70"
                                    >
                                      10:10
                                    </p>
                                  </div>
                                </div>
                                <div className="testimonials__card-message-wrapper">
                                  <div
                                    className="testimonials__card-message tech-variant"
                                  >
                                    <p
                                      className="testimonials__card-message-text tech-variant"
                                    >
                                      thanks!
                                    </p>
                                    <p
                                      className="testimonials__card-message-time tech-variant color-white-70"
                                    >
                                      10:11
                                    </p>
                                  </div>
                                </div>
                                <div className="testimonials__card-message-wrapper">
                                  <div
                                    className="testimonials__card-message tech-variant"
                                  >
                                    <p
                                      className="testimonials__card-message-text tech-variant"
                                    >
                                      you&#x27;re MACHINES!
                                    </p>
                                    <p
                                      className="testimonials__card-message-time tech-variant color-white-70"
                                    >
                                      10:11
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className="testimonials__card-message-wrapper w-condition-invisible"
                                >
                                  <div
                                    className="testimonials__card-message tech-variant"
                                  >
                                    <p
                                      className="testimonials__card-message-text tech-variant w-dyn-bind-empty"
                                    ></p>
                                    <p
                                      className="testimonials__card-message-time tech-variant color-white-70 w-dyn-bind-empty"
                                    ></p>
                                  </div>
                                </div>
                                <div
                                  className="testimonials__card-message-wrapper w-condition-invisible"
                                >
                                  <div className="testimonials__card-message">
                                    <p
                                      className="testimonials__card-message-text w-dyn-bind-empty"
                                    ></p>
                                    <p
                                      className="testimonials__card-message-time body-smaller color-white-70 w-dyn-bind-empty"
                                    ></p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="swiper-slide w-dyn-item">
                        <div className="testimonials__card tech-variant">
                          <div className="testimonials__card-inner">
                            <div
                              style={{"backgroundColor":"#ffde82"}}
                              className="testimonials__card-bg"
                            ></div>
                            <img
                              loading="lazy"
                              width="388"
                              alt="Saclab website screenshot"
                              src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/6aa958df5478b4daee425e17_SACLAB%20(2).webp"
                              sizes="(max-width: 479px) 100vw, 388px"
                              srcSet="
                                https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/6aa958df5478b4daee425e17_SACLAB%20(2)-p-500.webp 500w,
                                https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/6aa958df5478b4daee425e17_SACLAB%20(2).webp       525w
                              "
                              className="testimonials__card-overview tech-variant"
                            />
                            <div
                              className="testimonials__card-caption tech-variant"
                            >
                              <img
                                loading="lazy"
                                alt="Oliver Stueck photo, Founder of Saclab"
                                src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/64e88f60265e5590a3566315_avatar2.webp"
                                className="testimonials__card-avatar tech-variant"
                              />
                              <p className="testimonials__card-name">
                                Oliver Stueck
                              </p>
                              <p
                                className="testimonials__card-position body-smaller text-uppercase"
                              >
                                Founder of Saclab
                              </p>
                            </div>
                            <div className="testimonials__card-inner-scroller">
                              <div className="testimonials__card-list">
                                <div
                                  className="testimonials__card-message-wrapper tech-variant"
                                >
                                  <div
                                    className="testimonials__card-message tech-variant"
                                  >
                                    <p
                                      className="testimonials__card-message-text tech-variant"
                                    >
                                      Oh, it’s ready
                                    </p>
                                    <p
                                      className="testimonials__card-message-time tech-variant color-white-70"
                                    >
                                      4:54 PM
                                    </p>
                                  </div>
                                </div>
                                <div className="testimonials__card-message-wrapper">
                                  <div
                                    className="testimonials__card-message tech-variant"
                                  >
                                    <p
                                      className="testimonials__card-message-text tech-variant"
                                    >
                                      Does what it should
                                    </p>
                                    <p
                                      className="testimonials__card-message-time tech-variant color-white-70"
                                    >
                                      4:54 PM
                                    </p>
                                  </div>
                                </div>
                                <div className="testimonials__card-message-wrapper">
                                  <div
                                    className="testimonials__card-message tech-variant"
                                  >
                                    <p
                                      className="testimonials__card-message-text tech-variant"
                                    >
                                      Solid work, just could be faster
                                    </p>
                                    <p
                                      className="testimonials__card-message-time tech-variant color-white-70"
                                    >
                                      4:56 PM
                                    </p>
                                  </div>
                                </div>
                                <div className="testimonials__card-message-wrapper">
                                  <div
                                    className="testimonials__card-message tech-variant"
                                  >
                                    <p
                                      className="testimonials__card-message-text tech-variant"
                                    >
                                      Thanks for the effort
                                    </p>
                                    <p
                                      className="testimonials__card-message-time tech-variant color-white-70"
                                    >
                                      4:56 PM
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className="testimonials__card-message-wrapper w-condition-invisible"
                                >
                                  <div
                                    className="testimonials__card-message tech-variant"
                                  >
                                    <p
                                      className="testimonials__card-message-text tech-variant w-dyn-bind-empty"
                                    ></p>
                                    <p
                                      className="testimonials__card-message-time tech-variant color-white-70 w-dyn-bind-empty"
                                    ></p>
                                  </div>
                                </div>
                                <div
                                  className="testimonials__card-message-wrapper w-condition-invisible"
                                >
                                  <div className="testimonials__card-message">
                                    <p
                                      className="testimonials__card-message-text w-dyn-bind-empty"
                                    ></p>
                                    <p
                                      className="testimonials__card-message-time body-smaller color-white-70 w-dyn-bind-empty"
                                    ></p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="swiper-slide w-dyn-item">
                        <div className="testimonials__card tech-variant">
                          <div className="testimonials__card-inner">
                            <div
                              style={{"backgroundColor":"#a0eeb0"}}
                              className="testimonials__card-bg"
                            ></div>
                            <img
                              loading="lazy"
                              width="388"
                              alt="Beste-kredittkort.no website screenshot"
                              src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/662a3cbb220a8a5f47466444_NEW.webp"
                              className="testimonials__card-overview tech-variant"
                            />
                            <div
                              className="testimonials__card-caption tech-variant"
                            >
                              <img
                                loading="lazy"
                                alt="Stian Skjelbred photo"
                                src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/64e88acd34d94c9e7d195712_avatar.webp"
                                className="testimonials__card-avatar tech-variant"
                              />
                              <p className="testimonials__card-name">
                                Stian Skjelbred
                              </p>
                              <p
                                className="testimonials__card-position body-smaller text-uppercase"
                              >
                                Norwegian internet entrepreneur
                              </p>
                            </div>
                            <div className="testimonials__card-inner-scroller">
                              <div className="testimonials__card-list">
                                <div
                                  className="testimonials__card-message-wrapper tech-variant"
                                >
                                  <div
                                    className="testimonials__card-message tech-variant"
                                  >
                                    <p
                                      className="testimonials__card-message-text tech-variant"
                                    >
                                      OMFG
                                    </p>
                                    <p
                                      className="testimonials__card-message-time tech-variant color-white-70"
                                    >
                                      4:54 PM
                                    </p>
                                  </div>
                                </div>
                                <div className="testimonials__card-message-wrapper">
                                  <div
                                    className="testimonials__card-message tech-variant"
                                  >
                                    <p
                                      className="testimonials__card-message-text tech-variant"
                                    >
                                      Holy crap
                                    </p>
                                    <p
                                      className="testimonials__card-message-time tech-variant color-white-70"
                                    >
                                      4:54 PM
                                    </p>
                                  </div>
                                </div>
                                <div className="testimonials__card-message-wrapper">
                                  <div
                                    className="testimonials__card-message tech-variant"
                                  >
                                    <p
                                      className="testimonials__card-message-text tech-variant"
                                    >
                                      This is amazing
                                    </p>
                                    <p
                                      className="testimonials__card-message-time tech-variant color-white-70"
                                    >
                                      4:54 PM
                                    </p>
                                  </div>
                                </div>
                                <div className="testimonials__card-message-wrapper">
                                  <div
                                    className="testimonials__card-message tech-variant"
                                  >
                                    <p
                                      className="testimonials__card-message-text tech-variant"
                                    >
                                      WTF!! SO NICE❤️
                                    </p>
                                    <p
                                      className="testimonials__card-message-time tech-variant color-white-70"
                                    >
                                      4:54 PM
                                    </p>
                                  </div>
                                </div>
                                <div className="testimonials__card-message-wrapper">
                                  <div
                                    className="testimonials__card-message tech-variant"
                                  >
                                    <p
                                      className="testimonials__card-message-text tech-variant"
                                    >
                                      Exactly what we wanted
                                    </p>
                                    <p
                                      className="testimonials__card-message-time tech-variant color-white-70"
                                    >
                                      4:54 PM
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className="testimonials__card-message-wrapper w-condition-invisible"
                                >
                                  <div className="testimonials__card-message">
                                    <p
                                      className="testimonials__card-message-text w-dyn-bind-empty"
                                    ></p>
                                    <p
                                      className="testimonials__card-message-time body-smaller color-white-70 w-dyn-bind-empty"
                                    ></p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slider-buttons">
                    <div className="button button_slider testimonials-slider-prev">
                      <div className="button-slider-arrow w-embed">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M15 6L9 12L15 18"
                            stroke="currentColor"
                            stroke-width="2"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="button button_slider testimonials-slider-next">
                      <div className="button-slider-arrow w-embed">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M9 6L15 12L9 18"
                            stroke="currentColor"
                            stroke-width="2"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="solutions" className="tech-customize">
              <h2
                color-word="#eb5951"
                text-split=""
                lines-slide-up=""
                color-words-index="0,1,2"
                className="tech-section-title mb-60"
              >
                businesses we serve with ai &amp; automation
              </h2>
              <div className="w-dyn-list">
                <div role="list" className="tech-service-cards w-dyn-items">
                  <div role="listitem" className="w-dyn-item">
                    <div className="tech-service-card">
                      <div
                        style={{"backgroundImage":"url('https"}}
                        className="tech-services-card-bg is-first"
                      ></div>
                      <div className="tech-service-card-icon">
                        <img
                          src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/68d52e481162e0f92ee41817_Group%2063800.svg"
                          loading="lazy"
                          alt=""
                        />
                      </div>
                      <div className="tech-service-card-caption">
                        <h3 className="tech-service-item-title">Agencies</h3>
                        <p className="text-body in-tech-service-card">
                          White-label automation with clear reporting. From chat
                          flows to content ops - fits your stack and brand,
                          without hiring overhead.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <div className="tech-service-card">
                      <div
                        style={{"backgroundImage":"url('https"}}
                        className="tech-services-card-bg is-first"
                      ></div>
                      <div className="tech-service-card-icon">
                        <img
                          src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/68d52ec3d584a70bcfbed5c1_Group%2063801.svg"
                          loading="lazy"
                          alt=""
                        />
                      </div>
                      <div className="tech-service-card-caption">
                        <h3 className="tech-service-item-title">Startups</h3>
                        <p className="text-body in-tech-service-card">
                          Automation PoC/MVP in weeks: quick learnings, early
                          ROI, scale without rebuilding the core.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <div className="tech-service-card">
                      <div
                        style={{"backgroundImage":"url('https"}}
                        className="tech-services-card-bg is-first"
                      ></div>
                      <div className="tech-service-card-icon">
                        <img
                          src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/68d52edfe5970647b0d82282_Group%2063800(1).svg"
                          loading="lazy"
                          alt=""
                        />
                      </div>
                      <div className="tech-service-card-caption">
                        <h3 className="tech-service-item-title">SMEs</h3>
                        <p className="text-body in-tech-service-card">
                          Remove manual ops: CRM/inboxes/sheets, lead routing,
                          notifications, knowledge search - your team focuses on
                          what matters.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div role="listitem" className="w-dyn-item">
                    <div className="tech-service-card">
                      <div
                        style={{"backgroundImage":"url('https"}}
                        className="tech-services-card-bg is-first"
                      ></div>
                      <div className="tech-service-card-icon">
                        <img
                          src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/68d52ed92cec1b33151e415c_Group%2063800.svg"
                          loading="lazy"
                          alt=""
                        />
                      </div>
                      <div className="tech-service-card-caption">
                        <h3 className="tech-service-item-title">Enterprises</h3>
                        <p className="text-body in-tech-service-card">
                          Governance, RBAC, observability, alerts.
                          Vendor-neutral integrations aligned with your security
                          and audit policies.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <aside className="tech-aside mobile-fixed is-sticky">
            <div className="fade-up-alt">
              <div className="cta-bn__ceo">
                <div className="hide-mob-landscape">
                  <div className="cta-bn__img">
                    <img
                      src="https://cdn.prod.website-files.com/64d20115d5be49b3874991ac/6a8dcf231353c7b454e2fb6c_alex.webp"
                      loading="lazy"
                      alt="Alex Lozitskyi photo, CEO and co-founder of Che IT Group"
                      className="img_cover"
                    />
                  </div>
                  <div className="cta-bn__content">
                    <div className="cta-bn__name">Alex Lozitsky</div>
                    <div className="cta-bn__position">Co-founder and CEO</div>
                  </div>
                </div>
                <a
                  href="/contact"
                  className="button button_smaller button_red cta-btn-contact"
                  ><strong>Contact</strong></a
                >
              </div>
            </div>
          </aside>
        </div>
        <section className="section-swis-awards v2">
          <div className="container">
            <div className="swis-awards__header narrow">
              <h2
                color-word="#eb5951"
                text-split=""
                lines-slide-up=""
                text-align="center"
                color-words-index="7,8"
                className="tech-section-title mb-24"
              >
                by choosing us you choose results and industry recognition
              </h2>
            </div>
            <div itemType="https://schema.org/Organization" itemScope={true}>
              <div className="w-dyn-list">
                <div role="list" className="awards-grid w-dyn-items">
                  <div role="listitem" className="awards-grid__item w-dyn-item">
                    <img
                      src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/69d60f52ef5be63e1ed40ec8_Clutch%20Badge.svg"
                      loading="lazy"
                      width="250"
                      height="120"
                      alt="Clutch 100 Fastest Growth 2026 award badge"
                      fetchPriority="low"
                      itemProp="award"
                      className="awards-grid__image"
                    />
                  </div>
                  <div role="listitem" className="awards-grid__item w-dyn-item">
                    <img
                      src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/6992ff34b317026334f0f317_clutch-fall-2024.svg"
                      loading="lazy"
                      width="250"
                      height="120"
                      alt="Clutch Fall 2024 award badge"
                      fetchPriority="low"
                      itemProp="award"
                      className="awards-grid__image"
                    />
                  </div>
                  <div role="listitem" className="awards-grid__item w-dyn-item">
                    <img
                      src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/6992ff47e44b7d86fb60fef3_goodfirms.svg"
                      loading="lazy"
                      width="250"
                      height="120"
                      alt="GoodFirms award badge"
                      fetchPriority="low"
                      itemProp="award"
                      className="awards-grid__image"
                    /><a
                      title="https://www.goodfirms.co/company/che-it-group"
                      href="https://www.goodfirms.co/company/che-it-group"
                      target="_blank"
                      className="awards-grid__link w-inline-block"
                    ></a>
                  </div>
                  <div role="listitem" className="awards-grid__item w-dyn-item">
                    <img
                      src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/6992ff5342652b6efb909d8d_webflow-experts.svg"
                      loading="lazy"
                      width="250"
                      height="120"
                      alt="Webflow Experts badge"
                      fetchPriority="low"
                      itemProp="award"
                      className="awards-grid__image"
                    />
                  </div>
                  <div role="listitem" className="awards-grid__item w-dyn-item">
                    <img
                      src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/6992ff80b4662dbb3dae06c0_make-partners.webp"
                      loading="lazy"
                      width="250"
                      height="120"
                      alt="Make Certified Partner badge"
                      fetchPriority="low"
                      itemProp="award"
                      className="awards-grid__image"
                    />
                  </div>
                  <div role="listitem" className="awards-grid__item w-dyn-item">
                    <img
                      src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/6992ff8f8c3cfd859518b225_awwards.svg"
                      loading="lazy"
                      width="250"
                      height="120"
                      alt="Awwards badge"
                      fetchPriority="low"
                      itemProp="award"
                      className="awards-grid__image"
                    />
                  </div>
                  <div role="listitem" className="awards-grid__item w-dyn-item">
                    <img
                      src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/6992ffa636e14f397119bf80_easol-partner.svg"
                      loading="lazy"
                      width="250"
                      height="120"
                      alt="Easol partner badge"
                      fetchPriority="low"
                      itemProp="award"
                      className="awards-grid__image"
                    />
                  </div>
                  <div role="listitem" className="awards-grid__item w-dyn-item">
                    <img
                      src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/6992ffb9a8d946d6ffa03c0c_upwork-top.svg"
                      loading="lazy"
                      width="250"
                      height="120"
                      alt="Upwork Top Rated badge"
                      fetchPriority="low"
                      itemProp="award"
                      className="awards-grid__image"
                    />
                  </div>
                  <div role="listitem" className="awards-grid__item w-dyn-item">
                    <img
                      src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/6992ffc85ccc395915d5c58a_awards.svg"
                      loading="lazy"
                      width="250"
                      height="120"
                      alt="Awards badge"
                      fetchPriority="low"
                      itemProp="award"
                      className="awards-grid__image"
                    />
                  </div>
                  <div role="listitem" className="awards-grid__item w-dyn-item">
                    <img
                      src="https://cdn.prod.website-files.com/64e875748a2cfff2e33de161/69fdd027d95e7da109da4309_rf-badge-top-Web%20Development-2026.webp"
                      loading="lazy"
                      width="250"
                      height="120"
                      alt="Top Web Development company 2026 award badge"
                      fetchPriority="low"
                      itemProp="award"
                      className="awards-grid__image"
                    /><a
                      title="https://www.rightfirms.co/company/che-it-group"
                      href="https://www.rightfirms.co/company/che-it-group"
                      target="_blank"
                      className="awards-grid__link w-inline-block"
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="tech-main-inner-wider">
          <div className="w100">
            <div className="fade-up-alt">
              <div className="cta-banner">
                <div className="cta-banner-caption">
                  <h3
                    color-word="#eb5951"
                    text-split=""
                    lines-slide-up=""
                    color-words-index="6,7"
                    className="cta-banner-title"
                  >
                    build smarter workflows with the right automation partner
                  </h3>
                </div>
                <div className="cta-banner-right">
                  <div className="fade-up-alt">
                    <div className="cta-bn__ceo">
                      <div className="cta-bn__img">
                        <img
                          src="https://cdn.prod.website-files.com/64d20115d5be49b3874991ac/6a8dcf231353c7b454e2fb6c_alex.webp"
                          loading="lazy"
                          alt="Alex Lozitskyi photo, CEO and co-founder of Che IT Group"
                          className="img_cover"
                        />
                      </div>
                      <div className="cta-bn__content">
                        <h4 className="cta-bn__name">Alex Lozitsky</h4>
                        <p className="cta-bn__position">Co-founder and CEO</p>
                      </div>
                      <div className="cta-banner-person-buttons">
                        <a
                          href="/contact"
                          className="button button_smaller button_red"
                          >Contact</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tech-main-inner margin-bottom-7-5 overflow-hidden">
          <img
            src="https://cdn.prod.website-files.com/64d20115d5be49b3874991ac/65c10674a411d43cce6bf630_content-line-3.svg"
            loading="lazy"
            alt=""
            className="tech-faq-decor"
          />
          <div className="tech-content">
            <section id="faq" className="tech-faq">
              <h2
                lines-slide-up=""
                text-split=""
                className="tech-section-title mb-60"
              >
                frequently asked questions (faq)
              </h2>
              <div className="w-dyn-list">
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
                        <div itemProp="name">
                          Do you build everything with code?
                        </div>
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
                              We start with Make/n8n/Zapier/Retool - faster and
                              cost-effective. We add custom code only where it’s
                              truly needed.
                            </p>
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
                        <div itemProp="name">
                          Where do you use AI vs. simple rules?
                        </div>
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
                              AI for classification/extraction/summarization and
                              other “fuzzy” tasks. Clear conditions and
                              transforms stay rule-based - cheaper and more
                              stable.
                            </p>
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
                        <div itemProp="name">
                          Can a human review critical steps?
                        </div>
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
                              Yes. We add confidence thresholds, manual reviews,
                              escalations, logging, and notifications.
                            </p>
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
                        <div itemProp="name">Which tools do you support?</div>
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
                              Core: Make, n8n, Zapier, Retool; integrations with
                              Slack, Gmail/Outlook, HubSpot, Pipedrive,
                              Airtable, Google Sheets, Notion, Webflow, Shopify,
                              and more.
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
      </main>
      <section
        id="contact-section"
        data-wf--form-get-in-touch--variant="base"
        data-w-id="b6791838-e1ca-29e2-6bc4-fe84a9c8f3ba"
        className="section--contact"
      >
        <div className="contact__inner">
          <img
            src="https://cdn.prod.website-files.com/64d20115d5be49b3874991ac/67b881da6e1f8edccf9d22dc_contact-bg.webp"
            loading="lazy"
            fetchPriority="low"
            alt=""
            className="contact__inner-bg"
          />
          <div className="contact__inner-left desktop">
            <div className="contact__heading">
              <div className="contact__heading-label">
                <div className="body-smaller text-uppercase section-label">
                  CONTACT US
                </div>
              </div>
              <h3 className="contact-section__title title_regular">
                let’s make the web talk about your project <br />
              </h3>
            </div>
            <div
              itemType="https://schema.org/LocalBusiness"
              itemScope={true}
              className="contact__info desktop"
            >
              <h6 itemProp="name" className="hidden">Che It Group</h6>
              <div className="contact__info-row">
                <div className="contact__info-col">
                  <div className="contact__info-title">
                    <p className="contact__info-col-title">
                      representative offices
                    </p>
                  </div>
                  <ul role="list" className="contact__info-list">
                    <li
                      itemProp="address"
                      itemScope={true}
                      itemType="https://schema.org/PostalAddress"
                      className="contact__info-item"
                    >
                      <img
                        src="https://cdn.prod.website-files.com/64d20115d5be49b3874991ac/64e5a6e0b58617f63ec7266f_SW.svg"
                        loading="lazy"
                        fetchPriority="low"
                        alt="Switzerland flag"
                        className="contact__info-item-icon"
                      />
                      <p className="contact__info-item-text">
                        SWITZERLAND, Zürich, 8004<br />Baarerstrasse 139  6300
                        Zug
                      </p>
                    </li>
                    <li
                      itemProp="address"
                      itemScope={true}
                      itemType="https://schema.org/PostalAddress"
                      className="contact__info-item"
                    >
                      <img
                        src="https://cdn.prod.website-files.com/64d20115d5be49b3874991ac/64e5a6f0ec37ccb3c8e31d49_EST.svg"
                        loading="lazy"
                        fetchPriority="low"
                        alt="Estonia flag"
                        className="contact__info-item-icon"
                      />
                      <p className="contact__info-item-text">
                        estonia, tallinn, 11317<br />Kajaka 8, office 26
                      </p>
                    </li>
                    <li
                      itemProp="address"
                      itemScope={true}
                      itemType="https://schema.org/PostalAddress"
                      className="contact__info-item"
                    >
                      <img
                        src="https://cdn.prod.website-files.com/64d20115d5be49b3874991ac/64e5a6fe3c1d8567184e50ed_NOR.svg"
                        loading="lazy"
                        fetchPriority="low"
                        alt="Norway flag"
                        className="contact__info-item-icon"
                      />
                      <p className="contact__info-item-text">
                        NORWAY, oslo, 0173<br />Fougstads gate 2
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="contact__info-col">
                  <div className="contact__info-title">
                    <p className="contact__info-col-title">development offices</p>
                  </div>
                  <ul role="list" className="contact__info-list">
                    <li
                      itemProp="address"
                      itemScope={true}
                      itemType="https://schema.org/PostalAddress"
                      className="contact__info-item"
                    >
                      <img
                        src="https://cdn.prod.website-files.com/64d20115d5be49b3874991ac/64e5a70c675568cf2da082db_UA.svg"
                        loading="lazy"
                        fetchPriority="low"
                        alt="Ukraine flag"
                        className="contact__info-item-icon"
                      />
                      <p className="contact__info-item-text">
                        ukraine, chernihiv, 14000<br />Kyivs&#x27;ka St, 11,
                        office 155
                      </p>
                    </li>
                    <li
                      itemProp="address"
                      itemScope={true}
                      itemType="https://schema.org/PostalAddress"
                      className="contact__info-item"
                    >
                      <img
                        src="https://cdn.prod.website-files.com/64d20115d5be49b3874991ac/64e5a70c675568cf2da082db_UA.svg"
                        loading="lazy"
                        fetchPriority="low"
                        alt="Ukraine flag"
                        className="contact__info-item-icon"
                      />
                      <p className="contact__info-item-text">
                        ukraine, kyiv, 04071<br />nyzhniy val str, 15, office
                        131
                      </p>
                    </li>
                    <li
                      itemProp="address"
                      itemScope={true}
                      itemType="https://schema.org/PostalAddress"
                      className="contact__info-item"
                    >
                      <img
                        src="https://cdn.prod.website-files.com/64d20115d5be49b3874991ac/64e5a70c675568cf2da082db_UA.svg"
                        loading="lazy"
                        fetchPriority="low"
                        alt="Ukraine flag"
                        className="contact__info-item-icon"
                      />
                      <p className="contact__info-item-text">
                        ukraine, lviv, 79039<br />shevchenko str, 120, office 17
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <a
                itemProp="email"
                href="mailto:hello@cheitgroup.com?subject=Contact"
                className="contact__info-email w-inline-block"
                ><div className="contact__info-item-text">
                  hello@cheitgroup.com
                </div></a
              >
            </div>
          </div>
          <div className="contact__inner-right">
            <div className="contact__form-wrapper w-form">
              <form
                id="wf-form-Contact"
                name="wf-form-Contact"
                data-name="Contact"
                method="get"
                className="contact__form"
                data-wf-page-id="69273e0a1be4c2e871bc7570"
                data-wf-element-id="b6791838-e1ca-29e2-6bc4-fe84a9c8f400"
              >
                <div className="contact__form-title">
                  <p className="body-bigger weight-600">Get in touch</p>
                  <p className="contact__form-title-subtext">
                    OUR TEAM WILL RESPOND TO YOU WITHIN 1 BUSINESS DAY
                  </p>
                </div>
                <label htmlFor="firstname" className="hidden">Name</label
                ><input
                  className="contact__form-field w-input"
                  maxLength={256}
                  name="firstname"
                  data-name="firstname"
                  placeholder="NAME"
                  type="text"
                  id="firstname"
                  required={true}
                /><label htmlFor="email" className="hidden">Email</label
                ><input
                  className="contact__form-field w-input"
                  maxLength={256}
                  name="email"
                  data-name="email"
                  placeholder="EMAIL"
                  type="email"
                  id="email"
                  required={true}
                /><label htmlFor="message" className="hidden">Message</label
                ><textarea
                  id="message"
                  name="message"
                  maxLength={5000}
                  data-name="message"
                  placeholder="MESSAGE"
                  className="contact__form-field contact__form-textarea w-input"
                ></textarea
                ><label htmlFor="target_page" className="hidden">Page URL</label
                ><input
                  className="contact__form-field hidden w-input"
                  maxLength={500}
                  name="target_page"
                  data-name="target_page"
                  placeholder=""
                  type="text"
                  id="target_page"
                /><label htmlFor="detailed_source" className="hidden"
                  >Detailed Source</label
                ><select
                  id="detailed_source"
                  name="detailed_source"
                  data-name="detailed_source"
                  className="contact__form-field hidden w-select"
                >
                  <option value="Clutch">Clutch</option>
                  <option value="Outbound LinkedIn">Outbound LinkedIn</option>
                  <option value="Upwork">Upwork</option>
                  <option value="Memberstack">Memberstack</option>
                  <option value="Other">Other</option>
                  <option value="Linktree">Linktree</option>
                  <option value="Awwwards">Awwwards</option>
                  <option value="Dribbble">Dribbble</option>
                  <option value="GoodFirms">GoodFirms</option>
                  <option value="Google">Google</option>
                </select>
                <div className="captcha-wrap"></div>
                <div className="button-wrapper contact__form-buttons">
                  <input
                    type="submit"
                    data-wait="Please wait..."
                    className="button w-button"
                    value="Send"
                  />
                </div>
                <input type="hidden" name="hutk" value="" /><input
                  type="hidden"
                  name="ipAddress"
                  value=""
                /><input type="hidden" name="pageUri" value="" /><input
                  type="hidden"
                  name="pageId"
                  value=""
                /><input type="hidden" name="pageName" value="" />
              </form>
              <div className="success-message w-form-done">
                <div className="contact__form-title">
                  <p className="body-bigger weight-600">Thanks for request!</p>
                  <p
                    className="body-smaller color-white-70 weight-600 text-uppercase contact__form-title-subtitle success-title"
                  >
                    Our team will answer you as soon as possible!
                  </p>
                </div>
                <div className="button-wrapper">
                  <a id="contact-back" href="#" className="button w-inline-block"
                    ><div>Send another request</div></a
                  >
                </div>
              </div>
              <div className="error-message w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
            <div className="contact__info mobile">
              <div className="contact__info-row">
                <div className="contact__info-col">
                  <div className="contact__info-title">
                    <p className="contact__info-col-title">development offices</p>
                  </div>
                  <ul role="list" className="contact__info-list">
                    <li className="contact__info-item">
                      <img
                        src="https://cdn.prod.website-files.com/64d20115d5be49b3874991ac/64e5a70c675568cf2da082db_UA.svg"
                        loading="lazy"
                        alt="Ukraine flag"
                        className="contact__info-item-icon"
                      />
                      <p
                        className="contact__info-item-text text-uppercase body-smaller weight-600"
                      >
                        ukraine, chernihiv, 14000<br /><strong
                          >Kyivs&#x27;ka St, 11, office 155</strong
                        >
                      </p>
                    </li>
                    <li className="contact__info-item">
                      <img
                        src="https://cdn.prod.website-files.com/64d20115d5be49b3874991ac/64e5a70c675568cf2da082db_UA.svg"
                        loading="lazy"
                        alt="Ukraine flag"
                        className="contact__info-item-icon"
                      />
                      <p
                        className="contact__info-item-text text-uppercase body-smaller weight-600"
                      >
                        ukraine, kyiv, 04071<br /><strong
                          >nyzhniy val str, 15, office 131</strong
                        >
                      </p>
                    </li>
                    <li className="contact__info-item">
                      <img
                        src="https://cdn.prod.website-files.com/64d20115d5be49b3874991ac/64e5a70c675568cf2da082db_UA.svg"
                        loading="lazy"
                        alt="Ukraine flag"
                        className="contact__info-item-icon"
                      />
                      <p
                        className="contact__info-item-text text-uppercase body-smaller weight-600"
                      >
                        ukraine, lviv, 79039<br /><strong
                          >shevchenko str, 120, office 17</strong
                        >
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="contact__info-col">
                  <div className="contact__info-title">
                    <p className="contact__info-col-title">
                      Representative offices
                    </p>
                  </div>
                  <ul role="list" className="contact__info-list">
                    <li className="contact__info-item">
                      <img
                        src="https://cdn.prod.website-files.com/64d20115d5be49b3874991ac/64e5a6e0b58617f63ec7266f_SW.svg"
                        loading="lazy"
                        alt="Switzerland flag"
                        className="contact__info-item-icon"
                      />
                      <p
                        className="contact__info-item-text text-uppercase body-smaller weight-600"
                      >
                        SWITZERLAND, Zürich, 8004<br />Baarerstrasse 139  6300
                        Zug
                      </p>
                    </li>
                    <li className="contact__info-item">
                      <img
                        src="https://cdn.prod.website-files.com/64d20115d5be49b3874991ac/64e5a6f0ec37ccb3c8e31d49_EST.svg"
                        loading="lazy"
                        alt="Estonia flag"
                        className="contact__info-item-icon"
                      />
                      <p
                        className="contact__info-item-text text-uppercase body-smaller weight-600"
                      >
                        estonia, tallinn, 11317<br />Kajaka 8, office 26
                      </p>
                    </li>
                    <li className="contact__info-item">
                      <img
                        src="https://cdn.prod.website-files.com/64d20115d5be49b3874991ac/64e5a6fe3c1d8567184e50ed_NOR.svg"
                        loading="lazy"
                        alt="Norway flag"
                        className="contact__info-item-icon"
                      />
                      <p
                        className="contact__info-item-text text-uppercase body-smaller weight-600"
                      >
                        NORWAY, oslo, 0173<br />Fougstads gate 2
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <a
                href="mailto:hello@cheitgroup.com?subject=Contact"
                className="contact__info-email w-inline-block"
                ><div
                  className="weight-600 body-smaller color-white-70 text-uppercase contact__info-email-"
                >
                  hello@cheitgroup.com
                </div></a
              >
            </div>
          </div>
        </div>
        <div className="contact__marquee">
          <div className="contact__marquee-text title_huge">
            Global innovations, Ukrainian reliability
          </div>
          <div className="contact__marquee-text title_huge">
            Global innovations, Ukrainian reliability
          </div>
        </div>
      </section>
      
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
