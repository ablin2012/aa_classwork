function getUniqueCharacter(s) {
    // Write your code here
    let count = {};
    for (let i = 0; i < s.length; i++) {
        if (count[s[i]] != undefined) {
            count[s[i]] += 1;
        } else {
            count[s[i]] = 1;
        }
    }
    for (let i = 0; i < s.length; i++) {
        if (count[s[i]] === 1) {
            return i + 1
        }
    }
    return -1;
}