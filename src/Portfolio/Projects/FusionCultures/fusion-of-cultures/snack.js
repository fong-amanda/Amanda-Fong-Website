import React from 'react';
import Nav from "../../../../NavigationBar";

function snackIndividual() {
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
                        <h1>Snack?</h1>
                        <img src="fusionOfCulturesPhotos/snack.jpg" alt="Snack?" />
                    </div>
                    <div className="description">
                        <p>Material: Digitally painted using Procreate, iPad, stylus, oil paint brush.</p>
                        <p>Process: Monochromatic red scheme highlights candy. Bright light shows contrast creating candy focal point.</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default snackIndividual;