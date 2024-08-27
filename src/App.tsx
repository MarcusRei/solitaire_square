import { useState } from "react";
import "./App.css";
import { GameState } from "./models/GameState";
import { Game } from "./components/Game/Game";
import { ButtonBar } from "./components/ButtonBar/ButtonBar";

function App() {
  const [gameState, setGameState] = useState<GameState>(GameState.NOT_STARTED);

  function reset() {
    console.log("RESET!");
    setGameState(GameState.NOT_STARTED);
  }

  return (
    <>
      <h1>My solitaire</h1>
      <ButtonBar
        gameState={gameState}
        setGameState={setGameState}
        reset={reset}
      />
      <Game />
    </>
  );
}

export default App;
