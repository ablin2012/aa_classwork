// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// Constraints:
// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

const containsDuplicate = function(nums) {
    let tracker = {}; // this will keep track of which numbers we have seen already
    for (let i = 0; i < nums.length; i++) { // this for loop will iterate through each element in the array
        if (tracker[nums[i]]) { // we will check if the number we're iterating through has been visited and if it has then we return true
            return true;
        } else { // if it hasn't been visited then we save it to our hash to mark it as visited
            tracker[nums[i]] = true; 
        }
    }
    return false; // if we iterate through the whole array without hitting any duplicates then we know that we will exit the for loop and return false
}

let nums1 = [1,2,3,1];
let nums2 = [1,2,3,4];
let nums3 = [1,1,1,3,3,4,3,2,4,2];

console.log(containsDuplicate(nums1));
console.log(containsDuplicate(nums2));
console.log(containsDuplicate(nums3));