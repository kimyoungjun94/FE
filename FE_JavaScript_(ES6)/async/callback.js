'use strict';

// hoisting: var, function declaration 들이 자동적으로 코드 제일 위로 올라간다.

console.log('1');
setTimeout( () => {
	console.log('2');
}, 2000);
setTimeout( () => {
	console.log('3');
}, 1000);

// Synchronous callback
function printImmediately(print) {
	print();
}
printImmediately( () => console.log('hello'));

// Asynchronous callback
function printWithDelay(print, timeout) {
	setTimeout(print, timeout);
}
printWithDelay( () => console.log('async callback'), 3000);

// Callback Hell example
class UserStorage {
	loginUser(id, password, onSuccess, onError) {
		setTimeout(() => {
			if (
				(id === 'ellie' && password === 'dream') || (id === 'coder' && password === 'academy')
				) {
				onSuccess(id);
		} else {
			onError(new Error('not fount'));
		}
	}, 2000);
	}

	getRoles(user, onSuccess, onError) {
		setTimeout(() => {
			if(user === 'ellie') {
				onSuccess({name: 'ellie', role: 'admin '});
			} else {
				onError(new Error('no access'));
			}
		}, 1000);
	}
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
	id,
	password,
	user => {
		userStorage.getRoles(
			user,
			userWithRole => {
				console.log(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
			},
			error => {console.log(error);}
		);
	},
	error => {console.log(error)}
);