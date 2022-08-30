const rotateMatrix = function(matrix) {
    // let ans = new Array(matrix.length).fill().map(() => new Array(matrix.length).fill())
    if (matrix.length === 0 || matrix.length != matrix[0].length) return false;
    let n = matrix.length;
    for (let layer = 0; layer < Math.floor(n/2); layer++) {
        let first = layer;
        let last = n - layer - 1;
        for (let i = first; i < last; i++) {
            let offset = i - first;
            let top = matrix[first][i];
            matrix[first][i] = matrix[last - offset][first]; // left to top
            matrix[last - offset][first] = matrix[last][last - offset]; // bottom to left
            matrix[last][last - offset] = matrix[i][last]; // right to bottom
            matrix[i][last] = top; // top to right
        }
    }
    return true;
}