const container = document.querySelector('#container')
let board1 = document.querySelector('#board1');
let board2 = document.querySelector('#board2');

function dragoverHandler(ev) {
    ev.preventDefault();
    ev.dataTransfer.setData("application/my-app", ev.target.id);
    ev.dataTransfer.dropEffect = "move";
    ev.target.classList.add('cell-dragover');
}

function dragleaveHandler(ev) {
    ev.target.classList.remove('cell-dragover');
}

function dragdropHandler(ev) {

}

function populateBoards(bd1 = [], bd2 = [], friendly = true) {
    function populateBoard(board, info, fr) {
        for (let i = 0; i < 10; i++) {
            const row = document.createElement('div');
            row.classList.add('row');
            for (let j = 0; j < 10; j++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.ondragover = dragoverHandler;
                cell.ondragleave = dragleaveHandler;
                if (info[i][j][0]) {
                    if (fr && info[i][j][1] === "hit") {
                        cell.classList.add('cell-friendly-hit');
                    } else if (fr && !info[i][j][1]) {
                        cell.classList.add('cell-friendly');
                    } else if (info[i][j][1]) {
                        cell.classList.add('cell-hit');
                    }
                } else if (info[i][j][1] === "hit") {
                    cell.classList.add('cell-missed');
                }
                row.appendChild(cell);
            }
            board.appendChild(row);
        }
    }
    board1.remove();
    board2.remove();

    board1 = document.createElement('div');
    board1.id = 'board1';
    container.appendChild(board1);
    board2 = document.createElement('div');
    board2.id = 'board2';
    container.appendChild(board2);

    populateBoard(board1, bd1, friendly);
    populateBoard(board2, bd2, !friendly);
}

export default populateBoards;