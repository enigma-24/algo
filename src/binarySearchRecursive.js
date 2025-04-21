const binarySearchRec = (arr, target) => {
	const helper = (leftIndex, rightIndex) => {
		if (leftIndex > rightIndex) return -1;

		const middleIndex = Math.floor((leftIndex + rightIndex) / 2);

		if (arr[middleIndex] === target) return middleIndex;

		if (arr[middleIndex] < target) return helper(middleIndex + 1, rightIndex);
		else return helper(leftIndex, middleIndex - 1);
	};

	return helper(0, arr.length - 1);
};

module.exports = binarySearchRec;
