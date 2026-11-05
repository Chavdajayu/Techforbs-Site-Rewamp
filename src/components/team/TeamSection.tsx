"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface TeamSectionProps {
  id?: string;
  className?: string;
  sectionLabel?: string;
}

export default function TeamSection({
  id = "team-section",
  className = "section--team",
  sectionLabel = "Our Team",
}: TeamSectionProps = {}) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const ovalPathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Heading reveal
      gsap.fromTo(
        ".team__animation .heading_combined",
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

      // 2. Cyan oval SVG path draw
      if (ovalPathRef.current) {
        const path = ovalPathRef.current;
        const length = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });

        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: path,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // 3. Team grid morphing state machine (authentic CHE IT / TechForbs choreography)
      const classMods = [
        "state_v0_mod",
        "state_v1_mod",
        "state_v2_mod",
        "state_v3_mod",
        "state_v4_mod",
        "state_v5_mod",
      ];
      const delayTime = [2.2, 2.5, 1.2, 2.0, 1.5, 1.0];
      const mm = gsap.matchMedia();

      mm.add("(min-width: 992px)", () => {
        const items = gridRef.current?.querySelectorAll<HTMLElement>(".team__grid_item");
        if (!items || !items.length) return;

        let curClassIndex = 0;
        let delayedCall: gsap.core.Tween | null = null;
        let stopAnim = false;

        // Reset to initial state
        items.forEach((item) => {
          classMods.forEach((c) => item.classList.remove(c));
          item.classList.add(classMods[0]);
        });

        function changeGridClass(item: HTMLElement) {
          const nextIdx = (curClassIndex + 1) % classMods.length;
          item.classList.remove(classMods[curClassIndex]);
          item.classList.add(classMods[nextIdx]);
        }

        function nextState() {
          if (stopAnim) return;
          items?.forEach((item) => changeGridClass(item));
          curClassIndex = (curClassIndex + 1) % classMods.length;
          delayedCall = gsap.delayedCall(delayTime[curClassIndex], nextState);
        }

        delayedCall = gsap.delayedCall(delayTime[0], nextState);

        return () => {
          stopAnim = true;
          if (delayedCall) delayedCall.kill();
        };
      });

      mm.add("(max-width: 991px)", () => {
        const items = gridRef.current?.querySelectorAll<HTMLElement>(".team__grid_item");
        if (items) {
          items.forEach((item) => {
            classMods.forEach((c) => item.classList.remove(c));
            item.classList.add(classMods[0]);
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id={id} className={className}>
      <div className="section__pattern team__pattern w-embed">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="68.5rem"
          height="61.625rem"
          viewBox="0 0 1096 986"
          fill="none"
        >
          <path
            d="M1107.48 240.102L1107.48 240.102C1113.06 237.13 1119.2 231.662 1124.44 225.373C1129.68 219.083 1133.94 212.072 1135.83 206.076L1136.78 206.376L1135.83 206.076C1136.34 204.435 1136.82 200.832 1137.24 195.628C1137.64 190.467 1137.98 183.839 1138.25 176.228C1138.78 161.007 1139.03 141.887 1139 122.773C1138.96 103.658 1138.65 84.5594 1138.06 69.381C1137.77 61.7907 1137.41 55.1894 1136.98 50.0603C1136.55 44.885 1136.06 41.3239 1135.54 39.7285L1136.49 39.4183L1135.54 39.7285C1133.5 33.4885 1128.26 25.839 1121.96 19.1629C1115.66 12.483 1108.44 6.93609 1102.56 4.77485L1102.91 3.83627L1102.56 4.77484C1101 4.19926 1097.66 3.65604 1092.85 3.17997C1088.08 2.7084 1081.99 2.31199 1075.01 1.99211C1061.04 1.35245 1043.55 1.02055 1026.06 1.00092C1008.56 0.981302 991.078 1.27397 977.127 1.8823C970.151 2.18651 964.068 2.56924 959.314 3.0301C954.514 3.49544 951.188 4.03112 949.638 4.60215L949.292 3.6638L949.638 4.60217C944.121 6.63434 937.648 11.2229 931.828 16.8896C926.015 22.5502 920.951 29.1939 918.193 35.2478L918.193 35.2479C917.115 37.613 916.33 39.4332 915.719 42.0151C915.105 44.6138 914.66 48.0165 914.319 53.5252C913.636 64.5513 913.376 83.8166 912.911 121.553L912.113 186.23C912.011 194.497 910.264 202.66 906.973 210.244C900.662 224.789 891.675 234.515 878.191 241.355C871.175 244.914 863.439 246.823 855.573 246.936L796.08 247.794L792.442 247.846C754.957 248.385 736.365 248.652 725.29 250.593C719.624 251.585 716.002 253.006 712.849 255.093C709.854 257.075 707.248 259.675 703.689 263.227C703.455 263.46 703.217 263.697 702.975 263.939C698.336 268.562 692.592 276.621 690.246 281.768C689.187 284.091 688.414 285.903 687.811 288.488C687.204 291.092 686.763 294.512 686.424 300.033C685.745 311.084 685.482 330.358 685.018 367.952L684.221 432.629C684.119 440.895 682.372 449.059 679.081 456.643C672.77 471.188 663.783 480.914 650.299 487.754C643.284 491.312 635.534 493.179 627.669 493.206L51.3495 495.184C44.8314 495.207 38.4172 496.82 32.6642 499.884C27.0829 502.856 20.943 508.324 15.7039 514.614C10.4645 520.903 6.20874 527.915 4.31946 533.911C3.7981 535.565 3.31238 539.15 2.88989 544.31C2.47095 549.428 2.12097 555.99 1.84082 563.522C1.2804 578.582 1 597.485 1 616.392C1 635.299 1.2804 654.202 1.84082 669.262C2.12097 676.794 2.47095 683.356 2.88989 688.474C3.31238 693.634 3.7981 697.219 4.31946 698.873C6.20874 704.869 10.4645 711.881 15.7039 718.17C20.943 724.46 27.0829 729.928 32.6641 732.9C34.8513 734.065 36.5219 734.907 38.8901 735.562C41.2756 736.221 44.4075 736.701 49.4971 737.069C59.6874 737.808 77.4974 738.088 112.404 738.592L171.897 739.449C179.763 739.563 187.499 741.471 194.514 745.03C207.999 751.87 216.986 761.596 223.297 776.141C226.588 783.725 228.335 791.888 228.437 800.155L229.234 864.832C229.7 902.569 229.96 921.834 230.643 932.86C230.984 938.369 231.429 941.771 232.043 944.37C232.654 946.952 233.439 948.772 234.517 951.137L233.607 951.552L234.517 951.138C236.886 956.341 243.005 964.703 248.082 969.639C249.042 970.572 249.899 971.438 250.698 972.245C253.529 975.107 255.621 977.222 258.922 978.901C263.143 981.048 269.381 982.475 281.621 983.392C303.454 985.027 343.908 985.017 424.944 984.995C434.733 984.993 445.115 984.99 456.127 984.99C467.138 984.99 477.519 984.993 487.308 984.995C568.345 985.017 608.799 985.027 630.632 983.392C642.872 982.475 649.11 981.048 653.331 978.901C656.632 977.222 658.724 975.107 661.556 972.245C662.354 971.438 663.211 970.572 664.171 969.639C669.248 964.703 675.367 956.341 677.736 951.138L678.646 951.552L677.736 951.137C678.814 948.772 679.599 946.952 680.21 944.37C680.824 941.771 681.269 938.369 681.61 932.86C682.294 921.834 682.553 902.569 683.019 864.832L683.816 800.155C683.918 791.888 685.665 783.725 688.956 776.141C695.267 761.596 704.254 751.87 717.739 745.03C724.753 741.472 732.507 739.618 740.372 739.618H855.557C863.422 739.618 871.176 741.472 878.191 745.03C891.675 751.87 900.662 761.596 906.973 776.141C910.264 783.725 912.011 791.888 912.113 800.155L912.911 864.832C913.376 902.569 913.636 921.834 914.319 932.86C914.66 938.369 915.105 941.771 915.719 944.37C916.33 946.952 917.116 948.772 918.193 951.137L917.283 951.552L918.193 951.138C920.562 956.341 926.682 964.703 931.758 969.639C935.704 973.475 938.704 976.286 942.196 978.402C945.665 980.504 949.667 981.945 955.624 982.928C967.616 984.905 987.268 984.99 1025.86 984.99C1065.71 984.99 1085.62 984.959 1097.69 982.677C1103.68 981.546 1107.68 979.87 1111.2 977.395C1114.76 974.896 1117.89 971.558 1122.12 966.983C1123.33 965.676 1124.43 964.541 1125.45 963.498C1128.36 960.524 1130.54 958.291 1132.28 954.91C1134.62 950.373 1136.17 943.742 1137.15 930.542C1138.86 907.509 1138.84 864.936 1138.81 779.676C1138.81 767.246 1138.8 753.908 1138.8 739.591C1138.8 727.683 1138.81 716.457 1138.81 705.871C1138.83 618.262 1138.84 574.512 1137.32 550.898C1136.48 537.656 1135.15 530.878 1133.15 526.281C1131.59 522.695 1129.63 520.421 1126.98 517.358C1126.23 516.496 1125.43 515.572 1124.57 514.538C1120.01 509.045 1112.28 502.436 1107.48 499.884L1107.48 499.884C1105.29 498.719 1103.62 497.877 1101.25 497.222C1098.87 496.563 1095.74 496.083 1090.65 495.715C1080.46 494.976 1062.65 494.696 1027.74 494.192L968.248 493.335C960.383 493.221 952.646 491.313 945.631 487.754C932.146 480.914 923.159 471.188 916.848 456.643C913.558 449.06 911.86 440.882 911.86 432.616V307.371C911.86 299.105 913.558 290.926 916.848 283.343C923.159 268.799 932.146 259.072 945.631 252.232C952.646 248.674 960.383 246.765 968.248 246.652L1027.74 245.794C1062.65 245.29 1080.46 245.01 1090.65 244.272C1095.74 243.903 1098.87 243.424 1101.25 242.764C1103.62 242.109 1105.29 241.267 1107.48 240.102Z"
            stroke="#1D1D1D"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="container">
        <div className="team__animation">
          <div className="heading_combined">
            <div className="heading_label fade-up-alt">
              <div className="body-smaller text-uppercase section-label">
                {sectionLabel}
              </div>
            </div>
            <div className="team__heading-title">
              <h2 className="title_regular">
                Meet our{" "}
                <span className="team-circle-wrap relative inline-block text-[#00e5ff] px-2 py-0.5 whitespace-nowrap">
                  expert team
                  <span
                    data-wf--title-circle--variant="base"
                    className="title-circle service-hero_circle"
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "calc(100% + 2rem)",
                      height: "calc(100% + 1.4rem)",
                      pointerEvents: "none",
                      zIndex: 1,
                      opacity: 1,
                      display: "block",
                    }}
                  >
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 453 89"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                      style={{ width: "100%", height: "100%" }}
                    >
                      <path
                        ref={ovalPathRef}
                        d="M316.771 87C405.472 79.7966 451 58.571 451 43.7797C451 20.7054 350.488 2 226.5 2C102.512 2 2.00001 20.7054 2.00001 43.7797C2.00001 66.8539 102.512 85.5593 226.5 85.5593C268.367 85.5593 324.621 81.9576 362.299 71.8729"
                        stroke="#00e5ff"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </span>
              </h2>
            </div>
          </div>

          <div className="team__lottieanim">
            <div className="team__grid__wrap">
              <div className="w-dyn-list">
                <div ref={gridRef} role="list" className="team__grid w-dyn-items">
                  {/* Grid Item 1: Blue accent block */}
                  <div role="listitem" className="team__grid_item state_v0_mod w-dyn-item">
                    <div className="team__grid_pic_wrap" />
                  </div>

                  {/* Grid Item 2: Team Photos 1 & 7 */}
                  <div role="listitem" className="team__grid_item state_v0_mod w-dyn-item">
                    <div className="team__grid_pic_wrap">
                      <div className="team__grid_pic">
                        <img
                          loading="eager"
                          alt="TechForbs Engineering Team"
                          src="/images/team/techforbs-team-1.jpg"
                          className="team__grid_img"
                        />
                      </div>
                      <div className="team__grid_pic">
                        <img
                          loading="eager"
                          src="/images/team/techforbs-team-7.jpg"
                          alt="TechForbs Team Discussion"
                          className="team__grid_img"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Grid Item 3: Team Photo 10 */}
                  <div role="listitem" className="team__grid_item state_v0_mod w-dyn-item">
                    <div className="team__grid_pic_wrap">
                      <div className="team__grid_pic">
                        <img
                          loading="eager"
                          alt="TechForbs Developers Working"
                          src="/images/team/techforbs-team-10.jpg"
                          className="team__grid_img"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Grid Item 4: Team Photo 6 */}
                  <div role="listitem" className="team__grid_item state_v0_mod w-dyn-item">
                    <div className="team__grid_pic_wrap">
                      <div className="team__grid_pic">
                        <img
                          loading="eager"
                          alt="TechForbs Team Collaboration"
                          src="/images/team/techforbs-team-6.jpg"
                          className="team__grid_img"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Grid Item 5: Team Photos 8 & 3 */}
                  <div role="listitem" className="team__grid_item state_v0_mod w-dyn-item">
                    <div className="team__grid_pic_wrap">
                      <div className="team__grid_pic">
                        <img
                          loading="eager"
                          alt="TechForbs Solution Architects"
                          src="/images/team/techforbs-team-8.jpg"
                          className="team__grid_img"
                        />
                      </div>
                      <div className="team__grid_pic">
                        <img
                          loading="eager"
                          src="/images/team/techforbs-team-3.jpg"
                          alt="TechForbs Team Office"
                          className="team__grid_img"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Grid Item 6: Invisible spacer */}
                  <div role="listitem" className="team__grid_item state_v0_mod w-dyn-item">
                    <div className="team__grid_pic_wrap w-condition-invisible" />
                  </div>

                  {/* Grid Item 7: Blue accent block */}
                  <div role="listitem" className="team__grid_item state_v0_mod w-dyn-item">
                    <div className="team__grid_pic_wrap" />
                  </div>
                </div>
              </div>
            </div>

            <div className="team__lottieanim-caption">
              <p className="color-white-70">
                25+ dedicated full-stack engineers &amp; specialists
              </p>
              <p className="body-bigger our-team-quote">
                “We engineer robust, high-converting digital flagships. Our focus is
                absolute technical quality, speed to delivery, and building systems
                that scale seamlessly with your growth.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const OurTeam = TeamSection;
