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

const validSudoku = function(matrix) {
	let row = {};
	let col = {};
	let sqr = {};
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			let curr = matrix[i][j];
			let sqrCoords = [Math.floor(i/3), Math.floor(j/3)];
			if (curr != ".") {
				if (row[i]) {
					// row[i].has(curr)
					if (row[i][curr]) return false;
					row[i][curr] = true;
				} else {
					// row[i] = new Set();
					// row[i].add(curr);
					row[i] = {curr: true};
				};
				if (col[j]) {
					if (col[j].includes(curr)) return false;
					col[j].push(curr);
				} else {
					col[j] = [curr];
				};
				if (sqr[sqrCoords]) {
					if (sqr[sqrCoords].includes(curr)) return false;
					sqr[sqrCoords].push(curr);
				} else {
					sqr[sqrCoords] = [curr];
				};
				if (!validate(row, i, curr) || !validate(col, j, curr) || !validate(sqr, sqrCoords, curr)) return false;
			}
		}
	};
	return true;
};

const validate = function(tracker, key, value) {
	if (tracker) {
		if (tracker[key][value]) return false;
		tracker[key][value] = true;
	} else {
		tracker[key] = {value: true};
	}
	return true;
}
