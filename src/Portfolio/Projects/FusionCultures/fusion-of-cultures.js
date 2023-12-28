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
function FusionCulturesProjects() {
  return (
    <>
      <Nav />
      <section className="gallery">
        <ul className="images">
          <ChinatownCover />
          <CityLifeCover />
          <CulturalImmersionCover />
          <LunchorbrunchCover />
          <CulturalReflectionCover />
          <GatewayCover />
          <FestivitiesCover />
          <HotPotCover />
          <SnackCover />
          <StreetFoodCover />
          <TeaTimeCover />
          <TouringCover />
        </ul>
      </section>
    </>
  )
}
export default FusionCulturesProjects;