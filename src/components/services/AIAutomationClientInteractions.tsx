"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AIAutomationClientInteractions() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // 1. Force all FAQ items to start strictly closed by default
    const allFaqItems = document.querySelectorAll(".faq-item");
    allFaqItems.forEach((item) => {
      item.classList.remove("is-open", "w--open");
      const dropdown = item.querySelector(".faq-item-header-dropdown");
      if (dropdown) {
        dropdown.classList.remove("w--open");
        (dropdown as HTMLElement).style.display = "none";
      }
    });

    // FAQ Accordion Click Handler (strictly one open at a time)
    const handleFaqClick = (e: MouseEvent) => {
      const header = (e.target as HTMLElement).closest(".faq-item-header, .faq-item-header-icon, [itemProp='name']");
      if (!header) return;
      const clickedItem = header.closest(".faq-item");
      if (!clickedItem) return;

      const faqContainer = clickedItem.closest(".faq") || clickedItem.parentElement;
      const isCurrentlyOpen = clickedItem.classList.contains("is-open") || clickedItem.classList.contains("w--open");

      // Close all other FAQ items in this container
      if (faqContainer) {
        const siblings = faqContainer.querySelectorAll(".faq-item");
        siblings.forEach((item) => {
          if (item !== clickedItem) {
            item.classList.remove("is-open", "w--open");
            const dropdown = item.querySelector(".faq-item-header-dropdown");
            if (dropdown) {
              dropdown.classList.remove("w--open");
              (dropdown as HTMLElement).style.display = "none";
            }
          }
        });
      }

      // Toggle the clicked FAQ item
      if (isCurrentlyOpen) {
        clickedItem.classList.remove("is-open", "w--open");
        const dropdown = clickedItem.querySelector(".faq-item-header-dropdown");
        if (dropdown) {
          dropdown.classList.remove("w--open");
          (dropdown as HTMLElement).style.display = "none";
        }
      } else {
        clickedItem.classList.add("is-open", "w--open");
        const dropdown = clickedItem.querySelector(".faq-item-header-dropdown");
        if (dropdown) {
          dropdown.classList.add("w--open");
          (dropdown as HTMLElement).style.display = "block";
        }
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

    // 3. Carousel Navigation Slider Buttons
    const handleSliderPrev = (e: MouseEvent) => {
      const btn = (e.target as HTMLElement).closest(".testimonials-slider-prev, .swis-portfolio-prev, .tech-slider-prev");
      if (!btn) return;
      
      if (btn.classList.contains("tech-slider-prev")) {
        const wrapper = document.querySelector(".tech-ecosystem-grid");
        if (wrapper) wrapper.scrollBy({ left: -260, behavior: "smooth" });
        return;
      }
      if (btn.classList.contains("swis-portfolio-prev")) {
        const wrapper = document.querySelector(".cases-slider .swiper-wrapper");
        if (wrapper) wrapper.scrollBy({ left: -420, behavior: "smooth" });
        return;
      }
      if (btn.classList.contains("testimonials-slider-prev")) {
        const wrapper = document.querySelector(".tech-testimonials__slider-wrapper");
        if (wrapper) wrapper.scrollBy({ left: -420, behavior: "smooth" });
        return;
      }
    };

    const handleSliderNext = (e: MouseEvent) => {
      const btn = (e.target as HTMLElement).closest(".testimonials-slider-next, .swis-portfolio-next, .tech-slider-next");
      if (!btn) return;
      
      if (btn.classList.contains("tech-slider-next")) {
        const wrapper = document.querySelector(".tech-ecosystem-grid");
        if (wrapper) wrapper.scrollBy({ left: 260, behavior: "smooth" });
        return;
      }
      if (btn.classList.contains("swis-portfolio-next")) {
        const wrapper = document.querySelector(".cases-slider .swiper-wrapper");
        if (wrapper) wrapper.scrollBy({ left: 420, behavior: "smooth" });
        return;
      }
      if (btn.classList.contains("testimonials-slider-next")) {
        const wrapper = document.querySelector(".tech-testimonials__slider-wrapper");
        if (wrapper) wrapper.scrollBy({ left: 420, behavior: "smooth" });
        return;
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

    // 4. GSAP animations for Hero & Section elements
    const ctx = gsap.context(() => {
      // Circle stroke draw animation
      const heroCircle = document.querySelector(".service-hero_circle path");
      if (heroCircle) {
        const pathEl = heroCircle as SVGPathElement;
        const length = pathEl.getTotalLength ? pathEl.getTotalLength() : 800;
        gsap.set(pathEl, { strokeDasharray: length, strokeDashoffset: length });
        gsap.to(pathEl, {
          strokeDashoffset: 0,
          duration: 1.5,
          ease: "power2.out",
          delay: 0.3,
        });
      }

      // Hero Headline Entrance
      const heroTitle = document.querySelector(".tech-hero-title");
      if (heroTitle) {
        gsap.fromTo(
          heroTitle,
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, duration: 1.0, ease: "power2.out", delay: 0.1 }
        );
      }

      // Fade up reveals on scroll
      const fadeElements = document.querySelectorAll(".fade-up-alt, .tech-service-card, .business-card, .case-item");
      fadeElements.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    });

    return () => {
      ctx.revert();
      document.removeEventListener("click", handleFaqClick);
      document.removeEventListener("click", handleHashClick);
      document.removeEventListener("click", handleSliderPrev);
      document.removeEventListener("click", handleSliderNext);
    };
  }, []);

  return null;
}
