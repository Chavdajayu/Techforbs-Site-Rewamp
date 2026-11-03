"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export interface ServiceSubpoint {
  title: string;
  desc?: string;
}

export interface SolutionCategory {
  id: string;
  name: string;
  tag: string;
  description: string;
  isDetailed?: boolean;
  items: ServiceSubpoint[];
}

export const SOLUTIONS: SolutionCategory[] = [
  {
    id: "shopify-dev",
    name: "Shopify Development",
    tag: "Certified Shopify Plus Experts",
    description:
      "Enterprise Shopify and Shopify Plus engineering tailored for global direct-to-consumer and B2B brands. From bespoke Liquid theme architecture to complex custom app ecosystems and performance optimization.",
    items: [
      { title: "Theme Customization" },
      { title: "Theme Development" },
      { title: "App Customization" },
      { title: "App Development" },
      { title: "App Integration" },
      { title: "Shopify Store Setup & Configuration" },
      { title: "Shopify Store Migration" },
      { title: "Shopify Performance Optimization" },
    ],
  },
  {
    id: "wordpress-woo",
    name: "WordPress / WooCommerce Development",
    tag: "High-Performance Content & Commerce",
    description:
      "Full-cycle WordPress and WooCommerce engineering. We build secure, headless and high-converting platforms with bespoke plugin architectures, seamless API pipelines, and custom payment integrations.",
    items: [
      { title: "WordPress Customization" },
      { title: "WordPress Development" },
      { title: "WooCommerce Customization" },
      { title: "WooCommerce Development" },
      { title: "Plugin Customization" },
      { title: "Plugin Development" },
      { title: "Plugin Integration" },
      { title: "API Integration" },
      { title: "Payment Integration" },
    ],
  },
  {
    id: "custom-web-app",
    name: "Custom Web Application",
    tag: "Enterprise Architecture & Portals",
    description:
      "Bespoke full-stack web applications, SaaS platforms, and enterprise portals engineered for high concurrency, rock-solid security, and seamless integration with existing ERP and CRM backbones.",
    items: [
      { title: "Laravel" },
      { title: "Drupal" },
      { title: "PHP" },
      { title: "Next.js" },
      { title: "Node.js" },
      { title: "React" },
      { title: "CakePHP" },
      { title: "Angular" },
      { title: "Sage CRM / ERP" },
    ],
  },
  {
    id: "ai-automation",
    name: "AI & Automation",
    tag: "Intelligent Systems & Workflows",
    description:
      "Empower your enterprise with autonomous AI agents, conversational chatbots, intelligent automation workflows, and custom LLM deployments that streamline business operations and reduce overhead.",
    items: [
      { title: "Intelligent Agent Development" },
      { title: "Conversational AI & Chatbot" },
      { title: "AI Application Development" },
      { title: "AI Integration & Implementation" },
      { title: "AI Strategy & Roadmap Consulting" },
    ],
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing",
    tag: "Data-Driven Growth & AI Search Dominance",
    description:
      "Full-funnel digital marketing strategies combining AI-driven search optimization, high-ROAS paid advertising, performance content marketing, and conversion rate optimization to scale your brand revenue.",
    items: [
      { title: "AI SEO (GEO/AEO)" },
      { title: "Technical SEO Audit" },
      { title: "On-Page & Content SEO" },
      { title: "Local SEO" },
      { title: "Paid Advertising (PPC)" },
      { title: "Social Media Marketing" },
      { title: "Email & Marketing Automation" },
      { title: "Analytics & Conversion Optimization" },
    ],
  },
];

export default function SolutionsSection() {
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
    <section ref={sectionRef} id="solutions-section" className="section--solutions">
      <div className="solutions__inner">
        <div className="solutions__inner-head">
          <div className="heading_combined">
            <div className="heading_label fade-up-alt">
              <div className="body-smaller text-uppercase section-label">
                What We Do
              </div>
            </div>
            <div className="max-w-760">
              <h2 className="title_regular">
                Full-cycle web development and automation in one place
              </h2>
            </div>
          </div>
        </div>

        <div className="solutions__inner-content">
          <div className="solutions__tabs w-tabs">
            {/* Left Tabs Nav */}
            <div className="solutions__tabs-nav w-tab-menu" role="tablist">
              {SOLUTIONS.map((item, index) => (
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
              {SOLUTIONS.map((item, index) => (
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
