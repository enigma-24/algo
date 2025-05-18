const climbingStaircase = (numSteps) => {
	const arrNumWays = [1, 2];

	for (let i = 2; i <= numSteps; i++)
		arrNumWays.push(arrNumWays[i - 1] + arrNumWays[i - 2]);

	return arrNumWays[numSteps - 1];
};

module.exports = climbingStaircase;
