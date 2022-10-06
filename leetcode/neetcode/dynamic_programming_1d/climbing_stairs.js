var climbStairs = function(n) {
    if (n === 1) return 1;
    let steps = {};
    steps[0] = 1;
    steps[1] = 1;
    for (let i = 2; i <= n; i++) {
        steps[i] = steps[i-1] + steps[i-2];
    };
    return steps[n];
};