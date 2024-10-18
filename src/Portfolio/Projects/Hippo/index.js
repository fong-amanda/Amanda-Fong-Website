import React from "react";
import { Link } from 'react-router-dom';
import "./hippo.css";
function Hippo() {
    return (
        <div className="Hippo">
            <Link to="/student-activity-calendar">
                <img src="sacImages/Cover.png" alt="Student-Activity-Calendar-Cover" />
            </Link>
            <Link to="/student-activity-calendar">
                <h2>Student Activity Calendar</h2>
            </Link>
            <p>
                Designed an app that serves as a calendar, while allowing Northeastern undergraduate Boston students to discover new clubs and events on campus based on interests.
            </p>
            <br />
            
      
        </div>


    )
}
export default Hippo;