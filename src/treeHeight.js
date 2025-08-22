const treeHeight = (node) => {
	if (node === null) return -1;

    const leftSubTreeHeight = treeHeight(node.left);
    const rightSubTreeHeight = treeHeight(node.right);

    return 1 + Math.max(leftSubTreeHeight, rightSubTreeHeight);
};
