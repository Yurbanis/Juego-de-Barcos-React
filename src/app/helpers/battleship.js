import { shipTypes } from "../constants/constants";

export const getBattleField = () => {
  let battleField = [];

  // Iterating fleet and getStartCoordinates for ship
  let positions = [];

  for (let i = 0; i < shipTypes.length; i++) {
    let newPositions = generateShipPositions(shipTypes[i], positions);
    positions.push(...newPositions);
  }

  for (let y = 0; y < 10; y++) {
    let row = [];
    for (let x = 0; x < 10; x++) {
      let currentPosition = {
        xPos: x,
        yPos: y
      };
      if (arePositionsOccupied(positions, [currentPosition])) {
        row.push('Х');
      } else row.push('.');
    }
    battleField.push(row)
  }
  console.log(`------------------------------`);
  return battleField;
};

const generateShipPositions = (ship, positions) => {
  let shipStartPosition = null;
  let i = 0;
  while (shipStartPosition === null) {
    shipStartPosition = getRandomCoordinate();
    if (!arePositionsOccupied(positions, [shipStartPosition])) {
      let directions = getDirections();
      for (let i = 0; i < directions.length; i++) {
        let tempCoordinates = tryDirections(directions[i], ship, shipStartPosition, positions);
        if (tempCoordinates) {
          for (let l = 0; l < tempCoordinates.length; l++) {
            positions.push(tempCoordinates[l]);
            positions.push(...refillNeighbourCells(tempCoordinates[l]))
          }
          return positions;
        }
      }
    } else {
      shipStartPosition = null;
    }
  }

  return positions;
};

const arePositionsOccupied = (cells, positions) => {
  for (let i = 0; i < cells.length; i++) {
    for (let j = 0; j < positions.length; j++) {
      if (cells[i].xPos === positions[j].xPos && cells[i].yPos === positions[j].yPos) {
        return true;
      }
    }
  }
  console.log(`arePositionsOccupied where to check = `, JSON.stringify(cells));
  console.log(`arePositionsOccupied what to check = `, JSON.stringify(positions));
  return false;
};

// returns random sequence of directions
const getDirections = () => {
  let directions = [];
  for (let i = 0; directions.length < 4; i++) {
    let number = getRandomNumber(4);
    if (directions.indexOf(number) === -1) {
      directions.push(number);
    }
  }
  return directions;
};

// try to place ship to map
function tryDirections(i, ship, shipPosition, positions) {
  let tempCoordinates = [];
  for (let l = 0; l < ship.size; l++) {
    let position = {};
    let newPos = 0;
    switch (i) {
      case 0:
        newPos = shipPosition.yPos + l;
        if (newPos > 9) {
          console.log(`break on ${ship.name}`, newPos);
          return null;
        }
        position = {
          xPos: shipPosition.xPos,
          yPos: newPos
        };
        tempCoordinates.push(position);
        break;
      case 1:
        newPos = shipPosition.xPos + l;
        if (newPos > 9) {
          console.log(`break on ${ship.name}`, newPos);
          return null;
        }
        position = {
          xPos: newPos,
          yPos: shipPosition.yPos,
        };
        tempCoordinates.push(position);
        break;
      case 2:
        newPos = shipPosition.yPos - l;
        if (newPos < 0) {
          console.log(`break on ${ship.name}`, newPos);
          return null;
        }
        position = {
          xPos: shipPosition.xPos,
          yPos: newPos,
        };
        tempCoordinates.push(position);
        break;
      case 3:
        newPos = shipPosition.xPos - l;
        if (newPos < 0) {
          console.log(`break on ${ship.name}`, newPos);
          return null;
        }
        position = {
          xPos: newPos,
          yPos: shipPosition.yPos,
        };
        tempCoordinates.push(position);
        break;
      default:
        break;
    }
  }
  if (arePositionsOccupied(positions, tempCoordinates)) {
    return null;
  } else {
    console.log(`ready to place for ${ship.name} = ${JSON.stringify(tempCoordinates)}`);
  }
}

// returns positions with neighbour marked
const refillNeighbourCells = (position) => {
  let result = [];
  for (let i = 0; i < 4; i++) {
    switch (i) {
      case 0:
        result.push({
          xPos: position.xPos,
          yPos: position.yPos + 1
        });
        break;

      case 1:
        result.push({
          xPos: position.xPos + 1,
          yPos: position.yPos
        });
        break;
      case 2:
        result.push({
          xPos: position.xPos,
          yPos: position.yPos - 1
        });
        break;
      case 3:
        result.push({
          xPos: position.xPos - 1,
          yPos: position.yPos
        });
        break;
    }
  }
  return result;
};

const getRandomCoordinate = () => {
  const max = 9;
  return {
    xPos: Math.floor(Math.random() * max),
    yPos: Math.floor(Math.random() * max)
  }
};

// returns random number in range from 0 to @param 'max'
const getRandomNumber = (max) => {
  return Math.floor(Math.random() * max)
};


