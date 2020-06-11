let testFolder = 'data';
let fs = require('fs');

// node js는 어떤 특정 directory에 있는 file의 list를 array로 만들어서 전달한다.
fs.readdir(testFolder, function(err, filelist) {
	console.log(filelist[0]);
})