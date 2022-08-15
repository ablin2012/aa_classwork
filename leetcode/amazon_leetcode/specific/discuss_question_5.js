const leastDifference = function(array) {
    let sorted = array.sort();
    let mid = Math.floor(sorted.length/2);
    let left = sorted.slice(0,mid);
    let right = sorted.slice(mid+1);
    let lmid = left[Math.floor(left.length/2)];
    let rmid = right[Math.floor(right.length/2)];
    let sum = 0;
    for (let i = 0; i < sorted.length; i++) {
        sum += Math.min(Math.abs(sorted[i] - lmid), Math.abs(sorted[i] - rmid));
    }
    return [sum, [lmid,rmid]];
}

console.log(leastDifference([2, 3, 6, 7]));