"use client";

import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { useIsClient } from "@/hooks/useIsClient";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HOME_TESTIMONIALS, type HomeTestimonial } from "@/data/siteData";
import { cx, type SectionBaseProps } from "@/components/types";

import "swiper/css";
import "swiper/css/navigation";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface TestimonialsSectionProps extends SectionBaseProps {
  /** Small uppercase eyebrow above the heading. */
  label?: string;
  /** Section heading. */
  title?: string;
  /** Testimonial cards. Defaults to the four home-page clients. */
  testimonials?: HomeTestimonial[];
}

/**
 * "Testimonials" — looping Swiper of chat-style client cards.
 *
 * Animation: the cards rise 60px with a 0.12s stagger when the section reaches
 * 78% of the viewport, and each card's chat bubbles pop in (height 0 -> auto,
 * scale 0 -> 1) whenever that card becomes the active slide.
 */
export default function TestimonialsSection({
  id = "testimonials-section",
  className,
  label = "TESTIMONIALS",
  title = "What our clients are saying... verified feedback",
  testimonials = HOME_TESTIMONIALS,
}: TestimonialsSectionProps = {}) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);
  const mounted = useIsClient();

  const animateCardMessages = (card: HTMLElement) => {
    const wrappers = card.querySelectorAll(".testimonials__card-message-wrapper");
    const messages = card.querySelectorAll(".testimonials__card-message");
    if (!wrappers.length || !messages.length) return;

    gsap.killTweensOf(wrappers);
    gsap.killTweensOf(messages);
    gsap.set(wrappers, { height: "0rem" });
    gsap.set(messages, { scale: 0 });

    gsap.to(wrappers, {
      height: "2.375rem",
      duration: 0.35,
      delay: 0.3,
      stagger: 0.45,
      ease: "power2.out",
    });
    gsap.to(messages, {
      scale: 1,
      duration: 0.35,
      delay: 0.3,
      stagger: 0.45,
      ease: "back.out(1.4)",
    });
  };

  useEffect(() => {
    if (!mounted || !sectionRef.current) return;
    const ctx = gsap.context(() => {
      // Heading reveal
      gsap.fromTo(
        ".testimonials-heading .heading_combined",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Chat bubble reveal on enter
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 70%",
        once: true,
        onEnter: () => {
          const cards = sectionRef.current?.querySelectorAll<HTMLElement>(".swiper-slide-active .testimonials__card, .swiper-slide-next .testimonials__card");
          if (cards && cards.length > 0) {
            cards.forEach((card, idx) => {
              setTimeout(() => animateCardMessages(card), idx * 400);
            });
          }
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [mounted]);

  const handleSlideChange = (swiper: SwiperType) => {
    const activeSlide = swiper.slides[swiper.activeIndex];
    if (activeSlide) {
      const card = activeSlide.querySelector<HTMLElement>(".testimonials__card");
      if (card) animateCardMessages(card);
    }
  };

  return (
    <section ref={sectionRef} id={id} className={cx("section--testimonials", className)}>
      <div className="section__pattern testimonials__pattern w-embed">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45rem"
          height="61.625rem"
          viewBox="0 0 720 986"
          fill="none"
        >
          <path
            d="M-387.481 745.898L-387.481 745.898C-393.062 748.87 -399.202 754.338 -404.441 760.627C-409.68 766.917 -413.936 773.928 -415.825 779.924L-416.779 779.624L-415.826 779.924C-416.343 781.565 -416.822 785.168 -417.235 790.372C-417.645 795.533 -417.983 802.161 -418.25 809.772C-418.783 824.993 -419.03 844.113 -418.997 863.227C-418.964 882.342 -418.651 901.441 -418.065 916.619C-417.772 924.209 -417.411 930.811 -416.983 935.94C-416.552 941.115 -416.061 944.676 -415.54 946.271L-416.491 946.582L-415.54 946.271C-413.504 952.511 -408.265 960.161 -401.963 966.837C-395.659 973.517 -388.44 979.064 -382.562 981.225L-382.907 982.164L-382.562 981.225C-380.996 981.801 -377.657 982.344 -372.847 982.82C-368.083 983.292 -361.991 983.688 -355.008 984.008C-341.043 984.648 -323.551 984.979 -306.057 984.999C-288.563 985.019 -271.078 984.726 -257.127 984.118C-250.151 983.813 -244.068 983.431 -239.314 982.97C-234.514 982.505 -231.188 981.969 -229.638 981.398L-229.292 982.336L-229.638 981.398C-224.121 979.366 -217.648 974.777 -211.828 969.11C-206.015 963.45 -200.951 956.806 -198.193 950.752L-198.193 950.752C-197.115 948.387 -196.33 946.567 -195.719 943.985C-195.105 941.386 -194.66 937.984 -194.319 932.475C-193.636 921.449 -193.376 902.183 -192.911 864.447L-192.113 799.77C-192.011 791.503 -190.264 783.34 -186.973 775.756C-180.662 761.211 -171.675 751.485 -158.191 744.645C-151.175 741.086 -143.439 739.177 -135.573 739.064L-76.0799 738.206L-72.4423 738.154C-34.9567 737.615 -16.3648 737.348 -5.29004 735.407C0.375854 734.415 3.99777 732.994 7.15063 730.907C10.1461 728.925 12.7519 726.325 16.311 722.773C16.5448 722.54 16.7827 722.303 17.0252 722.061C21.6641 717.438 27.4083 709.379 29.754 704.232C30.8126 701.909 31.5864 700.097 32.1893 697.512C32.7964 694.908 33.2368 691.488 33.5759 685.967C34.2545 674.916 34.5179 655.642 34.9815 618.048L35.7791 553.371C35.881 545.105 37.6284 536.941 40.919 529.357C47.23 514.812 56.2173 505.086 69.7015 498.246C76.7161 494.688 84.466 492.821 92.3314 492.794L668.651 490.816C675.169 490.793 681.583 489.18 687.336 486.116C692.917 483.144 699.057 477.676 704.296 471.386C709.536 465.097 713.791 458.085 715.681 452.089C716.202 450.435 716.688 446.85 717.11 441.69C717.529 436.572 717.879 430.01 718.159 422.478C718.72 407.418 719 388.515 719 369.608C719 350.701 718.72 331.798 718.159 316.738C717.879 309.206 717.529 302.644 717.11 297.526C716.688 292.366 716.202 288.781 715.681 287.127C713.791 281.131 709.536 274.119 704.296 267.83C699.057 261.54 692.917 256.072 687.336 253.1C685.149 251.935 683.478 251.093 681.11 250.438C678.724 249.779 675.593 249.299 670.503 248.931C660.313 248.192 642.503 247.912 607.596 247.408L548.103 246.551C540.237 246.437 532.501 244.529 525.486 240.97C512.001 234.13 503.014 224.404 496.703 209.859C493.412 202.275 491.665 194.112 491.563 185.845L490.766 121.168C490.3 83.4314 490.04 64.1661 489.357 53.14C489.016 47.6313 488.571 44.2286 487.957 41.6299C487.346 39.048 486.561 37.2278 485.483 34.8627L486.393 34.4481L485.483 34.8624C483.114 29.6593 476.995 21.2969 471.918 16.361C470.958 15.428 470.101 14.5616 469.302 13.7545C466.471 10.8927 464.379 8.77814 461.078 7.09918C456.857 4.95239 450.619 3.52466 438.379 2.60785C416.546 0.972595 376.092 0.983215 295.056 1.00452C285.267 1.00708 274.885 1.00983 263.873 1.00983C252.862 1.00983 242.481 1.00708 232.692 1.00452C151.655 0.983215 111.201 0.972595 89.3681 2.60791C77.1278 3.52472 70.8901 4.95239 65.669 7.09924C63.3679 8.7782 61.2758 10.8928 58.4444 13.7546C57.6459 14.5616 56.7886 15.4281 55.829 16.3609C50.7523 21.2969 44.6332 29.6594 42.264 34.8625L41.3539 34.4481L42.2639 34.8627C41.1862 37.2278 40.4009 39.048 39.7902 41.6299C39.1755 44.2286 38.7309 47.6313 38.3896 53.14C37.7065 64.1662 37.4468 83.4315 36.9814 121.168L36.1838 185.845C36.0818 194.112 34.3345 202.275 31.0438 209.859C24.7328 224.404 15.7456 234.13 2.26132 240.97C-4.7529 244.528 -12.507 246.382 -20.372 246.382H-135.557C-143.422 246.382 -151.176 244.528 -158.191 240.97C-171.675 234.13 -180.662 224.404 -186.973 209.859C-190.264 202.275 -192.011 194.112 -192.113 185.845L-192.911 121.168C-193.376 83.4315 -193.636 64.1662 -194.319 53.14C-194.66 47.6313 -195.105 44.2286 -195.719 41.6299C-196.33 39.048 -197.116 37.2278 -198.193 34.8627L-197.283 34.4481L-198.193 34.8625C-200.562 29.6594 -206.682 21.2969 -211.758 16.361C-215.704 12.5252 -218.704 9.71356 -222.196 7.59766C-225.665 5.49634 -229.667 4.05481 -235.624 3.07245C-247.616 1.09467 -267.268 1.00983 -305.857 1.00983C-345.712 1.00983 -365.618 1.04095 -377.693 3.32275C-383.68 4.45398 -387.676 6.1297 -391.203 8.60474C-394.765 11.1044 -397.886 14.4423 -402.117 19.0169C-403.326 20.3242 -404.434 21.4586 -405.452 22.5017C-408.356 25.4762 -410.536 27.7086 -412.282 31.09C-414.625 35.627 -416.167 42.2578 -417.148 55.4578C-418.86 78.4912 -418.844 121.064 -418.812 206.324C-418.808 218.754 -418.803 232.092 -418.803 246.409C-418.803 258.317 -418.805 269.543 -418.808 280.129C-418.827 367.738 -418.837 411.488 -417.324 435.102C-416.476 448.344 -415.153 455.122 -413.153 459.719C-411.593 463.305 -409.627 465.579 -406.979 468.642C-406.233 469.504 -405.434 470.428 -404.574 471.462C-400.006 476.955 -392.276 483.564 -387.481 486.116L-387.481 486.116C-385.294 487.281 -383.623 488.123 -381.255 488.778C-378.869 489.437 -375.738 489.917 -370.648 490.285C-360.458 491.024 -342.648 491.304 -307.741 491.808L-248.248 492.665C-240.383 492.779 -232.646 494.687 -225.631 498.246C-212.146 505.086 -203.159 514.812 -196.848 529.357C-193.558 536.94 -191.86 545.118 -191.86 553.384V678.629C-191.86 686.895 -193.558 695.074 -196.848 702.657C-203.159 717.201 -212.146 726.928 -225.631 733.768C-232.646 737.326 -240.383 739.235 -248.248 739.348L-307.741 740.206C-342.648 740.71 -360.458 740.99 -370.648 741.728C-375.738 742.097 -378.869 742.576 -381.255 743.236C-383.623 743.891 -385.294 744.733 -387.481 745.898Z"
            stroke="#1D1D1D"
            strokeWidth="2"
          />
        </svg>
      </div>

      <section className="tech-testimonials">
        <div className="portfolio__heading testimonials-heading">
          <div className="container">
            <div className="heading_combined">
              <div className="heading_label fade-up-alt">
                <div itemProp="name" className="body-smaller text-uppercase section-label">{label}</div>
              </div>
              <h2 className="title_regular">{title}</h2>
            </div>
          </div>
        </div>

        <div className="home-testimonials">
          <div className="fade-up-alt">
            <div className="tech-testimonials__slider home-variant">
              {mounted ? (
                <div className="tech-testimonials__slider-wrapper tech-variant swiper w-dyn-list">
                  <Swiper
                    modules={[Navigation]}
                    onBeforeInit={(swiper) => {
                      swiperRef.current = swiper;
                    }}
                    onSlideChange={handleSlideChange}
                    loop={true}
                    spaceBetween={24}
                    slidesPerView={1.1}
                    breakpoints={{
                      768: { slidesPerView: 2.1, spaceBetween: 28 },
                      1024: { slidesPerView: 2.5, spaceBetween: 32 },
                    }}
                    className="swiper-wrapper w-dyn-items"
                  >
                    {testimonials.map((t) => (
                      <SwiperSlide key={t.name} className="swiper-slide w-dyn-item">
                        <div className="testimonials__card home-variant">
                          <div className="testimonials__card-inner">
                            <div
                              style={{ backgroundColor: t.bgColor }}
                              className="testimonials__card-bg"
                            />
                            <img
                              loading="eager"
                              width={500}
                              height={910}
                              src={t.brandLogo}
                              alt={t.name}
                              className="testimonials__card-overview tech-variant"
                            />
                            <div className="testimonials__card-caption tech-variant">
                              <img
                                loading="eager"
                                alt={t.name}
                                src={t.avatar}
                                className="testimonials__card-avatar tech-variant"
                              />
                              <p className="testimonials__card-name">{t.name}</p>
                              <p className="testimonials__card-position body-smaller text-uppercase">
                                {t.position}
                              </p>
                            </div>
                            <div className="testimonials__card-inner-scroller">
                              <div className="testimonials__card-list">
                                {t.messages.map((m, idx) => (
                                  <div
                                    key={idx}
                                    className="testimonials__card-message-wrapper tech-variant"
                                  >
                                    <div className="testimonials__card-message tech-variant">
                                      <p className="testimonials__card-message-text tech-variant">
                                        {m.text}
                                      </p>
                                      <p className="testimonials__card-message-time tech-variant color-white-70">
                                        {m.time}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              ) : (
                <div>Loading client testimonials...</div>
              )}

              <div
                className="slider-buttons"
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  justifyContent: "flex-end",
                  marginTop: "1.5rem",
                  marginRight: "2rem",
                }}
              >
                <button
                  type="button"
                  onClick={() => swiperRef.current?.slidePrev()}
                  className="button button_slider testimonials-slider-prev"
                  aria-label="Previous testimonial"
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M15 6L9 12L15 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => swiperRef.current?.slideNext()}
                  className="button button_slider testimonials-slider-next"
                  aria-label="Next testimonial"
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M9 6L15 12L9 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
