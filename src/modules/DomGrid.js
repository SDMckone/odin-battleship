import AiPlayer from "./AiPlayer";

class DomGrid {
  constructor(gameboard, otherDomGrid = null) {
    this.gridContainer = document.createElement("div");
    this.gridContainer.classList.add("grid-container");
    this.gameboard = gameboard;
    this.otherDomGrid = otherDomGrid;

    for (let i = 0; i < this.gameboard.height; i += 1) {
      const gridRowContainer = document.createElement("div");
      gridRowContainer.classList.add("grid-row-container");

      for (let j = 0; j < this.gameboard.width; j += 1) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square");
        gridSquare.classList.add("clear");

        gridRowContainer.appendChild(gridSquare);
      }

      this.gridContainer.appendChild(gridRowContainer);
    }
  }

  setSquareColor(x, y, state) {
    const square = this.gridContainer.children.item(x).children.item(y);
    square.classList.remove("clear", "hit", "miss", "ship", "ship-placement");

    switch (state) {
      case "clear":
        square.classList.add("clear");
        break;
      case "hit":
        square.classList.add("hit");
        break;
      case "miss":
        square.classList.add("miss");
        break;
      case "ship":
        square.classList.add("ship");
        break;
      case "ship-placement":
        square.classList.add("ship-placement");
        break;
      default:
        break;
    }
  }

  renderShips() {
    for (let i = 0; i < this.gameboard.shipsAndLocations.length; i += 1) {
      for (
        let j = 0;
        j < this.gameboard.shipsAndLocations[i].coordsArray.length;
        j += 1
      ) {
        this.setSquareColor(
          this.gameboard.shipsAndLocations[i].coordsArray[j][0],
          this.gameboard.shipsAndLocations[i].coordsArray[j][1],
          "ship"
        );
      }
    }
  }

  makeHostileGrid() {
    const ai = new AiPlayer(this.otherDomGrid.gameboard);

    for (let i = 0; i < this.gridContainer.children.length; i += 1) {
      for (
        let j = 0;
        j < this.gridContainer.children.item(i).children.length;
        j += 1
      ) {
        const gridSquare = this.gridContainer.children.item(i).children.item(j);
        gridSquare.classList.add("hostile-side");

        gridSquare.addEventListener("click", () => {
          if (gridSquare.classList.contains("clear")) {
            const wasHit = this.gameboard.receiveAttack(i, j);
            gridSquare.classList.remove("clear");

            if (wasHit) {
              gridSquare.classList.add("hit");
            } else {
              gridSquare.classList.add("miss");
            }

            ai.makeMove();
          }
          if (this.gameboard.allSunk()) {
            console.log("Won");
          }
        });
      }
    }
  }

  makePlacementGrid(shipList) {
    let horizontal = false;
    let shipListIndex = 0;

    for (let i = 0; i < this.gridContainer.children.length; i += 1) {
      for (
        let j = 0;
        j < this.gridContainer.children.item(i).children.length;
        j += 1
      ) {
        const gridSquare = this.gridContainer.children.item(i).children.item(j);

        const shipPlacementCallback = () => {
          if (horizontal) {
            for (let k = 0; k < shipList[shipListIndex]; k += 1) {
              if (
                !this.gameboard.isCoordOccupied(i, j + k) &&
                i < this.gameboard.height &&
                j + k < this.gameboard.width
              ) {
                this.setSquareColor(i, j + k, "ship-placement");
              }
            }
          } else {
            for (let k = 0; k < shipList[shipListIndex]; k += 1) {
              if (
                !this.gameboard.isCoordOccupied(i + k, j) &&
                i + k < this.gameboard.height &&
                j < this.gameboard.width
              ) {
                this.setSquareColor(i + k, j, "ship-placement");
              }
            }
          }
        };
        gridSquare.addEventListener("mouseover", shipPlacementCallback);

        const mouseLeaveCallback = () => {
          if (horizontal) {
            for (let k = 0; k < shipList[shipListIndex]; k += 1) {
              if (
                !this.gameboard.isCoordOccupied(i, j + k) &&
                i < this.gameboard.height &&
                j + k < this.gameboard.width
              ) {
                this.setSquareColor(i, j + k, "clear");
              }
            }
          } else {
            for (let k = 0; k < shipList[shipListIndex]; k += 1) {
              if (
                !this.gameboard.isCoordOccupied(i + k, j) &&
                i + k < this.gameboard.height &&
                j < this.gameboard.width
              ) {
                this.setSquareColor(i + k, j, "clear");
              }
            }
          }
        };
        gridSquare.addEventListener("mouseleave", mouseLeaveCallback);

        gridSquare.addEventListener("click", () => {
          if (
            this.gameboard.placeShip(shipList[shipListIndex], i, j, horizontal)
          ) {
            this.renderShips();
            shipListIndex += 1;
            gridSquare.removeEventListener("mouseover", shipPlacementCallback);
            gridSquare.removeEventListener("mouseleave", mouseLeaveCallback);

            if (shipListIndex === shipList.length) {
              document.querySelector("#start-screen").style.display = "none";
              document.body.classList.remove("low-opacity-bg");
              document
                .querySelector("#content")
                .classList.remove("low-opacity");
              this.otherDomGrid.renderShips();
            }
          }
        });

        gridSquare.addEventListener("contextmenu", mouseLeaveCallback);
        gridSquare.addEventListener("contextmenu", (event) => {
          event.preventDefault();
          horizontal = !horizontal;
        });
        gridSquare.addEventListener("contextmenu", shipPlacementCallback);
      }
    }
  }
}

export default DomGrid;
