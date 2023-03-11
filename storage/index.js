import obj, { displayInfo, OBJ as OBJVAL, PI } from './storage.js'; // preffered way
import * as storage from './storage.js';
import { consoleUtil } from './modules/utils.js';
import { obj2, displayData } from '../utils/spread.js';

// invoking of a function from other files
storage.displayInfo('B42WEENG');
console.log('PI, OBJ from Storage', storage.PI, storage.OBJ);

// specific import
displayInfo('B42WEENG');
console.log('PI, OBJ from Storage', PI, OBJVAL);

consoleUtil();

console.log(document.querySelector('body'), obj);