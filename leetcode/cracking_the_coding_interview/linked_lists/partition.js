const partition = function(head, p) {
    let smaller = null;
    let larger = null;
    let sHead = null;
    let lHead = null;
    sHead.next = smaller;
    lHead.next = larger;
    let curr = head;
    while (curr) {
        if (curr.val < p) {
            smaller.next = curr;
            smaller = smaller.next;
        } else {
            larger.next = curr;
            larger = larger.next;
        }
    }
    smaller.next = lHead.next.next;
    return sHead.next.next;  
}

const partition2 = function(head, p) {
    
}