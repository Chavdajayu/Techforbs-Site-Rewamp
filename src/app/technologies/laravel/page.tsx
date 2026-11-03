import type { Metadata } from "next";
import Navbar from "@/components/navigation/Navbar";
import BrandLogos from "@/components/brand-logos/BrandLogos";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/footer/Footer";
import SmoothScroll from "@/components/smooth-scroll/SmoothScroll";
import TechClientInteractions from "@/components/technologies/TechClientInteractions";

export const metadata: Metadata = {
  title: "Laravel Development Services | Enterprise SaaS & Web Apps - TechForbs",
  description: "Scale your business with enterprise Laravel development, high-throughput REST/GraphQL APIs, microservices, and robust cloud applications by TechForbs.",
};

export default function TechPage() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#101010] text-white selection:bg-[#00e5ff] selection:text-black">
        <Navbar />
        <TechClientInteractions />
        <main className="relative z-10 flex flex-col">
          
    <section className="tech-hero is-technology-page">
        <div className="tech-hero-gradient"></div>
        <div className="tech-hero-inner v2"><img width="1424" loading="lazy" alt="Hero section banner" src="/images/technologies/666b014ad7b5c3afc1f26d6e_php-min.webp" className="tech-hero-bg" />
            <div className="tech-hero-content">
                <div className="tech-hero-title__wrap">
                    <div data-wf--title-circle--variant="base" className="title-circle service-hero_circle w-embed"><svg width="100%" height="100%" viewBox="0 0 453 89" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
<path d="M316.771 87C405.472 79.7966 451 58.571 451 43.7797C451 20.7054 350.488 2 226.5 2C102.512 2 2.00001 20.7054 2.00001 43.7797C2.00001 66.8539 102.512 85.5593 226.5 85.5593C268.367 85.5593 324.621 81.9576 362.299 71.8729" stroke="#EB5951" strokeWidth="3" strokeLinecap="round"/>
</svg></div>
                    <h1 circle-width="8" text-split="" lines-slide-up="" circle-index="5" className="tech-hero-title tech-hero-title_small-mobile">Build scalable enterprise systems<br />with Laravel engineering</h1>
                </div>
                <div className="fade-up-alt">
                    <div className="tech-hero-text">Transform complex business requirements into scalable digital products using one of the world&#x27;s most versatile programming languages. TechForbs delivers sensational results with streamlined management and technical excellence.</div>
                    <div
                        className="button-wrap is-left"><a href="#contact-section" className="button button_smaller">Get guidance</a></div>
            </div>
        </div>
        </div>
    </section>
    <main className="tech-main padding-top-112 pb-0">
        <div className="tech-main-inner z-index-3 is-sticky-wr">
            <div className="tech-content tab-mw-100">
                <section id="services" className="tech-services">
                    <h2 color-word="#eb5951" text-split="" lines-slide-up="" color-words-index="0" className="tech-section-title mb-60"><span>Services</span> to deliver maximum impact</h2>
                    <ul role="list" className="tech-service-list">
                        <li className="tech-service-item fade-up-alt">
                            <div className="tech-service-item-icon w-embed"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="none">
<path fillRule="evenodd" clipRule="evenodd" d="M5.27729 5.27727C7.7642 2.79039 11.2034 1.25 15 1.25C18.7966 1.25 22.2358 2.79039 24.7227 5.27728C27.2096 7.76419 28.75 11.2034 28.75 15C28.75 18.7966 27.2096 22.2358 24.7227 24.7227C22.2358 27.2096 18.7966 28.75 15 28.75C11.2034 28.75 7.7642 27.2096 5.27728 24.7227C2.7904 22.2358 1.25 18.7966 1.25 15C1.25 11.2034 2.79041 7.76419 5.27729 5.27727ZM15 3.75C11.8931 3.75 9.08229 5.00783 7.04504 7.04505C5.00782 9.08231 3.75 11.8931 3.75 15C3.75 18.1069 5.00783 20.9177 7.04505 22.9549C9.0823 24.9922 11.8931 26.25 15 26.25C18.1069 26.25 20.9177 24.9922 22.9549 22.9549C24.9922 20.9177 26.25 18.1069 26.25 15C26.25 11.8931 24.9922 9.0823 22.9549 7.04505C20.9177 5.00783 18.1069 3.75 15 3.75ZM22.1339 10.3661C22.622 10.8543 22.622 11.6457 22.1339 12.1339L14.6339 19.6339C14.1457 20.122 13.3543 20.122 12.8661 19.6339L9.11612 15.8839C8.62796 15.3957 8.62796 14.6043 9.11612 14.1161C9.60427 13.628 10.3957 13.628 10.8839 14.1161L13.75 16.9822L20.3661 10.3661C20.8543 9.87796 21.6457 9.87796 22.1339 10.3661Z" fill="#616161"/>
<path fillRule="evenodd" clipRule="evenodd" d="M7.04504 7.04505C9.08229 5.00783 11.8931 3.75 15 3.75C18.1069 3.75 20.9177 5.00783 22.9549 7.04505C24.9922 9.0823 26.25 11.8931 26.25 15C26.25 18.1069 24.9922 20.9177 22.9549 22.9549C20.9177 24.9922 18.1069 26.25 15 26.25C11.8931 26.25 9.0823 24.9922 7.04505 22.9549C5.00783 20.9177 3.75 18.1069 3.75 15C3.75 11.8931 5.00782 9.08231 7.04504 7.04505ZM22.1339 10.3661C22.622 10.8543 22.622 11.6457 22.1339 12.1339L14.6339 19.6339C14.1457 20.122 13.3543 20.122 12.8661 19.6339L9.11612 15.8839C8.62796 15.3957 8.62796 14.6043 9.11612 14.1161C9.60427 13.628 10.3957 13.628 10.8839 14.1161L13.75 16.9822L20.3661 10.3661C20.8543 9.87796 21.6457 9.87796 22.1339 10.3661Z" fill="#A0EEB0"/>
</svg></div>
                            <div className="tech-service-item-caption">
                                <h3 className="tech-service-item-title">Custom Laravel & SaaS Development</h3>
                                <p className="text-body">Translating your business goals into powerful technical solutions while you focus on core operations and market strategy.</p>
                            </div>
                        </li>
                        <li className="tech-service-item fade-up-alt">
                            <div className="tech-service-item-icon w-embed"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="none">
<path fillRule="evenodd" clipRule="evenodd" d="M5.27729 5.27727C7.7642 2.79039 11.2034 1.25 15 1.25C18.7966 1.25 22.2358 2.79039 24.7227 5.27728C27.2096 7.76419 28.75 11.2034 28.75 15C28.75 18.7966 27.2096 22.2358 24.7227 24.7227C22.2358 27.2096 18.7966 28.75 15 28.75C11.2034 28.75 7.7642 27.2096 5.27728 24.7227C2.7904 22.2358 1.25 18.7966 1.25 15C1.25 11.2034 2.79041 7.76419 5.27729 5.27727ZM15 3.75C11.8931 3.75 9.08229 5.00783 7.04504 7.04505C5.00782 9.08231 3.75 11.8931 3.75 15C3.75 18.1069 5.00783 20.9177 7.04505 22.9549C9.0823 24.9922 11.8931 26.25 15 26.25C18.1069 26.25 20.9177 24.9922 22.9549 22.9549C24.9922 20.9177 26.25 18.1069 26.25 15C26.25 11.8931 24.9922 9.0823 22.9549 7.04505C20.9177 5.00783 18.1069 3.75 15 3.75ZM22.1339 10.3661C22.622 10.8543 22.622 11.6457 22.1339 12.1339L14.6339 19.6339C14.1457 20.122 13.3543 20.122 12.8661 19.6339L9.11612 15.8839C8.62796 15.3957 8.62796 14.6043 9.11612 14.1161C9.60427 13.628 10.3957 13.628 10.8839 14.1161L13.75 16.9822L20.3661 10.3661C20.8543 9.87796 21.6457 9.87796 22.1339 10.3661Z" fill="#616161"/>
<path fillRule="evenodd" clipRule="evenodd" d="M7.04504 7.04505C9.08229 5.00783 11.8931 3.75 15 3.75C18.1069 3.75 20.9177 5.00783 22.9549 7.04505C24.9922 9.0823 26.25 11.8931 26.25 15C26.25 18.1069 24.9922 20.9177 22.9549 22.9549C20.9177 24.9922 18.1069 26.25 15 26.25C11.8931 26.25 9.0823 24.9922 7.04505 22.9549C5.00783 20.9177 3.75 18.1069 3.75 15C3.75 11.8931 5.00782 9.08231 7.04504 7.04505ZM22.1339 10.3661C22.622 10.8543 22.622 11.6457 22.1339 12.1339L14.6339 19.6339C14.1457 20.122 13.3543 20.122 12.8661 19.6339L9.11612 15.8839C8.62796 15.3957 8.62796 14.6043 9.11612 14.1161C9.60427 13.628 10.3957 13.628 10.8839 14.1161L13.75 16.9822L20.3661 10.3661C20.8543 9.87796 21.6457 9.87796 22.1339 10.3661Z" fill="#A0EEB0"/>
</svg></div>
                            <div className="tech-service-item-caption">
                                <h3 className="tech-service-item-title">Dedicated Laravel Outstaffing & Squads</h3>
                                <p className="text-body">Expanding your project team with seasoned PHP specialists who adapt quickly to your internal policies and development workflows.</p>
                            </div>
                        </li>
                        <li className="tech-service-item fade-up-alt">
                            <div className="tech-service-item-icon w-embed"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="none">
