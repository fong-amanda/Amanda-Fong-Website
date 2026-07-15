import React from "react";
import "./caseBlocks.css";
import "../../portfolio.css";


/*
 * Case-study title with the skills/disciplines line beneath it. Pass `tags`
 * (an array of strings) to render them as bordered chips, or `subtitle` (a
 * string) for the plain-text treatment used on older pages.
 */
export default function CaseHeader({ title, subtitle, tags }) {
  return (
    <section id="header" className="title-header">
      <h1>{title}</h1>
      {tags && tags.length > 0 ? (
        <div className="project-tags">
          {tags.map((tag, i) => (
            <span className="tag" key={i}>
              {tag}
            </span>
          ))}
        </div>
      ) : (
        subtitle && <h4 className="case-subtitle">{subtitle}</h4>
      )}
    </section>
  );
}
