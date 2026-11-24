import type { Metadata } from "next";
import {
  Navbar,
  ContactSection,
  Footer,
  SmoothScroll,
  ServiceClientInteractions,
  TestimonialsSection,
} from "@/components";

export const metadata: Metadata = {
  title: "Dedicated Engineering Teams | Scale Fast with Vetted Engineers - TechForbs",
  description: "Scale your engineering velocity with dedicated senior software engineers, full-stack developers, and QA leads who integrate seamlessly into your workflow.",
  keywords: ["Dedicated developers", "dedicated engineering team", "staff augmentation", "remote software developers", "vetted engineers", "TechForbs team"],
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
<div className="service-hero-inner"><img alt="" className="service-hero-bg" loading="lazy" src="/images/services/all_ref_assets/66431c03f2ce3d3541ac6d77_Frame 63720.png"/><img alt="" className="service-hero-inner-decor" loading="lazy" src="/images/services/all_ref_assets/664319142c43bfb250429812_decor.svg"/>
<div className="service-hero__content width-47">
<div className="fade-up-alt">
<div className="services-hero-title-wrap">
<div className="title-circle service-hero_circle w-embed" data-wf--title-circle--variant="base"><svg fill="none" height="100%" preserveAspectRatio="none" viewBox="0 0 453 89" width="100%" xmlns="http://www.w3.org/2000/svg">
<path d="M316.771 87C405.472 79.7966 451 58.571 451 43.7797C451 20.7054 350.488 2 226.5 2C102.512 2 2.00001 20.7054 2.00001 43.7797C2.00001 66.8539 102.512 85.5593 226.5 85.5593C268.367 85.5593 324.621 81.9576 362.299 71.8729" stroke="#00e5ff" strokeLinecap="round" strokeWidth="3"></path>
</svg></div>
<h1 circle-index="2" circle-width="18" className="service-hero-title" lines-slide-up="" text-split="">Hire a dedicated team you can rely on</h1>
</div>
<div className="service-hero__content-text">Scale delivery without scaling payroll. Add vetted engineers or a managed squad that works like in-house - minus the overhead.</div>
<div className="button-wrap on-service-page fade-up-alt"><a className="button" href="/contact">Book a call</a></div>
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
<section className="tech-customize" id="solutions">
<h2 className="tech-section-title mb-60" color-word="#00e5ff" color-words-index="0,1" lines-slide-up="" text-split="">Who benefits from a dedicated team</h2>
<div className="w-dyn-list">
<div className="tech-service-cards w-dyn-items" role="list">
<div className="w-dyn-item" role="listitem">
<div className="tech-service-card">
<div className="tech-services-card-bg is-first" style={{ backgroundImage: "url('/images/services/all_ref_assets/68d52d57009f7380eb0f180d_tech-services-card-bg-1.png')" }}></div>
<div className="tech-service-card-icon"><img alt="" loading="lazy" src="/images/services/all_ref_assets/68d53379902c30e2b4de864c_charm_plant-pot.svg"/></div>
<div className="tech-service-card-caption">
<h3 className="tech-service-item-title">Aspiring startups eager to grow</h3>
<p className="text-body in-tech-service-card">Spin up a product squad in days - from MVP to growth. Flexible capacity as priorities shift, predictable monthly burn, and EU/US time-zone overlap so founders stay focused on GTM.</p>
</div>
</div>
</div>
<div className="w-dyn-item" role="listitem">
<div className="tech-service-card">
<div className="tech-services-card-bg is-first" style={{ backgroundImage: "url('/images/services/all_ref_assets/68d52ea3fbeee273024f9d8a_tech-services-card-bg-2.webp')" }}></div>
<div className="tech-service-card-icon"><img alt="" loading="lazy" src="/images/services/all_ref_assets/68d5338fa569956809cf873c_arrow_up.svg"/></div>
<div className="tech-service-card-caption">
<h3 className="tech-service-item-title">Small businesses looking to scale</h3>
<p className="text-body in-tech-service-card">Extend your team long-term to clear the backlog and accelerate the roadmap. No hiring overhead, steady velocity, and transparent reporting your managers can rely on.</p>
</div>
</div>
</div>
<div className="w-dyn-item" role="listitem">
<div className="tech-service-card">
<div className="tech-services-card-bg is-first" style={{ backgroundImage: "url('/images/services/all_ref_assets/68d52ef3a569956809ce0677_tech-services-card-bg-3.webp')" }}></div>
<div className="tech-service-card-icon"><img alt="" loading="lazy" src="/images/services/all_ref_assets/68d533a4aaeee04c7e13480b_solar_checklist-linear.svg"/></div>
<div className="tech-service-card-caption">
<h3 className="tech-service-item-title">Multi-task long-running projects</h3>
<p className="text-body in-tech-service-card">A persistent team that owns multiple workstreams, retains product knowledge, and ships continuously. Less context switching, better documentation, and fewer handover losses.</p>
</div>
</div>
</div>
<div className="w-dyn-item" role="listitem">
<div className="tech-service-card">
<div className="tech-services-card-bg is-first" style={{ backgroundImage: "url('/images/services/all_ref_assets/68d52d1933871d68ce3064a7_tech-services-card-bg-1.webp')" }}></div>
<div className="tech-service-card-icon"><img alt="" loading="lazy" src="/images/services/all_ref_assets/68d533bc87f45e44889c5c24_Group 1171276600.svg"/></div>
<div className="tech-service-card-caption">
<h3 className="tech-service-item-title">Large projects (split management &amp; tech workloads)</h3>
<p className="text-body in-tech-service-card">Embed PM/Tech Lead alongside your managers and run cross-functional pods. Clear SLAs, role-based access, and security/compliance baked in - without overloading internal teams.</p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="tech-services" id="services">
<h2 className="tech-section-title mb-60" color-word="#00e5ff" color-words-index="2,3,4,5" lines-slide-up="" text-split="">What do our dedicated team services include?</h2>
<ul className="tech-service-list" role="list">
<li className="tech-service-item fade-up-alt">
<div className="tech-service-item-icon w-embed"><svg fill="none" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
<path clipRule="evenodd" d="M5.27729 5.27727C7.7642 2.79039 11.2034 1.25 15 1.25C18.7966 1.25 22.2358 2.79039 24.7227 5.27728C27.2096 7.76419 28.75 11.2034 28.75 15C28.75 18.7966 27.2096 22.2358 24.7227 24.7227C22.2358 27.2096 18.7966 28.75 15 28.75C11.2034 28.75 7.7642 27.2096 5.27728 24.7227C2.7904 22.2358 1.25 18.7966 1.25 15C1.25 11.2034 2.79041 7.76419 5.27729 5.27727ZM15 3.75C11.8931 3.75 9.08229 5.00783 7.04504 7.04505C5.00782 9.08231 3.75 11.8931 3.75 15C3.75 18.1069 5.00783 20.9177 7.04505 22.9549C9.0823 24.9922 11.8931 26.25 15 26.25C18.1069 26.25 20.9177 24.9922 22.9549 22.9549C24.9922 20.9177 26.25 18.1069 26.25 15C26.25 11.8931 24.9922 9.0823 22.9549 7.04505C20.9177 5.00783 18.1069 3.75 15 3.75ZM22.1339 10.3661C22.622 10.8543 22.622 11.6457 22.1339 12.1339L14.6339 19.6339C14.1457 20.122 13.3543 20.122 12.8661 19.6339L9.11612 15.8839C8.62796 15.3957 8.62796 14.6043 9.11612 14.1161C9.60427 13.628 10.3957 13.628 10.8839 14.1161L13.75 16.9822L20.3661 10.3661C20.8543 9.87796 21.6457 9.87796 22.1339 10.3661Z" fill="#616161" fillRule="evenodd"></path>
<path clipRule="evenodd" d="M7.04504 7.04505C9.08229 5.00783 11.8931 3.75 15 3.75C18.1069 3.75 20.9177 5.00783 22.9549 7.04505C24.9922 9.0823 26.25 11.8931 26.25 15C26.25 18.1069 24.9922 20.9177 22.9549 22.9549C20.9177 24.9922 18.1069 26.25 15 26.25C11.8931 26.25 9.0823 24.9922 7.04505 22.9549C5.00783 20.9177 3.75 18.1069 3.75 15C3.75 11.8931 5.00782 9.08231 7.04504 7.04505ZM22.1339 10.3661C22.622 10.8543 22.622 11.6457 22.1339 12.1339L14.6339 19.6339C14.1457 20.122 13.3543 20.122 12.8661 19.6339L9.11612 15.8839C8.62796 15.3957 8.62796 14.6043 9.11612 14.1161C9.60427 13.628 10.3957 13.628 10.8839 14.1161L13.75 16.9822L20.3661 10.3661C20.8543 9.87796 21.6457 9.87796 22.1339 10.3661Z" fill="#A0EEB0" fillRule="evenodd"></path>
</svg></div>
<div className="service-service-item-caption">
<h3 className="tech-service-item-title">Team extension (staff augmentation)</h3>
<p className="text-body">Hire dedicated developers to extend your team for specific tasks - no recruiting, no onboarding drag. We adapt to your tools and rituals from day one.</p>
</div>
</li>
<li className="tech-service-item fade-up-alt">
<div className="tech-service-item-icon w-embed"><svg fill="none" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
<path clipRule="evenodd" d="M5.27729 5.27727C7.7642 2.79039 11.2034 1.25 15 1.25C18.7966 1.25 22.2358 2.79039 24.7227 5.27728C27.2096 7.76419 28.75 11.2034 28.75 15C28.75 18.7966 27.2096 22.2358 24.7227 24.7227C22.2358 27.2096 18.7966 28.75 15 28.75C11.2034 28.75 7.7642 27.2096 5.27728 24.7227C2.7904 22.2358 1.25 18.7966 1.25 15C1.25 11.2034 2.79041 7.76419 5.27729 5.27727ZM15 3.75C11.8931 3.75 9.08229 5.00783 7.04504 7.04505C5.00782 9.08231 3.75 11.8931 3.75 15C3.75 18.1069 5.00783 20.9177 7.04505 22.9549C9.0823 24.9922 11.8931 26.25 15 26.25C18.1069 26.25 20.9177 24.9922 22.9549 22.9549C24.9922 20.9177 26.25 18.1069 26.25 15C26.25 11.8931 24.9922 9.0823 22.9549 7.04505C20.9177 5.00783 18.1069 3.75 15 3.75ZM22.1339 10.3661C22.622 10.8543 22.622 11.6457 22.1339 12.1339L14.6339 19.6339C14.1457 20.122 13.3543 20.122 12.8661 19.6339L9.11612 15.8839C8.62796 15.3957 8.62796 14.6043 9.11612 14.1161C9.60427 13.628 10.3957 13.628 10.8839 14.1161L13.75 16.9822L20.3661 10.3661C20.8543 9.87796 21.6457 9.87796 22.1339 10.3661Z" fill="#616161" fillRule="evenodd"></path>
<path clipRule="evenodd" d="M7.04504 7.04505C9.08229 5.00783 11.8931 3.75 15 3.75C18.1069 3.75 20.9177 5.00783 22.9549 7.04505C24.9922 9.0823 26.25 11.8931 26.25 15C26.25 18.1069 24.9922 20.9177 22.9549 22.9549C20.9177 24.9922 18.1069 26.25 15 26.25C11.8931 26.25 9.0823 24.9922 7.04505 22.9549C5.00783 20.9177 3.75 18.1069 3.75 15C3.75 11.8931 5.00782 9.08231 7.04504 7.04505ZM22.1339 10.3661C22.622 10.8543 22.622 11.6457 22.1339 12.1339L14.6339 19.6339C14.1457 20.122 13.3543 20.122 12.8661 19.6339L9.11612 15.8839C8.62796 15.3957 8.62796 14.6043 9.11612 14.1161C9.60427 13.628 10.3957 13.628 10.8839 14.1161L13.75 16.9822L20.3661 10.3661C20.8543 9.87796 21.6457 9.87796 22.1339 10.3661Z" fill="#A0EEB0" fillRule="evenodd"></path>
</svg></div>
<div className="service-service-item-caption">
<h3 className="tech-service-item-title">Dedicated web team (managed)</h3>
<p className="text-body">A cross-functional squad for end-to-end web delivery - from WordPress/Webflow builds to custom apps using modern stacks.</p>
</div>
</li>
<li className="tech-service-item fade-up-alt">
<div className="tech-service-item-icon w-embed"><svg fill="none" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
<path clipRule="evenodd" d="M5.27729 5.27727C7.7642 2.79039 11.2034 1.25 15 1.25C18.7966 1.25 22.2358 2.79039 24.7227 5.27728C27.2096 7.76419 28.75 11.2034 28.75 15C28.75 18.7966 27.2096 22.2358 24.7227 24.7227C22.2358 27.2096 18.7966 28.75 15 28.75C11.2034 28.75 7.7642 27.2096 5.27728 24.7227C2.7904 22.2358 1.25 18.7966 1.25 15C1.25 11.2034 2.79041 7.76419 5.27729 5.27727ZM15 3.75C11.8931 3.75 9.08229 5.00783 7.04504 7.04505C5.00782 9.08231 3.75 11.8931 3.75 15C3.75 18.1069 5.00783 20.9177 7.04505 22.9549C9.0823 24.9922 11.8931 26.25 15 26.25C18.1069 26.25 20.9177 24.9922 22.9549 22.9549C24.9922 20.9177 26.25 18.1069 26.25 15C26.25 11.8931 24.9922 9.0823 22.9549 7.04505C20.9177 5.00783 18.1069 3.75 15 3.75ZM22.1339 10.3661C22.622 10.8543 22.622 11.6457 22.1339 12.1339L14.6339 19.6339C14.1457 20.122 13.3543 20.122 12.8661 19.6339L9.11612 15.8839C8.62796 15.3957 8.62796 14.6043 9.11612 14.1161C9.60427 13.628 10.3957 13.628 10.8839 14.1161L13.75 16.9822L20.3661 10.3661C20.8543 9.87796 21.6457 9.87796 22.1339 10.3661Z" fill="#616161" fillRule="evenodd"></path>
<path clipRule="evenodd" d="M7.04504 7.04505C9.08229 5.00783 11.8931 3.75 15 3.75C18.1069 3.75 20.9177 5.00783 22.9549 7.04505C24.9922 9.0823 26.25 11.8931 26.25 15C26.25 18.1069 24.9922 20.9177 22.9549 22.9549C20.9177 24.9922 18.1069 26.25 15 26.25C11.8931 26.25 9.0823 24.9922 7.04505 22.9549C5.00783 20.9177 3.75 18.1069 3.75 15C3.75 11.8931 5.00782 9.08231 7.04504 7.04505ZM22.1339 10.3661C22.622 10.8543 22.622 11.6457 22.1339 12.1339L14.6339 19.6339C14.1457 20.122 13.3543 20.122 12.8661 19.6339L9.11612 15.8839C8.62796 15.3957 8.62796 14.6043 9.11612 14.1161C9.60427 13.628 10.3957 13.628 10.8839 14.1161L13.75 16.9822L20.3661 10.3661C20.8543 9.87796 21.6457 9.87796 22.1339 10.3661Z" fill="#A0EEB0" fillRule="evenodd"></path>
</svg></div>
<div className="service-service-item-caption">
<h3 className="tech-service-item-title">Dedicated mobile team (managed)</h3>
<p className="text-body">iOS/Android (React Native + native modules) with Node.js back-ends - shipped by a focused team that acts as your own.</p>
</div>
</li>
</ul>
<div className="tech-benefits-buttons fade-up-alt"><a className="button button_smaller" href="/contact">Book a call</a></div>
</section>
<section className="tech-benefits" id="why-we">
<h2 className="tech-section-title mb-60" color-word="#00e5ff" color-words-index="3,4,5,6" lines-slide-up="" text-split="">What are the benefits of dedicated teams?</h2>
<ul className="tech-service-list is-2-grid margin-bottom-120" role="list">
<li className="tech-service-item fade-up-alt">
<div className="tech-service-item-icon w-embed"><svg fill="none" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
<rect fill="#00e5ff" height="17.7333" rx="1.46296" width="7.46667"></rect>
<rect fill="#00e5ff" height="7.46667" rx="1.46296" width="7.46667" x="10.2656"></rect>
<rect fill="white" fillOpacity="0.3" height="7.46667" rx="3.73333" width="7.46667" x="10.2656" y="10.2656"></rect>
<rect fill="white" fillOpacity="0.3" height="7.46667" rx="3.73333" width="7.46667" y="20.5312"></rect>
<rect fill="#585858" height="17.7333" rx="1.46296" transform="rotate(-180 28.002 28)" width="7.46667" x="28.002" y="28"></rect>
<rect fill="white" fillOpacity="0.3" height="7.46667" rx="3.73333" transform="rotate(-180 28.002 7.46484)" width="7.46667" x="28.002" y="7.46484"></rect>
<rect fill="#00e5ff" height="7.46667" rx="1.46296" width="7.46667" x="9.99609" y="20.5312"></rect>
</svg></div>
<div className="tech-service-item-caption">
<h3 className="tech-service-item-title">High adaptability</h3>
<p className="text-body">Scale the team up/down as priorities change - without disrupting delivery.</p>
</div>
</li>
<li className="tech-service-item fade-up-alt">
<div className="tech-service-item-icon w-embed"><svg fill="none" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
<rect fill="#00e5ff" height="17.7333" rx="1.46296" width="7.46667"></rect>
<rect fill="#00e5ff" height="7.46667" rx="1.46296" width="7.46667" x="10.2656"></rect>
<rect fill="white" fillOpacity="0.3" height="7.46667" rx="3.73333" width="7.46667" x="10.2656" y="10.2656"></rect>
<rect fill="white" fillOpacity="0.3" height="7.46667" rx="3.73333" width="7.46667" y="20.5312"></rect>
<rect fill="#585858" height="17.7333" rx="1.46296" transform="rotate(-180 28.002 28)" width="7.46667" x="28.002" y="28"></rect>
<rect fill="white" fillOpacity="0.3" height="7.46667" rx="3.73333" transform="rotate(-180 28.002 7.46484)" width="7.46667" x="28.002" y="7.46484"></rect>
<rect fill="#00e5ff" height="7.46667" rx="1.46296" width="7.46667" x="9.99609" y="20.5312"></rect>
</svg></div>
<div className="tech-service-item-caption">
<h3 className="tech-service-item-title">Quality you can trust</h3>
<p className="text-body">Mature engineering practices and access to modern tools - baked in.</p>
</div>
</li>
<li className="tech-service-item fade-up-alt">
<div className="tech-service-item-icon w-embed"><svg fill="none" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
<rect fill="#00e5ff" height="17.7333" rx="1.46296" width="7.46667"></rect>
<rect fill="#00e5ff" height="7.46667" rx="1.46296" width="7.46667" x="10.2656"></rect>
<rect fill="white" fillOpacity="0.3" height="7.46667" rx="3.73333" width="7.46667" x="10.2656" y="10.2656"></rect>
<rect fill="white" fillOpacity="0.3" height="7.46667" rx="3.73333" width="7.46667" y="20.5312"></rect>
<rect fill="#585858" height="17.7333" rx="1.46296" transform="rotate(-180 28.002 28)" width="7.46667" x="28.002" y="28"></rect>
<rect fill="white" fillOpacity="0.3" height="7.46667" rx="3.73333" transform="rotate(-180 28.002 7.46484)" width="7.46667" x="28.002" y="7.46484"></rect>
<rect fill="#00e5ff" height="7.46667" rx="1.46296" width="7.46667" x="9.99609" y="20.5312"></rect>
</svg></div>
<div className="tech-service-item-caption">
<h3 className="tech-service-item-title">Cost transparency</h3>
<p className="text-body">Predictable monthly burn; no hidden recruiting, training, or overhead costs.</p>
</div>
</li>
<li className="tech-service-item fade-up-alt">
<div className="tech-service-item-icon w-embed"><svg fill="none" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
<rect fill="#00e5ff" height="17.7333" rx="1.46296" width="7.46667"></rect>
<rect fill="#00e5ff" height="7.46667" rx="1.46296" width="7.46667" x="10.2656"></rect>
<rect fill="white" fillOpacity="0.3" height="7.46667" rx="3.73333" width="7.46667" x="10.2656" y="10.2656"></rect>
<rect fill="white" fillOpacity="0.3" height="7.46667" rx="3.73333" width="7.46667" y="20.5312"></rect>
<rect fill="#585858" height="17.7333" rx="1.46296" transform="rotate(-180 28.002 28)" width="7.46667" x="28.002" y="28"></rect>
<rect fill="white" fillOpacity="0.3" height="7.46667" rx="3.73333" transform="rotate(-180 28.002 7.46484)" width="7.46667" x="28.002" y="7.46484"></rect>
<rect fill="#00e5ff" height="7.46667" rx="1.46296" width="7.46667" x="9.99609" y="20.5312"></rect>
</svg></div>
<div className="tech-service-item-caption">
<h3 className="tech-service-item-title">Proven experience</h3>
<p className="text-body">Specialists with multi-project track records across domains and technologies.</p>
</div>
</li>
</ul>
<h2 className="tech-section-title mb-60" color-word="#00e5ff" color-words-index="4,5" lines-slide-up="" text-split="">Winning with us: Our clients' success</h2>
<div className="cases-wrap is-services-page">
<div className="swiper cases-slider w-dyn-list">
<div className="swiper-wrapper w-dyn-items" itemScope={true} itemType="https://schema.org/ItemList" role="list">
<div className="swiper-slide w-dyn-item" itemProp="itemListElement" itemScope={true} itemType="https://schema.org/CreativeWork" role="listitem">
<div className="case-item is-no-link">
<a className="case-item_link w-inline-block" href="/portfolio/saclab">
<div className="hidden">from 0 to 100: the story behind Saclab </div>
</a>
<div className="case-item-image" style={{ backgroundColor: "#d9d9d9" }}><img alt="" className="case-item-circles" height="439" loading="lazy" src="/images/services/all_ref_assets/66335e1b00f641134b6bcbef_case-bg.svg" width="416"/><img alt="Saclàb bags marketplace homepage screenshot, portfolio project of TechForbs" className="case-item-thumb min-height" height="618" itemProp="image" loading="lazy" src="/images/services/all_ref_assets/67ebafd836b1d570f0f5cccb_7.webp" width="745"/></div>
<h4 className="case-item-title" itemProp="headline">From 0 to 100: The story behind saclab</h4>
<p className="case-item-excerpt hidden" itemProp="description">Today this marketplace operates in over 20 countries</p>
<div className="case-item_tags">
<div className="w-dyn-list">
<div className="cms-tag_list w-dyn-items" role="list">
<div className="cms-tag w-dyn-item" role="listitem">
<div fs-list-field="industry">E-commerce</div>
</div>
<div className="cms-tag w-dyn-item" role="listitem">
<div fs-list-field="industry">Retail</div>
</div>
</div>
</div>
<div className="w-dyn-list">
<div className="cms-tag_list w-dyn-items" role="list">
<div className="cms-tag w-dyn-item" role="listitem">
<div fs-list-field="сapability">Data &amp; Analytics</div>
</div>
<div className="cms-tag w-dyn-item" role="listitem">
<div fs-list-field="сapability">UX/UI</div>
</div>
<div className="cms-tag w-dyn-item" role="listitem">
<div fs-list-field="сapability">SEO</div>
</div>
</div>
</div>
</div>
<div className="hidden">
<div fs-cmsfilter-field="country">Germany</div>
<div fs-cmsfilter-field="techstack">WordPress</div>
<div fs-cmsfilter-field="techstack">WooCommerce</div>
<div className="w-dyn-bind-empty" fs-cmsfilter-field="techstack"></div>
</div>
</div>
</div>
<div className="swiper-slide w-dyn-item" itemProp="itemListElement" itemScope={true} itemType="https://schema.org/CreativeWork" role="listitem">
<div className="case-item is-no-link">
<a className="case-item_link w-inline-block" href="/portfolio/harley-davidson">
<div className="hidden">custom CRM development for Harley Davidson</div>
</a>
<div className="case-item-image" style={{ backgroundColor: "#f96601" }}><img alt="" className="case-item-circles" height="439" loading="lazy" src="/images/services/all_ref_assets/66335e1b00f641134b6bcbef_case-bg.svg" width="416"/><img alt="Bütikofer Harley-Davidson Zürich personalized landing page screenshot, portfolio project of TechForbs" className="case-item-thumb min-height" height="618" itemProp="image" loading="lazy" src="/images/services/all_ref_assets/67ebaf9e43a6b4badaf09631_6.jpg" width="745"/></div>
<h4 className="case-item-title" itemProp="headline">Custom CRM development for harley davidson</h4>
<p className="case-item-excerpt hidden w-condition-invisible w-dyn-bind-empty" itemProp="description"></p>
<div className="case-item_tags">
<div className="w-dyn-list">
<div className="cms-tag_list w-dyn-items" role="list">
<div className="cms-tag w-dyn-item" role="listitem">
<div fs-list-field="industry">Automotive</div>
</div>
<div className="cms-tag w-dyn-item" role="listitem">
<div fs-list-field="industry">Retail</div>
</div>
</div>
</div>
<div className="w-dyn-list">
<div className="cms-tag_list w-dyn-items" role="list">
<div className="cms-tag w-dyn-item" role="listitem">
<div fs-list-field="сapability">CRM development</div>
</div>
<div className="cms-tag w-dyn-item" role="listitem">
<div fs-list-field="сapability">Data &amp; Analytics</div>
</div>
<div className="cms-tag w-dyn-item" role="listitem">
<div fs-list-field="сapability">AI &amp; Automation</div>
</div>
</div>
</div>
</div>
<div className="hidden">
<div fs-cmsfilter-field="country">Switzerland</div>
<div fs-cmsfilter-field="techstack">PHP</div>
<div className="w-dyn-bind-empty" fs-cmsfilter-field="techstack"></div>
<div className="w-dyn-bind-empty" fs-cmsfilter-field="techstack"></div>
</div>
</div>
</div>
<div className="swiper-slide w-dyn-item" itemProp="itemListElement" itemScope={true} itemType="https://schema.org/CreativeWork" role="listitem">
<div className="case-item is-no-link">
<a className="case-item_link w-inline-block" href="/portfolio/roken">
<div className="hidden">Rocken.jobs portal &amp; CRM development from scratch</div>
</a>
<div className="case-item-image" style={{ backgroundColor: "#4893f4" }}><img alt="" className="case-item-circles" height="439" loading="lazy" src="/images/services/all_ref_assets/66335e1b00f641134b6bcbef_case-bg.svg" width="416"/><img alt="Rocken homepage screenshot, portfolio project for a Swiss job matching platform" className="case-item-thumb min-height" height="618" itemProp="image" loading="lazy" src="/images/services/all_ref_assets/69cf8099fd61ff0874db3173_(745x618)%20(1).webp" width="745"/></div>
<h4 className="case-item-title" itemProp="headline">Rocken.jobs portal &amp; CRM development from scratch</h4>
<p className="case-item-excerpt hidden" itemProp="description">Built for the leading recruitment agency it now boasts 130k users/mo</p>
<div className="case-item_tags">
<div className="w-dyn-list">
<div className="cms-tag_list w-dyn-items" role="list">
<div className="cms-tag w-dyn-item" role="listitem">
<div fs-list-field="industry">HR tech</div>
</div>
<div className="cms-tag w-dyn-item" role="listitem">
<div fs-list-field="industry">Web portals</div>
</div>
</div>
</div>
<div className="w-dyn-list">
<div className="cms-tag_list w-dyn-items" role="list">
<div className="cms-tag w-dyn-item" role="listitem">
<div fs-list-field="сapability">Systems Integration</div>
</div>
<div className="cms-tag w-dyn-item" role="listitem">
<div fs-list-field="сapability">CRM development</div>
</div>
<div className="cms-tag w-dyn-item" role="listitem">
<div fs-list-field="сapability">Data &amp; Analytics</div>
</div>
</div>
</div>
</div>
<div className="hidden">
<div fs-cmsfilter-field="country">Switzerland</div>
<div fs-cmsfilter-field="techstack">AI</div>
<div fs-cmsfilter-field="techstack">WordPress</div>
<div fs-cmsfilter-field="techstack">Laravel</div>
</div>
</div>
</div>
<div className="swiper-slide w-dyn-item" itemProp="itemListElement" itemScope={true} itemType="https://schema.org/CreativeWork" role="listitem">
<div className="case-item is-no-link">
<a className="case-item_link w-inline-block" href="/portfolio/brotherfilm">
<div className="hidden">Brother Film Co: where creativity meets code</div>
</a>
<div className="case-item-image" style={{ backgroundColor: "#f3221c" }}><img alt="" className="case-item-circles" height="439" loading="lazy" src="/images/services/all_ref_assets/66335e1b00f641134b6bcbef_case-bg.svg" width="416"/><img alt="Brother Film homepage screenshot, portfolio project for a creative production company" className="case-item-thumb min-height" height="618" itemProp="image" loading="lazy" src="/images/services/all_ref_assets/67bf21e1791d368d24bcbe49_brothers-case.jpg" width="745"/></div>
<h4 className="case-item-title" itemProp="headline">Brother film co: Where creativity meets code</h4>
<p className="case-item-excerpt hidden w-condition-invisible w-dyn-bind-empty" itemProp="description"></p>
<div className="case-item_tags">
<div className="w-dyn-list">
<div className="cms-tag_list w-dyn-items" role="list">
<div className="cms-tag w-dyn-item" role="listitem">
<div fs-list-field="industry">Telecom &amp; Media</div>
</div>
<div className="cms-tag w-dyn-item" role="listitem">
<div fs-list-field="industry">Entertainment</div>
</div>
</div>
</div>
<div className="w-dyn-list">
<div className="cms-tag_list w-dyn-items" role="list">
<div className="cms-tag w-dyn-item" role="listitem">
<div fs-list-field="сapability">UX/UI</div>
</div>
<div className="cms-tag w-dyn-item" role="listitem">
<div fs-list-field="сapability">Systems Integration</div>
</div>
<div className="cms-tag w-dyn-item" role="listitem">
<div fs-list-field="сapability">AI &amp; Automation</div>
</div>
</div>
</div>
</div>
<div className="hidden">
<div fs-cmsfilter-field="country">UK</div>
<div fs-cmsfilter-field="techstack">Wordpress</div>
<div fs-cmsfilter-field="techstack">PHP</div>
<div className="w-dyn-bind-empty" fs-cmsfilter-field="techstack"></div>
</div>
</div>
</div>
<div className="swiper-slide w-dyn-item" itemProp="itemListElement" itemScope={true} itemType="https://schema.org/CreativeWork" role="listitem">
<div className="case-item is-no-link">
<a className="case-item_link w-inline-block" href="/portfolio/havas">
<div className="hidden">elevating Meaningful Brands (Havas) with advanced web development</div>
</a>
<div className="case-item-image" style={{ backgroundColor: "#ec000e" }}><img alt="" className="case-item-circles" height="439" loading="lazy" src="/images/services/all_ref_assets/66335e1b00f641134b6bcbef_case-bg.svg" width="416"/><img alt="Havas (Meaningful Brands) homepage screenshot, portfolio project for a market research report site" className="case-item-thumb min-height" height="618" itemProp="image" loading="lazy" src="/images/services/all_ref_assets/67ebaf4f060e71cf7fd41ac3_4.jpg" width="745"/></div>
<h4 className="case-item-title" itemProp="headline">Elevating meaningful brands (havas) with advanced web development</h4>
<p className="case-item-excerpt hidden w-condition-invisible w-dyn-bind-empty" itemProp="description"></p>
<div className="case-item_tags">
<div className="w-dyn-list">
<div className="cms-tag_list w-dyn-items" role="list">
<div className="cms-tag w-dyn-item" role="listitem">
<div fs-list-field="industry">Telecom &amp; Media</div>
</div>
<div className="cms-tag w-dyn-item" role="listitem">
<div fs-list-field="industry">Marketing &amp; Advertising </div>
</div>
</div>
</div>
<div className="w-dyn-list">
<div className="cms-tag_list w-dyn-items" role="list">
<div className="cms-tag w-dyn-item" role="listitem">
<div fs-list-field="сapability">UX/UI</div>
</div>
<div className="cms-tag w-dyn-item" role="listitem">
<div fs-list-field="сapability">Data &amp; Analytics</div>
</div>
</div>
</div>
</div>
<div className="hidden">
<div fs-cmsfilter-field="country">France</div>
<div fs-cmsfilter-field="techstack">WordPress</div>
<div className="w-dyn-bind-empty" fs-cmsfilter-field="techstack"></div>
<div className="w-dyn-bind-empty" fs-cmsfilter-field="techstack"></div>
</div>
</div>
</div>
</div>
</div>
<div className="slider-buttons slider-buttons_portfolio">
<div className="button button_slider swis-portfolio-prev">
<div className="button-slider-arrow w-embed"><svg fill="none" height="100%" viewBox="0 0 24 24" width="100%" xmlns="http://www.w3.org/2000/svg">
<path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="2"></path>
</svg></div>
</div>
<div className="button button_slider swis-portfolio-next">
<div className="button-slider-arrow w-embed"><svg fill="none" height="100%" viewBox="0 0 24 24" width="100%" xmlns="http://www.w3.org/2000/svg">
<path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2"></path>
</svg></div>
</div>
</div>
</div>
<div className="fade-up-alt">
<div className="tech-benefits-buttons"><a className="button" href="/portfolio" target="_blank">View all</a></div>
</div>
</section>
<section className="tech-services" id="services">
<h2 className="tech-section-title mb-60" color-word="#00e5ff" color-words-index="3" lines-slide-up="" text-split="">Why teams pick techforbs</h2>
<ul className="tech-service-list" role="list">
<li className="tech-service-item fade-up-alt">
<div className="tech-service-item-icon is-large w-embed"><svg fill="none" height="100%" viewBox="0 0 48 48" width="100%" xmlns="http://www.w3.org/2000/svg">
<rect height="47.2258" rx="13.5484" stroke="#FAFAFA" strokeOpacity="0.3" strokeWidth="0.774194" width="47.2258" x="0.387097" y="0.387097"></rect>
<path d="M21.959 25.4158C22.301 25.4161 22.5781 25.6937 22.5777 26.0357L22.5716 32.5666C22.5711 33.1184 21.9037 33.3941 21.5139 33.0036L14.9891 26.4665C14.5993 26.076 14.8763 25.4091 15.4281 25.4096L21.959 25.4158Z" fill="white" fillOpacity="0.3"></path>
<path d="M22.5863 15.1583C22.9284 15.1586 23.2054 15.4362 23.2051 15.7782L23.1989 22.3091C23.1984 22.8609 22.531 23.1366 22.1412 22.7461L15.6165 16.2091C15.2267 15.8185 15.5036 15.1516 16.0554 15.1522L22.5863 15.1583Z" fill="white" fillOpacity="0.3"></path>
<path d="M32.4576 25.2321C32.7997 25.2324 33.0767 25.51 33.0764 25.8521L33.0703 32.383C33.0697 32.9348 32.4023 33.2105 32.0125 32.8199L25.4878 26.2829C25.098 25.8923 25.3749 25.2255 25.9267 25.226L32.4576 25.2321Z" fill="white" fillOpacity="0.3"></path>
<path d="M33.0847 15.1681C33.4268 15.1685 33.7038 15.446 33.7035 15.7881L33.6973 22.319C33.6968 22.8708 33.0294 23.1465 32.6396 22.7559L26.1149 16.2189C25.7251 15.8283 26.002 15.1615 26.5538 15.162L33.0847 15.1681Z" fill="#00e5ff"></path>
</svg></div>
<div className="tech-service-item-caption">
<h3 className="tech-service-item-title">Communication you can rely on</h3>
<p className="text-body">Proactive updates, structured reporting, and smooth handovers. Feels in‑house - without hiring overhead.</p>
</div>
</li>
<li className="tech-service-item fade-up-alt">
<div className="tech-service-item-icon is-large w-embed"><svg fill="none" height="100%" viewBox="0 0 48 48" width="100%" xmlns="http://www.w3.org/2000/svg">
<rect height="47.2258" rx="13.5484" stroke="#FAFAFA" strokeOpacity="0.3" strokeWidth="0.774194" width="47.2258" x="0.387097" y="0.387097"></rect>
<circle cx="27.5681" cy="21.5266" fill="white" fillOpacity="0.3" r="6.40072" transform="rotate(-45 27.5681 21.5266)"></circle>
<circle cx="21.5272" cy="27.5677" fill="#00e5ff" r="8.11557" transform="rotate(-45 21.5272 27.5677)"></circle>
</svg></div>
<div className="tech-service-item-caption">
<h3 className="tech-service-item-title">Speed without chaos</h3>
<p className="text-body">Launch without delays or downtime; we plan for stable growth from day one.</p>
</div>
</li>
<li className="tech-service-item fade-up-alt">
<div className="tech-service-item-icon is-large w-embed"><svg fill="none" height="100%" viewBox="0 0 48 48" width="100%" xmlns="http://www.w3.org/2000/svg">
<rect height="47.2258" rx="13.5484" stroke="#FAFAFA" strokeOpacity="0.3" strokeWidth="0.774194" width="47.2258" x="0.387097" y="0.387097"></rect>
<path d="M19.3238 16.4124L31.1745 28.263L28.1088 31.3286L16.2582 19.478L19.3238 16.4124Z" fill="white" opacity="0.3"></path>
<rect fill="#00e5ff" height="8.51613" rx="4.25806" width="8.51613" x="12.3871" y="12.3872"></rect>
<rect fill="white" height="6.96774" opacity="0.3" rx="3.48387" width="6.96774" x="13.1613" y="27.8711"></rect>
<rect fill="white" height="6.96774" opacity="0.3" rx="3.48387" width="6.96774" x="27.871" y="13.1614"></rect>
<rect fill="#00e5ff" height="8.51613" rx="4.25806" width="8.51613" x="27.0968" y="27.0969"></rect>
</svg></div>
<div className="tech-service-item-caption">
<h3 className="tech-service-item-title">Predictable &amp; secure delivery</h3>
<p className="text-body">Clear scope control, NDA, limited access, and backups - so your IP stays safe.</p>
</div>
</li>
</ul>
<div className="team__lottieanim">
<div className="team__grid__wrap">
<div className="hidden w-embed">

</div>
<div className="w-dyn-list">
<div className="team__grid in-service-page w-dyn-items" role="list">
<div className="team__grid_item state_v0_mod w-dyn-item" role="listitem">
<div className="team__grid_pic_wrap">
<div className="team__grid_pic w-condition-invisible"><img alt="" className="team__grid_img w-dyn-bind-empty" loading="lazy" src=""/></div>
<div className="team__grid_pic w-condition-invisible"><img alt="" className="team__grid_img w-dyn-bind-empty" loading="eager" src=""/></div>
</div>
</div>
<div className="team__grid_item state_v0_mod w-dyn-item" role="listitem">
<div className="team__grid_pic_wrap">
<div className="team__grid_pic"><img alt="" className="team__grid_img" loading="lazy" src="/images/services/all_ref_assets/68b16384bc82562dbb06e978_item6.jpg"/></div>
<div className="team__grid_pic"><img alt="TechForbs team member works on terrace" className="team__grid_img" loading="eager" src="/images/services/all_ref_assets/654d32a3c70833d9812a979a_image1.webp"/></div>
</div>
</div>
<div className="team__grid_item state_v0_mod w-dyn-item" role="listitem">
<div className="team__grid_pic_wrap">
<div className="team__grid_pic"><img alt="TechForbs team on bicycles on the street" className="team__grid_img" loading="lazy" src="/images/services/all_ref_assets/68b16408edee885012895bc1_item7.jpg"/></div>
<div className="team__grid_pic w-condition-invisible"><img alt="" className="team__grid_img w-dyn-bind-empty" loading="eager" src=""/></div>
</div>
</div>
<div className="team__grid_item state_v0_mod w-dyn-item" role="listitem">
<div className="team__grid_pic_wrap">
<div className="team__grid_pic"><img alt="TechForbs team meet" className="team__grid_img" loading="lazy" src="/images/services/all_ref_assets/68b1642724ef4f812b34ab8d_item8.jpg"/></div>
<div className="team__grid_pic w-condition-invisible"><img alt="" className="team__grid_img w-dyn-bind-empty" loading="eager" src=""/></div>
</div>
</div>
<div className="team__grid_item state_v0_mod w-dyn-item" role="listitem">
<div className="team__grid_pic_wrap">
<div className="team__grid_pic"><img alt="TechForbs team photo in front of building" className="team__grid_img" loading="lazy" src="/images/services/all_ref_assets/68b1635694cdf6c0f3622d66_item5.jpg"/></div>
<div className="team__grid_pic"><img alt="TechForbs team meeting" className="team__grid_img" loading="eager" src="/images/services/all_ref_assets/68b16705d6aec8cc05df963c_image6.webp"/></div>
</div>
</div>
<div className="team__grid_item state_v0_mod w-dyn-item" role="listitem">
<div className="team__grid_pic_wrap w-condition-invisible">
<div className="team__grid_pic w-condition-invisible"><img alt="" className="team__grid_img w-dyn-bind-empty" loading="lazy" src=""/></div>
<div className="team__grid_pic w-condition-invisible"><img alt="" className="team__grid_img w-dyn-bind-empty" loading="eager" src=""/></div>
</div>
</div>
<div className="team__grid_item state_v0_mod w-dyn-item" role="listitem">
<div className="team__grid_pic_wrap">
<div className="team__grid_pic w-condition-invisible"><img alt="" className="team__grid_img w-dyn-bind-empty" loading="lazy" src=""/></div>
<div className="team__grid_pic w-condition-invisible"><img alt="" className="team__grid_img w-dyn-bind-empty" loading="eager" src=""/></div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="tech-benefits-buttons fade-up-alt"><a className="button button_smaller" href="#contact-section">Get expert advice</a></div>
</section>
<section className="tech-ecosystem" id="ecosystem">
<h2 className="tech-section-title mb-24" color-word="#00e5ff" color-words-index="1,2,3,4" lines-slide-up="" text-split="">Technologies we use in development</h2>
<div className="fade-up-alt">
<p className="tech-section-subtext mb-60">When you hire TechForbs, you get confidence that only advanced tools and technologies will be used in your project, such as:</p>
</div>
<div className="fade-up-alt">
<div className="tech-slider-wrap">
<div className="swiper tech-slider w-dyn-list">
<div className="tech-ecosystem-grid swiper-wrapper w-dyn-items" role="list">
<div className="swiper-slide w-dyn-item" role="listitem">
<a className="tech-ecosystem-item w-inline-block" href="/technologies/webflow">
<div className="tech-ecosystem-item-image-wrap"><img alt="" className="tech-ecosystem-item-image" loading="lazy" src="/images/services/all_ref_assets/6630d584f41fff43f25a1b5f_webflow.svg"/></div>
<div className="tech-ecosystem-item-divider"></div>
<div className="tech-ecosystem-item-title">Webflow</div>
</a>
</div>
<div className="swiper-slide w-dyn-item" role="listitem">
<a className="tech-ecosystem-item w-inline-block" href="#">
<div className="tech-ecosystem-item-image-wrap"><img alt="Laravel logo" className="tech-ecosystem-item-image" loading="lazy" src="/images/services/all_ref_assets/6630d61c4c4edfd2fc11e5c4_laravel.svg"/></div>
<div className="tech-ecosystem-item-divider"></div>
<div className="tech-ecosystem-item-title">Laravel</div>
</a>
</div>
<div className="swiper-slide w-dyn-item" role="listitem">
<a className="tech-ecosystem-item w-inline-block" href="/technologies/shopify">
<div className="tech-ecosystem-item-image-wrap"><img alt="Shopify logo" className="tech-ecosystem-item-image" loading="lazy" src="/images/services/all_ref_assets/6630d6857a8936e1553d8ccd_shopify.svg"/></div>
<div className="tech-ecosystem-item-divider"></div>
<div className="tech-ecosystem-item-title">Shopify</div>
</a>
</div>
<div className="swiper-slide w-dyn-item" role="listitem">
<a className="tech-ecosystem-item w-inline-block" href="#">
<div className="tech-ecosystem-item-image-wrap"><img alt="Vue.js logo" className="tech-ecosystem-item-image" loading="lazy" src="/images/services/all_ref_assets/6630d66016e3c1e0bd90b74b_vue.svg"/></div>
<div className="tech-ecosystem-item-divider"></div>
<div className="tech-ecosystem-item-title">Vue.js</div>
</a>
</div>
<div className="swiper-slide w-dyn-item" role="listitem">
<a className="tech-ecosystem-item w-inline-block" href="/technologies/react">
<div className="tech-ecosystem-item-image-wrap"><img alt="React logo" className="tech-ecosystem-item-image" loading="lazy" src="/images/services/all_ref_assets/6630d66d0647b6814a27b6ee_react.svg"/></div>
<div className="tech-ecosystem-item-divider"></div>
<div className="tech-ecosystem-item-title">React</div>
</a>
</div>
<div className="swiper-slide w-dyn-item" role="listitem">
<a className="tech-ecosystem-item w-inline-block" href="#">
<div className="tech-ecosystem-item-image-wrap"><img alt="Javascript logo" className="tech-ecosystem-item-image" loading="lazy" src="/images/services/all_ref_assets/6630d64b5ca6d1340331eac7_js.svg"/></div>
<div className="tech-ecosystem-item-divider"></div>
<div className="tech-ecosystem-item-title">Javascript</div>
</a>
</div>
<div className="swiper-slide w-dyn-item" role="listitem">
<a className="tech-ecosystem-item w-inline-block" href="#">
<div className="tech-ecosystem-item-image-wrap"><img alt="" className="tech-ecosystem-item-image" loading="lazy" src="/images/services/all_ref_assets/694546ecd48fb9224ffcc5c1_stripe-4 1.svg"/></div>
<div className="tech-ecosystem-item-divider"></div>
<div className="tech-ecosystem-item-title">Stripe</div>
</a>
</div>
<div className="swiper-slide w-dyn-item" role="listitem">
<a className="tech-ecosystem-item w-inline-block" href="/technologies/wordpress-development-agency">
<div className="tech-ecosystem-item-image-wrap"><img alt="" className="tech-ecosystem-item-image" loading="lazy" src="/images/services/all_ref_assets/6630d5a5b62a8455439f1318_WP.svg"/></div>
<div className="tech-ecosystem-item-divider"></div>
<div className="tech-ecosystem-item-title">Wordpress</div>
</a>
</div>
<div className="swiper-slide w-dyn-item" role="listitem">
<a className="tech-ecosystem-item w-inline-block" href="#">
<div className="tech-ecosystem-item-image-wrap"><img alt="" className="tech-ecosystem-item-image" loading="lazy" src="/images/services/all_ref_assets/6630d5b9c545b82b5879534e_ajax.svg"/></div>
<div className="tech-ecosystem-item-divider"></div>
<div className="tech-ecosystem-item-title">Ajax</div>
</a>
</div>
<div className="swiper-slide w-dyn-item" role="listitem">
<a className="tech-ecosystem-item w-inline-block" href="/technologies/woocommerce">
<div className="tech-ecosystem-item-image-wrap"><img alt="" className="tech-ecosystem-item-image" loading="lazy" src="/images/services/all_ref_assets/6630d5cab82a882007ef0874_woocommerce.svg"/></div>
<div className="tech-ecosystem-item-divider"></div>
<div className="tech-ecosystem-item-title">Woocommerce</div>
</a>
</div>
<div className="swiper-slide w-dyn-item" role="listitem">
<a className="tech-ecosystem-item w-inline-block" href="/technologies/php">
<div className="tech-ecosystem-item-image-wrap"><img alt="PHP logo" className="tech-ecosystem-item-image" loading="lazy" src="/images/services/all_ref_assets/6630d6045fbfda9693dbdab9_php.svg"/></div>
<div className="tech-ecosystem-item-divider"></div>
<div className="tech-ecosystem-item-title">Php</div>
</a>
</div>
<div className="swiper-slide w-dyn-item" role="listitem">
<a className="tech-ecosystem-item w-inline-block" href="#">
<div className="tech-ecosystem-item-image-wrap"><img alt="Yii logo" className="tech-ecosystem-item-image" loading="lazy" src="/images/services/all_ref_assets/6630d63816e3c1e0bd909d20_yii.svg"/></div>
<div className="tech-ecosystem-item-divider"></div>
<div className="tech-ecosystem-item-title">Yii2</div>
</a>
</div>
</div>
</div>
<div className="slider-buttons">
<div className="button button_slider tech-slider-prev">
<div className="button-slider-arrow w-embed"><svg fill="none" height="100%" viewBox="0 0 24 24" width="100%" xmlns="http://www.w3.org/2000/svg">
<path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="2"></path>
</svg></div>
</div>
<div className="button button_slider tech-slider-next">
<div className="button-slider-arrow w-embed"><svg fill="none" height="100%" viewBox="0 0 24 24" width="100%" xmlns="http://www.w3.org/2000/svg">
<path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2"></path>
</svg></div>
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
                AWARDS & INDUSTRY RECOGNITION (10 BADGES)
                ================================================================= */}
