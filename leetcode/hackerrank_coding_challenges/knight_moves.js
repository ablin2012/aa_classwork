function minMoves(n, startRow, startCol, endRow, endCol) {
    // Write your code here
    let queue =[[startRow,startCol]]
    let moves = 0;
    while (queue.length) {
        moves += 1;
        let newQueue = [];
        for (let i = 0; i < queue.length; i++) {
            let row = queue[i][0];
            let col = queue[i][1];
            let r1 = row + 1;
            let r2 = row - 1;
            let r3 = row + 2;
            let r4 = row - 2;
            let c1 = col + 1;
            let c2 = col - 1;
            let c3 = col + 2;
            let c4 = col - 2;
            if (r1 > 0 && r1 < n && c3 > 0 && c3 < n) {
                if (r1 === endRow && c3 === endCol) {
                    return moves;
                } else {
                    newQueue.push([r1,c3]);
                }
            }
            if (r1 > 0 && r1 < n && c4 > 0 && c4 < n) {
                if (r1 === endRow && c4 === endCol) {
                    return moves;
                } else {
                    newQueue.push([r1,c4]);
                }
            }
            if (r2 > 0 && r2 < n && c3 > 0 && c3 < n) {
                if (r2 === endRow && c3 === endCol) {
                    return moves;
                } else {
                    newQueue.push([r2,c3]);
                }
            }
            if (r2 > 0 && r2 < n && c4 > 0 && c4 < n) {
                if (r2 === endRow && c4 === endCol) {
                    return moves;
                } else {
                    newQueue.push([r2,c4]);
                }
            }
            if (r3 > 0 && r3 < n && c1 > 0 && c1 < n) {
                if (r3 === endRow && c1 === endCol) {
                    return moves;
                } else {
                    newQueue.push([r3,c1]);
                }
            }
            if (r3 > 0 && r3 < n && c2 > 0 && c2 < n) {
                if (r3 === endRow && c2 === endCol) {
                    return moves;
                } else {
                    newQueue.push([r3,c2]);
                }
            }
            if (r4 > 0 && r4 < n && c1 > 0 && c1 < n) {
                if (r4 === endRow && c1 === endCol) {
                    return moves;
                } else {
                    newQueue.push([r4,c1]);
                }
            }
            if (r4 > 0 && r4 < n && c2 > 0 && c2 < n) {
                if (r4 === endRow && c2 === endCol) {
                    return moves;
                } else {
                    newQueue.push([r4,c2]);
                }
            }
        }
        queue = newQueue;
    }
    return -1;
}

function minMoves2(n, startRow, startCol, endRow, endCol) {
    // Write your code here
    let moves = [[1,2], [-1,2], [-1,-2], [1,-2], [2,1], [2,-1], [-2,-1], [-2, 1]];
    let queue = [[startRow, startCol]];
    let seen = [[startRow, startCol]];
    let steps = 0;
    let row;
    let col;
    while (queue.length) {
        for (let i = 0; i < queue.length; i++) {
            [row,col] = queue.shift();
            if (row === endRow && col === endCol) {
                return steps;
            }
            for (let j = 0; j < moves.length; j++) {
                let currRow = row + moves[j][0];
                let currCol = col + moves[j][1];
                if (!seen.includes([currRow,currCol]) && currRow > 0 && currRow < n && currCol > 0 && currCol < n) {
                    queue.push([currRow,currCol]);
                    seen.push([currRow,currCol]);
                }
            }
        }
        steps += 1;
    }
    return -1;  
}