import Ship from './Ship.js';

class GameBoard {
    constructor() {
        this.board = [];
        
        for (let i = 0; i < 10; i++) {
            this.board.push([]);
            for (let j = 0; j < 10; j++) {
                this.board[i].push([]);
            }
        }
    }

    addShip(cords, length, vertical = false) {
        if (!vertical && cords[0] + length > 9) return false;
        if (vertical && cords[1] + length > 9) return false;

        const ship = new Ship(length);

        if (vertical) {
            for (let i = 0; i < length; i++) {
                this.board[cords[0]][cords[1]+i].push(ship);
            }
            return true;
        }

        for (let i = 0; i < length; i++) {
            this.board[cords[0]+i][cords[1]].push(ship);
        }
        return true;
    }

    receiveAttack(cords) {
        const cell = this.board[cords[0]][cords[1]];
        if (cell[0] instanceof Ship) {
            if (cell[1] !== 'hit') cell[0].hit();
            cell[1] = 'hit';
            return 'hit';
        }
        cell[1] = 'hit';
        return 'miss';
    }

    allBoatsSunk() {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                if (this.board[i][j][0] instanceof Ship && !this.board[i][j][0].isSunk()) return false;
            }
        }

        return true;
    }
}

export default GameBoard;