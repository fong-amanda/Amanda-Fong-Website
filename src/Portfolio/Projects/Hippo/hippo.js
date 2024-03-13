import React, { useState, useEffect } from "react";
import Nav from "../../../NavigationBar";
import './hippo.css';
import Footer from "../../../Footer/footer";
// import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

function HippoProcess() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    // const [open, setOpen] = React.useState(false);
    // const [selectedImageIndex, setSelectedImageIndex] = useState(0);

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
                <h1 style={{ color: '#1C1A1A' }}>Hippo</h1>
                <h2>Mobile App Design, Prototyping, User Testing & Research, Branding</h2>
            </section>

            <section id="overview-section" className="overview-section">
                <div className="overview">
                    <div className="overviewLeft hippo">
                        <h5 style={{ color: "#1C1A1A" }}>Project Overview</h5>
                        <p>
                            Hippo is designed to be an intuitive activity app catering to Northeastern students, particularly freshmen,
                            who often struggle to find the right clubs or events to engage with.
                            It simplifies the process of discovering club meetings and events aligned with their interests and majors.
                            Additionally, it enables users to effortlessly stay informed about updates from the clubs they choose to join or are interested in.
                        </p>
                        <br />
                        <h5 style={{ color: "#1C1A1A" }} className="hippo">This project is still in progress! Come back soon for updates.</h5>
                        {/* <h5 className="hippo">
                            <a
                                href="https://www.figma.com/proto/ldXYpkEbm49gv0sqzXp0pF/Disrupt-Hi-Fis?page-id=0%3A1&type=design&node-id=1-634&viewport=5733%2C1774%2C0.52&t=1vSW2QCw22ftuLHh-1&scaling=min-zoom&starting-point-node-id=1%3A50&mode=design"
                                target="_blank" rel="noreferrer"
                            >
                                High-Fidelity Prototype
                            </a>
                        </h5>
                        <h5 className="hippo">
                            <a
                                href="https://www.disruptneu.com/"
                                target="_blank" rel="noreferrer"
                            >
                                Deployed Site
                            </a>
                        </h5> */}
                    </div>

                    <div className="overviewRight hippo">
                        <h5 style={{ color: '#1C1A1A' }}>Role</h5>
                        <p>Software Designer</p>

                        <h5 style={{ color: '#1C1A1A' }}>Team</h5>
                        <div className="three-columns-container">
                            <div className="column">
                                <h6>Project Lead:</h6>
                                <p>Alder Whiteford</p>
                            </div>
                            <div className="column">
                                <h6>Design Lead:</h6>
                                <p>Amanda Kerr</p>
                                <h6>Designers:</h6>
                                <p>Liana Zheng, Amanda Fong, Emma Pon, Emma Nguyen</p>
                            </div>
                            <div className="column">
                                <h6>Tech Leads:</h6>
                                <p>David Oduneye, Garett Ladley</p>

                                <h6>Developers:</h6>
                                <p>Melody Yu, Akshay Dupuguntla, Edwin Li,
                                    Mai Nguyen, Michael Brennan,
                                    Olivier John Ndjike Nzia, Sunny Huang, Zack Lassetter</p>






                            </div>
                        </div>
                        <h5 style={{ color: '#1C1A1A' }}>Timeline</h5>
                        <p>January 2024 - Present</p>

                        <h5 style={{ color: '#1C1A1A' }}>Tools</h5>
                        <p>Figma</p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default HippoProcess;
