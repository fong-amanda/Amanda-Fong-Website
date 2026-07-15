import React from "react";
import "./caseBlocks.css";

/*
 * The overview block: project summary + prototype/asset links on the left,
 * and structured metadata (Role / Team / Timeline / Tools) on the right.
 * Labels use the small green case-label style; the right-hand metadata rows
 * are separated by thin rules.
 *
 * Props:
 *   overview  - string or JSX for the project summary
 *   links     - [{ label, href }] rendered as external links
 *   role      - string
 *   team      - a string ("Solo Project!") OR [{ role, people }] groups
 *   timeline  - string
 *   tools     - string
 */
export default function CaseOverview({
  overview,
  links = [],
  role,
  team,
  timeline,
  tools,
}) {
  return (
    <section id="overview-section" className="overview-section">
      <div className="overview">
        <div className="overviewLeft">
          <p className="case-label">Project Overview</p>
          {typeof overview === "string" ? <p>{overview}</p> : overview}
          {links.map((link, i) => (
            <p className="case-ov-link" key={i}>
              <a href={link.href} target="_blank" rel="noreferrer">
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            </p>
          ))}
        </div>

        <div className="overviewRight">
          {role && (
            <div className="case-ov-row">
              <p className="case-label">Role</p>
              <p className="case-ov-value">{role}</p>
            </div>
          )}

          {team && (
            <div className="case-ov-row">
              <p className="case-label">Team</p>
              {typeof team === "string" ? (
                <p className="case-ov-value">{team}</p>
              ) : (
                <div className="case-team">
                  {team.map((group, i) => (
                    <div className="case-team-group" key={i}>
                      <h6>{group.role}</h6>
                      <p>{group.people}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {timeline && (
            <div className="case-ov-row">
              <p className="case-label">Timeline</p>
              <p className="case-ov-value">{timeline}</p>
            </div>
          )}

          {tools && (
            <div className="case-ov-row">
              <p className="case-label">Tools</p>
              <p className="case-ov-value">{tools}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
