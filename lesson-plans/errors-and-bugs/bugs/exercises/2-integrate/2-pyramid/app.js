import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../../../lib/dom-io/index.js';

whenFormDataChanges('input', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---

  let bricks = readString('pyramid-bricks');

  // --- build a pyramid ---

  let pyramid = '\n';

  let layer = '';
  for (let brick of bricks) {
    layer = layer + brick;
    pyramid += layer + '\n';
  }

  // --- display the pyramid ---

  displayString('out', pyramid);
});
