import React, { useState, useEffect } from "react";
import "./wanderly.css";

import Lightbox from "yet-another-react-lightbox";
import Nav from "../../../NavigationBar";
import Footer from "../../../Footer/footer";
// import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

function WanderlyProcess() {
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
              src="wanderlyImages/wanderlyLandscape.jpg"
              alt="Wanderly Landscape"
            />
          </div>
        </div>
      </section>

      <section id="header" className="title-header">
        <h1 style={{ color: "#382E25" }}>Wanderly</h1>
        <h2>
          Mobile App Design, Prototyping, User Interviews, UX Research{" "}
        </h2>
      </section>

      <section id="overview-section" className="overview-section">
        <div className="overview">
          <div className="overviewLeft lavan">
            <h5 style={{ color: "#382E25" }}>Project Overview</h5>
            <p>
              Wanderly is a travel companion that blends creative documentation,
              planning, and social connection. With personalized bucket lists,
              auto-generated scrapbooks, and a curated traveler network,
              Wanderly enhances your meaningful moments on your journey.
            </p>{" "}
            <br />
            {/* <h5 style={{ color: "#1C1A1A" }} className="lavan">
              This project is still in progress! Come back soon for updates.
            </h5> */}
            <h5 style={{ color: "#382E25" }} className="wanderly">
              <a
                href="https://www.figma.com/proto/baYzQWkP6EDsjUKMwo4GNq/Journey-Project?page-id=43%3A189&node-id=300-17131&viewport=-1251%2C-667%2C0.11&t=ZXsp6VYPpSwrJWOG-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=422%3A10607&show-proto-sidebar=1"
                target="_blank"
                rel="noreferrer"
              >
                High-Fidelity Prototype
              </a>
            </h5>
          </div>

          <div className="overviewRight lavan">
            <h5 style={{ color: "#382E25" }}>Role</h5>
            <p>Software Designer</p>

            <h5 style={{ color: "#382E25" }}>Team</h5>
            <div className="three-columns-container">
              <div className="column">
                <p>Solo Project!</p>
              </div>
            </div>
            <h5 style={{ color: "#382E25" }}>Timeline</h5>
            <p>January 2025 - April 2025</p>

            <h5 style={{ color: "#382E25" }}>Tools</h5>
            <p>Figma</p>
          </div>
        </div>
      </section>

      <section className="summary wanderly">
        <h1>Research Overview</h1>
        <hr></hr>
        <h2>1 | The Problem statement</h2>
        <p>
          Travelers struggle to <strong>seamlessly plan</strong>,{" "}
          <strong>creatively document</strong>, and <strong>connect</strong>{" "}
          with like-minded individuals, as existing platforms fail to offer a{" "}
          <strong>unified</strong>, personalized solution for enhancing their
          travel experiences.
        </p>
        <h2>2 | Key User Interview Quotes </h2>
        <ul>
          <li>
            "Travel enables cultural exploration, but{" "}
            <strong>constant itinerary edits and logistics</strong> detract from
            the joy of making memories. I also often <strong>forget</strong>{" "}
            activities I want to do." - Female 21 year old (Travel-Documenter +
            Planner)
          </li>
          <li>
            "I love capturing moments through photos, balancing{" "}
            <strong>planned</strong> and{" "}
            <strong>spontaneous experiences</strong> to truly enjoy each trip."
            - Male 22 year old (Social Traveler + Documenter)
          </li>
          <li>
            "Solo travel lets me <strong>meet new people</strong> and{" "}
            <strong>create incredible memories</strong>, but navigating
            unfamiliar places alone can be daunting and{" "}
            <strong>keeping track of plans</strong> and logistics is often{" "}
            <strong>overwhelming</strong>." - Female 22 year old (Solo
            Traveler)
          </li>
        </ul>
        <h2>3 | Identified Primary Users</h2>
        <br />
        <div className="container-wanderly">
          <div className="column-wanderly">
            <div className="number">1</div>
            <div className="title">Travel-Documenters</div>
            <div className="divider"></div>
            <p>
              <strong>Pain Points:</strong>
            </p>
            <ul className="workflows-list">
              <li>Lack of flexibility and creativity</li>
              <li>Lack of a consolidated app</li>
              <li>Tedious</li>
            </ul>
            <p>
              <strong>Task: </strong>Create + keep track of travel memories{" "}
            </p>
            <p>
              <strong>Goal: </strong>To creatively capture and revisit
              meaningful memories
            </p>
          </div>

          <div className="column-wanderly">
            <div className="number">2</div>
            <div className="title">Social Travelers</div>
            <div className="divider"></div>
            <p>
              <strong>Pain Points:</strong>
            </p>
            <ul className="workflows-list">
              <li>Difficulty connecting with like-minded travelers</li>

              <li>Tedious</li>
            </ul>
            <p>
              <strong>Task: </strong>Connect with like-minded travelers
            </p>
            <p>
              <strong>Goal: </strong>To meet others and share experiences
              effortlessly
            </p>
          </div>

          <div className="column-wanderly">
            <div className="number">3</div>
            <div className="title">Travel-Planners</div>
            <div className="divider"></div>
            <p>
              <strong>Pain Points:</strong>
            </p>
            <ul className="workflows-list">
              <li>Multiple apps for planning, documenting, and connecting</li>
              <li>Lack of a consolidated app</li>
              <li>Weather</li>
            </ul>
            <p>
              <strong>Task: </strong>Discover new activities and experiences
            </p>
            <p>
              <strong>Goal: </strong>To stay organized and reduce planning
              stress traveling
            </p>
          </div>
        </div>
        <h2>4 | The Solution</h2>
