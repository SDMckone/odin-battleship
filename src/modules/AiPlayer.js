class AiPlayer {
  constructor(gameBoard) {
    this.gameBoard = gameBoard;
    this.coordList = [];

    for (let i = 0; i < gameBoard.width; i += 1) {
      for (let j = 0; j < gameBoard.height; j += 1) {
        this.coordList.push([i, j]);
      }
    }
    console.log(this.coordList);
  }

  makeMove() {
    const index = Math.floor(Math.random() * this.coordList.length);

    const coords = this.coordList[index];
    this.coordList = this.coordList.splice(index, 1);

    return this.gameBoard.receiveAttack(coords[0], coords[1]);
  }
}

export default AiPlayer;
