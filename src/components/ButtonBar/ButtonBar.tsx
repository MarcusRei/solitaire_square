import { GameState } from "../../models/GameState";
import "./ButtonBar.css";

interface IButtonBarProps {
  gameState: GameState;
  setGameState: (gameState: GameState) => void;
  reset: () => void;
}

export const ButtonBar = (props: IButtonBarProps) => {
  if (props.gameState === GameState.WIN) {
    return (
      <div>
        <h2>You Won!</h2>
        <div>
          <button
            onClick={() => {
              props.reset();
            }}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }

  if (props.gameState === GameState.LOSE) {
    return (
      <div>
        <h2>You lost!</h2>
        <div>
          <button
            onClick={() => {
              props.reset();
            }}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }

  if (props.gameState === GameState.STARTED) {
    return (
      <div className="button-bar center">
        <button
          onClick={() => {
            props.setGameState(GameState.STARTED);
          }}
        >
          Start game
        </button>

        <button
          onClick={() => {
            props.setGameState(GameState.WIN);
          }}
        >
          Win
        </button>

        <button
          onClick={() => {
            props.setGameState(GameState.LOSE);
          }}
        >
          Lose
        </button>
      </div>
    );
  }

  if (props.gameState === GameState.NOT_STARTED) {
    return (
      <div className="button-bar center">
        <button
          onClick={() => {
            props.setGameState(GameState.STARTED);
          }}
        >
          Start
        </button>

        <button
          onClick={() => {
            props.setGameState(GameState.WIN);
          }}
        >
          Win
        </button>

        <button
          onClick={() => {
            props.setGameState(GameState.LOSE);
          }}
        >
          Lose
        </button>
      </div>
    );
  }
};
