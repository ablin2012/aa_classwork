const listOfDepths = function(root) {
    let depths = []; 
    let queue = [];
    if (root != null) {
        queue.push(root);
    }
    while (queue.length) {
        depths.push(queue);
        let parents = queue;
        queue = [];
        for (let i = 0; i < parents.length; i++) {
            if (parents[i].left) {
                queue.push(parents[i].left);
            }
            if (parents[i].right) {
                queue.push(parents[i].right)
            }
        }
    }
    return depths;
}