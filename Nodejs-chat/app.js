'use strict';

// 설치한 express module 불러오기
const express = require('express');

// 설치한 socket.io module 불러오기
const socket = require('socket.io');

// Node.js 기본 내장 module 불러오기
const http = require('http');

// Node.js 기본 내장 module 불러오기
const fs = require('fs');

// express 객체 생성
const app = express();

// express http server 생성
const server = http.createServer(app);

// 생성된 서버를 socket.io에 binding
const io = socket(server);

// app.use()를 사용하여 원하는 미들웨어를 추가하여 조합할 수 있다.
app.use('/css', express.static('./static/css'));
app.use('/js', express.static('./static/js'));

// Get 방식으로 경로에 접속하면 실행 됨
app.get('/', (request, response) => {
	fs.readFile('./static/index.html', (err, data) => {
		if(err) {
			response.send('error');
		} else {
			response.writeHead(200, {'Content-Type':'text/html'});
			response.write(data);
			response.end()
		}
	});
});

// on()은 socket에서 해당 event를 받으면 callback function이 실행된다.
// connection event가 발생할 경우 callback function 실행
io.sockets.on('connection', (socket) => {
	socket.on('newUser', (name) => {
		console.log(name + ' 님이 접속하였습니다.');

		// socket에 name 저장해두기
		socket.name = name;

		// 모든 소켓에게 전송
		io.sockets.emit('update', {type: 'connect', name: 'SERVER', message: name + '님이 접속하였습니다.'});
	});

	// 전송한 message 받기
	socket.on('message', (data) => {
		data.name = socket.name;
		console.log(data);
		socket.broadcast.emit('update', data);
	});

	// 접속 종료
	socket.on('disconnet', () => {
		console.log(socket.name + ' 님이 퇴장하셨습니다.');

		// socket.broadcast.emit('event', data)
		// 본인을 제외한 나머지 user들에게 data를 전송할 수 있다.
		// io.sockets.emit() = 모든 유저(본인 포함)
		socket.broadcast.emit('update', {type: 'disconnect', name: 'SERVER', message: socket.name + ' 님이 퇴장하셨습니다.'});
	});
});
// server port 3000 listen
server.listen(3000, () => {
	console.log('서버 실행중..');
});