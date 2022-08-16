const demolitionRobot = function(grid) {
    let queue = [[0,0]];
    let count = 0;
    let newQueue = [];
    while (queue.length) {
        count += 1;
        newQueue = [];
        for (let i = 0; i < queue.length; i++) {
            if (queue[i][0] + 1 > 0 && queue[i][0] + 1 < grid.length) {
                if (grid[queue[i][0] + 1][queue[i][1]] === 9) {
                    return count;
                } else if (grid[queue[i][0] + 1][queue[i][1]] === 1) {
                    newQueue.push([queue[i][0] + 1, queue[i][1]])
                }
            }
            if (queue[i][0] - 1 > 0 && queue[i][0] - 1 < grid.length) {
                if (grid[queue[i][0] - 1][queue[i][1]] === 9) {
                    return count;
                } else if (grid[queue[i][0] - 1][queue[i][1]] === 1) {
                    newQueue.push([queue[i][0] - 1, queue[i][1]])
                }
            }
            if (queue[i][1] + 1 > 0 && queue[i][1] + 1 < grid.length) {
                if (grid[queue[i][0]][queue[i][1] + 1] === 9) {
                    return count;
                } else if (grid[queue[i][0]][queue[i][1] + 1] === 1) {
                    newQueue.push([queue[i][0], queue[i][1] + 1])
                }
            }
            if (queue[i][1] - 1 > 0 && queue[i][1] - 1 < grid.length) {
                if (grid[queue[i][0]][queue[i][1] - 1] === 9) {
                    return count;
                } else if (grid[queue[i][0]][queue[i][1] - 1] === 1) {
                    newQueue.push([queue[i][0], queue[i][1] - 1])
                }
            }
        }
        queue = newQueue;
    }
    return null;
}

console.log(demolitionRobot([[1,0,0],[1,0,0],[1,9,1]]))