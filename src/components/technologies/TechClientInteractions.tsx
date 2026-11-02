"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function TechClientInteractions() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // 1. FAQ Accordion Click Handler
    const handleFaqClick = (e: MouseEvent) => {
      const header = (e.target as HTMLElement).closest(".faq-item-header");
      if (!header) return;
      const faqItem = header.closest(".faq-item");
      if (!faqItem) return;

      const isOpen = faqItem.classList.contains("is-open");
      faqItem.classList.toggle("is-open", !isOpen);
      faqItem.classList.toggle("w--open", !isOpen);
      const dropdown = faqItem.querySelector(".faq-item-header-dropdown");
      if (dropdown) {
        dropdown.classList.toggle("w--open", !isOpen);
      }
    };

    // 2. Smooth Scroll for hash links
    const handleHashClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    // 3. Testimonials Navigation Slider buttons
    const handleSliderPrev = (e: MouseEvent) => {
      const btn = (e.target as HTMLElement).closest(".testimonials-slider-prev");
      if (!btn) return;
      const swiperWrapper = document.querySelector(".testimonials__list") || document.querySelector(".swiper-wrapper");
      if (swiperWrapper) {
        swiperWrapper.scrollBy({ left: -400, behavior: "smooth" });
      }
    };

    const handleSliderNext = (e: MouseEvent) => {
      const btn = (e.target as HTMLElement).closest(".testimonials-slider-next");
      if (!btn) return;
      const swiperWrapper = document.querySelector(".testimonials__list") || document.querySelector(".swiper-wrapper");
      if (swiperWrapper) {
        swiperWrapper.scrollBy({ left: 400, behavior: "smooth" });
      }
    };

    document.addEventListener("click", handleFaqClick);
    document.addEventListener("click", handleHashClick);
    document.addEventListener("click", handleSliderPrev);
    document.addEventListener("click", handleSliderNext);

    if (prefersReducedMotion) {
      return () => {
        document.removeEventListener("click", handleFaqClick);
        document.removeEventListener("click", handleHashClick);
        document.removeEventListener("click", handleSliderPrev);
        document.removeEventListener("click", handleSliderNext);
      };
    }

    // 4. GSAP Scroll Animations matching Reference
    const ctx = gsap.context(() => {
      // A. Hero Section Entrance Animation
      const heroTitle = document.querySelector(".tech-hero-title");
      const heroText = document.querySelector(".tech-hero-text");
      const heroBg = document.querySelector(".tech-hero-bg");
      const heroBtn = document.querySelector(".tech-hero .button-wrap");

      if (heroBg) {
        gsap.fromTo(heroBg, { scale: 1.08, opacity: 0 }, { scale: 1, opacity: 0.85, duration: 1.4, ease: "power2.out" });
      }

      if (heroTitle) {
        gsap.fromTo(
          heroTitle,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.1, ease: "power3.out", delay: 0.2 }
        );
      }

      if (heroText) {
        gsap.fromTo(
          heroText,
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.0, ease: "power2.out", delay: 0.35 }
        );
      }

      if (heroBtn) {
        gsap.fromTo(
          heroBtn,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: "power2.out", delay: 0.5 }
        );
      }

      // Title circle SVG drawing animation
      const titleCircles = document.querySelectorAll(".title-circle svg path");
      titleCircles.forEach((path) => {
        const svgPath = path as SVGPathElement;
        const length = svgPath.getTotalLength ? svgPath.getTotalLength() : 500;
        gsap.set(svgPath, { strokeDasharray: length, strokeDashoffset: length });
        gsap.to(svgPath, {
          strokeDashoffset: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: svgPath,
            start: "top 85%",
            once: true,
          },
        });
      });

      // B. Section titles scroll reveal
      const sectionTitles = document.querySelectorAll(".tech-section-title");
      sectionTitles.forEach((title) => {
        gsap.fromTo(
          title,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: title,
              start: "top 85%",
              once: true,
            },
          }
        );
      });

      // C. Service items staggered fade-up
      const serviceItems = document.querySelectorAll(".tech-service-item");
      if (serviceItems.length) {
        gsap.fromTo(
          serviceItems,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".tech-service-list",
              start: "top 80%",
              once: true,
            },
          }
        );
      }

      // D. Case study cards entrance
      const caseItems = document.querySelectorAll(".case-item");
      caseItems.forEach((card) => {
        gsap.fromTo(
          card,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              once: true,
            },
          }
        );
      });

      // E. Benefits / Value cards
      const benefitCards = document.querySelectorAll(".tech-benefits-item");
      if (benefitCards.length) {
        gsap.fromTo(
          benefitCards,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".tech-benefits-list",
              start: "top 80%",
              once: true,
            },
          }
        );
      }

      // F. Ecosystem tags / cards
      const ecoTags = document.querySelectorAll(".tech-ecosystem-tag, .tech-ecosystem-item");
      if (ecoTags.length) {
        gsap.fromTo(
          ecoTags,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.04,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".tech-ecosystem",
              start: "top 80%",
              once: true,
            },
          }
        );
      }

      // G. Testimonials cards
      const testCards = document.querySelectorAll(".testimonials__card");
      if (testCards.length) {
        gsap.fromTo(
          testCards,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".tech-testimonials",
              start: "top 80%",
              once: true,
            },
          }
        );
      }

      // H. FAQ items
      const faqItems = document.querySelectorAll(".faq-item");
      if (faqItems.length) {
        gsap.fromTo(
          faqItems,
          { y: 25, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".tech-faq",
              start: "top 80%",
              once: true,
            },
          }
        );
      }
    });

    return () => {
      document.removeEventListener("click", handleFaqClick);
      document.removeEventListener("click", handleHashClick);
      document.removeEventListener("click", handleSliderPrev);
      document.removeEventListener("click", handleSliderNext);
      ctx.revert();
    };
  }, []);

  return null;
}
