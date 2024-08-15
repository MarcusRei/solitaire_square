import { Card } from "../Card/Card";
import { Suit } from "../CardSymbol/CardSymbol";

export const PlayerHand = () => {
  return (
    <>
      <Card suit={Suit.CLUBS} value={5} />
    </>
  );
};
