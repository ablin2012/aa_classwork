var maxDepth = function(root) {
    if (!root) return 0;
    let depth = 0;
    let queue = [root];
    while (queue.length) {
        depth += 1;
        let prev = queue;
        queue = [];
        for (let i = 0; i < prev.length; i++) {
            if (prev[i].left) queue.push(prev[i].left);
            if (prev[i].right) queue.push(prev[i].right);
        }
    }
    return depth;
};