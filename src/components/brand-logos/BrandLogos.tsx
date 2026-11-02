"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BRAND_LOGOS } from "@/data/siteData";

export default function BrandLogos() {
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
    <section ref={sectionRef} id="brands-section" className="section--awards-grid is_home">
      <div className="container">
        <div itemType="https://schema.org/Organization" itemScope>
          <div className="w-dyn-list">
            <div role="list" className="awards-grid w-dyn-items">
              {BRAND_LOGOS.map((logo) => (
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
