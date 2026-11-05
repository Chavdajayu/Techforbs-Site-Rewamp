"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    if (typeof window !== "undefined") {
      (window as unknown as { lenis: typeof lenis }).lenis = lenis;
    }

    // Synchronize Lenis scroll position with GSAP ScrollTrigger
    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const reqId = requestAnimationFrame(raf);

    // Support query param for programmatic QA scroll testing
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      const scrollY = searchParams.get("scrollY");
      if (scrollY) {
        setTimeout(() => {
          lenis.scrollTo(parseInt(scrollY, 10), { immediate: true });
        }, 150);
      } else if (window.location.hash) {
        setTimeout(() => {
          const el = document.querySelector(window.location.hash);
          if (el) {
            lenis.scrollTo(el as HTMLElement, { offset: -70 });
          }
        }, 350);
      }
    }

    // Anchor click handler for smooth scrolling & cross-page navigation
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;
      const href = target.getAttribute("href");
      if (!href) return;

      // Local hash (e.g. "#contact-section") or root hash (e.g. "/#contact-section")
      let hash = "";
      if (href.startsWith("#") && href.length > 1) {
        hash = href;
      } else if (href.startsWith("/#") && href.length > 2) {
        hash = href.substring(1);
      }

      if (hash) {
        const el = document.querySelector(hash);
        if (el) {
          // Element exists on current page: smooth-scroll to it!
          e.preventDefault();
          lenis.scrollTo(el as HTMLElement, { offset: -70 });
          window.history.pushState(null, "", hash);
        } else if (typeof window !== "undefined" && window.location.pathname !== "/") {
          // Element doesn't exist on this subpage: navigate to homepage with hash!
          e.preventDefault();
          window.location.href = `/${hash}`;
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      cancelAnimationFrame(reqId);
      document.removeEventListener("click", handleAnchorClick);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}