<section className="section-swis-awards v2">
<div className="container">
<div className="swis-awards__header narrow">
<h2 className="tech-section-title mb-24" color-word="#00e5ff" color-words-index="7,8" lines-slide-up="" text-align="center" text-split="">By choosing us you choose results and industry recognition</h2>
</div>
<div itemScope={true} itemType="https://schema.org/Organization">
<div className="w-dyn-list">
<div className="awards-grid w-dyn-items" role="list">
<div className="awards-grid__item w-dyn-item" role="listitem"><img alt="Clutch 100 Fastest Growth 2026 award badge" className="awards-grid__image"  height="120" itemProp="award" loading="lazy" src="/images/services/all_ref_assets/69d60f52ef5be63e1ed40ec8_Clutch Badge.svg" width="250"/></div>
<div className="awards-grid__item w-dyn-item" role="listitem"><img alt="Clutch Fall 2024 award badge" className="awards-grid__image"  height="120" itemProp="award" loading="lazy" src="/images/services/all_ref_assets/6992ff34b317026334f0f317_clutch-fall-2024.svg" width="250"/></div>
<div className="awards-grid__item w-dyn-item" role="listitem"><img alt="GoodFirms award badge" className="awards-grid__image"  height="120" itemProp="award" loading="lazy" src="/images/services/all_ref_assets/6992ff47e44b7d86fb60fef3_goodfirms.svg" width="250"/><a className="awards-grid__link w-inline-block" href="https://www.goodfirms.co/company/che-it-group" target="_blank" title="https://www.goodfirms.co/company/che-it-group"></a></div>
<div className="awards-grid__item w-dyn-item" role="listitem"><img alt="Webflow Experts badge" className="awards-grid__image"  height="120" itemProp="award" loading="lazy" src="/images/services/all_ref_assets/6992ff5342652b6efb909d8d_webflow-experts.svg" width="250"/></div>
<div className="awards-grid__item w-dyn-item" role="listitem"><img alt="Make Certified Partner badge" className="awards-grid__image"  height="120" itemProp="award" loading="lazy" src="/images/services/all_ref_assets/6992ff80b4662dbb3dae06c0_make-partners.webp" width="250"/></div>
<div className="awards-grid__item w-dyn-item" role="listitem"><img alt="Awwards badge" className="awards-grid__image"  height="120" itemProp="award" loading="lazy" src="/images/services/all_ref_assets/6992ff8f8c3cfd859518b225_awwards.svg" width="250"/></div>
<div className="awards-grid__item w-dyn-item" role="listitem"><img alt="Easol partner badge" className="awards-grid__image"  height="120" itemProp="award" loading="lazy" src="/images/services/all_ref_assets/6992ffa636e14f397119bf80_easol-partner.svg" width="250"/></div>
<div className="awards-grid__item w-dyn-item" role="listitem"><img alt="Upwork Top Rated badge" className="awards-grid__image"  height="120" itemProp="award" loading="lazy" src="/images/services/all_ref_assets/6992ffb9a8d946d6ffa03c0c_upwork-top.svg" width="250"/></div>
<div className="awards-grid__item w-dyn-item" role="listitem"><img alt="Awards badge" className="awards-grid__image"  height="120" itemProp="award" loading="lazy" src="/images/services/all_ref_assets/6992ffc85ccc395915d5c58a_awards.svg" width="250"/></div>
<div className="awards-grid__item w-dyn-item" role="listitem"><img alt="Top Web Development company 2026 award badge" className="awards-grid__image"  height="120" itemProp="award" loading="lazy" src="/images/services/all_ref_assets/69fdd027d95e7da109da4309_rf-badge-top-Web Development-2026.webp" width="250"/><a className="awards-grid__link w-inline-block" href="https://www.rightfirms.co/company/che-it-group" target="_blank" title="https://www.rightfirms.co/company/che-it-group"></a></div>
</div>
</div>
</div>
</div>
</section>

            {/* =================================================================
                CTA BANNER (CHOOSE A TECH PARTNER)
                ================================================================= */}
