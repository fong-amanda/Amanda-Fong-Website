import React, { useEffect, useState } from "react";
import Nav from "../../../NavigationBar";
import Footer from "../../../Footer/footer";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

function HippoProcess() {
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, []);
    const [open, setOpen] = React.useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    return (
        <>
            <Nav />
            <br />
            <section className="cover-image">
                <div className="image-background">
                    <div className="image-background-container">
                        <img style={{ cursor: "auto" }} src="sacImages/sacLandscape.png" alt="Cherry Landscape" />
                    </div>
                </div>
            </section>

            <section id="header" className="title-header">
                <h1 >Student Activity Calendar</h1>
                <h4>Mobile App Design, Prototyping, User Testing & Research, Branding</h4>
            </section>

           <section id="overview-section" className="overview-section">
                <div className="overview">
                    <div className="overviewLeft hippo">
                        <h5>Project Overview</h5>
                        <p>
                            As a designer at Generate Product Development, I collaborated with designers and software engineers to help Northeastern's SGA
                            (Student Government Association) replace NUEngage as the university's primary platform for campus engagement.
                        </p>
                        <p>
                            Student Activity Calendar is designed to be an intuitive activity app catering to Northeastern students, particularly freshmen,
                            who often struggle to find the right clubs or events to engage with.
                            It simplifies the process of discovering club meetings and events aligned with their interests and majors.
                            Additionally, it enables users to effortlessly stay informed about updates from the clubs they choose to join or are interested in.
                        </p>

                        <br />
                        <h5 className="hippo">
                            <a
                                href="https://www.figma.com/proto/44j4p2HMxwqYoxTSbfVqla/Student-Activity-Calendar?kind=proto&node-id=6632-41806&page-id=7%3A160&scaling=scale-down&show-proto-sidebar=1&starting-point-node-id=6632%3A41806&t=oC656u75iLkkVhT0-1&viewport=237%2C143%2C0.13"
                                target="_blank" rel="noreferrer"
                            >
                                High-Fidelity Prototype
                            </a>
                        </h5>
                    </div>

                    <div className="overviewRight hippo">
                        <h5>Role</h5>
                        <p>Software Designer</p>

                        <h5>Team</h5>
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
                                <p>Melody Yu, Akshay Dupuguntla, Mai Nguyen, Michael Brennan, Olivier John Ndjike Nzia, Sunny Huang</p>
                            </div>
                        </div>
                        <h5>Timeline</h5>
                        <p>January 2024 - April 2024</p>

                        <h5>Tools</h5>
                        <p>Figma</p>
                    </div>
                </div>
            </section>

            <section className="summary">
                <h1>Research Overview</h1>
                <hr></hr>
                <h2>1 | The Problem Statement</h2>
                <p>
                    How can we streamline the process for undergraduate students to join clubs and manage their extracurricular activities more efficiently?
                </p>

                <h2>2 | Moodboarding</h2>
                            <div className="two-columns-container">
              <div className="column">
                <img
                    src="sacImages/moodboard1.png"
                    alt="Moodboard"
                    onClick={() => {
                        setOpen(true);
                        setSelectedImageIndex(0);
                    }}
                />
                                <br />
                <br />

                <img
                    src="sacImages/moodboard3.png"
                    alt="Moodboard"
                    onClick={() => {
                        setOpen(true);
                        setSelectedImageIndex(2);
                    }}
                />                </div>              <div className="column">

<img
                    src="sacImages/moodboard2.png"
                    alt="Moodboard"
                    onClick={() => {
                        setOpen(true);
                        setSelectedImageIndex(1);
                    }}
                />
                </div>
                </div>

                <h4>Final Moodboard</h4>
                <img
                    src="sacImages/finalmoodboard.png"
                    alt="Final Moodboard"
                    onClick={() => {
                        setOpen(true);
                        setSelectedImageIndex(3);
                    }}
                />

                <h2>3 | Competitor Analysis</h2>
                <img
                    src="sacImages/competitoranalysis.png"
                    alt="Competitor Analysis"
                    onClick={() => {
                        setOpen(true);
                        setSelectedImageIndex(4);
                    }}
                />

                <h2>4 | Key User Interview Insights</h2>
                <ul>
                    <li>Students had trouble keeping up with clubs from fall fest</li>
                    <li>Fall fest was overwhelming and students didn't know which ones they actually wanted to join</li>
                    <li>They wish they knew about the time commitment before joining a club</li>
                    <li>Many heard about clubs through word of mouth</li>
                    <li>Not enough information on engage or the instagram to fully understand how the club is structured or what the culture is like</li>
                    <li>Students join clubs but don't stick to them freshman year</li>
                    <li>Pre-professional and major based clubs are popular at Northeastern</li>
                    <li>Students are discouraged by the competitive club culture and want to know how to prepare better</li>
                </ul>

                <br />
                <br />
                <h1>Design Process</h1>
                <hr></hr>

                <h2>1 | Personas</h2>
                <div className="two-columns-container">
                <div className="column">
                <img
                    src="sacImages/persona1.png"
                    alt="User Persona"
                    onClick={() => {
                        setOpen(true);
                        setSelectedImageIndex(5);
                    }}
                />                          <br />
                        <br />
 <img
                    src="sacImages/persona3.png"
                    alt="User Persona"
                    onClick={() => {
                        setOpen(true);
                        setSelectedImageIndex(7);
                    }}
                /> </div>                 <div className="column">
 <img
                    src="sacImages/persona2.png"
                    alt="User Persona"
                    onClick={() => {
                        setOpen(true);
                        setSelectedImageIndex(6);
                    }}
                />                           <br />
                        <br />
<img
                    src="sacImages/persona4.png"
                    alt="User Persona"
                    onClick={() => {
                        setOpen(true);
                        setSelectedImageIndex(8);
                    }}
                />
                </div>
                </div>

                <h2>2 | Elevator Pitch</h2>
                <p>
                    Student Activity Calendar is the only solution that empowers Northeastern undergrads and club executives to seamlessly engage with and promote campus organizations and events. By replacing NUEngage, we're creating a centralized hub for clubs and events, along with an event calendar, offering an intuitive mobile experience that drives student involvement and streamlines club operations.
                </p>

                <h2>3 | Refine Statements</h2>
                <ol>
                    <li>
                        As a student using the platform, I want to easily access and view all upcoming campus events so that I can stay informed and participate in activities of interest.
                    </li>
                    <li style={{ marginTop: 15 }}>
                        As a club executive, I want a simple way to add and promote our events on the calendar so that we can reach a wider audience and drive engagement.
                    </li>
                    <li style={{ marginTop: 15 }}>
                        As a student, I want to filter events by category or organization so that I can quickly find activities that match my interests.
                    </li>
                    <li style={{ marginTop: 15 }}>
                        As a club executive, I want to track event attendance through the platform so that I can better understand our event's reach and success.
                    </li>
                </ol>

                <h2>4 | Sitemap</h2>
                <img
                    src="sacImages/sitemap.png"
                    alt="Site Map"
                    onClick={() => {
                        setOpen(true);
                        setSelectedImageIndex(9);
                    }}
                />

                <h2>5 | Wireframes</h2>
                <div className="two-columns-container">
                    <div className="column">
                        <h4>Low-Fidelity Wireframes</h4>
                        <img
                            src="sacImages/lofis.png"
                            alt="Low-Fi Login"
                            onClick={() => {
                                setOpen(true);
                                setSelectedImageIndex(10);
                            }}
                        />
                        <br />
                     
                    </div>

                    <div className="column">
                        <h4>Mid-Fidelity Wireframes</h4>
                        <img
                            src="sacImages/midfis.png"
                            alt="Mid-Fi Wireframes"
                            onClick={() => {
                                setOpen(true);
                                setSelectedImageIndex(11);
                            }}
                        />
                    </div>
                </div>

                <h2>6 | High-Fidelity Wireframes</h2>
                                            <div className="two-columns-container">

                <div className="column">
                    <p>Home Page</p>
                        <img
                            src="sacImages/hifi.png"
                            alt="High-Fi Login"
                            onClick={() => {
                                setOpen(true);
                                setSelectedImageIndex(12);
                            }}
                
                        /> </div>                <div className="column">
                                                <p>Profile Page</p>

<img
                            src="sacImages/hifis.png"
                            alt="High-Fi Login"
                            onClick={() => {
                                setOpen(true);
                                setSelectedImageIndex(13);
                            }}
                
                        />
                        </div>
                        </div>

                <br />
                <br />
                <h2>
                    Check out the{' '}
                    <a
                        href="https://www.figma.com/proto/44j4p2HMxwqYoxTSbfVqla/Student-Activity-Calendar?kind=proto&node-id=6632-41806&page-id=7%3A160&scaling=scale-down&show-proto-sidebar=1&starting-point-node-id=6632%3A41806&t=oC656u75iLkkVhT0-1&viewport=237%2C143%2C0.13"
                        target="_blank" rel="noreferrer"
                    >
                        prototype
                    </a>
                    !
                </h2>
                <br />
            </section>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                index={selectedImageIndex}
                slides={[
                    { src: "/sacImages/moodboard1.png" },
                                        { src: "/sacImages/moodboard2.png" },
                    { src: "/sacImages/moodboard3.png" },

                    { src: "/sacImages/finalmoodboard.png" },
                    { src: "/sacImages/competitoranalysis.png" },
                    { src: "/sacImages/persona1.png" },
                                        { src: "/sacImages/persona2.png" },
                    { src: "/sacImages/persona3.png" },
                    { src: "/sacImages/persona4.png" },

                    { src: "/sacImages/sitemap.png" },
                    { src: "/sacImages/lofis.png" },
                    { src: "/sacImages/midfis.png" },
                    { src: "/sacImages/hifi.png" },
                                        { src: "/sacImages/hifis.png" },

                ]}
            />
            <Footer />
        </>
    )
}
export default HippoProcess;