const isUnique = function(str) {
    const hash = {};
    for (let i = 0; i < str.length; i++) {
        if (hash[str[i]]) {
            return false;
        } else {
            hash[str[i]] = str[i];
        }
    }
    return true;
}

const isUnique2 = function(str) {
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (i < j && str[i] === str[j]) {
                return false;
            }
        }
    }
    return true;
}
console.log(isUnique('abbc'));