import React from 'react';
import Nav from "../../../../NavigationBar";

function culturalImmersionIndividual() {
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
                        <h1>Cultural Immersion</h1>
                        <img src="fusionOfCulturesPhotos/culturalImmersion.jpg" alt="Cultural Immersion" />
                    </div>
                    <div className="description">
                        <p>Material: Digitally painted using Procreate, iPad, stylus, oil paint brush.</p>
                        <p>Process: Monochromatic with a pop of blue, symbolizing important cultural elements.</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default culturalImmersionIndividual