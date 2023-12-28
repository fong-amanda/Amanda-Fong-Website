import { Link } from 'react-router-dom';
function FusionCultures() {
    return (
        <div className="Fusion-of-Cultures">
            <Link to="/fusion-of-cultures">
                <img src="fusionOfCulturesIndividual/fusionOfCulturesPhotos/Cover.jpg" alt="Fusion-of-Cultures-Cover" />
            </Link>
            <Link to="/fusion-of-cultures">
                <h1>Fusion of Cultures</h1>
            </Link>
            <p>
                Sustained Investigation exploring and fusing American and Chinese/Taiwanese cultures together into art
                pieces.
            </p>
        </div>
    )
}
export default FusionCultures;