const insertionSort = (arr) => {
	for (let i = 1; i < arr.length; i++) {
		const elementToInsert = arr[i];

		let j = i - 1;
		while (j >= 0 && elementToInsert < arr[j]) {
			arr[j + 1] = arr[j];
			j--;
		}

		arr[j + 1] = elementToInsert;
	}

	return arr;
};

module.exports = insertionSort;
