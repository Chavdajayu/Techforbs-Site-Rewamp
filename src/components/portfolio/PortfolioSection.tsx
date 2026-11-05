"use client";

import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PORTFOLIO_DATA, type PortfolioItem } from "@/data/siteData";
import { cx, type SectionBaseProps } from "@/components/types";
import PortfolioCard from "./PortfolioCard";
import { useIsClient } from "@/hooks/useIsClient";

import "swiper/css";
import "swiper/css/navigation";

export interface PortfolioSectionProps extends SectionBaseProps {
  /** Small uppercase eyebrow above the heading. */
  label?: string;
  /** Case-study slides. Defaults to the seven home-page brands. */
  items?: PortfolioItem[];
}

/**
 * "Portfolio" — hand-drawn circle around the heading plus an autoplaying
 * Swiper of case-study cards.
 *
 * Animation: the circle SVG draws itself over 1.2s (stroke-dashoffset) and the
 * cards rise from 40% with a 0.1s stagger, both triggered once when the section
 * reaches 80%/75% of the viewport. The carousel autoplays every 3.5s and pauses
 * on hover.
 */
export default function PortfolioSection({
  id = "portfolio-section",
  className,
  label = "Portfolio",
  items = PORTFOLIO_DATA,
}: PortfolioSectionProps = {}) {
  const swiperRef = useRef<SwiperType | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const circlePathRef = useRef<SVGPathElement>(null);
  const mounted = useIsClient();

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      // 1. Animate Cyan Oval stroke drawing around "pixel perfect"
      const path = circlePathRef.current;
      if (path) {
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

      // 2. Animate portfolio cards slide up from bottom (Reference mainCore() choreography with fail-open safety)
      const cards = sectionRef.current?.querySelectorAll(".case-item");
      if (cards && cards.length) {
        if (prefersReducedMotion) {
          gsap.set(cards, { yPercent: 0, opacity: 1 });
        } else {
          // Check if already in viewport
          const rect = sectionRef.current?.getBoundingClientRect();
          if (rect && rect.top < window.innerHeight * 0.85) {
            gsap.set(cards, { yPercent: 0, opacity: 1 });
          } else {
            gsap.fromTo(
              cards,
              { yPercent: 30, opacity: 0 },
              {
                yPercent: 0,
                opacity: 1,
                stagger: 0.12,
                duration: 1.1,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: ".portfolio__bottom-container",
                  start: "top 78%",
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
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [mounted]);

  return (
    <section
      ref={sectionRef}
      id={id}
      itemScope
      itemType="https://schema.org/CollectionPage"
      className={cx("section--portfolio is-main-page section-gray", className)}
    >
      <div className="wrapper-gray is-home-portfolio">
        {/* Top Heading Container with Title Circle Oval */}
        <div className="portfolio__top-container">
          <div className="portfolio__heading is-homepage">
            <div className="container">
              <div className="heading_combined">
                <div className="heading_label">
                  <div className="fade-up">
                    <div className="body-smaller text-uppercase section-label">{label}</div>
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

        {/* Portfolio Carousel - EXACT SEVEN BRANDS IN UNIFORM DIMENSIONS (Change 06 & Change 10) */}
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
                {items.map((item) => (
                  <SwiperSlide key={item.id} className="swiper-slide w-dyn-item">
                    <PortfolioCard item={item} href={`#${id}`} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ) : (
            <div className="portfolio-slider">
              <div className="case-item">
                <p>Loading portfolio showcases...</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
