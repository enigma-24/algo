const factorial = (n) => {
	let factorial = 1;
	if (n < 1) return factorial;
	for (let i = n; i > 1; i--) factorial *= i;
	return factorial;
};

module.exports = factorial;
