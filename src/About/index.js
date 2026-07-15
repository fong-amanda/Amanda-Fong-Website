import React, { useEffect, useRef, useState } from "react";
import Nav from "../NavigationBar";
import Footer from "../Footer/footer";
import MessageBubble from "../Home/MessageBubble";
import "../style.css";
import "./about.css";

/* ============================================================================
 * ABOUT PAGE CONTENT
 * ----------------------------------------------------------------------------
 * All copy + images for the About page live here so they're easy to update
 * without touching the layout below. Change text, swap an image path, add or
 * remove an experience/leadership card — the components adapt automatically.
 *
 * Images: drop files into /public and reference them by absolute path
 * (e.g. "/aboutImages/cboe.png"). Until an image exists, a neutral placeholder
 * box is shown in its place.
 * ========================================================================== */

const HERO = {
  heading: "Hey, I'm Amanda!",
  image: "/aboutmeimage10.jpg",
  imageAlt: "Amanda at her graduation",
  credentials: [
    {
      label: "Currently",
      school: "Carnegie Mellon University",
      degree: "M.S. Human-Computer Interaction",
      link: "https://hcii.cmu.edu/",
    },
    {
      label: "Recent Graduate",
      school: "Northeastern University",
      degree: "B.S. Computer Science + Interaction Design",
      link: "https://www.northeastern.edu/",
    },
  ],

  paragraphs: [
    <>
      Since I was a kid, I've loved both art and technology, but it was my
      upbringing that taught me how important perspective and empathy is. As a
      second-generation Asian American, I grew up in Chinatown, NYC. My parents
      had spent nearly their whole lives in the U.S., which meant my upbringing
      looked a little different from most of my first-generation Chinese peers.
      After moving to Long Island, where most of my peers were more culturally
      American, I found myself standing out for the opposite reason. Growing up
      between these two identities taught me to notice{" "}
      <span className="about-paragraph">nuance and perspective </span>from a
      young age, something that continues to shape how I approach design today.
    </>,
    <>
      This experience made me naturally curious about how other people think and
      feel. Over time, my curiosity became empathy—a quality that was later
      recognized as my top CliftonStrengths trait. Going to Northeastern and
      discovering Human-Centered Design felt like finding the place where
      everything I cared about finally came together. It combined my love for
      design and technology with a desire to understand people, giving me a way
      to design not just beautiful interfaces, but experiences that genuinely
      improve people's lives.
    </>,
    <>
      Through my work, I've focused on designing thoughtful, accessible
      experiences while helping build the communities around them. For me,
      design has never been just about solving problems, it's about listening
      first, understanding different perspectives, and creating technology that
      enables people to feel seen.
    </>,
    <>
      I hope to continue to grow as both a designer and developer{" "}
      <span className="about-paragraph">
        who creates digital experiences that are welcoming, empowering, and
        inclusive that are built with empathy from the start.
      </span>
    </>,
  ],
};

const EXPERIENCES_SECTION = {
  title: "PROFESSIONAL EXPERIENCES",
  eyebrow: "Co-Ops & Internships",
  // Each item is one tab + its detail card. Update freely.
  items: [
    {
      id: "cboe",
      tab: "Cboe Global Markets",
      image: "/aboutImages/cboe.png",
      imageAlt: "Welcome Cboe Interns 2025",
      badge: "Internship",
      date: "June – August 2025",
      title: "Cboe Global Markets",
      link: "https://www.cboe.com/",
      role: "Software Engineer",
      description:
        "Redesigned and developed a critical infrastructure monitoring application for Cboe's global Titanium markets, architecting a legacy system into a modern React interface, building real-time system health components, and streamlining workflows to reduce monitoring complexity",
    },
    {
      id: "s2n",
      tab: "S2N Health",
      image: "/aboutImages/s2n.png",
      imageAlt: "S2N Health",
      badge: "Co-Op",
      date: "August 2025 - February 2026",
      title: "S2N Health",
      link: "https://s2nhealth.com/",
      role: "Product Designer",
      description:
        "Designed a prioritization feature for an enterprise sales platform, embedding it into the existing planning workflow so reps could set priorities and track shifting targets — replacing a disconnected external process with one integrated system. Used Figma, user research (personas, competitive analysis, usability testing), and built an internal Looker Studio dashboard for team insights",
    },
    {
      id: "coverys",
      tab: "Coverys",
      image: "/aboutImages/coverys.png",
      imageAlt: "Coverys",
      badge: "Co-Op",
      date: "January - August 2024",
      title: "Coverys",
      link: "http://coverys.com/",
      role: "Cloud O365 Engineer",
      description:
        "Streamlined workflows and delivered insights using Power Automate and Power BI, and designed SharePoint experiences from user research through Figma prototyping",
    },
  ],
};

