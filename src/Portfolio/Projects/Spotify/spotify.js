import React, { useState, useEffect } from "react";
import Nav from "../../../NavigationBar";
import "./spotify.css";
import Footer from "../../../Footer/footer";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

function SpotifyProcess() {
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

                        <img src="spotifyImages/spotifycoverLandscape.jpg" alt="Spotify Cover Landscape" />
                    </div>
                </div>
            </section>
            <section id="header" className="title-header">
                <h1 style={{ color: "#195b32" }}>Social Spotify</h1>
                <h2>Mobile Design, UX Research, Prototyping, User Testing, User Interviews</h2>
            </section>
            <section id="overview-section" className="overview-section">
                <div className="overview">
                    <div className="overviewLeft spotify">
                        <h5 style={{ color: "#195b32" }}>Project Overview</h5>
                        <p>
                            To make Spotify a more social app that evokes nostalgia, I implemented a feature that takes the music the user has listened to and creates playlists based on time period. It then allows the user to pick photos, which creates a collage for the cover of the playlist in CD form. The user can then share this throwback playlist, evoking a feeling of nostalgia in themselves and others the playlist is shared to.
                        </p>
                        <h5>
                            <a
                                href="https://www.figma.com/proto/ENyrd84vC2k7ORePWwdnO6/TAmandaFong?type=design&node-id=52-576&t=xKPmaVLKoFW6xSRC-1&scaling=min-zoom&page-id=52%3A575&starting-point-node-id=52%3A576&mode=design"
                                target="_blank" rel="noreferrer"
                            >
                                High-Fidelity Prototype
                            </a>
                        </h5>
                    </div>
                    <div className="overviewRight spotify">
                        <h5 style={{ color: "#195b32" }}>Role</h5>
                        <p>UI/UX Designer</p>

                        <h5 style={{ color: "#195b32" }}>Timeline</h5>
                        <p>September 2023 - October 2023</p>

                        <h5 style={{ color: "#195b32" }}>Tools</h5>
                        <p>Figma</p>
                    </div>
                </div>
            </section>
            <section className="summary spotify">
                <h2>1 | UX Research</h2>
                <h3>Social-UX task analysis</h3>
                <h4>Instagram:</h4>
                <img
                    src="spotifyImages/taskAnalysisInstagram.png"
                    alt="Task Analysis Instagram"
                    onClick={() => {
                        setOpen(true);
                        setSelectedImageIndex(0);
                    }}
                />
                <h4>Spotify:</h4>
                <img
                    src="spotifyImages/taskAnalysisSpotify.png"
                    alt="Task Analysis Spotify"
                    onClick={() => {
                        setOpen(true);
                        setSelectedImageIndex(1);
                    }}
                />
                <h4>Pinterest:</h4>
                <img
                    src="spotifyImages/taskAnalysisPinterest.png"
                    alt="Task Analysis Pinterest"
                    onClick={() => {
                        setOpen(true);
                        setSelectedImageIndex(2);
                    }}
                />
                <h4>What is Social?</h4>
                <p>
                    <ul>
                        <li>Connecting with people who you can’t physically be around through music</li>
                        <li>To suggest new music to someone based on something else that a person likes.</li>
                        <li>The ability to find a new community based on shared music</li>
                        <li>To be able to connect with friends/others who love the same music as you.</li>
                    </ul>
                </p>
                <h3>User Interviews</h3>
                <img
                    src="spotifyImages/userInterviews.png"
                    alt="userInterviews"
                    onClick={() => {
                        setOpen(true);
                        setSelectedImageIndex(3);
                    }}
                />

                <h4>Discussion Guide</h4>
                <img
                    src="spotifyImages/discussionGuide.png"
                    alt="Discussion Guide"
                    onClick={() => {
                        setOpen(true);
                        setSelectedImageIndex(4);
                    }}
                />

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
                <h2>2 | Interpret</h2>
                <h3>“How Might We...”</h3>
                <img
                    src="spotifyImages/hmw.png"
                    alt="How Might We"
                    onClick={() => {
                        setOpen(true);
                        setSelectedImageIndex(5);
                    }}
                />
                <h3>Persona</h3>
                <img
                    src="spotifyImages/Kira.png"
                    alt="Persona -- Kira"
                    onClick={() => {
                        setOpen(true);
                        setSelectedImageIndex(6);
                    }}
                />
                <h4>Refine Statements</h4>
                <ol>
                    <li>As a secretary at a Fintech company, Kira has a very busy schedule and wants an easy way to connect with
                        her friends through music since she doesn’t have much free time throughout the day.</li>
                    <li>As someone who loves music and misses her friends and family back home, Kira wants music as a way to
                        bring nostalgia to her life.
                    </li>
                    <li>As someone who loves to go on walks and is constantly listening to music, Kira wants an easier way to discover new music that maybe her friends are listening to.
                    </li>
                </ol>
                <h3>Idea 1</h3>
                <h5>Feature on Spotify where you can change the view of playlists, so then the new view you can see the
                    playlists in mixtape form</h5>
                <h6>Storyboard</h6>

                <img
                    src="spotifyImages/idea1StoryBoard.png"
                    alt="Idea 1 Storyboard"
                    onClick={() => {
                        setOpen(true);
                        setSelectedImageIndex(7);
                    }}
                />
                <h6>Paper Wireframes</h6>

                <img
                    src="spotifyImages/idea1Flow.png"
                    alt="Idea 1 Flow"
                    onClick={() => {
                        setOpen(true);
                        setSelectedImageIndex(8);
                    }}
                />
                <h3>Idea 2</h3>
                <h5>Feature on Spotify that takes the music you’ve listened to and creates playlist based on time period or
                    vibes/aesthetic. Then allows you to pick pictures, that creates a collage for the cover of the playlist in
                    CD form.</h5>
                <h6>Storyboard</h6>


                <img
                    src="spotifyImages/idea2StoryBoard.png"
                    alt="Idea 2 Storyboard"
                    onClick={() => {
                        setOpen(true);
                        setSelectedImageIndex(9);
                    }}
                />
                <h6>Paper Wireframes</h6>


                <img
                    src="spotifyImages/idea2Flow.png"
                    alt="Idea 2 Flow"
                    onClick={() => {
                        setOpen(true);
                        setSelectedImageIndex(10);
                    }}
                />

                <p></p>
                <h2>3 | Design</h2>
                <h3>Low-Fidelity Wireframes</h3>
                <h>
                    <a href="https://www.figma.com/proto/ENyrd84vC2k7ORePWwdnO6/TAmandaFong?page-id=0%3A1&type=design&node-id=139-14444&viewport=-580%2C-262%2C0.25&t=N8Hj994fimAg25o3-1&scaling=min-zoom&starting-point-node-id=1%3A330&mode=design"
                        target="_blank" rel="noreferrer">
                        Click Here to see Lo-Fis!
                    </a>
                </h>
                <br />
                <img
                    src="spotifyImages/lowfi.png"
                    alt="Low-Fidelity Wireframes"
                    onClick={() => {
                        setOpen(true);
                        setSelectedImageIndex(11);
                    }}
                />
                <h3>Mid-Fidelity Wireframes</h3>
                <br />
                <img
                    src="spotifyImages/midfi.png"
                    alt="Mid-Fidelity Wireframes"
                    onClick={() => {
                        setOpen(true);
                        setSelectedImageIndex(12);
                    }}
                />

                <h3>High-Fidelity Wireframes</h3>
                <h>
                    <a
                        href="https://www.figma.com/proto/ENyrd84vC2k7ORePWwdnO6/TAmandaFong?type=design&node-id=52-576&t=xKPmaVLKoFW6xSRC-1&scaling=min-zoom&page-id=52%3A575&starting-point-node-id=52%3A576&mode=design"
                        target="_blank" rel="noreferrer"
                    >
                        Click Here to see High-Fis!
                    </a>
                </h>
                <br />
                <img
                    src="spotifyImages/highfi1.png"
                    alt="High-Fidelity Wireframe 1"
                    onClick={() => {
                        setOpen(true);
                        setSelectedImageIndex(13);
                    }}
                />
                <img
                    src="spotifyImages/highfi2.png"
                    alt="High-Fidelity Wireframe 2"
                    onClick={() => {
                        setOpen(true);
                        setSelectedImageIndex(14);
                    }}
                />

                <h2>4 | Presentation</h2>
                <p>
                    See{' '}
                    <a
                        href="https://drive.google.com/file/d/1H5ZfD6c3Q6S-0OE4NgofEz_E5AI5_orq/view?usp=sharing"
                        target="_blank" rel="noreferrer"
                    >
                        process portfolio
                    </a>{' '}
                    and{' '}
                    <a
                        href="https://drive.google.com/file/d/1BIyfmgu20gQJ5XqA4X1mhuQ7g1pn60_b/view?usp=sharing"
                        target="_blank" rel="noreferrer"
                    >
                        this video
                    </a>{' '}
                    for more information about the project.
                </p>

            </section >
            <Lightbox
                open={open}
                close={() => setOpen(false)}

                // opens associated image lightbox
                index={selectedImageIndex}
                slides={[
                    { src: "/spotifyImages/taskAnalysisInstagram.png" },
                    { src: "/spotifyImages/taskAnalysisSpotify.png" },
                    { src: "/spotifyImages/taskAnalysisPinterest.png" },

                    // 3
                    { src: "/spotifyImages/userInterviews.png" },

                    { src: "/spotifyImages/discussionGuide.png" },

                    // 5
                    { src: "/spotifyImages/hmw.png" },
                    { src: "/spotifyImages/Kira.png" },

                    //7
                    { src: "/spotifyImages/idea1StoryBoard.png" },
                    { src: "/spotifyImages/idea1Flow.png" },
                    { src: "/spotifyImages/idea2StoryBoard.png" },
                    { src: "/spotifyImages/idea2Flow.png" },

                    // 11
                    { src: "/spotifyImages/lowfi.png" },
                    { src: "/spotifyImages/midfi.png" },
                    { src: "/spotifyImages/highfi1.png" },
                    { src: "/spotifyImages/highfi2.png" },




                ]}
            />
            <Footer />

        </>
    );
}

export default SpotifyProcess;