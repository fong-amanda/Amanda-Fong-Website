import React from "react";
import "./caseBlocks.css";

/*
 * A row of big-number metric cards for headline results
 * (e.g. "91% task success", "3x faster onboarding").
 *
 * Props:
 *   stats - array of { value, label }, e.g.
 *           [{ value: "91%", label: "Task success rate" }, ...]
 */
export default function StatCallout({ stats = [] }) {
  return (
    <div className="case-stats">
      {stats.map((stat, i) => (
        <div className="case-stat-card" key={i}>
          <div className="case-stat-value">{stat.value}</div>
          <div className="case-stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
