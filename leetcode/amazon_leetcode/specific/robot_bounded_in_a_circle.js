let queue = [root];
let averages = [];
while(queue.length) {
    let tempLength = queue.length;
    let sum = 0;
    for (let i = 0; i < tempLength; i++) {
        let curr = queue.shift();
        sum += sum.val;
        if (curr.right) {
            queue.push(curr.right);
        }
        if (curr.left) {
            queue.push(curr.left);
        }
    }
    averages.push(sum/tempLength);
}
return averages;