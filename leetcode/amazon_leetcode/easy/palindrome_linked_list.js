// Given the head of a singly linked list, return true if it is a palindrome.

// Example 1:
// Input: head = [1,2,2,1]
// Output: true

// Example 2:
// Input: head = [1,2]
// Output: false
 
// Constraints:
// The number of nodes in the list is in the range [1, 105].
// 0 <= Node.val <= 9

// Follow up: Could you do it in O(n) time and O(1) space?

const isPalindrome = function(head) { // method 1
    let nums = [];
    while (head) { // we create an array of the head values
        nums.push(head.val);
        head = head.next;
    }
    for (let i = 0; i <= nums.length/2; i++) { // then we iterate through the created array 
        if (nums[i] != nums[nums.length - 1 - i]) { // check if the values at mirrored ends are the same
            return false; // if they're not then we return false
        }
    }
    return true; // if they are (ie. we reach the end of our loop) we return true
}

const isPalindrome2 = function(head) { // method 2
    let fast = head;
    let slow = head;
    while (fast && fast.next) { // this will be used to find the middle node, which will be stored in variable 'slow'
        fast = fast.next.next;
        slow = slow.next;
    }
    let prev = null;
    let temp;
    while (slow) { // this will reverse the second half of the linked list
        temp = slow.next;
        slow.next = prev
        prev = slow;
        slow = temp;
    }

    let left = head; // we initialize our left to be the start of the array
    let right = prev; // we initialize our right to be the start of the reversed array
    while (right) {
        if (left.val != right.val) { // if the values are equal then it isn't a palindrome
            return false;
        }
        right = right.next;
        left = left.next;
    }
    return true; // if all the values are equal and we reach the end then we know it's a palindrome
}