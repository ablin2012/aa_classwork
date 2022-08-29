const strCompress = function(str) {
    let ans = [];
    let count = '';
    let curr = '';
    for (let i = 0; i < str.length; i++) {
        if (curr != str[i]) {
            ans.push(curr);
            ans.push(count);
            curr = str[i];
            count = 1;
        } else {
            count += 1
        }
    }
    ans.push(curr);
    ans.push(count);
    console.log(ans)
    if (ans.length - 2 > str.length) return str;
    return ans.join('');
}

console.log(strCompress('aabcccccdaaa'))
console.log(strCompress('abcd'))