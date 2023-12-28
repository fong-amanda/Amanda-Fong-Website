import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import homeImage from "../Images/AFongLogo.png";
import { Element, scroller } from 'react-scroll';

import "./nav.css";
import { withRouter } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

function Nav() {
  const [activeLink, setActiveLink] = useState("Home");

  const handleScrollToPortfolio = () => {
    const path = window.location.pathname;

    if (path === "/home") {
      // If on the home page, use smooth scroll
      scroller.scrollTo("portfolio-section", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    } else {
      // If on another page, use regular navigation
      // Adjust the path as needed
      window.location.href = "/home#portfolio-section";
    }
  };

  useEffect(() => {
    const path = window.location.pathname;

    console.log("Current pathname:", path);
    console.log("Current activeLink:", activeLink);

    if (path === "/home") {
      setActiveLink("Home");
    } else if (path === "/scrapbook") {
      setActiveLink("Scrapbook");
    } else if (path === "/play") {
      setActiveLink("Play")
    } else if (path === "/about") {
      setActiveLink("About")
    } else {
      setActiveLink(null);
    }
  }, [window.location.pathname]);

  return (

    <nav className="logo nav">
      <div className="logo">
        <NavLink to="/Home" className={` ${activeLink === "Home" ? "active" : ""}`}>
          <img src={homeImage} alt="Amanda Fong's Logo" width="120px" height="120px" />
        </NavLink>
      </div>
      <div className="header-right">
        <NavLink to="/Home#my-work" className={` ${activeLink === "Home" ? "active" : ""}`}
          onClick={handleScrollToPortfolio}
        >
          My Work
        </NavLink>


        <NavLink to="/Scrapbook" className={` ${activeLink === "Scrapbook" ? "active" : ""}`}>
          Scrapbooking
        </NavLink>
        <NavLink to="/Play" className={`${activeLink === "Play" ? "active" : ""}`}>
          Play
        </NavLink>
        <NavLink to="/About" className={` ${activeLink === "About" ? "active" : ""}`}>
          About
        </NavLink>

      </div>
    </nav>
  );
}

export default Nav;
