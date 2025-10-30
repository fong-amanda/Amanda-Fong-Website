import React, { useState, useEffect, useMemo } from "react";
import { ScrollProvider } from "./Context/ScrollContext";
import "./portfolio.css";
import { useNavigate } from "react-router-dom";

const getAllTags = (projects) => {
  const tagSet = new Set();
  const orderedTags = [];

  projects.forEach((project) => {
    if (project.tags) {
      const tags = project.tags.split(" | ").map((tag) => tag.trim());
      tags.forEach((tag) => {
        if (!tagSet.has(tag)) {
          tagSet.add(tag);
          orderedTags.push(tag);
        }
      });
    }
  });

  return orderedTags;
};

const parseTagsToHTML = (tagsString, activeFilters, onTagClick) => {
  if (!tagsString) return null;

  const tagMappings = {
    "UI/UX Design": "ui-ux",
    "Web Design": "web-design",
    Branding: "branding",
    "Mobile Application Design": "mobile-app",
    "Graphic Design": "graphic-design",
    "Digital Painting": "digital-painting",
    Accessibility: "accessibility",
  };

  const tags = tagsString.split(" | ").map((tag) => tag.trim());

  return (
    <div className="project-tags">
      {tags.map((tag, index) => {
        const className = tagMappings[tag] || "";
        const isActive = activeFilters.includes(tag);
        return (
          <span
            key={index}
            className={`tag ${className} ${isActive ? "selected" : ""}`}
            onClick={() => onTagClick(tag)}
          >
            {tag}
          </span>
        );
      })}
    </div>
  );
};

const ProjectCard = ({
  name,
  coverImageSrc,
  coverImageAlt,
  onClick,
  tags,
  description,
  customClass,
  activeFilters,
  onTagClick,
}) => {
  return (
    <div className={`projectProcess ${customClass || ""}`}>
      {coverImageSrc && (
        <img
          src={coverImageSrc}
          alt={coverImageAlt || `${name} Cover`}
          onClick={onClick}
        />
      )}
      <h2 onClick={onClick}>{name}</h2>
      {parseTagsToHTML(tags, activeFilters, onTagClick)}
      {description && <p className="project-description">{description}</p>}
    </div>
  );
};

// Define project details
const PROJECTS = [
  {
    name: "Lavan Beauty",
    coverImageSrc: "lavanImages/CoverLavan.png",
    coverImageAlt: "Lavan-Beauty-Cover",
    tags: "UI/UX Design | Web Design | Branding",
  },
    {
    name: "Dearly",
    coverImageSrc:
      "dearlyImages/Cover.jpg",
    tags: "Accessibility | UI/UX Design | Branding | Mobile Application Design",
  },
  {
    name: "Student Activity Calendar",
    coverImageSrc: "sacImages/Cover.png",
    alt: "Student-Activity-Calendar-Cover",
    tags: "UI/UX Design | Mobile Application Design",
  },
  {
    name: "Disrupt",
    coverImageSrc: "disruptImages/cover.jpg",
    tags: "UI/UX Design | Web Design | Branding",
    customClass: "Disrupt",
  },
  {
    name: "Cherry Crisis",
    coverImageSrc: "cherryImages/cover.png",
    alt: "Cherry Crisis Cover Image",
    tags: "UI/UX Design | Web Design | Branding",
  },
  {
    name: "Fix-A-Leak",
    coverImageSrc: "fixALeak Images/Cover Page.jpg",
    alt: "Fix a leak cover Image",
    tags: "UI/UX Design | Mobile Application Design",
  },
  {
    name: "Social Spotify",
    coverImageSrc: "spotifyImages/cover.jpg",
    alt: "Social-Spotify-Cover",
    tags: "UI/UX Design | Mobile Application Design",
  },
  {
    name: "Cosmic Finances",
    coverImageSrc: "financesImages/cover.jpg",
    tags: "UI/UX Design | Web Design",
  },
  {
    name: "Fusion of Cultures",
    coverImageSrc:
      "fusionOfCulturesIndividual/fusionOfCulturesPhotos/Cover.jpg",
    tags: "Graphic Design | Digital Painting",
  },

];

const WORKS_IN_PROGRESS = [
  {
    name: "Three Stones",
    description:
      "Designing a mobile app that connects real estate developers with investors by allowing developers to post crowdfunding projects and investors to explore listings, contribute small amounts, and build a real estate portfolio for potential profit.",
    tags: "Mobile Application Design | Accessibility | UI/UX Design",
  },
];

