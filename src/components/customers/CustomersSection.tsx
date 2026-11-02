"use client";

import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CUSTOMERS_CARDS } from "@/data/siteData";
import { useIsClient } from "@/hooks/useIsClient";

import "swiper/css";
import "swiper/css/navigation";

export default function CustomersSection() {
  const swiperRef = useRef<SwiperType | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const strikethroughRef = useRef<HTMLDivElement>(null);
  const mounted = useIsClient();

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const line = strikethroughRef.current;
      if (!line) return;

      if (prefersReducedMotion) {
        gsap.set(line, { width: "100%" });
        return;
      }

      gsap.set(line, { width: "0%" });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 75%",
        once: true,
        onEnter: () => {
          gsap.to(line, {
            width: "100%",
            duration: 0.85,
            ease: "power2.out",
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [mounted]);

  return (
    <section ref={sectionRef} id="customers-section" className="section--customers">
      <div className="section__pattern customers__pattern w-embed">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="68.9375rem"
          height="61.625rem"
          viewBox="0 0 1103 986"
          fill="none"
        >
          <path
            d="M1107.48 745.898L1107.48 745.898C1113.06 748.87 1119.2 754.338 1124.44 760.627C1129.68 766.917 1133.94 773.928 1135.83 779.924L1136.78 779.624L1135.83 779.924C1136.34 781.565 1136.82 785.168 1137.24 790.372C1137.64 795.533 1137.98 802.161 1138.25 809.772C1138.78 824.993 1139.03 844.113 1139 863.227C1138.96 882.342 1138.65 901.441 1138.06 916.619C1137.77 924.209 1137.41 930.811 1136.98 935.94C1136.55 941.115 1136.06 944.676 1135.54 946.271L1136.49 946.582L1135.54 946.271C1133.5 952.511 1128.26 960.161 1121.96 966.837C1115.66 973.517 1108.44 979.064 1102.56 981.225L1102.91 982.164L1102.56 981.225C1101 981.801 1097.66 982.344 1092.85 982.82C1088.08 983.292 1081.99 983.688 1075.01 984.008C1061.04 984.648 1043.55 984.979 1026.06 984.999C1008.56 985.019 991.078 984.726 977.127 984.118C970.151 983.813 964.068 983.431 959.314 982.97C954.514 982.505 951.188 981.969 949.638 981.398L949.292 982.336L949.638 981.398C944.121 979.366 937.648 974.777 931.828 969.11C926.015 963.45 920.951 956.806 918.193 950.752L918.193 950.752C917.115 948.387 916.33 946.567 915.719 943.985C915.105 941.386 914.66 937.984 914.319 932.475C913.636 921.449 913.376 902.183 912.911 864.447L912.113 799.77C912.011 791.503 910.264 783.34 906.973 775.756C900.662 761.211 891.675 751.485 878.191 744.645C871.175 741.086 863.439 739.177 855.573 739.064L796.08 738.206L792.442 738.154C754.957 737.615 736.365 737.348 725.29 735.407C719.624 734.415 716.002 732.994 712.849 730.907C709.854 728.925 707.248 726.325 703.689 722.773C703.455 722.54 703.217 722.303 702.975 722.061C698.336 717.438 692.592 709.379 690.246 704.232C689.187 701.909 688.414 700.097 687.811 697.512C687.204 694.908 686.763 691.488 686.424 685.967C685.745 674.916 685.482 655.642 685.018 618.048L684.221 553.371C684.119 545.105 682.372 536.941 679.081 529.357C672.77 514.812 663.783 505.086 650.299 498.246C643.284 494.688 635.534 492.821 627.669 492.794L51.3495 490.816C44.8314 490.793 38.4172 489.18 32.6642 486.116C27.0829 483.144 20.943 477.676 15.7039 471.386C10.4645 465.097 6.20874 458.085 4.31946 452.089C3.7981 450.435 3.31238 446.85 2.88989 441.69C2.47095 436.572 2.12097 430.01 1.84082 422.478C1.2804 407.418 1 388.515 1 369.608C1 350.701 1.2804 331.798 1.84082 316.738C2.12097 309.206 2.47095 302.644 2.88989 297.526C3.31238 292.366 3.7981 288.781 4.31946 287.127C6.20874 281.131 10.4645 274.119 15.7039 267.83C20.943 261.54 27.0829 256.072 32.6641 253.1C34.8513 251.935 36.5219 251.093 38.8901 250.438C41.2756 249.779 44.4075 249.299 49.4971 248.931C59.6874 248.192 77.4974 247.912 112.404 247.408L171.897 246.551C179.763 246.437 187.499 244.529 194.514 240.97C207.999 234.13 216.986 224.404 223.297 209.859C226.588 202.275 228.335 194.112 228.437 185.845L229.234 121.168C229.7 83.4314 229.96 64.1661 230.643 53.14C230.984 47.6313 231.429 44.2286 232.043 41.6299C232.654 39.048 233.439 37.2278 234.517 34.8627L233.607 34.4481L234.517 34.8624C236.886 29.6593 243.005 21.2969 248.082 16.361C249.042 15.428 249.899 14.5616 250.698 13.7545C253.529 10.8927 255.621 8.77814 258.922 7.09918C263.143 4.95239 269.381 3.52466 281.621 2.60785C303.454 0.972595 343.908 0.983215 424.944 1.00452C434.733 1.00708 445.115 1.00983 456.127 1.00983C467.138 1.00983 477.519 1.00708 487.308 1.00452C568.345 0.983215 608.799 0.972595 630.632 2.60791C642.872 3.52472 649.11 4.95239 653.331 7.09924C656.632 8.7782 658.724 10.8928 661.556 13.7546C662.354 14.5616 663.211 15.4281 664.171 16.3609C669.248 21.2969 675.367 29.6594 677.736 34.8625L678.646 34.4481L677.736 34.8627C678.814 37.2278 679.599 39.048 680.21 41.6299C680.824 44.2286 681.269 47.6313 681.61 53.14C682.294 64.1662 682.553 83.4315 683.019 121.168L683.816 185.845C683.918 194.112 685.665 202.275 688.956 209.859C695.267 224.404 704.254 234.13 717.739 240.97C724.753 244.528 732.507 246.382 740.372 246.382H855.557C863.422 246.382 871.176 244.528 878.191 240.97C891.675 234.13 900.662 224.404 906.973 209.859C910.264 202.275 912.011 194.112 912.113 185.845L912.911 121.168C913.376 83.4315 913.636 64.1662 914.319 53.14C914.66 47.6313 915.105 44.2286 915.719 41.6299C916.33 39.048 917.116 37.2278 918.193 34.8627L917.283 34.4481L918.193 34.8625C920.562 29.6594 926.682 21.2969 931.758 16.361C935.704 12.5252 938.704 9.71356 942.196 7.59766C945.665 5.49634 949.667 4.05481 955.624 3.07245C967.616 1.09467 987.268 1.00983 1025.86 1.00983C1065.71 1.00983 1085.62 1.04095 1097.69 3.32275C1103.68 4.45398 1107.68 6.1297 1111.2 8.60474C1114.76 11.1044 1117.89 14.4423 1122.12 19.0169C1123.33 20.3242 1124.43 21.4586 1125.45 22.5017C1128.36 25.4762 1130.54 27.7086 1132.28 31.09C1134.62 35.627 1136.17 42.2578 1137.15 55.4578C1138.86 78.4912 1138.84 121.064 1138.81 206.324C1138.81 218.754 1138.8 232.092 1138.8 246.409C1138.8 258.317 1138.81 269.543 1138.81 280.129C1138.83 367.738 1138.84 411.488 1137.32 435.102C1136.48 448.344 1135.15 455.122 1133.15 459.719C1131.59 463.305 1129.63 465.579 1126.98 468.642C1126.23 469.504 1125.43 470.428 1124.57 471.462C1120.01 476.955 1112.28 483.564 1107.48 486.116L1107.48 486.116C1105.29 487.281 1103.62 488.123 1101.25 488.778C1098.87 489.437 1095.74 489.917 1090.65 490.285C1080.46 491.024 1062.65 491.304 1027.74 491.808L968.248 492.665C960.383 492.779 952.646 494.687 945.631 498.246C932.146 505.086 923.159 514.812 916.848 529.357C913.558 536.94 911.86 545.118 911.86 553.384V678.629C911.86 686.895 913.558 695.074 916.848 702.657C923.159 717.201 932.146 726.928 945.631 733.768C952.646 737.326 960.383 739.235 968.248 739.348L1027.74 740.206C1062.65 740.71 1080.46 740.99 1090.65 741.728C1095.74 742.097 1098.87 742.576 1101.25 743.236C1103.62 743.891 1105.29 744.733 1107.48 745.898Z"
            stroke="#1D1D1D"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="container customers-container">
        <div className="customers__container">
          <div className="customers__heading">
            <div className="heading_combined">
              <div className="heading_label fade-up-alt">
                <div className="body-smaller text-uppercase section-label">
                  Our Customers
                </div>
              </div>
              <div className="customers__title title_regular">
                <div className="customers__title-row">
                  <div>the wonderful</div>
                  <div className="customers__title-strikethrough">
                    <div>companies</div>
                    <div ref={strikethroughRef} className="customers__title-line"></div>
                  </div>
                  <div>
                    people<span className="mobile-words"> we</span>
                  </div>
                  <div>
                    <span className="desktop-words">we</span> work with
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="customers__slider" style={{ position: "relative" }}>
            {mounted ? (
              <div className="swiper customers-swiper w-dyn-list">
                <Swiper
                  modules={[Navigation]}
                  onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                  loop={false}
                  resistanceRatio={0}
                  spaceBetween={16}
                  slidesPerView={1.1}
                  breakpoints={{
                    300: { centeredSlides: true, slidesPerView: 1.1, spaceBetween: 16 },
                    768: { centeredSlides: true, slidesPerView: 2.2, spaceBetween: 16 },
                    992: { slidesPerView: 3.53, spaceBetween: 24 },
                    1600: { slidesPerView: 4.35, spaceBetween: 32 },
                  }}
                  className="swiper-wrapper customers-swiper w-dyn-items"
                >
                  {CUSTOMERS_CARDS.map((card) => (
                    <SwiperSlide key={card.id} className="swiper-slide w-dyn-item">
                      <div className="customers__item">
                        <img
                          className="customers__item-bg"
                          src={card.bgImage}
                          width="540"
                          height="460"
                          alt={card.brand}
                          loading="eager"
                        />
                        <div className="customers__item-gradient"></div>
                        <img
                          loading="eager"
                          width="220"
                          height="50"
                          src={card.logo}
                          alt={card.brand}
                          className="customers__item-logo"
                          style={{
                            maxHeight: "48px",
                            width: "auto",
                            filter: "brightness(0) invert(1)",
                          }}
                        />
                        <p className="customers__item-desc">
                          {card.description}
                        </p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            ) : (
              <div className="customers-swiper">
                <div className="customers__item">
                  <p className="customers__item-desc">Loading customers...</p>
                </div>
              </div>
            )}


            {/* Reference Navigation Controls matching CHE IT geometry */}
            <div className="slider-buttons slider-buttons_customers">
              <button
                type="button"
                onClick={() => swiperRef.current?.slidePrev()}
                className="button button_slider customers-slider-prev"
                aria-label="Previous customer slide"
              >
                <div className="button-slider-arrow w-embed">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M15 6L9 12L15 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
              <button
                type="button"
                onClick={() => swiperRef.current?.slideNext()}
                className="button button_slider customers-slider-next"
                aria-label="Next customer slide"
              >
                <div className="button-slider-arrow w-embed">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 6L15 12L9 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>

          <div className="customers__slider-gradient left pointer-events-none"></div>
          <div className="customers__slider-gradient right pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
