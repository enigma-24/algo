const factorial = (n) => {
	if (n < 0) return -1;
	let factorial = 1;
	if (n === 0 || n === 1) return factorial;
	for (let i = n; i > 1; i--) factorial *= i;
	return factorial;
};

module.exports = factorial;
