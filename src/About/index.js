import React from 'react';
import Nav from '../NavigationBar';
import "./about.css";
import "../style.css";
import { useState, useRef } from "react";
import Footer from '../Footer/footer';
import { FaExternalLinkAlt } from "react-icons/fa";

function About() {
    const [headerVisible, setHeaderVis] = useState(false);
    const headerRef = useRef();

    const [aboutParagraphVisible, setAboutParagraphVis] = useState(false);
    const aboutParagraphRef = useRef();

    const [contactVisible, setContactVis] = useState(false);
    const contactRef = useRef();

    const [aboutPhotoVisible, setAboutPhotoVis] = useState(false);
    const aboutPhotoRef = useRef();

    const [skillsVisible, setSkillsVis] = useState(false);
    const skillsRef = useRef();

    const [extracurricularsVisible, setExtracurricularsVis] = useState(false);
    const extracurricularsRef = useRef();



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

    React.useEffect(() => {
        const skillsObserver = new IntersectionObserver(entries => {
            setSkillsVis(entries[0].isIntersecting);
        });
        skillsObserver.observe(skillsRef.current);
    }, [skillsRef]);
    React.useEffect(() => {
        const extracurricularsObserver = new IntersectionObserver(entries => {
            setExtracurricularsVis(entries[0].isIntersecting);
        });
        extracurricularsObserver.observe(extracurricularsRef.current);
    }, [extracurricularsRef]);


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
                            ref={aboutPhotoRef} src="./AboutMeImage2.JPG"
                            alt="About Me" />


                    </div>
                    <div className="aboutMeText">
                        <h2
                            className={`fade-in ${headerVisible ? "visible" : ""}`}
                            ref={headerRef}>
                            Hi! I’m Amanda!
                        </h2>
                        <p className={`fade-in ${aboutParagraphVisible ? "visible" : ""}`}
                            ref={aboutParagraphRef}>
                            I’m a junior at Northeastern University studying Computer Science & Design with a
                            concentration in Interaction Design. All my life, I’ve had a love for art, but since coming to Northeastern, I’ve explored the intersection of technology and design leading to my passion in UI/UX design. Previously, I used my art to express myself and as an outlet to destress. Now I strive to create work that streamlines tasks and adds more enjoyment to people's lives. Growing up, I’ve always loved helping others and through my clubs at college, I’m still actively able to engage in this. As a studio designer in Scout, a software designer in Generate, and a product designer in Code4Community, I work on UI/UX projects that I’m passionate about, where I’m able to make an impact in the community simultaneously. Through my work, I hope to <span style={{ color: "green" }}>create a digital world that welcomes and empowers all users.</span> In my free time, you can find me digitally painting, scrapbooking, doung puzzles, trying new brunch places, or reading!
                        </p>
                        <div>

                        </div>

                        <div className={`fade-in links ${contactVisible ? "visible" : ""}`} ref={contactRef}>
                            <h3>I'm always looking for new opportunities!</h3>
                            <h3>Contact me:</h3>
                            <h3><a className="mail" href="mailto:fong.am@northeastern.edu" target="_blank" rel="noopener noreferrer">fong.am@northeastern.edu</a></h3>
                            <h3><a href="https://www.linkedin.com/in/amanda-fong-217a04260/" target="_blank" rel="noopener noreferrer">LinkedIn <FaExternalLinkAlt />
                            </a></h3>

                            <h3><a href="https://github.com/fong-amanda" target="_blank" rel="noopener noreferrer">GitHub <FaExternalLinkAlt />
                            </a></h3>
                        </div>

                    </div>
                </div>
                <div className='moreAbout'>
                    <div className='skills' ref={skillsRef}>
                        <h2 className={`fade-in ${skillsVisible ? "visible" : ""}`}>Skills</h2>
                        <h5>Languages:</h5>

                        <p className={`fade-in ${skillsVisible ? "visible" : ""}`}>
                             Java | HTML | CSS | Python | Racket | JavaScript | SQL
                            <br />
                        </p>
                        <h5>Tools & Frame:</h5>
                        <p className={`fade-in ${skillsVisible ? "visible" : ""}`}>
                             Eclipse | Intellij | React | Bootstrap | Visual Studio | Microsoft Office Suite | Adobe Illustrator | Adobe Photoshop | Adobe InDesign | Figma | Axure | Procreate | Mailchimp | Adobe After Effects | Adobe Premiere | AutoCAD | Balsamiq
                        </p>
                    </div>
                    <div className='extracirriculars' ref={extracurricularsRef}>
                        <h2 className={`fade-in ${extracurricularsVisible ? "visible" : ""}`}>What I'm Involved In</h2>
                        <p className={`fade-in ${extracurricularsVisible ? "visible" : ""}`}>
                            ✧ Prev. Cloud O365 Co-Op @ <a href="https://www.coverys.com/" target="_blank" rel="noreferrer">Coverys</a>
                        </p>
                        <p className={`fade-in ${extracurricularsVisible ? "visible" : ""}`}>
                            ✧ Design Lead + Prev. Developer @ <a href="https://scout.camd.northeastern.edu/" target="_blank" rel="noreferrer">Scout</a>
                        </p>
                        <p className={`fade-in ${extracurricularsVisible ? "visible" : ""}`}>
                            ✧ Software Designer @ <a href="https://generatenu.com/" target="_blank" rel="noreferrer">Generate</a>
                        </p>
                        {/* <p className={`fade-in ${extracurricularsVisible ? "visible" : ""}`}>
                            ✧ Product Designer @ <a href="https://www.c4cneu.com/" target="_blank" rel="noreferrer">Code4Community</a>
                        </p> */}

                        <p className={`fade-in ${extracurricularsVisible ? "visible" : ""}`}>
                            ✧ Media Specialist @ <a href="https://www.instagram.com/nu_tasa/" target="_blank" rel="noreferrer">NEU Taiwanese American Student Association</a>
                        </p>
                        {/* <p className={`fade-in ${extracurricularsVisible ? "visible" : ""}`}>
                            ✧ Graphic Designer @ <a href="https://www.hackrahmedia.org/" target="_blank" rel="noreferrer">Hackrah Media</a>
                        </p> */}
                        <p className={`fade-in ${extracurricularsVisible ? "visible" : ""}`}>
                            ✧ Marketing Designer @ <a href="https://www.freetelehealth.org/" target="_blank" rel="noreferrer">Hermes Telehealth</a>
                        </p>
                    </div>
                </div>

            </section>
            <Footer />

        </div>
    );
}

export default About;
