import { CardSymbol, Suit } from "../../CardSymbol/CardSymbol";
import "./TenPattern.css";

interface ITenPatternProps {
  suit: Suit;
}

export const TenPattern = (props: ITenPatternProps) => {
  return (
    <div className="ten-pattern">
      <div className="ten-pattern-section-container">
        <section className="ten-pattern-section">
          <div className="ten-pattern-line-one">
            <div className="pattern-symbol-container">
              <CardSymbol suit={props.suit} />
            </div>
            <div className="pattern-symbol-container">
              <CardSymbol suit={props.suit} />
            </div>
          </div>

          <div className="ten-pattern-line-two">
            <div className="pattern-symbol-container">
              <CardSymbol suit={props.suit} />
            </div>
          </div>

          <div className="ten-pattern-line-three">
            <div className="pattern-symbol-container">
              <CardSymbol suit={props.suit} />
            </div>

            <div className="pattern-symbol-container">
              <CardSymbol suit={props.suit} />
            </div>
          </div>
        </section>
      </div>
      <div className="ten-pattern-section-container">
        <section className="ten-pattern-section">
          <div className="ten-pattern-line-one">
            <div className="pattern-symbol-container">
              <CardSymbol suit={props.suit} />
            </div>
            <div className="pattern-symbol-container">
              <CardSymbol suit={props.suit} />
            </div>
          </div>
          <div className="ten-pattern-line-two">
            <div className="pattern-symbol-container">
              <CardSymbol suit={props.suit} />
            </div>
          </div>

          <div className="ten-pattern-line-three">
            <div className="pattern-symbol-container">
              <CardSymbol suit={props.suit} />
            </div>
            <div className="pattern-symbol-container">
              <CardSymbol suit={props.suit} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
