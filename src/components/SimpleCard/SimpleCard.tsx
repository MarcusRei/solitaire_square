import { Suit } from "../../models/Suit";
import { CardSymbol } from "../CardSymbol/CardSymbol";
import "./SimpleCard.css";
interface ISimpleCard {
  suit: Suit;
  value: number;
}
export const SimpleCard = (props: ISimpleCard) => {
  const textColor =
    props.suit === Suit.HEARTS || props.suit === Suit.DIAMONDS
      ? "#FF0000"
      : "#000000";
  return (
    <div className="card-base simple-card">
      <section className="simple-card-top-section">
        <h3 style={{ color: textColor }} className="simple-card-value">
          {props.value === 1
            ? "A"
            : props.value === 11
            ? "J"
            : props.value === 12
            ? "Q"
            : props.value === 13
            ? "K"
            : props.value}
        </h3>
        <div className="top-symbol">
          <CardSymbol suit={props.suit} />
        </div>
      </section>
      <section className="simple-card-bottom-section">
        <div className="main-symbol-container">
          <div className="main-symbol">
            <CardSymbol suit={props.suit} />
          </div>
        </div>
      </section>
    </div>
  );
};
