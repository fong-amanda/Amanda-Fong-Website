import React, { useEffect } from "react";
import Nav from "../NavigationBar";
// import Portfolio from "../Portfolio";
import { Element, scroller } from "react-scroll";
import { Link } from "react-router-dom";
import "./home.css";
import Footer from "../Footer/footer";
import Design from "../Portfolio/design";

function Home() {
  // Scroll effect on load if the URL contains #my-work
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
          <h1 className="fade1">
            Hey, I'm <span className="amanda">Amanda!👋</span>
          </h1>
          {/* <h2 className="fade2">Driven by a passion for both design and software development.</h2> */}
          <h3 className="fade3">
            Striving to create a digital world that welcomes and empowers all
            users.
          </h3>
          <p className="fade3">
            Prev. Microsoft Cloud O365 Developer Co-Op @{" "}
            <a
              href="https://www.coverys.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Coverys
            </a>
          </p>
          <p className="fade3">
            Design Lead @{" "}
            <a
              href="https://scout.camd.northeastern.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Scout
            </a>{" "}
            | Software Designer @{" "}
            <a
              href="https://generatenu.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Generate
            </a>
          </p>

          <p className="fade3">
            Studying Computer Science & Interaction Design @
            <a
              href="https://www.northeastern.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Northeastern
            </a>
          </p>
          <p className="fade3">Based In Boston, MA & Long Island, NY</p>
          <div className="container-button fade4">
            <Link to="/About">
              <button>More About Me!</button>
            </Link>
          </div>
        </div>
        <div className="middleImage">
          <img
            className="fade1"
            src="/poloroid2.png"
            srcset="poloroid2.png 768w, poloroid2.png 1200w"
            alt="Poloroid"
          />
        </div>
        <br />
      </div>

      <Element name="my-work" className="my-work">
        {/* <Portfolio /> */}
        <Design />
      </Element>
      <Footer />
    </div>
  );
}

export default Home;
