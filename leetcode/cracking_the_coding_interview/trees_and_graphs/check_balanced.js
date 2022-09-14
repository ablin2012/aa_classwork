const checkBalanced = function(root) {
    if (root === null) return true;
    if (root.left && root.right) {
        return (checkBalanced(root.left) && checkBalanced(root.right));
    } else if (root.left) {
        if (root.left.left || root.left.right) {
            return false;
        }
    } else if (root.right) {
        if (root.right.left || root.right.right) {
            return false;
        }
    }
}