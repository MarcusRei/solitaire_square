import { Suit } from "../../models/Suit";
import "./CardSymbol.css";

interface ICardSymbolProps {
  suit: Suit;
}

export const CardSymbol = (props: ICardSymbolProps) => {
  return (
    <div className="card-symbol-container">
      {props.suit === Suit.CLUBS ? (
        <svg
          className="card-symbol"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
          id="Clubs-Symbol--Streamline-Core.svg"
          height="14"
          width="14"
        >
          <desc>Clubs Symbol Streamline Icon: https://streamlinehq.com</desc>
          <g id="clubs-symbol--entertainment-gaming-card-clubs-symbol">
            <path
              id="Union"
              fill="#000000"
              fillRule="evenodd"
              d="M7 0.25c-1.67658 0 -3.03571 1.35914 -3.03571 3.03571 0 0.55968 0.15174 1.18668 0.41209 1.77134 -0.37093 -0.10573 -0.74324 -0.16419 -1.09067 -0.16419C1.60914 4.89286 0.25 6.25199 0.25 7.92857s1.35914 3.03573 3.03571 3.03573c0.62238 0 1.32859 -0.1877 1.96767 -0.5044l-0.60615 2.9904c-0.0149 0.0736 0.00399 0.1499 0.05148 0.2079 0.04748 0.0581 0.11852 0.0918 0.19354 0.0918h4.2155c0.07501 0 0.14606 -0.0337 0.19354 -0.0918 0.04748 -0.058 0.06638 -0.1343 0.05148 -0.2079l-0.60615 -2.9904c0.63908 0.3167 1.34528 0.5044 1.96768 0.5044 1.6766 0 3.0357 -1.35915 3.0357 -3.03573s-1.3591 -3.03571 -3.0357 -3.03571c-0.3474 0 -0.71975 0.05846 -1.09068 0.1642 0.26035 -0.58467 0.41208 -1.21167 0.41208 -1.77135C10.0357 1.60914 8.67658 0.25 7 0.25Z"
              clipRule="evenodd"
              strokeWidth="1"
            ></path>
          </g>
        </svg>
      ) : props.suit === Suit.DIAMONDS ? (
        <svg
          className="card-symbol"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
          id="Diamonds-Symbol--Streamline-Core.svg"
          height="14"
          width="14"
        >
          <desc>Diamonds Symbol Streamline Icon: https://streamlinehq.com</desc>
          <g id="diamonds-symbol--entertainment-gaming-card-diamonds-symbol">
            <path
              id="Union"
              fill="#FF0000"
              fillRule="evenodd"
              d="M8.0721 0.784927c-0.52684 -0.7132358 -1.61743 -0.7132363 -2.14427 0L1.89112 6.24982c-0.33106 0.44819 -0.33106 1.05217 0 1.50036l4.03671 5.46492c0.52684 0.7132 1.61743 0.7132 2.14427 0l4.0367 -5.46492c0.3311 -0.44819 0.3311 -1.05217 0 -1.50036L8.0721 0.784927Z"
              clipRule="evenodd"
              strokeWidth="1"
            ></path>
          </g>
        </svg>
      ) : props.suit === Suit.HEARTS ? (
        <svg
          className="card-symbol"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
          id="Hearts-Symbol--Streamline-Core.svg"
          height="14"
          width="14"
        >
          <desc>Hearts Symbol Streamline Icon: https://streamlinehq.com</desc>
          <g id="hearts-symbol--entertainment-gaming-card-hearts-symbol">
            <path
              id="Union"
              fill="#FF0000"
              fillRule="evenodd"
              d="M3.788 1.314c0.988 0.02 2.085 0.49 3.214 1.56 1.127 -1.067 2.223 -1.536 3.21 -1.555 1.04 -0.02 1.918 0.46 2.536 1.18 1.218 1.42 1.47 3.85 -0.058 5.377l-0.001 0.001 -4.247 4.208c-0.81 0.802 -2.07 0.802 -2.88 0L1.316 7.877C-0.217 6.343 0.032 3.913 1.25 2.491c0.617 -0.72 1.495 -1.2 2.537 -1.178Z"
              clipRule="evenodd"
              strokeWidth="1"
            ></path>
          </g>
        </svg>
      ) : props.suit === Suit.SPADES ? (
        <svg
          className="card-symbol"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
          id="Spades-Symbol--Streamline-Core.svg"
          height="14"
          width="14"
        >
          <desc>Spades Symbol Streamline Icon: https://streamlinehq.com</desc>
          <g id="spades-symbol--entertainment-gaming-card-spades-symbol">
            <path
              id="Union"
              fill="#000000"
              fillRule="evenodd"
              d="M8.43617 0.814097c-0.80812 -0.7521293 -2.05975 -0.7521293 -2.86787 0L1.32107 4.76704l-0.00085 0.00079C-0.0561896 6.06085 -0.000548035 8.03805 0.896475 9.39564c0.451315 0.68306 1.123015 1.22416 1.951715 1.45206 0.70628 0.1942 1.51027 0.1564 2.36585 -0.1938l-0.56683 2.7964c-0.0149 0.0736 0.004 0.1499 0.05148 0.2079 0.04748 0.0581 0.11853 0.0918 0.19354 0.0918h4.2155c0.07501 0 0.14606 -0.0337 0.19354 -0.0918 0.04748 -0.058 0.06638 -0.1343 0.05148 -0.2079l-0.56758 -2.8001c0.85469 0.3498 1.65813 0.3872 2.36403 0.1928 0.8284 -0.2281 1.5002 -0.7692 1.952 -1.45198 0.8978 -1.35686 0.9565 -3.33299 -0.417 -4.62319l-0.0008 -0.00079L8.43617 0.814097Z"
              clipRule="evenodd"
              strokeWidth="1"
            ></path>
          </g>
        </svg>
      ) : null}
    </div>
  );
};
export { Suit };
