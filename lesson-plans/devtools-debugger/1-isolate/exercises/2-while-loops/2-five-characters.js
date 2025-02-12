'use strict';
/*
let input = null;
while (input === null || input.length !== 5) {
  input = prompt('enter something with 5 characters:');
}

let message = 'thank you for "' + input + '"!';

alert(message);
*/

/*  ===== Challenges =====
  - Change the condition to 10 characters.
  - Make the user write "everything" in 2 steps.
*/

// ===== Challenge 1 =====

/*
let input = null;
while (input === null || input.length !== 10) {
  input = prompt('Enter 10 characters.')
}

let message = 'Thank you!'

alert(message)
*/

// ===== Challenge 2 =====

let input = null;
while (input === null || input !== 'everything') {
  input = prompt("Type 'everything'");
}

let message = 'Thank you!';

alert(message);
