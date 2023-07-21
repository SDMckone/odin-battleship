function setSquareColor(grid, x, y, state) {
  const square = grid.children.item(x).children.item(y);
  square.classList.remove("clear");

  switch (state) {
    case "hit":
      square.classList.add("hit");
      break;
    case "miss":
      square.classList.add("miss");
      break;
    case "ship":
      square.classList.add("ship");
      break;
    default:
      break;
  }

  return grid;
}

export default setSquareColor;