<div className="tech-main-inner-wider v2">
<div className="w100">
<div className="fade-up-alt">
<div className="cta-banner">
<div className="cta-banner-caption">
<h3 className="cta-banner-title" color-word="#00e5ff" color-words-index="5,6,7,8" lines-slide-up="" text-split="">choose a tech partner that<br/>challenges, guides, and<br/>delivers</h3>
</div>
<div className="cta-banner-right">
<div className="fade-up-alt">
<div className="cta-bn__ceo">
<div className="cta-bn__img"><img alt="Sunil Panchani photo, CEO and co-founder of TechForbs" className="img_cover" loading="lazy" src="/images/technologies/sunil-panchani-director.jpg"/></div>
<div className="cta-bn__content">
<h4 className="cta-bn__name">Sunil panchani</h4>
<p className="cta-bn__position">Founder & Director, TechForbs</p>
</div>
<div className="cta-banner-person-buttons"><a className="button button_smaller button_red" href="/contact">Contact</a></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

            {/* =================================================================
                CENTERED FAQ SECTION
                ================================================================= */}
            <div className="tech-main-inner is-faq-centered margin-bottom-7-5 overflow-hidden">
              <div className="tech-content" style={{ maxWidth: "880px", margin: "0 auto", width: "100%" }}>
<section className="tech-faq" id="faq">
<h2 className="tech-section-title mb-60" lines-slide-up="" text-split="">Frequently asked questions FAQq)</h2>
<div className="w-dyn-list">
<div className="faq w-dyn-items" itemScope={true} itemType="https://schema.org/FAQPage" role="list">
<div className="fade-up-alt w-dyn-item" role="listitem">
<div className="faq-item w-dropdown" data-delay="0" data-hover="false" itemProp="mainEntity" itemScope={true} itemType="https://schema.org/Question">
<div className="faq-item-header w-dropdown-toggle">
<div className="faq-item-header-icon">
<div className="faq-item-header-icon-line"></div>
<div className="faq-item-header-icon-line rotated"></div>
</div>
<div itemProp="name">What is a dedicated development team?</div>
</div>
<nav className="faq-item-header-dropdown w-dropdown-list">
<div className="faq-item-header-dropdown-inner" itemProp="acceptedAnswer" itemScope={true} itemType="https://schema.org/Answer">
<div className="w-richtext" itemProp="text">
<p>A group of engineers hired to work exclusively on your project, aligned to your goals, tools, and schedule. Businesses choose this model to hire dedicated developers team for long-term or short-term needs.</p>
</div>
</div>
</nav>
</div>
</div>
<div className="fade-up-alt w-dyn-item" role="listitem">
<div className="faq-item w-dropdown" data-delay="0" data-hover="false" itemProp="mainEntity" itemScope={true} itemType="https://schema.org/Question">
<div className="faq-item-header w-dropdown-toggle">
<div className="faq-item-header-icon">
<div className="faq-item-header-icon-line"></div>
<div className="faq-item-header-icon-line rotated"></div>
</div>
<div itemProp="name">Why hire a dedicated team instead of full-time staff?</div>
</div>
<nav className="faq-item-header-dropdown w-dropdown-list">
<div className="faq-item-header-dropdown-inner" itemProp="acceptedAnswer" itemScope={true} itemType="https://schema.org/Answer">
<div className="w-richtext" itemProp="text">
<p>You get vetted talent faster and more affordably, with flexibility to scale and access to niche expertise - while staying focused on core business. It’s the most effective way to hire dedicated developers
                                                    without overhead.</p>
