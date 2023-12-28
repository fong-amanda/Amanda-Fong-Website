import React from 'react';
import Nav from "../../../../NavigationBar";

function festivitiesIndividual() {
    return (
        <>
            <Nav />
            <section id="title" className="titleOfPhoto">
                <div className="backArrow">
                    <a href="../fusionOfCultures.html">
                        <p><img src="../Images/arrowBackDarkGrey.png" alt="Back Arrow" /></p>
                    </a>
                </div>
                <div className="individual">
                    <div className="photos">
                        <h1>Festivities</h1>
                        <img src="fusionOfCulturesPhotos/festivities.jpg" alt="Festivities" />
                    </div>
                    <div className="description">
                        <p>Material: Digitally painted using Procreate, iPad, stylus, oil paint brush.</p>
                        <p>Process: Focal point with red tassel. Experimented with energetic brushstrokes to create texture.</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default festivitiesIndividual;