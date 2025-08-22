import React, { useEffect } from "react";
import Nav from "../NavigationBar";
import { Link } from "react-router-dom";
import "./home.css";
import Footer from "../Footer/footer";
import Portfolio from "../Portfolio";

function Home() {
  // Scroll effect on load if the URL contains #my-work
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash === "my-work") {
      // Use regular DOM scrolling instead of react-scroll
      const element = document.getElementById("my-work");
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, []);

  return (
    <div>
      <Nav />
      <div className="intro-container">
        <div className="middle">
          <h2 className="fade1">
            {" "}
            Hey, I'm <span className="amanda">Amanda!👋</span>
          </h2>

          <h3>
            Crafting Inclusive Digital Solutions
            <br />
            Through <span className="codeCreative">Code</span> &{" "}
            <span className="codeCreative">Creativity</span>
          </h3>
          <p className="fade3 indentPar">
            ⟡ Product Design Intern @{" "}
            <a
              href="https://s2nhealth.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              S2N Health
            </a>  | Design Producer @{" "}
            <a
              href="https://scout.camd.northeastern.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Scout
            </a>{" "}
          </p>
          <p className="fade3 indentPar">
            ⟡ Prev. SWE Intern @{" "}
            <a
              href="https://www.cboe.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cboe
            </a>
            &nbsp; | Prev. Cloud O365 Developer Co-Op @{" "}
            <a
              href="https://www.coverys.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Coverys
            </a>
          </p>
         
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
            srcSet="poloroid2.png 768w, poloroid2.png 1200w"
            alt="Poloroid"
          />
        </div>
        <br />
      </div>

      <div id="my-work" className="my-work">
        <Portfolio />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
