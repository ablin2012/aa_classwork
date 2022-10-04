var isBalanced = function(root) {
    if (!root) return true;
    let leftHeight = subTreeLength(root.left);
    let rightHeight = subTreeLength(root.right);
    if (Math.abs(leftHeight - rightHeight) > 1) return false;
    return (isBalanced(root.right) && isBalanced(root.left));
};

