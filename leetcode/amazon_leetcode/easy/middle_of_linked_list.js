// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.

// Example 2:
// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
 
// Constraints:
// The number of nodes in the list is in the range [1, 100].
// 1 <= Node.val <= 100

const middleNode = function(head) {
    let slow = head; // we will have two traversals of the list, one fast and one slow
    let fast = head;
    while (fast && fast.next) { // the fast one will run out first 
        slow = slow.next;
        fast = fast.next.next; // we have the fast traversal move double as fast
    }
    return slow; // so when the fast hits a null we know that the slow traversal will be in the middle
}