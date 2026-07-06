import React, { useEffect } from "react";
import Nav from "../../../NavigationBar";
import Footer from "../../../Footer/footer";
import { LightboxProvider } from "./LightboxContext";
import "../projects.css";
import "./caseStudy.css";

/*
 * Outer shell shared by every case-study page: navigation, scroll-to-top on
 * mount, the shared lightbox provider, and the footer. Page content goes in
 * as children.
 */
export default function CaseStudyLayout({ children }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <LightboxProvider>
      <Nav />
      <br />
      {children}
      <Footer />
    </LightboxProvider>
  );
}
