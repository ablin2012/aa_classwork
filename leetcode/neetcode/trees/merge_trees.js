var mergeTrees = function(root1, root2) {
    if (!root1 && !root2) return null; // our base case is when both of our roots our null and therefore the resulting merged node will be null
    let val1 = (!root1) ? 0 : root1.val; // we grab the value from root1 if it exists else we default to 0
    let val2 = (!root2) ? 0 : root2.val; // same with root2
    const sum = val1 + val2; // we get the sum of our two values
    let newNode = new TreeNode(sum); // and then create a new node with that sum as the value
    newNode.left = mergeTrees((root1) ? root1.left : null, (root2) ? root2.left : null); // then we set the left to a recursive call on the left
    newNode.right = mergeTrees((root1) ? root1.right : null, (root2) ? root2.right : null); // and set the right to a recursive call on the right
    return newNode;  // we return the resulting new node
};