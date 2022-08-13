// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and uses only constant extra space.

// Example 1:
// Input: nums = [1,3,4,2,2]
// Output: 2

// Example 2:
// Input: nums = [3,1,3,4,2]
// Output: 3

// Constraints:
// 1 <= n <= 105
// nums.length == n + 1
// 1 <= nums[i] <= n
// All the integers in nums appear only once except for precisely one integer which appears two or more times.
 
// Follow up:
// How can we prove that at least one duplicate number must exist in nums?
// Can you solve the problem in linear runtime complexity?

const findDuplicate = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i < j && nums[i]===nums[j]) {
                return nums[i];
            }
        }
    }
}

console.log(findDuplicate([1,3,4,2,2]));
console.log(findDuplicate([3,1,3,4,2]));

// follow up?
class ListNode{
    constructor(val=0) {
        this.val = val;
        this.next = null;
    }
}
let head = new ListNode(1);
head.next = new ListNode(3);
head.next.next = new ListNode(4);
head.next.next.next = new ListNode(2);
head.next.next.next.next = new ListNode(2);
head.next.next.next.next.next = head;

const findDuplicate2 = function(head) {
    let slow = head;
    let fast = head;
    while(slow) {
        if (slow != fast && slow.val === fast.val) {
            return slow.val;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
}

console.log(findDuplicate2(head));