<path fillRule="evenodd" clipRule="evenodd" d="M5.27729 5.27727C7.7642 2.79039 11.2034 1.25 15 1.25C18.7966 1.25 22.2358 2.79039 24.7227 5.27728C27.2096 7.76419 28.75 11.2034 28.75 15C28.75 18.7966 27.2096 22.2358 24.7227 24.7227C22.2358 27.2096 18.7966 28.75 15 28.75C11.2034 28.75 7.7642 27.2096 5.27728 24.7227C2.7904 22.2358 1.25 18.7966 1.25 15C1.25 11.2034 2.79041 7.76419 5.27729 5.27727ZM15 3.75C11.8931 3.75 9.08229 5.00783 7.04504 7.04505C5.00782 9.08231 3.75 11.8931 3.75 15C3.75 18.1069 5.00783 20.9177 7.04505 22.9549C9.0823 24.9922 11.8931 26.25 15 26.25C18.1069 26.25 20.9177 24.9922 22.9549 22.9549C24.9922 20.9177 26.25 18.1069 26.25 15C26.25 11.8931 24.9922 9.0823 22.9549 7.04505C20.9177 5.00783 18.1069 3.75 15 3.75ZM22.1339 10.3661C22.622 10.8543 22.622 11.6457 22.1339 12.1339L14.6339 19.6339C14.1457 20.122 13.3543 20.122 12.8661 19.6339L9.11612 15.8839C8.62796 15.3957 8.62796 14.6043 9.11612 14.1161C9.60427 13.628 10.3957 13.628 10.8839 14.1161L13.75 16.9822L20.3661 10.3661C20.8543 9.87796 21.6457 9.87796 22.1339 10.3661Z" fill="#616161"/>
<path fillRule="evenodd" clipRule="evenodd" d="M7.04504 7.04505C9.08229 5.00783 11.8931 3.75 15 3.75C18.1069 3.75 20.9177 5.00783 22.9549 7.04505C24.9922 9.0823 26.25 11.8931 26.25 15C26.25 18.1069 24.9922 20.9177 22.9549 22.9549C20.9177 24.9922 18.1069 26.25 15 26.25C11.8931 26.25 9.0823 24.9922 7.04505 22.9549C5.00783 20.9177 3.75 18.1069 3.75 15C3.75 11.8931 5.00782 9.08231 7.04504 7.04505ZM22.1339 10.3661C22.622 10.8543 22.622 11.6457 22.1339 12.1339L14.6339 19.6339C14.1457 20.122 13.3543 20.122 12.8661 19.6339L9.11612 15.8839C8.62796 15.3957 8.62796 14.6043 9.11612 14.1161C9.60427 13.628 10.3957 13.628 10.8839 14.1161L13.75 16.9822L20.3661 10.3661C20.8543 9.87796 21.6457 9.87796 22.1339 10.3661Z" fill="#A0EEB0"/>
</svg></div>
                            <div className="tech-service-item-caption">
                                <h3 className="tech-service-item-title">Milestone delegation</h3>
                                <p className="text-body">Entrusting our team with specific stages or narrow-focused tasks while maintaining your in-house team&#x27;s productivity and focus.</p>
                            </div>
                        </li>
                        <li className="tech-service-item fade-up-alt">
                            <div className="tech-service-item-icon w-embed"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="none">
