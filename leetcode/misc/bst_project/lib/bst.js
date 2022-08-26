class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
   constructor() {
    this.root = null;
   }

   insert(val, root = this.root) {
    if (this.root === null) {
        this.root = new TreeNode(val); // if there is no root, then the root is the inserted value
        return;
    }

    if (val < root.val) {
        if (!root.left) { // check if there is already a value assigned to the left
            root.left = new TreeNode(val); // if there isn't we assign the value to it
        } else {
            this.insert(val, root.left) // if there is, we recursively call insert on the left side
        }
    } else {
        if (!root.right) { // same idea, but on the right
            root.right = new TreeNode(val);
        } else {
            this.insert(val, root.right)
        }
    }

   }

   searchRecur(val, root = this.root) {
    if (!root) return false;

    if (val < root.val) {
        return this.searchRecur(val, root.left);
    } else if (val > root.val) {
        return this.searchRecur(val, root.right);
    } else {
        return true;
    }
   }

   searchIter(val) {
    let curr = this.root;
    while(curr) {
        if (val < curr.val) {
            curr = curr.left;
        } else if (val > curr.val) {
            curr = curr.right
        } else {
            return true;
        }
    }
    return false; 
   }
}

module.exports = {
    TreeNode,
    BST
};