const fiboRecur = (position) => {
	if (Number(position) === 0 || Number(position) === 1) return position;

	return fiboRecur(position - 1) + fiboRecur(position - 2);
};

module.exports = fiboRecur;
