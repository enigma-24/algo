const carteSianProduct = (arr1, arr2) => {
	const cartProd = [];
	for (const item of arr1) {
		for (const elem of arr2) {
			cartProd.push([item, elem]);
		}
	}

	return cartProd;
};

module.exports = carteSianProduct;
