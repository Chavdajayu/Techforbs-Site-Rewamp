"use client";

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cx, type SectionBaseProps } from "@/components/types";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface ContactSectionProps extends SectionBaseProps {
  /** Small uppercase eyebrow above the heading. */
  label?: string;
  /**
   * Prefix for the form controls' own ids (`<prefix>-name`, `-email`,
   * `-message`). Change it alongside `id` when the section is used twice in
   * one document so the labels keep pointing at the right fields.
   */
  fieldIdPrefix?: string;
  /** Called with the field values on submit, in addition to the built-in thank-you state. */
  onSubmit?: (values: { name: string; email: string; message: string }) => void;
}

/**
 * "Contact Us" — office details beside the enquiry form.
 *
 * Animation: the left and right columns rise 35px with a 0.15s stagger when
 * the section reaches 80% of the viewport, and reverse when scrolled back out.
 */
export default function ContactSection({
  id = "contact-section",
  className,
  label = "CONTACT US",
  fieldIdPrefix = "contact",
  onSubmit,
}: ContactSectionProps = {}) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact__inner-left, .contact__inner-right",
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
    setSubmitted(true);
  };

  return (
    <section
      ref={sectionRef}
      id={id}
      data-wf--form-get-in-touch--variant="base"
      className={cx("section--contact", className)}
    >
      <div className="contact__inner">
        <img
          src="/images/ui/67b881da6e1f8edccf9d22dc_contact-bg.webp"
          loading="lazy"
          alt=""
          className="contact__inner-bg"
        />

        {/* Left Column: Direct Office Details & Global Presence */}
        <div className="contact__inner-left desktop">
          <div className="contact__heading">
            <div className="contact__heading-label">
              <div className="body-smaller text-uppercase section-label">{label}</div>
            </div>
            <h3 className="contact-section__title title_regular">
              Let’s build your <br />
              next digital <br />
              flagship together
            </h3>
          </div>

          <div
            itemType="https://schema.org/LocalBusiness"
            itemScope
            className="contact__info desktop"
          >
            <div className="contact__info-row">
              <div className="contact__info-col">
                <div className="contact__info-title">
                  <p className="contact__info-col-title">GLOBAL HEADQUARTERS</p>
                </div>
                <ul role="list" className="contact__info-list">
                  <li className="contact__info-item">
                    <img
                      src="/images/ui/flag-in.svg"
                      loading="lazy"
                      alt="India"
                      className="contact__info-item-icon"
                    />
                    <p className="contact__info-item-text">
                      INDIA (HQ), GUJARAT 382470
                      <br />
                      E-1219, Ganesh Glory 11, S.G. Highway, Ahmedabad
                    </p>
                  </li>
                  <li className="contact__info-item">
                    <img
                      src="/images/ui/flag-global.svg"
                      loading="lazy"
                      alt="Direct"
                      className="contact__info-item-icon"
                    />
                    <p className="contact__info-item-text">
                      DIRECT CONTACT
                      <br />
                      +91 971 401 9476
                    </p>
                  </li>
                </ul>
              </div>

              <div className="contact__info-col">
                <div className="contact__info-title">
                  <p className="contact__info-col-title">GLOBAL DELIVERY HUBS</p>
                </div>
                <ul role="list" className="contact__info-list">
                  <li className="contact__info-item">
                    <img
                      src="/images/ui/flag-ca.svg"
                      loading="lazy"
                      alt="Canada"
                      className="contact__info-item-icon"
                    />
                    <p className="contact__info-item-text">
                      CANADA
                      <br />
                      Enterprise Solutions &amp; Support
                    </p>
                  </li>
                  <li className="contact__info-item">
                    <img
                      src="/images/ui/flag-us.svg"
                      loading="lazy"
                      alt="USA"
                      className="contact__info-item-icon"
                    />
                    <p className="contact__info-item-text">
                      USA
                      <br />
                      Digital Commerce &amp; Platforms
                    </p>
                  </li>
                  <li className="contact__info-item">
                    <img
                      src="/images/ui/flag-au.svg"
                      loading="lazy"
                      alt="Australia"
                      className="contact__info-item-icon"
                    />
                    <p className="contact__info-item-text">
                      AUSTRALIA
                      <br />
                      Cross-Border Platforms &amp; 24/7 Ops
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <a
              href="mailto:info@techforbs.com?subject=Contact"
              className="contact__info-email w-inline-block"
            >
              <div className="contact__info-item-text">INFO@TECHFORBS.COM</div>
            </a>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="contact__inner-right">
          <div className="contact__form-wrapper w-form">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="contact__form">
                <div className="contact__form-title">
                  <p className="body-bigger weight-600">Get in touch</p>
                  <p className="contact__form-title-subtext">
                    OUR TEAM WILL RESPOND TO YOU WITHIN 1 BUSINESS DAY
                  </p>
                </div>

                <label htmlFor={`${fieldIdPrefix}-name`} className="hidden">
                  Name
                </label>
                <input
                  id={`${fieldIdPrefix}-name`}
                  className="contact__form-field w-input"
                  maxLength={256}
                  placeholder="NAME"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />

                <label htmlFor={`${fieldIdPrefix}-email`} className="hidden">
                  Email
                </label>
                <input
                  id={`${fieldIdPrefix}-email`}
                  className="contact__form-field w-input"
                  maxLength={256}
                  placeholder="EMAIL"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />

                <label htmlFor={`${fieldIdPrefix}-message`} className="hidden">
                  Message
                </label>
                <textarea
                  id={`${fieldIdPrefix}-message`}
                  placeholder="PROJECT DETAILS / MESSAGE"
                  maxLength={5000}
                  className="contact__form-field is-text-area w-input"
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />

                <div className="button-wrapper contact__form-buttons">
                  <input
                    type="submit"
                    value="Submit request"
                    className="button is-contact w-button"
                  />
                </div>
              </form>
            ) : (
              <div className="success-message w-form-done" style={{ display: "block" }}>
                <div className="contact__form-title">
                  <p className="body-bigger weight-600">Thanks for your request!</p>
                  <p className="body-smaller color-white-70 weight-600 text-uppercase contact__form-title-subtitle success-title">
                    Our team will answer you as soon as possible!
                  </p>
                </div>
                <div className="button-wrapper">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", message: "" });
                    }}
                    className="button w-inline-block"
                    style={{ background: "none", border: "none" }}
                  >
                    <div>Send another request</div>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Info View */}
          <div className="contact__info mobile">
            <div className="contact__info-row">
              <div className="contact__info-col">
                <div className="contact__info-title">
                  <p className="contact__info-col-title">GLOBAL HEADQUARTERS</p>
                </div>
                <ul role="list" className="contact__info-list">
                  <li className="contact__info-item">
                    <img
                      src="/images/ui/flag-in.svg"
                      loading="lazy"
                      alt="India"
                      className="contact__info-item-icon"
                    />
                    <p className="contact__info-item-text text-uppercase body-smaller weight-600">
                      INDIA (HQ), GUJARAT 382470
                      <br />
                      <strong>E-1219, Ganesh Glory 11, S.G. Highway, Ahmedabad</strong>
                    </p>
                  </li>
                  <li className="contact__info-item">
                    <img
                      src="/images/ui/flag-global.svg"
                      loading="lazy"
                      alt="Direct"
                      className="contact__info-item-icon"
                    />
                    <p className="contact__info-item-text text-uppercase body-smaller weight-600">
                      DIRECT CONTACT
                      <br />
                      <strong>+91 971 401 9476 &nbsp;|&nbsp; info@techforbs.com</strong>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="contact__info-col" style={{ marginTop: '1.5rem' }}>
                <div className="contact__info-title">
                  <p className="contact__info-col-title">GLOBAL DELIVERY HUBS</p>
                </div>
                <ul role="list" className="contact__info-list">
                  <li className="contact__info-item">
                    <img
                      src="/images/ui/flag-ca.svg"
                      loading="lazy"
                      alt="Canada"
                      className="contact__info-item-icon"
                    />
                    <p className="contact__info-item-text text-uppercase body-smaller weight-600">
                      1. CANADA &mdash; Enterprise Solutions
                    </p>
                  </li>
                  <li className="contact__info-item">
                    <img
                      src="/images/ui/flag-us.svg"
                      loading="lazy"
                      alt="USA"
                      className="contact__info-item-icon"
                    />
                    <p className="contact__info-item-text text-uppercase body-smaller weight-600">
                      2. USA &mdash; Digital Commerce
                    </p>
                  </li>
                  <li className="contact__info-item">
                    <img
                      src="/images/ui/flag-au.svg"
                      loading="lazy"
                      alt="Australia"
                      className="contact__info-item-icon"
                    />
                    <p className="contact__info-item-text text-uppercase body-smaller weight-600">
                      3. AUSTRALIA &mdash; 24/7 Operations
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <a
              href="mailto:info@techforbs.com?subject=Contact"
              className="contact__info-email w-inline-block"
            >
              <div className="weight-600 body-smaller color-white-70 text-uppercase contact__info-email-">
                INFO@TECHFORBS.COM
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Marquee Ribbon Ticker */}
      <div className="contact__marquee" aria-label="Global Innovation Marquee">
        <div className="contact__marquee-track">
          <div className="contact__marquee-text title_huge">
            Global Innovation · Scalable Web Platforms · Certified Specialists · TechForbs Delivery
          </div>
          <div className="contact__marquee-text title_huge" aria-hidden="true">
            Global Innovation · Scalable Web Platforms · Certified Specialists · TechForbs Delivery
          </div>
        </div>
      </div>
    </section>
  );
}
