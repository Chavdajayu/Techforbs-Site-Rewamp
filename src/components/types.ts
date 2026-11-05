/**
 * Shared contracts for the TechForbs section component library.
 *
 * Every section in `src/components/*` is a self-contained, drop-in block:
 * it owns its own markup, styling hooks and GSAP timeline, and it renders
 * and animates identically no matter which page it is placed on.
 *
 * All props are optional. Rendering a section with no props at all produces
 * byte-for-byte the same DOM as the home page does.
 */

/** Props every section component accepts. */
export interface SectionBaseProps {
  /**
   * DOM id of the section's root element.
   *
   * Defaults to the id used on the home page (e.g. `"portfolio-section"`),
   * which is also what the in-page anchor links point at. Pass a unique value
   * if the same section is rendered twice in one document, otherwise the two
   * instances share an id and anchor scrolling becomes ambiguous.
   */
  id?: string;
  /** Extra class names appended to the section's root element. */
  className?: string;
}

/** Joins class names, dropping falsy values so no stray whitespace is emitted. */
export function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}
