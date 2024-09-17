import React from 'react';
import Nav from '../NavigationBar';
import TasaRetreat from './tasaRetreat'
import "./scrapbook.css";

import { useState, useRef } from "react";
import Footer from '../Footer/footer';

const Scrapbook = () => {

  const [tasaRetreatVisible, setTasaRetreatVis] = useState(false);
  const tasaRetreatRef = useRef();



  React.useEffect(() => {
    const tasaRetreatObserver = new IntersectionObserver(entries => {
      setTasaRetreatVis(entries[0].isIntersecting);
    });
    tasaRetreatObserver.observe(tasaRetreatRef.current);
  }, [tasaRetreatRef]);


  return (
    <div>
      <Nav />
      <div className='scrapbook'>
        <h1 className="fade1">Scrapbooking !</h1>
        <h7 className="fade2">In my free time I love creating digital scrapbooks.</h7>
        <h7 className="fade2">Below is a scrapbook carousel post I made for
          Instagram!</h7>
      </div>

      <div className='tasaRetreat'>
        <div ref={tasaRetreatRef} className={`fade-in ${tasaRetreatVisible ? "visible" : ""}`}>
          <h5>Tasa Retreat 2024</h5>

          <TasaRetreat />
        </div>
      </div>
      <Footer />

    </div>

  );
};

export default Scrapbook;