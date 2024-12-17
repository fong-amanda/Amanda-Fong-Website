// import React, { useState, useRef, useEffect } from "react";
// import FixLeak from "./Projects/FixLeak/index";
// import Spotify from "./Projects/Spotify/index";
// import FusionCultures from "./Projects/FusionCultures/index";
// import Disrupt from "./Projects/Disrupt/index";
// import Finances from "./Projects/YouthfulFinaces";
// import Hippo from "./Projects/Hippo";
// import CherryCrisis from "./Projects/CherryCrisis";
// import Lavan from "./Projects/LavanBeauty";
// import ThreeStones from "./Projects/ThreeStones";
// import "./portfolio.css";

// const projects = [
//   { name: "FixLeak", component: FixLeak },
//   { name: "Spotify", component: Spotify },
//   { name: "FusionCultures", component: FusionCultures },
//   { name: "Disrupt", component: Disrupt },
//   { name: "Finances", component: Finances },
//   { name: "Hippo", component: Hippo },
//   { name: "CherryCrisis", component: CherryCrisis },
//   { name: "Lavan", component: Lavan },
//   { name: "ThreeStones", component: ThreeStones }
// ];

// function DesignProjects() {
//   const [visibleProjects, setVisibleProjects] = useState({});
//   const refs = useRef({});

//   // Setup observers for all projects after they are mounted
//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         // Update the state to show/hide based on whether it's visible in the viewport
//         setVisibleProjects((prev) => ({
//           ...prev,
//           [entry.target.id]: entry.isIntersecting,
//         }));
//       });
//     }, { threshold: 0.1 });  // Add threshold to trigger when 10% of the element is visible
  
//     // Setup observers for all projects
//     projects.forEach((project) => {
//       const projectRef = refs.current[project.name];
//       if (projectRef && projectRef.current) {
//         observer.observe(projectRef.current);
//       }
//     });
  
//     return () => {
//       observer.disconnect();
//     };
//   }, []);
  

//   return (
//     <div id="myWork" className="my-work-section">
//       <div className="work-header">
//         {/* <h1 className={`fade-in ${headerVisible ? "visible" : ""}`} ref={headerRef}>
//           <center>My Work!</center>
//         </h1> */}
//       </div>
//       <div className="my-work">
//         {projects.slice(0, 7).map((project, index) => (
//           <div
//             key={project.name}
//             id={project.name} // Make sure each project has a unique ID
//             ref={(el) => (refs.current[project.name] = el)}
//             className={`fade-in projectProcess ${visibleProjects[project.name] ? "visible" : ""}`}
//           >
//             {React.createElement(project.component)}
//           </div>
//         ))}
//       </div>
//       <div>
//         <h1
//           className={`fade-in ${visibleProjects["WorksInProgress"] ? "visible" : ""}`}
//           ref={(el) => (refs.current["WorksInProgress"] = el)}
//         >
//           <center>Works In Progress...</center>
//         </h1>
//         <div className="WIP">
//           {projects.slice(7).map((project, index) => (
//             <div
//               key={project.name}
//               id={project.name}
//               ref={(el) => (refs.current[project.name] = el)}
//               style={{ marginTop: index !== 0 ? "50px" : "0" }}
//               className={`fade-in projectProcess ${visibleProjects[project.name] ? "visible" : ""}`}
//             >
//               {React.createElement(project.component)}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DesignProjects;
