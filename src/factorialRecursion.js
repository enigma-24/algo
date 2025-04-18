const factRec = (num) => {
	if (num > 1) return num * factRec(num - 1);
	return 1;
};

module.exports = factRec;
