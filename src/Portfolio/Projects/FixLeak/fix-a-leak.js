import React, { useEffect } from "react";
import "./fixLeak.css";
import Nav from "../../../NavigationBar";
import Footer from "../../../Footer/footer";
function FixLeakProcess() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (

        <div>
            <Nav />
            <br />
            <section className="cover-image">
                <div className="image-background">
                    <div className="image-background-container">
                        <img src="fixALeak Images/Cover2Landscape.jpg" alt="Cover" />
                    </div>
                </div>
            </section>
            <section id="header" className="title-header">
                <h1>Fix-A-Leak</h1>
                <h2>Mobile Design, UX Research, Prototyping, User Testing, User Interviews</h2>
            </section>

            <section id="overview-section" className="overview-section">
                <div className="overview">
                    <div className="overviewLeft">
                        <h5>Project Overview</h5>
                        <p>
                            People often don’t know who to contact when they approach a mechanical issue in
                            the building. They likely don’t say anything or they contact the wrong person.
                            The goal of this project was to develop an app that would allow residents to
                            easily report any mechanical issues they encountered in a building. To start the
                            human-centered design and evaluation process, we conducted interviews with some
                            representative users. We gathered their valuable insight and feedback through a
                            Google form we created and sent to them. These responses from our users were used
                            to better understand their needs and expectations associated with such building issues
                            before sketching out and prototyping UIs. Following design iteration, evaluation,
                            and revisions, we ultimately arrived at a final design. This report outlines the
                            app's design process and presents the specifics of our evaluation, including
                            results and recommendations for future enhancements.
                        </p>
                        <h5><a href="https://ihlp9w.axshare.com/?id=h5upi9&p=intro" target="_blank" rel="noreferrer">High-Fidelity Prototype</a></h5>
                    </div>
                    <div className="overviewRight">
                        <h5>Role</h5>
                        <p>UI/UX Designer</p>
                        <h5>Team</h5>
                        <p>Amanda Fong, Benjamin Kataoka, Keelan Donovan, Matthew Li</p>
                        <h5>Timeline</h5>
                        <p>May 2023 - June 2023</p>
                        <h5>Tools</h5>
                        <p>Axure</p>
                    </div>
                </div>
            </section>

            <section className="summary leak">
                <h2>Problem Statement</h2>
                <p>Building repairs and maintenance can be extremely expensive and damaging if not done on time. Although it
                    would be
                    optimal to have an engineer on sight at all times, the cost of doing so would overweigh the benefits. This
                    leaves
                    us with the question of what are residents or even visitors supposed to do when they encounter a maintenance
                    issue.
                    Of course, they can inform the building managers, however, this can lead to not only miscommunications
                    between
                    the managers and engineers but also delays in the repair, increasing the risk of the issue becoming more
                    problematic. Therefore, the problem that our team addressed in this project was the issue of maintenance in
                    a building
                    like the ones mentioned above.
                    Although the main problem was established, there were other challenges that we had to address such as the
                    one regarding
                    the target audience. With such a broad challenge, the target audience will of course be broad as well. In
                    this
                    case, the residents or visitors of any building and the engineers/managers of it would be the audience,
                    making the
                    age range very wide. That being said, we faced the challenge of making the solution intuitive for the
                    tech-savvy
                    generation, while also making it easy to understand for the older generations.

                    To tackle this challenge, we designed a solution that would streamline the process of getting information
                    from residents or visitors of a building to the engineers and managers with the expertise to fix the issue.
                    When developing
                    a solution, we came up with multiple ideas including a website and an even simple google form. However, we
                    believed the
                    most effective solution was a mobile application. Inside the application, we planned on including an AI
                    chatbot to help
                    generate enough detailed information from the users to provide the engineers with as many details as
                    possible. Developing
                    this feature will help improve the efficiency of how a building operates, as well as the satisfaction of
                    both the users and
                    engineers. However, we were unable to implement this as the prototype development software we used had
                    limited features,
                    therefore in our current prototype we stuck with a Wizard UI design pattern. Although we were unable to
                    continue with our original
                    design, this new design had its benefits. By using a Wizard pattern, the whole process of reporting an issue
                    becomes
                    extremely user-friendly as it allows the user to easily track their progress and focus on each task without
                    being bombarded by
                    information.</p>

                <h2>Challenges</h2>
                <ol>
                    <li>What are residents or even visitors supposed to do when they encounter a maintenance issue?</li>
                    <li>An app that allows users to easily report an issue</li>
                    <li>Easy for people of all different backgrounds to use</li>
                </ol>

                <h2>Design Process</h2>
                <p>Used the Design Thinking approach for solving this problem. To practice design thinking we followed the below
                    process.</p>
                <img src="fixALeak Images/designProcess.png" alt="Design Process" />

                <h3>Discover Phase</h3>
                <p>Used the Design Thinking approach for solving this problem. To practice design thinking we followed the below
                    process.</p>
                <h4>Quantitative Research</h4>
                <p>To start the human-centered design and evaluation process, we conducted interviews with some representative
                    users. We gathered
                    their valuable insight and feedback through a Google form we created and sent to them. These responses from
                    our
                    users were used to better understand their needs and expectations associated with such building issues
                    before sketching
                    out and prototyping UIs.</p>

                <h4>We interviewed our shareholder, Bill Holt.</h4>
                <ul>
                    <li>The interview confirmed the requirements of the app that we developed.</li>
                    <li>Confirmed we needed to understand the information that engineers needed to fix a problem and
                        understand
                        the
                        technologies available to do so.</li>
                    <li>Confirmed we needed to understand our users to develop a product that suits the user instead of
                        making
                        the
                        user suit the product.</li>
                </ul>

                <p>We surveyed potential users</p>
                <ul>
                    <li>The survey confirmed only half our users feel comfortable following online instructions to fix a
                        maintenance
                        issue</li>
                    <li>Most users feel comfortable using mobile apps on their phone</li>
                    <li>Half aren’t knowledgeable with tools that they might need to fix something like a leak</li>
                </ul>

                <h3>Define Phase</h3>
                <p>After completing our contextual inquiry process, analysis, and collecting data from surveys and
                    interviews,
                    we
                    developed a persona and utilized Whimsical to create affinity diagrams and notes.</p>

                <img src="fixALeak Images/audrey.png" alt="Persona" />
                <img src="fixALeak Images/affinity diagram.png" alt="Affinity Diagram" />
                <img src="fixALeak Images/notes.png" alt="Notes" />

                <h3>Ideation Phase</h3>
                <p>We created rough sketches for our prototype. We decided that to generate our wireframes, we would look at
                    the
                    four sketches that we produced and extract the best parts out of all of them and combine them together.
                    This
                    included an AI chatbot that would
                    ask users for more information if the algorithm believed that there was not enough for the Engineer to
                    work
                    off of.</p>
                <img src="fixALeak Images/ideationPhase.png" alt="Ideation Phase" />
                <h3>Design Phase</h3>
                <p>Followed the below steps in the design phase:</p>
                <ol>
                    <li>Paper Sketches</li>
                    <li>Low-Fidelity wireframes in Balsamiq</li>
                    <li>Mid-Fidelity wireframes in Axure</li>
                    <li>Final Design </li>
                </ol>
                <h4>Paper Sketches</h4>
                <img src="fixALeak Images/paperSketch1.png" alt="paperSketch1" />
                <img src="fixALeak Images/paperSketch2.png" alt="paperSketch2" />
                <img src="fixALeak Images/paperSketch3.png" alt="paperSketch3" />

                <h4>Low-Fidelity Wireframes</h4>
                <h5><a href="https://balsamiq.cloud/svhx3ll/pn0lifi">Click Here to see on Balsamiq!</a></h5>
                <h5>Resident Interfaces</h5>
                <img src="fixALeak Images/LF1.png" alt="Low-fidelity1" />
                <img src="fixALeak Images/LF2.png" alt="Low-fidelity2" />
                <h5>Engineer Interfaces</h5>
                <img src="fixALeak Images/LF3.png" alt="Low-fidelity3" />

                <h4>Mid-Fidelity Wireframes</h4>
                <h5>Resident Interfaces</h5>
                <img src="fixALeak Images/MF1.png" alt="Medium-fidelity1" />

                <h5>Engineer Interfaces</h5>
                <img src="fixALeak Images/MF2.png" alt="Medium-fidelity2" />

                <h2>Final Design</h2>
                <h5><a href="https://ihlp9w.axshare.com/?id=h5upi9&p=intro">Click Here to see on Axure!</a></h5>

                <h5>Start/Login Interfaces</h5>
                <img src="fixALeak Images/loginInterface.png" alt="Login Interface" />

                <h5>Resident Interfaces</h5>
                <img src="fixALeak Images/residentInterface.png" alt="Resident Interface" />

                <h5>Engineer Interfaces</h5>
                <img src="fixALeak Images/engineerInterface.png" alt="Engineer Interface" />

                <h2>Presentation</h2>
                <p>See <a href="https://docs.google.com/presentation/d/1KMLKFvJxZyMVsiU0NrcO0XqTdfgBQ3U9CIGj6BBp6p0/edit#slide=id.p">Google Slides Presentation</a> for more information about the project.</p>

                <h2>Results</h2>
                <h5>Observed Results</h5>
                <img src="fixALeak Images/observedResults.png" alt="Observed Results" />
                <h3>Task Completion Rates</h3>
                <p>Out of our eight total tasks, our participants have completed all of them successfully. This shows that
                    our
                    app is easy and intuitive to use for the participants that we have surveyed.</p>
                <img src="fixALeak Images/taskCompletionRates.png" alt="Task Completion Rates" />
                <h3>Time on Task</h3>
                <p>When we compared the average time on task of the participants of our survey to the average time on task
                    of
                    our team, we received these results. The industry standard for efficiency that
                    we are looking to meet is 80%. While some of our tasks far exceed that, tasks 1, 5, 6, 7, and 8 did not
                    meet
                    that standard. We hope to fix those lower task-based efficiency percentages
                    to exceed the industry standard in our final design.</p>
                <img src="fixALeak Images/timeOnTask.png" alt="Time on Task" />
                <h3>Task-Based Usability</h3>
                <p>When conducting our survey on our participants, we asked them to rate the usability of every task that we
                    had
                    them complete. On a scale of 5, the average scores that the participants
                    provided us were the ones below. We have far exceeded the industry standard of 4 in all of our tasks.
                    While
                    we are proud of these tasked-based usability scores, we know that we
                    still have room for improvement.</p>
                <img src="fixALeak Images/taskBasedUsability.png" alt="Task-Based Usability" />
                <h3>Overall Perceived Usability</h3>
                <p>The system usability scale ranges from 0-100 with the higher end meaning a higher overall perceived
                    usability. At
                    the end of the survey we conducted, we used the system usability scale questions and asked the users to
                    provide us with their feedback. The average score from the system
                    usability scale that we received was 85 out of 100. The score that we
                    wanted to pass was 80 out of 100, and we have done that. However, we want to get as close to 100 as
                    possible.
                </p>
                <img src="fixALeak Images/systemUsabilityScoreChart.png" alt="Overall Perceived Usability" />

                <h2>Discussion</h2>
                <p>Overall, our results were fairly positive for this stage of the project. We found that our app
                    was extremely effective as we received a 100% task completion from all four of our participants
                    in the usability testing. In terms of efficiency, we found that some tasks were very easy to complete
                    with our participants outsourcing the experts in multiple different tests, however there were also
                    some big inefficiencies. For example, tasks 1 and 5-8 received efficiency percentages of around
                    50% meaning that the participants took a much longer time to complete these tasks than the experts.
                    These results indicate that we must revise the interface to make navigating through the app to complete
                    tasks more simple and direct. This can be done through more intuitive buttons and navigation tips.
                    Despite some inefficiency, we did receive a system usability score of 85 which is above the industry
                    average. Due to this, we must be careful when revising our prototype for efficiency to ensure that we
                    do not take away from the overall usability.  In the end, despite our users being able to complete
                    every task, some of them took much longer to complete than we would like. Therefore, our final
                    revisions will be focused on making a more free flowing interface that allows our users to navigate
                    through our app with less thinking. The design recommendations that we have come up with are key to
                    helping us improve our design. We were able to gather these problems and recommendations, during
                    our observations of our participants completing our survey. We analyzed the possible problems that
                    they had with our interface and asked them how we could improve it and make it easier for them. The
                    most important issues that we need to fix include the misleading password mismatch error on the home
                    screen, discarding the back button on homepages, making the slider more intuitive to use on the report
                    issue page, and explicitly stating that the description of the users’ location and problem were mandatory.
                    Using the table of recommendations that we have generated, we will improve our current design to implement
                    these changes.
                </p>

                <h2>Conclusion</h2>
                <p>As we near the final iteration of our project, it is important to look back at the entire life cycle of our
                    product to learn what we need to include for our final prototype. The process of receiving human feedback on
                    the actual real-world usability of our app has been crucial to this process. From our summative evaluation,
                    we concluded that although our app gets the job done there is much more work to be done in order to ensure
                    that our app is not only functional but also efficient. If it takes too long for our users to complete an
                    issue report, for example, there is a high likelihood that they will give up on the process which renders
                    our app completely useless. Luckily, through our timed test scenarios, we know exactly which tasks and
                    processes to focus on. However, it is also important to realize the limitations of our results.
                    For instance, when it comes to the efficiency data, the participants of our testing scenarios were
                    being compared to the times that it took us, the creators of the app, to complete each task. Obviously,
                    since we implemented the prototype and created the scenarios, we have a strong familiarity with the
                    interface which will present some bias in the data. Due to this, we are looking for the users to have
                    an efficiency score of 80% when compared to the experts. Additionally, if we could do something differently,
                    we would have liked to have more realistic users perform tasks for the engineer role. In this specific
                    case, we were limited to having our fellow students complete tests for the resident role and engineer role.
                    This did provide us with some data although we believe that gaining insight from stakeholders that would
                    actually use the interface on a day-to-day basis would be extremely valuable. In conclusion, our focus in
                    our final iteration of the app will be to increase the efficiency of our app while fixing some bugs that
                    exist already. By revising our app to fix these things, we believe that we will have an efficient, effective,
                    and usable product that can be scaled to represent a broader scope of buildings.</p>
            </section>
            <Footer />

        </div>
    );
}

export default FixLeakProcess;