import React from 'react';
import Nav from "../../../../NavigationBar";

function hotPotIndividual() {
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
                        <h1>Hot Pot or Chowder?</h1>
                        <img src="fusionOfCulturesPhotos/hotPotOrChowder.jpg" alt="Hot Pot or Chowder?" />
                    </div>
                    <div className="description">
                        <p>Material: Digitally painted using Procreate, iPad, stylus, oil paint brush.</p>
                        <p>Process: Repetition of circles. Pop of color in blue cup.</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default hotPotIndividual;