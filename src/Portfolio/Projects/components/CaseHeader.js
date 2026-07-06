import React from "react";

/*
 * Case-study title + subtitle. The subtitle (the list of skills/disciplines)
 * is rendered at a single consistent heading level across every page.
 */
export default function CaseHeader({ title, subtitle }) {
  return (
    <section id="header" className="title-header">
      <h1>{title}</h1>
      {subtitle && <h4 className="case-subtitle">{subtitle}</h4>}
    </section>
  );
}
