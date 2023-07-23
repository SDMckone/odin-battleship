import Gameboard from "./modules/Gameboard";
import DomGrid from "./modules/DomGrid";

const placementGrid = document.querySelector("#placement-grid");
const playerGameBoard = new Gameboard(10, 10);
const playerDomGrid = new DomGrid(playerGameBoard);
const placementDomGrid = new DomGrid(playerGameBoard, playerDomGrid);

placementDomGrid.makePlacementGrid([5, 4, 3, 2, 2, 1, 1]);

placementGrid.appendChild(placementDomGrid.gridContainer);

const playerSide = document.querySelector("#player-side");

playerSide.appendChild(playerDomGrid.gridContainer);

const hostileSide = document.querySelector("#hostile-side");
const hostileGameBoard = new Gameboard(10, 10);
hostileGameBoard.placeShipsRandomly([5, 4, 3, 2, 2, 1, 1]);
const hostileDomGrid = new DomGrid(hostileGameBoard, playerDomGrid);
hostileDomGrid.makeHostileGrid();
hostileSide.appendChild(hostileDomGrid.gridContainer);
