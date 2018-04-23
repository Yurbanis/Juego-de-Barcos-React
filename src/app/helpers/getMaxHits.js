import { shipTypes } from "../constants/constants";

let maxHits = 0;

shipTypes.forEach((ship) => {
  maxHits += ship.hitPoints;
});

export default maxHits;
