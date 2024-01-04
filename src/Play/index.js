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
import { useState, useRef } from "react";
import Footer from '../Footer/footer';
import "./Play.css";


function Play() {
    const [taiwanVisible, setTaiwanVis] = useState(false);
    const taiwanRef = useRef();

    const [northeasternCapVisible, setNortheasternCapVis] = useState(false);
    const northeasternCapRef = useRef();

    const [steampunkVisible, setSteampunkVis] = useState(false);
    const steampunkRef = useRef();

    const [geometricVisible, setGeometricVis] = useState(false);
    const geometricRef = useRef();

    const [envisionVisible, setEnvisionVis] = useState(false);
    const envisionRef = useRef();

    const [taylorVisible, setTaylorVis] = useState(false);
    const taylorRef = useRef();

    const [memorialHallVisible, setMemorialHallVis] = useState(false);
    const memorialHallRef = useRef();

    const [cornellVisible, setCornellVis] = useState(false);
    const cornellRef = useRef();

    const [soakingVisible, setSoakingVis] = useState(false);
    const soakingRef = useRef();

    const [dogVisible, setDogVis] = useState(false);
    const dogRef = useRef();

    const [nostalgiaVisible, setNostalgiaVis] = useState(false);
    const nostalgiaRef = useRef();

    const [sneakersVisible, setSneakersVis] = useState(false);
    const sneakersRef = useRef();

    const [rainbowCookiesVisible, setRainbowCookiesVis] = useState(false);
    const rainbowCookiesRef = useRef();

    React.useEffect(() => {
        const taiwanObserver = new IntersectionObserver(entries => {
            setTaiwanVis(entries[0].isIntersecting);
        });
        taiwanObserver.observe(taiwanRef.current);
    }, [taiwanRef]);

    React.useEffect(() => {
        const northeasternCapObserver = new IntersectionObserver(entries => {
            setNortheasternCapVis(entries[0].isIntersecting);
        });
        northeasternCapObserver.observe(northeasternCapRef.current);
    }, [northeasternCapRef]);

    React.useEffect(() => {
        const steampunkObserver = new IntersectionObserver(entries => {
            setSteampunkVis(entries[0].isIntersecting);
        });
        steampunkObserver.observe(steampunkRef.current);
    }, [steampunkRef]);

    React.useEffect(() => {
        const geometricObserver = new IntersectionObserver(entries => {
            setGeometricVis(entries[0].isIntersecting);
        });
        geometricObserver.observe(geometricRef.current);
    }, [geometricRef]);

    React.useEffect(() => {
        const envisionObserver = new IntersectionObserver(entries => {
            setEnvisionVis(entries[0].isIntersecting);
        });
        envisionObserver.observe(envisionRef.current);
    }, [envisionRef]);

    React.useEffect(() => {
        const taylorObserver = new IntersectionObserver(entries => {
            setTaylorVis(entries[0].isIntersecting);
        });
        taylorObserver.observe(taylorRef.current);
    }, [taylorRef]);

    React.useEffect(() => {
        const memorialHallObserver = new IntersectionObserver(entries => {
            setMemorialHallVis(entries[0].isIntersecting);
        });
        memorialHallObserver.observe(memorialHallRef.current);
    }, [memorialHallRef]);

    React.useEffect(() => {
        const cornellObserver = new IntersectionObserver(entries => {
            setCornellVis(entries[0].isIntersecting);
        });
        cornellObserver.observe(cornellRef.current);
    }, [cornellRef]);

    React.useEffect(() => {
        const soakingObserver = new IntersectionObserver(entries => {
            setSoakingVis(entries[0].isIntersecting);
        });
        soakingObserver.observe(soakingRef.current);
    }, [soakingRef]);

    React.useEffect(() => {
        const dogObserver = new IntersectionObserver(entries => {
            setDogVis(entries[0].isIntersecting);
        });
        dogObserver.observe(dogRef.current);
    }, [dogRef]);

    React.useEffect(() => {
        const nostalgiaObserver = new IntersectionObserver(entries => {
            setNostalgiaVis(entries[0].isIntersecting);
        });
        nostalgiaObserver.observe(nostalgiaRef.current);
    }, [nostalgiaRef]);

    React.useEffect(() => {
        const sneakersObserver = new IntersectionObserver(entries => {
            setSneakersVis(entries[0].isIntersecting);
        });
        sneakersObserver.observe(sneakersRef.current);
    }, [sneakersRef]);

    React.useEffect(() => {
        const rainbowCookiesObserver = new IntersectionObserver(entries => {
            setRainbowCookiesVis(entries[0].isIntersecting);
        });
        rainbowCookiesObserver.observe(rainbowCookiesRef.current);
    }, [rainbowCookiesRef]);

    return (
        <div>
            <Nav />
            <div className='playHeading'>
                <h1 className="fade1">Play !</h1>
            </div>
            <section className="gallery">
                <ul className="images">
                    <div ref={taiwanRef} className={`fade-in ${taiwanVisible ? "visible" : ""}`}>
                        <TaiwanPostcard />
                    </div>
                    <div ref={northeasternCapRef} className={`fade-in ${northeasternCapVisible ? "visible" : ""}`}>
                        <NortheasternGradCap />
                    </div>
                    <div ref={steampunkRef} className={`fade-in ${steampunkVisible ? "visible" : ""}`}>
                        <Steampunk />
                    </div>
                    <div ref={geometricRef} className={`fade-in ${geometricVisible ? "visible" : ""}`}>
                        <GeometricPov />
                    </div>
                    <div ref={envisionRef} className={`fade-in ${envisionVisible ? "visible" : ""}`}>
                        <Envision />
                    </div>
                    <div ref={taylorRef} className={`fade-in ${taylorVisible ? "visible" : ""}`}>
                        <DeepIntoTaylor />
                    </div>
                    <div ref={memorialHallRef} className={`fade-in ${memorialHallVisible ? "visible" : ""}`}>
                        <MemorialHall />
                    </div>
                    <div ref={cornellRef} className={`fade-in ${cornellVisible ? "visible" : ""}`}>
                        <CornellBlanket />
                    </div>
                    <div ref={soakingRef} className={`fade-in ${soakingVisible ? "visible" : ""}`}>
                        <Soaking />
                    </div>
                    <div ref={dogRef} className={`fade-in ${dogVisible ? "visible" : ""}`}>

                        <ScratchboardDog />
                    </div>
                    <div ref={nostalgiaRef} className={`fade-in ${nostalgiaVisible ? "visible" : ""}`}>

                        <Nostalgia />
                    </div>
                    <div ref={sneakersRef} className={`fade-in ${sneakersVisible ? "visible" : ""}`}>

                        <SneakersStamp />
                    </div>
                    <div ref={rainbowCookiesRef} className={`fade-in ${rainbowCookiesVisible ? "visible" : ""}`}>

                        <RainbowCookies />
                    </div>


                </ul>
            </section>            <Footer />
        </div>
    );

}

export default Play;
