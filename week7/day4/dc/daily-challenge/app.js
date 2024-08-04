import { greet } from './greeting.js';
import { displayColorfulMessage } from './colorful-message.js';
import { readFileContent } from './read-file.js';

const greetingMessage = greet('John');
console.log(greetingMessage);

displayColorfulMessage();
readFileContent();
