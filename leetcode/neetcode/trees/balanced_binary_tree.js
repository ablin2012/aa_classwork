var isBalanced = function(root) {
    if (!root) return true;
    let leftHeight = subTreeLength(root.left);
    let rightHeight = subTreeLength(root.right);
    if (Math.abs(leftHeight - rightHeight) > 1) return false;
    return (isBalanced(root.right) && isBalanced(root.left));
};

var subTreeLength = function(root) {
    if (!root) return 0;
    let height = 0;
    let queue = [root];
    while(queue.length) {
        height += 1;
        let prev = queue;
        queue = [];
        for (let i = 0; i < prev.length; i++) {
            if (prev[i].left) queue.push(prev[i].left);
            if (prev[i].right) queue.push(prev[i].right);
        }
    }
    return height;
}