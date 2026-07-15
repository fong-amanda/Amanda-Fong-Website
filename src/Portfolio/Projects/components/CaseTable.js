import React from "react";
import "./caseBlocks.css";

/*
 * A styled data table for case studies.
 *
 * Props:
 *   headers - array of column header strings, e.g. ["Metric", "Before", "After"]
 *   rows    - array of row arrays, e.g. [["Task success", "62%", "91%"], ...]
 *             (cells may be strings or JSX)
 *   caption - optional caption shown above the table
 */
export default function CaseTable({ headers = [], rows = [], caption }) {
  return (
    <div className="case-table-wrap">
      <table className="case-table">
        {caption && <caption>{caption}</caption>}
        {headers.length > 0 && (
          <thead>
            <tr>
              {headers.map((h, i) => (
                <th key={i} scope="col">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {rows.map((row, r) => (
            <tr key={r}>
              {row.map((cell, c) => (
                <td key={c}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
