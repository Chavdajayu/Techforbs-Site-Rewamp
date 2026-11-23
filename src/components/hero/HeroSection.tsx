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
      const heroGradient = root.querySelector(".hero__gradient");
      const wordElements = root.querySelectorAll(".hero-word-text");
      const heroText = root.querySelector(".hero__content-text");
      const heroButtons = root.querySelector(".hero__content-buttons");

      if (prefersReducedMotion) {
        if (header) gsap.set(header, { clearProps: "all", opacity: 1 });
        if (heroStage) gsap.set(heroStage, { scale: 1, x: 0, y: 0, opacity: 1 });
        if (heroGradient) gsap.set(heroGradient, { opacity: 1 });
        gsap.set(wordElements, { y: 0, opacity: 1 });
        if (heroText) gsap.set(heroText, { y: 0, opacity: 1 });
        if (heroButtons) gsap.set(heroButtons, { y: 0, opacity: 1 });
        return;
      }

      // Initial state setup before animation starts
      if (header) gsap.set(header, { clearProps: "all" });
      if (heroStage) gsap.set(heroStage, { scale: 0.94, x: "0rem", y: "2rem", transformOrigin: "50% 50%", opacity: 0 });
      if (heroGradient) gsap.set(heroGradient, { opacity: 0 });
      gsap.set(wordElements, { y: 35, opacity: 0 });
      if (heroText) gsap.set(heroText, { y: 25, opacity: 0 });
      if (heroButtons) gsap.set(heroButtons, { y: 20, opacity: 0 });

      const tl = gsap.timeline({ delay: 0.1 });

      // Step 1: At 0.1s, Header slides down and clears inline transforms
      if (header) {
        tl.fromTo(
          header,
          { y: -50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            clearProps: "transform",
          },
          0.1
        );
      }

      // Step 2: At 0.2s, 3D stage and faceted background smoothly bloom up
      if (heroStage) {
        tl.to(
          heroStage,
          {
            scale: 1,
            x: "0rem",
            y: "0rem",
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
          },
          0.2
        );
      }

      // Step 3: At 0.35s, glowing cyan/blue ambient gradient fades in
      if (heroGradient) {
        tl.to(
          heroGradient,
          {
            opacity: 1,
            duration: 1.0,
            ease: "power2.out",
          },
          0.35
        );
      }

      // Step 4: At 0.45s, Headline Row 1 rises smoothly: "Stores built"
      tl.to(
        ".hero-text-line-1 .hero-word-text",
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power3.out",
        },
        0.45
      );

      // Step 5: At 0.6s, Headline Row 2 rises smoothly: "to [accent word]"
      tl.to(
        ".hero-text-line-2 .hero-word-text",
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power3.out",
        },
        0.6
      );

      // Step 6: At 0.75s, Supporting text rises into place
      if (heroText) {
        tl.to(
          heroText,
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          0.75
        );
      }

      // Step 7: At 0.9s, Mobile/desktop CTA buttons rise in
      if (heroButtons) {
        tl.to(
          heroButtons,
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          0.9
        );
      }

      // Step 7: At 2.15s, Buttons fade in
      if (heroButtons) {
        tl.to(
          heroButtons,
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
          },
          2.15
        );
      }

      // Safety failsafe guarantees all elements are 100% visible
      const safetyTimer = setTimeout(() => {
        if (heroStage) gsap.to(heroStage, { scale: 1, x: 0, y: 0, opacity: 1, duration: 0.3 });
        if (heroGradient) gsap.to(heroGradient, { opacity: 1, duration: 0.3 });
        gsap.to(".hero-word-text", { y: 0, opacity: 1, duration: 0.3 });
      }, 2500);

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
            transform: "translate3d(-2.25rem, 4rem, 0) scale(0.001)",
            transformOrigin: "50% 50%",
            opacity: 0,
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
