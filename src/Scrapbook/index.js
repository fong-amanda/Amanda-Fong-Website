import React from 'react';
import Nav from '../NavigationBar';
import Seattle from './seattle';
import Sem1 from './sem1';
import Sem3 from './sem3';

import "./scrapbook.css";


const Scrapbook = () => {
  return (
    <div>
      <Nav />
      <div className='scrapbook'>
        <h1>Scrapbooking !</h1>
        <h7>In my free time I love creating digital scrapbooks.</h7>
        <h7>Below are some scrapbook carousel posts I made for
          Instagram!</h7>
      </div>
            <div className='sem3'>
        <Sem3/>
      </div>
      <div className='seattle'>
        <Seattle />
      </div>
      <div className='sem1'>
        <Sem1 />
      </div>
    </div>
  );
};

export default Scrapbook;
