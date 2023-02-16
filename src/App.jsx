import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import AddPlayer from "./container/AddPlayer/AddPlayer";
import Tournament from "./container/Tournament/Tournament";
import LandingPage from "./container/LandingPage/LandingPage";
import ChoosePlayers from "./container/ChoosePlayers/ChoosePlayers";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/add-player" element={<AddPlayer />} />
          <Route path="/tournament" element={<Tournament />} />
          <Route path="/choose-players" element={<ChoosePlayers />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
