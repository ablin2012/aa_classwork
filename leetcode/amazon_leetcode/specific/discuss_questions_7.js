const minMoney = function(costs) {
    let ans = 0;
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < costs.length - 1; i++) {
            if (costs[i][0] - costs[i][1] < costs[i+1][0] - costs[i+1][1]) {
                [costs[i], costs[i+1]] = [costs[i+1], costs[i]];
                sorted = false;
            } else if (costs[i][0] - costs[i][1] === costs[i+1][0] - costs[i+1][1]) {
                if (costs[i][0] > costs[i+1][0]) {
                    [costs[i], costs[i+1]] = [costs[i+1], costs[i]];
                    sorted = false;
                }
            }
        }
    }
    for (let i = 0; i < costs.length - 1; i++) {
        ans = ans + costs[i][0] - costs[i][1];
    }
    ans += costs[costs.length-1][0];
    return ans;
}

console.log(minMoney([[3,1],[4,2],[6,0]]));