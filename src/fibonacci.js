const fibo = (n) => {
	// n is the number of elements in the sequence to be displayed
	const fibSeq = [0, 1];
	if (n <= 0) return [];
	if (n === 1) return fibSeq[0];
	if (n === 2) return fibSeq;
	for (let i = 2; i < n; i++) fibSeq[i] = fibSeq[i - 1] + fibSeq[i - 2];
	return fibSeq;
};

module.exports = fibo;
