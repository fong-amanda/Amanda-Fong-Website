import React from "react";

/* Full-width cover image at the top of a case study. */
export default function CaseCover({ src, alt = "" }) {
  return (
    <section className="cover-image">
      <div className="image-background">
        <div className="image-background-container">
          <img style={{ cursor: "auto" }} src={src} alt={alt} />
        </div>
      </div>
    </section>
  );
}
