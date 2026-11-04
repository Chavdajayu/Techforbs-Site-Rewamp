"use client";

import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { useIsClient } from "@/hooks/useIsClient";
import { PORTFOLIO_DATA } from "@/data/siteData";
import SliderArrows from "./SliderArrows";

/**
 * Winning with us: our clients' success.
 *
 * Reference behaviour (CHE IT `.cases-slider`), reproduced exactly:
 *   loop: true, speed: 1000, spaceBetween: 16,
 *   slidesPerView: 1 -> 480: 1 (16) -> 992: 2 (50)
 *   autoplay { delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }
 *
 * CONTENT INTEGRITY: every card is rendered from the project's own
 * PORTFOLIO_DATA — real TechForbs projects, their real screenshots, their real
 * copy. Nothing here is written for this page. The selection below keeps only
 * the projects whose own portfolio record identifies them as automation work,
 * so the section never implies a case study that the data does not support.
 */
const AUTOMATION_CASES = PORTFOLIO_DATA.filter(
  (p) => p.tags.includes("AI & Automation") || /automat/i.test(p.description)
);

export default function ClientSuccessCarousel() {
  const mounted = useIsClient();
  const swiperRef = useRef<SwiperType | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const autoplay = swiperRef.current?.autoplay;
          if (!autoplay) return;
          if (entry.isIntersecting) autoplay.start();
          else autoplay.stop();
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [mounted]);

  const cards = AUTOMATION_CASES.map((item) => (
    <div className="case-item is-no-link" key={item.id}>
      <div className="case-item-image" style={{ backgroundColor: item.bgColor }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/services/ai-automation/case-bg.svg" alt="" aria-hidden="true" className="case-item-circles" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={item.image} alt={`${item.brand} — ${item.title}`} loading="lazy" className="case-item-thumb min-height" />
      </div>
      <h3 className="case-item-title">{item.title}</h3>
      <p className="case-item-excerpt">{item.description}</p>
      <div className="case-item_tags">
        {item.tags.slice(0, 3).map((tag) => (
          <span className="cms-tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  ));

  if (!mounted) {
    return (
      <div className="cases-wrap is-services-page">
        <div className="cases-static-fallback">{cards.slice(0, 2)}</div>
      </div>
    );
  }

  return (
    <div className="cases-wrap is-services-page" ref={wrapRef}>
      <Swiper
        className="cases-slider"
        modules={[Navigation, Autoplay]}
        onSwiper={(s) => {
          swiperRef.current = s;
          s.autoplay?.stop();
        }}
        /* Swiper disables (and warns about) loop mode when there are fewer
           slides than twice the largest slidesPerView. With three genuine
           automation case studies we only loop once the data supports it. */
        loop={AUTOMATION_CASES.length >= 4}
        speed={1000}
        slidesPerView={1}
        spaceBetween={16}
        autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        navigation={{ prevEl: ".swis-portfolio-prev", nextEl: ".swis-portfolio-next" }}
        breakpoints={{
          480: { slidesPerView: 1, spaceBetween: 16 },
          992: { slidesPerView: 2, spaceBetween: 50 },
        }}
      >
        {AUTOMATION_CASES.map((item, i) => (
          <SwiperSlide key={item.id}>{cards[i]}</SwiperSlide>
        ))}
      </Swiper>

      <SliderArrows
        prevClass="swis-portfolio-prev"
        nextClass="swis-portfolio-next"
        prevLabel="Previous project"
        nextLabel="Next project"
        variant="slider-buttons_portfolio"
      />
    </div>
  );
}
