// Whole-script strict mode syntax
// JavaScript is very flexible
// flexible === dangerous
// added ECMAScript 5
// strict mode execute
// 1. Use strict
// use this for Vanila Javascript
'use strict';

// 2. Variable
// let (added in ES6)
let globalName = 'globalName';
{
	let name = 'ellie';
	console.log(name);
	name = 'hello';
	console.log(name);
	console.log(globalName);
}
console.log(globalName);

// var (don't ever use this!)
// var hoisting - 어디에 선언했는지 상관없이 항상 제일 위에 선언을 끌어올려주는 것.
// has no block scope
{
	age = 4;
	var age;
}
console.log(age);

// 3. Constants
// Mutable - const, Immutable - let
const daysInWeek = 7;

// 4. Variable types
// function은 인자로 쓸 수도 있다.
const count = 17;
const size = 17.2;

// log 안에는 작은 따옴표가 아니라 ~/` 이다.
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
// template literals (string)
console.log(`hi ${brendan}!`);

// boolean
// false: 0, null, undefined, NaN

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// 5. Dynamic typing : dynamically typed language
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5; // string '7' 과 number 5를 더하면 5를 string으로 간주하여 75 string 이 된다.
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
