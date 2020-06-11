'use strict';

// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj) -> string으로 변환
let json = JSON.stringify(true);
console.log(json);

// array를 json으로 바꾼다.
json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
	name: 'tori',
	color: 'white',
	size: null,
	birthDate: new Date(),
	// jump method는 JSON형태로 바뀌지 않는다.
	jump: () => {
		console.log(`${name} can jump!`);
	},
};

// rabbit object -> JSON
json = JSON.stringify(rabbit);
console.log(json);

// 원하는 property만 정해서 뽑는다.
json = JSON.stringify(rabbit, ["name", "birthDate"]);
console.log(json);

// Callback function을 사용해서 뽑는다.
// key === name이면 value를 ellie로 바꾼다.
// key !== name이면 value를 그대로 사용한다.
json = JSON.stringify(rabbit, (key, value) => {
	console.log(`key: ${key}, value: ${value}`);
	return key === 'name' ? 'ellie' : value;
});
console.log(json);

// console.clear();

// 2. JSON to Object
// parse(json)
json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key, value) => {
	console.log(`key: ${key}, value: ${value}`);
	// return value;
	return key === 'birthDate' ? new Date(value) : value;
});
// key가 birthDate이면 new Date(value) -> obj.birthDate.getDate() 형식으로 뽑기위해 새로운 object로 만들어준다.
console.log(obj);
rabbit.jump(); // can jump!

// obj.jump(); // Type Error

console.log(rabbit.birthDate.getDate());
// json형태로 바꾸면서 string으로 되었기 때문에 json을 obj로 바꾸고 난 후에 obj의 birth는 string이다. 이것을 해결하기 위해 Callback function인 reviver을 사용한다.
// new Date() object를 만들어주지 않으면 obj.birthDate.getDate()는 에러가 난다.
// new Date(value)로 object를 만들어주면 obj.birthDate.getDate()는 정상적으로 실행된다.
console.log(obj.birthDate.getDate());

console.clear();

// 1. example
// Object to JSON
const car = {
	door: 4,
	color: 'DarkBlue',
	engine: 'V10',
	speedUp: () => {
		console.log('speed +100');
	},
	speedDown: () => {
		console.log('speed -100');
	},
	makeDate: new Date(),
};

let carjson = JSON.stringify(car);
console.log(carjson);

carjson = JSON.stringify(car, ["door", "color"]);
console.log(carjson);

carjson = JSON.stringify(car, (key, value) => {
	if(key === 'color') {
		console.log(`key: ${key}, value: ${value}`);
	}
	// console.log(`key: ${key}, value: ${value}`);
	return key === 'door' ? '2' : value;
	// return key === 'makeDate' ? new Date(value) : value;
	// return value;
});
console.log(carjson);

// 2. example
// JSON to Object
carjson = JSON.stringify(car);
console.log(carjson);
const carobj = JSON.parse(carjson, (key, value) => {
	if(key === 'color') {
		console.log(`key: ${key}, value: ${value}`);
	}
	// carobj.makeDate.getDate()의 Type error를 잡아주기위해 key === makeDate이면 new Date()로 새로운 Object를 만들어준다.
	return key === 'makeDate' ? new Date(value) : value;
	// return value;
});
console.log(car.makeDate.getDate());
console.log(carobj.makeDate.getDate());
// console.log(carjson.makeDate); // undefined

console.clear();

let emp = {
	name: 'Kim',
	age: 27,
	hasjob: 'Y'
};
for(let i in emp) {
	console.log('key : ', i, ', value : ', emp[i]);
}
console.log(emp['hasjob']);

console.clear();

// mparts.js 에 있는 M 객체의 f()를 실행한다.
let part = require('./mparts.js');
console.log(part);
M.f();