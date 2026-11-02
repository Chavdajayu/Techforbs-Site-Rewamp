"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import Hero3DCanvas from "./Hero3DCanvas";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const header = document.querySelector(".header");
      const heroStage = document.querySelector(".hero__content-top");
      const heroGradient = document.querySelector(".hero__gradient");
      const wordElements = document.querySelectorAll(".hero-word-text");
      const heroText = document.querySelector(".hero__content-text");
      const heroButtons = document.querySelector(".hero__content-buttons");

      if (prefersReducedMotion) {
        if (header) gsap.set(header, { yPercent: 0, opacity: 1 });
        if (heroStage) gsap.set(heroStage, { scale: 1, x: 0, y: 0, opacity: 1 });
        if (heroGradient) gsap.set(heroGradient, { opacity: 1 });
        gsap.set(wordElements, { yPercent: 0, opacity: 1 });
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
      gsap.set(wordElements, { yPercent: 120, opacity: 0 });
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

      // Step 3: At 1.35s, Heading Row 1 reveals: "Powering" and "Shopify"
      tl.to(
        ".hero-grid-left-1 .hero-word-text, .hero-grid-right-1 .hero-word-text",
        {
          yPercent: 0,
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: "expo.out",
        },
        1.35
      );

      // Step 4: At 1.48s, Heading Row 2 reveals: "Stores to" and "Grow"
      tl.to(
        ".hero-grid-left-2 .hero-word-text, .hero-grid-right-2 .hero-word-text",
        {
          yPercent: 0,
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: "expo.out",
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
        gsap.to(".hero-word-text", { yPercent: 0, y: 0, opacity: 1, duration: 0.3 });
      }, 2500);

      return () => {
        clearTimeout(safetyTimer);
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section--hero" style={{ backgroundColor: "#101010" }}>
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
            src="/images/hero/hero-section-image.png"
            loading="eager"
            width={1424}
            height={1468}
            alt="TechForbs: Shopify Experts"
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
              <span className="sr-only">Powering Shopify Stores to Grow</span>

              <div className="hero-headline-grid" aria-hidden="true">
                {/* Row 1 Left: POWERING */}
                <div className="hero-grid-col hero-grid-left-1">
                  <div className="hero-text-row overflow-hidden">
                    <span className="hero-word-text">Powering</span>
                  </div>
                </div>

                {/* Center: Dedicated Reserved Space for 3D Shopify Model spanning Row 1 & 2 */}
                <div className="hero-grid-col hero-grid-center">
                  <Hero3DCanvas />
                </div>

                {/* Row 1 Right: SHOPIFY */}
                <div className="hero-grid-col hero-grid-right-1">
                  <div className="hero-text-row overflow-hidden">
                    <span className="hero-word-text">Shopify</span>
                  </div>
                </div>

                {/* Row 2 Left: STORES TO */}
                <div className="hero-grid-col hero-grid-left-2" style={{ whiteSpace: "nowrap" }}>
                  <div className="hero-text-row overflow-hidden" style={{ whiteSpace: "nowrap" }}>
                    <span className="hero-word-text" style={{ whiteSpace: "nowrap" }}>Stores to</span>
                  </div>
                </div>

                {/* Row 2 Right: GROW */}
                <div className="hero-grid-col hero-grid-right-2">
                  <div className="hero-text-row overflow-hidden">
                    <span className="hero-word-text">Grow</span>
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
                Scale your e-commerce platform with precision engineering, headless Shopify architectures, and enterprise development.
              </p>
            </div>

            {/* Floating / Mobile Contact Icon */}
            <div className="hero__content-buttons md:hidden" style={{ display: "flex", justifyContent: "center", marginTop: "1.5rem", position: "relative", zIndex: 12 }}>
              <Link href="#contact-section" title="Contact us" className="w-inline-block">
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
