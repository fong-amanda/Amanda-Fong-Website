import React, { useState } from "react";
import Design from "./design";
import Coding from "./coding";
import "./portfolio.css";

function Portfolio() {
  const [activeTab, setActiveTab] = useState("design");

  const handleTabClick = (e, tabName) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveTab(tabName);
  };

  return (
    <div className="portfolio-container">
      <div className="tabs">
        <button
          type="button"
          onClick={(e) => handleTabClick(e, "design")}
          className={activeTab === "design" ? "active" : ""}
        >
          Design
        </button>
        <button
          type="button"
          onClick={(e) => handleTabClick(e, "coding")}
          className={activeTab === "coding" ? "active" : ""}
        >
          Coding
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "design" && <Design />}
        {activeTab === "coding" && <Coding />}
      </div>
    </div>
  );
}

export default Portfolio;