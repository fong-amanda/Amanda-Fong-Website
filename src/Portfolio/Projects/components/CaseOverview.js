import React from "react";

/*
 * The overview block: project summary + prototype/asset links on the left,
 * and structured metadata (Role / Team / Timeline / Tools) on the right.
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
          <h5>Project Overview</h5>
          {typeof overview === "string" ? <p>{overview}</p> : overview}
          {links.length > 0 && <br />}
          {links.map((link, i) => (
            <h5 key={i}>
              <a href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            </h5>
          ))}
        </div>

        <div className="overviewRight">
          {role && (
            <>
              <h5>Role</h5>
              <p>{role}</p>
            </>
          )}

          {team && (
            <>
              <h5>Team</h5>
              {typeof team === "string" ? (
                <p>{team}</p>
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
            </>
          )}

          {timeline && (
            <>
              <h5>Timeline</h5>
              <p>{timeline}</p>
            </>
          )}

          {tools && (
            <>
              <h5>Tools</h5>
              <p>{tools}</p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
