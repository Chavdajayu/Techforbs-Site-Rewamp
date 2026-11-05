"use client";

import React from "react";
import Link from "next/link";
import type { PortfolioItem } from "@/data/siteData";

export interface PortfolioCardProps {
  item: PortfolioItem;
  /** Where the card's overlay link points. */
  href: string;
}

/**
 * A single `case-item` portfolio card.
 *
 * This is the one definition of the card used by every portfolio carousel on
 * the site — the home section and the services-page "clients' success" block.
 * Change it here and every page follows.
 */
export default function PortfolioCard({ item, href }: PortfolioCardProps) {
  return (
    <div className="case-item is-no-link">
      <Link href={href} className="case-item_link w-inline-block">
        <span className="sr-only">{item.title}</span>
      </Link>
      <div
        className="case-item-image"
        style={{
          backgroundColor: item.bgColor,
          borderTopLeftRadius: "0px",
          borderTopRightRadius: "2.25rem",
          borderBottomLeftRadius: "0px",
          borderBottomRightRadius: "0px",
        }}
      >
        <img
          width={416}
          height={439}
          alt="TechForbs case study"
          src="/images/ui/66335e1b00f641134b6bcbef_case-bg.svg"
          loading="lazy"
          className="case-item-circles"
        />
        <img
          className="case-item-thumb min-height"
          src={item.image}
          width={745}
          height={618}
          alt={item.title}
          loading="lazy"
          style={{
            borderTopLeftRadius: "0px",
            borderTopRightRadius: "2rem",
            borderBottomLeftRadius: "0px",
            borderBottomRightRadius: "0px",
          }}
        />
      </div>

      <h4 itemProp="headline" className="case-item-title">
        {item.title}
      </h4>
      <div className="case-item_tags">
        <div className="w-dyn-list">
          <div role="list" className="cms-tag_list w-dyn-items">
            {item.tags.map((tag) => (
              <div key={tag} role="listitem" className="cms-tag w-dyn-item">
                <div>{tag}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
