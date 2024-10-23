import GameBoard from './GameBoard.js';

const board = new GameBoard();
test('add ship', (bd = board) => {
    expect(bd.addShip([0, 0], 2)).toBe(true);
    expect(bd.addShip([0, 1], 3)).toBe(true);
    expect(bd.addShip([7, 1], 3)).toBe(false);
})

test('hit cell', (bd = board) => {
    expect(bd.receiveAttack([0,0])).toBe('hit');
    expect(bd.receiveAttack([0,1])).toBe('hit');
    expect(bd.receiveAttack([3,1])).toBe('miss');
})

test('all boats sunk', (bd = board) => {
    expect(bd.allBoatsSunk()).toBe(false);
    expect(bd.receiveAttack([1,0])).toBe('hit');
    expect(bd.receiveAttack([1,1])).toBe('hit');
    expect(bd.receiveAttack([2,1])).toBe('hit');
    expect(bd.allBoatsSunk()).toBe(true);
})