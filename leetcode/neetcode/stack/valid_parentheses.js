var isValid = function(s) {
    let stack = [];
    const parenths = {'}': '{', ']': '[', ')': '('};
    for (let i = 0; i < s.length; i++) {
        if (parenths[s[i]]) {
            let popped = stack.pop();
            if (popped != parenths[s[i]]) return false
        } else {
            stack.push(s[i]);
        }
    }
    if (stack.length) return false;
    return true;
};