import React from "react";
import FixLeak from "./Projects/FixLeak/index";
import Spotify from "./Projects/Spotify/index";
import FusionCultures from "./Projects/FusionCultures/index";
import Disrupt from "./Projects/Disrupt/index"
import "./portfolio.css";
import { useState, useRef } from "react";

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


  // Create other observers

  return (
    <div id="myWork" className="my-work-section">
      <h1
        className={`fade-in ${headerVisible ? "visible" : ""}`}
        ref={headerRef}
      >
        <center>My Work !</center>
      </h1>
      <div className="my-work">
        <div ref={fixRef} className={`fade-in ${fixVisible ? "visible" : ""}`}>
          <FixLeak />
        </div>

        <div ref={spotifyRef} className={`fade-in ${spotifyVisible ? "visible" : ""}`}>
          <Spotify />
        </div>

        <div ref={fusionRef} className={`fade-in ${fusionVisible ? "visible" : ""}`}>
          <FusionCultures />
        </div>

        <div ref={disruptRef} className={`fade-in ${disruptVisible ? "visible" : ""}`}>
          <Disrupt />
        </div>
      </div>
    </div>
  )
}
export default Portfolio;