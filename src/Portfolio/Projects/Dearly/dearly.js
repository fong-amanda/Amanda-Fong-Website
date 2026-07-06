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
} from "../components";
import "./dearly.css";

const PROTOTYPE_URL =
  "https://www.figma.com/proto/XqqgGBwLIwgJrpJ2iYxvlU/Dearly?page-id=1%3A31&node-id=4203-41006&viewport=-5603%2C-6186%2C0.14&t=UsBu2edEIo5KFFHH-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4203%3A41006&show-proto-sidebar=1";

function DearlyProcess() {
  return (
    <CaseStudyLayout>
      <CaseCover src="dearlyImages/dearlyLandscape.jpg" alt="Dearly Landscape" />

      <CaseHeader
        title="Dearly"
        subtitle="Mobile Application Design, Branding, Accessibility, UI/UX Design"
      />

      <CaseOverview
        overview="A mobile app that helps families stay intimately connected across generations by sharing moments, memories, and conversations. Designed with accessibility and simplicity in mind, it bridges the technological divide between younger and older family members by offering two distinct user modes: a streamlined, simplified interface for elderly users and a feature-rich experience for younger users."
        links={[{ label: "High-Fidelity Prototype", href: PROTOTYPE_URL }]}
        role="Software Designer"
        team={[
          { role: "Project Lead", people: "Melody Yu" },
          { role: "Design Lead", people: "Liana Zhang" },
          {
            role: "Designers",
            people: "Amanda Fong, Traci Lu, Zahra Wibisana, Audrey Wong",
          },
          { role: "Tech Leads", people: "Stone Liu, Mai Nguyen" },
          {
            role: "Developers",
            people:
              "Zainab Imadulla, Tyler Kim, Megan Lai, Aahil Nishad, Josh Torre",
          },
        ]}
        timeline="January 2025 - April 2025"
        tools="Figma"
      />

      <CaseBody>
        <SectionHeading title="Project Context" />
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

        <SectionHeading title="Branding" />
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
          <CaseImage src="dearlyImages/moodboard.png" alt="Moodboard" />
        </div>
        <br />
        <h2>2 | Creating an Identity</h2>
        <h2>Color Palette</h2>
        <Columns>
          <CaseImage src="dearlyImages/colorpal.png" alt="Color Scheme" />
          <p>
            Dearly's colors are warm and inviting, reflecting the app's mission
            of fostering intimate family connections. The palette of Pearl,
            Honey, Ink, and Espresso creates a visual language that bridges
            generations. Pearl and Espresso form the foundational colors,
            offering a balance of lightness and depth that speaks to the app's
            inclusive design. Honey and Ink act as vibrant accents, adding
            warmth and trust to create a truly welcoming digital experience that
            feels both modern and familiar.
          </p>
        </Columns>
        <br />
        <h2>Typeface</h2>
        <Columns>
          <CaseImage src="dearlyImages/typeface.png" alt="Typeface" />
          <CaseImage src="dearlyImages/typeface2.png" alt="Typeface Details" />
        </Columns>
        <br />
        <h2>Final Logo</h2>
        <Columns>
          <CaseImage src="dearlyImages/logo2.png" alt="Final Logo" />
          <CaseImage src="dearlyImages/logo.png" alt="Final Logo Variations" />
        </Columns>
        <br />
        <br />

        <SectionHeading title="Mobile Application Revamp" />
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
        <Columns>
          <>
            <h4>Advanced Sitemap</h4>
            <CaseImage
              src="dearlyImages/AdvancedSitemap.jpg"
              alt="Advanced Sitemap"
            />
          </>
          <>
            <h4>Basic Sitemap</h4>
            <CaseImage src="dearlyImages/BasicSitemap.jpg" alt="Basic Sitemap" />
          </>
        </Columns>
        <h2>2 | Userflows</h2>
        <p>
          We mapped intricate user journeys through engineering collaboration,
          strategically aligning design vision with technical feasibility. Our
          iterative weekly meetings enabled us to develop user flows that
          seamlessly bridged innovative concepts with practical implementation.
        </p>
        <p>
          Specifically, I focused on creating a unified onboarding experience
          that welcomed all users equally, regardless of their technological
          comfort level. Rather than immediately splitting users into separate
          paths, the onboarding introduced Dearly's core value before allowing
          users to choose between a simplified interface tailored for less
          tech-experienced family members or a more comprehensive experience for
          those seeking advanced features. This approach ensured no user felt
          alienated from the very first interaction.
        </p>
        <CaseImage src="dearlyImages/userflow1.jpg" alt="Detailed User Flow" />

        <h2>3 | Onboarding Wireframes</h2>
        <Columns>
          <>
            <h4>Low-Fidelity Wireframes</h4>
            <CaseImage
              src="dearlyImages/lofi1.png"
              alt="Low Fidelity Wireframes 1"
            />
            <br />
          </>
          <>
            <h4>Mid-Fidelity Wireframes</h4>
            <CaseImage
              src="dearlyImages/midfi.png"
              alt="Mid Fidelity Wireframes"
            />
          </>
        </Columns>

        <h4>High-Fidelity Wireframes</h4>
        <Columns>
          <>
            <h5>Landing Pages</h5>
            <CaseImage
              src="dearlyImages/hifi1.jpg"
              alt="High Fidelity Landing Pages"
            />
            <br />
            <h5 style={{ marginTop: "20px" }}>Forgot Password Pages</h5>
            <CaseImage
              src="dearlyImages/hifi3.jpg"
              alt="High Fidelity Forgot Password Pages"
            />
          </>
          <>
            <h5>Sign Up Pages</h5>
            <CaseImage
              src="dearlyImages/hifi2.jpg"
              alt="High Fidelity Sign Up Pages"
            />
            <br />
          </>
        </Columns>

        <h2>4 | Presentation</h2>
        <p>
          Check out the{" "}
          <a href={PROTOTYPE_URL} target="_blank" rel="noreferrer">
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
        <Columns
          className="showcase-columns-container"
          columnClassName="showcase-column"
        >
          <CaseImage src="dearlyImages/showcase1.jpg" alt="showcase" />
          <CaseImage src="dearlyImages/showcase2.jpg" alt="showcase" />
          <CaseImage src="dearlyImages/showcase3.jpg" alt="showcase" />
        </Columns>
        <br />
      </CaseBody>
    </CaseStudyLayout>
  );
}

export default DearlyProcess;
