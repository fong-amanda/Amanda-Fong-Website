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
  InfoColumnsNoBrownHeader,
} from "../components";
import "./dearly.css";

const PROTOTYPE_URL =
  "https://www.figma.com/proto/XqqgGBwLIwgJrpJ2iYxvlU/Dearly?page-id=1%3A31&node-id=4203-41006&viewport=-5603%2C-6186%2C0.14&t=UsBu2edEIo5KFFHH-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4203%3A41006&show-proto-sidebar=1";

function DearlyProcess() {
  return (
    <CaseStudyLayout accent="var(--accent-gold)">
      <CaseCover src="dearlyImages/dearlyLandscape.jpg" alt="Dearly Landscape" />

      <CaseHeader
        title="Dearly"
        tags={["Mobile Application Design", "Branding", "Accessibility", "UI/UX Design"]}
      />

      <CaseOverview
        overview="A mobile application that helps families stay intimately connected across generations by sharing moments, memories, and conversations. Designed with accessibility and simplicity in mind, it bridges the technological divide between younger and older family members by offering two distinct user modes: a streamlined, simplified interface for elderly users and a feature-rich experience for younger users."
        links={[{ label: "High-Fidelity Prototype", href: PROTOTYPE_URL }]}
        role="Software Designer"
        team={[
          { role: "Project Lead", people: "Melody Yu" },
          {},
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
        <LabeledText label="What is Dearly?">
          Dearly is a private social platform that helps users stay connected
          across generations. Designed with accessibility in mind, it caters to
          users across a range of technological experience. Dearly offers two
          distinct user modes: a simplified basic interface and a feature-rich
          advanced interface.
        </LabeledText>
        <AccentHeading title="Our Client" />
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
        <AccentHeading number="1" title="Discovering the brand" />
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
        <p className="case-sub-label">Moodboarding</p>
        <div className="lightbox-images">
          <CaseImage src="dearlyImages/moodboard.png" alt="Moodboard" />
        </div>
        <br />
        <AccentHeading number="2" title="Creating an Identity" />
        <p className="case-sub-label">Color Palette</p>
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
        <p className="case-sub-label">Typeface</p>
        <Columns>
          <CaseImage src="dearlyImages/typeface.png" alt="Typeface" />
          <CaseImage src="dearlyImages/typeface2.png" alt="Typeface Details" />
        </Columns>
        <br />
        <p className="case-sub-label">Final Logo</p>
        <Columns>
          <CaseImage src="dearlyImages/logo2.png" alt="Final Logo" />
          <CaseImage src="dearlyImages/logo.png" alt="Final Logo Variations" />
        </Columns>
        <br />
        <br />

        <SectionHeading title="Mobile Application Revamp" />
        <LabeledText label="Streamlined Design Approach">
          The existing project materials provided us with a significant head
          start, allowing us to concentrate on three critical areas:
        </LabeledText>
        <InfoColumnsNoBrownHeader
          columns={[
            { eyebrow: "01", title: "Sitemap Refinement" },
            { eyebrow: "02", title: "Userflows" },
            { eyebrow: "03", title: "Wireframes" },
          ]}
        />
        <AccentHeading number="1" title="Sitemap Refinement" />
        <p>
          Instead of a complete information architecture overhaul, we focused on
          optimizing the existing sitemap to better support our two-mode user
          experience, simplifying the interface for elderly users while
          maintaining robust features for younger family members.
        </p>
        <Columns>
          <>
            <p className="case-sub-label">Advanced Sitemap</p>
            <CaseImage
              src="dearlyImages/AdvancedSitemap.jpg"
              alt="Advanced Sitemap"
            />
          </>
          <>
            <p className="case-sub-label">Basic Sitemap</p>
            <CaseImage src="dearlyImages/BasicSitemap.jpg" alt="Basic Sitemap" />
          </>
        </Columns>
        <AccentHeading number="2" title="Userflows" />
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

        <AccentHeading number="3" title="Onboarding Wireframes" />
        <Columns>
          <>
            <p className="case-sub-label">Low-Fidelity Wireframes</p>
            <CaseImage
              src="dearlyImages/lofi1.png"
              alt="Low Fidelity Wireframes 1"
            />
            <br />
          </>
          <>
            <p className="case-sub-label">Mid-Fidelity Wireframes</p>
            <CaseImage
              src="dearlyImages/midfi.png"
              alt="Mid Fidelity Wireframes"
            />
          </>
        </Columns>

        <p className="case-sub-label">High-Fidelity Wireframes</p>
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

        <AccentHeading number="4" title="Presentation" />
        <p>
          <a className="case-link" href={PROTOTYPE_URL} target="_blank" rel="noreferrer">
            Check out the high-fidelity prototype!
          </a>
        </p>
        <p className="case-sub-label">Showcase</p>
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
