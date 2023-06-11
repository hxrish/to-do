import './index.css';
const heroContainer = document.getElementById('mainContent');

class divCreator{
    constructor(name){
       this.value = document.createElement('div');
        this.value.id = name;
    }

    getDiv(){
        return this.value;
    }
}

function appender(element, elementToBeAppended){
    return element.appendChild(elementToBeAppended);
}

let upperContainer = new divCreator('upperContainer');
let lowerContainer = new divCreator('lowerContainer');
let addContent = new divCreator('addContent');
addContent.getDiv().innerHTML = `<svg id="svg" xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
`;


appender(upperContainer.getDiv(), addContent.getDiv()); 
appender(heroContainer, upperContainer.getDiv());
appender(heroContainer, lowerContainer.getDiv());

document.getElementById('svg').addEventListener('click', () => {
    const newDiv = document.createElement('div');
    appender(lowerContainer.getDiv(), newDiv);
})
