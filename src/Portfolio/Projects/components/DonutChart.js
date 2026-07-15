import React from "react";
import "./caseBlocks.css";

/*
 * A pie / donut chart for showing parts of a whole (e.g. a breakdown of survey
 * responses). Uses a validated, colorblind-safe categorical palette. Identity
 * is never color-alone: every slice is named in the legend with its percentage
 * shown directly, and the center can hold a headline label.
 *
 * Props:
 *   data      - array of { label, value }  (raw values; percentages computed)
 *   title     - optional chart title
 *   centerLabel - optional text shown in the donut hole
 *   donut     - when true (default) renders a donut; false renders a full pie
 */

// Validated categorical palette (dataviz validator: all checks pass, light mode).
const PALETTE = [
  "#3f9b6e", // sage (site accent family)
  "#e07b3e", // terracotta
  "#3f7fb5", // blue
  "#cf5a80", // rose
  "#c99a2e", // gold
  "#7d5fb0", // purple
];

const CIRCUMFERENCE = 100; // r chosen so circumference == 100 (percent-friendly)
const RADIUS = 15.9155;
const GAP = 0.6; // 2px-ish surface gap between slices

export default function DonutChart({
  data = [],
  title,
  centerLabel,
  donut = true,
}) {
  const total = data.reduce((sum, d) => sum + d.value, 0) || 1;
  const strokeWidth = donut ? 7 : RADIUS; // a full pie fills to the center

  let offset = 25; // start the first slice at the top (12 o'clock)
  const slices = data.map((d, i) => {
    const pct = (d.value / total) * 100;
    const dash = Math.max(pct - GAP, 0);
    const slice = {
      color: PALETTE[i % PALETTE.length],
      dasharray: `${dash} ${CIRCUMFERENCE - dash}`,
      dashoffset: offset,
      label: d.label,
      pct,
    };
    offset -= pct; // move the start point for the next slice
    return slice;
  });

  return (
    <figure className="case-chart">
      {title && <figcaption className="case-chart-title">{title}</figcaption>}

      <svg viewBox="0 0 42 42" width="220" height="220" role="img"
        aria-label={title || "Donut chart"} style={{ display: "block", margin: "0 auto" }}>
        <circle cx="21" cy="21" r={RADIUS} fill="transparent"
          stroke="#eceae4" strokeWidth={donut ? 7 : 0} />
        {slices.map((s, i) => (
          <circle
            key={i}
            cx="21"
            cy="21"
            r={RADIUS}
            fill="transparent"
            stroke={s.color}
            strokeWidth={strokeWidth}
            strokeDasharray={s.dasharray}
            strokeDashoffset={s.dashoffset}
          >
            <title>{`${s.label}: ${s.pct.toFixed(0)}%`}</title>
          </circle>
        ))}
        {donut && centerLabel && (
          <text x="21" y="21" textAnchor="middle" dominantBaseline="central"
            style={{ fontFamily: "'Libre Bodoni', serif", fontSize: 5, fill: "#60946e", fontWeight: 600 }}>
            {centerLabel}
          </text>
        )}
      </svg>

      <div className="case-chart-legend">
        {slices.map((s, i) => (
          <span className="case-legend-item" key={i}>
            <span className="case-legend-swatch" style={{ backgroundColor: s.color }} />
            {s.label} ({s.pct.toFixed(0)}%)
          </span>
        ))}
      </div>
    </figure>
  );
}
