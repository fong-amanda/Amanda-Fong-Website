import React from 'react';
import Nav from '../NavigationBar';
import Seattle from './seattle';
import Sem1 from './sem1';
import Sem3 from './sem3';
import { useState, useRef } from "react";
import "./scrapbook.css";
import Footer from '../Footer/footer';

const Scrapbook = () => {
  // const [sem3Visible, setSem3Vis] = useState(false);
  // const sem3Ref = useRef();

  // const [seattleVisible, setSeattleVis] = useState(false);
  // const seattleRef = useRef();

  // const [sem1Visible, setSem1Vis] = useState(false);
  // const sem1Ref = useRef();
  // React.useEffect(() => {
  //   const sem3Observer = new IntersectionObserver(entries => {
  //     setSem3Vis(entries[0].isIntersecting);
  //   });
  //   sem3Observer.observe(sem3Ref.current);
  // }, [sem3Ref]);

  // React.useEffect(() => {
  //   const seattleObserver = new IntersectionObserver(entries => {
  //     setSeattleVis(entries[0].isIntersecting);
  //   });
  //   seattleObserver.observe(seattleRef.current);
  // }, [seattleRef]);

  // React.useEffect(() => {
  //   const sem1Observer = new IntersectionObserver(entries => {
  //     setSem1Vis(entries[0].isIntersecting);
  //   });
  //   sem1Observer.observe(sem1Ref.current);
  // }, [sem1Ref]);

  return (
    <div>
      <Nav />
      <div className='scrapbook'>
        <h1 className="fade1">Scrapbooking !</h1>
        <h7 className="fade2">In my free time I love creating digital scrapbooks.</h7>
        <h7 className="fade2">Below are some scrapbook carousel posts I made for
          Instagram!</h7>
      </div>
      {/* <div className='sem3'>
        <div ref={sem3Ref} className={`fade-in ${sem3Visible ? "visible" : ""}`}>
          <Sem3 />
        </div>
      </div>
      <div className='seattle'>
        <div ref={seattleRef} className={`fade-in ${seattleVisible ? "visible" : ""}`}>
          <Seattle />
        </div>
      </div>
      <div className='sem1'>
        <div ref={sem1Ref} className={`fade-in ${sem1Visible ? "visible" : ""}`}>
          <Sem1 />
        </div>      </div>            <Footer /> */}

    </div>

  );
};

export default Scrapbook;
