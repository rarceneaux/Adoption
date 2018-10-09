// console.log('Pets');
import {getPets} from './data/petData.js';
import {sortEvents,unfilterPets} from './events.js';

const initializeApp = () => {
    unfilterPets();
    sortEvents();
    getPets();
};


initializeApp();
