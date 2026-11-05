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
  /** Tab contents. Defaults to the five home-page solution categories. */
  solutions?: SolutionCategory[];
}

/**
 * "What We Do" — vertical tab list driving a detail panel.
 *
 * Animation: the whole inner block fades and rises 35px over 0.9s once the
 * section's top passes 80% of the viewport, played once, followed by a
 * ScrollTrigger refresh so later sections keep their measurements.
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

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const inner = sectionRef.current?.querySelector<HTMLElement>(".solutions__inner");
    if (!inner) return;

    if (prefersReducedMotion) {
      gsap.set(inner, { opacity: 1, y: 0 });
      return;
    }

    // Fail-open strategy: check if section is already in or near viewport
    const rect = sectionRef.current?.getBoundingClientRect();
    const isAlreadyVisible = rect && rect.top < window.innerHeight * 0.85;

    if (isAlreadyVisible) {
      gsap.set(inner, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      // Set initial hidden state only when confirmed below viewport
      gsap.set(inner, { opacity: 0, y: 35 });

      const trigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        once: true,
        onEnter: () => {
          gsap.to(inner, {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
          });
        },
      });

      // Safety failsafe: under NO circumstance can section remain hidden
      const safetyTimer = setTimeout(() => {
        gsap.to(inner, { opacity: 1, y: 0, duration: 0.3 });
      }, 2000);

      const refreshTimer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 350);

      return () => {
        clearTimeout(safetyTimer);
        clearTimeout(refreshTimer);
        trigger.kill();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

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
            {/* Left Tabs Nav */}
            <div className="solutions__tabs-nav w-tab-menu" role="tablist">
              {solutions.map((item, index) => (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => setActiveTab(index)}
                  className={`solutions__tabs-nav-item w-inline-block w-tab-link ${
                    activeTab === index ? "w--current" : ""
                  }`}
                  style={{
                    background: "none",
                    border: "none",
                    textAlign: "left",
                    cursor: "pointer",
                    width: "100%",
                  }}
                  role="tab"
                  aria-selected={activeTab === index}
                >
                  <div>{item.name}</div>
                </button>
              ))}
            </div>

            {/* Right Tab Content Panel */}
            <div className="solutions__tabs-content w-tab-content">
              {solutions.map((item, index) => (
                <div
                  key={item.id}
                  className={`solutions__tabs-pane w-tab-pane ${
                    activeTab === index ? "w--tab-active" : ""
                  }`}
                  style={{
                    display: activeTab === index ? "block" : "none",
                  }}
                  role="tabpanel"
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
