'use strict';

let socket = io();

// 접속 되었을 때 실행
socket.on('connect', () => {
	// input name
	let name = prompt('환영합니다!', '');

	if(!name) {
		name = '익명';
	}
	// server에 새로운 user가 왔다고 알림
	socket.emit('newUser', name);
});

socket.on('update', (data) => {
	console.log(`${data.name}: ${data.message}`);
});

// message 전송 함수
function send() {
	// 입력되어있는 데이터 가져오기
	let message = document.getElementById('test').value;

	document.getElementById('test').value = '';

	// server로 send event 전달
	// emit: 전송
	socket.emit('message', {type: 'message', message: message});
}