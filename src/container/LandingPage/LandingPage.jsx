import React from "react";
import { useState } from "react";
import "./LandingPage.scss";
import "../Tournament/Tournament";
import { useNavigate } from "react-router";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="mainContainer">
      <header>
        <NavBar />
      </header>
      <div className="articleContainer">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        magnam eos repudiandae repellendus cum expedita dolor corrupti iure.
        Eligendi praesentium qui dicta architecto repellat ipsa fugit,
        consequatur ipsum saepe nulla? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Accusamus, fugiat. Id qui quisquam rerum voluptatibus
        veniam rem reiciendis aliquam?
      </div>
      <div className="buttonContainer">
        <button
          onClick={() => {
            navigate("/tournament");
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
