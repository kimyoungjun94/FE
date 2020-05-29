'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2, 3];
console.log(arr2[0]);

// 2. Looping over an array
// a. for
for(let i = 0; i < arr2.length; i++) {
	console.log(arr2[i]);
}

// b. for..of
for(let i of arr2) {
	console.log(i);
}

// c. forEach
arr2.forEach((va) => console.log(va));

// 4. Addition, deletion, copy
// push: add an item to the end
arr2.push('4','5');
console.log(arr2);
// pop: remove an item from the end
arr2.pop();
console.log(arr2);

// unshift: add an item to the begining
arr2.unshift('9', '8');
console.log(arr2);
// shift: remove an item from the begining
arr2.shift();
console.log(arr2);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
arr2.push('10', '18', '217');
console.log(arr2); // 8, 1, 2, 3, 4, 10, 18, 217

// arr2.splice(1);
// console.log(arr2);
arr2.splice(1, 1); // 1번째 인덱스부터 1개만 지운다.
console.log(arr2);
arr2.splice(1, 1, '137', '37'); // 1번쨰 인덱스부터 1개만 지우고 그 자리에 '137'과 '37'을 삽입한다.
console.log(arr2);

// combine two arrays
const arr3 = ['199', '707'];
const newarr = arr2.concat(arr3);
console.log(newarr);

// 5. Searching
// find the index
console.clear();
console.log(arr2);
console.log(arr2.indexOf('10'));

// includes: 배열에 있는지 없는지 검사하는 것.
console.log(arr2.includes('18')); // true
console.log(arr2.includes('20')); // false
console.log(arr2.indexOf('20')); // 배열에 20이 없으므로 -1을 return한다.

// lastIndexOf
console.clear();
arr2.push('8');
console.log(arr2); // 8, 137, 37, 3, 4, 10, 18, 217, 8
console.log(arr2.indexOf('8')); // 0
console.log(arr2.lastIndexOf('8')); // 8
// console.log(arr2.pop()); // delete 8
console.log(arr2.reverse());