<path fillRule="evenodd" clipRule="evenodd" d="M5.27729 5.27727C7.7642 2.79039 11.2034 1.25 15 1.25C18.7966 1.25 22.2358 2.79039 24.7227 5.27728C27.2096 7.76419 28.75 11.2034 28.75 15C28.75 18.7966 27.2096 22.2358 24.7227 24.7227C22.2358 27.2096 18.7966 28.75 15 28.75C11.2034 28.75 7.7642 27.2096 5.27728 24.7227C2.7904 22.2358 1.25 18.7966 1.25 15C1.25 11.2034 2.79041 7.76419 5.27729 5.27727ZM15 3.75C11.8931 3.75 9.08229 5.00783 7.04504 7.04505C5.00782 9.08231 3.75 11.8931 3.75 15C3.75 18.1069 5.00783 20.9177 7.04505 22.9549C9.0823 24.9922 11.8931 26.25 15 26.25C18.1069 26.25 20.9177 24.9922 22.9549 22.9549C24.9922 20.9177 26.25 18.1069 26.25 15C26.25 11.8931 24.9922 9.0823 22.9549 7.04505C20.9177 5.00783 18.1069 3.75 15 3.75ZM22.1339 10.3661C22.622 10.8543 22.622 11.6457 22.1339 12.1339L14.6339 19.6339C14.1457 20.122 13.3543 20.122 12.8661 19.6339L9.11612 15.8839C8.62796 15.3957 8.62796 14.6043 9.11612 14.1161C9.60427 13.628 10.3957 13.628 10.8839 14.1161L13.75 16.9822L20.3661 10.3661C20.8543 9.87796 21.6457 9.87796 22.1339 10.3661Z" fill="#616161"/>
<path fillRule="evenodd" clipRule="evenodd" d="M7.04504 7.04505C9.08229 5.00783 11.8931 3.75 15 3.75C18.1069 3.75 20.9177 5.00783 22.9549 7.04505C24.9922 9.0823 26.25 11.8931 26.25 15C26.25 18.1069 24.9922 20.9177 22.9549 22.9549C20.9177 24.9922 18.1069 26.25 15 26.25C11.8931 26.25 9.0823 24.9922 7.04505 22.9549C5.00783 20.9177 3.75 18.1069 3.75 15C3.75 11.8931 5.00782 9.08231 7.04504 7.04505ZM22.1339 10.3661C22.622 10.8543 22.622 11.6457 22.1339 12.1339L14.6339 19.6339C14.1457 20.122 13.3543 20.122 12.8661 19.6339L9.11612 15.8839C8.62796 15.3957 8.62796 14.6043 9.11612 14.1161C9.60427 13.628 10.3957 13.628 10.8839 14.1161L13.75 16.9822L20.3661 10.3661C20.8543 9.87796 21.6457 9.87796 22.1339 10.3661Z" fill="#A0EEB0"/>
</svg></div>
                            <div className="tech-service-item-caption">
                                <h3 className="tech-service-item-title">Plugin &amp; extension development</h3>
                                <p className="text-body">Creating custom PHP plugins that extend existing functionality without disrupting your current architecture or business processes.</p>
                            </div>
                        </li>
                    </ul><img src="/images/technologies/65c10507e4c82427ebacb631_content-line-1.svg" loading="lazy" alt="" className="tech-services-decor in-new-page" /></section>
                <section id="why-we" className="tech-benefits">
                    <h2 color-word="#eb5951" text-split="" lines-slide-up="" color-words-index="4,5" className="tech-section-title mb-60">Winning with us: our clients' success</h2>
                    <div className="cases-wrap">
                        <div className="swiper cases-slider w-dyn-list">
                            <div itemType="https://schema.org/ItemList" itemScope={true} role="list" className="swiper-wrapper w-dyn-items">
                                <div itemProp="itemListElement" itemScope={true} itemType="https://schema.org/CreativeWork" role="listitem" className="swiper-slide w-dyn-item">
                                    <div className="case-item is-no-link">
                                        <a href="/portfolio/harley-davidson" className="case-item_link w-inline-block">
                                            <div className="hidden">custom CRM development for Harley Davidson</div>
                                        </a>
                                        <div style={{ backgroundColor: "#f96601" }} className="case-item-image"><img width="416" height="439" alt="" src="/images/technologies/66335e1b00f641134b6bcbef_case-bg.svg" loading="lazy" className="case-item-circles" /><img className="case-item-thumb min-height"
                                                src="/images/technologies/67ebaf9e43a6b4badaf09631_6.jpg" width="745" height="618" alt="Bütikofer Harley-Davidson Zürich personalized landing page screenshot, portfolio project of TechForbs" itemProp="image" loading="lazy"
                                            /></div>
                                        <h4 itemProp="headline" className="case-item-title">custom CRM development for Harley Davidson</h4>
                                        <p itemProp="description" className="case-item-excerpt hidden w-condition-invisible w-dyn-bind-empty"></p>
                                        <div className="case-item_tags">
                                            <div className="w-dyn-list">
                                                <div role="list" className="cms-tag_list w-dyn-items">
                                                    <div role="listitem" className="cms-tag w-dyn-item">
                                                        <div fs-list-field="industry">Automotive</div>
                                                    </div>
                                                    <div role="listitem" className="cms-tag w-dyn-item">
                                                        <div fs-list-field="industry">Retail</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-dyn-list">
                                                <div role="list" className="cms-tag_list w-dyn-items">
                                                    <div role="listitem" className="cms-tag w-dyn-item">
                                                        <div fs-list-field="сapability">CRM development</div>
                                                    </div>
                                                    <div role="listitem" className="cms-tag w-dyn-item">
                                                        <div fs-list-field="сapability">Data &amp; Analytics</div>
                                                    </div>
                                                    <div role="listitem" className="cms-tag w-dyn-item">
                                                        <div fs-list-field="сapability">AI &amp; Automation</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hidden">
                                            <div fs-cmsfilter-field="country">Switzerland</div>
                                            <div fs-cmsfilter-field="techstack">PHP</div>
                                            <div fs-cmsfilter-field="techstack" className="w-dyn-bind-empty"></div>
                                            <div fs-cmsfilter-field="techstack" className="w-dyn-bind-empty"></div>
                                        </div>
                                    </div>
                                </div>
                                <div itemProp="itemListElement" itemScope={true} itemType="https://schema.org/CreativeWork" role="listitem" className="swiper-slide w-dyn-item">
                                    <div className="case-item is-no-link">
                                        <a href="/portfolio/brotherfilm" className="case-item_link w-inline-block">
                                            <div className="hidden">Brother Film Co: where creativity meets code</div>
                                        </a>
                                        <div style={{ backgroundColor: "#f3221c" }} className="case-item-image"><img width="416" height="439" alt="" src="/images/technologies/66335e1b00f641134b6bcbef_case-bg.svg" loading="lazy" className="case-item-circles" /><img className="case-item-thumb min-height"
                                                src="/images/technologies/67bf21e1791d368d24bcbe49_brothers-case.jpg" width="745" height="618" alt="Brother Film homepage screenshot, portfolio project for a creative production company" itemProp="image" loading="lazy"
                                            /></div>
                                        <h4 itemProp="headline" className="case-item-title">Brother Film Co: where creativity meets code</h4>
                                        <p itemProp="description" className="case-item-excerpt hidden w-condition-invisible w-dyn-bind-empty"></p>
                                        <div className="case-item_tags">
                                            <div className="w-dyn-list">
                                                <div role="list" className="cms-tag_list w-dyn-items">
                                                    <div role="listitem" className="cms-tag w-dyn-item">
                                                        <div fs-list-field="industry">Telecom &amp; Media</div>
                                                    </div>
                                                    <div role="listitem" className="cms-tag w-dyn-item">
                                                        <div fs-list-field="industry">Entertainment</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-dyn-list">
                                                <div role="list" className="cms-tag_list w-dyn-items">
                                                    <div role="listitem" className="cms-tag w-dyn-item">
                                                        <div fs-list-field="сapability">UX/UI</div>
                                                    </div>
                                                    <div role="listitem" className="cms-tag w-dyn-item">
                                                        <div fs-list-field="сapability">Systems Integration</div>
                                                    </div>
                                                    <div role="listitem" className="cms-tag w-dyn-item">
                                                        <div fs-list-field="сapability">AI &amp; Automation</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hidden">
                                            <div fs-cmsfilter-field="country">UK</div>
                                            <div fs-cmsfilter-field="techstack">Wordpress</div>
                                            <div fs-cmsfilter-field="techstack">PHP</div>
                                            <div fs-cmsfilter-field="techstack" className="w-dyn-bind-empty"></div>
                                        </div>
                                    </div>
                                </div>
                                <div itemProp="itemListElement" itemScope={true} itemType="https://schema.org/CreativeWork" role="listitem" className="swiper-slide w-dyn-item">
                                    <div className="case-item is-no-link">
                                        <a href="/portfolio/warehouse" className="case-item_link w-inline-block">
                                            <div className="hidden">global shopify order management: from chaos to seamless control</div>
                                        </a>
                                        <div style={{ backgroundColor: "#70859e" }} className="case-item-image"><img width="416" height="439" alt="" src="/images/technologies/66335e1b00f641134b6bcbef_case-bg.svg" loading="lazy" className="case-item-circles" /><img className="case-item-thumb min-height"
                                                src="/images/technologies/67ea410abecd965d4c17e515_12.webp" width="745" height="618" alt="Order and warehouse management system for a Shopify business screenshot, portfolio project" itemProp="image" loading="lazy"
                                            /></div>
                                        <h4 itemProp="headline" className="case-item-title">global shopify order management: from chaos to seamless control</h4>
                                        <p itemProp="description" className="case-item-excerpt hidden w-condition-invisible w-dyn-bind-empty"></p>
                                        <div className="case-item_tags">
                                            <div className="w-dyn-list">
                                                <div role="list" className="cms-tag_list w-dyn-items">
                                                    <div role="listitem" className="cms-tag w-dyn-item">
                                                        <div fs-list-field="industry">Retail</div>
                                                    </div>
                                                    <div role="listitem" className="cms-tag w-dyn-item">
                                                        <div fs-list-field="industry">E-commerce</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-dyn-list">
                                                <div role="list" className="cms-tag_list w-dyn-items">
                                                    <div role="listitem" className="cms-tag w-dyn-item">
                                                        <div fs-list-field="сapability">Custom Web Development</div>
                                                    </div>
                                                    <div role="listitem" className="cms-tag w-dyn-item">
                                                        <div fs-list-field="сapability">Systems Integration</div>
                                                    </div>
                                                    <div role="listitem" className="cms-tag w-dyn-item">
                                                        <div fs-list-field="сapability">Cloud Infrastructure</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hidden">
                                            <div fs-cmsfilter-field="country">UK</div>
                                            <div fs-cmsfilter-field="techstack">React</div>
                                            <div fs-cmsfilter-field="techstack">PHP</div>
                                            <div fs-cmsfilter-field="techstack" className="w-dyn-bind-empty"></div>
                                        </div>
                                    </div>
                                </div>
                                <div itemProp="itemListElement" itemScope={true} itemType="https://schema.org/CreativeWork" role="listitem" className="swiper-slide w-dyn-item">
                                    <div className="case-item is-no-link">
                                        <a href="/portfolio/nettavisen" className="case-item_link w-inline-block">
                                            <div className="hidden">Nettavisen &amp; TechForbs: 8 years of digital innovation</div>
                                        </a>
                                        <div style={{ backgroundColor: "#7d5ce9" }} className="case-item-image"><img width="416" height="439" alt="" src="/images/technologies/66335e1b00f641134b6bcbef_case-bg.svg" loading="lazy" className="case-item-circles" /><img className="case-item-thumb min-height"
                                                src="/images/technologies/67bf2a9ba3044b5d1612851b_brothers-case.jpg" width="745" height="618" alt="Online newspaper, portfolio project with financial comparison tools on custom WordPress" itemProp="image" loading="lazy"
                                            /></div>
                                        <h4 itemProp="headline" className="case-item-title">Nettavisen &amp; TechForbs: 8 years of digital innovation</h4>
                                        <p itemProp="description" className="case-item-excerpt hidden w-condition-invisible w-dyn-bind-empty"></p>
                                        <div className="case-item_tags">
                                            <div className="w-dyn-list">
                                                <div role="list" className="cms-tag_list w-dyn-items">
                                                    <div role="listitem" className="cms-tag w-dyn-item">
                                                        <div fs-list-field="industry">Telecom &amp; Media</div>
                                                    </div>
                                                    <div role="listitem" className="cms-tag w-dyn-item">
                                                        <div fs-list-field="industry">Web portals</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-dyn-list">
                                                <div role="list" className="cms-tag_list w-dyn-items">
                                                    <div role="listitem" className="cms-tag w-dyn-item">
                                                        <div fs-list-field="сapability">Systems Integration</div>
                                                    </div>
                                                    <div role="listitem" className="cms-tag w-dyn-item">
                                                        <div fs-list-field="сapability">CMS Development</div>
                                                    </div>
                                                    <div role="listitem" className="cms-tag w-dyn-item">
                                                        <div fs-list-field="сapability">SEO</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hidden">
                                            <div fs-cmsfilter-field="country">Norway</div>
                                            <div fs-cmsfilter-field="techstack">WordPress</div>
                                            <div fs-cmsfilter-field="techstack">PHP</div>
                                            <div fs-cmsfilter-field="techstack" className="w-dyn-bind-empty"></div>
                                        </div>
                                    </div>
                                </div>
                                <div itemProp="itemListElement" itemScope={true} itemType="https://schema.org/CreativeWork" role="listitem" className="swiper-slide w-dyn-item">
                                    <div className="case-item is-no-link">
                                        <a href="/portfolio/marketing-agency" className="case-item_link w-inline-block">
                                            <div className="hidden">innovative web development for a marketing agency: creative and technical masterpiece</div>
                                        </a>
                                        <div style={{ backgroundColor: "#f8c3d9" }} className="case-item-image"><img width="416" height="439" alt="" src="/images/technologies/66335e1b00f641134b6bcbef_case-bg.svg" loading="lazy" className="case-item-circles" /><img className="case-item-thumb min-height"
                                                src="/images/technologies/67ea422dbdd9a4cda0fb7ee5_7.jpg" width="745" height="618" alt="Creative agency homepage screenshot with a fried egg visual and design, content, digital service tags" itemProp="image" loading="lazy"
                                            /></div>
                                        <h4 itemProp="headline" className="case-item-title">innovative web development for a marketing agency: creative and technical masterpiece</h4>
                                        <p itemProp="description" className="case-item-excerpt hidden w-condition-invisible w-dyn-bind-empty"></p>
                                        <div className="case-item_tags">
                                            <div className="w-dyn-list">
                                                <div role="list" className="cms-tag_list w-dyn-items">
                                                    <div role="listitem" className="cms-tag w-dyn-item">
                                                        <div fs-list-field="industry">Telecom &amp; Media</div>
                                                    </div>
                                                    <div role="listitem" className="cms-tag w-dyn-item">
                                                        <div fs-list-field="industry">Marketing &amp; Advertising </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-dyn-list">
                                                <div role="list" className="cms-tag_list w-dyn-items">
                                                    <div role="listitem" className="cms-tag w-dyn-item">
                                                        <div fs-list-field="сapability">AI &amp; Automation</div>
                                                    </div>
                                                    <div role="listitem" className="cms-tag w-dyn-item">
                                                        <div fs-list-field="сapability">Data &amp; Analytics</div>
                                                    </div>
                                                    <div role="listitem" className="cms-tag w-dyn-item">
                                                        <div fs-list-field="сapability">UX/UI</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hidden">
                                            <div fs-cmsfilter-field="country">Switzerland</div>
                                            <div fs-cmsfilter-field="techstack">WordPress</div>
                                            <div fs-cmsfilter-field="techstack">php</div>
                                            <div fs-cmsfilter-field="techstack" className="w-dyn-bind-empty"></div>
                                        </div>
                                    </div>
                                </div>
                                <div itemProp="itemListElement" itemScope={true} itemType="https://schema.org/CreativeWork" role="listitem" className="swiper-slide w-dyn-item">
                                    <div className="case-item is-no-link">
                                        <a href="/portfolio/automotive" className="case-item_link w-inline-block">
                                            <div className="hidden">automotive CRM development services: keep deals moving</div>
                                        </a>
                                        <div style={{ backgroundColor: "#da0023" }} className="case-item-image"><img width="416" height="439" alt="" src="/images/technologies/66335e1b00f641134b6bcbef_case-bg.svg" loading="lazy" className="case-item-circles" /><img className="case-item-thumb min-height"
                                                src="/images/technologies/67ebaff7e0cc7f1da43be19d_8.webp" width="745" height="618" alt="Automotive CRM homepage screenshot, portfolio project of TechForbs"
                                                itemProp="image" loading="lazy"
                                            /></div>
                                        <h4 itemProp="headline" className="case-item-title">automotive CRM development services: keep deals moving</h4>
                                        <p itemProp="description" className="case-item-excerpt hidden w-condition-invisible w-dyn-bind-empty"></p>
                                        <div className="case-item_tags">
                                            <div className="w-dyn-list">
                                                <div role="list" className="cms-tag_list w-dyn-items">
                                                    <div role="listitem" className="cms-tag w-dyn-item">
                                                        <div fs-list-field="industry">Automotive</div>
                                                    </div>
                                                    <div role="listitem" className="cms-tag w-dyn-item">
                                                        <div fs-list-field="industry">Manufacturing</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-dyn-list">
                                                <div role="list" className="cms-tag_list w-dyn-items">
                                                    <div role="listitem" className="cms-tag w-dyn-item">
                                                        <div fs-list-field="сapability">Custom Web Development</div>
                                                    </div>
                                                    <div role="listitem" className="cms-tag w-dyn-item">
                                                        <div fs-list-field="сapability">UX/UI</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hidden">
                                            <div fs-cmsfilter-field="country">Switzerland</div>
                                            <div fs-cmsfilter-field="techstack">PHP</div>
                                            <div fs-cmsfilter-field="techstack">Laravel</div>
                                            <div fs-cmsfilter-field="techstack" className="w-dyn-bind-empty"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slider-buttons slider-buttons_portfolio">
                            <div className="button button_slider swis-portfolio-prev">
                                <div className="button-slider-arrow w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none">
