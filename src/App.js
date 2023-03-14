import { useState, lazy } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "@mui/material";
import getNextSeason from "./components/nextSeasonModal/getNextSeason";
const ModalForNextSeason = lazy(() =>
  import("./components/nextSeasonModal/ModalForNextSeason")
);

function App() {
  const { currentSeasonSince, currentSeason } = getNextSeason();

  const [open, setOpen] = useState(false);
  function handleOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>{currentSeason}</h2>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span>depuis</span>
        <span>{currentSeasonSince}</span>
      </div>
      <div style={{ margin: "2rem 0" }}>
        <Button
          variant="outlined"
          style={{ textTransform: "capitalize" }}
          onClick={handleOpen}
        >
          Et après ?
        </Button>
        <ModalForNextSeason open={open} handleClose={handleClose} />
      </div>
    </div>
  );
}

export default App;
