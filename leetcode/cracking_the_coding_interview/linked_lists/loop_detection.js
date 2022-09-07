const loopDetect = function(head) {
    let visited = {};
    let curr = head;
    while (curr) {
        if (visited[curr]) {
            return curr;
        } else {
            visited[curr] = true;
        }
        curr = curr.next;
    }
    return false;
}

const loopDetect2 = function(head) {
    let slow = head;
    let fast = head;
    let collision = false;
    while (!collision) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            collision = true;
        }
    }
    slow = head;
    while (slow != fast) {
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
}