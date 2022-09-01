const countMinimumOperations = function(password) {
    let cons = 0;
    let vows = 0;
    let consonants = {b: 1, c: 2, d: 1, f:1, g:2, h:1, j: 1, k: 2, l: 3, m: 2, n:1, p:1, q:2, r:3, s:2, t:1, v: 1, w:2, x:3, y:4, z:5}
    let vowels = 'aeiou';
    let operations = 0;
    for (let i = 0; i < password.length; i++) {
        if (vowels.includes(password[i])) {
            vows += 1;
        } else {
            cons += 1;
        }
    }
    if (cons === vows) {
        return operations;
    } else {
        let diff = cons - vows;
        let steps = [];
        if (diff < 0) return Math.abs(diff/2);
        for (let i = 0; i < password.length; i++) {
            if (consonants[password[i]]) {
                steps.push(consonants[password[i]]);
            }
        }
        steps = steps.sort()
        for (let i = 0; i < diff/2; i++) {
            operations += steps[i];
        }
    }
    return operations;
}

console.log(countMinimumOperations('abcdef'));