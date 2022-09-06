const intersection = function(node1, node2) {
    let nodes1 = [];
    let nodes2 = [];
    let curr = node1; 
    while (curr) {
        nodes1.push(curr)
        curr = curr.next;
    }
    curr = node2;
    while (curr) {
        nodes2.push(curr)
        curr = curr.next;
    }
    for (let i = 0; i < nodes1.length; i++) {
        if (nodes2.includes(nodes1[i])) {
            return nodes1[i];
        }
    }
    return false;
}