</div>
</div>
</nav>
</div>
</div>
<div className="fade-up-alt w-dyn-item" role="listitem">
<div className="faq-item w-dropdown" data-delay="0" data-hover="false" itemProp="mainEntity" itemScope={true} itemType="https://schema.org/Question">
<div className="faq-item-header w-dropdown-toggle">
<div className="faq-item-header-icon">
<div className="faq-item-header-icon-line"></div>
<div className="faq-item-header-icon-line rotated"></div>
</div>
<div itemProp="name">How is the team managed?</div>
</div>
<nav className="faq-item-header-dropdown w-dropdown-list">
<div className="faq-item-header-dropdown-inner" itemProp="acceptedAnswer" itemScope={true} itemType="https://schema.org/Answer">
<div className="w-richtext" itemProp="text">
<p>A project manager or your appointed lead coordinates day-to-day work, comms, and timelines; status is tracked via your tools.</p>
</div>
</div>
</nav>
</div>
</div>
<div className="fade-up-alt w-dyn-item" role="listitem">
<div className="faq-item w-dropdown" data-delay="0" data-hover="false" itemProp="mainEntity" itemScope={true} itemType="https://schema.org/Question">
<div className="faq-item-header w-dropdown-toggle">
<div className="faq-item-header-icon">
<div className="faq-item-header-icon-line"></div>
<div className="faq-item-header-icon-line rotated"></div>
</div>
<div itemProp="name">How much does it cost?</div>
</div>
<nav className="faq-item-header-dropdown w-dropdown-list">
<div className="faq-item-header-dropdown-inner" itemProp="acceptedAnswer" itemScope={true} itemType="https://schema.org/Answer">
<div className="w-richtext" itemProp="text">
<p>Send us a brief or book a call; we’ll confirm the scope, shortlist candidates, and start interviews.</p>
</div>
</div>
</nav>
</div>
</div>
<div className="fade-up-alt w-dyn-item" role="listitem">
<div className="faq-item w-dropdown" data-delay="0" data-hover="false" itemProp="mainEntity" itemScope={true} itemType="https://schema.org/Question">
<div className="faq-item-header w-dropdown-toggle">
<div className="faq-item-header-icon">
<div className="faq-item-header-icon-line"></div>
<div className="faq-item-header-icon-line rotated"></div>
</div>
<div itemProp="name">Which specialists can I hire?</div>
</div>
<nav className="faq-item-header-dropdown w-dropdown-list">
<div className="faq-item-header-dropdown-inner" itemProp="acceptedAnswer" itemScope={true} itemType="https://schema.org/Answer">
<div className="w-richtext" itemProp="text">
<p>Frontend, backend, full-stack, QA, DevOps, UI/UX, as well as iOS/Android engineers and no-code developers.</p>
</div>
</div>
</nav>
</div>
</div>
<div className="fade-up-alt w-dyn-item" role="listitem">
<div className="faq-item w-dropdown" data-delay="0" data-hover="false" itemProp="mainEntity" itemScope={true} itemType="https://schema.org/Question">
<div className="faq-item-header w-dropdown-toggle">
<div className="faq-item-header-icon">
<div className="faq-item-header-icon-line"></div>
<div className="faq-item-header-icon-line rotated"></div>
</div>
<div itemProp="name">What solutions can your teams deliver?</div>
</div>
<nav className="faq-item-header-dropdown w-dropdown-list">
<div className="faq-item-header-dropdown-inner" itemProp="acceptedAnswer" itemScope={true} itemType="https://schema.org/Answer">
<div className="w-richtext" itemProp="text">
<p>E-commerce, SaaS platforms, social &amp; content products, and mobile apps - from MVP to long-term scale.</p>
</div>
</div>
</nav>
</div>
</div>
<div className="fade-up-alt w-dyn-item" role="listitem">
<div className="faq-item w-dropdown" data-delay="0" data-hover="false" itemProp="mainEntity" itemScope={true} itemType="https://schema.org/Question">
<div className="faq-item-header w-dropdown-toggle">
<div className="faq-item-header-icon">
<div className="faq-item-header-icon-line"></div>
<div className="faq-item-header-icon-line rotated"></div>
</div>
<div itemProp="name">How do you ensure confidentiality and security?</div>
</div>
<nav className="faq-item-header-dropdown w-dropdown-list">
<div className="faq-item-header-dropdown-inner" itemProp="acceptedAnswer" itemScope={true} itemType="https://schema.org/Answer">
<div className="w-richtext" itemProp="text">
<p>We sign a project NDA before work begins, and you keep full ownership of all code and intellectual property. Our team also has experience delivering PCI DSS and HIPAA-compliant solutions for e-commerce and
                                                    healthcare clients.</p>
<p>‍</p>
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
