import './style.css';
import Player from './modules/Player.js'
import populateBoards from './modules/ui.js';

const turn = 0;

const Player1 = new Player();
const Player2 = new Player();
const Board1 = Player1.getBoard();
const Board2 = Player2.getBoard();

Player2.computerPlaceShips();

populateBoards(Board1.board, Board2.board);

const container = document.querySelector('#container');

container.addEventListener("click", (e) => {
    if (e.target.classList.contains('cell')) {
        const y = Array.from(e.target.parentElement.children).indexOf(e.target);
        const x = Array.from(e.target.parentElement.parentElement.children).indexOf(e.target.parentElement);
        if (Board2.receiveAttack([x, y])) {
            Player2.computerMove(Board1);
        }
        populateBoards(Board1.board, Board2.board);
    }
})