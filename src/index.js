import generateGrid from "./modules/generateGrid";
import Gameboard from "./modules/Gameboard";
import setSquareColor from "./modules/setSquareColor";

const playerSide = document.querySelector("#player-side");
const playerGameBoard = new Gameboard(10, 10);
playerGameBoard.placeShipsRandomly([5, 4, 3, 2, 2, 1, 1]);
let grid = generateGrid(playerGameBoard, 10, 10, false);
for (let i = 0; i < playerGameBoard.shipsAndLocations.length; i += 1) {
  for (
    let j = 0;
    j < playerGameBoard.shipsAndLocations[i].coordsArray.length;
    j += 1
  ) {
    grid = setSquareColor(
      grid,
      playerGameBoard.shipsAndLocations[i].coordsArray[j][0],
      playerGameBoard.shipsAndLocations[i].coordsArray[j][1],
      "ship"
    );
  }
}

playerSide.appendChild(grid);

const hostileSide = document.querySelector("#hostile-side");
const hostileGameBoard = new Gameboard(10, 10);
hostileGameBoard.placeShipsRandomly([5, 4, 3, 2, 2, 1, 1]);
hostileSide.appendChild(generateGrid(hostileGameBoard, 10, 10, true));
