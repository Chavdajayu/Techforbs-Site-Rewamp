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
   * The static headline fragments around the 3D model, in visual order:
   * top-left, bottom-left, top-right. The bottom-right slot is the cycling
   * word, which comes from `rotatingWords`.
   */
  words?: [string, string, string];
  /**
   * Accent words cycled through in the bottom-right slot. Each is shown for
   * `rotateInterval`, then fades down and is replaced.
   */
  rotatingWords?: string[];
  /** How long each rotating word is held, in ms. */
  rotateInterval?: number;
  /** Screen-reader headline. Defaults to the static words plus the first rotating word. */
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
   *
   * The `.header` element lives outside the hero, so the hero drives it. Set
   * this to `false` if a page renders the hero somewhere other than directly
   * under the navbar, or renders more than one hero, and the header should
   * stay put.
   */
  animateHeader?: boolean;
}

/**
 * Home hero: faceted stage with a 3D Shopify model, headline split around it.
 *
 * Animation (one timeline, 0.15s delay): header slides down at 0.1s, the stage
 * blooms from scale 0.01 with `expo.inOut` at 0.35s, the cyan gradient fades in
 * at 1.5s, headline row 1 reveals at 1.35s and row 2 at 1.48s, supporting text
 * at 1.95s and the button at 2.15s. A 2.5s failsafe forces everything visible
 * if the timeline is interrupted. Honours `prefers-reduced-motion`.
 *
 * All element lookups are scoped to this section, so two heroes on one page
 * animate independently.
 */
