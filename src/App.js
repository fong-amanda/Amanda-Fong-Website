import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Play from "./Play";
import Scrapbook from "./Scrapbook";
import FixLeakProcess from "./Portfolio/Projects/FixLeak/fix-a-leak";
import SpotifyProcess from "./Portfolio/Projects/Spotify/spotify";
import FusionCulturesProjects from "./Portfolio/Projects/FusionCultures/fusion-of-cultures";
import DisruptProcess from "./Portfolio/Projects/Disrupt/disrupt";
import FinancesProcess from "./Portfolio/Projects/YouthfulFinaces/finances";
import CherryProcess from "./Portfolio/Projects/CherryCrisis/cherryCrisis";
import HippoProcess from "./Portfolio/Projects/Hippo/hippo";
import LavanProcess from "./Portfolio/Projects/LavanBeauty/lavan";
import ThreeStonesProcess from "./Portfolio/Projects/ThreeStones/threeStones";
import DearlyProcess from "./Portfolio/Projects/Dearly/dearly";

import Cursor from "./Cursor/cursor";

function App() {
  return (
    <Router>
      <div>
        <Cursor /> {/* Add the cursor component here, outside Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/my-work" element={<Home />} />

          <Route path="/scrapbook" element={<Scrapbook />} />
          <Route path="/about" element={<About />} />
          <Route path="/play" element={<Play />} />
          <Route path="/fix-a-leak" element={<FixLeakProcess />} />
          <Route path="/spotify" element={<SpotifyProcess />} />
          <Route
            path="/fusion-of-cultures"
            element={<FusionCulturesProjects />}
          />
          <Route path="/disrupt" element={<DisruptProcess />} />
          <Route path="/cosmic-finances" element={<FinancesProcess />} />
          <Route path="/cherry-crisis" element={<CherryProcess />} />
          <Route path="/student-activity-calendar" element={<HippoProcess />} />
          <Route path="/lavan" element={<LavanProcess />} />
          <Route path="/three-stones" element={<ThreeStonesProcess />} />
          <Route path="/dearly" element={<DearlyProcess />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
