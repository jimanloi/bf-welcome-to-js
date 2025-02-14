// these are the only functions you will need
import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../../lib/dom-io/index.js';

whenFormDataChanges('user-info', () => {
  debugger;

  console.log('\n--- form data changed ---');

  // --- read user input ---

  let fullName = readString('first-name') + ' ' + readString('last-name');

  console.log(fullName);

  // --- create a message ---

  let greeting = 'Hello ' + fullName + '!';
  let goodbye = 'Goodbye ' + fullName + '!';

  // --- display the message ---

  displayString('greeting-output', greeting + '\n' + goodbye);
});

/*  ===== Challenges =====

  - Modify the program so it uses a first AND a last name
  - Make the program say "hello", then "good bye" on a new line

*/
