import React, { useId, useLayoutEffect } from "react";
import { useLightbox } from "./LightboxContext";

/*
 * A clickable case-study image that opens the shared lightbox.
 * No index bookkeeping required — it registers itself with the provider.
 */
export default function CaseImage({ src, alt = "", className, style }) {
  const id = useId();
  const { register, openTo } = useLightbox();

  useLayoutEffect(() => {
    register(id, { src, alt });
  }, [id, src, alt, register]);

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={{ cursor: "pointer", ...style }}
      onClick={() => openTo(id)}
    />
  );
}
