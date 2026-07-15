import React from "react";
import "./caseBlocks.css";

/*
 * Three side-by-side columns, each with its own header and body. Collapses to
 * a single column on narrow screens.
 *
 * Usage — either pass a `columns` array:
 *   <ThreeColumns columns={[
 *     { header: "Empathize", body: "..." },
 *     { header: "Define",    body: <p>...</p> },
 *     { header: "Ideate",    body: "..." },
 *   ]} />
 *
 * ...or pass three children (each rendered as a column body) with matching
 * `headers`:
 *   <ThreeColumns headers={["A", "B", "C"]}>
 *     <div>...</div><div>...</div><div>...</div>
 *   </ThreeColumns>
 */
export default function ThreeColumns({ columns, headers = [], children }) {
  const items =
    columns ||
    React.Children.toArray(children).map((child, i) => ({
      header: headers[i],
      body: child,
    }));

  return (
    <div className="case-three-columns">
      {items.map((col, i) => (
        <div className="case-column-card" key={i}>
          {col.header && <h4 className="case-column-header">{col.header}</h4>}
          <div className="case-column-body">{col.body}</div>
        </div>
      ))}
    </div>
  );
}
