import React from "react";
import { Link } from 'react-router-dom';
import "./finances.css";
function Finances() {
    return (
        <div className="Finances">
            <Link to="/Youthful-Finances">
                <img src="financesImages/cover.jpg" alt="finances-Cover" />
            </Link>
            <Link to="/Youthful-Finances">
                <h2>Youthful Finances</h2>
            </Link>
            <p>Designed a way for users to clearly view and be able to track their spending easily</p>
        </div>

    )
}
export default Finances;