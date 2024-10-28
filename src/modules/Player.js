import GameBoard from "./gameboard"

class Player {
    constructor() {
        this.gameBoard = new GameBoard();
    }

    getBoard() {
        return this.gameBoard;
    }

    resetBoard() {
        this.gameBoard = new GameBoard();
    }

    computerPlaceShips() {
        function placeShip(x, y, length, board, vertical) {
            return board.addShip([x, y], length, vertical);
        }

        const boatLengths = [2, 3, 3, 4, 5, 0]
        let current = boatLengths.shift();
        while (boatLengths.length > 0) {
            const cords = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
            const x = placeShip(cords[0], cords[1], current, this.getBoard(), Math.floor(Math.random() * 2));
            if (x) current = boatLengths.shift();
        }
    }

    computerMove(playerBoard) {
        if (playerBoard.allBoatsSunk()) return false;
        function attack() {
            return [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]
        }
        while (true) {
            const cords = attack();
            if (!playerBoard.board[cords[0]][cords[1]][1]) {
                
                playerBoard.receiveAttack([cords[0], cords[1]]);
                return
            }
        }
    }
}

export default Player;