import { rightBottom} from ".";

function createElement(){
    let elementContainer = document.createElement('div');
    elementContainer.classList.add('elementContainer');

    let checkCircle = document.createElement('input');
    checkCircle.type = 'checkbox';
    checkCircle.classList.add('checkCircle');

    let elementTitle = document.createElement('div');
    elementTitle.classList.add('elementTitle');
    elementTitle.innerText = 'holo';


    elementContainer.appendChild(checkCircle);
    elementContainer.appendChild(elementTitle);

    return rightBottom.appendChild(elementContainer);

}

export {createElement};