var inRange = function(num, max) {
    if (num < 0 || num >= max) return false;
    return true;
}

var numIslands = function(grid) {
    if (grid.length === 0) return 0;
    const rows = grid.length;
    const cols = grid[0].length;
    const directions = [[1,0], [-1,0], [0,1], [0,-1]];
    let visited = {};
    let islands = 0;
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === "1" && !visited[[r,c]]) {
                // bfs(r,c)
                let queue = [[r,c]];
                visited[[r,c]] = true;
                while(queue.length) {
                    let [row,col] = queue.pop();
                    for (let i = 0; i < directions.length; i++) {
                        if (inRange(row + directions[i][0], rows) && inRange(col + directions[i][1], cols) && grid[row+directions[i][0]][col+directions[i][1]] === "1" && !visited[[row+directions[i][0],col+directions[i][1]]]){
                            queue.push([row + directions[i][0], col + directions[i][1]]);
                            visited[[row + directions[i][0], col + directions[i][1]]] = true;
                        }
                    }
                }
                islands += 1;
            }
        }
    }
    return islands;
};