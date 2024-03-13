import React from "react";
import { Link } from 'react-router-dom';
import "./hippo.css";
function Hippo() {
    return (
        <div className="Hippo">
            <Link to="/hippo">
                {/* <img src="financesImages/cover.jpg" alt="finances-Cover" /> */}
            </Link>
            <Link to="/hippo">
                <h2>Hippo</h2>
                <p>An app that will serve as an activity calendar for
                    undergraduate students at Northeastern.
                    The app will allow students to discover different club events,
                    club meetings, and student performamces. Student groups would be able
                    to create accounts to post their events to the calendar and promote through the app.</p>
            </Link>
        </div>

    )
}
export default Hippo;