const sumList = function(node1, node2) {
    let curr1 = node1;
    let curr2 = node2;
    let num1 = 0;
    let num2 = 0;
    let multiplier = 1;
    while (curr1 != null || curr2 != null) {
        num1 += curr1.val * multiplier;
        num2 += curr2.val * multiplier;
        multiplier *= 10;
        curr1 = curr1.next;
        curr2 = curr2.next;
    }
    let sum = num1 + num2;
    let head = new Node;
    head.val = sum % 10;
    sum = Math.floor(sum/10);
    let curr = head;
    while (sum > 0) {
        curr.next = new Node;
        curr = curr.next;
        curr.val = sum % 10;
        sum = Math.floor(sum/10);
    }
    return head;
}

const sumList2 = function(node1, node2) {
    let curr1 = node1;
    let curr2 = node2;
    let length1 = 0;
    let length2 = 0;
    while(curr1) {
        curr1 = curr1.next;
        length1 += 1;
    }
    while(curr2) {
        curr2 = curr2.next;
        length2 += 1;
    }
}