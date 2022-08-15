const zeroSubs = function(n) {
    let zero = [1,1,1,1];
    let combos = 2;
    let counter = n;
    let zidx = 0;
    while (counter > 0) {
        zero[zidx] += 1;
        counter -= combos;
        combos *= 2;
        zidx = (zidx + 1) % 4;
    }
    return zero.reduce((a,b) => a + b, 0);
}

console.log(zeroSubs(4))