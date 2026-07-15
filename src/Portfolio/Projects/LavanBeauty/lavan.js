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
} from "../components";

function LavanProcess() {
  return (
    <CaseStudyLayout>
      <CaseCover src="lavanImages/cover.png" alt="Cherry Landscape" />

      <CaseHeader
        title="Lavan Beauty"
        tags={["Web Design", "UX Research", "Prototyping", "User Testing", "User Interviews", "Branding"]}
      />

      <CaseOverview
        overview="Lavan Beauty is a skincare brand built around simplicity and clarity. The website presents a curated line of products developed by a pharmacist, each formulated with natural ingredients and grounded in scientific efficacy. The site offers a streamlined selection that reflects the brand's core identity: elegant, honest skincare backed by real expertise."
        links={[
          {
            label: "High-Fidelity Prototype",
            href: "https://www.figma.com/proto/Dn5jK3GW8zHeYwOI9MdF1l/Lavan-Beauty-Wireframes?page-id=1157%3A2756&node-id=1157-4937&viewport=128%2C487%2C0.09&t=KuRPdoNn4MDquZgW-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1157%3A4937",
          },
          {
            label: "Brandbook ",
            href: "https://drive.google.com/file/d/1d5mjqeBoFbFrbIt6hQJEWEey2CRjHKhT/view?usp=sharing",
          },
        ]}
        role="Design Lead"
        team={[
          { role: "Project Lead", people: "Valerie Irawan" },
          {},          { role: "Design Lead", people: "Amanda Fong" },
          { role: "Designers", people: "Heidy Hur, Andrea Lee, Caroline Xiong" },
          { role: "Tech Lead", people: "Ananya Radhakrishnan" },
          { role: "Developers", people: "Emily Lin, Alizeh Zaidi" },
        ]}
        timeline="September 2024 - December 2024"
        tools="Figma"
      />

      <CaseBody className="lavan">
        <LabeledText label="What is Lavan Beauty?">
          Lavan Beauty is a timeless and luxurious skincare brand. It offers a
          traditional experience while relying on modern-day science to craft
          its products. The brand caters to high-end consumers in the USA and
          EU. These consumers value both high-quality products and investing in
          themselves. They seek skincare solutions that are stable, streamlined,
          clean, reliable, and sustainable. Lavan Beauty's products are made
          with effective, natural, and rich ingredients. They are designed for
          individuals who wish to treat their skin with proper love and respect.
          This mission stands out in an era of overconsumption and consumerism.
        </LabeledText>
        <br />

        <SectionHeading title="Branding" />
        <AccentHeading number="1" title="Discovering the brand" />
        <p>
          We began the project by exploring and defining the ideal direction for
          the brand. It was important for us to understand the audience and how
          Lavan wants their brand to be portrayed.
        </p>
        <br />
        <p className="case-sub-label">Personality Levels</p>
        <Columns>
          <CaseImage src="lavanImages/personalityLevels.png" alt="Moodboard" />
          <p>
            Brands need to have a clear personality in order for consumers to
            easily interact and identify with them. In this activity, our
            client and team indicated where they believe that the client's
            company falls (or think that it should fall) within the following
            sets of traits. This exercise was very helpful in establishing a
            thoughtful brand identity.
          </p>
        </Columns>
        <p className="case-sub-label">Moodboarding</p>
        <div className="moodboarding">
          <Columns>
            <>
              <CaseImage src="lavanImages/Caro.png" alt="Moodboard" />
              <br />
              <br />
              <CaseImage src="lavanImages/Heidy.png" alt="Moodboard" />
            </>
            <>
              <CaseImage src="lavanImages/Andrea.png" alt="Moodboard" />
              <br />
              <br />
              <CaseImage src="lavanImages/Amanda.png" alt="Moodboard" />
            </>
          </Columns>
        </div>
        <br />
        <AccentHeading number="2" title="Creating an Identity" />
        <p className="case-sub-label">Color Palette</p>
        <Columns>
          <CaseImage src="lavanImages/colorpal.png" alt="color scheme" />
          <p>
            Lavan Beauty's colors are elegant and timeless, reflecting the
            brand's luxurious and floral essence. The colors to be used in
            print and digital materials are Ivory Petal, Bronze Orchid, Green
            Quartz, and Marigold Silk. Ivory Petal and Bronze Orchid form the
            foundation, offering a balance of softness and depth that speaks
            to understated sophistication. Green Quartz and Marigold Silk act
            as refined accents, adding vibrancy and opulence to create a truly
            high-end aesthetic.
          </p>
        </Columns>
        <br />
        <p className="case-sub-label">Typeface</p>
        <Columns>
          <CaseImage src="lavanImages/typeface.jpg" alt="type" />
          <CaseImage src="lavanImages/typography.jpg" alt="type" />
        </Columns>
        <br />
        <p className="case-sub-label">Final Logo</p>
        <Columns>
          <CaseImage src="lavanImages/logo.jpg" alt="final logo" />
          <p>
            The Lavan Beauty logo features a sleek, luxurious font that
            embodies the brand's high quality. On the website, it appears
            off-white on a green background for a clean, modern look. The
            night cream packaging uses a gold logo on green for elegance,
            while the day cream showcases green on off-white for a fresh,
            simple design. These variations ensure versatility while
            maintaining a sophisticated brand identity.
          </p>
        </Columns>
        <br />
        <p className="case-sub-label">Packaging</p>
        <Columns>
          <>
            <CaseImage src="lavanImages/sun.png" alt="type" />
            <br />
            <br />
            <center>
              <p>
                The sun symbol on our website and packaging represents the day
                cream, embodying elegance and energy for a bright, refreshed
                start.
              </p>
            </center>
          </>
          <>
            <CaseImage src="lavanImages/moon.png" alt="type" />
            <br />
            <br />
            <center>
              <p>
                The moon symbol represents the night cream on our website and
                packaging, reflecting a sense of calm, luxury, and rejuvenation
                for nighttime skincare.
              </p>
            </center>
          </>
        </Columns>
        <br />
        <Columns>
          <CaseImage src="lavanImages/boxPackaging.jpg" alt="type" />
          <CaseImage src="lavanImages/packaging.jpg" alt="type" />
        </Columns>
        <br />
        <br />
        <SectionHeading title="Website Revamp" />
        <AccentHeading number="1" title="UX Research" />
        <p className="case-sub-label">Competitor Analysis</p>
        <Columns>
          <>
            <CaseImage
              src="lavanImages/CompetitorAnalysis1.png"
              alt="Features Brainstorm"
            />
            <br />
            <br />
            <CaseImage
              src="lavanImages/CompetitorAnalysis3.png"
              alt="Features Brainstorm"
            />
          </>
          <CaseImage
            src="lavanImages/CompetitorAnalysis2.png"
            alt="Features Brainstorm"
          />
        </Columns>
        <br />
        <p className="case-sub-label">Common Themes</p>
        <ul>
          <li>A focus on main products, feels scientifically proven</li>
          <li>
            Sharp corners make things less friendly and more luxurious, make
            feel more exclusive
          </li>
          <li>
            A "Why Lavan Beauty" page could highlight the brand's mission and
            unique qualities, helping customers understand why it's the ideal
            choice for their skincare routine.
          </li>
          <li>
            The website should contain a feature that highlights the founder and
            their story. This section should include details about the founder's
            background, the inspiration behind starting the brand, and the
            challenges they aimed to solve. By sharing their journey and
            personal connection to the brand's mission, this feature adds
            authenticity and builds trust with the audience.
          </li>
          <li>Easily accessible links + CTAs</li>
        </ul>
        <AccentHeading number="2" title="Interpret" />
        <LabeledText label="Elevator Pitch">
          Lavan Beauty is the only luxurious and timeless skincare brand that
          blends traditional experiences with modern-day science as the backbone
          for high-end consumers who value and have experience investing in both
          high-quality products and themselves. Starting in the USA and EU, it
          caters to those who seek stable, streamlined, clean, reliable,
          sustainable, effective, natural, and rich ingredients to treat their
          skin with proper love and respect in an era of overconsumption and
          consumerism.
        </LabeledText>
       
        <p className="case-sub-label">Personas</p>
        <Columns>
          <CaseImage src="lavanImages/persona1.png" alt="site map" />
          <CaseImage src="lavanImages/persona2.png" alt="site map" />
        </Columns>
                <br />

        <Columns>
          <>
            <p className="case-sub-label">User Stories</p>
            <CaseImage src="lavanImages/userstory.png" alt="site map" />
          </>
          <>
            <p className="case-sub-label">Finding Common Themes</p>
            <CaseImage src="lavanImages/commonThemes.png" alt="site map" />
          </>
        </Columns>
                <br />

        <p className="case-sub-label">Refine Statements</p>
        <ol>
          <li>
            As a person with sensitive skin, I want a skincare brand that is
            transparent about ingredients so I know that I am not allergic to
            them and I can trust the product.
          </li>
          <li>
            As a college student with sensitive skin, I want to find a skincare
            routine that's not too complicated and poses less of a risk to me so
            that I can focus on my studies and hobbies without worrying about my
            skin all the time.
          </li>
          <li>
            As a busy working adult, I want to find the best skincare line for
            me in a quick and efficient manner so that I can make sure I can
            have skincare that suits my skin well
          </li>
        </ol>
        <AccentHeading number="3" title="Make" />
        <p className="case-sub-label">Sitemap</p>
        <CaseImage src="lavanImages/sitemap.png" alt="site map" />
        <AccentHeading number="4" title="Design" />
        <p className="case-sub-label">Low-Fidelity Wireframes</p>
        <Columns>
          <CaseImage src="lavanImages/lofi1.png" alt="lo-fi" />
          <CaseImage src="lavanImages/lofi2.png" alt="lo-fi" />
        </Columns>
        <br /> <p className="case-sub-label">Mid-Fidelity Wireframes</p>
        <Columns>
          <CaseImage src="lavanImages/midfi1.png" alt="mid-fi" />
          <CaseImage src="lavanImages/midfi2.png" alt="mid-fi" />
        </Columns>
        <br />
        <p className="case-sub-label">High-Fidelity Wireframes</p>
        <p>
          <a
            className="case-link"
            href="https://www.figma.com/proto/ldXYpkEbm49gv0sqzXp0pF/Disrupt-Hi-Fis?page-id=0%3A1&type=design&node-id=1-634&viewport=5733%2C1774%2C0.52&t=VyQre3zkxeZbS3LF-1&scaling=min-zoom&starting-point-node-id=1%3A50&mode=design"
            target="_blank"
            rel="noreferrer"
          >
            High-Fidelity Prototype
          </a>
        </p>{" "}
        <Columns>
          <>
            <h4>Home, About Us, and Product Pages</h4>
            <CaseImage src="lavanImages/hifi1.png" alt="hi-fi" />
          </>
          <>
            <h4>View Product, Ingredients, Science Pages</h4>
            <CaseImage src="lavanImages/hifi2.png" alt="hi-fi" />
          </>
        </Columns>
        <br />
      </CaseBody>
    </CaseStudyLayout>
  );
}

export default LavanProcess;
