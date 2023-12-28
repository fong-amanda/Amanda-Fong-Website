import React from 'react';
import Nav from "../../../../NavigationBar";

function teaTimeIndividual() {
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
                        <h1>Tea Time?</h1>
                        <img src="fusionOfCulturesPhotos/teaTime.jpg" alt="Tea Time?" />
                    </div>
                    <div className="description">
                        <p>Material: Digitally painted using Procreate, iPad, stylus, oil paint brush.</p>
                        <p>Process: Experimented with rapid brush stroke. Detail in designs of cookware.</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default teaTimeIndividual;