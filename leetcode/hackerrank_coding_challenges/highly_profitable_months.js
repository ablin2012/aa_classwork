const countHighlyProfitableMonths = function(stockPrices, k) {
    let count = 1;
    let ans = 0;
    for (let i = 0; i < stockPrices.length - 1; i++) {
        if (stockPrices[i] < stockPrices[i+1]) {
            count += 1;
        } else {
            if (count >= k) {
                ans = ans + count - k + 1;
            }
            count = 1;
        }
    }
    if (count >= k) {
        ans = ans + count - k + 1;
    }
    return ans;
}

console.log(countHighlyProfitableMonths([5,3,5,7,8,9,2,3,4], 3));