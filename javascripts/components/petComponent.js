import {sortedPetsBuilder,getPetz } from '../events.js';

const printToDom = (stringToPrint) => {     
    const printHere = document.getElementById('pets');     
    printHere.innerHTML = stringToPrint;
}

const unfilterResults = () => {
    const unfilterButton = document.getElementById('unfilter');
    unfilterButton.addEventListener('click', () => {
        sortedPetsBuilder(getPetz());
    });
};


const petsBuilder = (pets) => {
    let domString = '';
    domString += `<div class="card" style="width: 18rem;">`;
    domString += `<div class="petnames" id="petnames">${pets.name}</div>`;
    domString += `<img class="card-img-top" id="pics" src="${pets.imageUrl}" alt="Card image cap"/>`;    
    domString += `<div class="card-body">`;
    domString +=`<h5> class="card-title" id="color">${pets.color}</h5>`;
    domString +=`<p> class="card-text"id="specialSkills">${pets.specialSkills}</p>`;
    domString += `<p> id="typeOfPet">${pets.type}</p>`;
    domString += `</div>`;    
    domString += `</div>`; 
    domString += `</div>`; 

    printToDom(domString);
    


};

export{petsBuilder,printToDom,unfilterResults};