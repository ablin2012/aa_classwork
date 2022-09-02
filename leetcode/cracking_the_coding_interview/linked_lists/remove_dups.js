const removeDups = function(head) {
    let curr = head;
    let count = {};
    while (curr) {
        if (count[curr.val] != undefined) {
            count[curr.val] = 1;
        } else {
            count[curr.val] += 1;
        }
        curr = curr.next;
    }
    let dummy = null; // create a null node to point to the head
    dummy.next = head;
    let prev = dummy;
    curr = head;
    while (curr) {
        if (count[curr.val] > 1) {
            prev.next = curr.next;
            count[curr.val] -= 1;
        } else {
            prev = prev.next
        }
        curr = curr.next;
    }
    return dummy.next;
}

const removeDups2 = function(head) {
    let curr = head.next;
    let prev = head;
    let visited = {};
    visited[prev.val] = true;
    while (curr) {
        if (visited[curr.val]) {
            prev.next = curr.next;
        } else {
            prev = prev.next;
        }
        curr = curr.next
    }
    return head;
}