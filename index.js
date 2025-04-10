const inquirer = require('inquirer');
const isPrime = require('./src/prime');

const question = {
	type: 'input',
	name: 'inputNumber',
	message: 'Enter the number to check if it is a prime number',
};

inquirer
	.prompt([question])
	.then((answer) =>
		console.log(
			`${answer.inputNumber} ${
				isPrime(answer.inputNumber) ? 'is' : 'is not'
			} a prime number`
		)
	);
