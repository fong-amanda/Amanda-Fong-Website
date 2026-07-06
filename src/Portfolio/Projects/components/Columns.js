import React from "react";

/*
 * Responsive multi-column layout. Each direct child is placed in its own
 * column. Defaults to the shared `two-columns-container` styling; pass
 * `className`/`columnClassName` for variants (e.g. the showcase grid).
 */
export default function Columns({
  children,
  className = "two-columns-container",
  columnClassName = "column",
}) {
  return (
    <div className={className}>
      {React.Children.map(children, (child) =>
        child == null ? null : <div className={columnClassName}>{child}</div>
      )}
    </div>
  );
}
