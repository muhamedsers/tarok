import React from "react";
import { useState } from "react";
import { supabase } from "../../supabaseClient";
import "../AddPlayer/AddPlayer.scss";
import { useNavigate } from "react-router";

const Tournament = () => {
  const [name, setName] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [location, setLocation] = useState("");
  //inserts data in to table turnir

  const insertDataIntoTable = async () => {
    const response = await supabase.from("turnir").insert([
      {
        naziv: name,
        zacetek: start,
        konec: end,
        lokacija: location,
      },
    ]);
    console.log(response);
  };
  const navigate = useNavigate();
  return (
    <div className="formCenter">
      <h1 className="title">Ustvari Turnir</h1>

      <form className="formContainer" action="" method="post">
        <div className="inputContainer">
          <label>Naziv</label>
          <input
            type="text"
            onChange={(event) => {
              setName(event.target.value);
            }}
            value={name}
          />
        </div>
        <div className="inputContainer">
          <label>Začetek</label>
          <input
            type="datetime-local"
            onChange={(event) => {
              setStart(event.target.value);
            }}
            value={start}
          />
        </div>
        <div className="inputContainer">
          <label>Konec</label>
          <input
            type="datetime-local"
            onChange={(event) => {
              setEnd(event.target.value);
            }}
            value={end}
          />
        </div>
        <div className="inputContainer">
          <label>Lokacija</label>
          <input
            type="text"
            onChange={(event) => {
              setLocation(event.target.value);
            }}
            value={location}
          />
        </div>
        <div className="inputContainer">
          <input
            type="button"
            value="Ustvari Turnir"
            onClick={() => {
              insertDataIntoTable();
              navigate("/add-player");
              set;
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default Tournament;
