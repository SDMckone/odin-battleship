import Ship from "../../src/modules/Ship";

test("ship of length 4 should not be sunk with 0 hits", () => {
  const testShip = new Ship(4);
  expect(testShip.isSunk()).toBe(false);
});

test("ship of length 4 should not be sunk with 1 hit", () => {
  const testShip = new Ship(4);
  expect(testShip.isSunk()).toBe(false);
});

test("ship of length 4 should be sunk with 4 hits", () => {
  const testShip = new Ship(4);
  testShip.hit();
  testShip.hit();
  testShip.hit();
  testShip.hit();
  expect(testShip.isSunk()).toBe(true);
});
