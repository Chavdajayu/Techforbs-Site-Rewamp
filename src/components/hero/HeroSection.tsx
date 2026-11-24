"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import Hero3DCanvas from "./Hero3DCanvas";
import { cx, type SectionBaseProps } from "@/components/types";

const DEFAULT_WORDS: [string, string, string] = ["Stores", "built", "to"];
const DEFAULT_ROTATING_WORDS = ["sell.", "scale.", "convert.", "win."];

export interface HeroSectionProps extends SectionBaseProps {
  /**
   * The static headline fragments around the 3D model:
   * words[0] = "Stores", words[1] = "built", words[2] = "to"
   */
  words?: [string, string, string];
  /**
   * Accent words cycled through: sell., scale., convert., win.
   */
  rotatingWords?: string[];
  /** How long each rotating word is held, in ms. */
  rotateInterval?: number;
  /** Screen-reader headline. */
  srHeadline?: string;
  /** Faceted background artwork behind the 3D stage. */
  backgroundImage?: string;
  /** Alt text for the background artwork. */
  backgroundAlt?: string;
  /** Paragraph under the headline (mobile only). */
  supportingText?: string;
  /** Target of the floating mobile contact button. */
  ctaHref?: string;
  /**
   * Whether this hero plays the navbar's slide-down entrance.
   */
  animateHeader?: boolean;
}

/**
 * Home hero: 60% Left Typography / 40% Right 3D Shopify Stage with
 * clean left-extended polygonal architectural stage background.
 */
