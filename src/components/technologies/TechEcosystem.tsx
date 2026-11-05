"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { useIsClient } from "@/hooks/useIsClient";
import { cx } from "@/components/types";
import type { TechEcosystemItem } from "@/data/siteData";

import "swiper/css";
import "swiper/css/navigation";

export interface TechEcosystemProps {
  /** DOM id of the section. */
  id?: string;
  /** Extra class names appended to the section. */
  className?: string;
  /** Section heading. */
  title?: string;
  /** Index of the heading word tinted by the page's text-split animation. */
  colorWordsIndex?: string;
  /** Logo tiles. */
  items: TechEcosystemItem[];
}

/**
 * "Technologies we use" ecosystem carousel.
 *
 * Each tile is a `tech-ecosystem-item`: an image well, a tinted divider and an
 * uppercase caption. Four tiles per view on desktop, three on tablet, two on
 * phones, with arrow controls.
 *
 * The Webflow markup styles `.tech-ecosystem-grid` as a CSS grid, but Swiper's
 * stylesheet (`.swiper-wrapper{display:flex}` / `.swiper-slide{width:100%}`)
 * loads after it and wins, which collapses the grid to a single full-width
 * tile unless Swiper actually runs. So this section drives a real Swiper,
 * which also makes the arrows work.
 *
 * Animation: tile entrance is driven by the page's client-interactions
 * bootstrapper, which fades `.tech-ecosystem-item` elements up on scroll.
 */
export default function TechEcosystem({
  id = "ecosystem",
  className,
  title = "Technologies we use",
  colorWordsIndex = "0",
  items,
}: TechEcosystemProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  const mounted = useIsClient();

  return (
    <section id={id} className={cx("tech-ecosystem", className)}>
      <h2
        color-word="#00e5ff"
        text-split=""
        lines-slide-up=""
        color-words-index={colorWordsIndex}
        className="tech-section-title mb-60"
      >
        {title}
      </h2>
      <div className="fade-up-alt">
        <div className="tech-slider-wrap">
          {mounted ? (
            <div className="swiper tech-slider w-dyn-list">
              <Swiper
                modules={[Navigation]}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
                loop={false}
                speed={600}
                spaceBetween={16}
                slidesPerView={2}
                breakpoints={{
                  768: { slidesPerView: 3, spaceBetween: 16 },
                  992: { slidesPerView: 4, spaceBetween: 16 },
                }}
                role="list"
                className="tech-ecosystem-grid swiper-wrapper w-dyn-items"
              >
                {items.map((item) => (
                  <SwiperSlide key={item.name} role="listitem" className="swiper-slide w-dyn-item">
                    <a href={item.href ?? "#"} className="tech-ecosystem-item w-inline-block">
                      <div className="tech-ecosystem-item-image-wrap">
                        <img
                          src={item.icon}
                          loading="lazy"
                          alt={item.alt ?? `${item.name} logo`}
                          className="tech-ecosystem-item-image"
                        />
                      </div>
                      <div className="tech-ecosystem-item-divider"></div>
                      <div className="tech-ecosystem-item-title">{item.name}</div>
                    </a>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ) : (
            <div className="tech-slider">
              <div className="tech-ecosystem-item" />
            </div>
          )}
          <div className="slider-buttons">
            <button
              type="button"
              onClick={() => swiperRef.current?.slidePrev()}
              className="button button_slider tech-slider-prev"
              aria-label="Previous technologies"
            >
              <div className="button-slider-arrow w-embed">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none">
                  <path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
            </button>
            <button
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
              className="button button_slider tech-slider-next"
              aria-label="Next technologies"
            >
              <div className="button-slider-arrow w-embed">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none">
                  <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
