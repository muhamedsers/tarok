import React from "react";
import { useState } from "react";
import "./LandingPage.scss";
import "../Tournament/Tournament";
import { useNavigate } from "react-router";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import tarok from "../../assets/tarok_slika.jpg";
import concept from "../../assets/sivo.png";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="mainContainer">
      <header>
        <NavBar />
      </header>
      <div className="articleContainer">
        To je šolski projekt ki ga delamo za raziskovalno nalogo, gre se namreč
        za program v pytonu ki s pomočjo knjižnice tenssorflow prepozna karte za
        tarok in zvok, tako bo program pri igranju sam vpisoval podatke igre ki
        jih potrebujete za igro taroka, to je pa forntend projekta ki je še
        vedno v razvoju.
        <a href="https://sl.wikipedia.org/wiki/Tarok" target="blank">
          <img src={tarok} alt="" />
        </a>
      </div>
      <div className="conceptContainer">
        <h1 className="title2">Prof of Concept</h1>
        <img src={concept} alt="" />
      </div>
      <div className="buttonContainer">
        <button
          onClick={() => {
            navigate("/choose-players");
          }}
        >
          Kreiraj Turnir
        </button>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Nadaljuj Turnir
        </button>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default LandingPage;
