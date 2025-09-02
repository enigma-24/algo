const levelAverages = (root) => {
	if (root === null) return [];

	const levelsArr = [];
	const stack = [{ node: root, level: 0 }];

	while (stack.length > 0) {
		const { node: currNode, level } = stack.pop();

		if (levelsArr.length > level) levelsArr[level].push(currNode.val);
		else levelsArr.push([currNode.val]);

		if (currNode.right !== null)
			stack.push({ node: currNode.right, level: level + 1 });

		if (currNode.left !== null)
			stack.push({ node: currNode.left, level: level + 1 });
	}

	const levelsAvgArr = [];
	for (let i = 0; i < levelsArr.length; i++) {
		const avg =
			levelsArr[i].reduce((sum, value) => sum + value, 0) / levelsArr[i].length;
		levelsAvgArr[i] = avg;
	}

	return levelsAvgArr;
};

module.exports = levelAverages;
