import { petsBuilder } from "./components/petComponent";

// import print to dom

let pets = [];

// const setPets = (newArray) => {
//     pets = newArray;
// };

// const getpetz = () => {
//     return pets;
// };
// will line 16 do the same as id since type is a key value of pets???
const sortPets = (e) => {
    const type = e.target.type;
    if (type === 'cats'){
        petsBuilder(pets.type.cats);
    }else{
        const findOther = pets.filter(x => x.type === )



    }
    const catsButton = document.getElementById('cats');
    const dogsButton = document.getElementById('dogs');
    const dinosButton = document.getElementById('dinos');
    catsButton.addEventListener('click', sortThem);
    dogsButton.addEventListener('click', sortThem);
    dinosButton.addEventListener('click', sortThem);
}