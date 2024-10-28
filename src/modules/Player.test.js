import Player from './Player.js';
import GameBoard from './gameboard.js';

test('Instantiate Player', () => {
    expect(new Player() instanceof Player).toBe(true);
})

test('Get Player Board', () => {
    expect(new Player().getBoard() instanceof GameBoard).toEqual(true);
})