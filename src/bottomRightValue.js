const bottomRightValue = (root) => {
	const queue = [root];

	while (queue.length > 0) {
		const currNode = queue.shift();

		if (currNode.left) queue.push(currNode.left);
		if (currNode.right) queue.push(currNode.right);

		if (queue.length === 0) return currNode.val;
	}
};

module.exports = bottomRightValue;
