import Gameboard from "../../src/modules/Gameboard";

// Testing single vertical placements
test("placing a ship of length 5 vertically at coordinates [0,0] returns valid coords", () => {
  const testGameboard = new Gameboard(10, 10);
  const valid = testGameboard.placeShip(5, 0, 0, false);

  expect(testGameboard.getOccupiedCoords()).toEqual([
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 0],
  ]);

  const shipAndLocation = testGameboard.getShipsAndLocations()[0];

  expect(shipAndLocation.coordsArray).toEqual([
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 0],
  ]);

  expect(valid).toBe(true);
});

test("placing a ship of length 3 vertically at coordinates [4,5] returns valid coords", () => {
  const testGameboard = new Gameboard(10, 10);
  const valid = testGameboard.placeShip(3, 4, 5, false);

  expect(testGameboard.getOccupiedCoords()).toEqual([
    [4, 5],
    [5, 5],
    [6, 5],
  ]);

  const shipAndLocation = testGameboard.getShipsAndLocations()[0];

  expect(shipAndLocation.coordsArray).toEqual([
    [4, 5],
    [5, 5],
    [6, 5],
  ]);

  expect(valid).toBe(true);
});

test("placing a ship of length 1 vertically at coordinates [9,9] returns valid coords", () => {
  const testGameboard = new Gameboard(10, 10);
  const valid = testGameboard.placeShip(1, 9, 9, false);

  expect(testGameboard.getOccupiedCoords()).toEqual([[9, 9]]);

  const shipAndLocation = testGameboard.getShipsAndLocations()[0];

  expect(shipAndLocation.coordsArray).toEqual([[9, 9]]);

  expect(valid).toBe(true);
});

test("placing a ship of length 5 vertically at coordinates [9,9] is invalid", () => {
  const testGameboard = new Gameboard(10, 10);
  const invalid = testGameboard.placeShip(5, 9, 9, false);

  expect(testGameboard.getOccupiedCoords()).toEqual([]);

  expect(invalid).toBe(false);
});

test("placing a ship of length 5 vertically at coordinates [6,9] is invalid", () => {
  const testGameboard = new Gameboard(10, 10);
  const invalid = testGameboard.placeShip(5, 6, 9, false);

  expect(testGameboard.getOccupiedCoords()).toEqual([]);

  expect(invalid).toBe(false);
});

test("placing a ship of length 1 vertically at coordinates [10,10] is invalid", () => {
  const testGameboard = new Gameboard(10, 10);
  const invalid = testGameboard.placeShip(1, 10, 10, false);

  expect(testGameboard.getOccupiedCoords()).toEqual([]);

  expect(invalid).toBe(false);
});

// Testing single horizontal placements
test("placing a ship of length 5 horizontally at coordinates [0,0] returns valid coords", () => {
  const testGameboard = new Gameboard(10, 10);
  const valid = testGameboard.placeShip(5, 0, 0, true);

  expect(testGameboard.getOccupiedCoords()).toEqual([
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
  ]);

  const shipAndLocation = testGameboard.getShipsAndLocations()[0];

  expect(shipAndLocation.coordsArray).toEqual([
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
  ]);

  expect(valid).toBe(true);
});

test("placing a ship of length 4 horizontally at coordinates [7,4] returns valid coords", () => {
  const testGameboard = new Gameboard(10, 10);
  const valid = testGameboard.placeShip(4, 7, 4, true);

  expect(testGameboard.getOccupiedCoords()).toEqual([
    [7, 4],
    [7, 5],
    [7, 6],
    [7, 7],
  ]);

  const shipAndLocation = testGameboard.getShipsAndLocations()[0];

  expect(shipAndLocation.coordsArray).toEqual([
    [7, 4],
    [7, 5],
    [7, 6],
    [7, 7],
  ]);

  expect(valid).toBe(true);
});

test("placing a ship of length 2 horizontally at coordinates [9,8] returns valid coords", () => {
  const testGameboard = new Gameboard(10, 10);
  const valid = testGameboard.placeShip(2, 9, 8, true);

  expect(testGameboard.getOccupiedCoords()).toEqual([
    [9, 8],
    [9, 9],
  ]);

  const shipAndLocation = testGameboard.getShipsAndLocations()[0];

  expect(shipAndLocation.coordsArray).toEqual([
    [9, 8],
    [9, 9],
  ]);

  expect(valid).toBe(true);
});

test("placing a ship of length 5 horizontally at coordinates [9,9] is invalid", () => {
  const testGameboard = new Gameboard(10, 10);
  const invalid = testGameboard.placeShip(5, 9, 9, true);

  expect(testGameboard.getOccupiedCoords()).toEqual([]);

  expect(invalid).toBe(false);
});

