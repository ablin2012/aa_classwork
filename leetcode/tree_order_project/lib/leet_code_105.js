// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./tree_node.js');


function buildTree(preorder, inorder) { // preorder and inorder are arrays of the same length
    if (preorder.length === 0 && inorder.length === 0) return null;

    let rootVal = preorder[0]; // we know that the first element from preorder will be our root node
    let root = new TreeNode(rootVal); // we will create an instance of TreeNode with our given root value

    let midIdx = inorder.indexOf(rootVal); // find the index of the root node within the inorder array
    let leftInorder = inorder.slice(0,midIdx); // split the inorder array into a left and right side not including the root value
    let rightInorder = inorder.slice(midIdx + 1);

    let leftPreorder = preorder.filter((val) => leftInorder.includes(val)); // create split preorder arrays and maintain their order
    let rightPreorder = preorder.filter((val) => rightInorder.includes(val));

    let leftTree = buildTree(leftPreorder, leftInorder);
    let rightTree = buildTree(rightPreorder, rightInorder);

    root.left = leftTree;
    root.right = rightTree;

    return root;
}
