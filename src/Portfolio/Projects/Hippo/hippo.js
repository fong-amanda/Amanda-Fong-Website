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
  LabeledText
} from "../components";

const PROTOTYPE_URL =
  "https://www.figma.com/proto/44j4p2HMxwqYoxTSbfVqla/Student-Activity-Calendar?kind=proto&node-id=6632-41806&page-id=7%3A160&scaling=scale-down&show-proto-sidebar=1&starting-point-node-id=6632%3A41806&t=oC656u75iLkkVhT0-1&viewport=237%2C143%2C0.13";

function HippoProcess() {
  return (
    <CaseStudyLayout>
      <CaseCover src="sacImages/sacLandscape.png" alt="Cherry Landscape" />

      <CaseHeader
        title="Student Activity Calendar"
        tags={["Mobile App Design", "Prototyping", "User Testing & Research", "Branding"]}
      />

      <CaseOverview
        overview={
          <>
            <p>
              As a designer at Generate Product Development, I collaborated with
              designers and software engineers to help Northeastern's SGA
              (Student Government Association) replace NUEngage as the
              university's primary platform for campus engagement.
            </p>
            <p>
              Student Activity Calendar is designed to be an intuitive activity
              app catering to Northeastern students, particularly freshmen, who
              often struggle to find the right clubs or events to engage with.
              It simplifies the process of discovering club meetings and events
              aligned with their interests and majors. Additionally, it enables
              users to effortlessly stay informed about updates from the clubs
              they choose to join or are interested in.
            </p>
          </>
        }
        links={[{ label: "High-Fidelity Prototype", href: PROTOTYPE_URL }]}
        role="Software Designer"
        team={[
          { role: "Project Lead", people: "Alder Whiteford" },
          { role: "Design Lead", people: "Amanda Kerr" },
          {
            role: "Designers",
            people: "Liana Zheng, Amanda Fong, Emma Pon, Emma Nguyen",
          },
          { role: "Tech Leads", people: "David Oduneye, Garett Ladley" },
          {
            role: "Developers",
            people:
              "Melody Yu, Akshay Dupuguntla, Mai Nguyen, Michael Brennan, Olivier John Ndjike Nzia, Sunny Huang",
          },
        ]}
        timeline="January 2024 - April 2024"
        tools="Figma"
      />

      <CaseBody>
        <SectionHeading title="Research Overview" />
        <AccentHeading number="1" title="The Problem" />
         <LabeledText label="Problem Statement">
                   How can we streamline the process for undergraduate students to join
          clubs and manage their extracurricular activities more efficiently?
                </LabeledText>
     

        <AccentHeading number="2" title="Moodboarding" />
        <Columns>
          <>
            <CaseImage src="sacImages/moodboard1.png" alt="Moodboard" />
            <br />
            <br />
            <CaseImage src="sacImages/moodboard3.png" alt="Moodboard" />
          </>
          <CaseImage src="sacImages/moodboard2.png" alt="Moodboard" />
        </Columns>
        <br />

        <p className="case-sub-label">Final Moodboard</p>
        <CaseImage src="sacImages/finalmoodboard.png" alt="Final Moodboard" />

        <AccentHeading number="3" title="Competitor Analysis" />
        <CaseImage
          src="sacImages/competitoranalysis.png"
          alt="Competitor Analysis"
        />

        <AccentHeading number="4" title="Key User Interview Insights" />
        <ul>
          <li>Students had trouble keeping up with clubs from fall fest</li>
          <li>Fall fest was overwhelming and students didn't know which ones they actually wanted to join</li>
          <li>They wish they knew about the time commitment before joining a club</li>
          <li>Many heard about clubs through word of mouth</li>
          <li>Not enough information on engage or the instagram to fully understand how the club is structured or what the culture is like</li>
          <li>Students join clubs but don't stick to them freshman year</li>
          <li>Pre-professional and major based clubs are popular at Northeastern</li>
          <li>Students are discouraged by the competitive club culture and want to know how to prepare better</li>
        </ul>

        <br />
        <br />
        <SectionHeading title="Design Process" />

        <AccentHeading number="1" title="Personas" />
        <Columns>
          <>
            <CaseImage src="sacImages/persona1.png" alt="User Persona" />
            <br />
            <br />
            <CaseImage src="sacImages/persona3.png" alt="User Persona" />
          </>
          <>
            <CaseImage src="sacImages/persona2.png" alt="User Persona" />
            <br />
            <br />
            <CaseImage src="sacImages/persona4.png" alt="User Persona" />
          </>
        </Columns>

        <AccentHeading number="2" title="Elevator Pitch" />
        <p>
          Student Activity Calendar is the only solution that empowers
          Northeastern undergrads and club executives to seamlessly engage with
          and promote campus organizations and events. By replacing NUEngage,
          we're creating a centralized hub for clubs and events, along with an
          event calendar, offering an intuitive mobile experience that drives
          student involvement and streamlines club operations.
        </p>

        <AccentHeading number="3" title="Refine Statements" />
        <ol>
          <li>
            As a student using the platform, I want to easily access and view all upcoming campus events so that I can stay informed and participate in activities of interest.
          </li>
          <li style={{ marginTop: 15 }}>
            As a club executive, I want a simple way to add and promote our events on the calendar so that we can reach a wider audience and drive engagement.
          </li>
          <li style={{ marginTop: 15 }}>
            As a student, I want to filter events by category or organization so that I can quickly find activities that match my interests.
          </li>
          <li style={{ marginTop: 15 }}>
            As a club executive, I want to track event attendance through the platform so that I can better understand our event's reach and success.
          </li>
        </ol>

        <AccentHeading number="4" title="Sitemap" />
        <CaseImage src="sacImages/sitemap.png" alt="Site Map" />

        <AccentHeading number="5" title="Wireframes" />
        <Columns>
          <>
            <p className="case-sub-label">Low-Fidelity Wireframes</p>
            <CaseImage src="sacImages/lofis.png" alt="Low-Fi Login" />
            <br />
          </>
          <>
            <p className="case-sub-label">Mid-Fidelity Wireframes</p>
            <CaseImage src="sacImages/midfis.png" alt="Mid-Fi Wireframes" />
          </>
        </Columns>

        <AccentHeading number="6" title="High-Fidelity Wireframes" />
        <Columns>
          <>
            <p>Home Page</p>
            <CaseImage src="sacImages/hifi.png" alt="High-Fi Login" />
          </>
          <>
            <p>Profile Page</p>
            <CaseImage src="sacImages/hifis.png" alt="High-Fi Login" />
          </>
        </Columns>

        <br />
        <br />
        <p>
          <a
            className="case-link"
            href={PROTOTYPE_URL}
            target="_blank"
            rel="noreferrer"
          >
            Check out the prototype!
          </a>
        </p>
        <br />
      </CaseBody>
    </CaseStudyLayout>
  );
}

export default HippoProcess;
