const binarySearch = (arr, num) => {
	if (arr.length === 0) return -1;

	let startIndex = 0;
	let lastIndex = arr.length - 1;

	while (startIndex <= lastIndex) {
		const middleIndex = Math.floor((startIndex + lastIndex) / 2);

		if (arr[middleIndex] === num) return middleIndex;

		if (arr[middleIndex] < num) startIndex = middleIndex + 1;
		else lastIndex = middleIndex - 1;
	}
	return -1;
};

module.exports = binarySearch;
