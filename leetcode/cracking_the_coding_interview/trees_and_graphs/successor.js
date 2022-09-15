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

const successor2 = function(node) {
    if (node.right) {
        let ans = node.right;
        while (ans.left) {
            ans = ans.left;
        }
        return ans;
    } else {
        let ans = node;
        while (ans.parent.left != ans) {
            ans = ans.parent;
        }
        return ans.parent;
    }
}