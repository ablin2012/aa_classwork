var luckyNumbers  = function(matrix) {
    let minRow = {};
    let maxCol = {};
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            let curr = matrix[i][j];
            if (minRow[i] != undefined) {
                if (minRow[i] > curr) {
                    minRow[i] = curr;
                }
            } else {
                minRow[i] = curr;
            }
            if (maxCol[j] != undefined) {
                if (maxCol[j] < curr) {
                    maxCol[j] = curr;
                }
            } else {
                maxCol[j] = curr;
            }
        }
    }
    let ans = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (minRow[i] === maxCol[j]) ans.push(matrix[i][j]);
        }
    }
    return ans;
};