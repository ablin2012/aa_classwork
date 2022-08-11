// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

// Example 1:
// Input: head = [1,1,2]
// Output: [1,2]

// Example 2:
// Input: head = [1,1,2,3,3]
// Output: [1,2,3]
 
// Constraints:
// The number of nodes in the list is in the range [0, 300].
// -100 <= Node.val <= 100
// The list is guaranteed to be sorted in ascending order.

const deleteDuplicates = function(head) {
    let dummy = new ListNode(0, head); // creating a dummy to help us return head
    let prev = head; // two pointers a prev and curr
    let curr = head.next;
    let next;
    while(curr) {
        next = curr.next;
        if (prev.val === curr.val) { // if the prev val and curr val are the same then we delete one of them by having prev point to the next value
            prev.next = next
        } else {
            prev = curr; // if nothing is deleted then we shift our prev pointer
        }
        curr = curr.next; // always shift the current pointer
    }
    return dummy.next; // return head through dummy
}

const deleteDuplicates2 = function(head) {
    let curr = head;
    let next = head.next;
    while(curr) {
        if (curr.val === next.val) {
            curr.next = next.next
        } else {
            curr = next;
        }
        next = next.next;
    }
    return head;
}