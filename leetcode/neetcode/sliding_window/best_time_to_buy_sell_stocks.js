var maxProfit = function(prices) {
    if (prices.length < 2) return 0;
    let profit = 0;
    let min = prices[0];
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] - min > profit) {
            profit = prices[i] - min;
        };
        if (prices[i] < min) {
            min = prices[i];
        };
    };
    return profit;
};