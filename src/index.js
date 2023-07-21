import generateGrid from "./modules/generateGrid";
import Gameboard from "./modules/Gameboard";

const playerSide = document.querySelector("#player-side");
const playerGameBoard = new Gameboard(10, 10);
playerSide.appendChild(generateGrid(playerGameBoard, 10, 10, false));

const hostileSide = document.querySelector("#hostile-side");
const hostileGameBoard = new Gameboard(10, 10);
hostileGameBoard.placeShip(5, 0, 0, true);
hostileSide.appendChild(generateGrid(hostileGameBoard, 10, 10, true));
