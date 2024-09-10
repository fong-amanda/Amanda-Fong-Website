import { Link } from 'react-router-dom';
function Cherry() {
    return (
        <div className="Cherry">
            <Link to="/cherry-crisis">
                <img src="cherryImages/cover.png" alt="Cherry" />
            </Link>
            <Link to="/cherry-crisis">
                <h2>Cherry Crisis</h2>
            </Link>
            <p>Developed the brand identity for Cherry Crisis Band and designed an engaging website to showcase their music and personality.</p>        </div>

    )
}
export default Cherry;