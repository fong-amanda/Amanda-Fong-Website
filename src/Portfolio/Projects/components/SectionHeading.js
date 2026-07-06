import React from "react";

/* A top-level section heading with the divider used throughout case studies. */
export default function SectionHeading({ title }) {
  return (
    <>
      <h1>{title}</h1>
      <hr />
    </>
  );
}
