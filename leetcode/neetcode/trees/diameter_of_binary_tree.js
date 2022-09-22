var diameterOfBinaryTree = function(root) {
    let diameter = 0;
    let leftDiameter = 0;
    let rightDiameter = 0;
    if (root.left) {
        diameter += subtreeLength(root.left);
        leftDiameter = diameterOfBinaryTree(root.left);
    };
    if (root.right) {
        diameter += subtreeLength(root.right);
        rightDiameter = diameterOfBinaryTree(root.right);
    };
    return Math.max(diameter,leftDiameter,rightDiameter);
};

var subtreeLength = function(root) {
    let size = 0;
    let queue = [root];
    while(queue.length) {
        size += 1;
        let prev = queue;
        queue = [];
        for(let i = 0; i < prev.length; i++) {
            if (prev[i].left) queue.push(prev[i].left);
            if (prev[i].right) queue.push(prev[i].right);
        }
    };
    return size;
}