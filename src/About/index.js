import React from 'react';
import Nav from '../NavigationBar';
import "./about.css";
import "../style.css";


function About() {
    return (
        <div>
            <Nav />
            <section id="aboutMe" className="aboutMe">
                <h1 className='aboutHeading'>
                    <center>About Me!</center>
                </h1>
                <div className="about">
                    <div className="aboutMePhoto">
                        <img src="Images/AboutMeImage.JPG" alt="About Me" />
                    </div>
                    <div className="aboutMeText">
                        <h1>Hi! I’m Amanda!</h1>
                        <p>
                            Currently, I’m a sophomore at Northeastern University studying Computer Science & Design with a concentration in interaction design.
                            All my life, I've always had a love for art. However, I’ve really found a passion for the interaction of design and technology. Through my design courses at school, I've learned to use my art to express myself and my outlook on life. Creating art has always been an outlet for me to destress and reflect on my life. All my pieces represent a part of me, whether it features my interests, places I've traveled to, or important people in my life.
                            I’ve also always enjoyed helping others, so now I have more of a focus on creating intentional art that will make an impact in the world.
                            When I’m not designing, you can find me trying new brunch places or listening to music!
                        </p>

                        <h2>Contact me: fong.am@northeastern.edu</h2>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
