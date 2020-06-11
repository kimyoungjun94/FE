let fs = require('fs');

// readFileSync
// 동기 방식
// output: A->loream a->C
console.log('A');
let res = fs.readFileSync('node_file/sample.txt', 'utf8');
console.log(res);
console.log('C');

// readFile
// 비동기 방식
// output: A->C->loream a
console.log('A');
fs.readFile('node_file/sample.txt', 'utf8', function(err, res) {
	console.log(res);
});
console.log('C');