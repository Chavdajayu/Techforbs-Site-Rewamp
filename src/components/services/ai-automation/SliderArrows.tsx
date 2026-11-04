"use client";

/**
 * Reference-faithful slider arrows.
 *
 * Reproduces the CHE IT markup:
 *   .slider-buttons > .button.button_slider.<prevClass|nextClass> > .button-slider-arrow > svg
 *
 * Geometry (.slider-buttons) is absolutely positioned and overhangs the carousel
 * on both sides — see ai-automation-page.css. Accent colour is translated from
 * the reference coral to the TechForbs cyan.
 */
export default function SliderArrows({
  prevClass,
  nextClass,
  prevLabel,
  nextLabel,
  variant,
}: {
  prevClass: string;
  nextClass: string;
  prevLabel: string;
  nextLabel: string;
  variant?: string;
}) {
  return (
    <div className={`slider-buttons${variant ? ` ${variant}` : ""}`}>
      <button type="button" className={`button button_slider ${prevClass}`} aria-label={prevLabel}>
        <span className="button-slider-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="2" />
          </svg>
        </span>
      </button>
      <button type="button" className={`button button_slider ${nextClass}`} aria-label={nextLabel}>
        <span className="button-slider-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" />
          </svg>
        </span>
      </button>
    </div>
  );
}
