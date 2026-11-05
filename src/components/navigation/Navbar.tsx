"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { TECHNOLOGIES_DATA } from "@/data/siteData";

export interface NavbarProps {
  className?: string;
}

export default function Navbar({ className = "header" }: NavbarProps = {}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setMobileOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  const closeAll = () => {
    setActiveDropdown(null);
    setMobileOpen(false);
  };

  return (
    <header data-w-id="0034b592-6b66-56b4-a574-da42086397f0" className={className}>
      <div className="container header__container">
        <div data-w-id="0034b592-6b66-56b4-a574-da42086397f2" className="header__inner">
          {/* Logo */}
          <Link
            title="Home page"
            href="/"
            onClick={closeAll}
            className="header__logo w-inline-block w--current"
          >
            <img
              src="/images/brand/logo_footer.png"
              loading="eager"
              width={183}
              height={32}
              className="header__logo-image"
              style={{
                height: "32px",
                width: "auto",
                maxWidth: "180px",
                objectFit: "contain",
              }}
              alt="TechForbs"
            />
          </Link>

          {/* Navigation Wrapper (Change 03: Home removed completely) */}
          <div
            data-lenis-prevent=""
            className={`header__mobile-wrapper ${mobileOpen ? "is-open" : ""}`}
          >
            <nav className="header__nav">
              <ul role="list" className="header__nav-list">
                {/* 1. TECHNOLOGIES (Change 05: Exact 8 in 2x4 grid) */}
                <li
                  className="header__nav-item"
                  onMouseEnter={() => setActiveDropdown("technologies")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div
                    className={`header__nav-item-drop ${
                      activeDropdown === "technologies" ? "is-open" : ""
                    }`}
                  >
                    <div
                      className="header__nav-item-toggle"
                      onClick={() => toggleDropdown("technologies")}
                      role="button"
                      tabIndex={0}
                    >
                      <div className="header__nav-link-with-sub header__nav-link--inner">
                        Technologies
                      </div>
                      <div className="header__nav-icon w-embed">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M5.83325 8.33325L9.99992 12.4999L14.1666 8.33325H5.83325Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="header__nav-sub">
                      <div className="header__nav-sub-inner">
                        <div className="header__nav-sub-inner-arrow w-embed">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 27 12"
                            fill="none"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0.318359 11.999H26.0876C25.8877 11.5375 25.5909 11.1052 25.1973 10.7302L16.0991 2.06229C14.4996 0.538482 11.9063 0.53848 10.3069 2.06229L1.20865 10.7302C0.815007 11.1052 0.518245 11.5375 0.318359 11.999Z"
                              fill="#3A3A3A"
                            />
                          </svg>
                        </div>
                        <div className="header__nav-sub-group-wrap">
                          <div className="header__nav-sub-group-title">
                            Our technology stack
                          </div>
                          <div className="header__nav-sub-group">
                            {TECHNOLOGIES_DATA.map((tech) => (
                              <Link
                                key={tech.name}
                                href={tech.href}
                                onClick={closeAll}
                                className="header__nav-sub-link with_icon w-inline-block"
                              >
                                <img
                                  src={tech.icon}
                                  loading="lazy"
                                  width={36}
                                  height={36}
                                  alt={tech.name}
                                  className="header__nav-sub-icon"
                                  style={{
                                    width: "36px",
                                    height: "36px",
                                    objectFit: "contain",
                                  }}
                                />
                                <div>{tech.name}</div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                {/* 2. SERVICES (Change 04: Book a call hover reversal) */}
                <li
                  className="header__nav-item"
                  onMouseEnter={() => setActiveDropdown("services")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div
                    className={`header__nav-item-drop is-static ${
                      activeDropdown === "services" ? "is-open" : ""
                    }`}
                  >
                    <div
                      className="header__nav-item-toggle"
                      onClick={() => toggleDropdown("services")}
                      role="button"
                      tabIndex={0}
                    >
                      <div className="header__nav-link-with-sub header__nav-link--inner">
                        Services
                      </div>
                      <div className="header__nav-icon w-embed">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M5.83325 8.33325L9.99992 12.4999L14.1666 8.33325H5.83325Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="header__nav-sub is-large">
                      <div className="header__nav-sub-body">
                        {/* Services Left Column: Core Disciplines */}
                        <div className="sub-menu__left">
                          <Link
                            href="/services/ai-automation"
                            onClick={closeAll}
                            className="sub-menu__item w-inline-block"
                          >
                            <div className="sub-menu__icon">
                              <img
                                src="/images/ui/6a5f32f357df56393f999680_lightning.svg"
                                loading="lazy"
                                alt=""
                                className="sub-menu__icon-img"
                              />
                            </div>
                            <div className="sub-menu__body">
                              <div className="sub-menu__name">
                                AI &amp; automation
                              </div>
                              <div className="sub-menu__desc">
                                Agents, automation, AI integration
                              </div>
                            </div>
                          </Link>
                          <Link
                            href="#solutions-section"
                            onClick={closeAll}
                            className="sub-menu__item w-inline-block"
                          >
                            <div className="sub-menu__icon">
                              <img
                                src="/images/ui/6a5f32f357df56393f9996a0_globe.svg"
                                loading="lazy"
                                alt=""
                                className="sub-menu__icon-img"
                              />
                            </div>
                            <div className="sub-menu__body">
                              <div className="sub-menu__name">
                                Web development
                              </div>
                              <div className="sub-menu__desc">
                                React, Node, custom platforms
                              </div>
                            </div>
                          </Link>
                          <Link
                            href="#solutions-section"
                            onClick={closeAll}
                            className="sub-menu__item w-inline-block"
                          >
                            <div className="sub-menu__icon">
                              <img
                                src="/images/ui/6a5f32f3bc0d244e626ca240_phone.svg"
                                loading="lazy"
                                alt=""
                                className="sub-menu__icon-img"
                              />
                            </div>
                            <div className="sub-menu__body">
                              <div className="sub-menu__name">
                                Mobile development
                              </div>
                              <div className="sub-menu__desc">
                                iOS, Android, cross-platform
                              </div>
                            </div>
                          </Link>
                          <Link
                            href="#solutions-section"
                            onClick={closeAll}
                            className="sub-menu__item w-inline-block"
                          >
                            <div className="sub-menu__icon">
                              <img
                                src="/images/ui/6a5f32f3c9ea62e5bef83189_desing.svg"
                                loading="lazy"
                                alt=""
                                className="sub-menu__icon-img"
                              />
                            </div>
                            <div className="sub-menu__body">
                              <div className="sub-menu__name">
                                UI/UX design
                              </div>
                              <div className="sub-menu__desc">
                                Product design, research, prototyping
                              </div>
                            </div>
                          </Link>
                          <Link
                            href="#solutions-section"
                            onClick={closeAll}
                            className="sub-menu__item w-inline-block"
                          >
                            <div className="sub-menu__icon">
                              <img
                                src="/images/ui/6a5f32f38c68fe46e50c5175_team.svg"
                                loading="lazy"
                                alt=""
                                className="sub-menu__icon-img"
                              />
                            </div>
                            <div className="sub-menu__body">
                              <div className="sub-menu__name">
                                Dedicated teams
                              </div>
                              <div className="sub-menu__desc">
                                Extend your team with specialists
                              </div>
                            </div>
                          </Link>
                        </div>

                        {/* Services Right Column: Specialized Columns */}
                        <div className="sub-menu__right">
                          <div className="sub-menu__list">
                            <div className="sub-menu__col">
                              <div className="sub-menu__title">
                                WEB PORTALS
                              </div>
                              <ul role="list" className="menu">
                                <li className="menu__item">
                                  <Link
                                    href="#solutions-section"
                                    onClick={closeAll}
                                    className="menu__link"
                                  >
                                    Custom web portals
                                  </Link>
                                </li>
                                <li className="menu__item">
                                  <Link
                                    href="#solutions-section"
                                    onClick={closeAll}
                                    className="menu__link"
                                  >
                                    Client portals
                                  </Link>
                                </li>
                                <li className="menu__item">
                                  <Link
                                    href="#solutions-section"
                                    onClick={closeAll}
                                    className="menu__link"
                                  >
                                    Job portals
                                  </Link>
                                </li>
                                <li className="menu__item">
                                  <Link
                                    href="#solutions-section"
                                    onClick={closeAll}
                                    className="menu__link"
                                  >
                                    Custom CRM
                                  </Link>
                                </li>
                                <li className="menu__item">
                                  <Link
                                    href="#solutions-section"
                                    onClick={closeAll}
                                    className="menu__link"
                                  >
                                    Ecommerce portals
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="sub-menu__divider" />
                            <div className="sub-menu__col">
                              <div className="sub-menu__title">INDUSTRIES</div>
                              <ul role="list" className="menu">
                                <li className="menu__item">
                                  <Link
                                    href="#solutions-section"
                                    onClick={closeAll}
                                    className="menu__link"
                                  >
                                    Automotive software
                                  </Link>
                                </li>
                                <li className="menu__item">
                                  <Link
                                    href="#solutions-section"
                                    onClick={closeAll}
                                    className="menu__link"
                                  >
                                    HR software
                                  </Link>
                                </li>
                                <li className="menu__item">
                                  <Link
                                    href="#solutions-section"
                                    onClick={closeAll}
                                    className="menu__link"
                                  >
                                    Media software
                                  </Link>
                                </li>
                                <li className="menu__item">
                                  <Link
                                    href="#solutions-section"
                                    onClick={closeAll}
                                    className="menu__link"
                                  >
                                    Edtech software
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="sub-menu__divider" />
                            <div className="sub-menu__col">
                              <div className="sub-menu__title">
                                BUILD &amp; SCALE
                              </div>
                              <ul role="list" className="menu">
                                <li className="menu__item">
                                  <Link
                                    href="#solutions-section"
                                    onClick={closeAll}
                                    className="menu__link"
                                  >
                                    AI-first development
                                  </Link>
                                </li>
                                <li className="menu__item">
                                  <Link
                                    href="#solutions-section"
                                    onClick={closeAll}
                                    className="menu__link"
                                  >
                                    White label development
                                  </Link>
                                </li>
                                <li className="menu__item">
                                  <Link
                                    href="#solutions-section"
                                    onClick={closeAll}
                                    className="menu__link"
                                  >
                                    MVP development
                                  </Link>
                                </li>
                                <li className="menu__item">
                                  <Link
                                    href="#solutions-section"
                                    onClick={closeAll}
                                    className="menu__link"
                                  >
                                    Low code development
                                  </Link>
                                </li>
                                <li className="menu__item">
                                  <Link
                                    href="#solutions-section"
                                    onClick={closeAll}
                                    className="menu__link"
                                  >
                                    Vibe coding
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>

                          {/* Services Bottom Bar - Change 04: Hover Reversal */}
                          <div className="sub-menu__bottom">
                            <div className="sub-menu__bottom-text">
                              Need guidance to get started?
                            </div>
                            <Link
                              href="#contact-section"
                              onClick={closeAll}
                              className="sub-menu__bottom-link services-book-call-btn"
                            >
                              Book a call
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                {/* 3. PORTFOLIO */}
                <li
                  className="header__nav-item"
                  onMouseEnter={() => setActiveDropdown("portfolio")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div
                    className={`header__nav-item-drop ${
                      activeDropdown === "portfolio" ? "is-open" : ""
                    }`}
                  >
                    <div
                      className="header__nav-item-toggle"
                      onClick={() => toggleDropdown("portfolio")}
                      role="button"
                      tabIndex={0}
                    >
                      <div className="header__nav-link-with-sub header__nav-link--inner">
                        Portfolio
                      </div>
                      <div className="header__nav-icon w-embed">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M5.83325 8.33325L9.99992 12.4999L14.1666 8.33325H5.83325Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="header__nav-sub right-side">
                      <div className="header__nav-sub-inner">
                        <div className="header__nav-sub-inner-arrow w-embed">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 27 12"
                            fill="none"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0.318359 11.999H26.0876C25.8877 11.5375 25.5909 11.1052 25.1973 10.7302L16.0991 2.06229C14.4996 0.538482 11.9063 0.53848 10.3069 2.06229L1.20865 10.7302C0.815007 11.1052 0.518245 11.5375 0.318359 11.999Z"
                              fill="#3A3A3A"
                            />
                          </svg>
                        </div>
                        <div className="header__nav-sub-group-wrap">
                          <div className="header__nav-sub-group one-column">
                            <Link
                              href="#portfolio-section"
                              onClick={closeAll}
                              className="header__nav-sub-link"
                            >
                              Case studies
                            </Link>
                            <Link
                              href="#customers-section"
                              onClick={closeAll}
                              className="header__nav-sub-link"
                            >
                              Global Brands
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                {/* 4. COMPANY */}
                <li
                  className="header__nav-item"
                  onMouseEnter={() => setActiveDropdown("company")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div
                    className={`header__nav-item-drop ${
                      activeDropdown === "company" ? "is-open" : ""
                    }`}
                  >
                    <div
                      className="header__nav-item-toggle"
                      onClick={() => toggleDropdown("company")}
                      role="button"
                      tabIndex={0}
                    >
                      <div className="header__nav-link-with-sub header__nav-link--inner">
                        Company
                      </div>
                      <div className="header__nav-icon w-embed">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M5.83325 8.33325L9.99992 12.4999L14.1666 8.33325H5.83325Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="header__nav-sub right-side">
                      <div className="header__nav-sub-inner">
                        <div className="header__nav-sub-inner-arrow w-embed">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 27 12"
                            fill="none"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0.318359 11.999H26.0876C25.8877 11.5375 25.5909 11.1052 25.1973 10.7302L16.0991 2.06229C14.4996 0.538482 11.9063 0.53848 10.3069 2.06229L1.20865 10.7302C0.815007 11.1052 0.518245 11.5375 0.318359 11.999Z"
                              fill="#3A3A3A"
                            />
                          </svg>
                        </div>
                        <div className="header__nav-sub-group-wrap">
                          <div className="header__nav-sub-group one-column">
                            <Link
                              href="#contact-section"
                              onClick={closeAll}
                              className="header__nav-sub-link"
                            >
                              Podcast
                            </Link>
                            <Link
                              href="#portfolio-section"
                              onClick={closeAll}
                              className="header__nav-sub-link"
                            >
                              Blog
                            </Link>
                            <Link
                              href="#team-section"
                              onClick={closeAll}
                              className="header__nav-sub-link"
                            >
                              Our team
                            </Link>
                            <Link
                              href="#contact-section"
                              onClick={closeAll}
                              className="header__nav-sub-link"
                            >
                              Career
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>

            {/* Navbar CTA Button - Change 06: Renamed to "Let's Talk" */}
            <div className="header__cta">
              <div className="button-wrapper">
                <Link
                  href="#contact-section"
                  onClick={closeAll}
                  className="button button_smaller w-inline-block"
                >
                  <div>Let&apos;s Talk</div>
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="header__mobile-trigger-wrap">
            <div
              className={`header__mobile-trigger ${mobileOpen ? "is-active" : ""}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              role="button"
              tabIndex={0}
              aria-label="Toggle navigation menu"
            >
              <div className="header__mobile-trigger-inner">
                <div className="header__mobile-trigger-line" />
                <div className="header__mobile-trigger-line" />
              </div>
            </div>
          </div>

          <div className="header__mobile-border" />
        </div>
      </div>
    </header>
  );
}
