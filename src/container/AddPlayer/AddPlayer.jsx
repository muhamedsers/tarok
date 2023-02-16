import React from "react";
import "./AddPlayer.scss";
import { useState } from "react";
import { supabase } from "../../supabaseClient";
import { useNavigate } from "react-router";

const AddPlayer = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [nickname, setNickname] = useState("");
  const [date, setDate] = useState("");

  const navigate = useNavigate();

  /*
  Inserts data in to table igralec
  */

  const insertDataIntoTable = async () => {
    const response = await supabase.from("igralec").insert([
      {
        ime: name,
        priimek: lastname,
        datum_rojstva: date,
        vzdevek: nickname,
      },
    ]);
    console.log(response);
  };

  return (
    <div className="formCenter">
      <h1 className="title">Dodaj Igralca</h1>
      <form action="" method="post" className="formContainer">
        <div className="inputContainer">
          <label>Ime</label>
          <input
            type="text"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <div className="inputContainer">
          <label>Priimek</label>
          <input
            type="text"
            onChange={(event) => {
              setLastname(event.target.value);
            }}
          />
        </div>
        <div className="inputContainer">
          <label>Vzdevek</label>
          <input
            type="text"
            onChange={(event) => {
              setNickname(event.target.value);
            }}
          />
        </div>

        <div className="inputContainer">
          <label>Datum rojstva</label>
          <input
            type="date"
            onChange={(event) => {
              setDate(event.target.value);
            }}
          />
        </div>
        <input
          type="button"
          value="Dodaj Igralca"
          onClick={() => {
            insertDataIntoTable();
            navigate("/choose-players");
          }}
        />
      </form>
    </div>
  );
};

export default AddPlayer;
