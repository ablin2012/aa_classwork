// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Example 2:
// Input: head = [1,2]
// Output: [2,1]

// Example 3:
// Input: head = []
// Output: []
 
// Constraints:
// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000
 
// Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?

const reverseList = function(head) {
    let prev = null; // we initialize a prev variable as the dummy end node that our head will point to
    let curr = head; // we a current pointer that points to the head
    let temp;
    while (curr) {
        temp = curr.next; // we will store the remaining portion of our original list here
        curr.next = prev; // we redirect our curr to point to our prev node
        prev = curr; // we reassign our prev node to be our curr node
        curr = temp; // we reassign curr to the remaining portion of the original list
    }
    return prev; // prev will eventually end up being the head of our reversed list
}