function Design() {
  const navigate = useNavigate();
  const [activeFilters, setActiveFilters] = useState([]);

  const [visibility, setVisibility] = useState({
    header: false,
    projects: new Array(PROJECTS.length).fill(false),
    worksInProgress: false,
    wip: new Array(WORKS_IN_PROGRESS.length).fill(false),
  });

  // Get all unique tags for filter buttons
  const allTags = useMemo(() => {
    return getAllTags([...PROJECTS, ...WORKS_IN_PROGRESS]);
  }, []);

  // Filter projects based on active filters
  const filteredProjects = useMemo(() => {
    if (activeFilters.length === 0) return PROJECTS;

    return PROJECTS.filter((project) => {
      if (!project.tags) return false;
      const projectTags = project.tags.split(" | ").map((tag) => tag.trim());
      return activeFilters.some((filter) => projectTags.includes(filter));
    });
  }, [activeFilters]);

  // Pad projects to maintain two-column grid
  const paddedProjects = useMemo(() => {
    const padded = [...filteredProjects];
    // If odd number of projects, add a placeholder div
    if (padded.length % 2 !== 0) {
      padded.push({ name: "placeholder", placeholder: true });
    }
    return padded;
  }, [filteredProjects]);

  // Filter WIP projects
  const filteredWIP = useMemo(() => {
    if (activeFilters.length === 0) return WORKS_IN_PROGRESS;

    return WORKS_IN_PROGRESS.filter((project) => {
      if (!project.tags) return false;
      const projectTags = project.tags.split(" | ").map((tag) => tag.trim());
      return activeFilters.some((filter) => projectTags.includes(filter));
    });
  }, [activeFilters]);

  // Pad WIP projects to maintain two-column grid
  const paddedWIP = useMemo(() => {
    const padded = [...filteredWIP];
    // If odd number of projects, add a placeholder div
    if (padded.length % 2 !== 0) {
      padded.push({ name: "placeholder", placeholder: true });
    }
    return padded;
  }, [filteredWIP]);

  // Create refs using useMemo to ensure they're only created once
  const refs = useMemo(
    () => ({
      header: React.createRef(),
      projects: PROJECTS.map(() => React.createRef()),
      worksInProgress: React.createRef(),
      wip: WORKS_IN_PROGRESS.map(() => React.createRef()),
    }),
    []
  );

  // Handle tag filter toggle
  const handleTagFilter = (tag) => {
    setActiveFilters((prev) => {
      if (prev.includes(tag)) {
        return prev.filter((t) => t !== tag);
      } else {
        return [...prev, tag];
      }
    });
  };

  // Clear all filters
  const clearFilters = () => {
    setActiveFilters([]);

    // Reset visibility to show all projects when clearing filters
    setTimeout(() => {
      setVisibility((prev) => ({
        ...prev,
        projects: new Array(PROJECTS.length).fill(true),
        wip: new Array(WORKS_IN_PROGRESS.length).fill(true),
      }));
    }, 50);
  };

  const handleProjectClick = (projectName) => {
    // Add navigation logic for each project
    switch (projectName) {
      case "Lavan Beauty":
        navigate("/lavan");
        break;
      case "Disrupt":
        navigate("/disrupt");
        break;
      case "Student Activity Calendar":
        navigate("/student-activity-calendar");
        break;
      case "Cherry Crisis":
        navigate("/cherry-crisis");
        break;
      case "Fix-A-Leak":
        navigate("/fix-a-leak");
        break;
      case "Social Spotify":
        navigate("/spotify");
        break;
      case "Cosmic Finances":
        navigate("/cosmic-finances");
        break;
      case "Fusion of Cultures":
        navigate("/fusion-of-cultures");
        break;
      case "Dearly":
        navigate("/dearly");
        break;
      case "Three Stones":
        navigate("/three-stones");
        break;
      default:
        console.log(`No route defined for ${projectName}`);
    }
  };

  useEffect(() => {
    const observers = [];
    const observerOptions = { threshold: 0.1 };

    const createObserver = (ref, key, index = null) => {
      const observer = new IntersectionObserver((entries) => {
        setVisibility((prev) => {
          if (index === null) {
            return { ...prev, [key]: entries[0].isIntersecting };
          }

          const newVisibility = [...prev[key]];
          newVisibility[index] = entries[0].isIntersecting;
          return { ...prev, [key]: newVisibility };
        });
      }, observerOptions);

      if (ref.current) observer.observe(ref.current);
      return observer;
    };

    observers.push(createObserver(refs.header, "header"));

    refs.projects.forEach((ref, index) => {
      observers.push(createObserver(ref, "projects", index));
    });

    observers.push(createObserver(refs.worksInProgress, "worksInProgress"));

    refs.wip.forEach((ref, index) => {
      observers.push(createObserver(ref, "wip", index));
    });

    // Cleanup
    return () => observers.forEach((observer) => observer.disconnect());
  }, [refs]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibility((prev) => ({
        ...prev,
        projects: new Array(PROJECTS.length).fill(true),
        wip: new Array(WORKS_IN_PROGRESS.length).fill(true),
      }));
    }, 100);

    return () => clearTimeout(timer);
  }, [activeFilters]);

  const tagMappings = {
    "UI/UX Design": "ui-ux",
    "Web Design": "web-design",
    Branding: "branding",
    "Mobile Application Design": "mobile-app",
    "Graphic Design": "graphic-design",
    "Digital Painting": "digital-painting",
    Accessibility: "accessibility",
  };

  return (
    <ScrollProvider>
      <div id="myWork" name="my-work" className="my-work-section portfolio">
        <div className="filter-controls">
          <div className="filter-header">
            {activeFilters.length > 0 && (
              <button className="clear-filters" onClick={clearFilters}>
                Clear All ({activeFilters.length})
              </button>
            )}
          </div>

          <div className="filter-tags">
            {allTags.map((tag) => {
              const className = tagMappings[tag] || "";
              const isActive = activeFilters.includes(tag);
              return (
                <span
                  key={tag}
                  className={`tag filter-tag ${className} ${
                    isActive ? "selected" : ""
                  }`}
                  onClick={() => handleTagFilter(tag)}
                >
                  {tag}
                </span>
              );
            })}
          </div>
        </div>

        <div className="my-work">
          {paddedProjects.map((project, index) => {
            // Skip rendering placeholder
            if (project.placeholder) {
              return (
                <div
                  key="placeholder"
                  style={{ visibility: "hidden", height: 0, margin: 0 }}
                />
              );
            }

            const originalIndex = PROJECTS.findIndex(
              (p) => p.name === project.name
            );
            return (
              <div
                key={project.name}
                ref={refs.projects[originalIndex]}
                className={`fade-in ${
                  visibility.projects[originalIndex] ? "visible" : ""
                }`}
              >
                <ProjectCard
                  {...project}
                  onClick={() => handleProjectClick(project.name)}
                  activeFilters={activeFilters}
                  onTagClick={handleTagFilter}
                />
              </div>
            );
          })}
        </div>

        {(filteredWIP.length > 0 || activeFilters.length === 0) && (
          <div>
            <h1
              className={`fade-in ${
                visibility.worksInProgress ? "visible" : ""
              }`}
              ref={refs.worksInProgress}
            >
              <center>Works In Progress...</center>
            </h1>
            <div className="my-work">
              {paddedWIP.map((project, index) => {
                // Skip rendering placeholder
                if (project.placeholder) {
                  return (
                    <div
                      key="placeholder"
                      style={{ visibility: "hidden", height: 0, margin: 0 }}
                    />
                  );
                }

                const originalIndex = WORKS_IN_PROGRESS.findIndex(
                  (p) => p.name === project.name
                );
                return (
                  <div
                    key={project.name}
                    ref={refs.wip[originalIndex]}
                    className={`fade-in ${
                      visibility.wip[originalIndex] ? "visible" : ""
                    }`}
                  >
                    <ProjectCard
                      {...project}
                      onClick={() => handleProjectClick(project.name)}
                      activeFilters={activeFilters}
                      onTagClick={handleTagFilter}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeFilters.length > 0 &&
          filteredProjects.length === 0 &&
          filteredWIP.length === 0 && (
            <div className="no-results">
              <h3>No projects found with the selected filters.</h3>
              <button className="clear-filters" onClick={clearFilters}>
                Clear filters to see all
              </button>
            </div>
          )}
      </div>
    </ScrollProvider>
  );
}

export default Design;
