const strRotation = function (str1, str2) {
    let rotation = 0;
    let start = 0;
    if (str1.length != str2.length) return false;
    for (let i = 1; i <= str1.length; i++) {
        let sub = str2.slice(start, i)
        if (!isSubstring(str1, sub)) {
            rotation += 1;
            start = i;
        }
    }
    if (rotation === 1) return true;
    return false;
}