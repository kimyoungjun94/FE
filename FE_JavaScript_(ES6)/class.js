'use strict';

// 1. Class declarations

class Person {
	// constructor
	constructor(name, age) {
		// fields
		this.name = name;
		this.age = age;
	}

	// method
	speak() {
		console.log(`${this.name}: hello!`);
	}
}

const youngjun = new Person('yj', 27);
console.log(youngjun.name);
console.log(youngjun.age);
youngjun.speak();

// 2. Getter and setters
class User {
	constructor(firstName, lastName, age) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}

	// 값을 return
	get age() {
		return this._age;
	}

	// 값을 설정
	set age(value) {
		// if (value < 0) {
		// 	throw Error('age can not be negative');
		// }
		this._age = value < 0 ? 0 : value;
	}
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

// 3. Fields (public, private)
class Experiment {
	// public
	publicField = 2;
	// private을 사용할 때는 앞에 # 기호를 붙여준다.
	#privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
class Article {
	static publisher = 'Dream Coding';
	constructor(articleNumber) {
		this.articleNumber = articleNumber;
	}

	static printPublisher() {
		console.log(Article.publisher);
	}
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // error
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance (상속, 다양성)
class Shape {
	constructor(width, height, color) {
		this.width = width;
		this.height = height;
		this.color = color;
	}

	draw() {
		console.log(`drawing ${this.color} color of`);
	}

	getArea() {
		return this.width * this.height;
	}
}

class Rectangle extends Shape {}
const rectangle = new Rectangle(20, 20, 'red');
rectangle.draw();
console.log(rectangle.getArea());

class Triangle extends Shape {
	draw() {
		super.draw();
		console.log('▲');
	}
	getArea() {
		return (this.width * this.height) / 2;
	}
}
const triangle = new Triangle(20, 20, 'blue');
console.log(triangle.draw());
console.log(triangle.getArea());

// 6. Class checking: instanceOf
// 왼쪽의 Object가 오른쪽에있는 class의 instance인지 아닌지 boolean으로 checking 하는 것.
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);

