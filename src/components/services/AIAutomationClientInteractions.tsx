"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Swiper from "swiper";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function AIAutomationClientInteractions() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // -------------------------------------------------------------------------
    // 1. FAQ ACCORDION (SINGLE ITEM OPEN AT A TIME, CLOSED BY DEFAULT)
    // -------------------------------------------------------------------------
    const allFaqItems = document.querySelectorAll(".faq-item");
    allFaqItems.forEach((item) => {
      item.classList.remove("is-open", "w--open");
      const dropdown = item.querySelector(".faq-item-header-dropdown");
      if (dropdown) {
        dropdown.classList.remove("w--open");
        (dropdown as HTMLElement).style.display = "none";
      }
    });

    const handleFaqClick = (e: MouseEvent) => {
      const header = (e.target as HTMLElement).closest(
        ".faq-item-header, .faq-item-header-icon, [itemProp='name']"
      );
      if (!header) return;
      const clickedItem = header.closest(".faq-item");
      if (!clickedItem) return;

      const faqContainer =
        clickedItem.closest(".faq") || clickedItem.parentElement;
      const isCurrentlyOpen =
        clickedItem.classList.contains("is-open") ||
        clickedItem.classList.contains("w--open");

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

    // -------------------------------------------------------------------------
    // 2. SMOOTH SCROLL FOR ANCHOR LINKS
    // -------------------------------------------------------------------------
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

    document.addEventListener("click", handleFaqClick);
    document.addEventListener("click", handleHashClick);

    // -------------------------------------------------------------------------
    // 3. REFERENCE OPENING & SCROLL ANIMATIONS (SplitType, GSAP, Swiper)
    // -------------------------------------------------------------------------
    let cleanupSplits: () => void = () => {};
    let swiperInstances: Swiper[] = [];
    let delayedAnimTask: gsap.core.Tween | null = null;

    if (!prefersReducedMotion) {
      // A. SplitType text animations matching reference
      let splitTimelines: gsap.core.Timeline[] = [];
      let splitTriggers: ScrollTrigger[] = [];
      let typeSplit: SplitType | null = null;

      const initSplitText = () => {
        splitTimelines.forEach((tl) => tl.kill());
        splitTriggers.forEach((st) => st.kill());
        splitTimelines = [];
        splitTriggers = [];

        if (typeSplit) {
          typeSplit.revert();
        }

        const elements = document.querySelectorAll("[text-split]");
        if (!elements.length) return;

        typeSplit = new SplitType("[text-split]", {
          types: "lines,words",
          tagName: "span",
        });

        document.querySelectorAll("[lines-slide-up]").forEach((el) => {
          const colorIndexes = el.getAttribute("color-words-index");
          const colorWord = el.getAttribute("color-word");

          if (colorIndexes) {
            const words = el.querySelectorAll(".word");
            colorIndexes.split(",").forEach((i) => {
              const word = words[Number(i)];
              if (word) {
                (word as HTMLElement).style.color = colorWord || "#00e5ff";
              }
            });
          }

          const align = el.getAttribute("text-align");

          el.querySelectorAll(".line").forEach((line) => {
            gsap.set(line, {
              textAlign: align || "left",
            });

            const inner = document.createElement("span");
            inner.classList.add("line-inner");
            inner.innerHTML = line.innerHTML;
            line.innerHTML = "";
            line.appendChild(inner);
          });

          const tl = gsap.timeline({ paused: true });

          tl.from(el.querySelectorAll(".line-inner"), {
            opacity: 0,
            yPercent: 100,
            duration: 1,
            ease: "power2.out",
            stagger: { amount: 0.5 },
          });

          tl.addLabel("textInEnd", ">-0.1");

          const circle = el.parentElement?.querySelector(".title-circle");
          if (circle) {
            const words = el.querySelectorAll(".word");
            const index = Number(el.getAttribute("circle-index") || 0);
            let circleW = parseFloat(el.getAttribute("circle-width") || "21") || 21;
            const width = window.innerWidth;
            const isBig =
              circle.getAttribute("data-wf--title-circle--variant") === "big";

            if (!isBig && width <= 767 && width > 479)
              circleW = Math.round(circleW * 0.85);
            if (!isBig && width <= 479) circleW = Math.round(circleW * 0.7);
            if (isBig && width <= 991 && width > 767)
              circleW = Math.round(circleW * 0.52);
            if (isBig && width <= 767) circleW = Math.round(circleW * 0.46);

            const word = words[index];
            if (word) {
              const circleClone = circle.cloneNode(true) as HTMLElement;
              word.classList.add("circle");
              word.closest(".line")?.classList.add("circle");
              word.append(circleClone);
              if (el.getAttribute("circle-width"))
                circleClone.style.width = `${circleW}rem`;

              circleClone.querySelectorAll("path").forEach((path, i) => {
                const svgPath = path as SVGPathElement;
                const length = svgPath.getTotalLength ? svgPath.getTotalLength() : 500;

                gsap.set(svgPath, {
                  strokeDasharray: length,
                  strokeDashoffset: length,
                });

                tl.to(
                  svgPath,
                  {
                    strokeDashoffset: 0,
                    duration: 0.75,
                    ease: "expo.out",
                  },
                  `textInEnd+=${i * 0.15}`
                );
              });
            }
          }

          const trigger = ScrollTrigger.create({
            trigger: el,
            start: "top 75%",
            onEnter: () => tl.play(),
          });

          splitTimelines.push(tl);
          splitTriggers.push(trigger);
        });

        gsap.set("[text-split]", { opacity: 1 });
        ScrollTrigger.refresh();
      };

      // Initial call
      setTimeout(initSplitText, 100);

      cleanupSplits = () => {
        splitTimelines.forEach((tl) => tl.kill());
        splitTriggers.forEach((st) => st.kill());
        if (typeSplit) typeSplit.revert();
      };

      // B. SWIPER SLIDERS
      // Tech Slider
      const techSliderEl = document.querySelector(".tech-slider") as HTMLElement;
      if (techSliderEl) {
        const swiper = new Swiper(techSliderEl, {
          modules: [Navigation, Autoplay],
          loop: true,
          speed: 1000,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          },
          slidesPerView: 1,
          navigation: {
            prevEl: document.querySelector(".tech-slider-prev") as HTMLElement,
            nextEl: document.querySelector(".tech-slider-next") as HTMLElement,
          },
          spaceBetween: 16,
          breakpoints: {
            480: { slidesPerView: 2, spaceBetween: 16 },
            992: { slidesPerView: 3, spaceBetween: 30 },
          },
        });
        swiperInstances.push(swiper);
      }

      // Portfolio Cases Slider
      const casesSliderEl = document.querySelector(".cases-slider.swiper") as HTMLElement;
      if (casesSliderEl) {
        const casesSwiper = new Swiper(casesSliderEl, {
          modules: [Navigation, Autoplay],
          loop: true,
          speed: 1000,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          },
          slidesPerView: 1,
          navigation: {
            prevEl: document.querySelector(".swis-portfolio-prev") as HTMLElement,
            nextEl: document.querySelector(".swis-portfolio-next") as HTMLElement,
          },
          spaceBetween: 16,
          breakpoints: {
            480: { slidesPerView: 1, spaceBetween: 16 },
            992: { slidesPerView: 2, spaceBetween: 50 },
          },
        });
        swiperInstances.push(casesSwiper);
      }

      // Testimonials Slider
      const testSliderEl = document.querySelector(".tech-testimonials__slider-wrapper") as HTMLElement;
      if (testSliderEl) {
        const testSwiper = new Swiper(testSliderEl, {
          modules: [Navigation, Autoplay],
          loop: true,
          speed: 1000,
          autoplay: {
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          },
          slidesPerView: 1,
          navigation: {
            prevEl: document.querySelector(".testimonials-slider-prev") as HTMLElement,
            nextEl: document.querySelector(".testimonials-slider-next") as HTMLElement,
          },
          spaceBetween: 24,
          breakpoints: {
            768: { slidesPerView: 2, spaceBetween: 32 },
            992: { slidesPerView: 2, spaceBetween: 50 },
          },
        });
        swiperInstances.push(testSwiper);
      }

      // C. Team grid animation
      const gridAnim = () => {
        const ATTRIBUTES = { grid: ".team__grid", item: ".team__grid_item" };
        const CLASSES = { item: "team__grid_item" };
        const mediaPointMin = 992;
        const grids = document.querySelectorAll(ATTRIBUTES.grid);

        if (!grids.length) return;

        const classMods = [
          "state_v0_mod",
          "state_v1_mod",
          "state_v2_mod",
          "state_v3_mod",
          "state_v4_mod",
          "state_v5_mod",
        ];
        const delayTime = [2.1, 2.5, 0.8, 2, 1.2, 0.8];
        let curClassIndex = 0;

        grids.forEach((grid) => {
          const items = grid.querySelectorAll(ATTRIBUTES.item);
          if (!items.length) return;

          function nextState() {
            items.forEach((item) => {
              if (curClassIndex === classMods.length - 1) {
                item.classList.remove(classMods[curClassIndex]);
                item.classList.add(classMods[0]);
              } else {
                item.classList.remove(classMods[curClassIndex]);
                item.classList.add(classMods[curClassIndex + 1]);
              }
            });
            curClassIndex = (curClassIndex + 1) % classMods.length;
            delayedAnimTask = gsap.delayedCall(
              delayTime[curClassIndex],
              nextState
            );
          }

          if (window.innerWidth >= mediaPointMin) {
            delayedAnimTask = gsap.delayedCall(2.1, nextState);
          }
        });
      };
      gridAnim();

      // D. Fade-up scroll triggers for cards and sections
      const fadeElements = document.querySelectorAll(".fade-up-alt, .tech-service-card, .case-item");
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
              start: "top 88%",
              once: true,
            },
          }
        );
      });
    }

    return () => {
      document.removeEventListener("click", handleFaqClick);
      document.removeEventListener("click", handleHashClick);
      cleanupSplits();
      swiperInstances.forEach((s) => s.destroy(true, true));
      if (delayedAnimTask) delayedAnimTask.kill();
    };
  }, []);

  return null;
}