export default function HeroSection({
  id,
  className,
  words = DEFAULT_WORDS,
  rotatingWords = DEFAULT_ROTATING_WORDS,
  rotateInterval = 2600,
  srHeadline,
  backgroundImage = "/images/hero/hero-section-image.png",
  backgroundAlt = "TechForbs: Shopify Experts",
  supportingText = "Scale your e-commerce platform with precision engineering, headless Shopify architectures, and enterprise development.",
  ctaHref = "#contact-section",
  animateHeader = true,
}: HeroSectionProps = {}) {
  const sectionRef = useRef<HTMLElement>(null);
  const [wordIndex, setWordIndex] = useState(0);
  const [wordVisible, setWordVisible] = useState(true);

  // Cycle the accent word: hold, fade down, swap, fade back up.
  // Mirrors the reference timing - 2600ms hold, 380ms crossfade.
  //
  // The effect keys off the word COUNT, not the array itself: a caller passing
  // an inline array literal would otherwise give it a fresh identity on every
  // render and restart the timer before it ever completed a cycle.
  const wordCount = rotatingWords.length;

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
      }, 380);
    }, rotateInterval);

    return () => {
      clearInterval(timer);
      if (swap) clearTimeout(swap);
    };
  }, [wordCount, rotateInterval]);

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const root = sectionRef.current;
      if (!root) return;

      // `.header` is the navbar, which sits outside this section.
      const header = animateHeader ? document.querySelector(".header") : null;
      const heroStage = root.querySelector(".hero__content-top");
      const heroGradient = root.querySelector(".hero__gradient");
      const wordElements = root.querySelectorAll(".hero-word-text");
      const heroText = root.querySelector(".hero__content-text");
      const heroButtons = root.querySelector(".hero__content-buttons");

      if (prefersReducedMotion) {
        if (header) gsap.set(header, { yPercent: 0, opacity: 1 });
        if (heroStage) gsap.set(heroStage, { scale: 1, x: 0, y: 0, opacity: 1 });
        if (heroGradient) gsap.set(heroGradient, { opacity: 1 });
        gsap.set(wordElements, { y: 0, opacity: 1 });
        if (heroText) gsap.set(heroText, { y: 0, opacity: 1 });
        if (heroButtons) gsap.set(heroButtons, { y: 0, opacity: 1 });
        return;
      }

      // Initial state setup before animation starts:
      // Background is clean #101010 - cyan/blue gradient starts hidden (opacity: 0)
      // heroStage (.hero__content-top) containing black faceted background & 3D model:
      // scale: 0.01, x: "-2.25rem", y: "4rem", transformOrigin: "50% 50%"
      if (header) gsap.set(header, { yPercent: -100, opacity: 0 });
      if (heroStage) gsap.set(heroStage, { scale: 0.01, x: "-2.25rem", y: "4rem", transformOrigin: "50% 50%", opacity: 1 });
      if (heroGradient) gsap.set(heroGradient, { opacity: 0 });
      gsap.set(wordElements, { y: 26, opacity: 0 });
      if (heroText) gsap.set(heroText, { y: 30, opacity: 0 });
      if (heroButtons) gsap.set(heroButtons, { y: 20, opacity: 0 });

      const tl = gsap.timeline({ delay: 0.15 });

      // Step 1: At 0.1s, Header slides down into place
      if (header) {
        tl.to(header, { yPercent: 0, opacity: 1, duration: 1.0, ease: "power2.out" }, 0.1);
      }

      // Step 2: At 0.35s, 3D stage and faceted black background scale up from offset to center
      // Duration: 1.5s, Ease: expo.inOut (Authentic Reference Choreography)
      if (heroStage) {
        tl.to(
          heroStage,
          {
            scale: 1,
            x: "0rem",
            y: "0rem",
            duration: 1.5,
            ease: "expo.inOut",
          },
          0.35
        );
      }

      // Step 3: At 1.5s, as the Hero BG Image finishes blooming, the glowing cyan/blue gradient fades in!
      // Duration: 1.25s, Ease: power2.out
      if (heroGradient) {
        tl.to(
          heroGradient,
          {
            opacity: 1,
            duration: 1.25,
            ease: "power2.out",
          },
          1.5
        );
      }

      // Step 3: At 1.35s, Heading Row 1 rises in: "Stores" and "to"
      tl.to(
        ".hero-grid-left-1 .hero-word-text, .hero-grid-right-1 .hero-word-text",
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power2.out",
        },
        1.35
      );

      // Step 4: At 1.48s, Heading Row 2 rises in: "built" and the cycling accent word
      tl.to(
        ".hero-grid-left-2 .hero-word-text, .hero-grid-right-2 .hero-word-text",
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power2.out",
        },
        1.48
      );

      // Step 5: At 1.95s, Supporting text rises into place
      if (heroText) {
        tl.to(
          heroText,
          {
            y: 0,
            opacity: 1,
            duration: 1.0,
            ease: "power2.out",
          },
          1.95
        );
      }

      // Step 6: At 2.15s, Buttons fade in
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
            minHeight: "880px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            paddingTop: "6.5rem",
            paddingBottom: "3rem",
          }}
        >
          {/* Background Image - CHANGE 07: Exact supplied Hero Section Image */}
          <img
            src={backgroundImage}
            loading="eager"
            width={1424}
            height={1468}
            alt={backgroundAlt}
            fetchPriority="high"
            className="hero__content-top-bg"
            style={{
              pointerEvents: "none",
            }}
          />

          {/* CHANGE 02: Three-Column Reserved-Space Composition */}
          <div className="hero-composition-wrap">
            <h1 className="hero-heading-h1">
              {/* Semantic full title for SEO & accessibility */}
              <span className="sr-only">
                {srHeadline ?? `${words.join(" ")} ${rotatingWords[0] ?? ""}`.trim()}
              </span>

              {/* Accent bloom behind the headline */}
              <div aria-hidden="true" className="hero-headline-glow-anchor">
                <div className="hero-headline-glow" />
              </div>

              <div className="hero-headline-grid" aria-hidden="true">
                {/* Row 1 Left: Stores */}
                <div className="hero-grid-col hero-grid-left-1">
                  <div className="hero-text-row">
                    <span className="hero-word-text">{words[0]}</span>
                  </div>
                </div>

                {/* Center: Dedicated Reserved Space for 3D Shopify Model spanning Row 1 & 2 */}
                <div className="hero-grid-col hero-grid-center">
                  <Hero3DCanvas />
                </div>

                {/* Row 1 Right: to */}
                <div className="hero-grid-col hero-grid-right-1">
                  <div className="hero-text-row">
                    <span className="hero-word-text">{words[2]}</span>
                  </div>
                </div>

                {/* Row 2 Left: built */}
                <div className="hero-grid-col hero-grid-left-2">
                  <div className="hero-text-row">
                    <span className="hero-word-text">{words[1]}</span>
                  </div>
                </div>

                {/* Row 2 Right: cycling accent word */}
                <div className="hero-grid-col hero-grid-right-2">
                  <div className="hero-text-row">
                    <span className="hero-word-text">
                      <span
                        className="hero-word-accent"
                        data-visible={wordVisible ? "true" : "false"}
                      >
                        {rotatingWords[wordIndex] ?? ""}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </h1>

            {/* Supporting paragraph (visible on mobile only; desktop preserves clean baseline aesthetic) */}
            <div className="hero__content-text md:hidden" style={{ textAlign: "center", marginTop: "2rem", position: "relative", zIndex: 12 }}>
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
            <div className="hero__content-buttons md:hidden" style={{ display: "flex", justifyContent: "center", marginTop: "1.5rem", position: "relative", zIndex: 12 }}>
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
        </div>
      </div>
    </section>
  );
}
