var lowestCommonAncestor = function(root, p, q) {
    if (root === p || root === q) return root;
    if ((p.val > root.val && q.val < root.val) || p.val < root.val && q.val > root.val) return root;
    if (p.val > root.val) return lowestCommonAncestor(root.right, p, q);
    return lowestCommonAncestor(root.left, p, q);
};

const lowestAncestor = function(root, p, q){
	if(p.val < root.val && q.val < root.val) {
	    return lowestAncestor(root.left, p, q);
    }else if (p.val > root.val && q.val > root.val) {
        return lowestAncestor(root.right, p, q);
    }else{
	    return root;
    };
};
