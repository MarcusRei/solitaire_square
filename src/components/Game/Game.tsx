import { useEffect, useState } from "react";
import { ICard } from "../../models/ICard";
import { unshuffledDeck } from "../../models/UnshuffledDeck";
import { Bank } from "../Bank/Bank";
import { Deck } from "../Deck/Deck";
import "./Game.css";
import { Board } from "../Board/Board";

//! Should be 27 cards in boards

interface IGameProps {
  resetGame: () => void;
}

export const Game = (props: IGameProps) => {
  const [activeDeck, setActiveDeck] = useState<ICard[]>([]);
  const [cardsOnBoard, setCardsOnBoard] = useState<ICard[]>([]);

  useEffect(() => {
    console.log("START", activeDeck);
    shuffleDeck(unshuffledDeck);
  }, []);

  function shuffleDeck(deck: ICard[]) {
    let currentIndex = deck.length;

    while (currentIndex != 0) {
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [deck[currentIndex], deck[randomIndex]] = [
        deck[randomIndex],
        deck[currentIndex],
      ];
    }
    setActiveDeck(deck);
    splitDeck(deck);
  }

  function splitDeck(deck: ICard[]) {
    const cardsOnBoard = deck.slice(0, 27);
    setCardsOnBoard(cardsOnBoard);
  }

  return (
    <>
      <div className="">
        <div className="top">
          <Deck />
          <div className="flex-grow"></div>
          <Bank />
        </div>

        <Board cards={cardsOnBoard} />
      </div>
      <div>
        <button
          onClick={() => {
            props.resetGame();
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
};
