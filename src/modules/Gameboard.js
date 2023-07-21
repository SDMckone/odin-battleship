import Ship from "./Ship";

class Gameboard {
  constructor(width, height) {
    this.shipsAndLocations = [];
    this.occupiedCoords = [];
    this.width = width;
    this.height = height;
  }

  placeShip(length, x, y, isHorizontal) {
    const newShip = new Ship(length);
    const coordsArray = [];

    if (isHorizontal) {
      if (y + length > this.width) {
        return false;
      }

      for (let i = y; i < length + y; i += 1) {
        coordsArray.push([x, i]);
      }
    } else {
      if (x + length > this.height) {
        return false;
      }

      for (let i = x; i < length + x; i += 1) {
        coordsArray.push([i, y]);
      }
    }

    for (let i = 0; i < this.occupiedCoords.length; i += 1) {
      for (let j = 0; j < coordsArray.length; j += 1) {
        if (
          this.occupiedCoords[i][0] === coordsArray[j][0] &&
          this.occupiedCoords[i][1] === coordsArray[j][1]
        ) {
          return false;
        }
      }
    }

    this.shipsAndLocations.push({
      ship: newShip,
      coordsArray,
    });

    this.occupiedCoords = this.occupiedCoords.concat(coordsArray);

    return true;
  }

  receiveAttack(x, y) {
    for (let i = 0; i < this.shipsAndLocations.length; i += 1) {
      for (
        let j = 0;
        j < this.shipsAndLocations[i].coordsArray.length;
        j += 1
      ) {
        if (
          x === this.shipsAndLocations[i].coordsArray[j][0] &&
          y === this.shipsAndLocations[i].coordsArray[j][1]
        ) {
          this.shipsAndLocations[i].ship.hit();
          return true;
        }
      }
    }

    return false;
  }

  allSunk() {
    for (let i = 0; i < this.shipsAndLocations.length; i += 1) {
      if (!this.shipsAndLocations[i].ship.isSunk()) {
        return false;
      }
    }
    return true;
  }

  getOccupiedCoords() {
    return this.occupiedCoords;
  }

  getShipsAndLocations() {
    return this.shipsAndLocations;
  }
}

export default Gameboard;