<p>Wanderly provides:</p>
          <ul className="workflows-list">
            <li>Personal bucket lists</li>
            <li>Auto-generated scrapbooks </li>
            <li>A curated traveler community </li>
            <li>A unified space for planning, documenting and connecting </li>
          </ul>
         
        <h2>
          5 | Workflows - <em>How do the users go about doing it?</em>
        </h2>
        <br />
        <div className="container-wanderly">
          <div className="column-wanderly">
            <div className="title">Travel-Documenter</div>
            <div className="divider"></div>

            <p>
              <strong>Workflows:</strong>
            </p>
            <ul className="workflows-list">
              <li>Create collages</li>
              <li>Preserve memories creatively</li>
              <li>Bucket lists</li>
            </ul>
          </div>

          <div className="column-wanderly">
            <div className="title">Social Travelers</div>
            <div className="divider"></div>
            <p>
              <strong>Workflows:</strong>
            </p>
            <ul className="workflows-list">
              <li>Discover and connect with like-minded travelers</li>
              <li>Share experiences and get recommendations</li>
            </ul>
          </div>

          <div className="column-wanderly">
            <div className="title">Travel-Planners</div>
            <div className="divider"></div>
            <p>
              <strong>Workflows:</strong>
            </p>
            <ul className="workflows-list">
              <li>Create and manage bucket lists</li>
              <li>Organize ideas </li>
              <li>Easily access and use them when planning trips</li>
            </ul>
          </div>
        </div>
        <br />
        <br />
        <h1>Design Process</h1>
        <hr></hr>
        <h2>1 | Hand-drawn Wireframes</h2>
        <img
          src="wanderlyImages/handdrawnwireframes.png"
          alt="handdrawnwireframes"
          onClick={() => {
            setOpen(true);
            setSelectedImageIndex(0);
          }}
        />
        <br />
        <h2> 2 | Sitemap</h2>
        <img
          src="wanderlyImages/sitemapdrawn.jpg"
          alt="sitemapdrawn"
          onClick={() => {
            setOpen(true);
            setSelectedImageIndex(1);
          }}
        />{" "}
        <br />
        <img
          src="wanderlyImages/sitemap.svg"
          alt="sitemap"
          onClick={() => {
            setOpen(true);
            setSelectedImageIndex(2);
          }}
        />
        <br />
        <h2>3 | Competitive Analysis</h2>
        <div className="analysis-container">
          <div className="comparison-table">
            <div className="table-header">Workflow</div>
            <div className="table-header">User Story</div>
            <div className="table-header">App 1</div>
            <div className="table-header">App 2</div>
            <div className="table-header">App 3</div>
            <div className="workflow-group">
              <div className="workflow-cell">
                Workflow 1: <br />
                Saving posts/videos to collection
              </div>
              <div className="user-story-cell">
                As a travel-planner + documenter, I want to easily save and
                organize content for future trips without stress.
              </div>
              <div className="app-cell">
                <div className="app-name">Pinterest</div>
