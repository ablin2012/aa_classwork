const hackerland = function(str) {
    let sorted = false;
    let count = 0;
    let idx = 0;
    let arr = str.split('')
    while (!sorted) {
        sorted = true;
        idx = 0;
        while (idx < arr.length && idx + 1 < arr.length) {
            if (arr[idx]+arr[idx+1] === '01') {
                [arr[idx], arr[idx+1]] = [arr[idx+1], arr[idx]];
                idx += 2;
                sorted = false;
            } else {
                idx += 1;
            }
        }
        if (!sorted) {
            count += 1;
        }
    }
    return count;
}

console.log(hackerland('001011'))