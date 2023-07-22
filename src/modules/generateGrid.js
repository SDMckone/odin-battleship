function generateGrid(gameboard, width, height, hostileSide) {
  const gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-container");

  for (let i = 0; i < height; i += 1) {
    const gridRowContainer = document.createElement("div");
    gridRowContainer.classList.add("grid-row-container");

    for (let j = 0; j < width; j += 1) {
      const gridSquare = document.createElement("div");
      gridSquare.classList.add("grid-square");
      gridSquare.classList.add("clear");
      if (hostileSide) {
        gridSquare.classList.add("hostile-side");

        gridSquare.addEventListener("click", () => {
          if (gridSquare.classList.contains("clear")) {
            const wasHit = gameboard.receiveAttack(i, j);
            gridSquare.classList.remove("clear");

            if (wasHit) {
              gridSquare.classList.add("hit");
            } else {
              gridSquare.classList.add("miss");
            }
          }
          if (gameboard.allSunk()) {
            console.log("Won");
          }
        });
      }

      gridRowContainer.appendChild(gridSquare);
    }

    gridContainer.appendChild(gridRowContainer);
  }

  return gridContainer;
}

export default generateGrid;
