import React, { useEffect, useRef, useState, useCallback } from "react";
import "./caseBlocks.css";

/*
 * Floating scroll-spy navigation for case-study pages. Auto-collects the page's
 * landmarks (Project Overview, each SectionHeading, each numbered AccentHeading)
 * in document order.
 *
 * Behaviour:
 *  - Hidden over the landing cover; surfaces once you scroll past it, then fades
 *    out after you stop scrolling (or while hovered).
 *  - A focus window: the current section stays centered and crisp; the list
 *    glides so sections above/below drift into the top/bottom fade. Hover to
 *    scroll it yourself.
 *  - Main headings vs numbered sub-headings differ by weight/indent; the current
 *    + hovered items thicken slightly (never resize) and reveal an arrow.
 *  - A collapse toggle lets the reader dismiss it; the choice is remembered.
 */

const SCROLL_MARGIN = 110; // px from top that counts as "current"
const IDLE_HIDE = 1500; // ms of no scrolling before it fades away
const HIDE_BUFFER = 60; // extra px buffer so nav commits to hiding before cover reappears
const STORAGE_KEY = "caseNavCollapsed";

function slugify(text, i) {
  const base = (text || `section-${i}`)
    .toLowerCase()
    .replace(/^\s*\d+\s*[|.)-]?\s*/, "")
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return base || `section-${i}`;
}

export default function CaseNav() {
  const [sections, setSections] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [visible, setVisible] = useState(false);
  const [pastCover, setPastCover] = useState(false);
  const [collapsed, setCollapsed] = useState(() => {
    // Respect a remembered choice; otherwise start collapsed on small screens
    // (where it would crowd the content) so it opens via the toggle instead.
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored !== null) return stored === "1";
    } catch (e) {
      /* ignore */
    }
    return typeof window !== "undefined" && window.innerWidth <= 600;
  });
  const hoveringRef = useRef(false);
  const hideTimer = useRef(null);
  const navRef = useRef(null);
  const toggleRef = useRef(null);

  // Collect landmarks once the page content has rendered.
  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll(
        "#overview-section, .case-section-heading, .case-accent-heading"
      )
    );
    const seen = {};
    const collected = nodes.map((el, i) => {
      let label;
      let level = "main";
      if (el.id === "overview-section") {
        label = "Project Overview";
      } else if (el.classList.contains("case-section-heading")) {
        label = el.querySelector("h1")?.textContent || `Section ${i + 1}`;
      } else {
        label =
          el.querySelector(".case-accent-title")?.textContent ||
          `Section ${i + 1}`;
        level = "sub";
      }
      if (!el.id) {
        let id = slugify(label, i);
        if (seen[id]) {
          seen[id] += 1;
          id = `${id}-${seen[id]}`;
        } else {
          seen[id] = 1;
        }
        el.id = id;
      }
      el.style.scrollMarginTop = "96px";
      return { id: el.id, label: label.trim(), level };
    });
    setSections(collected);
  }, []);

  // Track scroll: past-cover gate, scroll-activity visibility, active section.
  useEffect(() => {
    if (sections.length === 0) return undefined;

    let ticking = false;
    let lastScrollY = window.scrollY; // NEW
    const compute = () => {
      ticking = false;
      let current = sections[0].id;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= SCROLL_MARGIN) {
          current = s.id;
        }
      }
      setActiveId(current);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(compute);
      }

      const currentY = window.scrollY;
      const scrollingUp = currentY < lastScrollY; // NEW
      lastScrollY = currentY; // NEW
      const cover = document.querySelector(".cover-image");
      if (cover && navRef.current) {
        const coverBottom = cover.getBoundingClientRect().bottom;
        const navTop = navRef.current.getBoundingClientRect().top;
        // how much of the nav's own box currently sits over the cover
        const overlap = Math.max(0, coverBottom - navTop);
        const clipValue = `inset(${overlap}px 0 0 0)`;
        navRef.current.style.clipPath = clipValue;
        if (toggleRef.current) toggleRef.current.style.clipPath = clipValue;
      } else if (navRef.current) {
        navRef.current.style.clipPath = "none";
        if (toggleRef.current) toggleRef.current.style.clipPath = "none";
      }
      const threshold = scrollingUp ? 90 - HIDE_BUFFER : 90; 
      const past = !cover
        ? window.scrollY > 150
        :  cover.getBoundingClientRect().bottom < threshold;
      setPastCover(past);
      if (past) {
        setVisible(true);
        clearTimeout(hideTimer.current);
        hideTimer.current = setTimeout(() => {
          if (!hoveringRef.current) setVisible(false);
        }, IDLE_HIDE);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      clearTimeout(hideTimer.current);
    };
  }, [sections]);

  // Scroll the list so the active section sits in the center focus band.
  useEffect(() => {
    if (hoveringRef.current || collapsed) return;
    const nav = navRef.current;
    if (!nav || !activeId) return;
    const el = nav.querySelector(`[data-navid="${activeId}"]`);
    if (!el) return;
    const navRect = nav.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    const delta =
      elRect.top + elRect.height / 2 - (navRect.top + navRect.height / 2);
    nav.scrollTo({ top: nav.scrollTop + delta, behavior: "smooth" });
  }, [activeId, sections, visible, collapsed]);

  const handleClick = useCallback((e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const toggleCollapsed = useCallback(() => {
    setCollapsed((c) => {
      const next = !c;
      try {
        localStorage.setItem(STORAGE_KEY, next ? "1" : "0");
      } catch (e) {
        /* ignore */
      }
      // When expanding, surface the nav immediately even if the page is idle
      // (visibility is otherwise driven by scroll activity), then let it fade
      // out normally after the idle window unless the reader is hovering it.
      if (!next) {
        setVisible(true);
        clearTimeout(hideTimer.current);
        hideTimer.current = setTimeout(() => {
          if (!hoveringRef.current) setVisible(false);
        }, IDLE_HIDE);
      }
      return next;
    });
  }, []);

  const onEnter = () => {
    hoveringRef.current = true;
    clearTimeout(hideTimer.current);
    setVisible(true);
  };
  const onLeave = () => {
    hoveringRef.current = false;
    clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setVisible(false), IDLE_HIDE);
  };

  if (sections.length < 2) return null;

  const toggleShown = collapsed ? pastCover : visible;

  return (
    <>
      <button
        ref={toggleRef} // NEW
        type="button"
        className={`case-nav-toggle ${toggleShown ? "visible" : ""}`}
        onClick={toggleCollapsed}
        aria-label={collapsed ? "Show section navigation" : "Hide section navigation"}
        aria-expanded={!collapsed}
        title={collapsed ? "Show sections" : "Hide sections"}
      >
        {collapsed ? (
          // list / menu icon
          <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true">
            <path
              d="M3 5h14M3 10h14M3 15h9"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        ) : (
          // close / collapse icon
          <svg viewBox="0 0 20 20" width="15" height="15" aria-hidden="true">
            <path
              d="M5 5l10 10M15 5L5 15"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        )}
      </button>

      <nav
        className={`case-nav ${visible && !collapsed ? "visible" : ""}`}
        aria-label="On this page"
        aria-hidden={collapsed}
        ref={navRef}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        <div className="case-nav-track">
          {sections.map(({ id, label, level }) => (
            <a
              key={id}
              data-navid={id}
              href={`#${id}`}
              title={label}
              className={`case-nav-item ${level} ${
                activeId === id ? "active" : ""
              }`}
              onClick={(e) => handleClick(e, id)}
            >
              <span className="case-nav-arrow" aria-hidden="true">
                →
              </span>
              <span className="case-nav-label">{label}</span>
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
