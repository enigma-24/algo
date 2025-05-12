const powerOfTwo = (num) => {
	if (num < 1) return false;
	while (num > 1) {
		if (num % 2 !== 0) return false;

		num = num / 2;
	}
	return true;
};

//---- Optimized version
const powerOfTwoOptimized = (num) => {
	// Handle edge case
	if (num < 1) return false;

	// Using bitwise AND to check if num is power of 2
	return (num & (num - 1)) === 0;
};
//----------------------

module.exports = powerOfTwo;

/*
Optimizations Made:
Bitwise Operation:

Powers of 2 have exactly one '1' bit in their binary representation
Example: 8 (1000) is a power of 2
When we subtract 1, all bits after the '1' become set
Example: 7 (0111) is 8-1
Using bitwise AND (&) between num and (num-1):
If result is 0: num is power of 2
If result is not 0: num is not power of 2
Reduced Time Complexity:

Original: O(log n) - due to division operations
Optimized: O(1) - constant time operation
Space Complexity:

Both versions: O(1)
Optimized version uses less memory as it doesn't need loop variables
*/
