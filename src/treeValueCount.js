// iterative solution
// const treeValueCount = (root, target) => {
// 	if (root === null) return 0;

// 	const stack = [root];
// 	let count = 0;

// 	while (stack.length > 0) {
// 		const currNode = stack.pop();
// 		if (currNode.val === target) count += 1;
// 		if (currNode.left) stack.push(currNode.left);
// 		if (currNode.right) stack.push(currNode.right);
// 	}

// 	return count;
// };

// recursive solution
const treeValueCount = (root, target) => {
	let count = 0;
	return recursiveHelper(root, target, count);
};

const recursiveHelper = (head, target, count) => {
	if (head === null) return 0;

	const match = head.val === target ? 1 : 0;

	return (
		match +
		recursiveHelper(head.left, target, count) +
		recursiveHelper(head.right, target, count)
	);
};

module.exports = treeValueCount;
