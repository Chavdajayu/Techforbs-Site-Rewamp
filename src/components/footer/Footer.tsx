"use client";

import React from "react";
import Link from "next/link";
import { cx } from "@/components/types";

export interface FooterProps {
  /** Extra class names appended to the <footer> element. */
  className?: string;
}

/** Site footer: logo, navigation, social links and legal row. */
export default function Footer({ className }: FooterProps = {}) {
  return (
    <footer className={cx("footer", className)}>
      <div className="container">
        <div className="footer-inner">
          <div className="footer_row">
            {/* Logo Column */}
            <div className="footer_col">
              <div className="footer__logo">
                <Link
                  title="TechForbs"
                  href="/"
                  className="footer__logo-link w-inline-block w--current"
                >
                  <img
                    src="/images/brand/logo_footer.png"
                    loading="lazy"
                    width="183"
                    height="32"
                    alt="TechForbs"
                    className="footer__logo-image"
                    style={{
                      height: "32px",
                      width: "auto",
                      maxWidth: "180px",
                      objectFit: "contain",
                    }}
                  />
                </Link>
              </div>
            </div>

            {/* Navigation & Social Column */}
            <div className="footer_col">
              <div className="footer-top-right">
                <div className="footer__nav">
                  <ul role="list" className="footer__nav-list">
                    <li className="footer__nav-item">
                      <Link href="#portfolio-section" className="footer__nav-link">
                        Portfolio
                      </Link>
                    </li>
                    <li className="footer__nav-item">
                      <Link href="#solutions-section" className="footer__nav-link">
                        Dedicated teams
                      </Link>
                    </li>
                  </ul>
                  <ul role="list" className="footer__nav-list">
                    <li className="footer__nav-item">
                      <Link href="#solutions-section" className="footer__nav-link">
                        Web design
                      </Link>
                    </li>
                    <li className="footer__nav-item">
                      <Link href="#solutions-section" className="footer__nav-link">
                        Web development
                      </Link>
                    </li>
                    <li className="footer__nav-item">
                      <Link href="#solutions-section" className="footer__nav-link">
                        AI &amp; automation
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Social Buttons with fixed 20px icon sizes */}
                {/* CHANGE 08: Exactly ONE social icon: TechForbs LinkedIn Only */}
                <div className="footer__socials">
                  <a
                    title="LinkedIn"
                    href="https://in.linkedin.com/company/techforbs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button_socials w-inline-block"
                    aria-label="TechForbs on LinkedIn"
                  >
                    <img
                      src="/images/ui/64e730fba5cb6fdbf9f1b2d9_icon-linkedin.svg"
                      loading="eager"
                      alt="LinkedIn"
                      className="button-socials-icon"
                      style={{ width: "20px", height: "20px", display: "block" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: Address, Emblem, Rights, Policy Links */}
          <div className="footer_row">
            <div className="footer_col">
              <p className="footer_address-text text-uppercase">
                India (HQ) — E-1219, Ganesh Glory 11, S.G. Highway, Ahmedabad, Gujarat 382470
              </p>
              <p className="footer_address-text text-uppercase">
                Global Client Delivery: US · UK · Canada · Australia · Europe
              </p>
              <p className="footer_address-text text-uppercase">
                Email: info@techforbs.com &nbsp;|&nbsp; Direct: +91 971 401 9476
              </p>
            </div>
            <div className="footer_col">
              <div className="footer__bottom-inner">
                <div className="footer_emblem-rights">
                  <div className="footer__emblem">
                    <img
                      src="/images/brand/techforbs-emblem.png"
                      alt="TechForbs"
                      style={{
                        height: "16px",
                        width: "auto",
                        opacity: 0.85,
                        display: "inline-block",
                        verticalAlign: "middle",
                      }}
                    />
                  </div>
                  <div className="footer__rights">
                    <div className="footer_address-text">
                      © 2026 TechForbs. All rights reserved
                    </div>
                  </div>
                </div>
                <div className="footer__bottom-links">
                  <Link href="#contact-section" className="footer__bottom-link">
                    Privacy
                  </Link>
                  <Link href="#contact-section" className="footer__bottom-link">
                    Terms of use
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
