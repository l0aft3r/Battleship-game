import Ship from "./Ship.js";

const ship = new Ship(2);

test('Ship is sunk', () => {
    expect(ship.isSunk()).toBe(false);
    ship.hit();
    expect(ship.isSunk()).toBe(false);
    ship.hit();
    expect(ship.isSunk()).toBe(true);
})