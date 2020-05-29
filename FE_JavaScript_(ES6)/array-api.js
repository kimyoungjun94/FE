'use strict';

// Q1. make a string out of an array
// 주어진 배열을 string으로 변환
const fruits = ['apple', 'banana', 'orange'];
// join: array 안에 모든 요소들을 string으로 만들어준다.
// join 안의 parameter '-'는 seperate 문자이다.
const res = fruits.join('-');
console.log(res);

// Q2. make an array out of a string
// 주어진 string을 array로 만들기.
// split: string을 array로 만든다.
// seperate문자를 인자로 받는다.
const str = 'apple, banana, orange';
const resstr = str.split(',');
console.log(resstr);

// Q3. make this array look like this: [5, 4, 3, 2, 1]
// reverse: array안에 들어있는 요소들의 순서를 거꾸로 만들어준다.
const array = [1, 2, 3, 4, 5];
console.log(array.reverse());

// Q4. make new array without the first two elements
// slice: array의 특정한 부분을 return한다.
// slice(start, end);
// start부터 end-1까지 return 된다.
// splice: 원래의 array 자체를 수정한다.
// slice: 원래의 array는 변경하지 않고 원하는 부분만 return해서 받아올 때 쓴다.
const arr = [1, 2, 3, 4, 5];
const resarr = arr.slice(2);
console.log(resarr);

class Student {
	constructor(name, age, enrolled, score) {
		this.name = name;
		this.age = age;
		this.enrolled = enrolled;
		this.score = score;
	}
}

const students = [
	new Student('A', 29, true, 45),
	new Student('B', 28, false, 80),
	new Student('C', 30, true, 90),
	new Student('D', 40, false, 66),
	new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
// find: Callback function
// const result = students.find(function (student) {
// 	return student.score === 90;
// });
// console.log(result);

const result = students.find((student) => student.score === 90); console.log(result);

// Q6. make an array of enrolled students
// 수업에 등록한 학생들만 골라내어서 array를 만든다.
// filter: 원하는 조건을 만족하는 것만 받아올 수 있다.
// enrolled가 true이면 받아온다.
const enrolledArray = students.filter((student) => student.enrolled); console.log(enrolledArray);

// Q7. make an array containing only the student's scores
// result should be: [45, 80, 90, 66, 88]
// 학생들의 점수만 뽑아와 array로 만든다.
// map: array안에 들어있는 요소 한가지 한가지를 다른 것으로 변환해준다.
// array안에 들어있는 모든 요소들을 Callback함수를 통해 다른형식의 data를 만들고 싶을 때 쓴다.
const scoreArray = students.map(student => student.score); console.log(scoreArray);

console.clear();

// Q8. check if there is a student with the score lower than 50
// some: array의 요소중에서 Callback함수가 return이 true가 되는 요소가 있는지 없는지 확인해주는 것.
// array에서 하나라도 조건에 만족되는 것이 있다면 true를 return 한다.
const checkArray = students.some((student) => student.score < 50); console.log(checkArray);
// every: array의 모든 요소가 조건을 만족하면 true를 return, 그렇지않으면 false를 return 한다.
const checkArray2 = students.every((student) => student.score < 50); console.log(checkArray2);

// Q9. compute student's average score
// reduce: array안에 들어있는 모든 요소들마다 호출된다.
// Callback 함수에서 return되는 값은 누적된다.
// array에 있는 모든 요소들의 값을 누적한다.
// Callback Function(prev, curr) -> 이전값과 현재 값을 인자로 받는다.
const avgScore = students.reduce((prev, curr) => prev + curr.score, 0); // 0부터 시작한다.
console.log(avgScore / students.length);

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
// 학생들의 모든 점수를 string으로 변환해서 만든다.

// 먼저 array안에서 학생들의 점수만을 뽑아와 array를 만든다.
// const strScore = students.map(student => student.score);

// 점수만으로 만들어진 array를 string으로 바꾼다.
// array -> string (join 사용)
const strScore = students.map(student => student.score).join();
console.log(strScore);

// 점수가 50점 이상인 학생들만 대상으로 한다.
// filter 사용
const strScore2 = students.map(student => student.score).filter((score) => score >= 50).join();
console.log(strScore2);

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
// sort((a, b) => a - b) -> a - b가 -값이 나오면 앞의 값이 뒤의 값보다 작다고 판단.
const sortArray = students.map(student => student.score).sort((a, b) => a - b).join();
console.log(sortArray);
// 내림차순으로 정렬하고 싶다면 b - a 사용.
const sortArray2 = students.map(student => student.score).sort((a, b) => b - a).join();
console.log(sortArray2);
// sort()만 사용해도 정렬됨.
const sortArray3 = students.map(student => student.score).sort().join();
console.log(sortArray3);


