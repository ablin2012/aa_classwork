var plusOne = function(digits) {
    let idx = digits.length - 1;
    let added = false;
    while (!added) {
        if (idx < 0) {
            digits.unshift(1);
            return digits;
        }
        added = true;
        if (digits[idx] === 9) {
            added = false;
            digits[idx] = 0;
            idx -= 1;
        } else {
            digits[idx] += 1;
        }
    };
    return digits;
};