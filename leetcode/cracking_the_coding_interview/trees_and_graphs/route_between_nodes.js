class GraphNode{
    constructor(value) {
        this.value = value;
        this.adjacent = [];
        this.visited = false;
    }
}

const routeBetweenNodes = function(node1, node2){
    if (node1 === null) return;
    if (node1 === node2) return true;
    node1.visited = true;
    for (let i = 0; i < node1.adjacent.length; i++) {
        if (node1.adjacent[i].visited === false) {
            routeBetweenNodes(node1.adjacent[i], node2);
        }
    }
}

const routeBetweenNodes2 = function(node1, node2) {
    if (node1 === node2) return true;
    let queue = [node1];
    node1.visited = true;
    while (queue.length) {
        let curr = queue.shift();
        if (curr === node2) return true;
        for (let i = 0; i < curr.adjacent.length; i++) {
            if (!curr.adjacent[i].visited) {
                curr.adjacent[i].visited = true;
                queue.push(curr.adjacent[i]);
            }
        }
    }
    return false;
}