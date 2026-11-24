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
<div className="service-hero-inner"><img alt="" className="service-hero-bg" loading="lazy" src="/images/services/all_ref_assets/664c529d2313105a91b54fc3_mobile-development.webp"/><img alt="" className="service-hero-inner-decor" loading="lazy" src="/images/services/all_ref_assets/664319142c43bfb250429812_decor.svg"/>
<div className="service-hero__content width-47">
<div className="fade-up-alt">
<div className="services-hero-title-wrap">
<div className="title-circle service-hero_circle w-embed" data-wf--title-circle--variant="base"><svg fill="none" height="100%" preserveAspectRatio="none" viewBox="0 0 453 89" width="100%" xmlns="http://www.w3.org/2000/svg">
<path d="M316.771 87C405.472 79.7966 451 58.571 451 43.7797C451 20.7054 350.488 2 226.5 2C102.512 2 2.00001 20.7054 2.00001 43.7797C2.00001 66.8539 102.512 85.5593 226.5 85.5593C268.367 85.5593 324.621 81.9576 362.299 71.8729" stroke="#00e5ff" strokeLinecap="round" strokeWidth="3"></path>
</svg></div>
<h1 circle-index="0" circle-width="20" className="service-hero-title" lines-slide-up="" text-split="">Mobile app development that gets you to the app stores fast</h1>
</div>
<div className="service-hero__content-text full-width">Launch faster, ship safely, scale confidently with a mobile app development company that talks business, not just code.</div>
<div className="button-wrap on-service-page"><a className="button" href="/contact">Book a call</a></div>
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
<h2 className="tech-section-title mb-60" color-word="#00e5ff" color-words-index="1,2,3" lines-slide-up="" text-split="">What types of apps we build for your business</h2>
<div className="tech-service-cards-wrap">
<div className="tech-service-cards swiper on-desktop">
<div className="swiper-wrapper">
<div className="swiper-slide swiper-slide-cms-wrapper w-dyn-list">
<div className="swiper-slide-cms w-dyn-items" role="list">
<div className="w-dyn-item" role="listitem">
<div className="tech-service-card">
<div className="tech-services-card-bg is-first" style={{ backgroundImage: "url('/images/services/all_ref_assets/68d53123a2e99d77dcf5bfef_mobile-development-card-bg-1.webp')" }}></div>
<div className="tech-service-card-icon"><img alt="" loading="lazy" src="/images/services/all_ref_assets/68d53085be4a4b77ebbd9233_famicons_cart.svg"/></div>
<div className="tech-service-card-caption">
<h3 className="tech-service-item-title">E-commerce</h3>
<p className="text-body in-tech-service-card">Catalog, checkout, payments, order tracking, push-driven re-engagement - powered by our mobile app development services.</p>
</div>
</div>
</div>
<div className="w-dyn-item" role="listitem">
<div className="tech-service-card">
<div className="tech-services-card-bg is-first" style={{ backgroundImage: "url('/images/services/all_ref_assets/68d5314b44eaee730e39e5fc_mobile-development-card-bg-2.webp')" }}></div>
<div className="tech-service-card-icon"><img alt="" loading="lazy" src="/images/services/all_ref_assets/68d531554138acfc43d5c50a_teenyicons_credit-card-solid.svg"/></div>
<div className="tech-service-card-caption">
<h3 className="tech-service-item-title">Banking &amp; fintech</h3>
<p className="text-body in-tech-service-card">Launch MVPs in weeks using the right mix of no-code and custom mobile app development services. Validate fast, then scale without re-writing the core.</p>
</div>
</div>
</div>
<div className="w-dyn-item" role="listitem">
<div className="tech-service-card">
<div className="tech-services-card-bg is-first" style={{ backgroundImage: "url('/images/services/all_ref_assets/68d531834b917d227fc547a9_mobile-development-card-bg-3.webp')" }}></div>
<div className="tech-service-card-icon"><img alt="" loading="lazy" src="/images/services/all_ref_assets/68d531781153a3e349cfb604_icon-park-solid_book-one.svg"/></div>
<div className="tech-service-card-caption">
<h3 className="tech-service-item-title">Education &amp; learning</h3>
<p className="text-body in-tech-service-card">Courses, quizzes, progress tracking, gamified practice with mobile app development solutions tailored for engagement.</p>
</div>
</div>
</div>
<div className="w-dyn-item" role="listitem">
<div className="tech-service-card">
<div className="tech-services-card-bg is-first" style={{ backgroundImage: "url('/images/services/all_ref_assets/68d531a94138acfc43d5ee91_mobile-development-card-bg-4.webp')" }}></div>
<div className="tech-service-card-icon"><img alt="" loading="lazy" src="/images/services/all_ref_assets/68d531b3d584a70bcfbff492_chat.svg"/></div>
<div className="tech-service-card-caption">
<h3 className="tech-service-item-title">Social &amp; community</h3>
<p className="text-body in-tech-service-card">Feeds, messaging, groups, moderation tooling - delivered by a trusted mobile application development company.</p>
</div>
</div>
</div>
</div>
</div>
<div className="swiper-slide swiper-slide-cms-wrapper w-dyn-list">
<div className="swiper-slide-cms w-dyn-items" role="list">
<div className="w-dyn-item" role="listitem">
<div className="tech-service-card">
<div className="tech-services-card-bg is-first" style={{ backgroundImage: "url('/images/services/all_ref_assets/68d53123a2e99d77dcf5bfef_mobile-development-card-bg-1.webp')" }}></div>
<div className="tech-service-card-icon"><img alt="" loading="lazy" src="/images/services/all_ref_assets/68d531db42226ba58df768d7_solar_play-bold-duotone.svg"/></div>
<div className="tech-service-card-caption">
<h3 className="tech-service-item-title">Media &amp; streaming</h3>
<p className="text-body in-tech-service-card">Playback, live/events, companion experiences - with android app development services and iOS app development services for cross-device reach.</p>
</div>
</div>
</div>
<div className="w-dyn-item" role="listitem">
<div className="tech-service-card">
<div className="tech-services-card-bg is-first" style={{ backgroundImage: "url('/images/services/all_ref_assets/68d5314b44eaee730e39e5fc_mobile-development-card-bg-2.webp')" }}></div>
<div className="tech-service-card-icon"><img alt="" loading="lazy" src="/images/services/all_ref_assets/68d531f544c9242c98c5db9e_healthicons_heart-organ.svg"/></div>
<div className="tech-service-card-caption">
<h3 className="tech-service-item-title">Health &amp; wellness</h3>
<p className="text-body in-tech-service-card">Fitness, booking, habit tracking, reminders - with seamless integrations built by our mobile app development agency.</p>
</div>
</div>
</div>
<div className="w-dyn-item" role="listitem">
<div className="tech-service-card">
<div className="tech-services-card-bg is-first" style={{ backgroundImage: "url('/images/services/all_ref_assets/68d531834b917d227fc547a9_mobile-development-card-bg-3.webp')" }}></div>
<div className="tech-service-card-icon"><img alt="" loading="lazy" src="/images/services/all_ref_assets/68d532126acb2a1ad587112c_solar_delivery-bold.svg"/></div>
<div className="tech-service-card-caption">
<h3 className="tech-service-item-title">On-demand &amp; delivery</h3>
<p className="text-body in-tech-service-card">Ordering, live tracking, couriers/providers, ratings.</p>
</div>
</div>
</div>
<div className="w-dyn-item" role="listitem">
<div className="tech-service-card">
<div className="tech-services-card-bg is-first" style={{ backgroundImage: "url('/images/services/all_ref_assets/68d531a94138acfc43d5ee91_mobile-development-card-bg-4.webp')" }}></div>
<div className="tech-service-card-icon"><img alt="" loading="lazy" src="/images/services/all_ref_assets/68d5322fab8c8f4eeda4d5f3_solar_calendar-bold.svg"/></div>
<div className="tech-service-card-caption">
<h3 className="tech-service-item-title">Booking &amp; marketplace</h3>
<p className="text-body in-tech-service-card">Listings, search/filters, secure checkout, reviews.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="tech-service-cards on-mobile">
<div className="w-dyn-list">
<div className="tech-service-cards w-dyn-items" role="list">
<div className="w-dyn-item" role="listitem">
<div className="tech-service-card">
<div className="tech-services-card-bg is-first" style={{ backgroundImage: "url('/images/services/all_ref_assets/68d53123a2e99d77dcf5bfef_mobile-development-card-bg-1.webp')" }}></div>
<div className="tech-service-card-icon"><img alt="" loading="lazy" src="/images/services/all_ref_assets/68d53085be4a4b77ebbd9233_famicons_cart.svg"/></div>
<div className="tech-service-card-caption">
<h3 className="tech-service-item-title">E-commerce</h3>
<p className="text-body in-tech-service-card">Catalog, checkout, payments, order tracking, push-driven re-engagement - powered by our mobile app development services.</p>
</div>
</div>
</div>
<div className="w-dyn-item" role="listitem">
<div className="tech-service-card">
<div className="tech-services-card-bg is-first" style={{ backgroundImage: "url('/images/services/all_ref_assets/68d5314b44eaee730e39e5fc_mobile-development-card-bg-2.webp')" }}></div>
<div className="tech-service-card-icon"><img alt="" loading="lazy" src="/images/services/all_ref_assets/68d531554138acfc43d5c50a_teenyicons_credit-card-solid.svg"/></div>
<div className="tech-service-card-caption">
<h3 className="tech-service-item-title">Banking &amp; fintech</h3>
<p className="text-body in-tech-service-card">Launch MVPs in weeks using the right mix of no-code and custom mobile app development services. Validate fast, then scale without re-writing the core.</p>
</div>
</div>
</div>
<div className="w-dyn-item" role="listitem">
<div className="tech-service-card">
<div className="tech-services-card-bg is-first" style={{ backgroundImage: "url('/images/services/all_ref_assets/68d531834b917d227fc547a9_mobile-development-card-bg-3.webp')" }}></div>
<div className="tech-service-card-icon"><img alt="" loading="lazy" src="/images/services/all_ref_assets/68d531781153a3e349cfb604_icon-park-solid_book-one.svg"/></div>
<div className="tech-service-card-caption">
<h3 className="tech-service-item-title">Education &amp; learning</h3>
<p className="text-body in-tech-service-card">Courses, quizzes, progress tracking, gamified practice with mobile app development solutions tailored for engagement.</p>
</div>
</div>
</div>
<div className="w-dyn-item" role="listitem">
<div className="tech-service-card">
<div className="tech-services-card-bg is-first" style={{ backgroundImage: "url('/images/services/all_ref_assets/68d531a94138acfc43d5ee91_mobile-development-card-bg-4.webp')" }}></div>
<div className="tech-service-card-icon"><img alt="" loading="lazy" src="/images/services/all_ref_assets/68d531b3d584a70bcfbff492_chat.svg"/></div>
<div className="tech-service-card-caption">
<h3 className="tech-service-item-title">Social &amp; community</h3>
<p className="text-body in-tech-service-card">Feeds, messaging, groups, moderation tooling - delivered by a trusted mobile application development company.</p>
</div>
</div>
</div>
<div className="w-dyn-item" role="listitem">
<div className="tech-service-card">
<div className="tech-services-card-bg is-first" style={{ backgroundImage: "url('/images/services/all_ref_assets/68d53123a2e99d77dcf5bfef_mobile-development-card-bg-1.webp')" }}></div>
<div className="tech-service-card-icon"><img alt="" loading="lazy" src="/images/services/all_ref_assets/68d531db42226ba58df768d7_solar_play-bold-duotone.svg"/></div>
<div className="tech-service-card-caption">
<h3 className="tech-service-item-title">Media &amp; streaming</h3>
<p className="text-body in-tech-service-card">Playback, live/events, companion experiences - with android app development services and iOS app development services for cross-device reach.</p>
</div>
</div>
</div>
<div className="w-dyn-item" role="listitem">
<div className="tech-service-card">
<div className="tech-services-card-bg is-first" style={{ backgroundImage: "url('/images/services/all_ref_assets/68d5314b44eaee730e39e5fc_mobile-development-card-bg-2.webp')" }}></div>
<div className="tech-service-card-icon"><img alt="" loading="lazy" src="/images/services/all_ref_assets/68d531f544c9242c98c5db9e_healthicons_heart-organ.svg"/></div>
<div className="tech-service-card-caption">
<h3 className="tech-service-item-title">Health &amp; wellness</h3>
<p className="text-body in-tech-service-card">Fitness, booking, habit tracking, reminders - with seamless integrations built by our mobile app development agency.</p>
</div>
</div>
</div>
<div className="w-dyn-item" role="listitem">
<div className="tech-service-card">
<div className="tech-services-card-bg is-first" style={{ backgroundImage: "url('/images/services/all_ref_assets/68d531834b917d227fc547a9_mobile-development-card-bg-3.webp')" }}></div>
<div className="tech-service-card-icon"><img alt="" loading="lazy" src="/images/services/all_ref_assets/68d532126acb2a1ad587112c_solar_delivery-bold.svg"/></div>
<div className="tech-service-card-caption">
<h3 className="tech-service-item-title">On-demand &amp; delivery</h3>
<p className="text-body in-tech-service-card">Ordering, live tracking, couriers/providers, ratings.</p>
</div>
</div>
</div>
<div className="w-dyn-item" role="listitem">
<div className="tech-service-card">
<div className="tech-services-card-bg is-first" style={{ backgroundImage: "url('/images/services/all_ref_assets/68d531a94138acfc43d5ee91_mobile-development-card-bg-4.webp')" }}></div>
<div className="tech-service-card-icon"><img alt="" loading="lazy" src="/images/services/all_ref_assets/68d5322fab8c8f4eeda4d5f3_solar_calendar-bold.svg"/></div>
<div className="tech-service-card-caption">
<h3 className="tech-service-item-title">Booking &amp; marketplace</h3>
<p className="text-body in-tech-service-card">Listings, search/filters, secure checkout, reviews.</p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slider-buttons hide-mob-landscape">
<div className="button button_slider service-cards-prev">
<div className="button-slider-arrow w-embed"><svg fill="none" height="100%" viewBox="0 0 24 24" width="100%" xmlns="http://www.w3.org/2000/svg">
<path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="2"></path>
</svg></div>
</div>
<div className="button button_slider service-cards-next">
<div className="button-slider-arrow w-embed"><svg fill="none" height="100%" viewBox="0 0 24 24" width="100%" xmlns="http://www.w3.org/2000/svg">
<path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2"></path>
</svg></div>
</div>
</div>
</div>
</section>
<section className="tech-services" id="services">
<h2 className="tech-section-title mb-60" color-word="#00e5ff" color-words-index="0,1,2" lines-slide-up="" text-split="">Mobile app development services we offer</h2>
<ul className="tech-service-list" role="list">
<li className="tech-service-item fade-up-alt">
<div className="tech-service-item-icon w-embed"><svg fill="none" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
<path clipRule="evenodd" d="M5.27729 5.27727C7.7642 2.79039 11.2034 1.25 15 1.25C18.7966 1.25 22.2358 2.79039 24.7227 5.27728C27.2096 7.76419 28.75 11.2034 28.75 15C28.75 18.7966 27.2096 22.2358 24.7227 24.7227C22.2358 27.2096 18.7966 28.75 15 28.75C11.2034 28.75 7.7642 27.2096 5.27728 24.7227C2.7904 22.2358 1.25 18.7966 1.25 15C1.25 11.2034 2.79041 7.76419 5.27729 5.27727ZM15 3.75C11.8931 3.75 9.08229 5.00783 7.04504 7.04505C5.00782 9.08231 3.75 11.8931 3.75 15C3.75 18.1069 5.00783 20.9177 7.04505 22.9549C9.0823 24.9922 11.8931 26.25 15 26.25C18.1069 26.25 20.9177 24.9922 22.9549 22.9549C24.9922 20.9177 26.25 18.1069 26.25 15C26.25 11.8931 24.9922 9.0823 22.9549 7.04505C20.9177 5.00783 18.1069 3.75 15 3.75ZM22.1339 10.3661C22.622 10.8543 22.622 11.6457 22.1339 12.1339L14.6339 19.6339C14.1457 20.122 13.3543 20.122 12.8661 19.6339L9.11612 15.8839C8.62796 15.3957 8.62796 14.6043 9.11612 14.1161C9.60427 13.628 10.3957 13.628 10.8839 14.1161L13.75 16.9822L20.3661 10.3661C20.8543 9.87796 21.6457 9.87796 22.1339 10.3661Z" fill="#616161" fillRule="evenodd"></path>
<path clipRule="evenodd" d="M7.04504 7.04505C9.08229 5.00783 11.8931 3.75 15 3.75C18.1069 3.75 20.9177 5.00783 22.9549 7.04505C24.9922 9.0823 26.25 11.8931 26.25 15C26.25 18.1069 24.9922 20.9177 22.9549 22.9549C20.9177 24.9922 18.1069 26.25 15 26.25C11.8931 26.25 9.0823 24.9922 7.04505 22.9549C5.00783 20.9177 3.75 18.1069 3.75 15C3.75 11.8931 5.00782 9.08231 7.04504 7.04505ZM22.1339 10.3661C22.622 10.8543 22.622 11.6457 22.1339 12.1339L14.6339 19.6339C14.1457 20.122 13.3543 20.122 12.8661 19.6339L9.11612 15.8839C8.62796 15.3957 8.62796 14.6043 9.11612 14.1161C9.60427 13.628 10.3957 13.628 10.8839 14.1161L13.75 16.9822L20.3661 10.3661C20.8543 9.87796 21.6457 9.87796 22.1339 10.3661Z" fill="#A0EEB0" fillRule="evenodd"></path>
</svg></div>
<div className="service-service-item-caption">
<h3 className="tech-service-item-title">iOS development</h3>
<p className="text-body">App Store - ready with React Native (iOS target) plus native Swift modules for camera, biometrics, and push notifications. Includes review and submission support. This is part of our end-to-end iOS app development services.</p>
</div>
</li>
<li className="tech-service-item fade-up-alt">
<div className="tech-service-item-icon w-embed"><svg fill="none" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
<path clipRule="evenodd" d="M5.27729 5.27727C7.7642 2.79039 11.2034 1.25 15 1.25C18.7966 1.25 22.2358 2.79039 24.7227 5.27728C27.2096 7.76419 28.75 11.2034 28.75 15C28.75 18.7966 27.2096 22.2358 24.7227 24.7227C22.2358 27.2096 18.7966 28.75 15 28.75C11.2034 28.75 7.7642 27.2096 5.27728 24.7227C2.7904 22.2358 1.25 18.7966 1.25 15C1.25 11.2034 2.79041 7.76419 5.27729 5.27727ZM15 3.75C11.8931 3.75 9.08229 5.00783 7.04504 7.04505C5.00782 9.08231 3.75 11.8931 3.75 15C3.75 18.1069 5.00783 20.9177 7.04505 22.9549C9.0823 24.9922 11.8931 26.25 15 26.25C18.1069 26.25 20.9177 24.9922 22.9549 22.9549C24.9922 20.9177 26.25 18.1069 26.25 15C26.25 11.8931 24.9922 9.0823 22.9549 7.04505C20.9177 5.00783 18.1069 3.75 15 3.75ZM22.1339 10.3661C22.622 10.8543 22.622 11.6457 22.1339 12.1339L14.6339 19.6339C14.1457 20.122 13.3543 20.122 12.8661 19.6339L9.11612 15.8839C8.62796 15.3957 8.62796 14.6043 9.11612 14.1161C9.60427 13.628 10.3957 13.628 10.8839 14.1161L13.75 16.9822L20.3661 10.3661C20.8543 9.87796 21.6457 9.87796 22.1339 10.3661Z" fill="#616161" fillRule="evenodd"></path>
<path clipRule="evenodd" d="M7.04504 7.04505C9.08229 5.00783 11.8931 3.75 15 3.75C18.1069 3.75 20.9177 5.00783 22.9549 7.04505C24.9922 9.0823 26.25 11.8931 26.25 15C26.25 18.1069 24.9922 20.9177 22.9549 22.9549C20.9177 24.9922 18.1069 26.25 15 26.25C11.8931 26.25 9.0823 24.9922 7.04505 22.9549C5.00783 20.9177 3.75 18.1069 3.75 15C3.75 11.8931 5.00782 9.08231 7.04504 7.04505ZM22.1339 10.3661C22.622 10.8543 22.622 11.6457 22.1339 12.1339L14.6339 19.6339C14.1457 20.122 13.3543 20.122 12.8661 19.6339L9.11612 15.8839C8.62796 15.3957 8.62796 14.6043 9.11612 14.1161C9.60427 13.628 10.3957 13.628 10.8839 14.1161L13.75 16.9822L20.3661 10.3661C20.8543 9.87796 21.6457 9.87796 22.1339 10.3661Z" fill="#A0EEB0" fillRule="evenodd"></path>
</svg></div>
<div className="service-service-item-caption">
<h3 className="tech-service-item-title">Android development</h3>
<p className="text-body">Google Play–ready with React Native (Android target) and native modules in Kotlin/Java for device-specific features. Modern permissions and broad device coverage. Provided as complete android app development services.</p>
</div>
</li>
<li className="tech-service-item fade-up-alt">
<div className="tech-service-item-icon w-embed"><svg fill="none" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
<path clipRule="evenodd" d="M5.27729 5.27727C7.7642 2.79039 11.2034 1.25 15 1.25C18.7966 1.25 22.2358 2.79039 24.7227 5.27728C27.2096 7.76419 28.75 11.2034 28.75 15C28.75 18.7966 27.2096 22.2358 24.7227 24.7227C22.2358 27.2096 18.7966 28.75 15 28.75C11.2034 28.75 7.7642 27.2096 5.27728 24.7227C2.7904 22.2358 1.25 18.7966 1.25 15C1.25 11.2034 2.79041 7.76419 5.27729 5.27727ZM15 3.75C11.8931 3.75 9.08229 5.00783 7.04504 7.04505C5.00782 9.08231 3.75 11.8931 3.75 15C3.75 18.1069 5.00783 20.9177 7.04505 22.9549C9.0823 24.9922 11.8931 26.25 15 26.25C18.1069 26.25 20.9177 24.9922 22.9549 22.9549C24.9922 20.9177 26.25 18.1069 26.25 15C26.25 11.8931 24.9922 9.0823 22.9549 7.04505C20.9177 5.00783 18.1069 3.75 15 3.75ZM22.1339 10.3661C22.622 10.8543 22.622 11.6457 22.1339 12.1339L14.6339 19.6339C14.1457 20.122 13.3543 20.122 12.8661 19.6339L9.11612 15.8839C8.62796 15.3957 8.62796 14.6043 9.11612 14.1161C9.60427 13.628 10.3957 13.628 10.8839 14.1161L13.75 16.9822L20.3661 10.3661C20.8543 9.87796 21.6457 9.87796 22.1339 10.3661Z" fill="#616161" fillRule="evenodd"></path>
<path clipRule="evenodd" d="M7.04504 7.04505C9.08229 5.00783 11.8931 3.75 15 3.75C18.1069 3.75 20.9177 5.00783 22.9549 7.04505C24.9922 9.0823 26.25 11.8931 26.25 15C26.25 18.1069 24.9922 20.9177 22.9549 22.9549C20.9177 24.9922 18.1069 26.25 15 26.25C11.8931 26.25 9.0823 24.9922 7.04505 22.9549C5.00783 20.9177 3.75 18.1069 3.75 15C3.75 11.8931 5.00782 9.08231 7.04504 7.04505ZM22.1339 10.3661C22.622 10.8543 22.622 11.6457 22.1339 12.1339L14.6339 19.6339C14.1457 20.122 13.3543 20.122 12.8661 19.6339L9.11612 15.8839C8.62796 15.3957 8.62796 14.6043 9.11612 14.1161C9.60427 13.628 10.3957 13.628 10.8839 14.1161L13.75 16.9822L20.3661 10.3661C20.8543 9.87796 21.6457 9.87796 22.1339 10.3661Z" fill="#A0EEB0" fillRule="evenodd"></path>
</svg></div>
<div className="service-service-item-caption">
<h3 className="tech-service-item-title">Cross-platform development</h3>
<p className="text-body">One codebase for iOS &amp; Android - consistent UI, shared business logic, faster releases without losing the native feel. Ideal for MVPs and products that require frequent updates.</p>
</div>
</li>
<li className="tech-service-item fade-up-alt">
<div className="tech-service-item-icon w-embed"><svg fill="none" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
<path clipRule="evenodd" d="M5.27729 5.27727C7.7642 2.79039 11.2034 1.25 15 1.25C18.7966 1.25 22.2358 2.79039 24.7227 5.27728C27.2096 7.76419 28.75 11.2034 28.75 15C28.75 18.7966 27.2096 22.2358 24.7227 24.7227C22.2358 27.2096 18.7966 28.75 15 28.75C11.2034 28.75 7.7642 27.2096 5.27728 24.7227C2.7904 22.2358 1.25 18.7966 1.25 15C1.25 11.2034 2.79041 7.76419 5.27729 5.27727ZM15 3.75C11.8931 3.75 9.08229 5.00783 7.04504 7.04505C5.00782 9.08231 3.75 11.8931 3.75 15C3.75 18.1069 5.00783 20.9177 7.04505 22.9549C9.0823 24.9922 11.8931 26.25 15 26.25C18.1069 26.25 20.9177 24.9922 22.9549 22.9549C24.9922 20.9177 26.25 18.1069 26.25 15C26.25 11.8931 24.9922 9.0823 22.9549 7.04505C20.9177 5.00783 18.1069 3.75 15 3.75ZM22.1339 10.3661C22.622 10.8543 22.622 11.6457 22.1339 12.1339L14.6339 19.6339C14.1457 20.122 13.3543 20.122 12.8661 19.6339L9.11612 15.8839C8.62796 15.3957 8.62796 14.6043 9.11612 14.1161C9.60427 13.628 10.3957 13.628 10.8839 14.1161L13.75 16.9822L20.3661 10.3661C20.8543 9.87796 21.6457 9.87796 22.1339 10.3661Z" fill="#616161" fillRule="evenodd"></path>
<path clipRule="evenodd" d="M7.04504 7.04505C9.08229 5.00783 11.8931 3.75 15 3.75C18.1069 3.75 20.9177 5.00783 22.9549 7.04505C24.9922 9.0823 26.25 11.8931 26.25 15C26.25 18.1069 24.9922 20.9177 22.9549 22.9549C20.9177 24.9922 18.1069 26.25 15 26.25C11.8931 26.25 9.0823 24.9922 7.04505 22.9549C5.00783 20.9177 3.75 18.1069 3.75 15C3.75 11.8931 5.00782 9.08231 7.04504 7.04505ZM22.1339 10.3661C22.622 10.8543 22.622 11.6457 22.1339 12.1339L14.6339 19.6339C14.1457 20.122 13.3543 20.122 12.8661 19.6339L9.11612 15.8839C8.62796 15.3957 8.62796 14.6043 9.11612 14.1161C9.60427 13.628 10.3957 13.628 10.8839 14.1161L13.75 16.9822L20.3661 10.3661C20.8543 9.87796 21.6457 9.87796 22.1339 10.3661Z" fill="#A0EEB0" fillRule="evenodd"></path>
</svg></div>
<div className="service-service-item-caption">
<h3 className="tech-service-item-title">API &amp; AI layer</h3>
<p className="text-body">Secure Node.js APIs, integrations (payments/CRM/analytics), in-app AI assistants/chatbots, offline-first sync when needed; App Store/Play hand-off included. Perfect for projects from a mobile software development company
                                    with deep expertise.</p>
