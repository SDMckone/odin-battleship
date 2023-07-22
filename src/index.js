import Gameboard from "./modules/Gameboard";
import DomGrid from "./modules/DomGrid";

const placementGrid = document.querySelector("#placement-grid");
const placementGameBoard = new Gameboard(10, 10);
const placementDomGrid = new DomGrid(placementGameBoard);
placementDomGrid.makePlacementGrid();

placementGrid.appendChild(placementDomGrid.gridContainer);

const playerSide = document.querySelector("#player-side");
const playerGameBoard = new Gameboard(10, 10);
playerGameBoard.placeShipsRandomly([5, 4, 3, 2, 2, 1, 1]);
const playerDomGrid = new DomGrid(playerGameBoard);
// for (let i = 0; i < playerGameBoard.shipsAndLocations.length; i += 1) {
//   for (
//     let j = 0;
//     j < playerGameBoard.shipsAndLocations[i].coordsArray.length;
//     j += 1
//   ) {
//     grid = setSquareColor(
//       grid,
//       playerGameBoard.shipsAndLocations[i].coordsArray[j][0],
//       playerGameBoard.shipsAndLocations[i].coordsArray[j][1],
//       "ship"
//     );
//   }
// }

playerSide.appendChild(playerDomGrid.gridContainer);

const hostileSide = document.querySelector("#hostile-side");
const hostileGameBoard = new Gameboard(10, 10);
hostileGameBoard.placeShipsRandomly([5, 4, 3, 2, 2, 1, 1]);
const hostileDomGrid = new DomGrid(hostileGameBoard);
hostileSide.appendChild(hostileDomGrid.gridContainer);
