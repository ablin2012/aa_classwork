var isAnagram = function(s, t) {
    if (s.length != t.length) return false;
    let counts = {};
    for (let i = 0; i < s.length; i++) {
        if (!counts[s[i]]) {
            counts[s[i]] = 1;
        } else {
            counts[s[i]] += 1;
        }
    }
    for (let j = 0; j < t.length; j++) {
        if (!counts[t[j]]) {
            return false;
        } else {
            counts[t[j]] -= 1;
        }
    }
    const countVals = Object.values(counts);
    for (let k = 0; k < countVals.length; k++) {
        if (countVals[k] > 0) return false
    }
    return true;
};