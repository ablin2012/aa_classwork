// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// Example 1:
// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// Example 2:
// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9
 
// Constraints:
// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109

const longestConsecutive = function(nums) {
    let max = Math.max(...nums);
    let ans = 0;
    let count = 0;
    for (let i = 0; i < max; i++) {
        if (nums.includes(i)) {
            count += 1;
            if (count > ans) {
                ans = count;
            }
        } else {
            count = 0;
        }
    }
    return ans;
}

const amazonConsecutive = function(nums) {
    let ans = 0;
    let count = 1;
    for (let i = 0; i < nums.length; i++) {
        let valid = true;
        let curr = nums[i];
        while (valid) {
            valid = false;
            if (nums.includes(curr*curr)) {
                count += 1;
                if (count > ans) {
                    ans = count;
                }
                valid = true;
                curr *= curr;
            } else {
                count = 1;
            }
        }
    }
    return ans;
}

console.log(amazonConsecutive([3,9,4,2,16]))