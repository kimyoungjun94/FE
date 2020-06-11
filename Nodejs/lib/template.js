// refactoring
module.exports = {
	// HTML, CSS, JavaScript 등 data들을 HTML을 표현하기 위한 function이다.
	// HTML code 를 return 한다.
	html: (title, list, body, control) => {
	return `
	<!doctype html>
	<html>
	<head>
	<title>WEB1 - ${title}</title>
	<meta charset="utf-8">
	</head>
	<body>
	<h1><a href="/">WEB</a></h1>
	${list}
	${control}
	${body}
	</body>
	</html>
	`;
	},
	// fs.readdir을 통해 data목록을 가져오는 기능을 하는 함수이다.
	list: (filelist) => {
		// node js 를 이용해 data directory에 있는 file 목록을 array로 가져온다.
		// 가져온 file 목록을 ul 태그로 감싸 보여준다.
		let list = '<ul>';
		for (i in filelist) {
			list += `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
		}
		list += '</ul>';
		return list;
	}
};