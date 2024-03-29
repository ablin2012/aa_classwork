// Given the root of a binary tree, return the average value of the nodes on each level in the form of an array. Answers within 10-5 of the actual answer will be accepted.
 
// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: [3.00000,14.50000,11.00000]
// Explanation: The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.
// Hence return [3, 14.5, 11].

// Example 2:
// Input: root = [3,9,20,15,7]
// Output: [3.00000,14.50000,11.00000]
 
// Constraints:
// The number of nodes in the tree is in the range [1, 104].
// -231 <= Node.val <= 231 - 1

const averageOfLevels = function(root) {
    let queue = [root];
    let averages = [];
    while(queue.length) {
        let tempLength = queue.length;
        let sum = 0;
        for (let i = 0; i < tempLength; i++) {
            let curr = queue.shift();
            sum += curr.val;
            if (curr.right) {
                queue.push(curr.right);
            }
            if (curr.left) {
                queue.push(curr.left);
            }
        }
        averages.push(sum/tempLength);
    }
    return averages;
}

const averageOfLevels2 = function(root) {
    let q = [root], ans = []
    while (q.length) {
        let qlen = q.length, row = 0
        for (let i = 0; i < qlen; i++) {
            let curr = q.shift()
            row += curr.val
            if (curr.left) q.push(curr.left)
            if (curr.right) q.push(curr.right)
        }
        ans.push(row/qlen)
    }
    return ans
};