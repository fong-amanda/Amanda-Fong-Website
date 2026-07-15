import React from "react";
import "./caseBlocks.css";

/*
 * A simple callout box holding a single paragraph of text. Use to highlight
 * a takeaway, quote, or key insight in the flow of a case study.
 *
 * Props:
 *   children - the paragraph text (or JSX)
 *   accent   - when true, uses the tinted green background variant
 */
export default function TextBox({ children, accent = false, className = "" }) {
  return (
    <div className={`case-textbox ${accent ? "accent" : ""} ${className}`.trim()}>
      <p>{children}</p>
    </div>
  );
}
