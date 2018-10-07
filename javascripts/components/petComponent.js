import {sortedPetsBuilder,getPetz } from '../events.js';

const printToDom = (stringToPrint) => {     
    const printHere = document.getElementById('pets');     
    printHere.innerHTML = stringToPrint;
}


const petsBuilder = (petsArray) => {
    let domString = '';
    petsArray.forEach((pets) => {
    domString += `<div class="petCard" style="width: 18rem;">`;
    domString += `<div class="petnames">${pets.name}</div>`;
    domString += `<img class="card-img-top" src="${pets.imageUrl}" alt="Card image cap"/>`;    
    domString += `<div class="card-body">`;
    domString +=`<h5 class="card-title" id="color">${pets.color}</h5>`;
    domString +=`<p class="card-text"id="specialSkills">${pets.specialSkill}</p>`;
    domString += `<p id="type">${pets.type}</p>`;
    domString += `</div>`;    
    domString += `</div>`; 
    });

    printToDom(domString);
    


};

export{petsBuilder,printToDom};