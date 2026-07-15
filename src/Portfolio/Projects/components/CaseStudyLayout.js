import React, { useEffect } from "react";
import Nav from "../../../NavigationBar";
import Footer from "../../../Footer/footer";
import CaseNav from "./CaseNav";
import { LightboxProvider } from "./LightboxContext";
import "../projects.css";
import "./caseStudy.css";

/*
 * Outer shell shared by every case-study page: navigation, scroll-to-top on
 * mount, the shared lightbox provider, and the footer. Page content goes in
 * as children.
 *
 * `accent` recolors every heading/accent on the page (headings, rules, labels,
 * chart fills, table headers, and the scroll-spy nav highlight) by overriding
 * the single `--case-accent` token. Pass a preset from caseBlocks.css, e.g.
 * accent="var(--accent-blue)", or any raw color like accent="#c0563b". Omit it
 * to keep the default green.
 */
export default function CaseStudyLayout({ children, accent }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const style = accent ? { "--case-accent": accent } : undefined;

  return (
    <LightboxProvider>
      <div className="case-study" style={style}>
        <Nav />
        <CaseNav />
        {children}
        <Footer />
      </div>
    </LightboxProvider>
  );
}