<path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="2"/>
</svg></div>
                            </div>
                            <div className="button button_slider swis-portfolio-next">
                                <div className="button-slider-arrow w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none">
<path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2"/>
</svg></div>
                            </div>
                        </div>
                    </div>
                    <h2 color-word="#eb5951" text-split="" lines-slide-up="" color-words-index="3,5" className="tech-section-title mb-60">We build for reliability and performance</h2>
                    <ul role="list" className="tech-service-list is-2-grid">
                        <li className="tech-service-item fade-up-alt">
                            <div className="tech-service-item-icon w-embed"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" fill="none">
<rect width="7.46667" height="17.7333" rx="1.46296" fill="#EB5951"/>
<rect x="10.2656" width="7.46667" height="7.46667" rx="1.46296" fill="#EB5951"/>
<rect x="10.2656" y="10.2656" width="7.46667" height="7.46667" rx="3.73333" fill="white" fillOpacity="0.3"/>
<rect y="20.5312" width="7.46667" height="7.46667" rx="3.73333" fill="white" fillOpacity="0.3"/>
<rect x="28.002" y="28" width="7.46667" height="17.7333" rx="1.46296" transform="rotate(-180 28.002 28)" fill="#585858"/>
<rect x="28.002" y="7.46484" width="7.46667" height="7.46667" rx="3.73333" transform="rotate(-180 28.002 7.46484)" fill="white" fillOpacity="0.3"/>
<rect x="9.99609" y="20.5312" width="7.46667" height="7.46667" rx="1.46296" fill="#EB5951"/>
</svg></div>
                            <div className="tech-service-item-caption">
                                <h3 className="tech-service-item-title">Market-driven approach</h3>
                                <p className="text-body">Comprehensive research of competitive solutions and target audience needs before development.</p>
                            </div>
                        </li>
                        <li className="tech-service-item fade-up-alt">
                            <div className="tech-service-item-icon w-embed"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" fill="none">
<rect width="7.46667" height="17.7333" rx="1.46296" fill="#EB5951"/>
<rect x="10.2656" width="7.46667" height="7.46667" rx="1.46296" fill="#EB5951"/>
<rect x="10.2656" y="10.2656" width="7.46667" height="7.46667" rx="3.73333" fill="white" fillOpacity="0.3"/>
<rect y="20.5312" width="7.46667" height="7.46667" rx="3.73333" fill="white" fillOpacity="0.3"/>
<rect x="28.002" y="28" width="7.46667" height="17.7333" rx="1.46296" transform="rotate(-180 28.002 28)" fill="#585858"/>
<rect x="28.002" y="7.46484" width="7.46667" height="7.46667" rx="3.73333" transform="rotate(-180 28.002 7.46484)" fill="white" fillOpacity="0.3"/>
<rect x="9.99609" y="20.5312" width="7.46667" height="7.46667" rx="1.46296" fill="#EB5951"/>
</svg></div>
                            <div className="tech-service-item-caption">
                                <h3 className="tech-service-item-title">Accelerated delivery</h3>
                                <p className="text-body">Streamlined management that reduces time-to-market without compromising quality.</p>
                            </div>
                        </li>
                        <li className="tech-service-item fade-up-alt">
                            <div className="tech-service-item-icon w-embed"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" fill="none">
<rect width="7.46667" height="17.7333" rx="1.46296" fill="#EB5951"/>
<rect x="10.2656" width="7.46667" height="7.46667" rx="1.46296" fill="#EB5951"/>
<rect x="10.2656" y="10.2656" width="7.46667" height="7.46667" rx="3.73333" fill="white" fillOpacity="0.3"/>
<rect y="20.5312" width="7.46667" height="7.46667" rx="3.73333" fill="white" fillOpacity="0.3"/>
<rect x="28.002" y="28" width="7.46667" height="17.7333" rx="1.46296" transform="rotate(-180 28.002 28)" fill="#585858"/>
<rect x="28.002" y="7.46484" width="7.46667" height="7.46667" rx="3.73333" transform="rotate(-180 28.002 7.46484)" fill="white" fillOpacity="0.3"/>
<rect x="9.99609" y="20.5312" width="7.46667" height="7.46667" rx="1.46296" fill="#EB5951"/>
</svg></div>
                            <div className="tech-service-item-caption">
                                <h3 className="tech-service-item-title">Modular architecture</h3>
                                <p className="text-body">Building scalable solutions with independent, thoroughly tested modules for maximum reliability.</p>
                            </div>
                        </li>
                        <li className="tech-service-item fade-up-alt">
                            <div className="tech-service-item-icon w-embed"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" fill="none">
<rect width="7.46667" height="17.7333" rx="1.46296" fill="#EB5951"/>
<rect x="10.2656" width="7.46667" height="7.46667" rx="1.46296" fill="#EB5951"/>
<rect x="10.2656" y="10.2656" width="7.46667" height="7.46667" rx="3.73333" fill="white" fillOpacity="0.3"/>
<rect y="20.5312" width="7.46667" height="7.46667" rx="3.73333" fill="white" fillOpacity="0.3"/>
<rect x="28.002" y="28" width="7.46667" height="17.7333" rx="1.46296" transform="rotate(-180 28.002 28)" fill="#585858"/>
<rect x="28.002" y="7.46484" width="7.46667" height="7.46667" rx="3.73333" transform="rotate(-180 28.002 7.46484)" fill="white" fillOpacity="0.3"/>
<rect x="9.99609" y="20.5312" width="7.46667" height="7.46667" rx="1.46296" fill="#EB5951"/>
</svg></div>
                            <div className="tech-service-item-caption">
                                <h3 className="tech-service-item-title">Enterprise-grade stability</h3>
                                <p className="text-body">Developing systems that withstand high loads and ensure uninterrupted operation of mission-critical processes.</p>
                            </div>
                        </li>
                    </ul>
                    <div className="fade-up-alt">
                        <div className="tech-benefits-buttons"><a href="#contact-section" className="button button_smaller">Get expert advice</a></div>
                    </div>
                </section>
                <section id="ecosystem" className="tech-ecosystem">
                    <h2 color-word="#eb5951" text-split="" lines-slide-up="" color-words-index="1" className="tech-section-title mb-60">Laravel ecosystem we work with</h2>
                    <div className="fade-up-alt"></div>
                    <div className="fade-up-alt">
                        <div className="tech-slider-wrap">
                            <div className="swiper tech-slider w-dyn-list">
                                <div role="list" className="tech-ecosystem-grid swiper-wrapper w-dyn-items">
                                    <div role="listitem" className="swiper-slide w-dyn-item">
                                        <a href="#" className="tech-ecosystem-item w-inline-block">
                                            <div className="tech-ecosystem-item-image-wrap"><img src="/images/technologies/6630d61c4c4edfd2fc11e5c4_laravel.svg" loading="lazy" alt="Laravel logo" className="tech-ecosystem-item-image" /></div>
                                            <div className="tech-ecosystem-item-divider"></div>
                                            <div className="tech-ecosystem-item-title">Laravel</div>
                                        </a>
                                    </div>
                                    <div role="listitem" className="swiper-slide w-dyn-item">
                                        <a href="#" className="tech-ecosystem-item w-inline-block">
                                            <div className="tech-ecosystem-item-image-wrap"><img src="/images/technologies/664af9993ccc037b15411f2c_guzzle.webp" loading="lazy" alt="Guzzle logo" className="tech-ecosystem-item-image" /></div>
                                            <div className="tech-ecosystem-item-divider"></div>
                                            <div className="tech-ecosystem-item-title">Guzzle</div>
                                        </a>
                                    </div>
                                    <div role="listitem" className="swiper-slide w-dyn-item">
                                        <a href="#" className="tech-ecosystem-item w-inline-block">
                                            <div className="tech-ecosystem-item-image-wrap"><img src="/images/technologies/664af70c8e5a8c94412a191b_symphony.svg" loading="lazy" alt="Symfony logo" className="tech-ecosystem-item-image" /></div>
                                            <div className="tech-ecosystem-item-divider"></div>
                                            <div className="tech-ecosystem-item-title">Symphony</div>
                                        </a>
                                    </div>
                                    <div role="listitem" className="swiper-slide w-dyn-item">
                                        <a href="#" className="tech-ecosystem-item w-inline-block">
                                            <div className="tech-ecosystem-item-image-wrap"><img src="/images/technologies/664af7f66b51cc0561ab9df2_twig.svg" loading="lazy" alt="Twig template engine logo" className="tech-ecosystem-item-image" /></div>
                                            <div className="tech-ecosystem-item-divider"></div>
                                            <div className="tech-ecosystem-item-title">Twig</div>
                                        </a>
                                    </div>
                                    <div role="listitem" className="swiper-slide w-dyn-item">
                                        <a href="/technologies/wordpress-development-agency" className="tech-ecosystem-item w-inline-block">
                                            <div className="tech-ecosystem-item-image-wrap"><img src="/images/technologies/6630d5a5b62a8455439f1318_WP.svg" loading="lazy" alt="" className="tech-ecosystem-item-image" /></div>
                                            <div className="tech-ecosystem-item-divider"></div>
                                            <div className="tech-ecosystem-item-title">Wordpress</div>
                                        </a>
                                    </div>
                                    <div role="listitem" className="swiper-slide w-dyn-item">
                                        <a href="#" className="tech-ecosystem-item w-inline-block">
                                            <div className="tech-ecosystem-item-image-wrap"><img src="/images/technologies/664af5df4d72a84981f92c16_composer.svg" loading="lazy" alt="Composer logo" className="tech-ecosystem-item-image" /></div>
                                            <div className="tech-ecosystem-item-divider"></div>
                                            <div className="tech-ecosystem-item-title">Composer</div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-buttons is-web-portal">
                                <div className="button button_slider tech-slider-prev">
                                    <div className="button-slider-arrow w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none">
