var sameTree = function(root1, root2) {
    if (!root1 && !root2) return true;
    if (!root1 || !root2) return false;
    if (root1.val != root2.val) return false;
    return sameTree(root1.left, root2.left) && sameTree(root1.right, root2.right)
}
var isSubtree = function(root, subRoot) {
    if (!root) return false;
    if (sameTree(root, subRoot) || sameTree(root.left,subRoot) || sameTree(root.right, subRoot)) return true;
    return isSubtree((root) ? root.left : null, subRoot) || isSubtree((root) ? root.right : null, subRoot);
};