'use strict';

/*
let input = prompt('enter your name:');

let greeting = '';
if (input === null) {
  greeting = 'hello anonymous.';
} else {
  greeting = 'hello ' + input + '!';
}

alert(greeting);

*/

/*  ===== Challenges =====
  - Ask the user for their first and last names.
  - Greet them with their full name.
*/

const firstName = prompt('Enter your first name:');
const lastName = prompt('Enter your last name:');

let greeting = '';
if (firstName === '' && lastName === '') {
  greeting = 'Hello stranger!';
} else if (firstName === '' && lastName !== '') {
  greeting = `Hello ${lastName}!`;
} else if (firstName !== '' && lastName === '') {
  greeting = `Hello ${firstName}!`;
} else {
  greeting = `Hello ${firstName} ${lastName}!`;
}

alert(greeting);
