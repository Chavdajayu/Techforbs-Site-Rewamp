"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Page-level interactions for /services/ai-automation.
 *
 * Scope notes:
 *  - Anchor smooth-scrolling is owned by <SmoothScroll /> (Lenis). This
 *    component deliberately does NOT bind its own anchor handler; two handlers
 *    competing for the same click produced conflicting scrolls.
 *  - Carousel navigation is owned by Swiper inside each carousel component.
 *    The old document-level scrollBy() shims have been removed.
 *  - Nothing is hidden in CSS. Reveal states are created by GSAP at runtime,
 *    so if the bundle fails to load the page still renders fully visible.
 *    ScrollTrigger is refreshed on load, on a short settle timer, and whenever
 *    a carousel resizes, so start positions stay correct once images and
 *    Swiper tracks have changed the layout.
 */
export default function AIAutomationClientInteractions() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    /* ---------------------------------------------------------------
       FAQ accordion — closed by default, strictly one open at a time.
       --------------------------------------------------------------- */
    const closeItem = (item: Element) => {
      item.classList.remove("is-open", "w--open");
      item.querySelector(".faq-item-header-dropdown")?.classList.remove("w--open");
    };
    const openItem = (item: Element) => {
      item.classList.add("is-open", "w--open");
      item.querySelector(".faq-item-header-dropdown")?.classList.add("w--open");
    };

    document.querySelectorAll(".ai-automation-page .faq-item").forEach(closeItem);

    const handleFaqClick = (e: MouseEvent) => {
      const header = (e.target as HTMLElement).closest(".faq-item-header");
      if (!header) return;
      const clicked = header.closest(".faq-item");
      if (!clicked) return;

      const container = clicked.closest(".faq") ?? clicked.parentElement;
      const wasOpen = clicked.classList.contains("is-open");

      container?.querySelectorAll(".faq-item").forEach(closeItem);
      if (!wasOpen) openItem(clicked);
    };

    document.addEventListener("click", handleFaqClick);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      return () => document.removeEventListener("click", handleFaqClick);
    }

    /* ---------------------------------------------------------------
       Animations — scoped to the page root via gsap.context so every
       tween and ScrollTrigger is reverted together on unmount.
       --------------------------------------------------------------- */
    const root = document.querySelector(".ai-automation-page") as HTMLElement | null;

    const ctx = gsap.context(() => {
      // Hero: staged opening sequence rather than one blanket fade.
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.from(".service-hero-bg", { opacity: 0, scale: 1.06, duration: 1.1 }, 0)
        .from(".service-hero-inner-decor", { opacity: 0, x: 40, duration: 0.9 }, 0.15)
        .from(".service-hero-title", { opacity: 0, y: 28, duration: 0.8 }, 0.3)
        .from(".service-hero__content-text", { opacity: 0, y: 20, duration: 0.7 }, 0.5)
        .from(".button-wrap.on-service-page", { opacity: 0, y: 16, duration: 0.6 }, 0.65);

      // Hand-drawn circle around the hero headline.
      const circlePath = document.querySelector(
        ".service-hero_circle path"
      ) as SVGPathElement | null;
      if (circlePath && typeof circlePath.getTotalLength === "function") {
        const length = circlePath.getTotalLength();
        gsap.set(circlePath, { strokeDasharray: length, strokeDashoffset: length });
        gsap.to(circlePath, { strokeDashoffset: 0, duration: 1.5, ease: "power2.out", delay: 0.6 });
      }

      // Section reveals. `once` keeps them cheap; `invalidateOnRefresh` keeps
      // start points correct after images and carousels change the layout.
      const revealTargets = gsap.utils.toArray<HTMLElement>(
        ".ai-automation-page .fade-up-alt, .ai-automation-page .tech-service-card, .ai-automation-page .tech-service-item, .ai-automation-page .awards-grid__item"
      );

      revealTargets.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              once: true,
              invalidateOnRefresh: true,
            },
          }
        );
      });

      // Desktop-only reveal for the sticky founder aside.
      ScrollTrigger.matchMedia?.({
        "(min-width: 992px)": () => {
          gsap.from(".fade-up-alt_desktop", {
            opacity: 0,
            y: 20,
            duration: 0.7,
            ease: "power2.out",
            delay: 0.4,
          });
        },
      });
    }, root ?? undefined);

    /* ---------------------------------------------------------------
       Keep ScrollTrigger honest while carousels and images settle.
       Mirrors the reference's own `watchSwipers()` refresh behaviour.
       --------------------------------------------------------------- */
    let refreshTimer: number | undefined;
    const refresh = () => {
      window.clearTimeout(refreshTimer);
      refreshTimer = window.setTimeout(() => ScrollTrigger.refresh(), 150);
    };

    const resizeObserver = new ResizeObserver(refresh);
    document.querySelectorAll(".ai-automation-page .swiper").forEach((el) => resizeObserver.observe(el));

    window.addEventListener("load", refresh);
    const settleTimer = window.setTimeout(refresh, 600);

    return () => {
      document.removeEventListener("click", handleFaqClick);
      window.removeEventListener("load", refresh);
      window.clearTimeout(refreshTimer);
      window.clearTimeout(settleTimer);
      resizeObserver.disconnect();
      ctx.revert();
    };
  }, []);

  return null;
}
