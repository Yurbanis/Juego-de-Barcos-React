import aircraftIcon from './../../assets/img/Aircraft Shape.png';
import battleShipIcon from './../../assets/img/Battleship Shape.png';
import carrierIcon from './../../assets/img/Carrier Shape.png';
import cruiserIcon from './../../assets/img/Cruiser Shape.png';
import submarineIcon from './../../assets/img/Submarine Shape.png';

export const shipTypes = [
  {
    name: 'Aircraft',
    size: 5,
    count: 1,
    position: {},
    icon: aircraftIcon,
    hitPoints: 5,
    hits: 0
  },
  {
    name: 'Battleship',
    size: 4,
    count: 1,
    position: {},
    icon: battleShipIcon,
    hitPoints: 4,
    hits: 0
  },
  {
    name: 'Cruiser',
    size: 3,
    count: 1,
    position: {},
    icon: cruiserIcon,
    hitPoints: 3,
    hits: 0
  },
  {
    name: 'Submarine',
    size: 3,
    count: 1,
    position: {},
    icon: submarineIcon,
    hitPoints: 3,
    hits: 0
  },
  {
    name: 'Carrier',
    size: 2,
    count: 1,
    position: {},
    icon: carrierIcon,
    hitPoints: 3,
    hits: 0
  }
];

