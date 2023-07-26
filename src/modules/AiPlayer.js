class AiPlayer {
  constructor(gameBoard) {
    this.gameBoard = gameBoard;
    this.coordList = [];

    for (let i = 0; i < gameBoard.width; i += 1) {
      for (let j = 0; j < gameBoard.height; j += 1) {
        this.coordList.push([i, j]);
      }
    }
  }

  makeMove() {
    const index = Math.floor(Math.random() * this.coordList.length);

    const coords = this.coordList[index];
    this.coordList.splice(index, 1);

    const returnArray = [];

    returnArray.push(this.gameBoard.receiveAttack(coords[0], coords[1]));
    returnArray.push(coords);

    if (this.gameBoard.allSunk()) {
      alert("Hostile won");
      document.body.style.display = "none";
    }

    return returnArray;
  }
}

export default AiPlayer;
