import React, { useEffect } from "react";
import Nav from "../../../NavigationBar";
import "./finances.css";
import Footer from "../../../Footer/footer";
function FinacesProcess() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Nav />
            <br />

            <section className="cover-image">
                <div className="image-background">
                    <div className="image-background-container">
                        <img src="financesImages/financescoverLandscape.jpg" alt="Finaces Cover Landscape" />
                    </div>
                </div>
            </section>
            <section id="header" className="title-header">
                <h1 style={{ color: "#D32B6D" }}>Youthful Finances</h1>
                <h2>Web Design, UX Research, Prototyping, User Testing, User Interviews</h2>
            </section>
            <section id="overview-section" className="overview-section">
                <div className="overview">
                    <div className="overviewLeft">
                        <h5 style={{ color: "#D32B6D" }}>Project Overview</h5>
                        <p>
                            To make Spotify a more social app that evokes nostalgia, I implemented a feature that takes the music the user has listened to and creates playlists based on time period. It then allows the user to pick photos, which creates a collage for the cover of the playlist in CD form. The user can then share this throwback playlist, evoking a feeling of nostalgia in themselves and others the playlist is shared to.
                        </p>
                        <h5>
                            <a
                                href="https://www.figma.com/proto/Nyq5vcRnMUTxvOiUejkvIa/Jenna-Sigman-%26-Amanda-Fong?page-id=174%3A125&type=design&node-id=318-133&viewport=459%2C268%2C0.06&t=4at8PCl61vxncBIv-1&scaling=scale-down&mode=design"
                                target="_blank" rel="noreferrer"
                            >
                                High-Fidelity Prototype
                            </a>
                        </h5>
                    </div>
                    <div className="overviewRight finances">
                        <h5 style={{ color: "#D32B6D" }}>Role</h5>
                        <p>UI/UX Designer</p>
                        <h5 style={{ color: "#D32B6D" }}>Team</h5>
                        <p>Amanda Fong, Jenna Sigman</p>
                        <h5 style={{ color: "#D32B6D" }}>Timeline</h5>
                        <p>November 2023 - December 2023</p>

                        <h5 style={{ color: "#D32B6D" }}>Tools</h5>
                        <p>Figma</p>
                    </div>
                </div>
            </section>
            <section className="summary finances">
                <h2>UX Research</h2>
                <h3>Social-UX task analysis</h3>
                <h4>Money Manager:</h4>
                <img src="financesImages/moneyManagerAudit.png" alt="Task Analysis Money Manager" />
                <h4>Mint:</h4>
                <img src="financesImages/mintAudit.png" alt="Task Analysis Mint" />
                <h4>Monarch Money:</h4>
                <img src="financesImages/monarchAudit2.png" alt="Task Analysis Mint" />
                <img src="financesImages/monarchAudit.png" alt="Task Analysis Mint" />
                <h4>Audit Overview</h4>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Bank of
                                America App
                            </th>
                            <th scope="col">Money
                                Manager
                            </th>
                            <th scope="col">Monarch Money
                            </th>
                            <th scope="col">Mint
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">What is taught or sold?
                            </th>
                            <td>Learn to manage personal accounts
                            </td>
                            <td>Manage and track daily expenses
                            </td>
                            <td>A money management experience
                            </td>
                            <td>Free financial management app
                            </td>

                        </tr>
                        <tr>
                            <th scope="row">What key functions or features are offered?
                            </th>
                            <td>Showing account statements
                            </td>
                            <td>Spending log, Stats about expenses and income
                            </td>
                            <td>Track expenses, accounts, investments
                            </td>
                            <td>Track expenses, budgeting, financial goal setting, credit score monitoring, bill reminders
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">What are recurring UI/UX patterns, mental
                                models, and interface metaphors?
                            </th>
                            <td>Easy navigation tabs, continuous scrolling through statements
                            </td>
                            <td>Use of icons and color as a focal point, Simple navigation model
                            </td>
                            <td>Cards displaying different tasks.
                                checklists and progress bars
                            </td>
                            <td>Visual representations of financial data.
                                Easy navigation tabs
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">What does onboarding look like?
                            </th>
                            <td>2 simple steps, quick log-in page
                            </td>
                            <td>No need to log in or sign up, app starts instantly
                            </td>
                            <td>Long survey about current financial situation and goals
                            </td>
                            <td>Account setup, personalization, and tutorial on how to use app
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">How is the relationship maintained over time?
                            </th>
                            <td>Consistent relationship, because used for one purpose only
                            </td>
                            <td>Accumulates data and creates statistical graphs
                            </td>
                            <td>Connected to all accounts, so information is updated
                            </td>
                            <td>through ongoing features, notifications, and regular updates.
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Are there offline components?  If so, what?
                            </th>
                            <td>No offline components
                            </td>
                            <td>No offline components
                            </td><td>No offline components
                            </td><td>No offline components
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">How does the product make you feel? Why?
                            </th>
                            <td>Like a responsible adult for being able to handle my finances
                            </td>
                            <td>The app has a simple UI which is easy to understand and makes it quick and efficient
                            </td>
                            <td>The UI felt nice to use and the colors kept the experience engaging
                            </td>
                            <td>Allows me to feel in control of my finances and aware of my spending habits
                            </td>                      </tr>
                    </tbody>
                </table>
                <h4>What is financial planning?</h4>


                <p>
                    <ul>
                        <li>Managing a budget
                        </li>
                        <li>An efficient and realistic way to track expenses
                        </li>
                        <li>Monitoring your habits
                        </li>
                    </ul>
                </p>
                <h3>User Interviews</h3>
                <img src="financesImages/userInterviews.png" alt="userInterviews" />

                <h4>Discussion Guide</h4>
                <img src="financesImages/discussionGuide.jpg" alt="Discussion Guide" />
                <h3></h3>

                <h4>Interview Takeaways</h4>
                <p>
                    <ol>
                        <li>People mainly use the app to make playlists of their favorite songs</li>
                        <li>Many like making shared playlists
                        </li>
                        <li>Some people use Blends for fun with their friends but doesn’t end up listening to the Blended playlists
                            that Spotify makes because often half the songs on them are “suggested” ones and not the ones that they
                            and the other person in the Blend actually listen to
                        </li>
                        <li>People only look at the friends listening feature on the desktop
                        </li>
                        <li>People often like to discover new artists, but usually listen to artists they already knows and like
                        </li>
                        <li>People sometimes check concert venues and dates on Spotify
                        </li>
                    </ol>
                </p>
                <h2>Interpret</h2>
                <h3>“How Might We...”</h3>
                <h5>“Create a way for users to clearly see and be able to track their spending easily?”
                </h5>
                <h3>Personas</h3>
                <img src="financesImages/persona1.jpg" alt="Persona" />
                <img src="financesImages/persona2.jpg" alt="Persona" />
                <img src="financesImages/persona3.jpg" alt="Persona" />


                <h4>Refine Statements</h4>
                <ol>
                    <li>As an undergraduate student that has a very busy schedule, Marissa wants to learn more about independently managing her finances and spending.
                    </li>
                    <li>As a young independent Adult, Tara wants to learn more on how to manage her finances and track her own spending.

                    </li>
                    <li>As a high school student that doesn’t know much about finances, Taylor wants to be able to track her spending so her parents don’t get mad at her for spending too much.

                    </li>
                </ol>
                <h3>Idea 1</h3>
                <h5>Spreadsheet-driven Website
                </h5>
                <h6>Storyboard</h6>
                <img src="financesImages/idea1Storyboard.png" alt="Idea 1 Storyboard" />
                <h6>Paper Wireframes</h6>
                <p>There will be a way for users to sign up for the first time, where they enter their card information. From there, the program automatically adds their card transactions and can see multiple cards under their account, even if they’re from different banks. Users can view their monthly and yearly expenses in a variety of graph forms.
                </p>
                <img src="financesImages/paperWireframeIdea1.png" alt="Idea 1 Flow" />
                <h3>Idea 2</h3>
                <h5>SpendShare - Social Budgeting App
                </h5>
                <h6>Storyboard</h6>
                <img src="financesImages/idea2StoryBoard.png" alt="Idea 2 Storyboard" />
                <h6>Paper Wireframes</h6>
                <p>There will be a way for users to sign up and login. They there will be 3 options to track your shared expenses with others and personal expenses. Each one will take you to a page where you can manage the difference expenses and will let you know if you paid the expense already or not.
                </p>
                <img src="financesImages/paperWireframeIdea2.png" alt="Idea 2 Flow" />

                <p></p>
                <h2>Design</h2>
                <h3>Low-Fidelity Wireframes</h3>

                <br />
                <img src="financesImages/lowFis.png" alt="Low-Fidelity Wireframes" />
                <h3>Mid-Fidelity Wireframes</h3>
                <br />
                <img src="financesImages/midfi1.png" alt="Mid-Fidelity Wireframes" />
                <br />
                <img src="financesImages/midfi2.png" alt="Mid-Fidelity Wireframes" />
                <br />
                <img src="financesImages/midfi3.png" alt="Mid-Fidelity Wireframes" />


                <h3>High-Fidelity Wireframes</h3>
                <h>
                    <a
                        href="https://www.figma.com/proto/Nyq5vcRnMUTxvOiUejkvIa/Jenna-Sigman-%26-Amanda-Fong?page-id=174%3A125&type=design&node-id=318-133&viewport=459%2C268%2C0.06&t=4at8PCl61vxncBIv-1&scaling=scale-down&mode=design"
                        target="_blank" rel="noreferrer"
                    >
                        Click Here to see High-Fis!
                    </a>
                </h>
                <br />
                <h4>Login/Signup Pages</h4>
                <img src="financesImages/login.png" alt="High-Fidelity Wireframes" />
                <br />
                <h4>Monthly Pages</h4>
                <img src="financesImages/monthlyHifi.png" alt="High-Fidelity Wireframes" />
                <h4>Yearly Pages</h4>
                <img src="financesImages/yearlyHifi.png" alt="High-Fidelity Wireframes" />
                <h4>Spreadsheet Pages</h4>
                <img src="financesImages/spreadsheetHifi.png" alt="High-Fidelity Wireframes" />
                <h2>Presentation</h2>
                <p>
                    See{' '}
                    <a
                        href="https://docs.google.com/presentation/d/1LfZVztHYPKNmCCjmjNPD5iHZmJwmoYFWYd1-0Mfx_Ek/edit?usp=sharing"
                        target="_blank" rel="noreferrer"
                    >
                        process portfolio
                    </a>{' '}

                    for more information about the project.
                </p>

            </section >

            <Footer />

        </>
    );
}

export default FinacesProcess;
