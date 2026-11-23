"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BUILD_FOR_CARDS, type BuildForCard } from "@/data/siteData";
import { cx, type SectionBaseProps } from "@/components/types";

export interface WhoWeBuildForProps extends SectionBaseProps {
  /** Small uppercase eyebrow above the heading. */
  label?: string;
  /** Section heading base text. */
  title?: string;
  /** Intro paragraph under the heading. */
  description?: string;
  /** Audience cards in the right-hand column. */
  cards?: BuildForCard[];
}

const AUDIENCE_STATES = [
  { key: "agencies", heading: "for Agencies.", para: "Agencies" },
  { key: "smes", heading: "for SMEs & Scaleups.", para: "SMEs & Scaleups" },
  { key: "startups", heading: "for Startups.", para: "Startups" },
  { key: "enterprise", heading: "for Enterprise.", para: "Enterprise" },
];

/**
 * Precision Fidelity Pass #18: Who We Build For
 * Scroll-synced kinetic audience text in left heading & paragraph,
 * driven 1-to-1 by the active sticky card on the right column.
 */
export default function WhoWeBuildFor({
  id = "build-for-section",
  className,
  label = "Who We Build For",
  title = "Empowering global brands with scalable IT solutions",
  cards = BUILD_FOR_CARDS,
}: WhoWeBuildForProps = {}) {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeAudienceIndex, setActiveAudienceIndex] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const cardEls = sectionRef.current?.querySelectorAll<HTMLElement>(".build-for__card");
      if (!cardEls || !cardEls.length) return;

      const mm = gsap.matchMedia();

      // Desktop / Laptop (min-width: 992px): MindMarket Deck Stacking Choreography
      mm.add("(min-width: 992px)", () => {
        cardEls.forEach((card, i) => {
          if (i > 0) {
            const rotStart = i % 2 === 1 ? -3.5 : 3.5;
            // Entering card straightens from alternating tilt, scale 0.95 -> 1, y: 45 -> 0
            gsap.fromTo(
              card,
              {
                rotate: rotStart,
                scale: 0.95,
                y: 45,
                transformOrigin: "center center",
              },
              {
                rotate: 0,
                scale: 1,
                y: 0,
                ease: "none",
                scrollTrigger: {
                  trigger: card,
                  start: "top 95%",
                  end: "top 120px",
                  scrub: 0.5,
                },
              }
            );

            // Preceding card underneath recedes smoothly into stack (scale 0.97, brightness 0.9)
            const prevCard = cardEls[i - 1];
            if (prevCard) {
              gsap.to(prevCard, {
                scale: 0.97,
                filter: "brightness(0.9)",
                ease: "none",
                scrollTrigger: {
                  trigger: card,
                  start: "top 75%",
                  end: "top 120px",
                  scrub: 0.5,
                },
              });
            }
          }

          // Active audience kinetic text sync (Agencies -> SMEs -> Startups -> Enterprise)
          ScrollTrigger.create({
            trigger: card,
            start: i === 0 ? "top 80%" : "top 220px",
            onEnter: () => setActiveAudienceIndex(i),
            onLeaveBack: () => setActiveAudienceIndex(Math.max(0, i - 1)),
          });
        });
      });

      // Tablet / Mobile (max-width: 991px): Clean Sequential Stack
      mm.add("(max-width: 991px)", () => {
        cardEls.forEach((card, i) => {
          ScrollTrigger.create({
            trigger: card,
            start: "top 60%",
            end: "bottom 40%",
            onEnter: () => setActiveAudienceIndex(i),
            onEnterBack: () => setActiveAudienceIndex(i),
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const activeAudience = AUDIENCE_STATES[activeAudienceIndex] || AUDIENCE_STATES[0];

  return (
    <section ref={sectionRef} id={id} className={cx("section--build-for", className)}>
      <div className="spacer-42"></div>
      <div className="build-for__seciton-overlay-wrap">
        <div className="build-for__seciton-overlay"></div>
      </div>
      <div className="container">
        <div className="build-for__inner">
          {/* Left Column: Sticky Title with Scroll-Synced Kinetic Target & Dynamic Copy */}
          <div className="build-for__inner-left">
            <div className="heading_combined is-vertical">
              <div className="heading_label fade-up-alt">
                <div className="body-smaller text-uppercase section-label">{label}</div>
              </div>
              <h2 className="h2 is-56 build-for__heading">
                <span className="build-for__heading-base">{title}</span>{" "}
                <span className="build-for__dynamic-slot" aria-live="polite">
                  {AUDIENCE_STATES.map((item, idx) => (
                    <span
                      key={item.key}
                      className={cx(
                        "build-for__dynamic-word",
                        activeAudienceIndex === idx && "is-active",
                        idx < activeAudienceIndex && "is-past",
                        idx > activeAudienceIndex && "is-future"
                      )}
                    >
                      {item.heading}
                    </span>
                  ))}
                </span>
              </h2>
            </div>
            <div className="max-w-760">
              <div className="build_rich-text w-richtext">
                <p className="build-for__description">
                  Every stage comes with different priorities, constraints, and opportunities. We tailor the technology, team, and delivery approach for{" "}
                  <span className="build-for__para-slot">
                    <span className="build-for__para-highlight">{activeAudience.para}</span>
                  </span>{" "}
                  to help you move forward with confidence.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Customer Cards */}
          <div className="build-for__inner-right">
            {cards.map((card, idx) => (
              <div
                key={card.title}
                className={cx("build-for__card", activeAudienceIndex === idx && "is-active-docked")}
                data-card-index={idx}
              >
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
