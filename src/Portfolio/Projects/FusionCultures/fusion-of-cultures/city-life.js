import React from 'react';
import Nav from "../../../../NavigationBar";

function cityLifeIndividual() {
    return (
        <>
        <Nav/>
            <section id="title" className="titleOfPhoto">
                <div className="backArrow">
                    <a href="../fusionOfCultures.html">
                        <p><img src="../Images/arrowBackDarkGrey.png" alt="Back Arrow" /></p>
                    </a>
                </div>
                <div className="individual">
                    <div className="photos">
                        <h1>City Life</h1>
                        <img src="fusionOfCulturesPhotos/cityLife.jpg" alt="City Life" />
                    </div>
                    <div className="description">
                        <p>Material: Digitally painted using Procreate, iPad, stylus, ink paint brush.</p>
                        <p>Process: Added a pop of color in ornamentation for emphasis.</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default cityLifeIndividual;
