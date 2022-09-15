const validateBST = function(root, min = null, max = null) {
    if (root === null) return true;
    if ((min != null && root.data <= min) || (max != null && root.data > max)) {
        return false;
    }
    if (!validateBST(root.left, min, root.data) || !validateBST(root.right, root.data, max)) {
        return false;
    }
    return true;
}