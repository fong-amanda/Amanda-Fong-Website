import React from "react";
import { Link } from 'react-router-dom';
import "./threeStones.css";
function ThreeStones() {
    return (
        <div className="threeStones">
            <Link to="/three-stones">
                {/* <img src="financesImages/cover.jpg" alt="finances-Cover" /> */}
            </Link>
            <Link to="/three-stones">
                <h2>Three Stones</h2>
                <p>                        Designing a mobile app that connects real estate developers with investors by allowing developers to post crowdfunding projects and investors to explore listings, contribute small amounts, and build a real estate portfolio for potential profit.</p>
            </Link>
        </div>

    )
}
export default ThreeStones;