const LEADERSHIP = {
  title: "LEADERSHIP & INVOLVEMENT",
  intro:
    "Community shapes my growth as a designer just as much as the work does — here are the spaces I had the opportunity to learn & grow from throughout my undergraduate years",
  // Each card is a small carousel. Every slide has its own image + hover
  // message; `pos` controls where the green hover bubble floats relative to the
  // photo ("top-left" | "top-right" | "top-center"). Add/remove slides freely.
  cards: [
    {
      title: "Associate Director of Design", // fallback / default
      org: "Scout Design Organization",
      link: "https://scout.camd.northeastern.edu/",
      slides: [
        {
          image: "/aboutImages/scout1.png",
          alt: "Amanda presenting at Scout",
          message:
            "The role I grew into, where I oversaw design across all studio project teams",
          pos: "top-left",
          title: "",
        },
        {
          image: "/aboutImages/scout4.png",
          alt: "Scout team",
          message:
            "Prioritized clean developer handoff, making sure design intent translated clearly into implementation",
          pos: "bottom-right",
          title: "Design Lead",
        },
        {
          image: "/aboutImages/scout3.png",
          alt: "Scout team",
          message: "Implemented website for the Scout 2025 Conference: Shift!",
          pos: "top-right",
          title: "Conference Developer",
        },
        {
          image: "/aboutImages/scout5.png",
          alt: "Scout team",
          message: "Some of my Scout community that made me love the club",
          pos: "top-left-large",
          title: "Designer & Developer",
        },
        {
          image: "/aboutImages/scout2.png",
          alt: "Scout design work",
          message:
            "Joined Sept. 2023, where I worked with my first client and used Figma for the first time",
          pos: "top-right",
          title: "Junior Designer",
        },
      ],
    },
    {
      title: "Media Specialist",
      org: "Taiwanese American Student Association",
      link: "https://www.instagram.com/nu_tasa/",
      slides: [
        {
          image: "/aboutImages/tasa4.png",
          alt: "TASA culture night",
          message:
            "I found an outlet to design for a community I cared about, from event promos to our Instagram presence",
          pos: "top-left",
        },

        {
          image: "/aboutImages/tasa2.png",
          alt: "TASA event promo",
          message:
            "After growing up in two environments where I never quite fit in, TASA finally gave me a community where I fit both",
          pos: "top-left",
        },
        {
          image: "/aboutImages/tasa3.png",
          alt: "TASA culture night",
          message:
            "I started TASA.jia, an Instagram for our club's family system, to cultivate smaller communities within TASA to build closer bonds",
          pos: "top-right",
        },
        {
          image: "/aboutImages/tasa1.png",
          alt: "TASA group photo",
          message:
            "Designing for TASA brought me closer to my culture and my community",
          pos: "top-right",
        },
      ],
    },
    {
      title: "Software Designer",
      org: "Generate Product Development",
      link: "https://generatenu.com/",
      slides: [
        {
          image: "/aboutImages/generate1.png",
          alt: "Generate design team",
          message:
            "My design lead taught me the importance of auto-layout to create responsive designs",
          pos: "top-right",
        },
        {
          image: "/aboutImages/generate2.png",
          alt: "Generate showcase",
          message:
            "Each semester ended with a showcase, giving every team the opportunity to present their work",
          pos: "top-left",
        },
        {
          image: "/aboutImages/generate3.png",
          alt: "Generate final semester",
          message:
            "The team who made my final semester in Generate so memorable",
          pos: "bottom-right",
        },
        {
          image: "/aboutImages/generate4.png",
          alt: "Generate graduation photo",
          message:
            "The people are what make Generate special, it's full of some of the most passionate and ambitious people I know",
          pos: "top-right",
        },
      ],
    },
  ],
  callout: {
    heading: (
      <>
        I created spaces where <span className="about-paragraph"></span>design
        talent could thrive.
      </>
    ),
    body: "At Northeastern University, I led project teams at Scout through the full design process to client handoff, built community through the Taiwanese Student Association, and shaped real, seamless products at Generate through user research.",
  },
};

