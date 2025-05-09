const bubbleSort = (arr) => {
	let newLength = arr.length;
	do {
		let lastSwap = 0;
		for (let i = 0; i < newLength - 1; i++) {
			if (arr[i] > arr[i + 1]) {
				[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
				lastSwap = i + 1;
			}
		}
		newLength = lastSwap;
	} while (newLength > 0);

	return arr;
};

module.exports = bubbleSort;
