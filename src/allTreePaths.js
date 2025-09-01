const allTreePaths = (root) => {
	const paths = _allTreePaths(root);
	for (let path of paths) {
		path.reverse();
	}
	return paths;
};

const _allTreePaths = (root) => {
	if (root === null) {
		return [];
	}

	if (root.left === null && root.right === null) {
		return [[root.val]];
	}

	const allPaths = [];

	const leftSubPaths = _allTreePaths(root.left);
	for (let path of leftSubPaths) {
		path.push(root.val);
		allPaths.push(path);
	}

	const rightSubPaths = _allTreePaths(root.right);
	for (let path of rightSubPaths) {
		path.push(root.val);
		allPaths.push(path);
	}

	return allPaths;
};

module.exports = allTreePaths;
