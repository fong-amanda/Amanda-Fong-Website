import React from 'react';
import Nav from "../../../../NavigationBar";

function gatewayIndividual() {
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
                        <h1>Gateway</h1>
                        <img src="fusionOfCulturesPhotos/gateway.jpg" alt="Gateway" />
                    </div>
                    <div className="description">
                        <p>Material: Vectorized shapes in Adobe Illustrator. Digitally painted, Procreate, iPad, stylus, gradient brush.</p>
                        <p>Process: Use of bold/geometric shapes, highlighting signs with a saturated color palette.</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default gatewayIndividual;