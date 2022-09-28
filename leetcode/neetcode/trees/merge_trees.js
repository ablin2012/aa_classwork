var mergeTrees = function(root1, root2) {
    if (!root1 && !root2) return null;
    let val1 = (!root1) ? 0 : root1.val;
    let val2 = (!root2) ? 0 : root2.val;
    const sum = val1 + val2;
    let newNode = new TreeNode(sum);
    newNode.left = mergeTrees((root1) ? root1.left : null, (root2) ? root2.left : null);
    newNode.right = mergeTrees((root1) ? root1.right : null, (root2) ? root2.right : null);
    return newNode;  
};