<div className="app-takeaway">
                  <ul>
                    <li>Categorized boards with privacy options</li>
                    <li>Board name suggestions</li>
                    <li>Save confirmation, but click-to-save unclear</li>
                  </ul>
                </div>
              </div>
              <div className="app-cell">
                <div className="app-name">Instagram</div>
<div className="app-takeaway">
                  <ul>
                    <li>State changes when saved</li>
                    <li>Clear save button location</li>
                    <li>No confirmation popup</li>
                  </ul>
                </div>
              </div>
              <div className="app-cell">
                <div className="app-name">TikTok</div>
<div className="app-takeaway">
                  <ul>
                    <li>Clear button with state change</li>
                    <li>Save confirmation popup</li>
                    <li>Button blocks video content</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="workflow-group">
              <div className="workflow-cell">
                Workflow 2: <br />
                Making collages/ <br />
                videos
              </div>
              <div className="user-story-cell">
                As a travel-documenter, I want to creatively preserve memories
                without forgetting important moments.
              </div>
              <div className="app-cell">
                <div className="app-name">TikTok</div>
<div className="app-takeaway">
                  <ul>
                    <li>Primary button for final actions</li>
                    <li>Location, mention, hashtag suggestions</li>
                    <li>Easy editing and reordering</li>
                  </ul>
                </div>
              </div>
              <div className="app-cell">
                <div className="app-name">Photos App</div>
<div className="app-takeaway">
                  <ul>
                    <li>Grid view for reordering</li>
                    <li>Multi-select for bulk edits</li>
                    <li>Needs better navigation</li>
                  </ul>
                </div>
              </div>
              <div className="app-cell">
                <div className="app-name">Pic Collage</div>
<div className="app-takeaway">
                  <ul>
                    <li>Overuses primary buttons</li>
                    <li>Editable at multiple stages</li>
                    <li>Auto-generates helpful layouts</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="workflow-group">
              <div className="workflow-cell">
                Workflow 3: <br />
                Connecting with others
              </div>
              <div className="user-story-cell">
                As a social traveler, I want to meet like-minded people while
                traveling to share experiences and create memories.
              </div>
              <div className="app-cell">
                <div className="app-name">Hinge</div>
<div className="app-takeaway">
                  <ul>
                    <li>Unread message counter</li>
                    <li>Compatibility notifications</li>
                    <li>Collapsible chat organization</li>
                  </ul>
                </div>
              </div>
              <div className="app-cell">
                <div className="app-name">LinkedIn</div>
<div className="app-takeaway">
                  <ul>
                    <li>Clear primary/secondary buttons</li>
                    <li>Clean, varied feed design</li>
                    <li>Easy profile following</li>
                  </ul>
                </div>
              </div>
              <div className="app-cell">
                <div className="app-name">Instagram</div>
