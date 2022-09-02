const kthToLast = function(head, k) {
    let ans = [];
    let curr = head;
    let element = 1;
    while (element < k && curr) {
        curr = curr.next;
        element += 1;
    }
    while (curr) {
        ans.push(curr.val);
        curr = curr.next;
    }
    return ans;
}

const kthToLast2 = function(head, k) {
    let dummy = null;
    let curr = head;
    let element = 1;
    while (element < k && curr) {
        curr = curr.next;
        element += 1
    }
    dummy.next = curr;
    return dummy.next;
}

const kthToLast3 = function(head,k) {
    if (!head) return 0;
    let curr = head;
    let length = 1;
    while (curr) {
        length += 1;
        curr = curr.next;
    }
    let kth = length - k + 1;
    if (kth < 1) return 0;
    curr = head;
    while (kth > 0) {
        curr = curr.next;
        kth -= 1;
    }
    return curr.val;
}

const kthToLastRecursive = function(head, k) {
    if (head === null) {
        return 0;
    }
    let index = kthToLastRecursive(head.next, k) + 1;
    if (index === k) {
        return head.val;
    }
    return index;
}