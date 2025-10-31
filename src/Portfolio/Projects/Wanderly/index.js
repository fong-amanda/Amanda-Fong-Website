import React from "react";
import { Link } from "react-router-dom";
function Wanderly() {
  return (
    <div className="wanderly">
      <Link to="/wanderly">
        {/* <img src="financesImages/cover.jpg" alt="finances-Cover" /> */}
      </Link>
      <Link to="/wanderly">
        <h2>Wanderly</h2>
    
      </Link>
    </div>
  );
}
export default Wanderly;
