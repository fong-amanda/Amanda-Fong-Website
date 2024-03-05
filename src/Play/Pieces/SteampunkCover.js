import React from 'react';
import "./../Play.css";
function Steampunk() {
    return (
        <div className="artPieceIndividual artPiece">
            <img 
                src="PlayIndividual/PlayImages/steampunkTurtle.jpg" 
                alt="Steampunk Turtle"
                style={{ maxWidth: '100%', maxHeight: '100%' }} // Set maximum width and height
            />
            <div className="title">
                <span>Steampunk Turtle</span>
            </div>
        </div>
    );
}

export default Steampunk;
