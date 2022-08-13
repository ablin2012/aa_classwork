// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Example 2:
// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

// Constraints:
// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 
// Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)


// we know that our answer will be the product of all the numbers before and after (prefix and postfix)
// we can start by establishing all the prefix values (the product of numbers that come before)
// then we can multiply those by the postfix values (the product of the numbers that come after)
const productExceptSelf = function(array){
    let ans = new Array(array.length).fill(1); // we know our answer will be an array of equal length to the input
    let prefix = 1; // our prefix starts at 1
    for (let i = 0; i < array.length; i++) {
        ans[i] = prefix; // we set our answer array to the prefix value
        prefix *= array[i]; // then we update that prefix for the next index
    }
    let postfix = 1; // our postfix also starts at one
    for (let i = 0; i < array.length; i++) {
        ans[ans.length - 1 - i] *= postfix; // this time we move backwards and instead of setting our answer equal to the postfix (cause that would cause us to lost our prefix values) we multiply our prefix values with our postfix values
        postfix *= array[array.length - 1 - i]; // then we update postfix for the next index
    }
    return ans;

}

console.log(productExceptSelf([1,2,3,4,5]));