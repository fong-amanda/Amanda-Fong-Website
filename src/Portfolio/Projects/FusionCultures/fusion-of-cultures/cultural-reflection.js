import React from 'react';
import Nav from "../../../../NavigationBar";

function culturalReflectionIndividual() {
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
                        <h1>Cultural Reflection</h1>
                        <img src="fusionOfCulturesPhotos/culturalReflection.jpg" alt="Cultural Reflection" />
                    </div>
                    <div className="description">
                        <p>Material: Digitally painted using Procreate, iPad, stylus, oil paint brush.</p>
                        <p>Process: Created contrast using complementary colors, red/green, a variety of textures, and detail.</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default culturalReflectionIndividual;