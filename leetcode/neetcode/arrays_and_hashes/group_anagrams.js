var isAnagram = function(str1, str2) {
    if (str1.length != str2.length) return false;
    let counts = {};
    for (let i = 0; i < str1.length; i++) {
        if (!counts[str1[i]]) {
            counts[str1[i]] = 1;
        } else {
            counts[str1[i]] += 1;
        }
    }
    for (let j = 0; j < str2.length; j++) {
        if (!counts[str2[j]]) {
            return false;
        } else {
            counts[str2[j]] -= 1;
        }
    }
    let countVals = Object.values(counts);
    for (let k = 0; k < countVals.length; k++) {
        if (countVals[k] > 0) return false
    }
    return true;
}

var groupAnagrams = function(strs) {
    const first = strs.pop();
    let groups = [[first]];
    let added = false;
    while (strs.length) {
        added = false;
        let curr = strs.pop();
        for (let i = 0; i < groups.length; i++) {
            if (isAnagram(curr, groups[i][0])) {
                groups[i].push(curr);
                added = true;
            }
        }
        if (!added) {
            groups.push([curr]);
        }
    }
    return groups;
};