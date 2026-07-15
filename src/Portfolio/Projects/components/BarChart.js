import React from "react";
import "./caseBlocks.css";

/*
 * A single-series horizontal bar chart. Each bar is directly labeled with its
 * value (so it stays readable without relying on color), and bars share the
 * site's sage accent.
 *
 * Props:
 *   data   - array of { label, value }
 *   title  - optional chart title
 *   max    - optional axis max (defaults to the largest value)
 *   unit   - optional string appended to each value label, e.g. "%"
 */
export default function BarChart({ data = [], title, max, unit = "" }) {
  const ceiling = max || Math.max(...data.map((d) => d.value), 0) || 1;

  return (
    <figure className="case-chart">
      {title && <figcaption className="case-chart-title">{title}</figcaption>}
      {data.map((d, i) => {
        const pct = Math.max(0, Math.min(100, (d.value / ceiling) * 100));
        return (
          <div className="case-bar-row" key={i}>
            <span className="case-bar-label">{d.label}</span>
            <div
              className="case-bar-track"
              role="img"
              aria-label={`${d.label}: ${d.value}${unit}`}
            >
              <div className="case-bar-fill" style={{ width: `${pct}%` }} />
            </div>
            <span className="case-bar-value">
              {d.value}
              {unit}
            </span>
          </div>
        );
      })}
    </figure>
  );
}
