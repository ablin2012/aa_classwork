const checkBalanced = function(root) {
    if (root === null) return true;
    if (root.left && root.right) {
        checkBalanced(root.left);
        
    }
}