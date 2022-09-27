class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
};

const firstCommonAncestor = function(node1, node2) {
    if (!node1 || !node2) return null;
    let length1 = 0;
    let length2 = 0;
    let curr1 = node1;
    let curr2 = node2;
    while(curr1) {
        length1 += 1;
        curr1 = curr1.parent;
    };
    while(curr2) {
        length2 += 1;
        curr2 = curr2.parent;
    };
    let longer = (length1 > length2) ? node1 : node2;
    let shorter = (length1 > length2) ? node2: node1;
    while(longer && shorter) {
        if (longer === shorter) return shorter;
        longer = longer.parent;
        shorter = shorter.parent;
    };
    return null;
}