let http = require('http');
let fs = require('fs');
let url = require('url');
let qs = require('querystring');

let template = require('./lib/template.js');

let app = http.createServer( (request,response) => {
	let _url = request.url;
	let queryData = url.parse(_url, true).query;
	let pathname = url.parse(_url, true).pathname;
	if(pathname === '/') {
		if(queryData.id === undefined) {
			fs.readdir('./data', (err, filelist) => {
				let title = 'Welcome';
				let content = "Hello, Node.js";

				// node js 를 이용해 data directory에 있는 file 목록을 array로 가져온다.
				// 가져온 file 목록을 ul 태그로 감싸 보여준다.
				// function templateList를 사용한다.
				let list = template.list(filelist);
				let html = template.html(title, list, `<h2>${title}</h2>${content}`, `<p><input type="button" value="create" onclick="location.href='/create'"></p>`);
				response.writeHead(200);
				response.end(html);
			});
		} else {
			fs.readdir('./data', (err, filelist) => {
				// node js 를 이용해 동적으로 file을 읽어와 보여준다.
				fs.readFile(`data/${queryData.id}`, 'utf8', (err, content) => {
					let title = queryData.id;
					let list = template.list(filelist);
					let html = template.html(title, list, `<h2>${title}</h2>${content}`,
						`<p><input type="button" value="create" onclick="location.href='/create'">
						<input type="button" value="update" onclick="location.href='/update?id=${title}'"></p>
						<form action="/delete_process" method="post">
						<input type="hidden" name="id" value="${title}">
						<input type="submit" value="delete">
						</form>
						`
						);

					response.writeHead(200);
					response.end(html);
				});
			});
		}
	}
	// 글 생성 (create)
	else if(pathname === '/create') {
		fs.readdir('./data', (err, filelist) => {
			let title = 'Web-create';
			let list = template.list(filelist);
			let html = template.html(title, list, `<form action="/create_process" me
				thod="post">
				<p><input type="text" name="title" placeholder="title"></p>
				<p>
				<textarea name="content" placeholder="content"></textarea>
				</p>
				<p>
				<input type="submit">
				</p>
				</form>`, '');
			response.writeHead(200);
			response.end(html);
		});
	} else if(pathname === '/create_process') {
		// node js 에서 post 방식의 data를 가져오는 방법
		let body = '';
		// 큰 데이터를 조각조각 내어서 'data' 뒤의 callback function을 호출한다.
		request.on('data', (data) => {
			body += data;
			// 데이터가 너무 크면 접속을 끊는다.
			if(body.length > 1e6)
				request.connection.destroy();
		});

		// 더 이상 들어올 정보가 없으면 'end' 뒤의 callback function을 호출한다.
		request.on('end', () => {
			// user가 작성한 title과 content를 각각 객체로 저장한다.
			let post = qs.parse(body);
			let title = post.title;
			let content = post.content;

			// 저장된 각각의 title, content 객체를 data folder에 file로 저장한다.
			console.log(title);
			console.log(content);
			fs.writeFile(`data/${title}`, content, 'utf8', (err) => {
				// user가 작성을 끝냈을 때 자신이 작성한 글 목록으로 화면을 전환해준다.(redirection)
				// response.writeHead(302, {Location: `/?id=${title}`});
				response.writeHead(302, {Location: `/?id=${title}`});
				response.end();
			});
		});
	}
	// 글 수정 (update)
	else if(pathname === '/update') {
		fs.readdir('./data', (err, filelist) => {
			// node js 를 이용해 동적으로 file을 읽어와 보여준다.
			fs.readFile(`data/${queryData.id}`, 'utf8', (err, content) => {
				let title = queryData.id;
				let list = template.list(filelist);
				let html = template.html(title, list,
					`
					<form action="/update_process" method="post">
					<input type="hidden" name="id" value="${title}">
					<p><input type="text" name="title" placeholder="title" value="${title}"></p>
					<p>
					<textarea name="content" placeholder="content">${content}</textarea>
					</p>
					<p>
					<input type="submit">
					</p>
					</form>
					`,
					`<p><input type="button" value="create" onclick="location.href='/create'">
					<input type="button" value="update" onclick="location.href='/update?id=${title}'"></p>
					<form action="/delete_process" method="post">
					<input type="hidden" name="id" value="${title}">
					<input type="submit" value="delete">
					</form>`
					);
				response.writeHead(200);
				response.end(html);
			});
		});
	}
	// create_process와 유사함
	else if(pathname === '/update_process') {
		let body = '';
		request.on('data', (data) => {
			body += data;
			// 데이터가 너무 크면 접속을 끊는다.
			if(body.length > 1e6)
				request.connection.destroy();
		});

		request.on('end', () => {
			let post = qs.parse(body);
			let id = post.id;
			let title = post.title;
			let content = post.content;
			fs.rename(`data/${id}`, `data/${title}`, (err) => {
				fs.writeFile(`data/${title}`, content, 'utf8', (err) => {
				// response.writeHead(302, {Location: `/?id=${title}`});
				response.writeHead(302, {Location: `/?id=${title}`});
				response.end();
				});
			});
		});
	}
	// 글 삭제 (delete)
	else if(pathname === '/delete_process') {
		let body = '';
		request.on('data', (data) => {
			body += data;
			// 데이터가 너무 크면 접속을 끊는다.
			if(body.length > 1e6)
				request.connection.destroy();
		});

		request.on('end', () => {
			let post = qs.parse(body);
			let id = post.id;
			// fs.unlink(path, callback) 을 사용하여 삭제기능을 구현한다.
			fs.unlink(`data/${id}`, (err) => {
				// 삭제가 끝나면 화면을 home(Web)으로 보낸다.
				response.writeHead(302, {Location: `/`});
				response.end();
			})
		});
	} else {
		response.writeHead(404);
		response.end('Not Found');
	}
});
app.listen(3000);
