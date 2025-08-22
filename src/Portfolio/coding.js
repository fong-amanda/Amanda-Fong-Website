import React, { useState, useEffect, useMemo } from "react";
import { ScrollProvider } from "./Context/ScrollContext";
import "./portfolio.css";
import { useNavigate } from "react-router-dom";

// Shared utility functions
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

const TAG_MAPPINGS = {
  "Web Development": "web-dev",
  "Mobile Development": "mobile-dev",
  "Game Development": "game-dev",
  "Full Stack": "full-stack",
  "Front-end": "front-end",
  "Back-end": "back-end",
  "Data Structures": "data-structures",
  Algorithms: "algorithms",
  React: "front-end",
  "Data Visualization": "data-analysis",
};

const parseTagsToHTML = (tagsString, activeFilters, onTagClick) => {
  if (!tagsString) return null;

  const tags = tagsString.split(" | ").map((tag) => tag.trim());

  return (
    <div className="project-tags">
      {tags.map((tag, index) => {
        const className = TAG_MAPPINGS[tag] || "";
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

const SourceCodeRequestModal = ({ isOpen, onClose, projectName }) => {
  if (!isOpen) return null;

  const emailLink = `mailto:fong.am@northeastern.edu?subject=Source Code Request for ${projectName}`;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Request Source Code</h2>
        <p>Interested in the source code for {projectName}?</p>
        <div className="modal-actions">
          <a href={emailLink} className="email-btn">
            Email Me
          </a>
          <button onClick={onClose} className="close-btn">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({
  name,
  onClick,
  tags,
  description,
  customClass,
  activeFilters,
  onTagClick,
  liveSite,
  sourceCodeRequest,
  externalLink,
  onSourceCodeRequest,
}) => {
  const handleClick = () => {
    if (externalLink) {
      window.open(externalLink, "_blank", "noopener,noreferrer");
    } else if (onClick) {
      onClick();
    }
  };
  const handleSourceCodeRequest = (e) => {
    console.log("Source Code Request clicked for:", name);
    console.log("onSourceCodeRequest prop exists:", !!onSourceCodeRequest);
    e.stopPropagation();
    if (onSourceCodeRequest) {
      console.log("Calling onSourceCodeRequest");

      onSourceCodeRequest(); // Use the prop instead of local state
    } else {
      console.log("onSourceCodeRequest is not a function");
    }
  };

  return (
    <div className={`projectProcess coding-project ${customClass || ""}`}>
      <h2 onClick={handleClick}>{name}</h2>
      {description && <p className="project-description">{description}</p>}

      {parseTagsToHTML(tags, activeFilters, onTagClick)}
      <div className="project-actions">
        {sourceCodeRequest ? (
          <button
            onClick={handleSourceCodeRequest}
            className="view-project-btn"
          >
            Request Source Code
          </button>
        ) : (
          <button onClick={handleClick} className="view-project-btn">
            View GitHub
          </button>
        )}
        {liveSite && (
          <button
            onClick={() =>
              window.open(liveSite, "_blank", "noopener,noreferrer")
            }
            className="view-project-btn"
          >
            View Live Site
          </button>
        )}
      </div>
    </div>
  );
};

// Define coding projects
const CODING_PROJECTS = [
  {
    name: "Cherry Crisis",
    description:
      "Developed a full-stack web platform for Cherry Crisis using React.js and MongoDB, creating an immersive digital experience that amplifies the band's mission of building an inclusive music community. The project features a responsive design that showcases the band's unique identity, enabling seamless content management and user interaction while reflecting their commitment to representation in the Boston music scene.",
    tags: "Full Stack | Web Development | React | MongoDB | Front-end | Backend",
    liveSite: "https://cherrycrisis.vercel.app/",
    sourceCodeRequest: true,
  },
  {
    name: "Scout Conference: 2025 Interventions Shift",
    description:
"Developed a comprehensive website for Shift, Scout's annual design conference, utilizing a modern tech stack of TypeScript, SCSS, and JavaScript. The project creates an engaging and accessible digital platform that showcases interactive design, responsive layout, and a clean, informative interface effectively communicating the conference's mission of inclusivity and innovative design thinking.",
  tags: "Web Development | React | Front-end | TypeScript | SCSS | Accessibility",
    
liveSite: "https://interventions.design/",
    sourceCodeRequest: true,
  },
  {
    name: "Campus Club Tracker",
    description:
      "Campus Club Tracker (CCT) is a Python-based application that revolutionizes campus club management by providing a seamless platform for students and administrators. The system enables users to discover campus organizations, manage events, and track budgets through an intuitive, menu-driven interface connected to a MySQL database. By streamlining club operations, CCT simplifies the complex ecosystem of university extracurricular activities.",
    tags: "Python | MySQL | Database Management | Web Application | Full Stack | Backend Development | CRUD Operations | Database Design",
    externalLink: "https://github.com/fong-amanda/Campus-Club-Tracker",
  },
  {
    name: "Marble Solitaire Game",
    description:
      "Marble Solitaire Game is a comprehensive Java-based implementation of the classic board game, featuring a robust Model-View-Controller (MVC) architecture. The project includes a fully functional game engine with multiple board configurations, including the original English and European Solitaire variants, complete with a flexible controller and text-based visualization system.",
    tags: "Java | Object-Oriented Design | Game Development | MVC Architecture",
    externalLink: "https://github.com/fong-amanda/Marble-Solitaire",
  },
];

function Coding() {
  const navigate = useNavigate();
  const [activeFilters, setActiveFilters] = useState([]);
  const [sourceCodeModalInfo, setSourceCodeModalInfo] = useState({
    isOpen: false,
    projectName: "",
  });

  useEffect(() => {
    console.log("Modal state updated:", sourceCodeModalInfo);
  }, [sourceCodeModalInfo]);

  const openSourceCodeModal = (projectName) => {
    console.log("Opening modal for:", projectName);

    setSourceCodeModalInfo((prevState) => ({
      isOpen: true,
      projectName,
    }));
  };

  const closeSourceCodeModal = () => {
    console.log("Closing modal");
    setSourceCodeModalInfo({
      isOpen: false,
      projectName: "",
    });
  };
  const [visibility, setVisibility] = useState({
    projects: new Array(CODING_PROJECTS.length).fill(false),
  });

  // Get all unique tags for filter buttons
  const allTags = useMemo(() => getAllTags(CODING_PROJECTS), []);

  // Filter projects based on active filters
  const filteredProjects = useMemo(() => {
    if (activeFilters.length === 0) return CODING_PROJECTS;

    return CODING_PROJECTS.filter((project) => {
      if (!project.tags) return false;
      const projectTags = project.tags.split(" | ").map((tag) => tag.trim());
      return activeFilters.some((filter) => projectTags.includes(filter));
    });
  }, [activeFilters]);

  // Pad projects to maintain grid layout
  const paddedProjects = useMemo(() => {
    const padded = [...filteredProjects];
    if (padded.length % 2 !== 0) {
      padded.push({ name: "placeholder", placeholder: true });
    }
    return padded;
  }, [filteredProjects]);

  // Create refs using useMemo to ensure they're only created once
  const refs = useMemo(
    () => ({
      projects: CODING_PROJECTS.map(() => React.createRef()),
    }),
    []
  );

  // Handle tag filter toggle
  const handleTagFilter = (tag) => {
    setActiveFilters((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  // Clear all filters
  const clearFilters = () => {
    setActiveFilters([]);

    // Reset visibility to show all projects when clearing filters
    setTimeout(() => {
      setVisibility((prev) => ({
        ...prev,
        projects: new Array(CODING_PROJECTS.length).fill(true),
      }));
    }, 50);
  };

  const handleProjectClick = (projectName) => {
    const project = CODING_PROJECTS.find((p) => p.name === projectName);

    if (project && (project.externalLink || project.liveSite)) {
      window.open(
        project.externalLink || project.liveSite,
        "_blank",
        "noopener,noreferrer"
      );
    } else {
      // Fallback to internal navigation
      const projectRoutes = {
        "Cherry Crisis": "/cherry-crisis",
        "Data Visualization Dashboard": "/data-visualization-dashboard",
      };

      const route = projectRoutes[projectName];
      if (route) {
        navigate(route);
      } else {
        console.log(`No route defined for ${projectName}`);
      }
    }
  };

  // Intersection Observer for visibility
  useEffect(() => {
    const observers = [];
    const observerOptions = { threshold: 0.1 };

    const createObserver = (ref, key, index) => {
      const observer = new IntersectionObserver((entries) => {
        setVisibility((prev) => {
          const newVisibility = [...prev[key]];
          newVisibility[index] = entries[0].isIntersecting;
          return { ...prev, [key]: newVisibility };
        });
      }, observerOptions);

      if (ref.current) observer.observe(ref.current);
      return observer;
    };

    // Observe projects
    refs.projects.forEach((ref, index) => {
      observers.push(createObserver(ref, "projects", index));
    });

    // Cleanup
    return () => observers.forEach((observer) => observer.disconnect());
  }, [refs]);

  // Update visibility when activeFilters change
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibility((prev) => ({
        ...prev,
        projects: new Array(CODING_PROJECTS.length).fill(true),
      }));
    }, 100);

    return () => clearTimeout(timer);
  }, [activeFilters]);

  return (
    <ScrollProvider>
      <div id="myCoding" name="my-coding" className="my-work-section portfolio">
        {/* Filter Controls */}
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
              const className = TAG_MAPPINGS[tag] || "";
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

        <div className="my-coding-work coding-projects">
          {paddedProjects.map((project, index) => {
            if (project.placeholder) {
              return (
                <div
                  key="placeholder"
                  style={{ visibility: "hidden", height: 0, margin: 0 }}
                />
              );
            }

            const originalIndex = CODING_PROJECTS.findIndex(
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
                  onSourceCodeRequest={() => openSourceCodeModal(project.name)}
                />
              </div>
            );
          })}
        </div>

        {activeFilters.length > 0 && filteredProjects.length === 0 && (
          <div className="no-results">
            <h3>No projects found with the selected filters.</h3>
            <button className="clear-filters" onClick={clearFilters}>
              Clear filters to see all projects
            </button>
          </div>
        )}

        {sourceCodeModalInfo.isOpen && (
          <SourceCodeRequestModal
            isOpen={sourceCodeModalInfo.isOpen}
            onClose={closeSourceCodeModal}
            projectName={sourceCodeModalInfo.projectName}
          />
        )}
      </div>
    </ScrollProvider>
  );
}

export default Coding;
