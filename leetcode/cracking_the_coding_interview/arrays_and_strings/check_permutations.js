const checkPerm = function(str1, str2) {
    let counts = {};
    if (str1.length != str2.length) return false;
    for (let i = 0; i < str1.length; i++) {
        if (counts[str1[i]]) {
            counts[str1[i]] += 1;
        } else {
            counts[str1[i]] = 1;
        }
    }
    for (let i = 0; i < str2.length; i++) {
        if (counts[str2[i]]) {
            counts[str2[i]] -= 1;
        } else {
            return false;
        }
    }
    let values = Object.values(counts);
    for (let i = 0; i < values.length; i++) {
        if (values[i] != 0) {
            return false;
        }
    }
    return true;
}

console.log(checkPerm('abc', 'bac'))