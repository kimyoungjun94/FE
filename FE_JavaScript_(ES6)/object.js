// 'use strict';

// 1. Literals and properties
// object = { key : value };
// make object (object를 만드는 방법)
const obj1 = {}; // 'object literal' syntax
const ibj2 = new Object(); // 'object constructor' syntax

function print(person) {
	console.log(person.name);
	console.log(person.age);
}

const ellie = {name: 'ellie', age: 4};
print(ellie);

ellie.hasJob = true;
console.log(ellie.hasJob);

delete ellie.hasJob;
console.log(ellie.hasJob);

// 2. Computed properties
// key should be always string type -> ['name']
console.log(ellie.name);
console.log(ellie['name']); // computed property

function printValue(obj, key) {
	console.log(obj[key]);
}
printValue(ellie, 'name');

// 3. Property value shorthand
// object를 반복적으로 만드는것은 비 효율적이다.
// person1, 2, 3
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'han', age: 4 };

// function을 이용해 값만 전달해주면 object를 만들어줌.
// person4
const person4 = new Person('ellie', 30);
console.log(person4);

// 4. Constructor Function
function Person(name, age) {
	// this = {};
	this.name = name;
	this.age = age;
	// return this;
}

// 5. in operator: property existence check (key in obj)
// key가 obj 안에 있는지 확인하는 것.
console.log('name' in ellie); // true
console.log('age' in ellie); // true
console.log('random' in ellie); // false

// 6. for..in vs for..of
// for (key in obj)
console.clear();
// let key;
for(key in ellie) {
	console.log(key);
}

// for (value of iterable)
// let value;
const array = [1, 2, 3, 4, 5];
for(value of array) {
	console.log(value);
} // 1, 2, 3, 4, 5 출력

// 7. Fun cloning

const user = { name: 'ellie', age: '20' };
const user2 = user;
user2.name = 'coder'; // user2의 이름을 coder로 바꾼다.
// 그렇다면 user의 이름도 바뀔까?
console.log(user.name); // coder로 이름이 바뀌었다.

// old way
const user3 = {};
for (key in user) {
	user3[key] = user[key];
}
console.clear();
console.log(user3);

// const user4 = {};
// Object.assign(user4, user);
// console.log(user4);
// Object.assign -> Object를 복사한다.
const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const fruit3 = [1, 2, 3, 4, 5];
const mixed = Object.assign({}, fruit1, fruit2, fruit3);
console.log(mixed.color);
console.log(mixed.size);
console.log(mixed[3]);
