import { useEffect, useState } from "react";
import { ICard } from "../../models/ICard";
import "./Board.css";
import { SimpleCard } from "../SimpleCard/SimpleCard";

interface IBoardProps {
  cards: ICard[];
}

interface IRows {
  rowOne: ICard[];
  rowTwo: ICard[];
  rowThree: ICard[];
  rowFour: ICard[];
  rowFive: ICard[];
  rowSix: ICard[];
  rowSeven: ICard[];
}

export const Board = (props: IBoardProps) => {
  const [rows, setRows] = useState<IRows>({
    rowOne: [],
    rowTwo: [],
    rowThree: [],
    rowFour: [],
    rowFive: [],
    rowSix: [],
    rowSeven: [],
  });

  useEffect(() => {
    console.log("cards in board: ", props.cards);
    dealCards(props.cards);
  }, []);

  function dealCards(cards: ICard[]) {
    const updatedRows = rows;

    for (let i = 0; i < cards.length; i++) {
      const card = props.cards[i];
      if (i === 0) {
        updatedRows.rowOne.push(card);
      }

      if (i === 1) {
        updatedRows.rowTwo.push(card);
      }

      if (i >= 2 && i <= 4) {
        updatedRows.rowThree.push(card);
      }

      if (i >= 5 && i <= 8) {
        updatedRows.rowFour.push(card);
      }

      if (i >= 9 && i <= 12) {
        updatedRows.rowFive.push(card);
      }

      if (i >= 13 && i <= 18) {
        updatedRows.rowSix.push(card);
      }

      if (i >= 19 && i <= 25) {
        updatedRows.rowSeven.push(card);
      }
    }

    console.log("updatedRows", updatedRows);

    setRows(updatedRows);
  }

  return (
    <div className="board">
      <div className="row one">
        {rows.rowOne.map((card, index) => {
          return (
            <div className="card-holder" key={index}>
              <SimpleCard suit={card.suit} value={card.value} />
            </div>
          );
        })}
      </div>
      <div className="row two">
        {rows.rowTwo.map((card, index) => {
          return (
            <div className="card-holder" key={index}>
              <SimpleCard suit={card.suit} value={card.value} />
            </div>
          );
        })}
      </div>
      <div className="row three">
        {rows.rowThree.map((card, index) => {
          return (
            <div className="card-holder" key={index}>
              <SimpleCard suit={card.suit} value={card.value} />
            </div>
          );
        })}
      </div>
      <div className="row four">
        {rows.rowFour.map((card, index) => {
          return (
            <div className="card-holder" key={index}>
              <SimpleCard suit={card.suit} value={card.value} />
            </div>
          );
        })}
      </div>
      <div className="row five">
        {rows.rowFive.map((card, index) => {
          return (
            <div className="card-holder" key={index}>
              <SimpleCard suit={card.suit} value={card.value} />
            </div>
          );
        })}
      </div>
      <div className="row six">
        {rows.rowSix.map((card, index) => {
          return (
            <div className="card-holder" key={index}>
              <SimpleCard suit={card.suit} value={card.value} />
            </div>
          );
        })}
      </div>
      <div className="row seven">
        {rows.rowSeven.map((card, index) => {
          return (
            <div className="card-holder" key={index}>
              <SimpleCard suit={card.suit} value={card.value} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
