var reverseList = function(head) {
    let next = null;
    let curr = head;
    while (curr) {
        let temp = curr.next;
        curr.next = next;
        next = curr;
        curr = temp;
    }
    return next;
};