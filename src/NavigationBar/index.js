import React, { useState, useEffect } from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import homeImage from "../Images/AFongLogo2.png";
import "./nav.css";

function NavigationBar() {
  const [activeLink, setActiveLink] = useState("Home");

  const handleScrollToPortfolio = (e) => {
    e.preventDefault(); // Prevent any default behavior
    const path = window.location.pathname;

    if (path === "/Home" || path === "/home" || path === "/") {
      // Use regular DOM scrolling
      const element = document.getElementById("my-work");
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    } else {
      window.location.href = "/Home#my-work";
    }
  };

  useEffect(() => {
    const path = window.location.pathname;

    if (path === "/Home" || path === "/home" || path === "/") {
      setActiveLink("Home");
    } else if (path === "/Scrapbook" || path === "/scrapbook") {
      setActiveLink("Scrapbook");
    } else if (path === "/Play" || path === "/play") {
      setActiveLink("Play");
    } else if (path === "/About" || path === "/about") {
      setActiveLink("About");
    } else {
      setActiveLink(null);
    }
  }, []);

  return (
    <Navbar className="full-nav" expand="md" bg="" variant="">
      <Navbar.Brand as={NavLink} to="/Home" className={`${activeLink === "Home" ? "active" : ""} logo`}>
        <img src={homeImage} alt="Amanda Fong's Logo" width="174px" height="90px" />
      </Navbar.Brand>
      <Navbar.Toggle className="navbar-toggler" />
      
      <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavLink
            to="/Home#my-work"
            onClick={handleScrollToPortfolio}
            className={`nav-link ${activeLink === "Home" ? "active" : ""}`}
          >
            My Work
          </NavLink>
          
          <NavLink
            to="/Play"
            className={`nav-link ${activeLink === "Play" ? "active" : ""}`}
          >
            Play
          </NavLink>
          
          {/* <NavLink
            to="/Scrapbook"
            className={`nav-link ${activeLink === "Scrapbook" ? "active" : ""}`}
          >
            Scrapbooking
          </NavLink> */}
          
          <NavLink
            to="/About"
            className={`nav-link ${activeLink === "About" ? "active" : ""}`}
          >
            About
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;