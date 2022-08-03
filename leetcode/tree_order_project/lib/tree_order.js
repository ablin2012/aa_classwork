function inOrderArray(root) {
    if(root === null) return [];
    let newArr = [];
    let rootVal = root.val;
    let left = inOrderArray(root.left);
    let right = inOrderArray(root.right);
    return newArr.concat(left).concat(rootVal).concat(right);
}

function postOrderArray(root) {
    if(root === null) return [];
    let newArr = [];
    let rootVal = [root.val];
    let left = postOrderArray(root.left);
    let right = postOrderArray(root.right);
    return newArr.concat(left).concat(right).concat(rootVal);
}


module.exports = {
    inOrderArray,
    postOrderArray
};