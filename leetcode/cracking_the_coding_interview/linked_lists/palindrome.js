const palindrome = function(head) {
    let arr = [];
    let curr = head;
    while (curr) {
        arr.push(curr.val);
        curr = curr.next;
    }
    for (let i = 0; i < arr.length/2; i++) {
        if (arr[i] != arr[arr.length - 1 - i]) return false;
    }
    return true;
}

const palindrome2 = function(head) {
    let slow = head;
    let fast = head;
    while(fast) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let curr = null;
    while (slow) {
        let temp = slow.next;
        slow.next = curr;
        curr = slow;
        slow = temp;
    }
    let original = head;
    while (curr) {
        if (curr.val != original.val) return false;
        curr = curr.next;
        original = original.next;
    }
    return true;
}