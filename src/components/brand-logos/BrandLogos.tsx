"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BRAND_LOGOS, type BrandLogo } from "@/data/siteData";
import { cx, type SectionBaseProps } from "@/components/types";

export interface BrandLogosProps extends SectionBaseProps {
  /** Logo grid contents. Defaults to the ten home-page brands. */
  logos?: BrandLogo[];
}

/**
 * Brand logo grid.
 *
 * Animation: the grid items fade and rise 25px with a 0.06s stagger once the
 * section's top passes 80% of the viewport, played once.
 */
export default function BrandLogos({
  id = "brands-section",
  className,
  logos = BRAND_LOGOS,
}: BrandLogosProps = {}) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const items = sectionRef.current?.querySelectorAll(".awards-grid__item");
      if (items && items.length) {
        gsap.fromTo(
          items,
          { y: 25, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.06,
            duration: 0.85,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id={id} className={cx("section--awards-grid is_home", className)}>
      <div className="container">
        <div itemType="https://schema.org/Organization" itemScope>
          <div className="w-dyn-list">
            <div role="list" className="awards-grid w-dyn-items">
              {logos.map((logo) => (
                <div role="listitem" key={logo.name} className="awards-grid__item w-dyn-item">
                  <img
                    src={logo.src}
                    loading="eager"
                    alt={logo.alt}
                    className="awards-grid__image"
                    style={{
                      maxHeight: logo.maxHeight || "70px",
                      maxWidth: logo.maxWidth || "280px",
                      width: "auto",
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
                  <a
                    title={logo.alt}
                    href={logo.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="awards-grid__link w-inline-block"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
