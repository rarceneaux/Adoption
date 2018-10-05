import {petsBuilder,printToDom,unfilterResults} from "./components/petComponent.js";

// 

let pets = [];

const setPets = (newArray) => {
   pets = newArray;
};

const getPetz = () => {
    return pets;
};

// will line 16 do the same as id since type is a key value of pets???
const filterPets = (e) => {
    const type = e.target.id;
    if (type === 'cats'){
        petsBuilder(pets.cats);
    } else if
        (type ==='dogs') {
          petsBuilder(pets.dogs);  
    } else {
        petsBuilder(pets.dinos);
}
}

const sortEvents = () => {
    const catsButton = document.getElementById('cats'); 
    const dogsButton = document.getElementById('dogs');
    const dinosButton = document.getElementById('dinos');
    catsButton.addEventListener('click', filterPets);
    dogsButton.addEventListener('click', filterPets);
    dinosButton.addEventListener('click', filterPets);
};

const sortedPetsBuilder = (petsArray) => {
    let domString = '';
    petsArray.forEach((pets) =>{
        domString += `<div class="card" style="width: 18rem;">`;
        domString += `<div class="row">`;
        domString += `<button class="btn btn-danger" id="unfilter">Unfilter</button>`;
        domString += `<div class="petnames" id="petnames">${pets.name}</div>`;
        domString += `<img class="card-img-top" id="pics" src="${pets.imageUrl}" alt="Card image cap"/>`;    
        domString += `<div class="card-body">`;
        domString +=`<h5> class="card-title" id="color">${pets.color}</h5>`;
        domString +=`<p> class="card-text"id="specialSkills">${pets.specialSkills}</p>`;
        domString += `<p> id="typeOfPet">${pets.type}</p>`;
        domString += `</div>`;    
        domString += `</div>`; 
        domString += `</div>`; 
});
printToDom(domString);
sortEvents();
unfilterResults();

};

export {sortedPetsBuilder,setPets,getPetz,sortEvents};