/* ============================================================================
 * REVEAL-ON-SCROLL
 * A small helper so any element can fade in when it enters the viewport.
 * ========================================================================== */

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

function Reveal({ as: Tag = "div", className = "", children, ...rest }) {
  const [ref, visible] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`fade-in ${visible ? "visible" : ""} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* A media box that shows an image, falling back to a neutral placeholder
 * (so the layout never shows a broken-image icon while assets are pending). */
function Media({ src, alt, className = "" }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`about-media ${className}`.trim()}>
      {src && !failed && (
        <img
          className="about-media__img"
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

/* Maps a bubble position preset to the MessageBubble tail so the tail points
 * back toward the photo it belongs to. */
const TAIL_BY_POS = {
  "top-left": "right",
  "top-left-large": "right",

  "top-right": "left",
  "top-right-large": "left",

  "top-center": "right",
  "bottom-right": "top-left",
};

/* A leadership card: a small image carousel with a green hover bubble that
 * floats near the photo. Switching slides swaps both the words and the bubble's
 * position (each slide carries its own `message` + `pos`). */
function LeadershipCarousel({ card }) {
  const slides = card.slides || [];
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  const slide = slides[index] || {};
  const pos = slide.pos || "top-right";
  const hasCarousel = slides.length > 1;

  const go = (dir) =>
    setIndex((i) => (i + dir + slides.length) % slides.length);

  return (
    <div className="about-lead-card">
      <div
        className="about-carousel"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="about-carousel__viewport">
          {slides.map((s, i) => (
            <Media
              key={i}
              src={s.image}
              alt={s.alt}
              className={`about-carousel__slide ${
                i === index ? "is-active" : ""
              }`}
            />
          ))}

          {hasCarousel && (
            <>
              <button
                type="button"
                className="about-carousel__nav prev"
                onClick={() => go(-1)}
                aria-label="Previous photo"
              >
                ‹
              </button>
              <button
                type="button"
                className="about-carousel__nav next"
                onClick={() => go(1)}
                aria-label="Next photo"
              >
                ›
              </button>
            </>
          )}
          {/* Dots now live inside the viewport, overlaid on the image */}
          {hasCarousel && (
            <div className="about-carousel__dots">
              {slides.map((_, i) => (
                <button
                  type="button"
                  key={i}
                  className={`about-dot ${i === index ? "is-active" : ""}`}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to photo ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Green hover bubble — appears near the photo, re-placed per slide. */}
        {hovered && slide.message && (
          <div className={`about-hover about-hover--${pos}`}>
            <MessageBubble
              message={slide.message}
              tailPosition={TAIL_BY_POS[pos] || "right"}
            />
          </div>
        )}
      </div>

      <p className="about-lead-card__title">{slide.title || card.title}</p>

      <p
        className={`about-lead-card__org ${card.link ? "is-link" : ""}`}
        onClick={() =>
          card.link && window.open(card.link, "_blank", "noopener,noreferrer")
        }
      >
        {card.org}
      </p>
    </div>
  );
}

/* ============================================================================
 * ABOUT PAGE
 * ========================================================================== */

function About() {
  const [activeId, setActiveId] = useState(EXPERIENCES_SECTION.items[0].id);
  const activeExp =
    EXPERIENCES_SECTION.items.find((item) => item.id === activeId) ||
    EXPERIENCES_SECTION.items[0];

  return (
    <div>
      <Nav />

      <main className="about-page">
        {/* ---- Hero ---- */}
        <section className="about-hero">
          <Reveal className="about-hero__photo-wrap">
            <img
              className="about-hero__photo"
              src={HERO.image}
              alt={HERO.imageAlt}
            />
          </Reveal>

          <Reveal className="about-hero__text">
            <h1 className="about-hero__heading">{HERO.heading}</h1>
            <div className="about-current">
              {HERO.credentials.map((item, i) => (
                <div key={i} className="about-current__item">
                  <p className="about-current__label">{item.label}</p>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="about-current__school"
                  >
                    {item.school}
                  </a>

                  <p className="about-current__degree">{item.degree}</p>
                </div>
              ))}
            </div>
            {HERO.paragraphs.map((text, i) => (
              <p className="about-body" key={i}>
                {text}
              </p>
            ))}
          </Reveal>
        </section>

        {/* ---- Professional Experiences ---- */}
        <section className="about-section">
          <Reveal as="header" className="about-section__head">
            <h2 className="about-section__title">
              {EXPERIENCES_SECTION.title}
            </h2>
            <span className="about-section__eyebrow">
              {EXPERIENCES_SECTION.eyebrow}
            </span>
          </Reveal>

          <div className="about-tabs" role="tablist" aria-label="Experiences">
            {EXPERIENCES_SECTION.items.map((item) => (
              <button
                key={item.id}
                role="tab"
                aria-selected={item.id === activeId}
                className={`about-tab ${
                  item.id === activeId ? "is-active" : ""
                }`}
                onClick={() => setActiveId(item.id)}
              >
                {item.tab}
              </button>
            ))}
          </div>

          <Reveal className="about-exp" key={activeExp.id}>
            <Media
              src={activeExp.image}
              alt={activeExp.imageAlt}
              className="about-exp__media"
            />
            <div className="about-exp__body">
              <div className="about-exp__meta">
                {activeExp.badge && (
                  <span className="about-exp__badge">{activeExp.badge}</span>
                )}
                {activeExp.date && (
                  <span className="about-exp__date">{activeExp.date}</span>
                )}
              </div>
              <h3
                className={`about-exp__title ${activeExp.link ? "is-link" : ""}`}
                onClick={() =>
                  activeExp.link &&
                  window.open(activeExp.link, "_blank", "noopener,noreferrer")
                }
              >
                {activeExp.title}
              </h3>

              <p className="about-exp__role">{activeExp.role}</p>
              <p className="about-exp__desc">{activeExp.description}</p>
            </div>
          </Reveal>
        </section>

        {/* ---- Leadership & Involvement ---- */}
        <section className="about-section">
          <Reveal as="header" className="about-section__head">
            <h2 className="about-section__title">{LEADERSHIP.title}</h2>
          </Reveal>

          <Reveal as="p" className="about-lead__intro">
            {LEADERSHIP.intro}
          </Reveal>

          <div className="about-lead__grid">
            {LEADERSHIP.cards.map((card, i) => (
              <Reveal key={i}>
                <LeadershipCarousel card={card} />
              </Reveal>
            ))}
          </div>
          <hr className="about-lead__divider" />

          <Reveal className="about-lead__callout">
            <h3 className="about-lead__callout-heading">
              {LEADERSHIP.callout.heading}
            </h3>
            <p className="about-lead__callout-body">
              {LEADERSHIP.callout.body}
            </p>
          </Reveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default About;
