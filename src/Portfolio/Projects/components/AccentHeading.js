import React from "react";
import "./caseBlocks.css";

/*
 * A green numbered subsection heading with a full-width rule beneath it, as in
 * the Wanderly layout (e.g. "01 | The Problem"). Pass a `number` to get the
 * "NN | Title" treatment, or just a `title` on its own.
 *
 * Props:
 *   number - optional leading number, e.g. "01"
 *   title  - the heading text
 *   as     - heading level to render (default "h2")
 */
export default function AccentHeading({ number, title, as: Tag = "h2" }) {
  // Pad single-digit numbers with a leading zero, e.g. 1 -> "01" (2 stays "02").
  const num =
    number === undefined || number === null || number === ""
      ? null
      : String(number).padStart(2, "0");
  return (
    <div className="case-accent-heading">
      <Tag className="case-accent-title">
        {num && <span className="case-accent-num">{num} | </span>}
        {title}
      </Tag>
      <hr className="case-accent-rule" />
    </div>
  );
}
