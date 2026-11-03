"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function WhoWeBuildFor() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll(".build-for__card");
      if (cards && cards.length) {
        gsap.fromTo(
          cards,
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
    <section ref={sectionRef} id="build-for-section" className="section--build-for">
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
                <div className="body-smaller text-uppercase section-label">
                  Who We Build For
                </div>
              </div>
              <h2 className="h2 is-56">
                Empowering global brands with scalable IT solutions
              </h2>
            </div>
            <div className="max-w-760">
              <div className="build_rich-text w-richtext">
                <p>
                  Every stage comes with different priorities, constraints,
                  and opportunities. We tailor the technology, team, and
                  delivery approach to help you move forward with confidence.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Customer Cards */}
          <div className="build-for__inner-right">
            {/* Card 1: Agencies */}
            <div className="build-for__card">
              <div className="build-for__card-head">
                <div className="build-for__card-head-left">
                  <Image
                    loading="eager"
                    src="/images/ui/6aaa94c9e50f2cf960d45869_build-icon-4.svg"
                    alt="Agencies"
                    width={28}
                    height={28}
                    className="build-for__card-icon"
                  />
                  <h4 className="build-for__card-title">Agencies</h4>
                </div>
                <div className="build-for__card-head-right">
                  <div className="cms-tag is-bigger">
                    Grow your offering, get more projects
                  </div>
                </div>
              </div>
              <Image
                loading="eager"
                src="/images/ui/6aab97f523a7b38046bf5536_c909f9dc33e9f94bea483fcf8f0dbc73_build-card-wider-1.webp"
                alt="Agencies"
                width={1114}
                height={627}
                className="build-for__card-image"
              />
              <div className="build-for__card-content">
                <div className="build-for__card-text">
                  <div className="build_rich-text w-richtext">
                    <p>
                      Grow your services, handle more complex projects, and
                      add new features for your clients without the expense of
                      hiring your own development team.
                    </p>
                  </div>
                </div>
                <div className="build-for__card-highlight">
                  We offer white label web development services that work
                  under your brand.
                </div>
              </div>
              <div className="build-for__card-overlay"></div>
            </div>

            {/* Card 2: SMEs & Scaleups */}
            <div className="build-for__card">
              <div className="build-for__card-head">
                <div className="build-for__card-head-left">
                  <Image
                    loading="eager"
                    src="/images/ui/6aaa94c9e06967bb8d4c1435_build-icon-2.svg"
                    alt="SMEs & Scaleups"
                    width={28}
                    height={28}
                    className="build-for__card-icon"
                  />
                  <h4 className="build-for__card-title">SMEs &amp; Scaleups</h4>
                </div>
                <div className="build-for__card-head-right">
                  <div className="cms-tag is-bigger">
                    Grow fast, without losing control
                  </div>
                </div>
              </div>
              <Image
                loading="eager"
                src="/images/ui/6aab97f32ebdb85a19d554ac_build-card-wider-2.webp"
                alt="SMEs & Scaleups"
                width={1114}
                height={627}
                className="build-for__card-image"
              />
              <div className="build-for__card-content">
                <div className="build-for__card-text">
                  <div className="build_rich-text w-richtext">
                    <p>
                      We create custom solutions, connect your systems,
                      automate tasks, improve workflows, and add smart AI
                      features to help your business grow.
                    </p>
                  </div>
                </div>
                <div className="build-for__card-highlight">
                  Our SME-focused software development makes your technology
                  simpler, connects your systems, and improves your workflows.
                </div>
              </div>
              <div className="build-for__card-overlay"></div>
            </div>

            {/* Card 3: Startups */}
            <div className="build-for__card">
              <div className="build-for__card-head">
                <div className="build-for__card-head-left">
                  <Image
                    loading="eager"
                    src="/images/ui/6aaa8a13e180b2b29c7b64fb_build-icon-1.svg"
                    alt="Startups"
                    width={28}
                    height={28}
                    className="build-for__card-icon"
                  />
                  <h4 className="build-for__card-title">Startups</h4>
                </div>
                <div className="build-for__card-head-right">
                  <div className="cms-tag is-bigger">
                    Launch faster, validate sooner
                  </div>
                </div>
              </div>
              <Image
                loading="eager"
                src="/images/ui/6aab97f43f0544d42354401d_build-card-wider-3.webp"
                alt="Startups"
                width={1114}
                height={627}
                className="build-for__card-image"
              />
              <div className="build-for__card-content">
                <div className="build-for__card-text">
                  <div className="build_rich-text w-richtext">
                    <p>
                      We create MVPs, landing pages, and no-code or low-code
                      solutions quickly, so you can move fast. Our flexible
                      approach lets your project grow and change as you search
                      for product-market fit.
                    </p>
                  </div>
                </div>
                <div className="build-for__card-highlight">
                  Our startup software development and MVP development
                  services help you launch working products really fast.
                </div>
              </div>
              <div className="build-for__card-overlay"></div>
            </div>

            {/* Card 4: Enterprise */}
            <div className="build-for__card">
              <div className="build-for__card-head">
                <div className="build-for__card-head-left">
                  <Image
                    loading="eager"
                    src="/images/ui/6a93d0b2ecafc26748b0ea0a_Web and mobile, together.svg"
                    alt="Enterprise"
                    width={28}
                    height={28}
                    className="build-for__card-icon"
                  />
                  <h4 className="build-for__card-title">Enterprise</h4>
                </div>
                <div className="build-for__card-head-right">
                  <div className="cms-tag is-bigger">
                    Complex systems, built right
                  </div>
                </div>
              </div>
              <Image
                loading="eager"
                src="/images/ui/6aab97f405bf88f2a4992f30_build-card-wider-4.webp"
                alt="Enterprise"
                width={1114}
                height={627}
                className="build-for__card-image"
              />
              <div className="build-for__card-content">
                <div className="build-for__card-text">
                  <div className="build_rich-text w-richtext">
                    <p>
                      From custom platforms and system integrations to
                      workflow optimization and smart AI features, we create
                      technology that makes your enterprise work more
                      efficiently.
                    </p>
                  </div>
                </div>
                <div className="build-for__card-highlight">
                  Custom enterprise development services help you build and
                  connect complex systems that can grow with your business.
                </div>
              </div>
              <div className="build-for__card-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
