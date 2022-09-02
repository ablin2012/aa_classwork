const deleteMidNode = function(node) {
    if (node === null || node.next === null) return false;
    let curr = node;
    let next = node.next;
    curr.val = next.val;
    curr.next = next.next;
    next.next = null;
    return true;
}