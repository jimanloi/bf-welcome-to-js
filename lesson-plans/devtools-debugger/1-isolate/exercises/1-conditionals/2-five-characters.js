'use strict';

let input = '';

input = prompt('enter something with 5 characters:');

let message = '';
if (input === '') {
  message = "You didn't enter anything!";
} else if (input !== '') {
  message = 'Thank you!';
}

alert(message);

if (input.length === 0) {
  message = 'Enter something next time!';
} else if (input.length < 5) {
  message = 'but it was too short!';
} else if (input.length === 5) {
  message = 'Perfect!';
} else if (input.length > 5) {
  message = "That's too long though!";
}

alert(message);

/*  ===== Challenges =====
  - Give "input" a default value before asking for the user input.
  - Change input's value after asking for the user input so that we always show "thank you!".
  - Add one more conditional so that we never show ":(" and don't always show "thank you!".
*/
