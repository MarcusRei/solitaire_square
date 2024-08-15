import { CardSymbol, Suit } from "../CardSymbol/CardSymbol";
import { TenPattern } from "../SymbolPatterns/TenPattern/TenPattern";
import "./Card.css";

interface ICardProps {
  suit: Suit;
  value: number;
}

export const Card = (props: ICardProps) => {
  return (
    <div className="card">
      <div className="card-container">
        <section className="card-section">
          <div className="corner-marker-container">
            <h3>10</h3>
            <div className="symbol-container">
              <CardSymbol suit={props.suit} />
            </div>
          </div>
        </section>

        <section className="main-graphic-section">
          <TenPattern suit={props.suit} />
        </section>

        <section className="card-section bottom">
          <div className="corner-marker-container flip">
            <h3>10</h3>
            <div className="symbol-container">
              <CardSymbol suit={props.suit} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
