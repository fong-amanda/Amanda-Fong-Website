import { Link } from 'react-router-dom';
function Disrupt() {
    return (
        <div className="Disrupt">
            <Link to="/disrupt">
                <img src="disruptImages/cover.jpg" alt="Disrupt" />
            </Link>
            <Link to="/disrupt">
                <h1>Disrupt</h1>
            </Link>
            <p>Revamped website and rebrand of Northeastern's Fintech Club, Disrupt.</p>
        </div>
    )
}
export default Disrupt;