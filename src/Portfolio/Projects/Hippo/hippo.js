import React, { useEffect, useState } from "react";
import Nav from "../../../NavigationBar";
import './hippo.css';
import Footer from "../../../Footer/footer";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

function HippoProcess() {
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
                        <img style={{ cursor: "auto" }} src="sacImages/sacLandscape.png" alt="Cherry Landscape" />
                    </div>
                </div>
            </section>

            <section id="header" className="title-header">
                <h1 style={{ color: '#1C1A1A' }}>Student Activity Calendar</h1>
                <h2>Mobile App Design, Prototyping, User Testing & Research, Branding</h2>
            </section>

            <section id="overview-section" className="overview-section">
                <div className="overview">
                    <div className="overviewLeft hippo">
                        <h5 style={{ color: "#1C1A1A" }}>Project Overview</h5>
                        <p>
                            As a designer at Generate Product Development, I collaborated with designers and software engineers to help Northeastern's SGA
                            (Student Government Association) replace NUEngage as the university's primary platform for campus engagement. </p> <p>Student Activity Calendar is designed to be an intuitive activity app catering to Northeastern students, particularly freshmen,
                                who often struggle to find the right clubs or events to engage with.
                                It simplifies the process of discovering club meetings and events aligned with their interests and majors.
                                Additionally, it enables users to effortlessly stay informed about updates from the clubs they choose to join or are interested in.
                        </p>

                        <br />
                        {/* <h5 style={{ color: "#1C1A1A" }} className="hippo">This project is still in progress! Come back soon for updates.</h5> */}
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
                                <p>Melody Yu, Akshay Dupuguntla,
                                    Mai Nguyen, Michael Brennan,
                                    Olivier John Ndjike Nzia, Sunny Huang</p>






                            </div>
                        </div>
                        <h5 style={{ color: '#1C1A1A' }}>Timeline</h5>
                        <p>January 2024 - April 2024</p>

                        <h5 style={{ color: '#1C1A1A' }}>Tools</h5>
                        <p>Figma</p>
                    </div>
                </div>
            </section>
            <section className="summary disrupt">
                <h2>1 | User Research</h2>
                <h3>Problem Statement: </h3>
                <p>How can we streamline the process for undergraduate students to join clubs and manage their extracurricular activities more efficiently?





                </p>                {/* <h2>What is Disrupt?</h2>
                <p>Disrupt is the only Fintech organization that provides a community driving education, advancement, and engagement for computer science and business students at Northeastern who want to gain skills related to Fintech in an era of rapidly changing financial and tech industries. </p>
                <br />
                <h1>Branding</h1>
                <hr></hr>

                <h2>Discovering the brand</h2>
                <p>We began the project by exploring and defining the ideal direction for the brand.
                    It was important for us to understand how Disrupt wants their club to be portrayed to students on campus.</p>
                <h3>Personality Levels</h3>
                <p>Brands need to have a clear personality in order for consumers to easily interact and identify with them. In this activity, our client and team indicated where they believe that the client’s company falls (or think that it should fall) within the following sets of traits. This exercise was very helpful in establishing a thoughtful brand identity. </p>
                <div className="lightbox-images">
                    <img
                        src="disruptImages/personalityLevels.jpg"
                        alt="User Story Brainstorm"
                        onClick={() => {
                            setOpen(true);
                            setSelectedImageIndex(0);
                        }}
                    />
                </div> */}
                <h3>Moodboarding</h3>

                <img
                    src="sacImages/moodboard1.png"
                    alt="Moodboard"
                    onClick={() => {
                        setOpen(true);
                        setSelectedImageIndex(0);
                    }}
                />
           

                <h4>Final Moodboard</h4>

                <img

                    src="sacImages/finalmoodboard.png"
                    alt="Moodboard"
                    onClick={() => {
                        setOpen(true);
                        setSelectedImageIndex(1);
                    }}
                />

                <h3>Competitor Analysis</h3>
                <img

                    src="sacImages/competitoranalysis.png"
                    alt="Moodboard"
                    onClick={() => {
                        setOpen(true);
                        setSelectedImageIndex(2);
                    }}
                />
                <h3>User Interviews</h3>
                <h4>Here are some key insights from our interviews with a diverse group of Northeastern students about their experiences with campus clubs:</h4>
                <ul>
                    <li>Students had trouble keeping up with clubs from fall fest</li>
                    <li>Fall fest was overwhelming and students didn't know which ones they actually wanted to join</li>
                    <li>They wish they knew about the time commitment before joining a club</li>
                    <li>Many heard about clubs through word of mouth</li>
                    <li>Not enough information on engage or the instagram to fully understand how the club is structured or what the culture is like</li>
                    <li>Students join clubs but don't stick to them freshman year</li>
                    <li>Pre-professional and major based clubs are popular at Northeastern </li>
                    <li>Students are discouraged by the competitive club culture and want to know how to prepare better</li>



                </ul>
                <h2>2 | Interpret</h2>
                <h3>Personas</h3>
                <img
                    src="sacImages/persona1.png"
                    alt="persona"
                    onClick={() => {
                        setOpen(true);
                        setSelectedImageIndex(3);
                    }}
                />
                <h3>Elevator Pitch</h3>
                <h4>Student Activity Calendar is the only solution that empowers Northeastern undergrads and club executives to seamlessly engage with and promote campus organizations and events. By replacing NUEngage, we’re creating a centralized hub for clubs and events, along with an event calendar, offering an intuitive mobile experience that drives student involvement and streamlines club operations.</h4>
                <h3>Refine Statements</h3>
                <h4>
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
                            As a club executive, I want to track event attendance through the platform so that I can better understand our event’s reach and success.

                        </li>
                    </ol>
                </h4>
                <h2>3 | Make</h2>
                <h3>Sitemap</h3>

                <img
                    src="sacImages/sitemap.png"
                    alt="site map"
                    onClick={() => {
                        setOpen(true);
                        setSelectedImageIndex(4);
                    }}

                />

                <h2>4 | Design</h2>
                <h3>Low-Fidelity Wireframes</h3>
                <h4>Login Pages</h4>
                <img
                    src="sacImages/lofis.png"
                    alt="lo-fi"
                    onClick={() => {
                        setOpen(true);
                        setSelectedImageIndex(5);
                    }}
                />
                <br />
                <h4>Club Profile View</h4>

                <img
                    src="sacImages/lofis2.png"
                    alt="lo-fi"
                    onClick={() => {
                        setOpen(true);
                        setSelectedImageIndex(6);
                    }}
                />               <br />
                <h4>Event Pages</h4>

                <img
                    src="sacImages/lofis3.png"
                    alt="lo-fi"
                    onClick={() => {
                        setOpen(true);
                        setSelectedImageIndex(7);
                    }}
                />
                <h4>Explore Pages</h4>

                <img
                    src="sacImages/lofis4.png"
                    alt="lo-fi"
                    onClick={() => {
                        setOpen(true);
                        setSelectedImageIndex(8);
                    }}
                />
                <h4>Profile Pages</h4>

                <img
                    src="sacImages/lofis5.png"
                    alt="lo-fi"
                    onClick={() => {
                        setOpen(true);
                        setSelectedImageIndex(9);
                    }}
                />
                <h4>Home Pages</h4>

                <img
                    src="sacImages/lofis6.png"
                    alt="lo-fi"
                    onClick={() => {
                        setOpen(true);
                        setSelectedImageIndex(10);
                    }}
                />
                <br />
                <h3>Mid-Fidelity Wireframes</h3>
                <img
                    src="sacImages/midfis.png"
                    alt="mid-fi"
                    onClick={() => {
                        setOpen(true);
                        setSelectedImageIndex(11);
                    }}
                />                <br />

                <h3>High-Fidelity Wireframes</h3>
                <h4>Login Pages</h4>
                <img
                    src="sacImages/hifiLogin.png"
                    alt="high-fi"
                    onClick={() => {
                        setOpen(true);
                        setSelectedImageIndex(12);
                    }}
                />
                <br />
                <h4>Club Profile View</h4>

                <img
                    src="sacImages/hifiClub.png"
                    alt="high-fi"
                    onClick={() => {
                        setOpen(true);
                        setSelectedImageIndex(13);
                    }}
                />               <br />
                <h4>Event Pages</h4>

                <img
                    src="sacImages/hifiClubEvent.png"
                    style={{ maxHeight: '600px', width: 'auto', maxWidth: '100%', objectFit: 'contain' }}
                    alt="high-fi"
                    onClick={() => {
                        setOpen(true);
                        setSelectedImageIndex(14);
                    }}
                />
                <h4>Explore Pages</h4>

                <img
                    src="sacImages/hifiExplore.png"
                    alt="high-fi"
                    onClick={() => {
                        setOpen(true);
                        setSelectedImageIndex(15);
                    }}
                />
                <h4>Profile Pages</h4>

                <img
                    src="sacImages/hifiProfile.png"
                    alt="high-fi"
                    onClick={() => {
                        setOpen(true);
                        setSelectedImageIndex(16);
                    }}
                />
                <h4>Home Pages</h4>

                <img
                    src="sacImages/hifiHome.png"
                    alt="high-fi"
                    onClick={() => {
                        setOpen(true);
                        setSelectedImageIndex(17);
                    }}
                />
                <br />
                <h>
                    <a
                        href="https://www.figma.com/proto/44j4p2HMxwqYoxTSbfVqla/Student-Activity-Calendar?kind=proto&node-id=6632-41806&page-id=7%3A160&scaling=scale-down&show-proto-sidebar=1&starting-point-node-id=6632%3A41806&t=oC656u75iLkkVhT0-1&viewport=237%2C143%2C0.13"
                        target="_blank" rel="noreferrer"
                    >
                        Click Here to see High-Fis!
                    </a>
                </h>
     
                <br />
                <h2>5 | Presentation</h2>
                <p>Check out the{' '}<a
                    href="https://www.figma.com/proto/44j4p2HMxwqYoxTSbfVqla/Student-Activity-Calendar?kind=proto&node-id=6632-41806&page-id=7%3A160&scaling=scale-down&show-proto-sidebar=1&starting-point-node-id=6632%3A41806&t=oC656u75iLkkVhT0-1&viewport=237%2C143%2C0.13"
                    target="_blank" rel="noreferrer"
                >
                    high-fis
                </a>!

                </p>
                <br />
            </section>
            {/* <button type="button" onClick={() => setOpen(true)}>
                Open Lightbox
            </button> */}

            <Lightbox
                open={open}
                close={() => setOpen(false)}

                // opens associated image lightbox
                index={selectedImageIndex}
                slides={[
                    { src: "/sacImages/moodboard1.png" },
                    { src: "/sacImages/finalmoodboard.png" },

                    { src: "/sacImages/competitoranalysis.png" },
                    { src: "/sacImages/persona1.png" },

                    { src: "/sacImages/sitemap.png" },
                    { src: "/sacImages/lofis.png" },
                    { src: "/sacImages/lofis2.png" },
                    { src: "/sacImages/lofis3.png" },
                    { src: "/sacImages/lofis4.png" },
                    { src: "/sacImages/lofis5.png" },
                    { src: "/sacImages/lofis6.png" },

                    // 12
                    { src: "/sacImages/midfis.png" },
                    { src: "/sacImages/hifiLogin.png" },

                    // 14
                    { src: "/sacImages/hifiClub.png" },
                    { src: "/sacImages/hifiClubEvent.png" },
                    { src: "/sacImages/hifiExplore.png" },

                    // 17
                    { src: "/sacImages/hifiProfile.png" },
                    { src: "/sacImages/hifiHome.png" },

          
   



                ]}
            />
            <Footer />

        </>
    )
}
export default HippoProcess;
