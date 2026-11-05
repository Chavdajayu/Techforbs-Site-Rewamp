"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { useIsClient } from "@/hooks/useIsClient";
import { AI_AUTOMATION_TECHNOLOGIES, type TechEcosystemItem } from "@/data/siteData";

import "swiper/css";
import "swiper/css/navigation";

export interface TechEcosystemSectionProps {
  id?: string;
  className?: string;
  title?: React.ReactNode;
  technologies?: TechEcosystemItem[];
}

export default function TechEcosystemSection({
  id = "ecosystem",
  className = "tech-ecosystem",
  title,
  technologies,
}: TechEcosystemSectionProps = {}) {
  const swiperRef = useRef<SwiperType | null>(null);
  const mounted = useIsClient();
  const techList = technologies || AI_AUTOMATION_TECHNOLOGIES;

  const renderItem = (tech: TechEcosystemItem) => {
    const content = (
      <>
        <div className="tech-ecosystem-item-image-wrap">
          <img
            src={tech.icon}
            loading="lazy"
            alt={tech.alt || `${tech.name} logo`}
            className="tech-ecosystem-item-image"
          />
        </div>
        <div className="tech-ecosystem-item-divider"></div>
        <div className="tech-ecosystem-item-title">{tech.name}</div>
      </>
    );

    if (tech.href) {
      return (
        <Link href={tech.href} className="tech-ecosystem-item w-inline-block">
          {content}
        </Link>
      );
    }

    return <div className="tech-ecosystem-item">{content}</div>;
  };

  return (
    <section id={id} className={className}>
      <h2
        color-word="#00e5ff"
        text-split=""
        lines-slide-up=""
        color-words-index="0"
        className="tech-section-title mb-60"
      >
        {title || (
          <>
            <span className="text-[#00e5ff]">Technologies</span> we use in AI & automation
          </>
        )}
      </h2>

      <div className="fade-up-alt">
        <div className="tech-slider-wrap">
          {mounted ? (
            <div className="swiper tech-slider w-dyn-list">
              <Swiper
                modules={[Autoplay, Navigation]}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
                loop={true}
                speed={1000}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                slidesPerView={1}
                spaceBetween={16}
                breakpoints={{
                  480: { slidesPerView: 2, spaceBetween: 16 },
                  992: { slidesPerView: 3, spaceBetween: 30 },
                }}
                className="tech-ecosystem-grid swiper-wrapper w-dyn-items"
              >
                {techList.map((tech, idx) => (
                  <SwiperSlide key={idx} className="swiper-slide w-dyn-item">
                    {renderItem(tech)}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ) : (
            <div className="swiper tech-slider w-dyn-list">
              <div className="tech-ecosystem-grid swiper-wrapper w-dyn-items">
                {techList.map((tech, idx) => (
                  <div key={idx} className="swiper-slide w-dyn-item">
                    {renderItem(tech)}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="slider-buttons">
            <button
              type="button"
              aria-label="Previous technology"
              className="button button_slider tech-slider-prev"
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
              aria-label="Next technology"
              className="button button_slider tech-slider-next"
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
      </div>
    </section>
  );
}

export const TechEcosystem = TechEcosystemSection;
