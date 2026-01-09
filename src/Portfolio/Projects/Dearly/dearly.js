import Nav from "../../../NavigationBar";
import "../projects.css";
import "../main.css";
import Footer from "../../../Footer/footer";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import React, { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "./dearly.css";

function DearlyProcess() {
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
              src="dearlyImages/dearlyLandscape.jpg"
              alt="Dearly Landscape"
            />
          </div>
        </div>
      </section>

      <section id="header" className="title-header">
        <h1>Dearly</h1>
        <h2>
          Mobile Application Design, Branding, Accessibility, UI/UX Design
        </h2>
      </section>

<section id="overview-section" className="overview-section">
        <div className="overview">
          <div className="overviewLeft">
            <h5>Project Overview</h5>
            <p>
              A mobile app that helps families stay intimately connected across
              generations by sharing moments, memories, and conversations.
              Designed with accessibility and simplicity in mind, it bridges the
              technological divide between younger and older family members by
              offering two distinct user modes: a streamlined, simplified
              interface for elderly users and a feature-rich experience for
              younger users.
            </p>
            <br />
            <h5>
              <a
                href="https://www.figma.com/proto/XqqgGBwLIwgJrpJ2iYxvlU/Dearly?page-id=1%3A31&node-id=4203-41006&viewport=-5603%2C-6186%2C0.14&t=UsBu2edEIo5KFFHH-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4203%3A41006&show-proto-sidebar=1"
                target="_blank"
                rel="noreferrer"
              >
                High-Fidelity Prototype
              </a>
            </h5>
          </div>

          <div className="overviewRight">
            <h5>Role</h5>
            <p>Software Designer</p>

            <h5>Team</h5>
            <div className="three-columns-container">
              <div className="column">
                <h6>Project Lead:</h6>
                <p>Melody Yu</p>
                
                <h6>Design Lead:</h6>
                <p>Liana Zhang</p>
              </div>
              <div className="column">
                <h6>Designers:</h6>
                <p>Amanda Fong, Traci Lu, Zahra Wibisana, Audrey Wong</p>
                
                <h6>Tech Leads:</h6>
                <p>Stone Liu, Mai Nguyen</p>
              </div>
              <div className="column">
                <h6>Developers:</h6>
                <p>
                  Zainab Imadulla, Tyler Kim, Megan Lai, Aahil Nishad, Josh
                  Torre
                </p>
              </div>
            </div>
            <h5>Timeline</h5>
            <p>January 2025 - April 2025</p>

            <h5>Tools</h5>
            <p>Figma</p>
          </div>
        </div>
      </section>

      <section className="summary">
        <h1>Project Context</h1>
        <hr></hr>
        <h2>What is Dearly?</h2>
        <p>
          Dearly is a private social platform that helps users stay connected
          across generations. Designed with accessibility in mind, it caters to
          users across a range of technological experience. Dearly offers two
          distinct user modes: a simplified basic interface and a feature-rich
          advanced interface.
        </p>
        <h2>Our Client</h2>
        <p>
          Caroline Xiong is a fifth-year student at Northeastern University
          studying Business Administration & Design with a concentration in
          Marketing Analytics and Interaction Design. With a passion for
          blending user-centered design with meaningful solutions, Caroline
          developed Dearly, a family-focused platform that enhances connection,
          accessibility, and engagement across diverse users.
        </p>
        <p>
          Inspired by the challenges intergenerational families face in
          maintaining meaningful relationships, Dearly is designed to bridge the
          technological divide between younger and older family members. The app
          evokes emotions of warmth, belonging, and shared joy, offering
          features that allow users to share heartfelt moments and create new
          memories, no matter the distance or level of technological illiteracy.
        </p>
        <p>
          Caroline envisions success stories like grandparents feeling more
          involved in their grandchildren's lives or busy young adults finding
          easy, consistent ways to connect with their families.
        </p>
        <br />
        <h1>Branding</h1>
        <hr></hr>
        <h2>1 | Discovering the brand</h2>
        <p>
          We began the project by exploring and defining the ideal direction for
          Dearly. It was crucial for us to understand our target audience:
          multi-generational families with diverse technological backgrounds. It
          was important to us to create a brand that feels both intimate and
          inclusive. Our exploration focused on developing a visual and
          emotional identity that bridges generational gaps, making family
          connection feel effortless, warm, and accessible to everyone from
          tech-savvy teenagers to less-experienced elderly users.
        </p>
        <h2>Moodboarding</h2>
        <div className="lightbox-images">
          <img
            src="dearlyImages/moodboard.png"
            alt="Moodboard"
            onClick={() => {
              setOpen(true);
              setSelectedImageIndex(0);
            }}
          />
        </div>
        <br />
        <h2>2 | Creating an Identity</h2>
        <h2>Color Palette</h2>
        <div className="two-columns-container">
          <div className="column">
            <img
              src="dearlyImages/colorpal.png"
              alt="Color Scheme"
              onClick={() => {
                setOpen(true);
                setSelectedImageIndex(1);
              }}
            />
          </div>
          <div className="column">
            <p>
              Dearly's colors are warm and inviting, reflecting the app's
              mission of fostering intimate family connections. The palette of
              Pearl, Honey, Ink, and Espresso creates a visual language that
              bridges generations. Pearl and Espresso form the foundational
              colors, offering a balance of lightness and depth that speaks to
              the app's inclusive design. Honey and Ink act as vibrant accents,
              adding warmth and trust to create a truly welcoming digital
              experience that feels both modern and familiar.
            </p>
          </div>
        </div>
        <br />
        <h2>Typeface</h2>
        <div className="two-columns-container">
          <div className="column">
            <img
              src="dearlyImages/typeface.png"
              alt="Typeface"
              onClick={() => {
                setOpen(true);
                setSelectedImageIndex(2);
              }}
            />
          </div>
          <div className="column">
            <img
              src="dearlyImages/typeface2.png"
              alt="Typeface Details"
              onClick={() => {
                setOpen(true);
                setSelectedImageIndex(3);
              }}
            />
          </div>
        </div>
        <br />
        <h2>Final Logo</h2>
        <div className="two-columns-container">
          <div className="column">
            <img
              src="dearlyImages/logo2.png"
              alt="Final Logo"
              onClick={() => {
                setOpen(true);
                setSelectedImageIndex(4);
              }}
            />
          </div>
          <div className="column">
            <img
              src="dearlyImages/logo.png"
              alt="Final Logo Variations"
              onClick={() => {
                setOpen(true);
                setSelectedImageIndex(5);
              }}
            />
          </div>
        </div>
        <br />
        <br />
        <h1>Mobile Application Revamp</h1>
        <hr></hr>
        <h2>Streamlined Design Approach</h2>
        <p>
          The existing project materials provided us with a significant head
          start, allowing us to concentrate on three critical areas:
        </p>
        <ol>
          <li>Sitemap Refinement</li>
          <li>Userflows</li>
          <li>Wireframes</li>
        </ol>
        <h2>1 | Sitemap Refinement</h2>
        <p>
          Instead of a complete information architecture overhaul, we focused on
          optimizing the existing sitemap to better support our two-mode user
          experience, simplifying the interface for elderly users while
          maintaining robust features for younger family members.
        </p>
                <div className="two-columns-container">
                  <div className="column">
                    <h4>Advanced Sitemap</h4>
        <img
          src="dearlyImages/AdvancedSitemap.jpg"
          alt="Advanced Sitemap"
          onClick={() => {
            setOpen(true);
            setSelectedImageIndex(6);
          }}
        /></div>
<div className="column">                     <h4>Basic Sitemap</h4>
 <img 
          src="dearlyImages/BasicSitemap.jpg"
          alt="Basic Sitemap"
          onClick={() => {
            setOpen(true);
            setSelectedImageIndex(7);
          }}
        />
        </div>
        </div>
        <h2>2 | Userflows</h2>
        <p>
          We mapped intricate user journeys through engineering collaboration,
          strategically aligning design vision with technical feasibility. Our
          iterative weekly meetings enabled us to develop user flows that
          seamlessly bridged innovative concepts with practical implementation.
        </p>
        <p>
          Specifically, I focused on creating two distinct onboarding
          experiences: one allowing users to choose their preferred mode of
          interaction based on their comfort level with technology. Users could
          self-select between a simplified interface tailored for less
          tech-experienced family members or a more comprehensive experience for
          those seeking advanced features. This approach empowered users to
          customize their Dearly experience from the very first interaction.
        </p>
        <img
          src="dearlyImages/userflow1.jpg"
          alt="Detailed User Flow"
          onClick={() => {
            setOpen(true);
            setSelectedImageIndex(8);
          }}
        />

        <h2>3 | Onboarding Wireframes</h2>

        <div className="two-columns-container">
          
          <div className="column">
                                <h4>Low-Fidelity Wireframes</h4>

            <img
              src="dearlyImages/lofi1.png"
              alt="Low Fidelity Wireframes 1"
              onClick={() => {
                setOpen(true);
                setSelectedImageIndex(9);
              }}
            />
        <br />
           
          </div>
          <div className="column">
             <h4>Mid-Fidelity Wireframes</h4>
        <img
          src="dearlyImages/midfi.png"
          alt="Mid Fidelity Wireframes"
          onClick={() => {
            setOpen(true);
            setSelectedImageIndex(10);
          }}
        />
          </div>
        </div>
      
        <h4>High-Fidelity Wireframes</h4>
              <div className="two-columns-container">
          <div className="column">
        <h5>Landing Pages</h5>
        <img
          src="dearlyImages/hifi1.jpg"
          alt="High Fidelity Landing Pages"
          onClick={() => {
            setOpen(true);
            setSelectedImageIndex(11);
          }}
        />
                <br />

                <h5 style={{ marginTop: '20px' }}>Forgot Password Pages</h5>
        <img
          src="dearlyImages/hifi3.jpg"
          alt="High Fidelity Forgot Password Pages"
          onClick={() => {
            setOpen(true);
            setSelectedImageIndex(12);
          }}
        />
        </div>
        <br />
                  <div className="column">

        <h5>Sign Up Pages</h5>
        <img
          src="dearlyImages/hifi2.jpg"
          alt="High Fidelity Sign Up Pages"
          onClick={() => {
            setOpen(true);
            setSelectedImageIndex(13);
          }}
        />
        <br />
        </div>
        </div>

        <h2>4 | Presentation</h2>
        <p>
          Check out the{" "}
          <a
            href="https://www.figma.com/proto/XqqgGBwLIwgJrpJ2iYxvlU/Dearly?page-id=1%3A31&node-id=4203-41006&viewport=-5603%2C-6186%2C0.14&t=UsBu2edEIo5KFFHH-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4203%3A41006&show-proto-sidebar=1"
            target="_blank"
            rel="noreferrer"
          >
            high-fidelity prototype
          </a>
          !
        </p>
        <h4>Showcase</h4>
        <p>
          The last step was presenting our work at the{" "}
          <a href="https://generatenu.com/" target="_blank" rel="noreferrer">
            Generate
          </a>{" "}
          Spring 2025 showcase!
        </p>
        <div className="showcase-columns-container">
          <div className="showcase-column">
            <img
              src="dearlyImages/showcase1.jpg"
              alt="showcase"
              onClick={() => {
                setOpen(true);
                setSelectedImageIndex(14);
              }}
            />
          </div>
          <div className="showcase-column">
            <img
              src="dearlyImages/showcase2.jpg"
              alt="showcase"
              onClick={() => {
                setOpen(true);
                setSelectedImageIndex(15);
              }}
            />
          </div>
          <div className="showcase-column">
            <img
              src="dearlyImages/showcase3.jpg"
              alt="showcase"
              onClick={() => {
                setOpen(true);
                setSelectedImageIndex(16);
              }}
            />
          </div>
        </div>
        <br />
      </section>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={selectedImageIndex}
        slides={[
          { src: "/dearlyImages/moodboard.png" },
          { src: "/dearlyImages/colorpal.png" },
          { src: "/dearlyImages/typeface.png" },
          { src: "/dearlyImages/typeface2.png" },
          { src: "/dearlyImages/logo2.png" },
          { src: "/dearlyImages/logo.png" },
          { src: "/dearlyImages/AdvancedSitemap.jpg" },
          { src: "/dearlyImages/BasicSitemap.jpg" },
          { src: "/dearlyImages/userflow1.jpg" },
          { src: "/dearlyImages/lofi1.png" },
          { src: "/dearlyImages/midfi.png" },
          { src: "/dearlyImages/hifi1.jpg" },
          { src: "/dearlyImages/hifi2.jpg" },
          { src: "/dearlyImages/hifi3.jpg" },
          { src: "/dearlyImages/showcase1.jpg" },
          { src: "/dearlyImages/showcase2.jpg" },
          { src: "/dearlyImages/showcase3.jpg" },
        ]}
      />
      <Footer />
    </>
  );
}

export default DearlyProcess;