export default function HeroSection({
  id,
  className,
  words = DEFAULT_WORDS,
  rotatingWords = DEFAULT_ROTATING_WORDS,
  rotateInterval = 2400,
  srHeadline,
  backgroundImage = "/images/hero/hero-section-image-extended.webp",
  backgroundAlt = "TechForbs: Stores built to convert",
  supportingText = "Scale your e-commerce platform with precision engineering, headless Shopify architectures, and enterprise development.",
  ctaHref = "#contact-section",
  animateHeader = true,
}: HeroSectionProps = {}) {
  const sectionRef = useRef<HTMLElement>(null);
  const [wordIndex, setWordIndex] = useState(0);
  const [wordVisible, setWordVisible] = useState(true);

  const wordCount = rotatingWords.length;

  // Kinetic rotating word cycle: 2400ms hold, 360ms crossfade
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (wordCount < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let swap: ReturnType<typeof setTimeout> | undefined;
    const timer = setInterval(() => {
      setWordVisible(false);
      swap = setTimeout(() => {
        setWordIndex((i) => (i + 1) % wordCount);
        setWordVisible(true);
      }, 360);
    }, rotateInterval);

    return () => {
      clearInterval(timer);
      if (swap) clearTimeout(swap);
    };
  }, [wordCount, rotateInterval]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const root = sectionRef.current;
      if (!root) return;

      const header = animateHeader ? document.querySelector(".header") : null;
      const heroStage = root.querySelector(".hero__content-top");
      const heroBgImage = root.querySelector(".hero__content-top-bg");
      const heroGradient = root.querySelector(".hero__gradient");
      const heroRightCol = root.querySelector(".hero-col-right");
      const heroText = root.querySelector(".hero__content-text");
      const heroButtons = root.querySelector(".hero__content-buttons");

      if (prefersReducedMotion) {
        if (header) gsap.set(header, { clearProps: "all", opacity: 1 });
        if (heroStage) gsap.set(heroStage, { scale: 1, x: 0, y: 0, opacity: 1 });
        if (heroBgImage) gsap.set(heroBgImage, { "--hero-bg-scale": 1 });
        if (heroGradient) gsap.set(heroGradient, { opacity: 1 });
        gsap.set(".hero-word-text", { yPercent: 0, opacity: 1 });
        if (heroRightCol) gsap.set(heroRightCol, { scale: 1, opacity: 1, y: 0 });
        if (heroText) gsap.set(heroText, { y: 0, opacity: 1 });
        if (heroButtons) gsap.set(heroButtons, { y: 0, opacity: 1 });
        return;
      }

      // Initial state setup: hidden & ready to bloom into place with dramatic cinematic elegance
      if (header) gsap.set(header, { y: -80, opacity: 0 });
      if (heroStage) gsap.set(heroStage, { scale: 0.12, x: "-2.25rem", y: "4rem", opacity: 0, transformOrigin: "50% 50%" });
      if (heroBgImage) gsap.set(heroBgImage, { "--hero-bg-scale": 1.25 });
      if (heroGradient) gsap.set(heroGradient, { opacity: 0 });
      gsap.set(".hero-word-text", { yPercent: 125, opacity: 0 });
      if (heroRightCol) gsap.set(heroRightCol, { scale: 0.25, opacity: 0, y: 50, transformOrigin: "50% 50%" });
      if (heroText) gsap.set(heroText, { y: 30, opacity: 0 });
      if (heroButtons) gsap.set(heroButtons, { y: 25, opacity: 0 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 1. Stage Dramatic Swoop & Expansion at 0.15s (Exact CheIT inOutExpo signature curve)
      if (heroStage) {
        tl.to(
          heroStage,
          {
            scale: 1,
            x: "0rem",
            y: "0rem",
            opacity: 1,
            duration: 1.5,
            ease: "power4.inOut",
          },
          0.15
        );
      }

      // 2. Background Image Settling Zoom at 0.18s (Parallax settling from 1.25 to 1.0)
      if (heroBgImage) {
        tl.to(
          heroBgImage,
          {
            "--hero-bg-scale": 1,
            duration: 1.8,
            ease: "power3.out",
          },
          0.18
        );
      }

      // 3. Ambient Background Gradient Blooms in at 0.25s
      if (heroGradient) {
        tl.to(
          heroGradient,
          {
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
          },
          0.25
        );
      }

      // 4. Right Column 3D Stage bloom & rise at 0.45s (synchronized with 3D model entrance)
      if (heroRightCol) {
        tl.to(
          heroRightCol,
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 1.4,
            ease: "power3.out",
          },
          0.45
        );
      }

      // 5. Headline Row 1 reveals upward from overflow mask at 0.85s: "Stores built"
      tl.to(
        ".hero-text-line-1 .hero-word-text",
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power4.out",
        },
        0.85
      );

      // 6. Headline Row 2 reveals upward from overflow mask at 1.05s: "to [accent word]"
      tl.to(
        ".hero-text-line-2 .hero-word-text",
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power4.out",
        },
        1.05
      );

      // 7. Header glides down smoothly from above at 1.20s
      if (header) {
        tl.to(
          header,
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            clearProps: "transform",
          },
          1.20
        );
      }

      // 8. Mobile/tablet supporting text & buttons at 1.35s
      if (heroText) {
        tl.to(
          heroText,
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            ease: "power3.out",
          },
          1.35
        );
      }
      if (heroButtons) {
        tl.to(
          heroButtons,
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            ease: "power3.out",
          },
          1.45
        );
      }

      // Safety failsafe guarantees all elements are 100% visible after 3.8s
      const safetyTimer = setTimeout(() => {
        if (header) gsap.to(header, { y: 0, opacity: 1, duration: 0.3, clearProps: "transform" });
        if (heroStage) gsap.to(heroStage, { scale: 1, x: 0, y: 0, opacity: 1, duration: 0.3 });
        if (heroBgImage) gsap.to(heroBgImage, { "--hero-bg-scale": 1, duration: 0.3 });
        if (heroGradient) gsap.to(heroGradient, { opacity: 1, duration: 0.3 });
        gsap.to(".hero-word-text", { yPercent: 0, opacity: 1, duration: 0.3 });
        if (heroRightCol) gsap.to(heroRightCol, { scale: 1, opacity: 1, y: 0, duration: 0.3 });
      }, 3800);

      return () => {
        clearTimeout(safetyTimer);
      };
    }, sectionRef);

    return () => ctx.revert();
  }, [animateHeader]);

  return (
    <section ref={sectionRef} id={id} className={cx("section--hero", className)} style={{ backgroundColor: "#101010" }}>
      <div className="hero__content" style={{ backgroundColor: "#101010" }}>
        <div className="hero__gradient home-page" style={{ opacity: 0 }} />
        <div
          className="hero__content-top"
          style={{
            position: "relative",
            minHeight: "clamp(600px, 78vh, 780px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            paddingTop: "4.25rem",
            paddingBottom: "1.5rem",
            transformOrigin: "50% 50%",
            willChange: "transform, opacity",
          }}
        >
          {/* Extended Clean Hero Background Artwork */}
          <picture>
            <source srcSet="/images/hero/hero-section-image-extended.avif" type="image/avif" />
            <source srcSet="/images/hero/hero-section-image-extended.webp" type="image/webp" />
            <img
              src={backgroundImage}
              loading="eager"
              width={2880}
              height={1101}
              alt={backgroundAlt}
              fetchPriority="high"
              className="hero__content-top-bg"
              style={{
                pointerEvents: "none",
                objectPosition: "78% 40%",
                ["--hero-bg-scale" as any]: "1.25",
              }}
            />
          </picture>

          {/* Subtle architectural shadow overlay specifically on the BG image container */}
          <div className="hero__bg-shadow-overlay" aria-hidden="true" />

          {/* 60% Left Typography / 40% Right 3D Stage Composition */}
          <div className="hero-composition-wrap">
            <div className="hero-split-container">
              {/* 60% Left Part: Headline Typography */}
              <div className="hero-col-left">
                <h1 className="hero-heading-h1" style={{ margin: 0, padding: 0 }}>
                  <span className="sr-only">
                    {srHeadline ?? `${words.join(" ")} ${rotatingWords[0] ?? ""}`.trim()}
                  </span>

                  <div className="hero-headline-lines" aria-hidden="true">
                    <div className="hero-text-line hero-text-line-1">
                      <span className="hero-word-text">{words[0]} {words[1]}</span>
                    </div>

                    <div className="hero-text-line hero-text-line-2">
                      <span className="hero-word-text">
                        {words[2]}{" "}
                        <span
                          className="hero-word-accent"
                          data-visible={wordVisible ? "true" : "false"}
                        >
                          {rotatingWords[wordIndex] ?? ""}
                        </span>
                      </span>
                    </div>
                  </div>
                </h1>

                {/* Supporting paragraph (visible on mobile only) */}
                <div className="hero__content-text md:hidden" style={{ textAlign: "center", marginTop: "1.5rem", position: "relative", zIndex: 12 }}>
                  <p
                    style={{
                      maxWidth: "520px",
                      margin: "0 auto",
                      color: "rgba(255, 255, 255, 0.72)",
                      fontSize: "1.05rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {supportingText}
                  </p>
                </div>

                {/* Floating / Mobile Contact Icon */}
                <div className="hero__content-buttons md:hidden" style={{ display: "flex", justifyContent: "center", marginTop: "1.25rem", position: "relative", zIndex: 12 }}>
                  <Link href={ctaHref} title="Contact us" className="w-inline-block">
                    <div
                      className="hero__heading-icon-inner hover mobile-icon"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "52px",
                        height: "52px",
                        borderRadius: "50%",
                        backgroundColor: "#0077ff",
                        color: "#ffffff",
                        boxShadow: "0 6px 22px rgba(0, 119, 255, 0.45)",
                        transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                      }}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                    </div>
                    <span className="sr-only">Contact</span>
                  </Link>
                </div>
              </div>

              {/* 40% Right Part: 3D Shopify Model floating above the Square Stage */}
              <div className="hero-col-right">
                <div className="hero-3d-stage-container">
                  <Hero3DCanvas />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
