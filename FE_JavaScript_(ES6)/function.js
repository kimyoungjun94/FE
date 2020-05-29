'use strict';

// Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
	console.log(`${message} by ${from}`);
}
showMessage('Hi');

// Rest parameters (added in ES6)
// ... -> 배열 형태로 전달된다.
function printAll(...args) {
	for(let i = 0; i < args.length; i++) {
		console.log(args[i]);
	}

	// 더 간단하게 for loop을 작성하는 방법.
	for(const a of args) {
		console.log(a);
	}

	// 더더더 간단하게 for loop을 작성하는 방법.
	args.forEach((a) => console.log(a));
}
printAll('dream', 'coding', 'ellie');

const prnt = function () {
	console.log('print');
};
prnt();
const prntAgain = prnt;
prntAgain();

// Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
	if (answer === 'love you') {
		printYes();
	} else {
		printNo();
	}
}
const printYes = function () {
	console.log('yes!');
}
const printNo = function print() {
	console.log('no!');
}
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow Function
const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
	//do something more
	return a * b;
}

// Example
const bigNumber = (a, b) => console.log(a > b ? a : b);
bigNumber(100, 99);

// IIFE: Immediately Invoked Function Expression
// 함수 선언시에 즉시 실행되도록 하는 것.
(function hello() {
	console.log('IIFE');
})();

// Fun quiz time
function calculate(command, a, b) {
	switch(command) {
		case 'add':
			return a + b;
		case 'substract':
			return a - b;
		case 'divide':
			return a / b;
		case 'multiply':
			return a * b;
		case 'remainder':
			return a % b;
		default:
			throw Error('unknown command');
	}
	// if(command === 'add')
	// 	return a + b;
	// else if(command === 'substract')
	// 	return a - b;
	// else if(command === 'divide')
	// 	return a / b;
	// else if(command === 'multiply')
	// 	return a * b;
	// else if(command === 'remainder')
	// 	return a % b;
	// else
	// 	throw Error('unknown command');
}

console.log(calculate('remainder', 4, 3));