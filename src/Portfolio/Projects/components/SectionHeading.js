import React from "react";
import "./caseBlocks.css";

/*
 * A top-level section heading. The divider rule sits ABOVE the title and spans
 * the full width of the viewport; the title uses the Atkinson Hyperlegible Next
 * heading face.
 */
export default function SectionHeading({ title }) {
  return (
    <div className="case-section-heading">
      <hr className="case-section-rule" />
      <h1>{title}</h1>
    </div>
  );
}
