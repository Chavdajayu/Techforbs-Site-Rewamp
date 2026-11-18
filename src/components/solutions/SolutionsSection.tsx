"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SOLUTIONS, type SolutionCategory } from "@/data/siteData";
import { cx, type SectionBaseProps } from "@/components/types";

export type { ServiceSubpoint, SolutionCategory } from "@/data/siteData";
export { SOLUTIONS } from "@/data/siteData";

export interface SolutionsSectionProps extends SectionBaseProps {
  /** Small uppercase eyebrow above the heading. */
  label?: string;
  /** Section heading. */
  title?: string;
  /** Tab contents. Defaults to the six home-page solution categories. */
  solutions?: SolutionCategory[];
}

/**
 * Precision Fidelity Pass #18: What We Do (Solutions)
 * Pinned Scroll-Driven 6-Card Sequencer & 1-to-1 Left Tab Synchronization.
 *
 * Smooth continuous progression cycling through all 6 services with silky
 * glide & fade animations (opacity 0->1, translateY, scale, blur filter)
 * and interactive left tab auto-highlighting & direct navigation click jumping.
 */
export default function SolutionsSection({
  id = "solutions-section",
  className,
  label = "What We Do",
  title = "Full-cycle web development and automation in one place",
  solutions = SOLUTIONS,
}: SolutionsSectionProps = {}) {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDesktop = window.innerWidth >= 992;

    const ctx = gsap.context(() => {
      if (isDesktop && !prefersReducedMotion && sectionRef.current) {
        const total = solutions.length;
        const st = ScrollTrigger.create({
          trigger: sectionRef.current,
          pin: true,
          start: "top top",
          end: "+=1500",
          scrub: 0.2,
          anticipatePin: 1,
          onUpdate: (self) => {
            const step = Math.min(
              total - 1,
              Math.max(0, Math.floor(self.progress * total))
            );
            setActiveTab(step);
          },
        });
        scrollTriggerRef.current = st;
      }
    }, sectionRef);

    // Refresh ScrollTrigger so all downstream measurements adjust with pin spacer
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 450);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, [solutions.length]);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    if (scrollTriggerRef.current) {
      const st = scrollTriggerRef.current;
      const progressPerItem = 1 / solutions.length;
      const targetProgress = (index + 0.35) * progressPerItem;
      const targetScroll = st.start + targetProgress * (st.end - st.start);
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <section ref={sectionRef} id={id} className={cx("section--solutions", className)}>
      <div className="solutions__inner">
        <div className="solutions__inner-head">
          <div className="heading_combined">
            <div className="heading_label fade-up-alt">
              <div className="body-smaller text-uppercase section-label">{label}</div>
            </div>
            <div className="max-w-760">
              <h2 className="title_regular">{title}</h2>
            </div>
          </div>
        </div>

        <div className="solutions__inner-content">
          <div className="solutions__tabs w-tabs">
            {/* Left Tabs Nav (1-to-1 Sync with scroll progress) */}
            <div className="solutions__tabs-nav w-tab-menu" role="tablist">
              {solutions.map((item, index) => {
                const isActive = activeTab === index;
                return (
                  <button
                    type="button"
                    key={item.id}
                    onClick={() => handleTabClick(index)}
                    className={cx(
                      "solutions__tabs-nav-item w-inline-block w-tab-link",
                      isActive && "w--current is-active"
                    )}
                    style={{
                      background: "none",
                      border: "none",
                      textAlign: "left",
                      cursor: "pointer",
                      width: "100%",
                    }}
                    role="tab"
                    aria-selected={isActive}
                  >
                    <div className="solutions__tab-label">{item.name}</div>
                  </button>
                );
              })}
            </div>

            {/* Right Tab Content Panel (Animated 6-Card Sequencer Stage) */}
            <div className="solutions__tabs-content w-tab-content">
              {solutions.map((item, index) => {
                let stateClass = "is-future";
                if (activeTab === index) {
                  stateClass = "is-active";
                } else if (index < activeTab) {
                  stateClass = "is-past";
                }

                return (
                  <div
                    key={item.id}
                    className={cx(
                      "solutions__tabs-pane w-tab-pane",
                      stateClass
                    )}
                    role="tabpanel"
                    aria-hidden={activeTab !== index}
                  >
                    <div className="solutions__tabs-pane-content">
                      <div className="solutions__tabs-head">
                        <h3 className="heading-style-h3-24">{item.name}</h3>
                        <div className="cms-tag is-bigger">{item.tag}</div>
                        {item.description && (
                          <p className="text-color-gray-40">{item.description}</p>
                        )}
                      </div>

                      <ul
                        role="list"
                        className={`solutions__tabs-list ${
                          item.id === "digital-marketing"
                            ? "is-digital-marketing-list"
                            : item.isDetailed
                            ? "is-detailed-list"
                            : ""
                        }`}
                      >
                        {item.items.map((sub) => (
                          <li
                            key={sub.title}
                            className={`solutions__tabs-item ${
                              item.id === "digital-marketing"
                                ? "is-digital-marketing-item"
                                : item.isDetailed
                                ? "is-detailed-item"
                                : ""
                            }`}
                          >
                            <div className={item.isDetailed ? "font-semibold text-white" : ""}>
                              {sub.title}
                            </div>
                            {sub.desc && (
                              <p className="text-xs text-gray-300 mt-1 leading-relaxed opacity-90">
                                {sub.desc}
                              </p>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
