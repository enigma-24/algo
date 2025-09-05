const longestWord = (sentence) => {
	const wordArr = sentence.split(' ');

	let longestWord = '';
	for (let word of wordArr) {
		if (word.length >= longestWord.length) 
            longestWord = word;
	}

    return longestWord;
};

module.exports = longestWord;
