const successor = function(node) {
    if (node.right) {
        return node.right;
    } else if (node.parent) {
        if (node.parent.left === node) {
            return node.parent;
        } else if (node.parent.parent) {
            return node.parent.parent;
        }
    }
    return null;
}

