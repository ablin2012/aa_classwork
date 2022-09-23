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

var maxDepthDFS = function(root) {
	if (root === null) return 0;
	
	const leftPath = maxDepth(root.left);
	const rightPath = maxDepth(root.right);

	return 1 + Math.max(leftPath,rightPath);

};