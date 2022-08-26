const urlify = function(str) {
    return str.split(' ').join('%20');
}

const urlify2 = function(str) {
    let ans = '';
    let space = false;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            space = true;
        } else {
            if (space) {
                space = false;
                ans = ans + '%20' + str[i];
            } else {
                ans += str[i];
            }
        }
    }
    return ans
}
console.log(urlify2('a b c'));