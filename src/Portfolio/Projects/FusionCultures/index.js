import { Link } from 'react-router-dom';
import React, { useEffect } from "react";
function FusionCultures() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="Fusion-of-Cultures">
            <Link to="/fusion-of-cultures">
                <img src="fusionOfCulturesIndividual/fusionOfCulturesPhotos/Cover.jpg" alt="Fusion-of-Cultures-Cover" />
            </Link>
            <Link to="/fusion-of-cultures">
                <h2>Fusion of Cultures</h2>
            </Link>
            <p>
                Graphic Design | Digital Painting
                {/* Sustained Investigation exploring and fusing American and Chinese/Taiwanese cultures together into art
                pieces. */}
            </p>
        </div>
    )
}
export default FusionCultures;