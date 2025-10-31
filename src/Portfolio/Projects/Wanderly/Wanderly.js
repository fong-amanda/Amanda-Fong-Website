import React, { useEffect } from "react";
import Nav from "../../../NavigationBar";
import Footer from "../../../Footer/footer";
// import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

function WanderlyProcess() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Nav />
      <br />
      <section className="cover-image">
        <div className="image-background">
          <div className="image-background-container">
            {/* <img style={{ cursor: "auto" }} src="/.jpg" alt="Cherry Landscape" /> */}
          </div>
        </div>
      </section>

      <section id="header" className="title-header">
        <h1 style={{ color: "#1C1A1A" }}>Wanderly</h1>
        <h2>
          Mobile App Design, Prototyping, User Testing & Research, Branding{" "}
        </h2>
      </section>

      <section id="overview-section" className="overview-section">
        <div className="overview">
          <div className="overviewLeft lavan">
            <h5 style={{ color: "#1C1A1A" }}>Project Overview</h5>
            <p>
              Wanderly is your travel companion, combining creativity, planning,
              and connection. With personalized bucket lists, auto-generated
              scrapbooks, and a curated traveler network, Wanderly enhances your
              meaningful moments on your journey.
            </p>{" "}
            <br />
            <h5 style={{ color: "#1C1A1A" }} className="lavan">
              This project is still in progress! Come back soon for updates.
            </h5>
            {/* <h5 className="lavan">
                            <a
                                href="https://www.figma.com/proto/ldXYpkEbm49gv0sqzXp0pF/Disrupt-Hi-Fis?page-id=0%3A1&type=design&node-id=1-634&viewport=5733%2C1774%2C0.52&t=1vSW2QCw22ftuLHh-1&scaling=min-zoom&starting-point-node-id=1%3A50&mode=design"
                                target="_blank" rel="noreferrer"
                            >
                                High-Fidelity Prototype
                            </a>
                        </h5>
                        <h5 className="hippo">
                            <a
                                href="https://www.disruptneu.com/"
                                target="_blank" rel="noreferrer"
                            >
                                Deployed Site
                            </a>
                        </h5> */}
          </div>

          <div className="overviewRight lavan">
            <h5 style={{ color: "#1C1A1A" }}>Role</h5>
            <p>Software Designer</p>

            <h5 style={{ color: "#1C1A1A" }}>Team</h5>
            <div className="three-columns-container">
              <div className="column">
                <p>Solo Project!</p>
              </div>
            </div>
            <h5 style={{ color: "#1C1A1A" }}>Timeline</h5>
            <p>January 2025 - April 2025</p>

            <h5 style={{ color: "#1C1A1A" }}>Tools</h5>
            <p>Figma</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default WanderlyProcess;
