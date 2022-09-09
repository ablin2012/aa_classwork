class TreeNode{
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const minimalTree = function(array) {
    if (array.length <= 1) return new TreeNode(array[0]);
    const mid = Math.floor(array.length/2);
    const left = array.slice(0,mid);
    const right = array.slice(mid+1);
    const root = new TreeNode(array[mid]);
    root.left = minimalTree(left);
    root.right = minimalTree(right);
    return root;
}