import React from "react";
import "./caseBlocks.css";

/*
 * Structured columns for user personas and workflows: each column has a top
 * rule, a green eyebrow label, a title, and one or more labeled sections.
 * A section renders either an arrow-bullet list (`items`) or a paragraph
 * (`text`).
 *
 * Props:
 *   columns - array of {
 *     eyebrow,          // small green label, e.g. "User Type 1"
 *     title,            // e.g. "Travel-Documenters"
 *     sections: [ { label, items } | { label, text } ]
 *   }
 */
export default function InfoColumnsNoBrownHeader({ columns = [] }) {
  return (
    <div className="case-info-columns">
      {columns.map((col, i) => {
        const sections = col.sections || [];
        // Arrow-list sections render inline; text sections (Task / Goal) are
        // grouped together under a single green left-rule.
        const listSections = sections.filter((s) => s.items);
        const metaSections = sections.filter((s) => !s.items);
        return (
          <div className="nocase-info-col" key={i}>
            {col.eyebrow && <p className="case-info-eyebrow">{col.eyebrow}</p>}
            {col.title && <h3 className="case-info-title">{col.title}</h3>}

            {listSections.map((section, s) => (
              <div className="case-info-section" key={s}>
                {section.label && <p className="case-label">{section.label}</p>}
                <ul className="case-arrow-list">
                  {section.items.map((item, k) => (
                    <li key={k}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}

            {metaSections.length > 0 && (
              <div className="case-info-meta">
                {metaSections.map((section, s) => (
                  <div className="case-info-meta-item" key={s}>
                    {section.label && (
                      <p className="case-label case-label-quiet">
                        {section.label}
                      </p>
                    )}
                    <p>{section.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
