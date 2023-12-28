import React from 'react';
import Nav from '../NavigationBar';
import TaiwanPostcard from './Pieces/TaiwanPostcardCover';
import NortheasternGradCap from './Pieces/NortheasternGradCapCover';
import Steampunk from './Pieces/SteampunkCover';
import GeometricPov from './Pieces/GeometricPovCover';
import Envision from './Pieces/EnvisionCover';
import DeepIntoTaylor from './Pieces/DeepIntoTaylorCover';
import MemorialHall from './Pieces/MemorialHallCover';
import CornellBlanket from './Pieces/CornellBlanketCover';
import Soaking from './Pieces/SoakingCover';
import ScratchboardDog from './Pieces/ScratchboardDogCover';
import Nostalgia from './Pieces/NostalgiaCover';
import SneakersStamp from './Pieces/SneakersStampCover';
import RainbowCookies from './Pieces/RainbowCookiesCover';
import "./Play.css";


function Play() {
    return (
        <div>
            <Nav />
            <div className='playHeading'>
                <h1>Play !</h1>
            </div>
            <section className="gallery">
                <ul className="images">
                    <TaiwanPostcard />
                    <NortheasternGradCap />
                    <Steampunk />
                    <GeometricPov />
                    <Envision />
                    <DeepIntoTaylor />
                    <MemorialHall />
                    <CornellBlanket />
                    <Soaking />
                    <ScratchboardDog />
                    <Nostalgia />
                    <SneakersStamp />
                    <RainbowCookies />


                </ul>
            </section></div>
    );

}

export default Play;
