const zeroMatrix = function(matrix) {
    let row = {};
    let col = {};
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                row[i] = true;
                col[j] = true;
            }
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (row[i] || col[j]) {
                matrix[i][j] = 0;
            }
        }
    }
    return matrix;
}

console.log(zeroMatrix([[1,1,1],[1,0,1],[1,1,1]]))