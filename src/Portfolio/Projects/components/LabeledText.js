import React from "react";
import "./caseBlocks.css";

/*
 * A two-column "label + body" row: a short muted label on the left and a
 * paragraph of body text on the right (e.g. the Problem Statement). Collapses
 * to stacked rows on narrow screens.
 *
 * Props:
 *   label    - the small left-hand label
 *   children - the body text (or JSX)
 */
export default function LabeledText({ label, children }) {
  return (
    <div className="case-labeled">
      <p className="case-labeled-label">{label}</p>
      <p className="case-labeled-body">{children}</p>
    </div>
  );
}
