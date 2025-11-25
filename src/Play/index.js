import React from 'react';
import Nav from '../NavigationBar';
import TaiwanPostcard from './Pieces/TaiwanPostcardCover';
import NortheasternGradCap from './Pieces/NortheasternGradCapCover';
import Steampunk from './Pieces/SteampunkCover';
import GeometricPov from './Pieces/GeometricPovCover';
import Envision from './Pieces/EnvisionCover';
import DeepIntoTaylor from './Pieces/DeepIntoTaylorCover';
import MemorialHall from './Pieces/MemorialHallCover';
import Soaking from './Pieces/SoakingCover';
import ScratchboardDog from './Pieces/ScratchboardDogCover';
import Nostalgia from './Pieces/NostalgiaCover';
import SneakersStamp from './Pieces/SneakersStampCover';
import RainbowCookies from './Pieces/RainbowCookiesCover';
import Beabadoobee from './Pieces/Beabadoobee';
import MarineDebris from './Pieces/MarineDebris';
import { useState, useRef } from "react";
import Footer from '../Footer/footer';
import "./Play.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import Captions from "yet-another-react-lightbox/plugins/captions";

function Play() {

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
        "MarineDebris.jpg",
        "Beabadoobee.png",
        "taiwanPostcard.jpeg",
        "northeasternGradCap.jpeg",
        "steampunkTurtle.jpg",
        "geometricPOV.jpeg",
        "envision.jpg",
        "deepIntoTaylor.jpeg",
        "memorialHall.jpg",
        "soaking.jpg",
        "scratchboardDog.jpeg",
        "nostalgia.jpeg",
        "sneakerMockup.jpeg",
        "rainbowCookies.jpg"]

    const photoRef = {
        marinedebris: useRef(),
        beabadoobeeRef: useRef(),
        taiwanRef: useRef(),
        northeasternCapRef: useRef(),
        steampunkRef: useRef(),
        geometricRef: useRef(),
        envisionRef: useRef(),
        taylorRef: useRef(),
        memorialHallRef: useRef(),
        soakingRef: useRef(),
        dogRef: useRef(),
        nostalgiaRef: useRef(),
        sneakersRef: useRef(),
        rainbowCookiesRef: useRef()
    };

    const sources = [
        <MarineDebris/>,
        <Beabadoobee />,
        <TaiwanPostcard />,
        <NortheasternGradCap />,
        <Steampunk />,
        <GeometricPov />,
        <Envision />,
        <DeepIntoTaylor />,
        <MemorialHall />,
        <Soaking />,
        <ScratchboardDog />,
        <Nostalgia />,
        <SneakersStamp />,
        <RainbowCookies />,
    ];

    const captions = [
        [<strong>Marine Debris Found on Shores</strong>, <br />, 'Data Visualization | Figma'],
        [<strong>Beabadoobee Poster</strong>, <br />, 'Figma'],
        [<strong>Taiwan Postcard</strong>, <br />, 'Adobe Illustrator & Procreate'],
        [<strong>Northeastern Graduation Cap</strong>, <br />, 'Procreate'],
        [<strong>Steampunk Turtle</strong>, <br />, 'Procreate', <br />, 'Digitally painted and layer masks are used to incorporate a "steampunk" style into the composition of the turtle.'],
        [<strong>Geometric POV</strong>, <br />, 'Procreate', <br />, 'Low Poly Self-portrait created by meshing triangles, with an abstract background, inspired by Giselle Manzano Ramírez.'],
        [<strong>Envision</strong>, <br />, 'Procreate'],
        [<strong>Deep Into Taylor</strong>, <br />, 'Adobe Illustrator'],
        [<strong>Memorial Hall</strong>, <br />, 'Procreate', <br />, 'Presented at the Art Supervisors Association 2021 All County Art Exhibition'],
        [<strong>Soaking In The Sunset</strong>, <br />, 'Adobe Illustrator'],
        [<strong>Scratchboard Dog</strong>, <br />, 'Procreate'],
        [<strong>Nostalgia</strong>, <br />, 'Procreate'],
        [<strong>Sneakers Stamp</strong>, <br />, 'Adobe Illustrator'],
        [<strong>'Rainbow Cookies'</strong>, <br />, 'Adobe Photoshop'],
    ];

    return (
        <div>
            <Nav />
            <div className='playHeading'>
            </div>
            <section className="gallery container grid grid-cols-3 gap-2 mx-auto">
                <ul className="images">
                    {sources.map((image, index) => (
                        <div
                            key={index}
                            onClick={() => toggleLightbox(index)}
                            ref={photoRef[`imageRef${index}`]}
                            className={` fade-in ${visiblePhoto[`image${index}`] ? 'visible' : ''} image-container`}>
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
                    src: `/PlayIndividual/PlayImages/${photoName}`,
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
    );}
export default Play;