// import {printToDom,} from '../petComponent.js';
import {setPets,getPetz} from '../events.js';
import {petsBuilder} from '../components/petComponent.js';


function executeThisCodeAfterFileLoaded () {
    const data = JSON.parse(this.responseText);
    setPets(data.pets);
    petsBuilder(getPetz());
}

function executeThisIfXhrFails (){
    console.log('It Broke');
}


const getPets = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load',executeThisCodeAfterFileLoaded);
    myRequest.addEventListener('error',executeThisIfXhrFails);
    myRequest.open('GET','./db/pets.json');
    myRequest.send();
};

export {getPets};