<path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="2"/>
</svg></div>
                                </div>
                                <div className="button button_slider tech-slider-next">
                                    <div className="button-slider-arrow w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none">
<path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2"/>
</svg></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="testimonials-section" className="tech-testimonials">
                    <h2 data-testimonials-title="" text-split="" lines-slide-up="" color-words-index="4,5" color-word="#eb5951" className="tech-section-title mb-60 desktop">what our clients say… for real</h2>
                    <h2 data-testimonials-title="" text-split="" lines-slide-up="" color-words-index="4,5" color-word="#eb5951" className="tech-section-title mb-60 mobile">what our clients say…<br/>for real</h2>
                    <div className="fade-up-alt">
                        <div className="tech-testimonials__slider">
                            <div className="tech-testimonials__slider-wrapper tech-variant swiper w-dyn-list">
                                <div role="list" className="swiper-wrapper w-dyn-items">
                                    <div role="listitem" className="swiper-slide w-dyn-item">
                                        <div className="testimonials__card tech-variant">
                                            <div className="testimonials__card-inner">
                                                <div style={{ backgroundColor: "#dbbaf4" }} className="testimonials__card-bg"></div><img loading="lazy" width="388" alt="Screenshot from TechHunt (AM) website" src="/images/technologies/69415648fb54d47025658431_68502c28fbdaa5e4f7401a80_techhunt%20(1).webp"
                                                    className="testimonials__card-overview tech-variant" />
                                                <div className="testimonials__card-caption tech-variant"><img loading="lazy" alt="Client icon" src="/images/technologies/68502c460e19db138dd98e5a_kiseliova.webp" className="testimonials__card-avatar tech-variant" />
                                                    <p className="testimonials__card-name">Iryna Kyselova</p>
                                                    <p className="testimonials__card-position body-smaller text-uppercase">CEO, TechHunt (AM)</p>
                                                </div>
                                                <div className="testimonials__card-inner-scroller">
                                                    <div className="testimonials__card-list">
                                                        <div className="testimonials__card-message-wrapper tech-variant">
                                                            <div className="testimonials__card-message tech-variant">
                                                                <p className="testimonials__card-message-text tech-variant">Ok</p>
                                                                <p className="testimonials__card-message-time tech-variant color-white-70">4:45 PM</p>
                                                            </div>
                                                        </div>
                                                        <div className="testimonials__card-message-wrapper">
                                                            <div className="testimonials__card-message tech-variant">
                                                                <p className="testimonials__card-message-text tech-variant">Site works great</p>
                                                                <p className="testimonials__card-message-time tech-variant color-white-70">4:56 PM</p>
                                                            </div>
                                                        </div>
                                                        <div className="testimonials__card-message-wrapper">
                                                            <div className="testimonials__card-message tech-variant">
                                                                <p className="testimonials__card-message-text tech-variant">On time as promised</p>
                                                                <p className="testimonials__card-message-time tech-variant color-white-70">4:57 PM</p>
                                                            </div>
                                                        </div>
                                                        <div className="testimonials__card-message-wrapper">
                                                            <div className="testimonials__card-message tech-variant">
                                                                <p className="testimonials__card-message-text tech-variant">Reasonable price</p>
                                                                <p className="testimonials__card-message-time tech-variant color-white-70">4:58 PM</p>
                                                            </div>
                                                        </div>
                                                        <div className="testimonials__card-message-wrapper">
                                                            <div className="testimonials__card-message tech-variant">
                                                                <p className="testimonials__card-message-text tech-variant">Will recommend</p>
                                                                <p className="testimonials__card-message-time tech-variant color-white-70">4:59 PM</p>
                                                            </div>
                                                        </div>
                                                        <div className="testimonials__card-message-wrapper w-condition-invisible">
                                                            <div className="testimonials__card-message">
                                                                <p className="testimonials__card-message-text w-dyn-bind-empty"></p>
                                                                <p className="testimonials__card-message-time body-smaller color-white-70 w-dyn-bind-empty"></p>
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
                                                <div style={{ backgroundColor: "#a0eeb0" }} className="testimonials__card-bg"></div><img loading="lazy" width="388" alt="Text screenshot from Habitat website" src="/images/technologies/68502b378775a7fe00bb4fab_habitat.webp"
                                                    className="testimonials__card-overview tech-variant" />
                                                <div className="testimonials__card-caption tech-variant"><img loading="lazy" alt="Oleksandra Kozak photo, CXO at Habitat" src="/images/technologies/68502b31c839a090ed9cb36d_kozak.webp" className="testimonials__card-avatar tech-variant"
                                                    />
                                                    <p className="testimonials__card-name">Oleksandra Kozak</p>
                                                    <p className="testimonials__card-position body-smaller text-uppercase">CXO, Habitat</p>
                                                </div>
                                                <div className="testimonials__card-inner-scroller">
                                                    <div className="testimonials__card-list">
                                                        <div className="testimonials__card-message-wrapper tech-variant">
                                                            <div className="testimonials__card-message tech-variant">
                                                                <p className="testimonials__card-message-text tech-variant">Platform handles 75k users now</p>
                                                                <p className="testimonials__card-message-time tech-variant color-white-70">12:28 AM</p>
                                                            </div>
                                                        </div>
                                                        <div className="testimonials__card-message-wrapper">
                                                            <div className="testimonials__card-message tech-variant">
                                                                <p className="testimonials__card-message-text tech-variant">92% satisfaction!</p>
                                                                <p className="testimonials__card-message-time tech-variant color-white-70">12:32 AM</p>
                                                            </div>
                                                        </div>
                                                        <div className="testimonials__card-message-wrapper">
                                                            <div className="testimonials__card-message tech-variant">
                                                                <p className="testimonials__card-message-text tech-variant">user engagement +45%</p>
                                                                <p className="testimonials__card-message-time tech-variant color-white-70">12:34 AM</p>
                                                            </div>
                                                        </div>
                                                        <div className="testimonials__card-message-wrapper">
                                                            <div className="testimonials__card-message tech-variant">
                                                                <p className="testimonials__card-message-text tech-variant">revenue is growing so fast 🔥</p>
                                                                <p className="testimonials__card-message-time tech-variant color-white-70">12:45 AM</p>
                                                            </div>
                                                        </div>
                                                        <div className="testimonials__card-message-wrapper w-condition-invisible">
                                                            <div className="testimonials__card-message tech-variant">
                                                                <p className="testimonials__card-message-text tech-variant w-dyn-bind-empty"></p>
                                                                <p className="testimonials__card-message-time tech-variant color-white-70 w-dyn-bind-empty"></p>
                                                            </div>
                                                        </div>
                                                        <div className="testimonials__card-message-wrapper w-condition-invisible">
                                                            <div className="testimonials__card-message">
                                                                <p className="testimonials__card-message-text w-dyn-bind-empty"></p>
                                                                <p className="testimonials__card-message-time body-smaller color-white-70 w-dyn-bind-empty"></p>
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
                                                <div style={{ backgroundColor: "#ffb3b3" }} className="testimonials__card-bg"></div><img loading="lazy" width="388" alt="Norwegian-Ukrainian Chamber of Commerce website screenshot" src="/images/technologies/694156c8a2a51c888dc8f3d8_68502a3f8efdae84c0a2bfa5_nucc%20(1).webp"
                                                    className="testimonials__card-overview tech-variant" />
                                                <div className="testimonials__card-caption tech-variant"><img loading="lazy" alt="Client logo" src="/images/technologies/68502a0bc839a090ed9be559_pedersen.webp" className="testimonials__card-avatar tech-variant" />
                                                    <p className="testimonials__card-name">Kjartan Pedersen</p>
                                                    <p className="testimonials__card-position body-smaller text-uppercase">Managing Director, NUCC</p>
                                                </div>
                                                <div className="testimonials__card-inner-scroller">
                                                    <div className="testimonials__card-list">
                                                        <div className="testimonials__card-message-wrapper tech-variant">
                                                            <div className="testimonials__card-message tech-variant">
                                                                <p className="testimonials__card-message-text tech-variant">traffic increased tenfold!</p>
                                                                <p className="testimonials__card-message-time tech-variant color-white-70">11:24 AM</p>
                                                            </div>
                                                        </div>
                                                        <div className="testimonials__card-message-wrapper">
                                                            <div className="testimonials__card-message tech-variant">
                                                                <p className="testimonials__card-message-text tech-variant">288 → 3,614 visitors</p>
                                                                <p className="testimonials__card-message-time tech-variant color-white-70">11:27 AM</p>
                                                            </div>
                                                        </div>
                                                        <div className="testimonials__card-message-wrapper">
                                                            <div className="testimonials__card-message tech-variant">
                                                                <p className="testimonials__card-message-text tech-variant">love working with specialists</p>
                                                                <p className="testimonials__card-message-time tech-variant color-white-70">11:28 AM</p>
                                                            </div>
                                                        </div>
                                                        <div className="testimonials__card-message-wrapper">
                                                            <div className="testimonials__card-message tech-variant">
                                                                <p className="testimonials__card-message-text tech-variant">always available</p>
                                                                <p className="testimonials__card-message-time tech-variant color-white-70">11:31 AM</p>
                                                            </div>
                                                        </div>
                                                        <div className="testimonials__card-message-wrapper">
                                                            <div className="testimonials__card-message tech-variant">
                                                                <p className="testimonials__card-message-text tech-variant">ok this is impressive</p>
                                                                <p className="testimonials__card-message-time tech-variant color-white-70">11:31 AM</p>
                                                            </div>
                                                        </div>
                                                        <div className="testimonials__card-message-wrapper w-condition-invisible">
                                                            <div className="testimonials__card-message">
                                                                <p className="testimonials__card-message-text w-dyn-bind-empty"></p>
                                                                <p className="testimonials__card-message-time body-smaller color-white-70 w-dyn-bind-empty"></p>
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
                                                <div style={{ backgroundColor: "#bfecff" }} className="testimonials__card-bg"></div><img loading="lazy" width="388" alt="Coinweb website page screenshot" src="/images/technologies/69415707d03780662cf56620_coinweb.webp"
                                                    className="testimonials__card-overview tech-variant" />
                                                <div className="testimonials__card-caption tech-variant"><img loading="lazy" alt="Shawn Munir photo, COO at Coinweb" src="/images/technologies/6850286683615deed2605b11_munir.webp" className="testimonials__card-avatar tech-variant"
                                                    />
                                                    <p className="testimonials__card-name">Shawn Munir</p>
                                                    <p className="testimonials__card-position body-smaller text-uppercase">COO, Coinweb</p>
                                                </div>
                                                <div className="testimonials__card-inner-scroller">
                                                    <div className="testimonials__card-list">
                                                        <div className="testimonials__card-message-wrapper tech-variant">
                                                            <div className="testimonials__card-message tech-variant">
                                                                <p className="testimonials__card-message-text tech-variant">Website is LIVE</p>
                                                                <p className="testimonials__card-message-time tech-variant color-white-70">3:24 PM</p>
                                                            </div>
                                                        </div>
                                                        <div className="testimonials__card-message-wrapper">
                                                            <div className="testimonials__card-message tech-variant">
                                                                <p className="testimonials__card-message-text tech-variant">Bookings increased immediately</p>
                                                                <p className="testimonials__card-message-time tech-variant color-white-70">3:56 PM</p>
                                                            </div>
                                                        </div>
                                                        <div className="testimonials__card-message-wrapper">
                                                            <div className="testimonials__card-message tech-variant">
                                                                <p className="testimonials__card-message-text tech-variant">Super responsive team</p>
                                                                <p className="testimonials__card-message-time tech-variant color-white-70">3:57 PM</p>
                                                            </div>
                                                        </div>
                                                        <div className="testimonials__card-message-wrapper">
                                                            <div className="testimonials__card-message tech-variant">
                                                                <p className="testimonials__card-message-text tech-variant">Thanks for the quick fixes</p>
                                                                <p className="testimonials__card-message-time tech-variant color-white-70">4:09 PM</p>
                                                            </div>
                                                        </div>
                                                        <div className="testimonials__card-message-wrapper">
                                                            <div className="testimonials__card-message tech-variant">
                                                                <p className="testimonials__card-message-text tech-variant">Respect how you handle everythin</p>
                                                                <p className="testimonials__card-message-time tech-variant color-white-70">4:12 PM</p>
                                                            </div>
                                                        </div>
                                                        <div className="testimonials__card-message-wrapper w-condition-invisible">
                                                            <div className="testimonials__card-message">
                                                                <p className="testimonials__card-message-text w-dyn-bind-empty"></p>
                                                                <p className="testimonials__card-message-time body-smaller color-white-70 w-dyn-bind-empty"></p>
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
                                                <div style={{ backgroundColor: "#f8ca86" }} className="testimonials__card-bg"></div><img loading="lazy" width="388" alt="Hexagon agency website screenshot" src="/images/technologies/68502798cd0fd320d06be075_hexagon.webp"
                                                    className="testimonials__card-overview tech-variant" />
                                                <div className="testimonials__card-caption tech-variant"><img loading="lazy" alt="Sviatoslav Iablonsky photo, CEO at Hexagon agency" src="/images/technologies/685023339af3e8fa707e5d2c_iablonsky.webp" className="testimonials__card-avatar tech-variant"
                                                    />
                                                    <p className="testimonials__card-name">Sviatoslav Iablonsky</p>
                                                    <p className="testimonials__card-position body-smaller text-uppercase">CEO, Hexagon Agency</p>
                                                </div>
                                                <div className="testimonials__card-inner-scroller">
                                                    <div className="testimonials__card-list">
                                                        <div className="testimonials__card-message-wrapper tech-variant">
                                                            <div className="testimonials__card-message tech-variant">
                                                                <p className="testimonials__card-message-text tech-variant">end client loves it!</p>
                                                                <p className="testimonials__card-message-time tech-variant color-white-70">2:34 PM</p>
                                                            </div>
                                                        </div>
                                                        <div className="testimonials__card-message-wrapper">
                                                            <div className="testimonials__card-message tech-variant">
                                                                <p className="testimonials__card-message-text tech-variant">conversions up by 20% already</p>
                                                                <p className="testimonials__card-message-time tech-variant color-white-70">2:54 PM</p>
                                                            </div>
                                                        </div>
                                                        <div className="testimonials__card-message-wrapper">
                                                            <div className="testimonials__card-message tech-variant">
                                                                <p className="testimonials__card-message-text tech-variant">hitting all deadlines like pros</p>
                                                                <p className="testimonials__card-message-time tech-variant color-white-70">2:56 PM</p>
                                                            </div>
                                                        </div>
                                                        <div className="testimonials__card-message-wrapper">
                                                            <div className="testimonials__card-message tech-variant">
                                                                <p className="testimonials__card-message-text tech-variant">even the crazy tight ones</p>
                                                                <p className="testimonials__card-message-time tech-variant color-white-70">2:59 PM</p>
                                                            </div>
                                                        </div>
                                                        <div className="testimonials__card-message-wrapper">
                                                            <div className="testimonials__card-message tech-variant">
                                                                <p className="testimonials__card-message-text tech-variant">even the crazy tight ones</p>
                                                                <p className="testimonials__card-message-time tech-variant color-white-70">3:09 PM</p>
                                                            </div>
                                                        </div>
                                                        <div className="testimonials__card-message-wrapper w-condition-invisible">
                                                            <div className="testimonials__card-message">
                                                                <p className="testimonials__card-message-text w-dyn-bind-empty"></p>
                                                                <p className="testimonials__card-message-time body-smaller color-white-70 w-dyn-bind-empty"></p>
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
                                                <div style={{ backgroundColor: "#ed9315" }} className="testimonials__card-bg"></div><img loading="lazy" width="388" alt="Hive website image" src="/images/technologies/6aa95992835bec44feecea38_hive-project%20(1).webp"
                                                    className="testimonials__card-overview tech-variant" />
                                                <div className="testimonials__card-caption tech-variant"><img loading="lazy" alt="Kotryna Žukauskaitė photo" src="/images/technologies/6722311109ddd6473f33fe99_Group%2063854.webp" className="testimonials__card-avatar tech-variant"
                                                    />
                                                    <p className="testimonials__card-name">Kotryna Žukauskaitė</p>
                                                    <p className="testimonials__card-position body-smaller text-uppercase">Project Manager, Researcher</p>
                                                </div>
                                                <div className="testimonials__card-inner-scroller">
                                                    <div className="testimonials__card-list">
                                                        <div className="testimonials__card-message-wrapper tech-variant">
                                                            <div className="testimonials__card-message tech-variant">
                                                                <p className="testimonials__card-message-text tech-variant">Have You sent me invoice?</p>
                                                                <p className="testimonials__card-message-time tech-variant color-white-70">4:54 PM</p>
                                                            </div>
                                                        </div>
                                                        <div className="testimonials__card-message-wrapper">
                                                            <div className="testimonials__card-message tech-variant">
                                                                <p className="testimonials__card-message-text tech-variant">And once again</p>
                                                                <p className="testimonials__card-message-time tech-variant color-white-70">4:54 PM</p>
                                                            </div>
                                                        </div>
                                                        <div className="testimonials__card-message-wrapper">
                                                            <div className="testimonials__card-message tech-variant">
                                                                <p className="testimonials__card-message-text tech-variant">What a great week </p>
                                                                <p className="testimonials__card-message-time tech-variant color-white-70">4:56 PM</p>
                                                            </div>
                                                        </div>
                                                        <div className="testimonials__card-message-wrapper">
                                                            <div className="testimonials__card-message tech-variant">
                                                                <p className="testimonials__card-message-text tech-variant">with your fellas</p>
                                                                <p className="testimonials__card-message-time tech-variant color-white-70">4:56 PM</p>
                                                            </div>
                                                        </div>
                                                        <div className="testimonials__card-message-wrapper">
                                                            <div className="testimonials__card-message tech-variant">
                                                                <p className="testimonials__card-message-text tech-variant">Great guys, perfect pro!</p>
                                                                <p className="testimonials__card-message-time tech-variant color-white-70">4:57 PM</p>
                                                            </div>
                                                        </div>
                                                        <div className="testimonials__card-message-wrapper w-condition-invisible">
                                                            <div className="testimonials__card-message">
                                                                <p className="testimonials__card-message-text w-dyn-bind-empty"></p>
                                                                <p className="testimonials__card-message-time body-smaller color-white-70 w-dyn-bind-empty"></p>
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
                                                <div style={{ backgroundColor: "#ffcfcf" }} className="testimonials__card-bg"></div><img loading="lazy" width="388" alt="ONELINE agency website image" src="/images/technologies/6aa95a0dc043c50f1ab78970_one-line%20(1).webp"
                                                    className="testimonials__card-overview tech-variant" />
                                                <div className="testimonials__card-caption tech-variant"><img loading="lazy" alt="Sami Gashi photo, ONELINE agency" src="/images/technologies/6542649d61617fe267c93157_one-line%202.webp"
                                                        className="testimonials__card-avatar tech-variant" />
                                                    <p className="testimonials__card-name">Sami Gashi</p>
                                                    <p className="testimonials__card-position body-smaller text-uppercase">Managing partner at One-line</p>
                                                </div>
                                                <div className="testimonials__card-inner-scroller">
                                                    <div className="testimonials__card-list">
                                                        <div className="testimonials__card-message-wrapper tech-variant">
                                                            <div className="testimonials__card-message tech-variant">
                                                                <p className="testimonials__card-message-text tech-variant">impressive</p>
                                                                <p className="testimonials__card-message-time tech-variant color-white-70">10:10</p>
                                                            </div>
                                                        </div>
                                                        <div className="testimonials__card-message-wrapper">
                                                            <div className="testimonials__card-message tech-variant">
                                                                <p className="testimonials__card-message-text tech-variant">fast and precise delivery</p>
                                                                <p className="testimonials__card-message-time tech-variant color-white-70">10:10</p>
                                                            </div>
                                                        </div>
                                                        <div className="testimonials__card-message-wrapper">
                                                            <div className="testimonials__card-message tech-variant">
                                                                <p className="testimonials__card-message-text tech-variant">thanks!</p>
                                                                <p className="testimonials__card-message-time tech-variant color-white-70">10:11</p>
                                                            </div>
                                                        </div>
                                                        <div className="testimonials__card-message-wrapper">
                                                            <div className="testimonials__card-message tech-variant">
                                                                <p className="testimonials__card-message-text tech-variant">you&#x27;re MACHINES!</p>
                                                                <p className="testimonials__card-message-time tech-variant color-white-70">10:11</p>
                                                            </div>
                                                        </div>
                                                        <div className="testimonials__card-message-wrapper w-condition-invisible">
                                                            <div className="testimonials__card-message tech-variant">
                                                                <p className="testimonials__card-message-text tech-variant w-dyn-bind-empty"></p>
                                                                <p className="testimonials__card-message-time tech-variant color-white-70 w-dyn-bind-empty"></p>
                                                            </div>
                                                        </div>
                                                        <div className="testimonials__card-message-wrapper w-condition-invisible">
                                                            <div className="testimonials__card-message">
                                                                <p className="testimonials__card-message-text w-dyn-bind-empty"></p>
                                                                <p className="testimonials__card-message-time body-smaller color-white-70 w-dyn-bind-empty"></p>
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
                                                <div style={{ backgroundColor: "#ffde82" }} className="testimonials__card-bg"></div><img loading="lazy" width="388" alt="Saclab website screenshot" src="/images/technologies/6aa958df5478b4daee425e17_SACLAB%20(2).webp"
                                                    className="testimonials__card-overview tech-variant" />
                                                <div className="testimonials__card-caption tech-variant"><img loading="lazy" alt="Oliver Stueck photo, Founder of Saclab" src="/images/technologies/64e88f60265e5590a3566315_avatar2.webp" className="testimonials__card-avatar tech-variant"
                                                    />
                                                    <p className="testimonials__card-name">Oliver Stueck</p>
                                                    <p className="testimonials__card-position body-smaller text-uppercase">Founder of Saclab</p>
                                                </div>
                                                <div className="testimonials__card-inner-scroller">
                                                    <div className="testimonials__card-list">
                                                        <div className="testimonials__card-message-wrapper tech-variant">
                                                            <div className="testimonials__card-message tech-variant">
                                                                <p className="testimonials__card-message-text tech-variant">Oh, it’s ready</p>
                                                                <p className="testimonials__card-message-time tech-variant color-white-70">4:54 PM</p>
                                                            </div>
                                                        </div>
                                                        <div className="testimonials__card-message-wrapper">
                                                            <div className="testimonials__card-message tech-variant">
                                                                <p className="testimonials__card-message-text tech-variant">Does what it should</p>
                                                                <p className="testimonials__card-message-time tech-variant color-white-70">4:54 PM</p>
                                                            </div>
                                                        </div>
                                                        <div className="testimonials__card-message-wrapper">
                                                            <div className="testimonials__card-message tech-variant">
                                                                <p className="testimonials__card-message-text tech-variant">Solid work, just could be faster</p>
                                                                <p className="testimonials__card-message-time tech-variant color-white-70">4:56 PM</p>
                                                            </div>
                                                        </div>
                                                        <div className="testimonials__card-message-wrapper">
                                                            <div className="testimonials__card-message tech-variant">
                                                                <p className="testimonials__card-message-text tech-variant">Thanks for the effort</p>
                                                                <p className="testimonials__card-message-time tech-variant color-white-70">4:56 PM</p>
                                                            </div>
                                                        </div>
                                                        <div className="testimonials__card-message-wrapper w-condition-invisible">
                                                            <div className="testimonials__card-message tech-variant">
                                                                <p className="testimonials__card-message-text tech-variant w-dyn-bind-empty"></p>
                                                                <p className="testimonials__card-message-time tech-variant color-white-70 w-dyn-bind-empty"></p>
                                                            </div>
                                                        </div>
                                                        <div className="testimonials__card-message-wrapper w-condition-invisible">
                                                            <div className="testimonials__card-message">
                                                                <p className="testimonials__card-message-text w-dyn-bind-empty"></p>
                                                                <p className="testimonials__card-message-time body-smaller color-white-70 w-dyn-bind-empty"></p>
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
                                                <div style={{ backgroundColor: "#A0EEB0" }} className="testimonials__card-bg"></div><img loading="lazy" width="388" alt="Beste-kredittkort.no website screenshot" src="/images/technologies/662a3cbb220a8a5f47466444_NEW.webp" className="testimonials__card-overview tech-variant"
                                                />
                                                <div className="testimonials__card-caption tech-variant"><img loading="lazy" alt="Stian Skjelbred photo" src="/images/technologies/64e88acd34d94c9e7d195712_avatar.webp" className="testimonials__card-avatar tech-variant" />
                                                    <p
                                                        className="testimonials__card-name">Stian Skjelbred</p>
                                                        <p className="testimonials__card-position body-smaller text-uppercase">Norwegian internet entrepreneur</p>
                                                </div>
                                                <div className="testimonials__card-inner-scroller">
                                                    <div className="testimonials__card-list">
                                                        <div className="testimonials__card-message-wrapper tech-variant">
                                                            <div className="testimonials__card-message tech-variant">
                                                                <p className="testimonials__card-message-text tech-variant">OMFG</p>
                                                                <p className="testimonials__card-message-time tech-variant color-white-70">4:54 PM</p>
                                                            </div>
                                                        </div>
                                                        <div className="testimonials__card-message-wrapper">
                                                            <div className="testimonials__card-message tech-variant">
                                                                <p className="testimonials__card-message-text tech-variant">Holy crap</p>
                                                                <p className="testimonials__card-message-time tech-variant color-white-70">4:54 PM</p>
                                                            </div>
                                                        </div>
                                                        <div className="testimonials__card-message-wrapper">
                                                            <div className="testimonials__card-message tech-variant">
                                                                <p className="testimonials__card-message-text tech-variant">This is amazing</p>
                                                                <p className="testimonials__card-message-time tech-variant color-white-70">4:54 PM</p>
                                                            </div>
                                                        </div>
                                                        <div className="testimonials__card-message-wrapper">
                                                            <div className="testimonials__card-message tech-variant">
                                                                <p className="testimonials__card-message-text tech-variant">WTF!! SO NICE❤️</p>
                                                                <p className="testimonials__card-message-time tech-variant color-white-70">4:54 PM</p>
                                                            </div>
                                                        </div>
                                                        <div className="testimonials__card-message-wrapper">
                                                            <div className="testimonials__card-message tech-variant">
                                                                <p className="testimonials__card-message-text tech-variant">Exactly what we wanted</p>
                                                                <p className="testimonials__card-message-time tech-variant color-white-70">4:54 PM</p>
                                                            </div>
                                                        </div>
                                                        <div className="testimonials__card-message-wrapper w-condition-invisible">
                                                            <div className="testimonials__card-message">
                                                                <p className="testimonials__card-message-text w-dyn-bind-empty"></p>
                                                                <p className="testimonials__card-message-time body-smaller color-white-70 w-dyn-bind-empty"></p>
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
                                    <div className="button-slider-arrow w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none">
