import React from "react";
import FixLeak from "./Projects/FixLeak/index";
import Spotify from "./Projects/Spotify/index";
import FusionCultures from "./Projects/FusionCultures/index";
import Disrupt from "./Projects/Disrupt/index"
function Portfolio() {
  return (

    <div id="myWork" className="my-work">
      <h1 className="myWorkHeader">
        <center>My Work !</center>
      </h1>

      <div className="portfolio-section">
        <FixLeak />
        <Spotify />
        <FusionCultures />
        <Disrupt/>


      </div>
    </div>
  );
}

export default Portfolio;
