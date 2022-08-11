// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

// Example 1:
// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]

// Example 2:
// Input: head = [], val = 1
// Output: []

// Example 3:
// Input: head = [7,7,7,7], val = 7
// Output: []

// Constraints:
// The number of nodes in the list is in the range [0, 104].
// 1 <= Node.val <= 50
// 0 <= val <= 50

const removeElements = function(head, val) {
    let dummy = new ListNode(0, head); // we will create a dummy node that points to the head, so that we can easily find our head
    let prev = dummy; // we will track a prev node
    let curr = head; // and a current node
    let next;
    while (curr) {
        next = curr.next;
        if (curr.val === val) { // if the value of our current node is the val we are deleting
            prev.next = next; // we change where our prev node is pointing to be the node after the deleted one
        } else {
            prev = curr; // if we didn't delete a node, we shift over our previous node
        }
        curr = curr.next; // we will always shift our current node
    }
    return dummy.next; // at the end we return the head of our newly adjusted linked list
}