</div>
</li>
</ul>
<div className="tech-benefits-buttons fade-up-alt"><a className="button button_smaller" href="/contact">Book a call</a></div>
</section>
<section className="tech-benefits" id="why-we">
<h2 className="tech-section-title mb-60" color-word="#00e5ff" color-words-index="5,6" lines-slide-up="" text-split="">Winning with us: Our clients' success</h2>
<div className="cases-wrap is-services-page">
<div className="swiper cases-slider on-mobile-dev-page">
<div className="swiper-wrapper">
<div className="swiper-slide">
<div className="case-item on-mobile-dev-page">
<div className="case-item-image on-mobile-dev-page is-first"><img alt="Portfolio project screenshot on mobile" className="case-item-thumb on-mobile-dev-page" loading="lazy" src="/images/services/all_ref_assets/68b01aad0e6e088b0b1a84c3_case-mobile-1.png"/>
<div className="case-item-overlay"></div>
</div>
<div className="case-item-content">
<h3 className="case-item-title on-mobile-dev-page">Keyzz</h3>
<div className="case-item-description">Mobile CRM for real estate agents: import contacts, get reminders for closings &amp; client events, buy client gifts, and plan multi-stop routes with the Trips module.</div>
</div>
</div>
</div>
<div className="swiper-slide">
<div className="case-item on-mobile-dev-page">
<div className="case-item-image on-mobile-dev-page is-second"><img alt="Portfolio project on mobile" className="case-item-thumb on-mobile-dev-page" loading="lazy" src="/images/services/all_ref_assets/68ca72b9501af19640e4c153_mobile-case-item-2.png"/>
<div className="case-item-overlay"></div>
</div>
<div className="case-item-content">
<h3 className="case-item-title on-mobile-dev-page">Vip rx refills</h3>
<div className="case-item-description">Prescription management app that connects users to local pharmacies: send refill requests, manage family profiles, and track medication info &amp; updates.</div>
</div>
</div>
</div>
<div className="swiper-slide">
<div className="case-item on-mobile-dev-page">
<div className="case-item-image on-mobile-dev-page is-third"><img alt="Portfolio project on mobile" className="case-item-thumb on-mobile-dev-page" loading="lazy" src="/images/services/all_ref_assets/68ca72b94b94d42a17a38447_mobile-case-item-3.png"/>
<div className="case-item-overlay"></div>
</div>
<div className="case-item-content">
<h3 className="case-item-title on-mobile-dev-page">Restore hyper wellness</h3>
<div className="case-item-description">Wellness appointment scheduler: book/cancel sessions across locations and keep schedules on track with notifications and reminders.</div>
</div>
</div>
</div>
<div className="swiper-slide">
<div className="case-item on-mobile-dev-page">
<div className="case-item-image on-mobile-dev-page is-fourth"><img alt="Portfolio project on mobile" className="case-item-thumb on-mobile-dev-page" loading="lazy" src="/images/services/all_ref_assets/68ca7337d338e147bbcd7b02_mobile-case-item-7.png"/>
<div className="case-item-overlay"></div>
</div>
<div className="case-item-content">
<h3 className="case-item-title on-mobile-dev-page">Outdoor services on demand</h3>
<div className="case-item-description">On-demand marketplace for snow removal &amp; landscaping across US/Canada: place orders, live-track jobs, rate providers, and pay securely.</div>
</div>
</div>
</div>
<div className="swiper-slide">
<div className="case-item on-mobile-dev-page">
<div className="case-item-image on-mobile-dev-page is-fifth"><img alt="Portfolio project on mobile" className="case-item-thumb on-mobile-dev-page" loading="lazy" src="/images/services/all_ref_assets/68ca731997b975cf45781509_mobile-case-item-4.png"/>
<div className="case-item-overlay"></div>
</div>
<div className="case-item-content">
<h3 className="case-item-title on-mobile-dev-page">Sanctuary</h3>
<div className="case-item-description">Secure multi-cloud storage &amp; communication: encrypted files with RAID-style redundancy, file sharing, messaging, video calls, and built-in authenticator.</div>
</div>
</div>
</div>
<div className="swiper-slide">
<div className="case-item on-mobile-dev-page">
<div className="case-item-image on-mobile-dev-page is-sixth"><img alt="Portfolio project on mobile" className="case-item-thumb on-mobile-dev-page" loading="lazy" src="/images/services/all_ref_assets/68ca73199f39b47b75460b7b_mobile-case-item-5.png"/>
<div className="case-item-overlay"></div>
</div>
<div className="case-item-content">
<h3 className="case-item-title on-mobile-dev-page">Spoddr</h3>
<div className="case-item-description">Loyalty card wallet: store/share cards, collect points via visits, and replace plastic loyalty cards with a simple mobile experience.</div>
</div>
</div>
</div>
<div className="swiper-slide">
<div className="case-item on-mobile-dev-page">
<div className="case-item-image on-mobile-dev-page is-seventh"><img alt="Portfolio project on laptop screen" className="case-item-thumb on-mobile-dev-page" loading="lazy" src="/images/services/all_ref_assets/68ca7318c05c947223dbe1dc_mobile-case-item-6.png"/>
<div className="case-item-overlay"></div>
</div>
<div className="case-item-content">
<h3 className="case-item-title on-mobile-dev-page">Lyfetrac</h3>
<div className="case-item-description">Healthcare management app: subscriptions, medication reminders, health data tracking, and Google Calendar sync for individuals and families.</div>
</div>
</div>
</div>
</div>
</div>
<div className="slider-buttons slider-buttons_portfolio on-mobile-dev-page">
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
</section>
<section className="tech-services" id="services">
<h2 className="tech-section-title mb-60" color-word="#00e5ff" color-words-index="3" lines-slide-up="" text-split="">Why teams pick techforbs</h2>
<ul className="tech-service-list" role="list">
<li className="tech-service-item fade-up-alt">
<div className="tech-service-item-icon is-large w-embed"><svg fill="none" height="100%" viewBox="0 0 48 48" width="100%" xmlns="http://www.w3.org/2000/svg">
<rect height="47.2258" rx="13.5484" stroke="#FAFAFA" strokeOpacity="0.3" strokeWidth="0.774194" width="47.2258" x="0.387097" y="0.387097"></rect>
<path d="M21.9589 25.4157C22.301 25.4161 22.578 25.6936 22.5777 26.0357L22.5715 32.5666C22.571 33.1184 21.9036 33.3941 21.5138 33.0035L14.9891 26.4665C14.5993 26.0759 14.8762 25.4091 15.428 25.4096L21.9589 25.4157Z" fill="white" fillOpacity="0.3"></path>
<path d="M22.5863 15.1582C22.9283 15.1586 23.2054 15.4361 23.205 15.7782L23.1989 22.3091C23.1984 22.8609 22.531 23.1366 22.1412 22.746L15.6164 16.209C15.2266 15.8185 15.5036 15.1516 16.0554 15.1521L22.5863 15.1582Z" fill="white" fillOpacity="0.3"></path>
<path d="M32.4576 25.2321C32.7996 25.2324 33.0767 25.5099 33.0763 25.852L33.0702 32.3829C33.0697 32.9347 32.4023 33.2104 32.0125 32.8199L25.4877 26.2828C25.0979 25.8923 25.3749 25.2254 25.9267 25.2259L32.4576 25.2321Z" fill="white" fillOpacity="0.3"></path>
<path d="M33.0847 15.168C33.4268 15.1683 33.7038 15.4459 33.7035 15.788L33.6974 22.3189C33.6968 22.8706 33.0294 23.1463 32.6396 22.7558L26.1149 16.2188C25.7251 15.8282 26.002 15.1613 26.5538 15.1619L33.0847 15.168Z" fill="#00e5ff"></path>
</svg></div>
<div className="tech-service-item-caption">
<h3 className="tech-service-item-title">Communication you can rely on</h3>
<p className="text-body">Proactive updates, structured reporting, and smooth handovers. Feels in‑house - without hiring overhead.</p>
</div>
</li>
<li className="tech-service-item fade-up-alt">
<div className="tech-service-item-icon is-large w-embed"><svg fill="none" height="100%" viewBox="0 0 48 48" width="100%" xmlns="http://www.w3.org/2000/svg">
<rect height="47.2258" rx="13.5484" stroke="#FAFAFA" strokeOpacity="0.3" strokeWidth="0.774194" width="47.2258" x="0.387097" y="0.387097"></rect>
<circle cx="27.5681" cy="21.5264" fill="white" fillOpacity="0.3" r="6.40072" transform="rotate(-45 27.5681 21.5264)"></circle>
<circle cx="21.5273" cy="27.5676" fill="#00e5ff" r="8.11557" transform="rotate(-45 21.5273 27.5676)"></circle>
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
<p className="text-body">Clear scope control, NDA, limited access, and backups - so your IP stays safe. With TechForbs as your <strong>mobile application development company</strong>, you’re backed by proven reliability.</p>
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
<a className="tech-ecosystem-item w-inline-block" href="#">
<div className="tech-ecosystem-item-image-wrap"><img alt="Android logo" className="tech-ecosystem-item-image" loading="lazy" src="/images/services/all_ref_assets/6659bbdcba18114ecbf12081_Android.webp"/></div>
<div className="tech-ecosystem-item-divider"></div>
<div className="tech-ecosystem-item-title">Android</div>
</a>
</div>
<div className="swiper-slide w-dyn-item" role="listitem">
<a className="tech-ecosystem-item w-inline-block" href="#">
<div className="tech-ecosystem-item-image-wrap"><img alt="JavaScript logo" className="tech-ecosystem-item-image" loading="lazy" src="/images/services/all_ref_assets/6659bcc61549e9032bc974d9_java.webp"/></div>
<div className="tech-ecosystem-item-divider"></div>
<div className="tech-ecosystem-item-title">Java</div>
</a>
</div>
<div className="swiper-slide w-dyn-item" role="listitem">
<a className="tech-ecosystem-item w-inline-block" href="#">
<div className="tech-ecosystem-item-image-wrap"><img alt="IOS logo" className="tech-ecosystem-item-image" loading="lazy" src="/images/services/all_ref_assets/6659bcf3f08576e82e7760ab_ios.webp"/></div>
<div className="tech-ecosystem-item-divider"></div>
<div className="tech-ecosystem-item-title">ios</div>
</a>
</div>
<div className="swiper-slide w-dyn-item" role="listitem">
<a className="tech-ecosystem-item w-inline-block" href="#">
<div className="tech-ecosystem-item-image-wrap"><img alt="Kotlin logo" className="tech-ecosystem-item-image" loading="lazy" src="/images/services/all_ref_assets/6659bd1d903dd55cb70a9a46_kotlin.webp"/></div>
<div className="tech-ecosystem-item-divider"></div>
<div className="tech-ecosystem-item-title">Kotlin</div>
</a>
</div>
<div className="swiper-slide w-dyn-item" role="listitem">
<a className="tech-ecosystem-item w-inline-block" href="#">
<div className="tech-ecosystem-item-image-wrap"><img alt="Swift logo" className="tech-ecosystem-item-image" loading="lazy" src="/images/services/all_ref_assets/6659bd46881b694e67ef84cc_Swift.webp"/></div>
<div className="tech-ecosystem-item-divider"></div>
<div className="tech-ecosystem-item-title">Swift</div>
</a>
</div>
<div className="swiper-slide w-dyn-item" role="listitem">
<a className="tech-ecosystem-item w-inline-block" href="#">
<div className="tech-ecosystem-item-image-wrap"><img alt="Flutter logo" className="tech-ecosystem-item-image" loading="lazy" src="/images/services/all_ref_assets/6659bb31a63ee29907e0a7c0_Flutter.png"/></div>
<div className="tech-ecosystem-item-divider"></div>
<div className="tech-ecosystem-item-title">Flutter</div>
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
<div className="tech-main-inner-wider">
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
<div itemProp="name">Do you assist in developing my early-stage mobile app idea?</div>
</div>
<nav className="faq-item-header-dropdown w-dropdown-list">
<div className="faq-item-header-dropdown-inner" itemProp="acceptedAnswer" itemScope={true} itemType="https://schema.org/Answer">
<div className="w-richtext" itemProp="text">
<p>Yes - as a custom mobile application development services provider, we can take responsibility for any stage, including pre-design and pre-coding, or run full-cycle delivery. Our mobile development services
                                                    save you from hiring and managing extra staff.</p>
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
<div itemProp="name">How do you safeguard my intellectual property?</div>
</div>
<nav className="faq-item-header-dropdown w-dropdown-list">
<div className="faq-item-header-dropdown-inner" itemProp="acceptedAnswer" itemScope={true} itemType="https://schema.org/Answer">
<div className="w-richtext" itemProp="text">
<p>We sign an NDA before work starts, limit access on a need-to-know basis, and follow standard security practices. Choosing an experienced app development company like TechForbs guarantees data protection alongside
                                                    high-quality mobile app development services.</p>
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
<div itemProp="name">How can my company benefit from outsourcing mobile development?</div>
</div>
<nav className="faq-item-header-dropdown w-dropdown-list">
<div className="faq-item-header-dropdown-inner" itemProp="acceptedAnswer" itemScope={true} itemType="https://schema.org/Answer">
<div className="w-richtext" itemProp="text">
<p>Outsourcing to a mobile app development agency means cost savings, faster time-to-market, and zero onboarding overhead. You also gain access to custom mobile app development services and scalable mobile
                                                    development services.</p>
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
<div itemProp="name">How to select a mobile development provider?</div>
</div>
<nav className="faq-item-header-dropdown w-dropdown-list">
<div className="faq-item-header-dropdown-inner" itemProp="acceptedAnswer" itemScope={true} itemType="https://schema.org/Answer">
<div className="w-richtext" itemProp="text">
<p>Look for proven mobile app development solutions, similar projects in the portfolio, and independent reviews. Partnering with a trusted mobile software development company ensures domain expertise and transparent
                                                    cooperation.</p>
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
<div itemProp="name">What is the estimated cost of developing a mobile app?</div>
</div>
<nav className="faq-item-header-dropdown w-dropdown-list">
<div className="faq-item-header-dropdown-inner" itemProp="acceptedAnswer" itemScope={true} itemType="https://schema.org/Answer">
<div className="w-richtext" itemProp="text">
<p>MVPs typically start from ~$10,000. Full-featured apps usually start from ~$20,000 depending on features and design complexity. Our mobile app development company helps you estimate costs precisely and scale
                                                    with predictable budgets.</p>
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
