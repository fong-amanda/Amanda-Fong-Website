import React from "react";

/*
 * The main written body of a case study (the "summary" region). Holds section
 * headings, paragraphs, images, and column layouts.
 */
export default function CaseBody({ children, className }) {
  return (
    <section className={["summary", className].filter(Boolean).join(" ")}>
      {children}
    </section>
  );
}
