import React from "react";
import { useState } from "react";
import "./LandingPage.scss";
import "../Tournament/Tournament";
import { useNavigate } from "react-router";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="mainContainer">
      <header>
        <h1 className="title">Projekt Tarok</h1>
      </header>
      <div className="articleContainer">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        magnam eos repudiandae repellendus cum expedita dolor corrupti iure.
        Eligendi praesentium qui dicta architecto repellat ipsa fugit,
        consequatur ipsum saepe nulla? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Accusamus, fugiat. Id qui quisquam rerum voluptatibus
        veniam rem reiciendis aliquam? Eveniet sequi sapiente accusamus quo
        facere alias, quod reprehenderit quibusdam saepe. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Et quisquam incidunt vel voluptatum
        tempore, quam necessitatibus tempora adipisci ut recusandae, facilis,
        quis voluptates assumenda consectetur magnam error. Architecto, laborum
        assumenda! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Beatae facere eum illo consectetur facilis, praesentium iste natus quam
        et laborum ullam, atque veniam perferendis voluptatum pariatur fugit
        repellendus quaerat obcaecati.
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
    </div>
  );
};

export default LandingPage;
