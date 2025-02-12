'use strict';

let toReverse = null;
while (toReverse === null) {
  toReverse = prompt('enter something to reverse:');
}

let backwards = '';
for (let nextChar of toReverse) {
  backwards = nextChar + backwards;
}

let transformation = toReverse + ' -> ' + backwards;

alert(transformation);

/*  ===== Challenges =====
  - Put the characters back in the right order after the string was reversed.
*/

let unReverse = '';
for (let nextChar of backwards) {
  unReverse = nextChar + unReverse;
}

let unTransformation = backwards + '->' + unReverse;

alert(unTransformation);
