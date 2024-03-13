import { Link } from 'react-router-dom';
function FixLeak() {
    return (
        <div className="Cherry-Crisis">
            {/* <Link to="/fix-a-leak">
        <img src="fixALeak Images/Cover Page.jpg" alt="Fix A Leak Cover Page" />
      </Link> */}
            <Link to="/cherry-crisis">
                <h2>Cherry Crisis</h2>
                <p>Crafting the Cherry Crisis Band's brand identity and designing along with developing
                    an engaging website design to showcase their music and personality.
                </p>
            </Link>

        </div>
    )
}
export default FixLeak;