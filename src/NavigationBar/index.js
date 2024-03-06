import React, { useState, useEffect } from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import homeImage from "../Images/AFongLogo.png";
import { scroller } from 'react-scroll';
import "./nav.css";

function NavigationBar() {
  const [activeLink, setActiveLink] = useState("Home");

  const handleScrollToPortfolio = () => {
    const path = window.location.pathname;

    if (path === "/Home") {
      scroller.scrollTo("my-work", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    } else {
      window.location.href = "/Home#my-work";
    }
  };

  useEffect(() => {
    const path = window.location.pathname;

    if (path === "/home") {
      setActiveLink("Home");
    } else if (path === "/scrapbook") {
      setActiveLink("Scrapbook");
    } else if (path === "/play") {
      setActiveLink("Play");
    } else if (path === "/about") {
      setActiveLink("About");
    } else {
      setActiveLink(null);
    }
  }, []);

  return (
    <Navbar expand="md" bg="" variant="">
      <Navbar.Brand as={NavLink} to="/Home" className={activeLink === "Home" ? "active" : ""}>
        <img src={homeImage} alt="Amanda Fong's Logo" width="120px" height="120px" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav " />

      <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Nav className="ml-auto ">
          <NavLink
            as={NavLink}
            to="/Home#my-work"
            className={activeLink === "Home" ? "active" : ""}
            onClick={handleScrollToPortfolio}
          >
            My Work
          </NavLink>
          <NavLink
            as={NavLink}
            to="/Scrapbook"
            className={activeLink === "Scrapbook" ? "active" : ""}
          >
            Scrapbooking
          </NavLink>
          <NavLink
            as={NavLink}
            to="/Play"
            className={activeLink === "Play" ? "active" : ""}
          >
            Play
          </NavLink>
          <NavLink
            as={NavLink}
            to="/About"
            className={activeLink === "About" ? "active" : ""}
          >
            About
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
