import { useState } from "react";
import { CardBackside } from "../CardBackside/CardBackside";
import { CardPlaceholder } from "../CardPlaceholder/CardPlaceholder";
import "./Deck.css";
import { ICard } from "../../models/ICard";
import { unshuffledDeck } from "../../models/UnshuffledDeck";
import { SimpleCard } from "../SimpleCard/SimpleCard";

export const Deck = () => {
  const [deck, setDeck] = useState<ICard[]>(unshuffledDeck);
  const [usePile, setUsePile] = useState<ICard[]>([]);
  const offset = 5;

  function pickCard() {
    if (deck.length === 0) {
      return;
    }
    const updatedDeck = [...deck];
    const updatedUsePile = [...usePile];
    updatedUsePile.push(deck[deck.length - 1]);
    updatedDeck.pop();
    setDeck(updatedDeck);
    setUsePile(updatedUsePile);
  }

  function moveCard() {
    console.log("Clicked!");
  }

  return (
    <div className="deck">
      <div
        className="pick-pile"
        onClick={() => {
          pickCard();
        }}
      >
        {deck.length === 0 ? (
          <div className="card-wrapper">
            <CardPlaceholder />
          </div>
        ) : (
          deck.map((card, index) => {
            return (
              <div
                className="card-wrapper"
                key={index}
                style={{
                  transform: `translate(${(offset * index).toString()})`,
                }}
              >
                <CardBackside key={index} />
              </div>
            );
          })
        )}
      </div>

      <div
        className="use-pile"
        onClick={() => {
          moveCard();
        }}
      >
        {usePile.length === 0 ? (
          <div className="card-wrapper">
            <CardPlaceholder />
          </div>
        ) : (
          usePile.map((card, index) => {
            return (
              <div key={index} className="card-wrapper">
                <SimpleCard suit={card.suit} value={card.value} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
