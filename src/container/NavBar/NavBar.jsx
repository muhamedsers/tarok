import React from "react";
import { useNavigate } from "react-router";
import "./NavBar.scss";
import logo from "../../assets/logo.png";
import "../LandingPage/LandingPage";

const NavBar = () => {
  return (
    <div className="NavContainer">
      <div className="NavLeft">
        <img src={logo} alt="" />
        <h1 className="title">Projekt Tarok</h1>
      </div>
      <div className="NavRight">
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Domov
        </button>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          O nas
        </button>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Dokumentacija
        </button>
        <button>
          <a href="https://github.com/dusanSERS/projektTarok" target="blank">
            GitHub
          </a>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
