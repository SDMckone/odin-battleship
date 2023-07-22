class DomGrid {
  constructor(gameboard) {
    this.gridContainer = document.createElement("div");
    this.gridContainer.classList.add("grid-container");

    for (let i = 0; i < gameboard.height; i += 1) {
      const gridRowContainer = document.createElement("div");
      gridRowContainer.classList.add("grid-row-container");

      for (let j = 0; j < gameboard.width; j += 1) {
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
    square.classList.remove("clear");

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

  makePlacementGrid() {
    for (let i = 0; i < this.gridContainer.children.length; i += 1) {
      for (
        let j = 0;
        j < this.gridContainer.children.item(i).children.length;
        j += 1
      ) {
        const gridSquare = this.gridContainer.children.item(i).children.item(j);

        gridSquare.addEventListener("mouseover", () => {
          gridSquare.classList.add("ship-placement");
        });
        gridSquare.addEventListener("mouseleave", () => {
          gridSquare.classList.remove("ship-placement");
        });
      }
    }
  }
}

export default DomGrid;
