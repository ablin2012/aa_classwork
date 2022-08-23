function toolchanger(tools, startIndex, target) {
    // Write your code here
    let count = 0;
    let left = startIndex;
    let right = startIndex;
    while (count < tools.length) {
        count += 1;
        left = (left - 1 + tools.length)%tools.length;
        right = (right + 1)%tools.length;
        if (tools[left] === target || tools[right] === target) {
            return count;
        }
    }
}