import React from 'react';
import Nav from "../../../../NavigationBar";

function streetFoodIndividual() {
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
                        <h1>Street Food</h1>
                        <img src="fusionOfCulturesPhotos/streetFood.jpg" alt="Street Food" />
                    </div>
                    <div className="description">
                        <p>Material: Digitally painted using Procreate, iPad, stylus, oil paint brush.</p>
                        <p>Process: Contrast in light/dark values. Red/yellow color emphasizes detail. Use of leading lines.</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default streetFoodIndividual;