<div className="app-takeaway">
                  <ul>
                    <li>Good button hierarchy</li>
                    <li>Varied content frames</li>
                    <li>Clear content type indicators</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overall-takeaways-section">
          <h4>Overall Takeaways</h4>
          <div className="takeaways-grid">
            <div className="takeaway-item">
              <div className="takeaway-title">Workflow 1: Saving posts/videos</div>
              <div className="takeaway-divider"></div>
              <p className="takeaway-text">
                <ul>
                  <li>Confirm saves with clear feedback</li>
                  <li>Keep UI elements unobtrusive</li>
                  <li>Suggest organization names</li>
                  <li>Show saved state persistently</li>
                </ul>
              </p>
            </div>

            <div className="takeaway-item">
              <div className="takeaway-title">
                Workflow 2: Making collages/videos
              </div>
              <div className="takeaway-divider"></div>
              <p className="takeaway-text">
                <ul>
                  <li>Reserve primary buttons for final actions</li>
                  <li>Allow editing at multiple stages</li>
                  <li>Provide layout suggestions</li>
                  <li>Enable easy reordering and bulk edits</li>
                </ul>
              </p>
            </div>

            <div className="takeaway-item">
              <div className="takeaway-title">
                Workflow 3: Connecting with others
              </div>
              <div className="takeaway-divider"></div>
              <p className="takeaway-text">
                <ul>
                  <li>Use clear button hierarchy</li>
                  <li>Show notification indicators</li>
                  <li>Provide collapsible organization</li>
                  <li>Make content types easily identifiable</li>
                </ul>
              </p>
            </div>
          </div>
