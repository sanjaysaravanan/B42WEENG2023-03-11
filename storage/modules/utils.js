import { displayInfo } from '../storage.js';

export const consoleUtil = () => {
  displayInfo({ name: 'SAM' });
  console.log('utility Function');
}