import React from 'react';
import Nav from "../../../../NavigationBar";

function touringIndividual() {
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
                        <h1>Touring</h1>
                        <img src="fusionOfCulturesPhotos/touring.jpg" alt="Touring" />
                    </div>
                    <div className="description">
                        <p>Material: Digitally painted using Procreate, iPad, stylus, oil paint brush.</p>
                        <p>Process: Complementary colors create contrast. Train lines of structure create movement.</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default touringIndividual;
