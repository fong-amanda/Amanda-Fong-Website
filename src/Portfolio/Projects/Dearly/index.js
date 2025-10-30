import React from "react";
import { Link } from "react-router-dom";
import "./dearly.css";
function Dearly() {
  return (
    <div className="dearly">
      <Link to="/dearly">
        <img src="financesImages/cover.jpg" alt="finances-Cover" />
      </Link>
      <Link to="/dearly">
        <h2>Dearly</h2>
        <p>
          {" "}
          Designing mobile app that helps families stay intimately connected across
          generations by sharing moments, memories, and conversations. Designed
          with accessibility and simplicity in mind, it bridges the
          technological divide between younger and older family members by
          offering two distinct user modes: a streamlined, simplified interface
          for elderly users and a feature-rich experience for younger users.
        </p>
      </Link>
    </div>
  );
}
export default Dearly;
