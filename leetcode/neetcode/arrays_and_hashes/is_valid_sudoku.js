var isValidSudoku = function(board) {
    let row = {};
    let col = {};
    let sqr = {};
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            let curr = board[i][j]
            let sqrCoords = [Math.floor(i/3), Math.floor(j/3)];
            if (curr != ".") {
                if (row[i]) {
                    if (row[i].includes(curr)) return false;
                    row[i].push(curr);
                } else {
                    row[i] = [curr];
                };
                if (col[j]) {
                    if (col[j].includes(curr)) return false;
                    col[j].push(curr);
                } else {
                    col[j] = [curr];
                }
                if (sqr[sqrCoords]) {
                    if (sqr[sqrCoords].includes(curr)) return false;
                    sqr[sqrCoords].push(curr);
                } else {
                    sqr[sqrCoords] = [curr];
                }
            }
        }
    }
    return true;
};