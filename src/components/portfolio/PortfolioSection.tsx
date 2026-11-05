"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PORTFOLIO_DATA, AI_AUTOMATION_CASES, type PortfolioItem } from "@/data/siteData";
import { useIsClient } from "@/hooks/useIsClient";

import "swiper/css";
import "swiper/css/navigation";

export interface PortfolioSectionProps {
  id?: string;
  className?: string;
  sectionLabel?: string;
  variant?: "homepage" | "services";
  title?: React.ReactNode;
  items?: PortfolioItem[];
  showViewAll?: boolean;
  viewAllHref?: string;
  viewAllText?: string;
}

export default function PortfolioSection({
  id,
  className,
  sectionLabel = "Portfolio",
  variant = "homepage",
  title,
  items,
  showViewAll = true,
  viewAllHref = "/#portfolio-section",
  viewAllText = "View all",
}: PortfolioSectionProps = {}) {
  const swiperRef = useRef<SwiperType | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const circlePathRef = useRef<SVGPathElement>(null);
  const mounted = useIsClient();

  const isServices = variant === "services";
  const displayItems = items || (isServices ? AI_AUTOMATION_CASES : PORTFOLIO_DATA);
  const sectionId = id || (isServices ? "why-we" : "portfolio-section");
  const sectionClass = className || (isServices ? "tech-benefits" : "section--portfolio is-main-page section-gray");

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      // 1. Animate Cyan Oval stroke drawing around "pixel perfect" (homepage only)
      const path = circlePathRef.current;
      if (path && !isServices) {
        const length = path.getTotalLength ? path.getTotalLength() : 800;
        if (prefersReducedMotion) {
          gsap.set(path, { strokeDashoffset: 0 });
        } else {
          gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

          ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top 70%",
            once: true,
            onEnter: () => {
              gsap.to(path, {
                strokeDashoffset: 0,
                duration: 1.0,
                ease: "expo.out",
              });
            },
          });
        }
      }

      // 2. Animate portfolio cards slide up from bottom
      const cards = sectionRef.current?.querySelectorAll(".case-item");
      if (cards && cards.length) {
        if (prefersReducedMotion) {
          gsap.set(cards, { yPercent: 0, opacity: 1 });
        } else {
          const triggerEl = isServices
            ? (sectionRef.current?.querySelector(".cases-wrap") || sectionRef.current)
            : (sectionRef.current?.querySelector(".portfolio__bottom-container") || sectionRef.current);

          gsap.fromTo(
            cards,
            { yPercent: 25, opacity: 0 },
            {
              yPercent: 0,
              opacity: 1,
              stagger: 0.1,
              duration: 1.0,
              ease: "power3.out",
              scrollTrigger: {
                trigger: triggerEl,
                start: "top 80%",
                once: true,
              },
            }
          );

          // Failsafe timer
          setTimeout(() => {
            gsap.to(cards, { yPercent: 0, opacity: 1, duration: 0.3 });
          }, 2500);
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [mounted, isServices]);

  // Render Card Content
  const renderCard = (item: PortfolioItem) => (
    <div className="case-item is-no-link">
      <Link href={item.link || viewAllHref} className="case-item_link w-inline-block">
        <span className="sr-only">{item.title}</span>
      </Link>
      <div
        className="case-item-image"
        style={{
          backgroundColor: item.bgColor || "#3269ac",
          borderTopLeftRadius: "0px",
          borderTopRightRadius: "2.25rem",
          borderBottomLeftRadius: "0px",
          borderBottomRightRadius: "0px",
        }}
      >
        <img
          width={416}
          height={439}
          alt="TechForbs case background"
          src="/images/ui/66335e1b00f641134b6bcbef_case-bg.svg"
          loading="lazy"
          className="case-item-circles"
        />
        <img
          className="case-item-thumb min-height"
          src={item.image}
          width={745}
          height={618}
          alt={item.title}
          loading="lazy"
          style={{
            borderTopLeftRadius: "0px",
            borderTopRightRadius: "2rem",
            borderBottomLeftRadius: "0px",
            borderBottomRightRadius: "0px",
          }}
        />
      </div>

      <h4 itemProp="headline" className="case-item-title">
        {item.title}
      </h4>
      <div className="case-item_tags">
        <div className="w-dyn-list">
          <div role="list" className="cms-tag_list w-dyn-items">
            {item.tags.map((tag) => (
              <div key={tag} role="listitem" className="cms-tag w-dyn-item">
                <div>{tag}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // =========================================================================
  // SERVICES PAGE VARIANT (Authentic Webflow/Che IT Group structure)
  // =========================================================================
  if (isServices) {
    return (
      <section ref={sectionRef} id={sectionId} className={sectionClass}>
        <h2
          color-word="#00e5ff"
          text-split=""
          lines-slide-up=""
          color-words-index="5,6"
          className="tech-section-title mb-60"
        >
          {title || (
            <>
              Winning with us: <span className="text-[#00e5ff]">our clients&apos; success</span>
            </>
          )}
        </h2>

        <div className="cases-wrap is-services-page">
          {mounted ? (
            <div className="swiper cases-slider w-dyn-list">
              <Swiper
                modules={[Autoplay, Navigation]}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
                loop={true}
                speed={1000}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                slidesPerView={1}
                spaceBetween={16}
                breakpoints={{
                  480: { slidesPerView: 1, spaceBetween: 16 },
                  992: { slidesPerView: 2, spaceBetween: 50 },
                }}
                className="swiper-wrapper w-dyn-items"
              >
                {displayItems.map((item) => (
                  <SwiperSlide key={item.id} className="swiper-slide w-dyn-item">
                    {renderCard(item)}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ) : (
            <div className="swiper cases-slider w-dyn-list">
              <div className="swiper-wrapper w-dyn-items">
                {displayItems.map((item) => (
                  <div key={item.id} className="swiper-slide w-dyn-item">
                    {renderCard(item)}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="slider-buttons slider-buttons_portfolio">
            <button
              type="button"
              aria-label="Previous portfolio case"
              className="button button_slider swis-portfolio-prev"
              onClick={() => swiperRef.current?.slidePrev()}
            >
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
            <button
              type="button"
              aria-label="Next portfolio case"
              className="button button_slider swis-portfolio-next"
              onClick={() => swiperRef.current?.slideNext()}
            >
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {showViewAll && (
          <div className="fade-up-alt">
            <div className="tech-benefits-buttons">
              <Link href={viewAllHref} className="button">
                {viewAllText}
              </Link>
            </div>
          </div>
        )}
      </section>
    );
  }

  // =========================================================================
  // HOMEPAGE VARIANT (Exact pixel-perfect structure with oval stroke animation)
  // =========================================================================
  return (
    <section
      ref={sectionRef}
      id={sectionId}
      itemScope
      itemType="https://schema.org/CollectionPage"
      className={sectionClass}
    >
      <div className="wrapper-gray is-home-portfolio">
        {/* Top Heading Container with Title Circle Oval */}
        <div className="portfolio__top-container">
          <div className="portfolio__heading is-homepage">
            <div className="container">
              <div className="heading_combined">
                <div className="heading_label">
                  <div className="fade-up">
                    <div className="body-smaller text-uppercase section-label">
                      {sectionLabel}
                    </div>
                  </div>
                </div>
                <div className="portfolio__heading-title is-homepage">
                  <h2 className="title_regular">
                    From designs to{" "}
                    <span className="portfolio-circle-wrap relative inline-block text-[#00e5ff] px-2 py-0.5 whitespace-nowrap">
                      pixel perfect
                      <span
                        data-wf--title-circle--variant="base"
                        className="title-circle service-hero_circle"
                        style={{
                          position: "absolute",
                          left: "50%",
                          top: "50%",
                          transform: "translate(-50%, -50%)",
                          width: "calc(100% + 2rem)",
                          height: "calc(100% + 1.4rem)",
                          pointerEvents: "none",
                          zIndex: 1,
                          opacity: 1,
                          display: "block",
                        }}
                      >
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 453 89"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          preserveAspectRatio="none"
                          style={{ width: "100%", height: "100%" }}
                        >
                          <path
                            ref={circlePathRef}
                            d="M316.771 87C405.472 79.7966 451 58.571 451 43.7797C451 20.7054 350.488 2 226.5 2C102.512 2 2.00001 20.7054 2.00001 43.7797C2.00001 66.8539 102.512 85.5593 226.5 85.5593C268.367 85.5593 324.621 81.9576 362.299 71.8729"
                            stroke="#00e5ff"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    </span>{" "}
                    web
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Carousel */}
        <div className="portfolio__bottom-container v2">
          {mounted ? (
            <div className="swiper portfolio-slider v2 w-dyn-list">
              <Swiper
                modules={[Autoplay, Navigation]}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
                loop={true}
                speed={1000}
                centeredSlides={true}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                spaceBetween={16}
                slidesPerView={1.25}
                breakpoints={{
                  480: { slidesPerView: 1.45, spaceBetween: 16 },
                  992: { slidesPerView: 3, spaceBetween: 36 },
                }}
                className="swiper-wrapper w-dyn-items"
              >
                {displayItems.map((item) => (
                  <SwiperSlide key={item.id} className="swiper-slide w-dyn-item">
                    {renderCard(item)}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ) : (
            <div className="swiper portfolio-slider v2 w-dyn-list">
              <div className="swiper-wrapper w-dyn-items">
                {displayItems.map((item) => (
                  <div key={item.id} className="swiper-slide w-dyn-item">
                    {renderCard(item)}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export const Portfolio = PortfolioSection;
