import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

/*
 * Shared lightbox for case-study pages.
 *
 * Instead of every page hand-maintaining a numeric index on each image AND a
 * parallel `slides={[...]}` array (which drift out of sync), <CaseImage />
 * registers itself here on mount. Registration happens in document order, so
 * the gallery's prev/next order matches the order images appear on the page,
 * and clicking any image opens the lightbox at that exact image.
 */
const LightboxContext = createContext(null);

export function useLightbox() {
  const ctx = useContext(LightboxContext);
  if (!ctx) {
    throw new Error("useLightbox must be used within a <LightboxProvider>");
  }
  return ctx;
}

// Lightbox slide sources are resolved from the site root; page <img> tags use
// root-relative paths. Normalize to a leading slash unless it's already
// absolute or a full URL.
const toSlideSrc = (src) =>
  /^(https?:)?\/\//.test(src) || src.startsWith("/") ? src : `/${src}`;

export function LightboxProvider({ children }) {
  const itemsRef = useRef([]); // [{ id, src, alt }] in registration (document) order
  const [, forceRender] = useState(0);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const register = useCallback((id, data) => {
    const items = itemsRef.current;
    const existing = items.findIndex((i) => i.id === id);
    if (existing === -1) {
      items.push({ id, ...data });
    } else {
      items[existing] = { id, ...data };
    }
    forceRender((n) => n + 1);
  }, []);

  const openTo = useCallback((id) => {
    const idx = itemsRef.current.findIndex((i) => i.id === id);
    setIndex(idx < 0 ? 0 : idx);
    setOpen(true);
  }, []);

  const value = useMemo(() => ({ register, openTo }), [register, openTo]);

  const slides = itemsRef.current.map((i) => ({
    src: toSlideSrc(i.src),
    ...(i.alt ? { title: i.alt } : {}),
  }));

  return (
    <LightboxContext.Provider value={value}>
      {children}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
        plugins={[Zoom]}
        zoom={{ maxZoomPixelRatio: 3, scrollToZoom: true }}
      />
    </LightboxContext.Provider>
  );
}
