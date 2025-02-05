import React, { useState, useEffect } from "react";
import Nav from "../../../NavigationBar";
import "./lavan.css";
import Footer from "../../../Footer/footer";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

function LavanProcess() {
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
              src="lavanImages/cover.png"
              alt="Cherry Landscape"
            />
          </div>
        </div>
      </section>

      <section id="header" className="title-header">
        <h1 style={{ color: "#334E3D" }}>Lavan Beauty</h1>
        <h2>
          Web Design, UX Research, Prototyping, User Testing, User Interviews,
          Branding
        </h2>
      </section>

      <section id="overview-section" className="overview-section">
        <div className="overview">
          <div className="overviewLeft lavan">
            <h5 style={{ color: "#334E3D" }}>Project Overview</h5>
            <p>
              Designing a user-friendly website for Lavan Beauty that simplifies
              skincare routines while establishing a strong brand identity. The
              website will feature a streamlined selection of products developed
              by a pharmacist, highlighting the commitment to natural
              ingredients and scientific efficacy.
            </p>
            <br />
            <h5 className="lavan">
              <a
                href="https://www.figma.com/proto/Dn5jK3GW8zHeYwOI9MdF1l/Lavan-Beauty-Wireframes?page-id=1157%3A2756&node-id=1157-4937&viewport=128%2C487%2C0.09&t=KuRPdoNn4MDquZgW-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1157%3A4937"
                target="_blank"
                rel="noreferrer"
              >
                High-Fidelity Prototype
              </a>
            </h5>
            <h5 className="lavan">
              <a
                href="https://drive.google.com/file/d/1d5mjqeBoFbFrbIt6hQJEWEey2CRjHKhT/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Brandbook{" "}
              </a>
            </h5>
            {/* <h5 className="hippo">
              <a
                href="https://www.disruptneu.com/"
                target="_blank"
                rel="noreferrer"
              >
                Deployed Site
              </a>
            </h5> */}
          </div>

          <div className="overviewRight lavan">
            <h5 style={{ color: "#334E3D" }}>Role</h5>
            <p>Design Lead</p>

            <h5 style={{ color: "#334E3D" }}>Team</h5>
            <div className="three-columns-container">
              <div className="column">
                <h6>Project Lead:</h6>
                <p>Valerie Irawan</p>
              </div>
              <div className="column">
                <h6>Design Lead:</h6>
                <p>Amanda Fong</p>
                <h6>Designers:</h6>
                <p>Heidy Hur, Andrea Lee, Caroline Xiong</p>
              </div>
              <div className="column">
                <h6>Tech Lead:</h6>
                <p>Ananya Radhakrishnan</p>

                <h6>Developers:</h6>
                <p>Emily Lin, Alizeh Zaidi</p>
              </div>
            </div>
            <h5 style={{ color: "#334E3D" }}>Timeline</h5>
            <p>September 2024 - December 2024</p>

            <h5 style={{ color: "#334E3D" }}>Tools</h5>
            <p>Figma</p>
          </div>
        </div>
      </section>
      <section className="summary lavan ">
        <h2>What is Lavan Beauty?</h2>
        <p>
          Lavan Beauty is a timeless and luxurious skincare brand. It offers a
          traditional experience while relying on modern-day science to craft
          its products. The brand caters to high-end consumers in the USA and
          EU. These consumers value both high-quality products and investing in
          themselves. They seek skincare solutions that are stable, streamlined,
          clean, reliable, and sustainable. Lavan Beauty’s products are made
          with effective, natural, and rich ingredients. They are designed for
          individuals who wish to treat their skin with proper love and respect.
          This mission stands out in an era of overconsumption and consumerism.{" "}
        </p>
        <br />
        {/* <h1 onClick={() => toggleDropdown('branding')}>Branding</h1> */}
        <h1>Branding</h1>
        {/* 
                {dropdowns.branding && (
                    <> */}
        <hr></hr>
        <h2>1 | Discovering the brand</h2>
        <p>
          We began the project by exploring and defining the ideal direction for
          the brand. It was important for us to understand the audience and how
          Lavan wants their brand to be portrayed.
        </p>
        <h3>Personality Levels</h3>{" "}
        <p>
          Brands need to have a clear personality in order for consumers to
          easily interact and identify with them. In this activity, our client
          and team indicated where they believe that the client’s company falls
          (or think that it should fall) within the following sets of traits.
          This exercise was very helpful in establishing a thoughtful brand
          identity.{" "}
        </p>
        <img
          src="lavanImages/personalityLevels.png"
          alt="Moodboard"
          onClick={() => {
            setOpen(true);
            setSelectedImageIndex(0);
          }}
        />
        <h3>Moodboarding</h3>
        <div className="moodboarding">
          <div className="lightbox-images moodboarding">
            <img
              src="lavanImages/Caro.jpg"
              alt="Moodboard"
              onClick={() => {
                setOpen(true);
                setSelectedImageIndex(1);
              }}
            />
            <img
              src="lavanImages/Heidy.jpg"
              alt="Moodboard"
              onClick={() => {
                setOpen(true);
                setSelectedImageIndex(2);
              }}
            />
          </div>
          <div className="lightbox-images moodboarding">
            <img
              src="lavanImages/Andrea.jpg"
              alt="Moodboard"
              onClick={() => {
                setOpen(true);
                setSelectedImageIndex(3);
              }}
            />
            <img
              src="lavanImages/Amanda.jpg"
              alt="Moodboard"
              onClick={() => {
                setOpen(true);
                setSelectedImageIndex(4);
              }}
            />
          </div>
        </div>
        <br />
        <h2>2 | Creating an Identity</h2>
        <h3>Color Palette</h3>
        <div className="two-columns-container">
          <div className="column">
            <img
              src="lavanImages/colorpal.png"
              alt="color scheme"
              onClick={() => {
                setOpen(true);
                setSelectedImageIndex(5);
              }}
            />
          </div>
          <div className="column lavan">
            <p>
              Lavan Beauty’s colors are elegant and timeless, reflecting the
              brand’s luxurious and floral essence. The colors to be used in
              print and digital materials are Ivory Petal, Bronze Orchid, Green
              Quartz, and Marigold Silk. Ivory Petal and Bronze Orchid form the
              foundation, offering a balance of softness and depth that speaks
              to understated sophistication. Green Quartz and Marigold Silk act
              as refined accents, adding vibrancy and opulence to create a truly
              high-end aesthetic.
              <br />
              <br />
            </p>
          </div>
        </div>
        <br />
        <h3>Typeface</h3>
        <div className="two-columns-container">
          <div className="column">
            <img
              src="lavanImages/typeface.jpg"
              alt="type"
              onClick={() => {
                setOpen(true);
                setSelectedImageIndex(6);
              }}
            />
          </div>
          <div className="column lavan">
            <img
              src="lavanImages/typography.jpg"
              alt="type"
              onClick={() => {
                setOpen(true);
                setSelectedImageIndex(7);
              }}
            />
          </div>
        </div>
        <br />
        <h3 style={{ marginBottom: -13 }}>Final Logo</h3>
        <br />
        <div className="two-columns-container">
          <div className="column">
            <img
              src="lavanImages/logo.jpg"
              alt="final logo"
              onClick={() => {
                setOpen(true);
                setSelectedImageIndex(8);
              }}
            />
          </div>
          <div className="column lavan">
            <p>
              The Lavan Beauty logo features a sleek, luxurious font that
              embodies the brand's high quality. On the website, it appears
              off-white on a green background for a clean, modern look. The
              night cream packaging uses a gold logo on green for elegance,
              while the day cream showcases green on off-white for a fresh,
              simple design. These variations ensure versatility while
              maintaining a sophisticated brand identity.
            </p>
          </div>
        </div>
        <br />
        <h3 style={{ marginBottom: 18 }}>Packaging</h3>
        <div className="two-columns-container">
          <div className="column">
            <img
              src="lavanImages/sun.png"
              alt="type"
              onClick={() => {
                setOpen(true);
                setSelectedImageIndex(9);
              }}
            />
            <br />
            <br />
            <center>
              <p>
                The sun symbol on our website and packaging represents the day
                cream, embodying elegance and energy for a bright, refreshed
                start.
              </p>
            </center>
          </div>
          <div className="column lavan">
            <img
              src="lavanImages/moon.png"
              alt="type"
              onClick={() => {
                setOpen(true);
                setSelectedImageIndex(10);
              }}
            />
            <br />
            <br />
            <center>
              <p>
                The moon symbol represents the night cream on our website and
                packaging, reflecting a sense of calm, luxury, and rejuvenation
                for nighttime skincare.
              </p>
            </center>{" "}
          </div>
        </div>
        <br />
        <img
          src="lavanImages/boxPackaging.jpg"
          alt="type"
          onClick={() => {
            setOpen(true);
            setSelectedImageIndex(11);
          }}
        />
        <br />
        <img
          src="lavanImages/packaging.jpg"
          alt="type"
          onClick={() => {
            setOpen(true);
            setSelectedImageIndex(12);
          }}
        />
        <br></br>
        <br></br>
        <h1>Website Revamp</h1>
        {/* {dropdowns.webDesign && (
                    <> */}
        <hr></hr>
        <h2>1 | UX Research</h2>
        <h3>Brainstorming</h3>
        <h3>Competitor Analysis</h3>
        <img
          src="lavanImages/CompetitorAnalysis1.png"
          alt="Features Brainstorm"
          onClick={() => {
            setOpen(true);
            setSelectedImageIndex(13);
          }}
        />
        <img
          src="lavanImages/CompetitorAnalysis2.png"
          alt="Features Brainstorm"
          onClick={() => {
            setOpen(true);
            setSelectedImageIndex(14);
          }}
        />
        <img
          src="lavanImages/CompetitorAnalysis3.png"
          alt="Features Brainstorm"
          onClick={() => {
            setOpen(true);
            setSelectedImageIndex(15);
          }}
        />
        <h3>Common Themes</h3>
        <ul>
          <li>A focus on main products, feels scientifically proven</li>
          <li>
            Sharp corners make things less friendly and more luxurious, make
            feel more exclusive
          </li>
          <li>
            A “Why Lavan Beauty” page could highlight the brand’s mission and
            unique qualities, helping customers understand why it’s the ideal
            choice for their skincare routine.
          </li>
          <li>
            The website should contain a feature that highlights the founder and
            their story. This section should include details about the founder’s
            background, the inspiration behind starting the brand, and the
            challenges they aimed to solve. By sharing their journey and
            personal connection to the brand’s mission, this feature adds
            authenticity and builds trust with the audience.{" "}
          </li>
          <li>Easily accessible links + CTAs</li>
        </ul>
        <h2>2 | Interpret</h2>
        <h3>Elevator Pitch</h3>
        <h4>
          Lavan Beauty is the only luxurious and timeless skincare brand that
          blends traditional experiences with modern-day science as the backbone
          for high-end consumers who value and have experience investing in both
          high-quality products and themselves. Starting in the USA and EU, it
          caters to those who seek stable, streamlined, clean, reliable,
          sustainable, effective, natural, and rich ingredients to treat their
          skin with proper love and respect in an era of overconsumption and
          consumerism.
        </h4>
        <h3>Personas</h3>
        <img
          src="lavanImages/persona1.png"
          alt="site map"
          onClick={() => {
            setOpen(true);
            setSelectedImageIndex(16);
          }}
        />
        <img
          src="lavanImages/persona2.png"
          alt="site map"
          onClick={() => {
            setOpen(true);
            setSelectedImageIndex(17);
          }}
        />
        <h3>Refine Statements</h3>
        <h4>
          <ol>
            <li>
              As a person with sensitive skin, I want a skincare brand that is
              transparent about ingredients so I know that I am not allergic to
              them and I can trust the product.
            </li>
            <li style={{ marginTop: 15 }}>
              As a college student with sensitive skin, I want to find a
              skincare routine that’s not too complicated and poses less of a
              risk to me so that I can focus on my studies and hobbies without
              worrying about my skin all the time.
            </li>
            <li style={{ marginTop: 15 }}>
              As a busy working adult, I want to find the best skincare line for
              me in a quick and efficient manner so that I can make sure I can
              have skincare that suits my skin well
            </li>
          </ol>
        </h4>
        <h2>3 | Make</h2>
        <h3>Sitemap</h3>
        <img
          src="lavanImages/sitemap.png"
          alt="site map"
          onClick={() => {
            setOpen(true);
            setSelectedImageIndex(18);
          }}
        />
        <h2>4 | Design</h2>
        <h3>Low-Fidelity Wireframes</h3>
        <img
          src="lavanImages/lofi1.png"
          alt="lo-fi"
          onClick={() => {
            setOpen(true);
            setSelectedImageIndex(19);
          }}
        />{" "}
        <br />
        <img
          src="lavanImages/lofi2.png"
          alt="lo-fi"
          onClick={() => {
            setOpen(true);
            setSelectedImageIndex(20);
          }}
        />
        <br />
        <h3>Mid-Fidelity Wireframes</h3>
        <img
          src="lavanImages/midfi1.png"
          alt="mid-fi"
          onClick={() => {
            setOpen(true);
            setSelectedImageIndex(21);
          }}
        />{" "}
        <br />
        <img
          src="lavanImages/midfi2.png"
          alt="mid-fi"
          onClick={() => {
            setOpen(true);
            setSelectedImageIndex(22);
          }}
        />{" "}
        <br />
        <h3>High-Fidelity Wireframes</h3>
        <h>
          <a
            href="https://www.figma.com/proto/ldXYpkEbm49gv0sqzXp0pF/Disrupt-Hi-Fis?page-id=0%3A1&type=design&node-id=1-634&viewport=5733%2C1774%2C0.52&t=VyQre3zkxeZbS3LF-1&scaling=min-zoom&starting-point-node-id=1%3A50&mode=design"
            target="_blank"
            rel="noreferrer"
          >
            Click Here to see High-Fis!
          </a>
        </h>
        <h4>Home, About Us, and Product Pages</h4>
        <img
          src="lavanImages/hifi1.png"
          alt="hi-fi"
          onClick={() => {
            setOpen(true);
            setSelectedImageIndex(23);
          }}
        />
        <br />
        <h4>View Product, Ingredients, Science Pages </h4>
        <img
          src="lavanImages/hifi2.png"
          alt="hi-fi"
          onClick={() => {
            setOpen(true);
            setSelectedImageIndex(24);
          }}
        />
        <br />
        <h2>5 | Presentation</h2>
        <p>
          Check out the{" "}
          <a
            href="https://www.figma.com/proto/Dn5jK3GW8zHeYwOI9MdF1l/Lavan-Beauty-Wireframes?page-id=1157%3A2756&node-id=1157-4937&viewport=128%2C487%2C0.09&t=KuRPdoNn4MDquZgW-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1157%3A4937"
            target="_blank"
            rel="noreferrer"
          >
            high-fis
          </a>
          !
        </p>
        {/* </>
                )} */}
        <br />
      </section>
      {/* <button type="button" onClick={() => setOpen(true)}>
                Open Lightbox
            </button> */}

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        // opens associated image lightbox
        index={selectedImageIndex}
        slides={[
          { src: "/lavanImages/personalityLevels.png" },
          { src: "/lavanImages/Caro.jpg" },
          { src: "/lavanImages/Heidy.jpg" },
          { src: "/lavanImages/Andrea.jpg" },
          { src: "/lavanImages/Amanda.jpg" },
          { src: "/lavanImages/colorpal.png" },
          { src: "/lavanImages/typeface.jpg" },
          { src: "/lavanImages/typography.jpg" },
          { src: "/lavanImages/logo.jpg" },
          { src: "/lavanImages/sun.png" },
          { src: "/lavanImages/moon.png" },
          { src: "/lavanImages/boxPackaging.jpg" },
          { src: "/lavanImages/Packaging.jpg" },



          // 11
          { src: "/lavanImages/CompetitorAnalysis1.png" },
          { src: "/lavanImages/CompetitorAnalysis2.png" },
          { src: "/lavanImages/CompetitorAnalysis3.png" },

          // 14
          { src: "/lavanImages/persona1.png" },
          { src: "/lavanImages/persona2.png" },
          { src: "/lavanImages/sitemap.png" },
          { src: "/lavanImages/lofi1.png" },
          { src: "/lavanImages/lofi2.png" },

          { src: "/lavanImages/midfi1.png" },
          { src: "/lavanImages/midfi2.png" },
          { src: "/lavanImages/hifi1.png" },
          { src: "/lavanImages/hifi2.png" },

          // 28
          { src: "/disruptImages/hifiHomeAbout.png" },
          { src: "/disruptImages/hifiVentures.png" },
          { src: "/disruptImages/hifiConsultingEventsNewsroom.png" },
        ]}
      />

      <Footer />
    </>
  );
}

export default LavanProcess;
