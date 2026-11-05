"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BUILD_FOR_CARDS, type BuildForCard } from "@/data/siteData";
import { cx, type SectionBaseProps } from "@/components/types";

export interface WhoWeBuildForProps extends SectionBaseProps {
  /** Small uppercase eyebrow above the heading. */
  label?: string;
  /** Section heading. */
  title?: string;
  /** Intro paragraph under the heading. */
  description?: string;
  /** Audience cards in the right-hand column. */
  cards?: BuildForCard[];
}

/**
 * "Who We Build For" — sticky heading column beside a stack of audience cards.
 *
 * Animation: the cards fade and rise 50px with a 0.16s stagger once the
 * section's top passes 75% of the viewport, played once.
 */
export default function WhoWeBuildFor({
  id = "build-for-section",
  className,
  label = "Who We Build For",
  title = "Empowering global brands with scalable IT solutions",
  description = "Every stage comes with different priorities, constraints, and opportunities. We tailor the technology, team, and delivery approach to help you move forward with confidence.",
  cards = BUILD_FOR_CARDS,
}: WhoWeBuildForProps = {}) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const cardEls = sectionRef.current?.querySelectorAll(".build-for__card");
      if (cardEls && cardEls.length) {
        gsap.fromTo(
          cardEls,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.16,
            duration: 1.0,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id={id} className={cx("section--build-for", className)}>
      <div className="spacer-42"></div>
      <div className="build-for__seciton-overlay-wrap">
        <div className="build-for__seciton-overlay"></div>
      </div>
      <div className="container">
        <div className="build-for__inner">
          {/* Left Column: Sticky Title & Description */}
          <div className="build-for__inner-left">
            <div className="heading_combined is-vertical">
              <div className="heading_label fade-up-alt">
                <div className="body-smaller text-uppercase section-label">{label}</div>
              </div>
              <h2 className="h2 is-56">{title}</h2>
            </div>
            <div className="max-w-760">
              <div className="build_rich-text w-richtext">
                <p>{description}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Customer Cards */}
          <div className="build-for__inner-right">
            {cards.map((card) => (
              <div key={card.title} className="build-for__card">
                <div className="build-for__card-head">
                  <div className="build-for__card-head-left">
                    <Image
                      loading="eager"
                      src={card.icon}
                      alt={card.title}
                      width={28}
                      height={28}
                      className="build-for__card-icon"
                    />
                    <h4 className="build-for__card-title">{card.title}</h4>
                  </div>
                  <div className="build-for__card-head-right">
                    <div className="cms-tag is-bigger">{card.tag}</div>
                  </div>
                </div>
                <Image
                  loading="eager"
                  src={card.image}
                  alt={card.title}
                  width={1114}
                  height={627}
                  className="build-for__card-image"
                />
                <div className="build-for__card-content">
                  <div className="build-for__card-text">
                    <div className="build_rich-text w-richtext">
                      <p>{card.text}</p>
                    </div>
                  </div>
                  <div className="build-for__card-highlight">{card.highlight}</div>
                </div>
                <div className="build-for__card-overlay"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
