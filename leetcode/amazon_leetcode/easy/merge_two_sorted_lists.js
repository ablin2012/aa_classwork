// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: list1 = [], list2 = []
// Output: []

// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]
 
// Constraints:
// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.

const mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode() // we create a dummy node, so we can return the head of our merged list later
    let prev = dummy; // we initialize a prev pointer to be the dummy node
    let curr1 = list1; // we will create pointers for both of the input lists
    let curr2 = list2;
    while (curr1 && curr2) { // while either list has items
        if (curr1.val <= curr2.val) { // if the current val of list 1 is less than or equal to that of list two we have our prev node point to that node
            prev.next = curr1;
            curr1 = curr1.next;
        } else { // else we have it point to the node from list 2
            prev.next = curr2;
            curr2 = curr2.next;
        }
        prev = prev.next; // we always reassign our prev to be the next node assigned
    }
    if (curr1) { // at the end, one of the lists will still have nodes, we want to attach that remainder to the end of our list
        prev.next = curr1;
    } else {
        prev.next = curr2;
    }
    return dummy.next; // return the head of our new list
}