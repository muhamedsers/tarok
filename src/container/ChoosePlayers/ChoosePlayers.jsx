import React, { useEffect, useState } from "react";
import "./ChoosePlayers.scss";
import x from "../../assets/X.png";
import checkmark from "../../assets/checkmark.png";
import { supabase } from "../../supabaseClient";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";

const ChoosePlayers = () => {
  const [availablePlayers, setAvailablePlayers] = useState([]);

  const [chosenPlayers, setChosenPlayers] = useState([]);

  const navigate = useNavigate();

  const notify = () =>
    toast.error("You can add up to 4 players!", {
      position: toast.POSITION.BOTTOM_LEFT,
    });

  async function getAvailablePlayers() {
    const availablePlayersDatabase = await supabase.from("igralec").select();
    setAvailablePlayers(availablePlayersDatabase.data);
  }

  const insertDataIntoTable = () => {
    chosenPlayers.forEach(async (e) => {
      const response = await supabase.from("izbrani_igralci").insert([
        {
          ime: e.ime,
        },
      ]);
    });
  };

  useEffect(() => {
    getAvailablePlayers();
  }, []);

  return (
    <div className="center">
      <div className="playersParentContainer">
        <div className="buttonContainer">
          <div className="availablePlayers playersContainer">
            <h1>
              AVAILABLE <br></br>PLAYERS
            </h1>
            <div className="players">
              {availablePlayers.map((player, playerIdx) => {
                return (
                  <div className="singlePlayer" key={playerIdx}>
                    <h3>{player.ime}</h3>
                    <button
                      onClick={() => {
                        if (chosenPlayers.length < 4) {
                          let temporaryHold = chosenPlayers;
                          temporaryHold.push(player);
                          setChosenPlayers(temporaryHold);
                          setAvailablePlayers(
                            availablePlayers.filter((item, itemIdx) => {
                              return itemIdx !== playerIdx;
                            })
                          );
                        } else {
                          notify();
                        }
                      }}
                      className="addButton playerButton"
                    >
                      <img src={checkmark} alt="x" className="icon" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          <button
            className="ctaButton secondary"
            onClick={() => navigate("/add-player")}
          >
            Add new players
          </button>
        </div>
        <div className="buttonContainer">
          <div className="chosenPlayers playersContainer">
            <h1>
              CHOSEN <br></br>PLAYERS
            </h1>
            <div className="players">
              {chosenPlayers.map((player, playerIdx) => {
                return (
                  <div className="singlePlayer" key={playerIdx}>
                    <h3>{player.ime}</h3>
                    <button
                      onClick={() => {
                        let temporaryHold = availablePlayers;
                        temporaryHold.push(player);
                        setAvailablePlayers(temporaryHold);
                        setChosenPlayers(
                          chosenPlayers.filter((item, itemIdx) => {
                            return itemIdx !== playerIdx;
                          })
                        );
                      }}
                      className="removeButton playerButton"
                    >
                      <img src={x} alt="x" className="icon" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          <button
            className="ctaButton primary"
            onClick={() => {
              insertDataIntoTable();
              navigate("/tournament");
            }}
          >
            Next
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ChoosePlayers;
