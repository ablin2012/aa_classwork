const maxSumMinProduct = function(array) {
    let ans = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length + 1; j++) {
            if (i < j) {
                let sub = array.slice(i,j);
                let prod = Math.min(...sub) * sub.reduce((a,b) => a + b, 0);
                if (prod > ans) {
                    ans = prod;
                }
            }
        }
    }
    return ans;
}

const maxSumMinProduct2 = function(array) {
    let ans = 0;
    let stack = [];
    let prefix = [0];
    for (let i = 0; i < array.length; i++) {
        prefix.push(prefix[prefix.length - 1] + array[i]);
    }
    for (let i = 0; i < array.length; i++) {
        newStart = i;
        while (stack && stack[stack.length - 1][1]) {
             let [start, val] = stack.pop();
             let total = prefix[i] - prefix[start];
             ans = Math.max(ans, val * total);
             newStart = start;
        }
        stack[newStart] = array[i];
    }
    for (let i = 0; i < stack.length; i++) {
        let total = prefix[array.length] - prefix[stack[i][0]];
        ans = Math.max(ans, stack[i][1] * total);
    }
    return ans;
}
console.log(maxSumMinProduct([1,2,3,2]));