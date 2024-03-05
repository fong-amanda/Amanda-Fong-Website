import React from "react";
import { Link } from 'react-router-dom';
import "./sac.css";
function Sac() {
    return (
        <div className="Finances">
            <Link to="/student-activity-calendar">
                <img src="financesImages/cover.jpg" alt="finances-Cover" />
            </Link>
            <Link to="/cosmic-finances">
                <h2>Cosmic Finances</h2>
            </Link>
            <p>Designed a way for users to clearly view and be able to track their spending easily</p>
        </div>

    )
}
export default Sac;