// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

// Example 1:
// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

// Example 2:
// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

// Example 3:
// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.
 
// Constraints:
// The number of the nodes in the list is in the range [0, 104].
// -105 <= Node.val <= 105
// pos is -1 or a valid index in the linked-list.

// Follow up: Can you solve it using O(1) (i.e. constant) memory?

const hasCycle = function(head) {
    let slow = head; // we have two traversals of the linked list happen in tangent
    let fast = head;
    while (fast && fast.next) { // as long as the next item on the list is not null, there is still a chance that we're in a loop
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) { // if we are in a loop, our slow and fast traverals will eventually meet
            return true;
        }
    }
    return false; // if they never meet fast.next will eventually return null and the while loop will exit
}

// this is 0(1) space complexity because we don't use array or objects, we only ever store single nodes
// the other way of doing this is by storing visited nodes in an object and returning true if a node is ever visited twice