<h2>4 | Color Palette + Typography</h2>
          <div className="two-columns-container">
            <div className="column">
              <img
                src="wanderlyImages/type.svg"
                alt="Wanderly Landscape"
                onClick={() => {
                  setOpen(true);
                  setSelectedImageIndex(3);
                }}
              />
            </div>

            <div className="column">
              <img
                src="wanderlyImages/color.png"
                alt="Wanderly Landscape"
                onClick={() => {
                  setOpen(true);
                  setSelectedImageIndex(4);
                }}
              />
            </div>
          </div>
          <h2>5 | Wireframes</h2>
          <div className="two-columns-container">
            <div className="column">
              <h4>Low-Fidelity Wireframes</h4>{" "}
              <img
                src="wanderlyImages/lowfis.png"
                alt="Wanderly Landscape"
                onClick={() => {
                  setOpen(true);
                  setSelectedImageIndex(5);
                }}
              />
            </div>
            <div className="column">
              <h4>Mid-Fidelity Wireframes</h4>
              <img
                src="wanderlyImages/midfis.png"
                alt="Wanderly Landscape"
                onClick={() => {
                  setOpen(true);
                  setSelectedImageIndex(6);
                }}
              />
            </div>
          </div>
        </div>
        <br />
        <br />
        <h1>The Prototype</h1>
        <hr></hr>
        <h2>Flow 1: Creating your Profile + Connecting with Others</h2>
        <div className="two-columns-container">
          <div className="column">
            <img
              src="wanderlyImages/1flow1.png"
              alt="Wanderly Landscape"
              onClick={() => {
                setOpen(true);
                setSelectedImageIndex(7);
              }}
            />
          </div>
          <div className="column">
            <img
              src="wanderlyImages/2flow1.png"
              alt="Wanderly Landscape"
              onClick={() => {
                setOpen(true);
                setSelectedImageIndex(8);
              }}
            />
          </div>
        </div>
        <div className="two-columns-container">
          <div className="column">
            <img
              src="wanderlyImages/3flow1.png"
              alt="Wanderly Landscape"
              onClick={() => {
                setOpen(true);
                setSelectedImageIndex(9);
              }}
            />
          </div>
          <div className="column">
            <img
              src="wanderlyImages/4flow1.png"
              alt="Wanderly Landscape"
              onClick={() => {
                setOpen(true);
                setSelectedImageIndex(10);
              }}
            />
          </div>
        </div>
        <div className="two-columns-container">
          <div className="column">
            <img
              src="wanderlyImages/5flow1.png"
              alt="Wanderly Landscape"
              onClick={() => {
                setOpen(true);
                setSelectedImageIndex(11);
              }}
            />
          </div>
          <div className="column">
            <img
              src="wanderlyImages/6flow1.png"
              alt="Wanderly Landscape"
              onClick={() => {
                setOpen(true);
                setSelectedImageIndex(12);
              }}
            />
          </div>
        </div>
        <h2>
          Flow 2: Saving an item to your bucket list + creating your own item
        </h2>
        <div className="two-columns-container">
          <div className="column">
            <img
              src="wanderlyImages/1flow2.png"
              alt="Wanderly Landscape"
              onClick={() => {
                setOpen(true);
                setSelectedImageIndex(13);
              }}
            />
          </div>
          <div className="column">
            <img
              src="wanderlyImages/2flow2.png"
              alt="Wanderly Landscape"
              onClick={() => {
                setOpen(true);
                setSelectedImageIndex(14);
              }}
            />
          </div>
        </div>
        <div className="two-columns-container">
          <div className="column">
            <img
              src="wanderlyImages/3flow2.png"
              alt="Wanderly Landscape"
              onClick={() => {
                setOpen(true);
                setSelectedImageIndex(15);
              }}
            />
          </div>
          <div className="column">
            <img
              src="wanderlyImages/4flow2.png"
              alt="Wanderly Landscape"
              onClick={() => {
                setOpen(true);
                setSelectedImageIndex(16);
              }}
            />
          </div>
        </div>
        <h2>Flow 3: Creating a scrapbook</h2>
        <div className="two-columns-container">
          <div className="column">
            <img
              src="wanderlyImages/1flow3.png"
              alt="Wanderly Landscape"
              onClick={() => {
                setOpen(true);
                setSelectedImageIndex(17);
              }}
            />
          </div>
          <div className="column">
            <img
              src="wanderlyImages/2flow3.png"
              alt="Wanderly Landscape"
              onClick={() => {
                setOpen(true);
                setSelectedImageIndex(18);
              }}
            />
          </div>
        </div>
        <div className="two-columns-container">
          <div className="column">
            <img
              src="wanderlyImages/3flow3.png"
              alt="Wanderly Landscape"
              onClick={() => {
                setOpen(true);
                setSelectedImageIndex(19);
              }}
            />
          </div>{" "}
          <div className="column"></div>
        </div>{" "}
        <br />
        <h2>
          Check out the{" "}
          <a
            href="https://www.figma.com/proto/baYzQWkP6EDsjUKMwo4GNq/Journey-Project?page-id=43%3A189&node-id=300-17131&viewport=-1251%2C-667%2C0.11&t=ZXsp6VYPpSwrJWOG-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=422%3A10607&show-proto-sidebar=1"
            target="_blank"
            rel="noreferrer"
          >
            prototype
          </a>
          !
        </h2>
      </section>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        // opens associated image lightbox
        index={selectedImageIndex}
        slides={[
          { src: "/wanderlyImages/handdrawnwireframes.png" },
          { src: "/wanderlyImages/sitemapdrawn.jpg" },
          { src: "/wanderlyImages/sitemap.svg" },
          { src: "/wanderlyImages/type.svg" },
          { src: "/wanderlyImages/color.png" },

          { src: "/wanderlyImages/lowfis.png" },
          { src: "/wanderlyImages/midfis.png" },

          { src: "/wanderlyImages/1flow1.png" },
          { src: "/wanderlyImages/2flow1.png" },
          { src: "/wanderlyImages/3flow1.png" },
          { src: "/wanderlyImages/4flow1.png" },
          { src: "/wanderlyImages/5flow1.png" },
          { src: "/wanderlyImages/6flow1.png" },
          { src: "/wanderlyImages/1flow2.png" },
          { src: "/wanderlyImages/2flow2.png" },
          { src: "/wanderlyImages/3flow2.png" },
          { src: "/wanderlyImages/4flow2.png" },
          { src: "/wanderlyImages/1flow3.png" },
          { src: "/wanderlyImages/2flow3.png" },
          { src: "/wanderlyImages/3flow3.png" },
        ]}
      />
      <Footer />
    </>
  );
}

export default WanderlyProcess;
