import React from "react";
import {
  AccentHeading,
  LabeledText,
  CaseStudyLayout,
  CaseCover,
  CaseHeader,
  CaseOverview,
  CaseBody,
  SectionHeading,
  CaseImage,
  Columns,
} from "../components";

function CherryProcess() {
  return (
    <CaseStudyLayout accent="var(--accent-lilac)">
      <CaseCover src="cherryImages/cherryLandscape.png" alt="Cherry Landscape" />

      <CaseHeader
        title="Cherry Crisis"
        tags={["Web Development", "Web Design", "Prototyping", "User Testing & Research", "Branding"]}
      />

      <CaseOverview
        overview={
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
        }
        links={[
          {
            label: "High-Fidelity Prototype",
            href: "https://www.figma.com/proto/YqIyjmyv9lejZ5vgWVlGG5/Cherry-Crisis-Final-Prototype?page-id=0%3A1&node-id=0-44&viewport=770%2C992%2C0.07&t=rB8y3OnxB6hgXK9o-1&scaling=min-zoom&content-scaling=fixed",
          },
          {
            label: "Deployed Site",
            href: "https://cherrycrisis.vercel.app/",
          },
        ]}
        role="Developer & UI/UX Designer"
        team={[
          { role: "Project Lead", people: "Emma Wong" },
          {},
          { role: "Design Lead", people: "Emlyn Griffiths" },
          {
            role: "Designers",
            people: "Amie Chen, Brendan DiTullio, Taylie Kawakami, Amanda Fong",
          },
          { role: "Tech Lead", people: "Jon Shih" },
          {
            role: "Developers",
            people: "Ananya Radhakrishnan, Ivan Rudyakov, Amanda Fong",
          },
        ]}
        timeline="January 2024 - April 2024"
        tools="Figma, JavaScript (React.js), CSS, Git"
      />

      <CaseBody>
        <LabeledText label="What is Cherry Crisis?">
          Cherry Crisis is a genre-bending group of 4 non-male identifying
          musicians based in Boston. They're all about bringing more queer,
          feminine energy to the music scene. As big fans of Boston and DIY
          music, they want to make it a safer and more inclusive environment for
          everyone. By being upfront about who they are and putting our
          experiences into their music, they hope to start conversations and
          build a real sense of connection with the local music community.
        </LabeledText>
        <br />

        <SectionHeading title="Branding" />

        <AccentHeading number="1" title="Discovering the brand" />
        <p>
          We began the project by exploring and defining the ideal direction for
          the brand. It was important for us to understand how Cherry Crisis
          wants their club to be portrayed to the music community.
        </p>
        <br />

        <p className="case-sub-label">Personality Levels</p>
        <Columns>
          <CaseImage
            src="cherryImages/personalityLevels.png"
            alt="User Story Brainstorm"
          />
          <p>
            Brands need to have a clear personality in order for consumers to
            easily interact and identify with them. In this activity, our
            client and team indicated where they believe that the client's
            company falls (or think that it should fall) within the following
            sets of traits. This exercise was very helpful in establishing a
            thoughtful brand identity.
          </p>
        </Columns>
        <br />

        <p className="case-sub-label">Moodboarding</p>
        <Columns>
          <CaseImage src="cherryImages/moodboarding.png" alt="Moodboard" />
          
          <CaseImage src="cherryImages/moodboarding2.png" alt="Moodboard" />
        </Columns>
                <br />

        <Columns>
          <CaseImage src="cherryImages/moodboarding3.png" alt="Moodboard" />
          <CaseImage src="cherryImages/moodboarding4.png" alt="Moodboard" />
        </Columns>
        <br />

        <p className="case-sub-label">Logo Iterations</p>
        <Columns>
          <>
            <CaseImage src="cherryImages/logo1.png" alt="logo iterations" />
            <br />
            <br />
            <CaseImage src="cherryImages/logo3.png" alt="logo iterations" />
            <br />
            <br />
            <CaseImage src="cherryImages/logo5.png" alt="logo iterations" />
          </>
          <>
            <CaseImage src="cherryImages/logo2.png" alt="logo iterations" />
            <br />
            <br />
            <CaseImage src="cherryImages/logo4.png" alt="logo iterations" />
            <br />
            <br />
            <CaseImage src="cherryImages/logo6.png" alt="logo iterations" />
          </>
        </Columns>
        <br />
        <AccentHeading number="2" title="Creating an Identity" />
        <Columns>
          <>
            <p className="case-sub-label">Color Palette</p>
            <CaseImage src="cherryImages/colorpalette.png" alt="color scheme" />
          </>
          <>
            <p className="case-sub-label">Typeface</p>
            <CaseImage src="cherryImages/typography.png" alt="type" />
          </>
        </Columns>
        <br />
        <p className="case-sub-label">Final Logo</p>
        <CaseImage src="cherryImages/finalLogo.png" alt="type" />
        <br />
        <br />

        <SectionHeading title="Website Revamp" />
        <AccentHeading number="1" title="UX Research" />
        <p className="case-sub-label">User Story Brainstorm</p>
        <p>If Cherry Crisis were a person...</p>
        <CaseImage
          src="cherryImages/asaperson.png"
          alt="Cherry Crisis as a person"
        />

        <AccentHeading number="2" title="Interpret" />

        <LabeledText label="Elevator Pitch">
                 Cherry Crisis is the only band that slays effortlessly for the queer
          community in the Boston music scene who resonate with the
          sound/message in an era of this terrifying DIY music scene in boston
          right now
                </LabeledText>
        <p className="case-sub-label">Refine Statements</p>
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
        <AccentHeading number="3" title="Make" />
        <p className="case-sub-label">Sitemap</p>
        <CaseImage src="cherryImages/sitemap.png" alt="site map" />

        <AccentHeading number="4" title="Design" />
        <p className="case-sub-label">Low-Fidelity Wireframes</p>
        <Columns>
          <>
            <p>Homepage & Blog Pages</p>
            <CaseImage src="cherryImages/lofi1.png" alt="lo-fi" />
          </>
          <>
            <p>Contact, Media, & About Pages</p>
            <CaseImage src="cherryImages/lofi2.png" alt="lo-fi" />
          </>
        </Columns>
        <br />
        <p className="case-sub-label">Mid-Fidelity Wireframes</p>
        <Columns>
          <>
            <p>Homepage & Blog Pages</p>
            <CaseImage src="cherryImages/midfi1.png" alt="mid-fi" />
          </>
          <>
            <p>Contact, Media, & About Pages</p>
            <CaseImage src="cherryImages/midfi2.png" alt="mid-fi" />
          </>
        </Columns>
        <br />

        <p className="case-sub-label">High-Fidelity Wireframes</p>
        <p>
          <a
            className="case-link"
            href="https://www.figma.com/proto/YqIyjmyv9lejZ5vgWVlGG5/Cherry-Crisis-Final-Prototype?page-id=0%3A1&node-id=0-44&node-type=frame&viewport=729%2C508%2C0.05&t=GEnkDjlwKRiZKxg8-1&scaling=min-zoom&content-scaling=fixed"
            target="_blank"
            rel="noreferrer"
          >
            High-Fidelity Prototype
          </a>
        </p>
        <Columns>
          <>
            <p>Homepage & Blog Pages</p>
            <CaseImage src="cherryImages/highfi1.png" alt="hi-fi" />
          </>
          <>
            <p>Contact, Media, & About Pages</p>
            <CaseImage src="cherryImages/highfi2.png" alt="hi-fi" />
          </>
        </Columns>
        <br />
        <AccentHeading number="5" title="Presentation" />
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
      </CaseBody>
    </CaseStudyLayout>
  );
}

export default CherryProcess;
