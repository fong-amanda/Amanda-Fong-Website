import React, { useState, useEffect } from "react";
import Nav from "../../../NavigationBar";
import './cherry.css';
import Footer from "../../../Footer/footer";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

function CherryProcess() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [open, setOpen] = React.useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    return (
        <>
            <Nav />
            <br />
            <section className="cover-image">
                <div className="image-background">
                    <div className="image-background-container">
                        {/* <img style={{ cursor: "auto" }} src="/.jpg" alt="Cherry Landscape" /> */}
                    </div>
                </div>
            </section>

            <section id="header" className="title-header">
                <h1 style={{ color: '#1C1A1A' }}>Cherry Crisis</h1>
                <h2>Web Development, Web Design, Prototyping, User Testing & Research, Branding</h2>
            </section>

            <section id="overview-section" className="overview-section">
                <div className="overview">
                    <div className="overviewLeft">
                        <h5 style={{ color: "#1C1A1A" }}>Project Overview</h5>
                        <p>
                            The band, &nbsp;
                            <a href="https://www.instagram.com/cherry.crisis/" target="_blank" rel="noopener noreferrer">
                                Cherry Crisis,
                            </a>
                            &nbsp;came to us to create a brand identity and develop a website for them. As a designer in
                            {' '}<a href="https://scout.camd.northeastern.edu/" target="_blank" rel="noopener noreferrer">
                                Scout
                            </a>, I worked with a team of developers and other designers to design and develop this website.
                        </p>
                        <br />
                        <h5 style={{ color: "#1C1A1A" }} className="hippo">This project is still in progress! Come back soon for updates.</h5>

                        {/* <h5 className="disrupt">
                            <a
                                href="https://www.figma.com/proto/ldXYpkEbm49gv0sqzXp0pF/Disrupt-Hi-Fis?page-id=0%3A1&type=design&node-id=1-634&viewport=5733%2C1774%2C0.52&t=1vSW2QCw22ftuLHh-1&scaling=min-zoom&starting-point-node-id=1%3A50&mode=design"
                                target="_blank" rel="noreferrer"
                            >
                                High-Fidelity Prototype
                            </a>
                        </h5>
                        <h5 className="disrupt">
                            <a
                                href="https://www.disruptneu.com/"
                                target="_blank" rel="noreferrer"
                            >
                                Deployed Site
                            </a>
                        </h5> */}
                    </div>

                    <div className="overviewRight">
                        <h5 style={{ color: '#1C1A1A' }}>Role</h5>
                        <p>Developer & UI/UX Designer</p>

                        <h5 style={{ color: '#1C1A1A' }}>Team</h5>
                        <div className="three-columns-container">
                            <div className="column">
                                <h6>Project Lead:</h6>
                                <p>Emma Wong</p>
                            </div>
                            <div className="column">
                                <h6>Design Lead:</h6>
                                <p>Emlyn Griffiths</p>
                                <h6>Designers:</h6>
                                <p>Amie Chen, Brendan DiTullio, Taylie Kawakami, Amanda Fong</p>
                            </div>

                            <div className="column">
                                <h6>Tech Lead:</h6>
                                <p>Jon Shih</p>
                                <h6>Developers:</h6>
                                <p>Ananya Radhakrishnan, Ivan Rudyakov, Amanda Fong</p>
                            </div>
                        </div>
                        <h5 style={{ color: '#1C1A1A' }}>Timeline</h5>
                        <p>January 2024 - Present</p>

                        <h5 style={{ color: '#1C1A1A' }}>Tools</h5>
                        <p>Figma, JavaScript (React.js), CSS, Git
                        </p>
                    </div>
                </div>
            </section>



            <Footer />
        </>
    );
}

export default CherryProcess;
