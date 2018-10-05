// import {setCharacters, charactersBuilder, getCharacterz} from '../components/characters.js';


function executeThisCodeAfterFileLoaded () {
    const data = JSON.parse(this.responseText);
    set_________(data.____________);
    xxxxxxBuilder(getXXXXXXXXXXX());
}

function executeThisIfXhrFails (){
    console.log('It Broke');
}


const xxxxxxxxxxx = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load',executeThisCodeAfterFileLoaded);
    myRequest.addEventListener('error',executeThisIfXhrFails);
    myRequest.open('GET','./db/pets.json');
    myRequest.send();
};

export {getxxxxxxCharacters};