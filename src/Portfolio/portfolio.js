// import React, { useState } from "react";
// import CodingProjects from "./codingProjects";
// import DesignProjects from "./designProjects";

// const Portfolio = () => {
//   const [active, setActive] = useState("design");
//   return (
//     <div className="projects-wrapper">
//       <h1><center>My Work!</center></h1>
//       <div className="projects-div d-flex flex-column align-items-start">
//         <div className="d-flex select">
//           <li
//             className={`${active === "design" ? "list-item-active" : "list-item"
//               }`}
//             type="button"
//             onClick={() => setActive("design")}
//           >
//             <h5>Design</h5>
//           </li>
//           <li
//             className={`${active === "programming" ? "list-item-active" : "list-item"
//               }`}
//             type="button"
//             onClick={() => setActive("programming")}
//           >
//             <h5>Programming</h5>
//           </li>
//         </div>
//         {active === "design" ? (
//           <DesignProjects />
//         ) : (
//           <CodingProjects />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Portfolio;