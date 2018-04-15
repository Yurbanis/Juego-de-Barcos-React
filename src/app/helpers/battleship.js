import { shipTypes } from "../constants/constants";

export const getBattleField = () => {
  let battleField = [];

  // Iterating fleet and getStartCoordinates for ship
  let positions = generateShipPositions();

  for (let y = 0; y < 10; y++) {
    let row = [];
    for (let x = 0; x < 10; x++) {
      let currentPosition = {
        xPos: x,
        yPos: y
      };
      if (isCellOccupied(positions, currentPosition)) {
        row.push('Х')
      } else row.push('.');
    }
    battleField.push(row)
  }

  return battleField;
};

const generateShipPositions = () => {
  let positions = [];
  for (let n = 0; positions.length < shipTypes.length; n++) {
    console.log(`putting an ${shipTypes[n].name}`);
    let shipPosition = getRandomCoordinate();
    if (!isCellOccupied(positions, shipPosition)) {
      // выбрать рандомное направление и воткнуть корабль
      let directions = getDirections();
      console.log(`directions ${getDirections()}`);
      positions.push(shipPosition);
      // for (let i = 0; i < directions; i++) {
      //   switch (directions[i]){
      //     case 0:
      //       let tryToNorth(positions, shipPosition);
      //   }
      // }
    }
  }
  console.log(JSON.stringify(positions));
  return positions;
};

const isCellOccupied = (cells, position) => {
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].xPos === position.xPos && cells[i].yPos === position.yPos) {
      return true;
    }
  }
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
  console.log(`randomDirections = `, directions)
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

