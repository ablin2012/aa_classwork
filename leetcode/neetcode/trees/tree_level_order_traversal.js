var levelOrder = function(root) {
    if (!root) return [];
    let ans = [];
    let queue = [root];
    let queueVals = [root.val];
    while(queue.length) {
        let prev = queue;
        ans.push(queueVals);
        queue = [];
        queueVals = [];
        for (let i = 0; i < prev.length; i++) {
            if (prev[i].left) {
                queue.push(prev[i].left);
                queueVals.push(prev[i].left.val);
            }
            if (prev[i].right) {
                queue.push(prev[i].right);
                queueVals.push(prev[i].right.val);
            }
        }
    }
    return ans;
};