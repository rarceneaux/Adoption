// console.log('Pets');
import {getPets} from './data/petData.js';
import {sortEvents} from './events.js';

const initializeApp = () => {
    sortEvents();
    getPets();
};


initializeApp();
