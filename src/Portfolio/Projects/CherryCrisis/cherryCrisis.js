import React, { useState, useEffect } from "react";
import Nav from "../../../NavigationBar";
import "./../projects.css";
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
            <img
              style={{ cursor: "auto" }}
              src="cherryImages/cherryLandscape.png"
              alt="Cherry Landscape"
            />
          </div>
        </div>
      </section>

      <section id="header" className="title-header">
        <h1 className="cherry">Cherry Crisis</h1>
        <h4>
          Web Development, Web Design, Prototyping, User Testing & Research,
          Branding
        </h4>
      </section>

      <section id="overview-section" className="overview-section">
        <div className="overview">
          <div className="overviewLeft cherry">
            <h5 >Project Overview</h5>
            <p>
              As part of{" "}
              <a
                href="https://scout.camd.northeastern.edu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Scout
              </a>
              , I had the opportunity to work with a talented team of other
              developers and designers to create the brand identity and develop
              the website for{" "}
              <a
                href="https://www.instagram.com/cherry.crisis/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cherry Crisis,
              </a>{" "}
              a genre-bending group of 4 non-male identifying musicians based in
              Boston. Together, we crafted a unique and memorable digital
              presence that captures the essence of their music and brand.
            </p>
            <br />
            <h5 className="cherry">
              <a
                href="https://www.figma.com/proto/YqIyjmyv9lejZ5vgWVlGG5/Cherry-Crisis-Final-Prototype?page-id=0%3A1&node-id=0-44&viewport=770%2C992%2C0.07&t=rB8y3OnxB6hgXK9o-1&scaling=min-zoom&content-scaling=fixed"
                target="_blank"
                rel="noreferrer"
              >
                High-Fidelity Prototype
              </a>
            </h5>
            <h5 className="cherry">
              <a
                href="https://cherrycrisis.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Deployed Site
              </a>
            </h5>
          </div>

          <div className="overviewRight cherry">
            <h5>Role</h5>
            <p>Developer & UI/UX Designer</p>

            <h5>Team</h5>
            <div className="three-columns-container">
              <div className="column">
                <h6>Project Lead:</h6>
                <p>Emma Wong</p>

                <h6>Design Lead:</h6>
                <p>Emlyn Griffiths</p>
              </div>
              <div className="column">
                <h6>Designers:</h6>
                <p>Amie Chen, Brendan DiTullio, Taylie Kawakami, Amanda Fong</p>

                <h6>Tech Lead:</h6>
                <p>Jon Shih</p>
              </div>
              <div className="column">
                <h6>Developers:</h6>
                <p>Ananya Radhakrishnan, Ivan Rudyakov, Amanda Fong</p>
              </div>
            </div>
            <h5 >Timeline</h5>
            <p>January 2024 - April 2024</p>

            <h5 >Tools</h5>
            <p>Figma, JavaScript (React.js), CSS, Git</p>
          </div>
        </div>
      </section>

      <section className="summary cherry">
        <h2>What is Cherry Crisis?</h2>
        <p>
          Cherry Crisis is a genre-bending group of 4 non-male identifying
          musicians based in Boston. They're all about bringing more queer,
          feminine energy to the music scene. As big fans of Boston and DIY
          music, they want to make it a safer and more inclusive environment for
          everyone. By being upfront about who they are and putting our
          experiences into their music, they hope to start conversations and
          build a real sense of connection with the local music community.
        </p>
        <br />
        <h1>Branding</h1>
        <hr />

        <h2>1 | Discovering the brand</h2>
        <p>
          We began the project by exploring and defining the ideal direction for
          the brand. It was important for us to understand how Cherry Crisis
          wants their club to be portrayed to the music community.
        </p>
                <br />

        <h3>Personality Levels</h3>
        <div className="two-columns-container">
          <div className="column">
            <img
              src="cherryImages/personalityLevels.png"
              alt="User Story Brainstorm"
              onClick={() => {
                setOpen(true);
                setSelectedImageIndex(0);
              }}
            />
          </div>
          <div className="column">
            <p>
              Brands need to have a clear personality in order for consumers to
              easily interact and identify with them. In this activity, our
              client and team indicated where they believe that the client's
              company falls (or think that it should fall) within the following
              sets of traits. This exercise was very helpful in establishing a
              thoughtful brand identity.
            </p>
          </div>
        </div>
                <br />

        <h3>Moodboarding</h3>
        <div className="two-columns-container">
          <div className="column">
            <img
              src="cherryImages/moodboarding.png"
              alt="Moodboard"
              onClick={() => {
                setOpen(true);
                setSelectedImageIndex(1);
              }}
            />
          </div>
          <div className="column">
            <img
              src="cherryImages/moodboarding2.png"
              alt="Moodboard"
              onClick={() => {
                setOpen(true);
                setSelectedImageIndex(2);
              }}
            />
          </div>
        </div>
        <div className="two-columns-container">
          <div className="column">
            <img
              src="cherryImages/moodboarding3.png"
              alt="Moodboard"
              onClick={() => {
                setOpen(true);
                setSelectedImageIndex(3);
              }}
            />
          </div>
          <div className="column">
            <img
              src="cherryImages/moodboarding4.png"
              alt="Moodboard"
              onClick={() => {
                setOpen(true);
                setSelectedImageIndex(4);
              }}
            />
          </div>
        </div>
                <br />


        <h3>Logo Iterations</h3>
        <div className="two-columns-container">
          <div className="column">
            <img
              src="cherryImages/logo1.png"
              alt="logo iterations"
              onClick={() => {
                setOpen(true);
                setSelectedImageIndex(5);
              }}
            />
                    <br />
        <br />

              <img
              src="cherryImages/logo3.png"
              alt="logo iterations"
              onClick={() => {
                setOpen(true);
                setSelectedImageIndex(7);
              }}
            />        <br />
        <br />

              <img
              src="cherryImages/logo5.png"
              alt="logo iterations"
              onClick={() => {
                setOpen(true);
                setSelectedImageIndex(9);
              }}
            />
          </div>
          <div className="column">
            <img
              src="cherryImages/logo2.png"
              alt="logo iterations"
              onClick={() => {
                setOpen(true);
                setSelectedImageIndex(6);
              }}
            />        <br />
        <br />

              <img
              src="cherryImages/logo4.png"
              alt="logo iterations"
              onClick={() => {
                setOpen(true);
                setSelectedImageIndex(8);
              }}
            />        <br />
        <br />

              <img
              src="cherryImages/logo6.png"
              alt="logo iterations"
              onClick={() => {
                setOpen(true);
                setSelectedImageIndex(10);
              }}
            />
          </div>
        </div>
        <br />
        <h2>2 | Creating an Identity</h2>
        <div className="two-columns-container">
          <div className="column">
            <h3>Color Palette</h3>
            <img
              src="cherryImages/colorpalette.png"
              alt="color scheme"
              onClick={() => {
                setOpen(true);
                setSelectedImageIndex(11);
              }}
            />
          </div>
          <div className="column">
            <h3>Typeface</h3>
            <img
              src="cherryImages/typography.png"
              alt="type"
              onClick={() => {
                setOpen(true);
                setSelectedImageIndex(12);
              }}
            />
          </div>
        </div>
        <br />
        <h3>Final Logo</h3>
        <img
          src="cherryImages/finalLogo.png"
          alt="type"
          onClick={() => {
            setOpen(true);
            setSelectedImageIndex(13);
          }}
        />
        <br />
        <br />

        <h1>Website Revamp</h1>
        <hr />
        <h2>1 | UX Research</h2>
        <h4>User Story Brainstorm</h4>
        <p>If Cherry Crisis were a person...</p>
        <img
          src="cherryImages/asaperson.png"
          alt="Cherry Crisis as a person"
          onClick={() => {
            setOpen(true);
            setSelectedImageIndex(14);
          }}
        />

        <h2>2 | Interpret</h2>
        <h3>Elevator Pitch</h3>
        <p>
          Cherry Crisis is the only band that slays effortlessly for the queer
          community in the Boston music scene who resonate with the
          sound/message in an era of this terrifying DIY music scene in boston
          right now
        </p>
        <h3>Refine Statements</h3>
        <ol>
          <li>
            As a user of Cherry Crisis' website, I want easy access to external
            material related to the band so that I can engage more with their
            activities and music.
          </li>
          <li>
            As a user of Cherry Crisis' website, I want a clear view of upcoming
            shows, albums, and band programs so that I can easily navigate and
            participate in them.
          </li>
          <li>
            As a user of Cherry Crisis' website, I want clickable buttons that
            allow me to explore a variety of topics about the band, including
            their message, music, and community impact.
          </li>
        </ol>
        <h2>3 | Make</h2>
        <h3>Sitemap</h3>
        <img
          src="cherryImages/sitemap.png"
          alt="site map"
          onClick={() => {
            setOpen(true);
            setSelectedImageIndex(15);
          }}
        />

        <h2>4 | Design</h2>
        <h3>Low-Fidelity Wireframes</h3>
        <div className="two-columns-container">
          <div className="column">
            <p>Homepage & Blog Pages</p>
            <img
              src="cherryImages/lofi1.png"
              alt="lo-fi"
              onClick={() => {
                setOpen(true);
                setSelectedImageIndex(16);
              }}
            />
          </div>
          <div className="column">
                        <p>Contact, Media, & About Pages</p>

            <img
              src="cherryImages/lofi2.png"
              alt="lo-fi"
              onClick={() => {
                setOpen(true);
                setSelectedImageIndex(17);
              }}
            />
          </div>
        </div>
        <br />
        <h3>Mid-Fidelity Wireframes</h3>
        <div className="two-columns-container">
          <div className="column">
                        <p>Homepage & Blog Pages</p>

            <img
              src="cherryImages/midfi1.png"
              alt="mid-fi"
              onClick={() => {
                setOpen(true);
                setSelectedImageIndex(18);
              }}
            />
          </div>
          <div className="column">
                                    <p>Contact, Media, & About Pages</p>

            <img
              src="cherryImages/midfi2.png"
              alt="mid-fi"
              onClick={() => {
                setOpen(true);
                setSelectedImageIndex(19);
              }}
            />
          </div>
        </div>
        <br />

        <h3>High-Fidelity Wireframes</h3>
        <p>
          <a
            href="https://www.figma.com/proto/YqIyjmyv9lejZ5vgWVlGG5/Cherry-Crisis-Final-Prototype?page-id=0%3A1&node-id=0-44&node-type=frame&viewport=729%2C508%2C0.05&t=GEnkDjlwKRiZKxg8-1&scaling=min-zoom&content-scaling=fixed"
            target="_blank"
            rel="noreferrer"
          >
            Click Here to see High-Fis!
          </a>
        </p>
        <div className="two-columns-container">
          <div className="column">
                                    <p>Homepage & Blog Pages</p>

            <img
              src="cherryImages/highfi1.png"
              alt="hi-fi"
              onClick={() => {
                setOpen(true);
                setSelectedImageIndex(20);
              }}
            />
          </div>
          <div className="column">
                                    <p>Contact, Media, & About Pages</p>
            <img
              src="cherryImages/highfi2.png"
              alt="hi-fi"
              onClick={() => {
                setOpen(true);
                setSelectedImageIndex(21);
              }}
            />
          </div>
        </div>
        <br />
        <h2>5 | Presentation</h2>
        <p>
          See the deployed site{" "}
          <a
            href="https://cherrycrisis.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>{" "}
          and check out the{" "}
          <a
            href="https://www.figma.com/proto/YqIyjmyv9lejZ5vgWVlGG5/Cherry-Crisis-Final-Prototype?page-id=0%3A1&node-id=0-44&node-type=frame&viewport=729%2C508%2C0.05&t=GEnkDjlwKRiZKxg8-1&scaling=min-zoom&content-scaling=fixed"
            target="_blank"
            rel="noreferrer"
          >
            final prototype
          </a>
          !
        </p>
        <br />
      </section>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={selectedImageIndex}
        slides={[
          { src: "/cherryImages/personalityLevels.png" },
          { src: "/cherryImages/moodboarding.png" },
          { src: "/cherryImages/moodboarding2.png" },
          { src: "/cherryImages/moodboarding3.png" },
          { src: "/cherryImages/moodboarding4.png" },
          { src: "/cherryImages/logo1.png" },
          { src: "/cherryImages/logo2.png" },
                    { src: "/cherryImages/logo3.png" },
          { src: "/cherryImages/logo4.png" },
          { src: "/cherryImages/logo5.png" },
          { src: "/cherryImages/logo6.png" },

          { src: "/cherryImages/colorpalette.png" },
          { src: "/cherryImages/typography.png" },
          { src: "/cherryImages/finalLogo.png" },
          { src: "/cherryImages/asaperson.png" },
          { src: "/cherryImages/sitemap.png" },
          { src: "/cherryImages/lofi1.png" },
          { src: "/cherryImages/lofi2.png" },
          { src: "/cherryImages/midfi1.png" },
          { src: "/cherryImages/midfi2.png" },
          { src: "/cherryImages/highfi1.png" },
          { src: "/cherryImages/highfi2.png" },
        ]}
      />

      <Footer />
    </>
  );
}

export default CherryProcess;
