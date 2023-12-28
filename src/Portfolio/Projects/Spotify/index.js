import { Link } from 'react-router-dom';
function Spotify() {
    return (
        <div className="Spotify">
            <Link to="/spotify">
                <img src="spotifyImages/cover.jpg" alt="Social-Spotify-Cover" />
            </Link>
            <Link to="/spotify">
                <h1>Social Spotify</h1>
            </Link>
            <p>Designed a new social feature within Spotify's UI that evokes nostalgia.</p>
        </div>
    )
}
export default Spotify;