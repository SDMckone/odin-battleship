import AiPlayer from "./modules/AiPlayer";
import Gameboard from "./modules/Gameboard";

const gameBoard = new Gameboard(10, 10);

const aiPlayer = new AiPlayer(gameBoard);
aiPlayer.makeMove();
