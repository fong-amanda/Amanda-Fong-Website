
import React from "react";
import Nav from "../../../NavigationBar";
import './disrupt.css';

function DisruptProcess() {
    return (
        <>
            <Nav />
            <br />
            <section className="cover-image">
                <div className="image-background">
                    <div className="image-background-container">
                        <img src="disruptImages/disruptLandscape.jpg" alt="Disrupt Landscape" />
                    </div>
                </div>
            </section>

            <section id="header" className="title-header">
                <h1 style={{ color: '#1C1A1A' }}>Disrupt</h1>
                <h2>Web Design, Prototyping, User Testing & Research, Branding</h2>

            </section>

            <section id="overview-section" className="overview-section">
                <div className="overview">
                    <div className="overviewLeft">
                        <h5 style={{ color: "#1C1A1A" }}>Project Overview</h5>
                        <p>
                            Northeastern’s Fintech Club,
                            {' '}
                            <a href="https://www.disruptneu.com/" target="_blank" rel="noopener noreferrer">
                                Disrupt
                            </a>
                            , sought a rebrand of their social media and revamp of their website. As a designer in
                            {' '}<a href="https://scout.camd.northeastern.edu/" target="_blank" rel="noopener noreferrer">
                                Scout
                            </a>, I worked with a team of developers and other designers to design and develop this website.
                        </p>
                        <br />
                        <h5 className="disrupt">
                            <a
                                href="https://www.figma.com/proto/ldXYpkEbm49gv0sqzXp0pF/Disrupt-Hi-Fis?page-id=0%3A1&type=design&node-id=1-634&viewport=5733%2C1774%2C0.52&t=1vSW2QCw22ftuLHh-1&scaling=min-zoom&starting-point-node-id=1%3A50&mode=design"
                                target="_blank" rel="noreferrer"
                            >
                                High-Fidelity Prototype
                            </a>
                        </h5>
                        <h5 className="disrupt">
                            <a
                                href="https://disrupt.netlify.app/"
                                target="_blank" rel="noreferrer"
                            >
                                Deployed Site
                            </a>
                        </h5 >
                        <h5 className="disrupt">
                            <a
                                href="https://drive.google.com/file/d/1cvGiRNPpMmwDJKq9QRqkZqJYN11wCodr/view"
                                target="_blank" rel="noreferrer"
                            >
                                Brand Book
                            </a>
                        </h5>
                    </div>

                    <div className="overviewRight disrupt">
                        <h5 style={{ color: '#1C1A1A' }}>Role</h5>
                        <p>UI/UX Designer</p>

                        <h5 style={{ color: '#1C1A1A' }}>Team</h5>
                        <div className="three-columns-container">
                            <div className="column">
                                <h6>Project Lead:</h6>
                                <p>Preet Singh</p>
                            </div>
                            <div className="column">

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
                        <h5 style={{ color: '#1C1A1A' }}>Timeline</h5>
                        <p>September 2023 - December 2023</p>

                        <h5 style={{ color: '#1C1A1A' }}>Tools</h5>
                        <p>Figma</p>
                    </div>
                </div>
            </section>

            <section className="summary disrupt">
                <h2>What is Disrupt?</h2>
                <p>Disrupt is the only Fintech organization that provides a community driving education, advancement, and engagement for computer science and business students at Northeastern who want to gain skills related to Fintech in an era of rapidly changing financial and tech industries. </p>
                <br />
                <h1>Branding</h1>
                <hr></hr>

                <h2>Discovering the brand</h2>
                <p>We began the project by exploring and defining the ideal direction for the brand.
                    It was important for us to understand how Disrupt wants their club to be portrayed to students on campus.</p>
                <h3>Personality Levels</h3>
                <p>Brands need to have a clear personality in order for consumers to easily interact and identify with them. In this activity, our client and team indicated where they believe that the client’s company falls (or think that it should fall) within the following sets of traits. This exercise was very helpful in establishing a thoughtful brand identity. </p>
                <img src="disruptImages/personalityLevels.jpg" alt="User Story Brainstorm" />
                <h3>Moodboarding</h3>
                <img src="disruptImages/moodboarding.png" alt="Hi-fi" />
                <h3>UI Concepts</h3>
                <p>In our design approach, we crafted UI concepts with various color iterations to explore visual possibilities and align the chosen palette with our brand identity. These UIs don't represent the final homepage design; rather, they serve as a dynamic exploration, allowing for flexibility and feedback incorporation in the iterative design process. This method also enables us to prioritize user-centric design, gathering feedback to enhance both aesthetic appeal and overall user experience.
                </p>
                <img src="disruptImages/lofis.png" alt="lo-fi" />
                <br />
                <img src="disruptImages/lofis2.png" alt="lo-fi" />
                <h3>Logo Iteration</h3>
                <img src="disruptImages/logo1.png" alt="logo iterations" />
                <br />
                <img src="disruptImages/logo2.png" alt="logo iterations" />
                <br />

                <img src="disruptImages/logo3.png" alt="logo iterations" />

                <h2>Creating an Identity</h2>
                <h3>Color Palette</h3>
                <div className="two-columns-container">
                    <div className="column">
                        <img src="disruptImages/colorScheme.png" alt="Hi-fi" />

                    </div>
                    <div className="column disrupt">
                        <p>Disrupt’s colors are bold and innovative. The colors to be used in print and digital materials are Quantum Black, Nano Frost, Byte Blue, and Cyber Citron.
                            <br /><br />
                            Nano Frost is true white, whereas Quantum Black, a dark charcoal, should be used in place of pure black. On the website, Cyber Citron is used for clickable items, and Byte Blue is used as a highlight color. On marketing material, both are used equally as brand colors. </p>
                    </div>

                </div>
                <br />
                <h3>Typeface</h3>
                <div className="two-columns-container">
                    <div className="column">
                        <img src="disruptImages/type1.png" alt="Type" />

                    </div>
                    <div className="column disrupt">
                        <img src="disruptImages/type2.png" alt="Type" />
                    </div>
                </div>
                <br />
                <h3 style={{ marginBottom: -13 }}>Final Logo</h3>
                <div className="two-columns-container">
                    <div className="column">
                        <h4>Primary Identifiers</h4>
                        <img src="disruptImages/finallogo.png" alt="Type" />

                    </div>
                    <div className="column disrupt">
                        <h4>Exclusion Zones</h4>
                        <img src="disruptImages/logofinal1.png" alt="Type" />

                    </div>
                </div>
                <br />
                <h3 style={{ marginBottom: 18 }}>Social Media Templates</h3>

                <img src="disruptImages/socialmedia.png" alt="Social Media" />

                <br />
                <br />
                <br /><br />
                <br /><br />

                <h1>Website Revamp</h1>
                <hr></hr>
                <h2>UX Research</h2>
                <h3>Brainstorming</h3>
                <h4>User Story Brainstorm</h4>
                <img src="disruptImages/userStoryBrainstorm.jpg" alt="User Story Brainstorm" />
                <h4>Features Brainstorm</h4>
                <img src="disruptImages/FeatureBrainstorm.jpg" alt="Feature Brainstorm" />
                <h3>Competitor Analysis</h3>

                <h4>Rev</h4>
                <table class="table table-bordered">
                    <thead>
                        <tr className="table-first">
                            <th >Strengths</th>
                            <th >Weaknesses</th>
                            <th >Opportunities</th>
                            <th >Threats</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <ul>
                                    <li>Engaging and consistent theme for website </li>
                                    <li>Community of builders, hackers, and founders at NEU.</li>
                                    <li>Students have the opportunity to take any software idea from inception to reality in 10 weeks.</li>
                                    <li>Accepting new members on a rolling basis.</li>
                                    <li>Weekly coworking sessions, community workshops, 1-on-1 coffee chats, rev launches(showing progress to each other + top builders in the MOSAIC and Khoury community after 10 weeks), diverse verticals, lifetime membership(networking)</li>
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    <li>No previous experience as a new club/community.</li>
                                    <li>No feedback from events since they're just starting out.</li>
                                    <li>Black screens are posted on the Instagram feed to fit the theme.</li>
                                    <li>Need more photos from events or previous work.</li>
                                    <li>Exploring partnerships with other clubs.</li>
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    <li>Have a projects page on website and post about projects after done. Describing, research, goals, initiatives, etc. </li>
                                    <li>Develop good projects in 10 weeks that can be showcased and make other people want to join. </li>
                                    <li>Have an about page on website or a navigation bar instead of scrolling to find button that you’re interested.</li></ul></td>
                            <td>
                                <ul>
                                    <li>Experience, past projects, past impact, reputation at Northeastern. Therefore, lack of images on social media/testimonials
                                    </li>
                                    <li>Post new recaps from events/projects done after 10 weeks</li>
                                </ul>
                            </td>
                        </tr>

                    </tbody>
                </table>
                <h4>Khosla Ventures</h4>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Strengths</th>
                            <th scope="col">Weaknesses</th>
                            <th scope="col">Opportunities</th>
                            <th scope="col">Threats</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <ul><li>Consistent branding across all pages </li>
                                    <li>Have hand-drawn pictures for each team member that link to individual About sections</li></ul>
                            </td>
                            <td><ul><li>
                                Scrolling animations are distracting and while they add to the experience, I am not on their website to experience good animation </li>
                                <li>Second-to-last section are links but they don’t read as such </li>
                                <li>The cards on their portfolio section don’t say much about the company or the project and are just there to be there</li></ul></td>
                            <td><ul>
                                <li>Keep it clean and simple (few colors and little to no animations) </li>
                                <li>Make sure that buttons read as buttons, links read as links</li>
                            </ul></td>
                            <td><ul><li>We have a very simple typographical scheme — may cause website to look “underdeveloped”.
                            </li>
                                <li>Website typography doesn’t match logo Instagram feed - colors are used just because they are colors, no hierarchical levels to them </li>
                                <li>Don’t have portfolio section — what does Disrupt have to show as a institution?</li></ul></td>

                        </tr>

                    </tbody>
                </table>
                <h4>Tamid</h4>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Strengths</th>
                            <th scope="col">Weaknesses</th>
                            <th scope="col">Opportunities</th>
                            <th scope="col">Threats</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><ul>
                                <li>Good looking and dynamic website that has clear access to many different important sections (Applications, events, about, social media, etc.)</li>
                                <li>Clear areas about where they help with professional development</li></ul></td>
                            <td><ul>
                                <li>No real claim to being one of the more successful NEU groups.</li>
                                <li>Why choose Tamid over Disrupt?</li></ul></td>
                            <td><ul>
                                <li>Lots of information about professional event and social gatherings on the website.</li></ul></td>
                            <td><ul>
                                <li>Very large club and popular</li>
                                <li>Clear definitions of what they do and clear ways to apply, meeting dates, socials, etc. </li></ul></td>
                        </tr>

                    </tbody>
                </table>
                <h4>NEU Blockchain</h4>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Strengths</th>
                            <th scope="col">Weaknesses</th>
                            <th scope="col">Opportunities</th>
                            <th scope="col">Threats</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><ul>
                                <li>Interaction, responsive, and dynamic website(light and dark mode), animations, nice IG plugin at bottom of page. IG has all recent posts which is nice to see upcoming events if they don’t update the website calendar often</li>
                                <li>Interesting that their Press Kit page has all their (and WiBlock) branding</li></ul></td>
                            <td><ul>
                                <li>Website is a bit vague on what they actually do</li>
                                <li>Learn more button only leads to their articles page and articles aren’t necessarily related to the club</li>
                                <li>Could be more specific what kinds of education, hands on, exp, panels, networking, etc. they conduct</li>
                                <li>The composition of IG posts are rigid</li></ul></td>
                            <td><ul>
                                <li>Maybe have separate pages for subgroups of the club like elevate</li>
                                <li>Be more descriptive and specific on our website. Highlight tangible things that the club has done</li>
                                <li>Maybe include a couple more photos that show people in the audience just actively listening/working rather than just people on the stage or speaking</li></ul></td>
                            <td><ul>
                                <li>They have a nice brand system and logo. Uses a few colors but in different shades so it feels effective and recognizable</li></ul></td>
                        </tr>

                    </tbody>
                </table>
                <h4>Entrepreneurship Club</h4>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Strengths</th>
                            <th scope="col">Weaknesses</th>
                            <th scope="col">Opportunities</th>
                            <th scope="col">Threats</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><ul>
                                <li>Largest student-led organization on campus </li>
                                <li>4 annual programs open to all students </li>
                                <li>Access to resources (Engage, Speaker series) and a vast network - Husky Startup challenge</li></ul></td>
                            <td><ul>
                                <li>Website only contains event info and team info (project examples are listed on Medium.com) </li>
                                <li>Semi-consistent branding </li>
                                <li>Social media lacks cohesion </li>
                                <li>Website looks outdated </li>
                                <li>#1 NEU business club</li></ul></td>
                            <td><ul>
                                <li>Have a page that goes in-depth about past projects (results of startup challenges), and recordings to past speaker series </li>
                                <li>Develop brand guidelines for social media and website</li></ul></td>
                            <td><ul>
                                <li>Sheer size is intimidating </li>
                                <li>Lack of niche might cause concern for new members (”entrepreneurship is so broad”) </li>
                                <li>New funding and revenue streams (where to get consistent funding for programs) </li>
                                <li>Lack of focus on AI and crypto</li></ul></td>
                        </tr>

                    </tbody>
                </table>

                <h3>Common Themes</h3>
                <ul>
                    <li>Most have a portfolio section: what does Disrupt have to show as an organization?</li>
                    <li>Info about initiative, history, etc.</li>
                    <li>Typographical scheme of websites may be underdeveloped, which gives a bad first impression.</li>
                    <li>Need consistent branding that is cohesive across all platforms</li>
                    <li>Easily accessible links + CTAs</li>
                </ul>
                <h2>Interpret</h2>
                <h3>Elevator Pitch</h3>
                <h4>Disrupt is the only organization that provides a high growth opportunity to consult for fintech startups for neu undergrads in neu who want to get to know an intimate group and learn more about consulting in an era of increased interest and demand for fintech products</h4>
                <h3>Refine Statements</h3>
                <h4>
                    <ol>
                        <li>
                            As a user of Disrupt’s website, I want to easily find access to other external material related to Disrupt so that I can actively take part in those activities/materials.
                        </li>
                        <li style={{ marginTop: 15 }}>
                            As a user of Disrupt NEU website, I want to see a clear view of the available programs of Disrupt so that I can easily navigate to them if I so choose.
                        </li>
                        <li style={{ marginTop: 15 }}>
                            As a user of the Disrupt website, I want to be able to click the buttons on the screen so that I can learn about a variety of topics further.
                        </li>
                    </ol>
                </h4>
                <h2>Make</h2>
                <h3>Sitemap</h3>

                <img src="disruptImages/sitemap.jpg" alt="Paper Sketches" />
                <h3>Paper Sketches</h3>

                <img src="disruptImages/paperSketch1.jpg" alt="Paper Sketches" />
                <img src="disruptImages/paperSketch2.jpg" alt="Paper Sketches" />

                <h2>Design</h2>
                <h3>Low-Fidelity Wireframes</h3>
                <img src="disruptImages/lofi1.png" alt="Lo-fi" />
                <br />
                <img src="disruptImages/lofi2.png" alt="Lo-fi" />
                <br />

                <img src="disruptImages/lofi3.png" alt="Lo-fi" />

                <br />
                <h3>Mid-Fidelity Wireframes</h3>
                <img src="disruptImages/midfi1.png" alt="Lo-fi" />
                <br />
                <img src="disruptImages/midfi2.png" alt="Lo-fi" />
                <br />

                <img src="disruptImages/midfi3.png" alt="Lo-fi" />
                <h3>High-Fidelity Wireframes</h3>

                <h>
                    <a
                        href="https://www.figma.com/proto/ldXYpkEbm49gv0sqzXp0pF/Disrupt-Hi-Fis?page-id=0%3A1&type=design&node-id=1-634&viewport=5733%2C1774%2C0.52&t=VyQre3zkxeZbS3LF-1&scaling=min-zoom&starting-point-node-id=1%3A50&mode=design"
                        target="_blank" rel="noreferrer"
                    >
                        Click Here to see High-Fis!
                    </a>
                </h>
                <h4>Home and About Pages</h4>
                <img src="disruptImages/hifiHomeAbout.png" alt="Hi-fi" />
                <br />
                <h4>Venture Pages</h4>

                <img src="disruptImages/hifiVentures.png" alt="Hi-fi" />
                <br />
                <h4>Consulting, Events, Newsroom, and Navigation Bar Pages</h4>
                <img src="disruptImages/hifiConsultingEventsNewsroom.png" alt="Hi-fi" />
                <br />
                <h2>Presentation</h2>
                <p>
                    See the deployed site {' '}
                    <a
                        href="https://disrupt.netlify.app/"
                        target="_blank" rel="noreferrer"
                    >
                        here
                    </a>{' '}and check out the{' '}<a
                        href="https://www.figma.com/proto/ldXYpkEbm49gv0sqzXp0pF/Disrupt-Hi-Fis?page-id=0%3A1&type=design&node-id=1-634&viewport=5733%2C1774%2C0.52&t=DIvEnSkAVugGczaJ-1&scaling=min-zoom&starting-point-node-id=1%3A50&mode=design"
                        target="_blank" rel="noreferrer"
                    >
                        high-fis
                    </a>!

                </p>
                <br />
            </section>
        </>
    )
}
export default DisruptProcess;