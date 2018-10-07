import {petsBuilder,printToDom} from "./components/petComponent.js";

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
        let catString = "";
        pets.forEach(pet => {
            if (pet.type === 'cat'){
            catString += sortedPetsBuilder(pet);
            }
        })
        printToDom(catString);
    } else if
        (type ==='dogs') {
          let dogString = "";
          pets.forEach(pet => {
              if (pet.type === 'dog'){
                  dogString += sortedPetsBuilder(pet);
              }
          }) 
          printToDom(dogString);
    } else {
        (type === 'dinos')
            let dinoString = "";
            pets.forEach(pet =>{
                if (pet.type === 'dino'){
                    dinoString += sortedPetsBuilder(pet);
                }
            })
            printToDom(dinoString);
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



// const showAll = (e) => {
//      const clickedButton = e.target.id;
//          if (clickedButton === 'cats' && 'dogs' && 'dinos'){
//            petsBuilder(pets);
//         };



//  const unfilterPets = () => {
//      const unfilterButton = document.getElementById('unfilter');
//      unfilterButton.addEventListener('click', showAll);
//  };



const sortedPetsBuilder = (pet) => {
    let domString = '';
        domString += `<div class="filteredCard" style="width: 18rem;">`;
        domString += `<div class="row">`;
        // domString += `<button class="btn btn-danger" id="unfilter">Unfilter</button>`;
        domString += `<div class="petNames2" id="petnames">${pet.name}</div>`;
        domString += `<img class="card-img-top" id="pics" src="${pet.imageUrl}" alt="Card image cap"/>`;    
        domString += `<div class="card-body">`;
        domString +=`<h5 class="card-title" id="color">${pet.color}</h5>`;
        domString +=`<p class="card-text"id="specialSkills">${pet.specialSkill}</p>`;
        domString += `<p id="typeOfPet">${pet.type}</p>`;
        domString += `</div>`;    
        domString += `</div>`; 
        domString += `</div>`; 

        return domString;
        
        
};

// unfilterPets();
 



export {sortedPetsBuilder,setPets,getPetz,sortEvents};