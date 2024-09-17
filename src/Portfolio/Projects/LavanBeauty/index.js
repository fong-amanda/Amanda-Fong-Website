import React from "react";
import { Link } from 'react-router-dom';
import "./lavan.css";
function Lavan() {
    return (
        <div className="Lavan">
            <Link to="/lavan">
                {/* <img src="financesImages/cover.jpg" alt="finances-Cover" /> */}
            </Link>
            <Link to="/lavan">
                <h2>Lavan Beauty</h2>
                <p>Designing a user-friendly website for Lavan Beauty that simplifies skincare routines while establishing a strong brand identity. The app will feature a streamlined selection of products developed by a pharmacist, highlighting the commitment to natural ingredients and scientific efficacy.</p>
            </Link>
        </div>

    )
}
export default Lavan;