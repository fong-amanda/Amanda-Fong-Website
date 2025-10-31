import React from "react";
import { Link } from "react-router-dom";
import "./threeStones.css";
function ThreeStones() {
  return (
    <div className="threeStones">
      <Link to="/three-stones">
        {/* <img src="financesImages/cover.jpg" alt="finances-Cover" /> */}
      </Link>
      <Link to="/three-stones">
        <h2>Three Stones</h2>
        
      </Link>
    </div>
  );
}
export default ThreeStones;
