
import React from "react";
import Nav from "../../../NavigationBar";
import './disrupt.css';

function DisruptProcess() {
    return (
        <>
            <Nav />
            <section className="cover-image">
                <div className="image-background">
                    <div className="image-background-container">
                        <img src="disruptImages/disruptLandscape.jpg" alt="Disrupt Landscape" />
                    </div>
                </div>
            </section>

            <section id="header" className="title-header">
                <h1 style={{ color: 'black' }}>Disrupt</h1>
                <h2>UI/UX, Web Design, Prototyping, User Testing</h2>
            </section>

            <section id="overview-section" className="overview-section">
                <div className="overview">
                    <div className="overviewLeft">
                        <h5 style={{ color: 'black' }}>Project Overview</h5>
                        <p>
                            My team and I are currently working on a re-brand and a re-vamp of{' '}
                            <a href="https://www.disruptneu.com/" target="_blank" rel="noopener noreferrer">
                                Disrupt's
                            </a>{' '}
                            website. More to come soon!!
                        </p>
                    </div>
                    <div className="overviewRight spotify">
                        <h5 style={{ color: 'black' }}>Role</h5>
                        <p>UI/UX Designer</p>

                        <h5 style={{ color: 'black' }}>Team</h5>
                        <div className="two-columns-container">
                            <div className="column">
                                <h6>Project Lead:</h6>
                                <p>Preet Singh</p>
                                <h6>Design Lead:</h6>
                                <p>Jyaleen Wu</p>
                                <h6>Designers:</h6>
                                <p>Lucas Clavijo, Amanda Fong</p>
                            </div>

                            <div className="column">
                                <h6>Tech Lead:</h6>
                                <p>Brian Kapusta</p>
                                <h6>Developer:</h6>
                                <p>Helen Miao</p>
                            </div>
                        </div>




                        <h5 style={{ color: 'black' }}>Timeline</h5>
                        <p>September 2023 - December 2023</p>

                        <h5 style={{ color: 'black' }}>Tools</h5>
                        <p>Figma</p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default DisruptProcess;