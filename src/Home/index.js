import React, { useEffect } from "react";
import Nav from "../NavigationBar";
import Portfolio from "../Portfolio";
import { Element, scroller } from 'react-scroll'; 
import { Link } from "react-router-dom"
import "./home.css";

function Home() {
    useEffect(() => {
        const hash = window.location.hash.substring(1);
        if (hash === "my-work") {
            scroller.scrollTo("my-work", {
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
                    <h1 className="fade1">Hey, I'm <span className="amanda">Amanda!</span>*:･ﾟ✧*:･ﾟ✧</h1>
                    <h2 className="fade2">Driven by a passion for both design and software development.</h2>
                    <h3 className="fade2">Striving to create a digital world that welcomes and empowers all users.</h3>
                    <p className="fade3">✧ Incoming IT Co-Op @ <a href="https://www.coverys.com/" target="_blank"
                        rel="noopener noreferrer">Coverys</a> | UI/UX Studio Designer @ <a
                            href="https://scout.camd.northeastern.edu/" target="_blank" rel="noopener noreferrer">Scout</a> |
                        Marketing Designer @ <a href="https://www.freetelehealth.org/" target="_blank"
                            rel="noopener noreferrer">Hermes Telehealth</a>.
                    </p>

                    <p className="fade3">✧ Studying Computer Science & Interaction Design @
                        <a href="https://www.northeastern.edu/" target="_blank" rel="noopener noreferrer"> Northeastern
                            University</a>
                    </p>
                    <div className="container-button fade4">
                        <Link to="/About">
                            <button>More About Me!</button>
                        </Link>
                    </div>
                </div>
                <br />
            </div>
            <Element name="my-work" className="my-work">
                <Portfolio />
            </Element>

        </div>
    );
}

export default Home;
