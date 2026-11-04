"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useIsClient } from "@/hooks/useIsClient";
import SliderArrows from "./SliderArrows";

/**
 * What our clients say… for real.
 *
 * Reference composition (CHE IT): heading -> client logo strip (5 columns)
 * -> multi-card testimonial carousel -> next section.
 *
 * Reference Swiper config, reproduced exactly:
 *   loop: true, speed: 1000, slidesPerView: 2, autoplay: false,
 *   240: 1 (16) -> 768: 2 (16) -> 992: 2 (50)
 *
 * CONTENT INTEGRITY: these are the testimonials already approved and published
 * on the TechForbs homepage — same people, same roles, same words, same photos.
 * No statement, name, rating or screenshot has been written for this page, and
 * none of the reference's own client quotes have been carried over.
 */

type Testimonial = {
  name: string;
  position: string;
  avatar: string;
  overview: string;
  bgColor: string;
  messages: { text: string; time: string }[];
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Robert Whitehead",
    position: "Founder, Whitehead Consulting (AM)",
    avatar: "/images/testimonials/robert-whitehead.jpg",
    overview: "/images/clients/pari.png",
    bgColor: "#dbbaf4",
    messages: [
      { text: "TechForbs team is truly exceptional", time: "4:45 PM" },
      { text: "Our custom platform runs flawlessly", time: "4:56 PM" },
      { text: "Super responsive communication", time: "4:57 PM" },
      { text: "Delivered ahead of schedule", time: "4:58 PM" },
    ],
  },
  {
    name: "Brad",
    position: "E-Commerce Director, High-Growth D2C",
    avatar: "/images/testimonials/brad.jpg",
    overview: "/images/portfolio/aldonexport.png",
    bgColor: "#a0eeb0",
    messages: [
      { text: "The Shopify migration was smooth and rapid", time: "2:15 PM" },
      { text: "Conversion rate jumped by 34% in the first month", time: "2:16 PM" },
      { text: "Technical competence across the board", time: "2:20 PM" },
    ],
  },
  {
    name: "Dr. James Meschino",
    position: "Director, Adeeva Health",
    avatar: "/images/clients/adeeva.png",
    overview: "/images/portfolio/bodhi.png",
    bgColor: "#ffb3b3",
    messages: [
      { text: "Extremely thorough with enterprise healthcare compliance", time: "11:05 AM" },
      { text: "Architecture handled our seasonal traffic surges with zero downtime", time: "11:08 AM" },
      { text: "A truly reliable long-term technology partner", time: "11:12 AM" },
    ],
  },
  {
    name: "Oliver Stueck",
    position: "VP Operations, ALLMAX Nutrition",
    avatar: "/images/clients/allmax-nutrition.jpg",
    overview: "/images/portfolio/hype-distribution.png",
    bgColor: "#ffde82",
    messages: [
      { text: "Our multi-region stores run with exceptional speed", time: "3:30 PM" },
      { text: "Complex ERP integration solved seamlessly", time: "3:32 PM" },
      { text: "High standard of engineering quality", time: "3:35 PM" },
    ],
  },
];

/** Reference logo strip is a 5-column grid; these are genuine TechForbs clients. */
const CLIENT_LOGOS = [
  { src: "/images/clients/whitehead-consulting.png", alt: "Whitehead Consulting" },
  { src: "/images/clients/adeeva.png", alt: "Adeeva Health" },
  { src: "/images/clients/allmax-nutrition.png", alt: "ALLMAX Nutrition" },
  { src: "/images/clients/hype-distribution.png", alt: "Hype Distribution" },
  { src: "/images/clients/finarkein.png", alt: "Finarkein" },
];

function Card({ t }: { t: Testimonial }) {
  return (
    <div className="testimonials__card tech-variant">
      <div className="testimonials__card-inner">
        <div className="testimonials__card-bg" style={{ backgroundColor: t.bgColor }}></div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={t.overview} alt="" aria-hidden="true" loading="lazy" className="testimonials__card-overview tech-variant" />
        <div className="testimonials__card-caption tech-variant">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={t.avatar} alt={t.name} loading="lazy" className="testimonials__card-avatar tech-variant" />
          <p className="testimonials__card-name">{t.name}</p>
          <p className="testimonials__card-position">{t.position}</p>
        </div>
        <div className="testimonials__card-inner-scroller">
          <div className="testimonials__card-list">
            {t.messages.map((m) => (
              <div className="testimonials__card-message tech-variant" key={m.text}>
                <p className="testimonials__card-message-text tech-variant">{m.text}</p>
                <p className="testimonials__card-message-time tech-variant">{m.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServiceTestimonials() {
  const mounted = useIsClient();

  return (
    <>
      <div className="tech-testimonials-nav-wrapper">
        {CLIENT_LOGOS.map((logo) => (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img key={logo.src} src={logo.src} alt={`${logo.alt} logo`} loading="lazy" className="tech-nav-image" />
        ))}
      </div>

      <div className="tech-testimonials__slider">
        {!mounted ? (
          <div className="testimonials-static-fallback">
            {TESTIMONIALS.slice(0, 2).map((t) => (
              <Card t={t} key={t.name} />
            ))}
          </div>
        ) : (
          <>
            <Swiper
              className="tech-testimonials__slider-wrapper tech-variant"
              modules={[Navigation]}
              loop
              speed={1000}
              slidesPerView={2}
              spaceBetween={50}
              navigation={{ prevEl: ".testimonials-slider-prev", nextEl: ".testimonials-slider-next" }}
              breakpoints={{
                240: { slidesPerView: 1, spaceBetween: 16 },
                768: { slidesPerView: 2, spaceBetween: 16 },
                992: { slidesPerView: 2, spaceBetween: 50 },
              }}
            >
              {TESTIMONIALS.map((t) => (
                <SwiperSlide key={t.name}>
                  <Card t={t} />
                </SwiperSlide>
              ))}
            </Swiper>

            <SliderArrows
              prevClass="testimonials-slider-prev"
              nextClass="testimonials-slider-next"
              prevLabel="Previous testimonial"
              nextLabel="Next testimonial"
            />
          </>
        )}
      </div>
    </>
  );
}
