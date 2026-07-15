import React from "react";
import "./caseBlocks.css";

/*
 * A row of pull-quotes, each with a green left border and an attribution line
 * (e.g. key user-interview quotes). Defaults to three across, collapsing to a
 * single column on narrow screens.
 *
 * Props:
 *   quotes - array of { quote, attribution }
 */
export default function QuoteColumns({ quotes = [] }) {
  return (
    <div className="case-quotes">
      {quotes.map((q, i) => (
        <blockquote className="case-quote" key={i}>
          <p className="case-quote-text">"{q.quote}"</p>
          {q.attribution && (
            <span className="case-quote-attr">— {q.attribution}</span>
          )}
        </blockquote>
      ))}
    </div>
  );
}
