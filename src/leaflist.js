//--- iterative depth first
const leafList = (root) => {
	if (root === null) return [];
	const leafNodesArr = [];
	const stack = [root];

	while (stack.length > 0) {
		const currentNode = stack.pop();

		if (currentNode.left === null && currentNode.right === null)
			leafNodesArr.push(currentNode.val);
		else {
			if (currentNode.right !== null) stack.push(currentNode.right);
			if (currentNode.left !== null) stack.push(currentNode.left);
		}
	}

	return leafNodesArr;
};

//----- recursive
// const leafListHelper = (root, leafNodesArr) => {
// 	if (root === null) return;
// 	if (root.left === null && root.right === null) leafNodesArr.push(root.val);

// 	leafListHelper(root.left, leafNodesArr);
// 	leafListHelper(root.right, leafNodesArr);
// };

// const leafList = (root) => {
// 	const leafNodesArr = [];
// 	leafListHelper(root, leafNodesArr);
// 	return leafNodesArr;
// };
