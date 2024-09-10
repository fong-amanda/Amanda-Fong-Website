import React from "react";
import FixLeak from "./Projects/FixLeak/index";
import Spotify from "./Projects/Spotify/index";
import FusionCultures from "./Projects/FusionCultures/index";
import Disrupt from "./Projects/Disrupt/index"
import "./portfolio.css";
import { useState, useRef } from "react";
import Finances from "./Projects/YouthfulFinaces";
import Hippo from "./Projects/Hippo";
import CherryCrisis from "./Projects/CherryCrisis";

function Portfolio() {
  const [headerVisible, setHeaderVis] = useState(false);
  const headerRef = useRef();

  const [fixVisible, setFixVis] = useState(false);
  const fixRef = useRef();

  const [spotifyVisible, setSpotifyVis] = useState(false);
  const spotifyRef = useRef();

  const [fusionVisible, setFusionVis] = useState(false);
  const fusionRef = useRef();

  const [disruptVisible, setDisruptVis] = useState(false);
  const disruptRef = useRef();

  const [financesVisible, setFinancesVis] = useState(false);
  const financesRef = useRef();

  const [hippoVisible, setHippoVis] = useState(false);
  const hippoRef = useRef();

  const [cherryVisible, setCherryVis] = useState(false);
  const cherryRef = useRef();

  React.useEffect(() => {
    const headerObserver = new IntersectionObserver(entries => {
      setHeaderVis(entries[0].isIntersecting);
    });
    headerObserver.observe(headerRef.current);
  }, [headerRef]);

  React.useEffect(() => {
    const fixObserver = new IntersectionObserver(entries => {
      setFixVis(entries[0].isIntersecting);
    });
    fixObserver.observe(fixRef.current);
  }, [fixRef]);


  React.useEffect(() => {
    const spotifyObserver = new IntersectionObserver(entries => {
      setSpotifyVis(entries[0].isIntersecting);
    });
    spotifyObserver.observe(spotifyRef.current);
  }, [spotifyRef]);

  React.useEffect(() => {
    const fusionObserver = new IntersectionObserver(entries => {
      setFusionVis(entries[0].isIntersecting);
    });
    fusionObserver.observe(fusionRef.current);
  }, [fusionRef]);

  React.useEffect(() => {
    const disruptObserver = new IntersectionObserver(entries => {
      setDisruptVis(entries[0].isIntersecting);
    });
    disruptObserver.observe(disruptRef.current);
  }, [disruptRef]);

  React.useEffect(() => {
    const financesObserver = new IntersectionObserver(entries => {
      setFinancesVis(entries[0].isIntersecting);
    });
    financesObserver.observe(financesRef.current);
  }, [financesRef]);

  React.useEffect(() => {
    const hippoObserver = new IntersectionObserver(entries => {
      setHippoVis(entries[0].isIntersecting);
    });
    hippoObserver.observe(hippoRef.current);
  }, [hippoRef]);

  React.useEffect(() => {
    const cherryObserver = new IntersectionObserver(entries => {
      setCherryVis(entries[0].isIntersecting);
    });
    cherryObserver.observe(cherryRef.current);
  }, [hippoRef]);
  return (
    <div id="myWork" className="my-work-section">
      <h1
        className={`fade-in ${headerVisible ? "visible" : ""}`}
        ref={headerRef}
      >
        <center>My Work !</center>
      </h1>
      <div className="my-work">
        <div ref={disruptRef} className={`fade-in projectProcess ${disruptVisible ? "visible" : ""}`}>
          <Disrupt />
        </div>
        <div ref={cherryRef} className={`fade-in projectProcess ${cherryVisible ? "visible" : ""}`}>
          <CherryCrisis />

        </div>
        <div ref={fixRef} className={`fade-in projectProcess ${fixVisible ? "visible" : ""}`}>
          <FixLeak />
        </div>

        <div ref={spotifyRef} className={`fade-in projectProcess ${spotifyVisible ? "visible" : ""}`}>
          <Spotify />
        </div>
        <div ref={financesRef} className={`fade-in projectProcess ${financesVisible ? "visible" : ""}`}>
          <Finances />
        </div>
        <div ref={fusionRef} className={`fade-in projectProcess ${fusionVisible ? "visible" : ""}`}>
          <FusionCultures />
        </div>




      </div>
      <div>
        <h1
          className={`fade-in ${headerVisible ? "visible" : ""}`}
          ref={headerRef}
        >
          <center>Works In Progress...</center>
        </h1>
        <div className="WIP">
          <div ref={hippoRef} className={`fade-in projectProcess ${hippoVisible ? "visible" : ""}`}>
            <Hippo />

          </div>
          <br />

        </div>

      </div>
    </div>
  )
}
export default Portfolio;