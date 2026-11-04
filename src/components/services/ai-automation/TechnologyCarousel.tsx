"use client";

import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Link from "next/link";
import { useIsClient } from "@/hooks/useIsClient";
import SliderArrows from "./SliderArrows";

/**
 * Technologies we use in AI & automation.
 *
 * Reference behaviour (CHE IT `.tech-slider`), reproduced exactly:
 *   loop: true, speed: 1000, spaceBetween: 16,
 *   slidesPerView: 1 -> 480: 2 (16) -> 992: 3 (30)
 *   autoplay { delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true },
 *   started only once the slider scrolls into view.
 */

type Tech = { name: string; icon: string; href?: string };

const TECHNOLOGIES: Tech[] = [
  { name: "Make", icon: "/images/services/ai-automation/69522e11748d65f95259bf76_make-color 1.svg" },
  { name: "n8n", icon: "/images/services/ai-automation/69522e119ada4a224d43f995_n8n-color 1.svg" },
  { name: "Python", icon: "/images/technologies/6613b9be680c55ac4b07fa82_python.svg" },
  { name: "Node.js", icon: "/images/technologies/6613ba19ecc9cd312295669d_nodevg.svg", href: "/technologies/node-js" },
  { name: "React", icon: "/images/technologies/6613b9d1ecb1cc050a0e9b21_react.svg", href: "/technologies/react" },
  { name: "Shopify", icon: "/images/technologies/6613ba0792d3339b64c8a066_hopify.svg", href: "/technologies/shopify" },
  { name: "WooCommerce", icon: "/images/technologies/6613b99db664ec9b28788819_woocom.svg", href: "/technologies/woocommerce" },
  { name: "PHP", icon: "/images/technologies/6613b9a8135ca957aa3d95c4_php.svg", href: "/technologies/php" },
];

function TechCard({ tech }: { tech: Tech }) {
  const inner = (
    <>
      <div className="tech-ecosystem-item-image-wrap">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={tech.icon} alt={`${tech.name} logo`} loading="lazy" className="tech-ecosystem-item-image" />
      </div>
      <div className="tech-ecosystem-item-divider"></div>
      <div className="tech-ecosystem-item-title">{tech.name}</div>
    </>
  );

  // The reference renders each card as a link. We only link the technologies
  // that actually have a TechForbs page, so no decorative dead controls appear.
  return tech.href ? (
    <Link href={tech.href} className="tech-ecosystem-item">
      {inner}
    </Link>
  ) : (
    <div className="tech-ecosystem-item">{inner}</div>
  );
}

export default function TechnologyCarousel() {
  const mounted = useIsClient();
  const swiperRef = useRef<SwiperType | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  // Reference parity: autoplay is stopped on init and started when visible.
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

  // Server/first paint: a plain 3-up grid so the section is never empty
  // and never collapses into the long vertical stack.
  if (!mounted) {
    return (
      <div className="tech-slider-wrap">
        <div className="tech-ecosystem-grid is-static-fallback">
          {TECHNOLOGIES.slice(0, 3).map((tech) => (
            <div key={tech.name}>
              <TechCard tech={tech} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="tech-slider-wrap" ref={wrapRef}>
      <Swiper
        className="tech-slider"
        modules={[Navigation, Autoplay]}
        onSwiper={(s) => {
          swiperRef.current = s;
          s.autoplay?.stop();
        }}
        loop
        speed={1000}
        slidesPerView={1}
        spaceBetween={16}
        autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        navigation={{ prevEl: ".tech-slider-prev", nextEl: ".tech-slider-next" }}
        breakpoints={{
          480: { slidesPerView: 2, spaceBetween: 16 },
          992: { slidesPerView: 3, spaceBetween: 30 },
        }}
        wrapperClass="swiper-wrapper tech-ecosystem-grid"
      >
        {TECHNOLOGIES.map((tech) => (
          <SwiperSlide key={tech.name}>
            <TechCard tech={tech} />
          </SwiperSlide>
        ))}
      </Swiper>

      <SliderArrows
        prevClass="tech-slider-prev"
        nextClass="tech-slider-next"
        prevLabel="Previous technology"
        nextLabel="Next technology"
      />
    </div>
  );
}
