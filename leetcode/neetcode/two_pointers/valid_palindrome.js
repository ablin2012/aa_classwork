var isLetter = function(char) {
    let nums = "1234567890"
    if ((/[a-zA-Z]/).test(char) || nums.includes(char)) return true;
    return false;
}

var isPalindrome = function(s) {
    if (s.length <= 1) return true;
    let start = 0;
    let end = s.length - 1;
    while (start < end) {
        while (!isLetter(s[start])) {
            start += 1;
        }
        while (!isLetter(s[end])) {
            end -= 1;
        }
        if (start > s.length || end < 0) return true;
        if (s[start].toLowerCase() != s[end].toLowerCase()) return false;
        end -= 1;
        start += 1;
    }
    return true;
};