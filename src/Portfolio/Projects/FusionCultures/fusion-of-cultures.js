import React from "react";
import Nav from "../../../NavigationBar";
import "./fusionCultures.css";
import ChinatownCover from "./Pieces/chinatownCover";
import CityLifeCover from "./Pieces/city-lifeCover";
import CulturalImmersionCover from "./Pieces/cultural-immersionCover";
import LunchorbrunchCover from "./Pieces/lunch-brunchCover";
import CulturalReflectionCover from "./Pieces/cultural-reflectionCover"
import GatewayCover from "./Pieces/gatewayCover";
import FestivitiesCover from "./Pieces/festivitiesCover";
import HotPotCover from "./Pieces/hot-pot-or-chowderCover"
import SnackCover from "./Pieces/snackCover";
import StreetFoodCover from "./Pieces/street-foodCover";
import TeaTimeCover from "./Pieces/tea-timeCover";
import TouringCover from "./Pieces/touringCover";
import Footer from "../../../Footer/footer";
import { useState, useRef } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import Captions from "yet-another-react-lightbox/plugins/captions";

function FusionCulturesProjects() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [open, setOpen] = React.useState(false);

  const [visiblePhoto, setVisiblePhotos] = useState({});

  const captionsRef = React.useRef(null);

  const toggleLightbox = (index) => {
    setSelectedImageIndex(index); // Set the selected image index
    setOpen(index !== -1);
  };

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const photos = document.querySelectorAll('.fade-in');

    photos.forEach((photo, index) => {
      // checks if photo is in view
      const bounding = photo.getBoundingClientRect();
      // gets height of photo
      const photoHeight = photo.offsetHeight;
      // if 80% of photo is within viewport, it'll be considered visible
      const visibilityThreshold = photoHeight * 0.8;

      // checks if the top of the photo plus the visibilityThreshold is within or close to viewport and
      // if the bottom of the photo minus the visibilityThreshold is within or close to viewport
      if (bounding.top + visibilityThreshold >= 0 && bounding.bottom - visibilityThreshold <= windowHeight) {
        // adds true property
        setVisiblePhotos(prevState => ({ ...prevState, [`image${index}`]: true }));
      } else {
        // adds false property
        setVisiblePhotos(prevState => ({ ...prevState, [`image${index}`]: false }));
      }
    });
  };

  React.useEffect(() => {
    // so that photos in viewport appear first without inititally scrolling
    handleScroll();

    // so that photos in viewport appear when window is resized without inititally scrolling
    const handleEvents = () => {
      handleScroll();
    };

    // scroll that updates visibility of photo
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleEvents);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleEvents);
    }

  }, []);
  const photoNames = [
    "chinatownNYC.jpg",
    "cityLife.jpg",
    "culturalImmersion.jpg",
    "brunchOrLunch.jpg",
    "culturalReflection.jpg",
    "gateway.jpg",
    "festivities.jpg",
    "hotPotOrChowder.jpg",
    "snack.jpg",
    "streetFood.jpg",
    "teatime.jpg",
    "touring.jpg",]

  const photoRef = {
    taiwanRef: useRef(),
    northeasternCapRef: useRef(),
    steampunkRef: useRef(),
    geometricRef: useRef(),
    envisionRef: useRef(),
    taylorRef: useRef(),
    memorialHallRef: useRef(),
    cornellRef: useRef(),
    soakingRef: useRef(),
    dogRef: useRef(),
    nostalgiaRef: useRef(),
    sneakersRef: useRef(),
    rainbowCookiesRef: useRef()
  };

  const sources = [
    <ChinatownCover />,
    <CityLifeCover />,
    <CulturalImmersionCover />,
    <LunchorbrunchCover />,
    <CulturalReflectionCover />,
    <GatewayCover />,
    <FestivitiesCover />,
    <HotPotCover />,
    <SnackCover />,
    <StreetFoodCover />,
    <TeaTimeCover />,
    <TouringCover />,
  ];

  const captions = [
    [<strong>Chinatown, NYC</strong>, <br />, 'Procreate', <br />, 'Process: Use of bold/geometric shapes, highlighting signs with a saturated color palette.'],
    [<strong>City Life</strong>, <br />, 'Procreate', <br />, 'Process: Created contrast using complementary colors, orange/blue, a variety of texture and detail.'],
    [<strong>Cultural Immersion</strong>, <br />, 'Procreate', <br />, 'Process(es): Monochromatic with pop of blue, symbolizing important cultural elements.'],
    [<strong>Lunch Or Brunch?</strong>, <br />, 'Procreate', <br />, 'Process: Repetition of circles. Textural contrast, food with table.'],
    [<strong>Cultural Reflection</strong>, <br />, 'Procreate', <br />, 'Process(es): Created contrast using complementary colors, red/green, a variety of textures, and detail.'],
    [<strong>Gateway</strong>, <br />, 'Adobe Illustrator & Procreate', <br />, 'Process: Use of bold/geometric shapes, highlighting signs with a saturated color palette.'],
    [<strong>Festivities</strong>, <br />, 'Procreate', <br />, 'Process(es): Focal point with red tassel. Experimented with energetic brushstrokes to create texture.'],
    [<strong>Hot Pot Or Chowder?</strong>, <br />, 'Procreate', <br />, 'Process: Repetition of circles. Pop of color in blue cup.'],
    [<strong>Snack?</strong>, <br />, 'Procreate', <br />, 'Process(es): Monochromatic red scheme highlights candy. Bright light shows contrast creating candy focal point.'],
    [<strong>Street Food</strong>, <br />, 'Procreate', <br />, 'Process: Contrast in light/dark values. Red/yellow color emphasizes detail. Use of leading lines.'],
    [<strong>Tea Time?</strong>, <br />, 'Procreate', <br />, 'Process(es): Experimented with rapid brush stroke. Detail in designs of cookware.'],
    [<strong>Touring</strong>, <br />, 'Procreate', <br />, 'Process: Complementary colors create contrast. Train lines of structure create movement.'],

    ];

  return (
    <div>
      <Nav />
      <div className='playHeading'>
        <h1 className="fade1">Play !</h1>
      </div>
      <section className="gallery container grid grid-cols-3 gap-2 mx-auto">
        <ul className="images">
          {sources.map((image, index) => (
            <div
              key={index}
              onClick={() => toggleLightbox(index)}
              ref={photoRef[`imageRef${index}`]}
              className={` fade-in ${visiblePhoto[`image${index}`] ? 'visible' : ''}`}>
              {image}
            </div>
          ))}
        </ul>
      </section>

      <Lightbox
        open={open}
        close={() => setOpen(false)}

        // photo and captions that show up
        slides={photoNames.map((photoName, index) => ({
          src: `/fusionOfCulturesIndividual/fusionOfCulturesPhotos/${photoName}`,
          description: captions[index]
        }))}

        // opens associated image lightbox
        index={selectedImageIndex}

        // add captions
        plugins={[Captions]}
        captions={{ ref: captionsRef }}
        on={{
          click: () => {
            (captionsRef.current?.visible
              ? captionsRef.current?.hide
              : captionsRef.current?.show)?.();
          },
        }}
      />
      <Footer />
    </div >
  );
}
export default FusionCulturesProjects;