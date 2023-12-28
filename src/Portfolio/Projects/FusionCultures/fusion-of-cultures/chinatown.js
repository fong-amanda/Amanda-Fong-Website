import React from 'react';

function ChinatownIndividual() {
  return (
    <section id="title" className="titleOfPhoto">
      <div className="backArrow">
        <a href="../fusionOfCultures.html">
          <p><img src="../Images/arrowBackDarkGrey.png" alt="Back Arrow" /></p>
        </a>
      </div>
      <div className="individual">
        <div className="photos">
          <h1>Chinatown, NYC</h1>
          <img src="fusionOfCulturesPhotos/chinatownNYC.jpg" alt="Chinatown, NYC" />
        </div>
        <div className="description">
          <p>Material: Digitally painted using Procreate, iPad, stylus, ink paint brush.</p>
          <p>Process: Added a pop of color in ornamentation for emphasis.</p>
        </div>
      </div>
    </section>
  );
}

export default ChinatownIndividual;
