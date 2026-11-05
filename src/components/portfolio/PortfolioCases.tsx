"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { PORTFOLIO_DATA, type PortfolioItem } from "@/data/siteData";
import { useIsClient } from "@/hooks/useIsClient";
import { cx } from "@/components/types";
import PortfolioCard from "./PortfolioCard";

import "swiper/css";
import "swiper/css/navigation";

export interface PortfolioCasesProps {
  /** DOM id of the section. */
  id?: string;
  /** Extra class names appended to the section. */
  className?: string;
  /** Section heading. */
  title?: string;
  /** Case-study slides. Defaults to the full TechForbs portfolio. */
  items?: PortfolioItem[];
  /** Where each card and the "View all" button point. */
  portfolioHref?: string;
  /** Label of the button under the slider. `null` hides it. */
  viewAllLabel?: string | null;
}

/**
 * Services-page client-success carousel ("Winning with us").
 *
 * Renders the same `case-item` cards as the home `PortfolioSection` — via the
 * shared `PortfolioCard` — inside the services-page `cases-wrap` shell with
 * arrow controls and a "View all" button, matching the reference layout.
 *
 * Animation: card entrance is driven by the page's client-interactions
 * bootstrapper (`.case-item` fade-up); the carousel itself is arrow-driven
 * with no autoplay.
 */
export default function PortfolioCases({
  id = "why-we",
  className,
  title = "Winning with us: our clients' success",
  items = PORTFOLIO_DATA,
  portfolioHref = "/#portfolio-section",
  viewAllLabel = "View all",
}: PortfolioCasesProps = {}) {
  const swiperRef = useRef<SwiperType | null>(null);
  const mounted = useIsClient();

  return (
    <section id={id} className={cx("tech-benefits", className)}>
      <h2
        color-word="#00e5ff"
        text-split=""
        lines-slide-up=""
        color-words-index="5,6"
        className="tech-section-title mb-60"
      >
        {title}
      </h2>

      <div className="cases-wrap is-services-page">
        {mounted ? (
          <div className="swiper cases-slider w-dyn-list">
            <Swiper
              modules={[Navigation]}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              loop={false}
              speed={700}
              spaceBetween={16}
              slidesPerView={1.15}
              breakpoints={{
                480: { slidesPerView: 1.45, spaceBetween: 16 },
                768: { slidesPerView: 2, spaceBetween: 24 },
                992: { slidesPerView: 3, spaceBetween: 36 },
              }}
              className="swiper-wrapper w-dyn-items"
            >
              {items.map((item) => (
                <SwiperSlide key={item.id} className="swiper-slide w-dyn-item">
                  <PortfolioCard item={item} href={portfolioHref} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <div className="cases-slider">
            <div className="case-item" />
          </div>
        )}

        <div className="slider-buttons slider-buttons_portfolio">
          <button
            type="button"
            onClick={() => swiperRef.current?.slidePrev()}
            className="button button_slider swis-portfolio-prev"
            aria-label="Previous case study"
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
            className="button button_slider swis-portfolio-next"
            aria-label="Next case study"
          >
            <div className="button-slider-arrow w-embed">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none">
                <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
          </button>
        </div>
      </div>

      {viewAllLabel && (
        <div className="fade-up-alt">
          <div className="tech-benefits-buttons">
            <Link href={portfolioHref} className="button">
              {viewAllLabel}
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
