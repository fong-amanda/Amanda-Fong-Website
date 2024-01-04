import React from 'react';
import Nav from '../NavigationBar';
import "./about.css";
import "../style.css";
import { useState, useRef } from "react";
import Footer from '../Footer/footer';

function About() {
    const [headerVisible, setHeaderVis] = useState(false);
    const headerRef = useRef();

    const [aboutParagraphVisible, setAboutParagraphVis] = useState(false);
    const aboutParagraphRef = useRef();

    const [contactVisible, setContactVis] = useState(false);
    const contactRef = useRef();

    const [aboutPhotoVisible, setAboutPhotoVis] = useState(false);
    const aboutPhotoRef = useRef();

    React.useEffect(() => {
        const headerObserver = new IntersectionObserver(entries => {
            setHeaderVis(entries[0].isIntersecting);
        });
        headerObserver.observe(headerRef.current);
    }, [headerRef]);

    React.useEffect(() => {
        const aboutParagraphObserver = new IntersectionObserver(entries => {
            setAboutParagraphVis(entries[0].isIntersecting);
        });
        aboutParagraphObserver.observe(aboutParagraphRef.current);
    }, [aboutParagraphRef]);
    React.useEffect(() => {
        const contactObserver = new IntersectionObserver(entries => {
            setContactVis(entries[0].isIntersecting);
        });
        contactObserver.observe(contactRef.current);
    }, [contactRef]);

    React.useEffect(() => {
        const aboutPhotoObserver = new IntersectionObserver(entries => {
            setAboutPhotoVis(entries[0].isIntersecting);
        });
        aboutPhotoObserver.observe(aboutPhotoRef.current);
    }, [aboutPhotoRef]);

    return (
        <div>
            <Nav />
            <section id="aboutMe" className="aboutMe">
                <h1 className='aboutHeading fade1'>
                    <center>About Me!</center>
                </h1>
                <div className="about">
                    <div className="aboutMePhoto">
                        <img className={`fade-in ${aboutPhotoVisible ? "visible" : ""}`}
                            ref={aboutPhotoRef} src="./AboutMeImage.jpg"
                            alt="About Me" />
                    </div>
                    <div className="aboutMeText">
                        <h1
                            className={`fade-in ${headerVisible ? "visible" : ""}`}
                            ref={headerRef}>
                            Hi! I’m Amanda!
                        </h1>
                        <p className={`fade-in ${aboutParagraphVisible ? "visible" : ""}`}
                            ref={aboutParagraphRef}>
                            Currently, I’m a sophomore at Northeastern University studying Computer Science & Design with a concentration in interaction design.
                            All my life, I've always had a love for art. However, I’ve really found a passion for the interaction of design and technology. Through my design courses at school, I've learned to use my art to express myself and my outlook on life. Creating art has always been an outlet for me to destress and reflect on my life. All my pieces represent a part of me, whether it features my interests, places I've traveled to, or important people in my life.
                            I’ve also always enjoyed helping others, so now I have more of a focus on creating intentional art that will make an impact in the world.
                            When I’m not designing, you can find me trying new brunch places or listening to music!
                        </p>

                        <h2 className={`fade-in ${contactVisible ? "visible" : ""}`}
                            ref={contactRef}>
                            Contact me: fong.am@northeastern.edu</h2>
                    </div>
                </div>
            </section>
            <Footer />

        </div>
    );
}

export default About;
