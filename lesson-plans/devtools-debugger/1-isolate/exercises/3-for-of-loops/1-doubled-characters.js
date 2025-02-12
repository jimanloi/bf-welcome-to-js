'use strict';

/*
let text = null;
while (text === null) {
  text = prompt('enter some text, each character will be doubled:');
}

let doubled = '';
for (let nextChar of text) {
  doubled = doubled + nextChar + nextChar;
}

alert(doubled);

*/

/*  ===== Challenges =====
  - Add an hyphen after each character.
  - Add an hyphen only between the characters.
*/

// ====== Add an hyphen after each character ======

/*
let text = null;
while (text === null) {
  text = prompt('enter some text, an hyphen will be added after each character:');
}

let addHyphen = '';
for (let eachChar of text) {
  addHyphen = addHyphen + eachChar + '-';
}

alert(addHyphen);
*/

// ======== Add an hyphen only between characters =====

let text = null;
while (text === null) {
  text = prompt('enter some text, an hyphen will be added between characters:');
}

let hyphenBetween = '';
for (let i = 0; i < text.length; i++) {
  hyphenBetween += text[i];
  if (i !== text.length - 1) {
    hyphenBetween += '-';
  }
}

alert(hyphenBetween);
