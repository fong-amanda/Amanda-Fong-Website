import React, { useEffect } from "react";
import Nav from "../NavigationBar";
import Portfolio from "../Portfolio";
import { Element, scroller } from 'react-scroll';
import "../style.css";

function Home() {
    useEffect(() => {
        // Check for a hash in the URL
        const hash = window.location.hash.substring(1);
        if (hash === "portfolio-section") {
          // Scroll to the "portfolio-section" element after the component mounts
          scroller.scrollTo("portfolio-section", {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
          });
        }
      }, []);
    return (
        <div>
            <Nav />

            <div className="intro-container">
                <div className="middle">
                    <h1>Hey, I'm <span className="amanda">Amanda!</span>*:･ﾟ✧*:･ﾟ✧</h1>
                    <h2>Driven by a passion for both design and software development.</h2>
                    <h3>Striving to create a digital world that welcomes and empowers all users.</h3>
                    <p>✧ Incoming IT Co-Op @ <a href="https://www.coverys.com/" target="_blank"
                        rel="noopener noreferrer">Coverys</a> | UI/UX Studio Designer @ <a
                            href="https://scout.camd.northeastern.edu/" target="_blank" rel="noopener noreferrer">Scout</a> |
                        Marketing Designer @ <a href="https://www.freetelehealth.org/" target="_blank"
                            rel="noopener noreferrer">Hermes Telehealth</a>.
                    </p>

                    <p>✧ Studying Computer Science & Interaction Design @
                        <a href="https://www.northeastern.edu/" target="_blank" rel="noopener noreferrer">Northeastern
                            University</a>
                    </p>
                    <div className="container-button">
                        <a href="about.html"><button>More About Me!</button></a>
                    </div>
                </div>
                <br />
            </div>
            <Element name="portfolio-section" className="portfolio-section">
                <Portfolio />
            </Element>

        </div>
    );
}

export default Home;
