import React from "react";
import "./caseBlocks.css";

/*
 * A row of icon + caption features (e.g. "The Solution"). Each feature shows a
 * green line icon above a short caption. The number of columns adapts to the
 * item count.
 *
 * Props:
 *   features - array of { icon, label }, where `icon` is either the name of a
 *              built-in icon (see ICONS) or a custom SVG/JSX node.
 */

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const ICONS = {
  // Scrapbook — two nested rectangles (per Figma reference, 56×56 grid)
  scrapbook: (
    <svg
      viewBox="0 0 56 56"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.76"
    >
      <rect x="9.34" y="4.66" width="37.33" height="46.67" rx="4" />
      <rect x="23.34" y="4.66" width="14" height="18.67" rx="2.5" />
    </svg>
  ),
  // Glass / bucket list
  glass: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <path d="M6 3h12l-1.4 16.2a2 2 0 0 1-2 1.8H9.4a2 2 0 0 1-2-1.8L6 3z" />
      <path d="M6.6 8h10.8" />
    </svg>
  ),
  // Community / two people
  community: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M16 4.5a3 3 0 0 1 0 7" />
      <path d="M17 14c2.8.5 5 2.9 5 6" />
    </svg>
  ),
  // Stacked layers / unified space
  stack: (
    <svg viewBox="0 0 24 24" {...stroke}>
      <path d="M12 3 2 8l10 5 10-5-10-5z" />
      <path d="M2 13l10 5 10-5" />
      <path d="M2 18l10 5 10-5" />
    </svg>
  ),
};

export default function FeatureIcons({ features = [] }) {
  return (
    <div
      className="case-features"
      style={{ "--case-feature-count": features.length }}
    >
      {features.map((feature, i) => (
        <div className="case-feature" key={i}>
          {typeof feature.icon === "string"
            ? ICONS[feature.icon] || null
            : feature.icon}
          <p className="case-feature-label">{feature.label}</p>
        </div>
      ))}
    </div>
  );
}
