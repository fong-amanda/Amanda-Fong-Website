import React from "react";
import {
  CaseStudyLayout,
  CaseCover,
  CaseHeader,
  CaseOverview,
  CaseBody,
  SectionHeading,
  CaseImage,
  Columns,
  AccentHeading,
  LabeledText,
  QuoteColumns,
  InfoColumns,
  FeatureIcons,
} from "../components";

const PROTOTYPE_URL =
  "https://www.figma.com/proto/baYzQWkP6EDsjUKMwo4GNq/Journey-Project?page-id=43%3A189&node-id=300-17131&viewport=-1251%2C-667%2C0.11&t=ZXsp6VYPpSwrJWOG-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=422%3A10607&show-proto-sidebar=1";

function WanderlyProcess() {
  return (
    <CaseStudyLayout>
      <CaseCover
        src="wanderlyImages/wanderlyLandscape.jpg"
        alt="Wanderly Landscape"
      />

      <CaseHeader
        title="Wanderly"
        tags={[
          "Mobile App Design",
          "Prototyping",
          "User Interviews",
          "UX Research",
        ]}
      />

      <CaseOverview
        overview="Wanderly is a travel companion that blends creative documentation, planning, and social connection. With personalized bucket lists, auto-generated scrapbooks, and a curated traveler network, Wanderly enhances your meaningful moments on your journey."
        links={[{ label: "High-Fidelity Prototype", href: PROTOTYPE_URL }]}
        role="Software Designer"
        team="Solo Project!"
        timeline="January 2025 - April 2025"
        tools="Figma"
      />

      <CaseBody>
        <SectionHeading title="Research Overview" />

        <AccentHeading number="01" title="The Problem" />
        <LabeledText label="Problem Statement">
          Travelers struggle to <strong>seamlessly plan, coordinate,</strong> document and
          <strong>connect</strong> with like-minded individuals as existing platforms fail to
          offer a unified, personalized solution for enhancing their travel
          experiences.
        </LabeledText>
        <AccentHeading number="02" title="Key User Interview Quotes" />
        <QuoteColumns
          quotes={[
            {
              quote: (
                <>
                  Travel enables cultural exploration, but{" "}
                  <strong>constant itinerary edits </strong>
                  detract from the joy of making memories. I also often{" "}
                  <strong>forget</strong> activities I want to do.
                </>
              ),
              attribution: "Female, 21 yrs old, Travel-Documenter + Planner",
            },
            {
              quote: (
                <>
                  I love capturing moments through photos, balancing{" "}
                  <strong>planned</strong> and{" "}
                  <strong>spontaneous experiences</strong> to truly enjoy each
                  trip.
                </>
              ),

              attribution: "Male, 22 yrs old, Social Traveler + Travel-Documenter",
            },
            {
              quote: (
                <>
                  Solo travel lets me <strong>meet new people</strong> and{" "}
                  <strong>create incredible memories</strong>, but navigating
                  unfamiliar places alone can be daunting and{" "}
                  <strong>keeping track of plans</strong> and logistics is often{" "}
                  <strong>overwhelming</strong>.
                </>
              ),
              attribution: "Female, 22 yrs old, Solo Traveler",
            },
          ]}
        />
        <AccentHeading number="03" title="User Personas" />
        <InfoColumns
          columns={[
            {
              eyebrow: "User Type 1",
              title: "Travel-Documenters",
              sections: [
                {
                  label: "Pain Points",
                  items: [
                    "Lack of flexibility and creativity",
                    "Lack of a consolidated app",
                    "Tedious",
                  ],
                },
                {
                  label: "Task",
                  text: "Create + keep track of travel memories",
                },
                {
                  label: "Goal",
                  text: "To creatively capture and revisit meaningful memories",
                },
              ],
            },
            {
              eyebrow: "User Type 2",
              title: "Social Travelers",
              sections: [
                {
                  label: "Pain Points",
                  items: [
                    "Difficulty connecting with like-minded travelers",
                    "Tedious",
                  ],
                },
                {
                  label: "Task",
                  text: "Connect with like-minded travelers",
                },
                {
                  label: "Goal",
                  text: "To meet others and share experiences effortlessly",
                },
              ],
            },
            {
              eyebrow: "User Type 3",
              title: "Travel-Planners",
              sections: [
                {
                  label: "Pain Points",
                  items: [
                    "Multiple apps for planning, documenting, and connecting",
                    "Lack of a consolidated app",
                    "Weather",
                  ],
                },
                {
                  label: "Task",
                  text: "Discover new activities and experiences",
                },
                {
                  label: "Goal",
                  text: "To stay organized and reduce planning stress traveling",
                },
              ],
            },
          ]}
        />
        <AccentHeading number="04" title="The Solution" />
        <p className="case-sub-label">Wanderly features...</p>
        <FeatureIcons
          features={[
            { icon: "scrapbook", label: "Auto-generated scrapbooks" },
            { icon: "glass", label: "Personal bucket lists" },
            { icon: "community", label: "A curated traveler community" },
            {
              icon: "stack",
              label: "A unified space for planning, documenting and connecting",
            },
          ]}
        />
        <AccentHeading number="05" title="Workflows" />
        <InfoColumns
          columns={[
            {
              eyebrow: "User Type 1",
              title: "Travel-Documenters",
              sections: [
                {
                  label: "Workflows",
                  items: [
                    "Create collages",
                    "Preserve memories creatively",
                    "Bucket lists",
                  ],
                },
              ],
            },
            {
              eyebrow: "User Type 2",
              title: "Social Travelers",
              sections: [
                {
                  label: "Workflows",
                  items: [
                    "Discover and connect with like-minded travelers",
                    "Share experiences and get recommendations",
                  ],
                },
              ],
            },
            {
              eyebrow: "User Type 3",
              title: "Travel-Planners",
              sections: [
                {
                  label: "Workflows",
                  items: [
                    "Create and manage bucket lists",
                    "Organize ideas",
                    "Easily access and use them when planning trips",
                  ],
                },
              ],
            },
          ]}
        />
        <SectionHeading title="Design Process" />
        <AccentHeading number="01" title="Hand-drawn Wireframes" />
        <CaseImage
          src="wanderlyImages/handdrawnwireframes.png"
          alt="handdrawnwireframes"
        />
        <AccentHeading number="02" title="Sitemap" />
        <Columns>
          <CaseImage src="wanderlyImages/sitemapdrawn.jpg" alt="sitemapdrawn" />
          <CaseImage src="wanderlyImages/sitemap.svg" alt="sitemap" />
        </Columns>
        <AccentHeading number="03" title="Competitive Analysis" />
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
        <p className="case-sub-label">Overall Takeaways</p>
        <InfoColumns
            columns={[
              {
                eyebrow: "Workflow 1",
                title: "Saving posts/videos",
                sections: [
                  {
                    label: "Takeaways",
                    items: [
                      "Confirm saves with clear feedback",
                      "Keep UI elements unobtrusive",
                      "Suggest organization names",
                      "Show saved state persistently",
                    ],
                  },
                ],
              },
              {
                eyebrow: "Workflow 2",
                title: "Making collages/videos",
                sections: [
                  {
                    label: "Takeaways",
                    items: [
                      "Reserve primary buttons for final actions",
                      "Allow editing at multiple stages",
                      "Provide layout suggestions",
                      "Enable easy reordering and bulk edits",
                    ],
                  },
                ],
              },
              {
                eyebrow: "Workflow 3",
                title: "Connecting with others",
                sections: [
                  {
                    label: "Takeaways",
                    items: [
                      "Use clear button hierarchy",
                      "Show notification indicators",
                      "Provide collapsible organization",
                      "Make content types easily identifiable",
                    ],
                  },
                ],
              },
            ]}
          />
        <AccentHeading number="04" title="Color Palette + Typography" />
          <Columns>
            <CaseImage
              src="wanderlyImages/type.svg"
              alt="Wanderly Typography"
            />
            <CaseImage src="wanderlyImages/colors.png" alt="Wanderly Colors" />
          </Columns>
          <AccentHeading number="05" title="Wireframes" />
          <Columns>
            <>
              <p className="case-sub-label">Low-Fidelity Wireframes</p>
              <CaseImage
                src="wanderlyImages/lowfis.png"
                alt="Low Fidelity Wireframes"
              />
            </>
            <>
              <p className="case-sub-label">Mid-Fidelity Wireframes</p>
              <CaseImage
                src="wanderlyImages/midfis.png"
                alt="Mid Fidelity Wireframes"
              />
            </>
          </Columns>
          <AccentHeading number="06" title="Design Iterations" />
          <Columns>
            <>
              <CaseImage
                src="wanderlyImages/iteration1.png"
                alt="Design Iteration 1"
              />
              <p className="iteration-comments">
                <strong>Iteration:</strong> Explored card layouts with 6, 2, and
                3 photos, settling on 3 photos to balance profile information
                with card compactness.
              </p>
            </>
            <>
              <CaseImage
                src="wanderlyImages/iteration2.png"
                alt="Design Iteration 2"
              />
              <p className="iteration-comments">
                <strong>Iteration:</strong> Tested different column
                configurations and text positioning to optimize content
                discovery and visual hierarchy.
              </p>
            </>
          </Columns>
          <Columns>
            <>
              <CaseImage
                src="wanderlyImages/iteration3.png"
                alt="Design Iteration 3"
              />
              <p className="iteration-comments">
                <strong>Iteration:</strong> User feedback revealed that filled
                tags overshadowed other profile content, leading to the decision
                to use outlined tags for better visual balance.
              </p>
            </>
            <></>
          </Columns>
        <SectionHeading title="The Prototype" />
        <p className="case-ov-link">
          <a href={PROTOTYPE_URL} target="_blank" rel="noreferrer">
            Check out the prototype <span aria-hidden="true">↗</span>
          </a>
        </p>
        <p className="case-sub-label">
          Flow 1: Creating your Profile + Connecting with Others
        </p>
        <Columns>
          <CaseImage src="wanderlyImages/1flow1.png" alt="Flow 1 Screen 1" />
          <CaseImage src="wanderlyImages/2flow1.png" alt="Flow 1 Screen 2" />
        </Columns>
        <Columns>
          <CaseImage src="wanderlyImages/3flow1.png" alt="Flow 1 Screen 3" />
          <CaseImage src="wanderlyImages/4flow1.png" alt="Flow 1 Screen 4" />
        </Columns>
        <Columns>
          <CaseImage src="wanderlyImages/5flow1.png" alt="Flow 1 Screen 5" />
          <CaseImage src="wanderlyImages/6flow1.png" alt="Flow 1 Screen 6" />
        </Columns>
        <p className="case-sub-label">
          Flow 2: Saving an item to your bucket list + creating your own item
        </p>
        <Columns>
          <CaseImage src="wanderlyImages/1flow2.png" alt="Flow 2 Screen 1" />
          <CaseImage src="wanderlyImages/2flow2.png" alt="Flow 2 Screen 2" />
        </Columns>
        <Columns>
          <CaseImage src="wanderlyImages/3flow2.png" alt="Flow 2 Screen 3" />
          <CaseImage src="wanderlyImages/4flow2.png" alt="Flow 2 Screen 4" />
        </Columns>
        <p className="case-sub-label">Flow 3: Creating a scrapbook</p>
        <Columns>
          <CaseImage src="wanderlyImages/1flow3.png" alt="Flow 3 Screen 1" />
          <CaseImage src="wanderlyImages/2flow3.png" alt="Flow 3 Screen 2" />
        </Columns>
        <Columns>
          <CaseImage src="wanderlyImages/3flow3.png" alt="Flow 3 Screen 3" />
          <></>
        </Columns>
      </CaseBody>
    </CaseStudyLayout>
  );
}

export default WanderlyProcess;
