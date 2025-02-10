'use strict';

/* Value Swap

  Can you predict what the [trace] button will log to the console?
    use the [table] button to write down your predictions

  study tips: [variables], [open in] jsTutor, [ask me]

*/

let a = 'y';
let b = 'x';
let t = '';

console.log(a, b, t);
// 'yx '

t = a;
a = b;
b = t;
/*
t = 'y';
a = 'x';
b = 'y';
*/

console.log(a, b, t);

// what did you do in this program?
// Swap value

// what are the final values of `a` and `b`?
// a = 'x' and b = 'y'

// how are they changed from the initial values
// They swapped

// is it possible to swap a and b without using t?
// no
