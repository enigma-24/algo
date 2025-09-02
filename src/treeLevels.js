const treeLevels = (root) => {
	if (root === null) return [];

	root.level = 0;
	const stack = [root];
	const treeLevelsArr = [];

	while (stack.length > 0) {
		const currNode = stack.pop();
		console.log('currNode: ', currNode);

		if (treeLevelsArr.length > currNode.level)
			treeLevelsArr[currNode.level].push(currNode.val);
		else {
			const newArr = [currNode.val];
			treeLevelsArr.push(newArr);
		}

		if (currNode.right !== null) {
			currNode.right.level = currNode.level + 1;
			stack.push(currNode.right);
		}

		if (currNode.left !== null) {
			currNode.left.level = currNode.level + 1;
			stack.push(currNode.left);
		}
	}

	return treeLevelsArr;
};

module.exports = treeLevels;