<path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="2"/>
</svg></div>
                                </div>
                                <div className="button button_slider testimonials-slider-next">
                                    <div className="button-slider-arrow w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none">
<path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2"/>
</svg></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <aside className="tech-aside mobile-fixed is-sticky">
                <div data-w-id="4f738d8d-1f64-d1ba-6dd5-08506493f8c2" className="fade-up-alt_desktop">
                    <div className="cta-bn__ceo">
                        <div className="hide-mob-landscape">
                            <div className="cta-bn__img"><img src="/images/technologies/sunil-panchani-director.jpg" loading="lazy" alt="Sunil Panchani photo, CEO and co-founder of TechForbs" className="img_cover" /></div>
                            <div className="cta-bn__content">
                                <div className="cta-bn__name">Sunil Panchani</div>
                                <div className="cta-bn__position">Founder & Director, TechForbs</div>
                            </div>
                        </div><a href="#contact-section" className="button button_smaller button_red cta-btn-contact"><strong>Contact</strong></a></div>
                </div>
            </aside>
        </div>
        <BrandLogos />
        <div className="tech-main-inner-wider v2">
            <div className="w100">
                <div className="fade-up-alt">
                    <div className="cta-banner">
                        <div className="cta-banner-caption">
                            <h3 color-word="#eb5951" text-split="" lines-slide-up="" color-words-index="5,6,7,8" className="cta-banner-title">Choose a tech partner that challenges, guides, and delivers</h3>
                        </div>
                        <div className="cta-banner-right">
                            <div className="fade-up-alt">
                                <div className="cta-bn__ceo">
                                    <div className="cta-bn__img"><img src="/images/technologies/sunil-panchani-director.jpg" loading="lazy" alt="Sunil Panchani photo, CEO and co-founder of TechForbs" className="img_cover" /></div>
                                    <div
                                        className="cta-bn__content">
                                        <h4 className="cta-bn__name">Sunil Panchani</h4>
                                        <p className="cta-bn__position">Founder & Director, TechForbs</p>
                                </div>
                                <div className="cta-banner-person-buttons"><a href="/contact" className="button button_smaller button_red">Contact</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className="tech-main-inner margin-bottom-7-5 overflow-hidden">
            <div className="tech-content">
                <section id="faq" className="tech-faq">
                    <h2 lines-slide-up="" text-split="" className="tech-section-title mb-60">Frequently asked questions (FAQ)</h2>
                    <div className="w-dyn-list">
                        <div itemType="https://schema.org/FAQPage" itemScope={true} role="list" className="faq w-dyn-items">
                            <div role="listitem" className="fade-up-alt w-dyn-item">
                                <div data-hover="false" data-delay="0" itemProp="mainEntity" itemScope={true} itemType="https://schema.org/Question" className="faq-item w-dropdown">
                                    <div className="faq-item-header w-dropdown-toggle">
                                        <div className="faq-item-header-icon">
                                            <div className="faq-item-header-icon-line"></div>
                                            <div className="faq-item-header-icon-line rotated"></div>
                                        </div>
                                        <div itemProp="name">How does outsourcing to a Laravel development company work?</div>
                                    </div>
                                    <nav className="faq-item-header-dropdown w-dropdown-list">
                                        <div itemProp="acceptedAnswer" itemScope={true} itemType="https://schema.org/Answer" className="faq-item-header-dropdown-inner">
                                            <div itemProp="text" className="w-richtext">
                                                <p>When you outsource Laravel development, this process involves transferring individual Laravel development tasks or an entire project to third-party specialists. As a result, you share all the risks with your contractor
                                                    PHP software development company – in particular, they are usually described in the NDA, which you sign together before starting work.</p>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                            <div role="listitem" className="fade-up-alt w-dyn-item">
                                <div data-hover="false" data-delay="0" itemProp="mainEntity" itemScope={true} itemType="https://schema.org/Question" className="faq-item w-dropdown">
                                    <div className="faq-item-header w-dropdown-toggle">
                                        <div className="faq-item-header-icon">
                                            <div className="faq-item-header-icon-line"></div>
                                            <div className="faq-item-header-icon-line rotated"></div>
                                        </div>
                                        <div itemProp="name">What kind of applications can you build using PHP?</div>
                                    </div>
                                    <nav className="faq-item-header-dropdown w-dropdown-list">
                                        <div itemProp="acceptedAnswer" itemScope={true} itemType="https://schema.org/Answer" className="faq-item-header-dropdown-inner">
                                            <div itemProp="text" className="w-richtext">
                                                <p>This programming language can be used to develop a website and any kind of custom web applications or services.</p>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                            <div role="listitem" className="fade-up-alt w-dyn-item">
                                <div data-hover="false" data-delay="0" itemProp="mainEntity" itemScope={true} itemType="https://schema.org/Question" className="faq-item w-dropdown">
                                    <div className="faq-item-header w-dropdown-toggle">
                                        <div className="faq-item-header-icon">
                                            <div className="faq-item-header-icon-line"></div>
                                            <div className="faq-item-header-icon-line rotated"></div>
                                        </div>
                                        <div itemProp="name">What is the difference between PHP and JavaScript?</div>
                                    </div>
                                    <nav className="faq-item-header-dropdown w-dropdown-list">
                                        <div itemProp="acceptedAnswer" itemScope={true} itemType="https://schema.org/Answer" className="faq-item-header-dropdown-inner">
                                            <div itemProp="text" className="w-richtext">
                                                <p>JavaScript is used to develop the client side of web solutions, while PHP lays the foundation of their server side.</p>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                            <div role="listitem" className="fade-up-alt w-dyn-item">
                                <div data-hover="false" data-delay="0" itemProp="mainEntity" itemScope={true} itemType="https://schema.org/Question" className="faq-item w-dropdown">
                                    <div className="faq-item-header w-dropdown-toggle">
                                        <div className="faq-item-header-icon">
                                            <div className="faq-item-header-icon-line"></div>
                                            <div className="faq-item-header-icon-line rotated"></div>
                                        </div>
                                        <div itemProp="name">What is a scripting language?</div>
                                    </div>
                                    <nav className="faq-item-header-dropdown w-dropdown-list">
                                        <div itemProp="acceptedAnswer" itemScope={true} itemType="https://schema.org/Answer" className="faq-item-header-dropdown-inner">
                                            <div itemProp="text" className="w-richtext">
                                                <p>In a nutshell, it is a language in which all the instructions are interpreted in their individual order at runtime.</p>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                            <div role="listitem" className="fade-up-alt w-dyn-item">
                                <div data-hover="false" data-delay="0" itemProp="mainEntity" itemScope={true} itemType="https://schema.org/Question" className="faq-item w-dropdown">
                                    <div className="faq-item-header w-dropdown-toggle">
                                        <div className="faq-item-header-icon">
                                            <div className="faq-item-header-icon-line"></div>
                                            <div className="faq-item-header-icon-line rotated"></div>
                                        </div>
                                        <div itemProp="name">What are the two types of scripting languages?</div>
                                    </div>
                                    <nav className="faq-item-header-dropdown w-dropdown-list">
                                        <div itemProp="acceptedAnswer" itemScope={true} itemType="https://schema.org/Answer" className="faq-item-header-dropdown-inner">
                                            <div itemProp="text" className="w-richtext">
                                                <p>These types are server-side and client-side languages.</p>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                            <div role="listitem" className="fade-up-alt w-dyn-item">
                                <div data-hover="false" data-delay="0" itemProp="mainEntity" itemScope={true} itemType="https://schema.org/Question" className="faq-item w-dropdown">
                                    <div className="faq-item-header w-dropdown-toggle">
                                        <div className="faq-item-header-icon">
                                            <div className="faq-item-header-icon-line"></div>
                                            <div className="faq-item-header-icon-line rotated"></div>
                                        </div>
                                        <div itemProp="name">What should I look for when choosing a PHP web development company for a project?</div>
                                    </div>
                                    <nav className="faq-item-header-dropdown w-dropdown-list">
                                        <div itemProp="acceptedAnswer" itemScope={true} itemType="https://schema.org/Answer" className="faq-item-header-dropdown-inner">
                                            <div itemProp="text" className="w-richtext">
                                                <p>When you choose a Laravel development company, you need to first analyze its portfolio and expertise to make sure that your future contractor has relevant experience in your business niche and has already worked
                                                    on projects identical to yours. Also, don’t forget to check if the cooperation models offered by this company meet your individual requirements, standards, and expectations.</p>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                            <div role="listitem" className="fade-up-alt w-dyn-item">
                                <div data-hover="false" data-delay="0" itemProp="mainEntity" itemScope={true} itemType="https://schema.org/Question" className="faq-item w-dropdown">
                                    <div className="faq-item-header w-dropdown-toggle">
                                        <div className="faq-item-header-icon">
                                            <div className="faq-item-header-icon-line"></div>
                                            <div className="faq-item-header-icon-line rotated"></div>
                                        </div>
                                        <div itemProp="name">How fast can I hire TechForbs PHP agency’s nearshore talents?</div>
                                    </div>
                                    <nav className="faq-item-header-dropdown w-dropdown-list">
                                        <div itemProp="acceptedAnswer" itemScope={true} itemType="https://schema.org/Answer" className="faq-item-header-dropdown-inner">
                                            <div itemProp="text" className="w-richtext">
                                                <p>When you outsource PHP programmer, most companies are able to provide you with specialists who fully meet your requirements within a couple of weeks. However, the size of the nearby talent pool also plays
                                                    an important role in the speed of filling your vacancies.</p>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                            <div role="listitem" className="fade-up-alt w-dyn-item">
                                <div data-hover="false" data-delay="0" itemProp="mainEntity" itemScope={true} itemType="https://schema.org/Question" className="faq-item w-dropdown">
                                    <div className="faq-item-header w-dropdown-toggle">
                                        <div className="faq-item-header-icon">
                                            <div className="faq-item-header-icon-line"></div>
                                            <div className="faq-item-header-icon-line rotated"></div>
                                        </div>
                                        <div itemProp="name">How will I be able to maintain and update my project once it’s over?</div>
                                    </div>
                                    <nav className="faq-item-header-dropdown w-dropdown-list">
                                        <div itemProp="acceptedAnswer" itemScope={true} itemType="https://schema.org/Answer" className="faq-item-header-dropdown-inner">
                                            <div itemProp="text" className="w-richtext">
                                                <p>As for cooperation with our PHP website development company, we always provide post-release support for the projects we have worked on. This support consists of troubleshooting technical problems, as well
                                                    as expanding existing functionality and developing updates.</p>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <aside className="tech-aside is-empty"></aside><img src="/images/technologies/65c10674a411d43cce6bf630_content-line-3.svg" loading="lazy" alt="" className="tech-faq-decor" /></div>
    </main>
    <ContactSection />
    
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
