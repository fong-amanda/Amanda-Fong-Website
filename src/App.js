import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Play from './Play';
import Scrapbook from './Scrapbook';
import FixLeakProcess from './Portfolio/Projects/FixLeak/fix-a-leak'
import SpotifyProcess from './Portfolio/Projects/Spotify/spotify'
import FusionCulturesProjects from './Portfolio/Projects/FusionCultures/fusion-of-cultures'
import DisruptProcess from './Portfolio/Projects/Disrupt/disrupt'
import ChinatownIndividual from './Portfolio/Projects/FusionCultures/fusion-of-cultures/chinatown';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/scrapbook" element={<Scrapbook />} />
        <Route path="/about" element={<About />} />
        <Route path="/play" element={<Play />} />
        <Route path="/fix-a-leak" element={<FixLeakProcess />} />
        <Route path="/spotify" element={<SpotifyProcess />} />
        <Route path="/fusion-of-cultures" element={<FusionCulturesProjects />} />
        <Route path="/disrupt" element={<DisruptProcess />} />
        
        <Route path="/chinatown" element={<ChinatownIndividual />} />


      </Routes>
    </Router>
  );
}

export default App;