test("placing a ship of length 5 horizontally at coordinates [9,6] is invalid", () => {
  const testGameboard = new Gameboard(10, 10);
  const invalid = testGameboard.placeShip(5, 9, 6, true);

  expect(testGameboard.getOccupiedCoords()).toEqual([]);

  expect(invalid).toBe(false);
});

test("placing a ship of length 1 horizontally at coordinates [10,10] is invalid", () => {
  const testGameboard = new Gameboard(10, 10);
  const invalid = testGameboard.placeShip(1, 10, 10, true);

  expect(testGameboard.getOccupiedCoords()).toEqual([]);

  expect(invalid).toBe(false);
});

// Testing multiple placements

const testGameboard = new Gameboard(10, 10);

test("placing a ship of length 3 vertically at coordinates [0,0] returns valid coords", () => {
  const valid = testGameboard.placeShip(3, 0, 0, false);

  expect(testGameboard.getOccupiedCoords()).toEqual([
    [0, 0],
    [1, 0],
    [2, 0],
  ]);

  const ship0Location = testGameboard.getShipsAndLocations()[0];

  expect(ship0Location.coordsArray).toEqual([
    [0, 0],
    [1, 0],
    [2, 0],
  ]);

  expect(valid).toBe(true);
});

test("placing a ship of length 5 horizontally at coordinates [5,5] returns valid coords", () => {
  const valid = testGameboard.placeShip(5, 5, 5, true);

  expect(testGameboard.getOccupiedCoords()).toEqual([
    [0, 0],
    [1, 0],
    [2, 0],
    [5, 5],
    [5, 6],
    [5, 7],
    [5, 8],
    [5, 9],
  ]);

  const ship0Location = testGameboard.getShipsAndLocations()[0];

  expect(ship0Location.coordsArray).toEqual([
    [0, 0],
    [1, 0],
    [2, 0],
  ]);

  const ship1Location = testGameboard.getShipsAndLocations()[1];

  expect(ship1Location.coordsArray).toEqual([
    [5, 5],
    [5, 6],
    [5, 7],
    [5, 8],
    [5, 9],
  ]);

  expect(valid).toBe(true);
});

test("placing a ship of length 4 vertically at coordinates [5,3] returns valid coords", () => {
  const valid = testGameboard.placeShip(4, 5, 3, false);

  expect(testGameboard.getOccupiedCoords()).toEqual([
    [0, 0],
    [1, 0],
    [2, 0],
    [5, 5],
    [5, 6],
    [5, 7],
    [5, 8],
    [5, 9],
    [5, 3],
    [6, 3],
    [7, 3],
    [8, 3],
  ]);

  const ship0Location = testGameboard.getShipsAndLocations()[0];

  expect(ship0Location.coordsArray).toEqual([
    [0, 0],
    [1, 0],
    [2, 0],
  ]);

  const ship1Location = testGameboard.getShipsAndLocations()[1];

  expect(ship1Location.coordsArray).toEqual([
    [5, 5],
    [5, 6],
    [5, 7],
    [5, 8],
    [5, 9],
  ]);

  const ship2Location = testGameboard.getShipsAndLocations()[2];

  expect(ship2Location.coordsArray).toEqual([
    [5, 3],
    [6, 3],
    [7, 3],
    [8, 3],
  ]);

  expect(valid).toBe(true);
});

test("placing a ship of length 1 horizontally at coordinates [0,1] returns valid coords", () => {
  const valid = testGameboard.placeShip(1, 0, 1, true);

  expect(testGameboard.getOccupiedCoords()).toEqual([
    [0, 0],
    [1, 0],
    [2, 0],
    [5, 5],
    [5, 6],
    [5, 7],
    [5, 8],
    [5, 9],
    [5, 3],
    [6, 3],
    [7, 3],
    [8, 3],
    [0, 1],
  ]);

  const ship0Location = testGameboard.getShipsAndLocations()[0];

  expect(ship0Location.coordsArray).toEqual([
    [0, 0],
    [1, 0],
    [2, 0],
  ]);

  const ship1Location = testGameboard.getShipsAndLocations()[1];

  expect(ship1Location.coordsArray).toEqual([
    [5, 5],
    [5, 6],
    [5, 7],
    [5, 8],
    [5, 9],
  ]);

  const ship2Location = testGameboard.getShipsAndLocations()[2];

  expect(ship2Location.coordsArray).toEqual([
    [5, 3],
    [6, 3],
    [7, 3],
    [8, 3],
  ]);

  const ship3Location = testGameboard.getShipsAndLocations()[3];

  expect(ship3Location.coordsArray).toEqual([[0, 1]]);

  expect(valid).toBe(true);
});
