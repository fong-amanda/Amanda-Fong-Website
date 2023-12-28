import React from 'react';
import Nav from "../../../../NavigationBar";

function lunchBrunchIndividual() {
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
                        <h1>Lunch or Brunch?</h1>
                        <img src="fusionOfCulturesPhotos/brunchOrLunch.jpg" alt="Lunch or Brunch?" />
                    </div>
                    <div className="description">
                        <p>Material: Digitally painted using Procreate, iPad, stylus, oil paint brush.</p>
                        <p>Process: Repetition of circles. Textural contrast, food with table.</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default lunchBrunchIndividual;