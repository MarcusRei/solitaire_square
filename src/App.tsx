import { useState } from "react";
import "./App.css";
/* import { unshuffledDeck } from "./models/UnshuffledDeck"; */
import { GameState } from "./models/GameState";
import { Game } from "./components/Game/Game";

function App() {
  /* const [card, setCard] = useState({
    value: Math.floor(Math.random() * 12) + 1,
    suit: Suit.CLUBS,
  }); */

  const [gameState, setGameState] = useState<GameState>(GameState.NOT_STARTED);

  /* function shuffleDeck() {
    const newSuit = Math.floor(Math.random() * 4);
    console.log(newSuit);

    setCard({ value: Math.floor(Math.random() * 12) + 1, suit: newSuit });
  } */

  function reset() {
    console.log("RESET!");
    setGameState(GameState.NOT_STARTED);
  }

  return (
    <>
      <h1>My solitaire</h1>
      {gameState === GameState.STARTED ? (
        <Game
          resetGame={() => {
            reset();
          }}
        />
      ) : gameState === GameState.LOSE ? (
        <div>
          <h2>You lost!</h2>
          <div>
            <button
              onClick={() => {
                reset();
              }}
            >
              Reset
            </button>
          </div>
        </div>
      ) : gameState === GameState.WIN ? (
        <div>
          <h2>You Won!</h2>
          <div>
            <button
              onClick={() => {
                reset();
              }}
            >
              Reset
            </button>
          </div>
        </div>
      ) : (
        <div className="button-bar center">
          <button
            onClick={() => {
              setGameState(GameState.STARTED);
            }}
          >
            Start game
          </button>

          <button
            onClick={() => {
              setGameState(GameState.WIN);
            }}
          >
            Win
          </button>

          <button
            onClick={() => {
              setGameState(GameState.LOSE);
            }}
          >
            Lose
          </button>
        </div>
      )}
    </>
  );
}

export default App;
