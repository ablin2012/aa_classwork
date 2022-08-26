const palPerms = function(str) {
    let counts = {};
    for (let i = 0; i < str.length; i++) {
        if (counts[str[i]]) {
            counts[str[i]] += 1;
        } else {
            counts[str[i]] = 1;
        }
    }
    let values = Object.values(counts);
    let odds = 1;
    for (let i = 0; i < values.length; i++) {
        if (values[i] % 2 === 1) {
            if (odds > 0) {
                odds -= 1;
            } else {
                return false;
            }
        }
    }
    return true;
}

console.log(palPerms('aab'))