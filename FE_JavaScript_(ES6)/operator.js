
'use strict';
// 1. String concatenation
console.log('my' + ' cat');
console.log("ellie's cat");
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); //substract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(5 % 2); //remainder
console.log(2 ** 3); //exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
const postIncrement = counter++;

// 6. Logical operators

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
// 타입 변형이 일어나서 string과 number가 같다고 인식된다.
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
// 타입 변형이 일어나지 않아 string과 number가 다르다고 인식된다.
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// 9. Ternary operator: ?
// condition ? value1 : value2
let name = 'ellie';
console.log(name === 'ellie' ? 'Yes' : 'No');

for(let i = 0; i <= 10; i++){
	if(i % 2 === 0)
		console.log(i);
}

for(let i = 0; i <= 10; i++){
	if(i > 8)
		break;
	console.log(i);
}