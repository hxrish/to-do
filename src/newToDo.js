import { rightBottom} from ".";

import Frame from './Frame.svg';

function createElement(){
    let elementContainer = document.createElement('div');
    elementContainer.classList.add('elementContainer');

    let checkCircle = document.createElement('input');
    checkCircle.type = 'checkbox';
    checkCircle.classList.add('checkCircle');

    let elementTitle = document.createElement('div');
    elementTitle.classList.add('elementTitle');
    elementTitle.innerText = 'holo';

    let elementDetails = document.createElement('div');
    elementDetails.id = 'elementDetails';

    let trashbinContainer = document.createElement('div');
    trashbinContainer.id = 'trashbinContainer';

    const trashbin = new Image();
    trashbin.id = 'trashbin';
    trashbin.src = Frame;

    trashbinContainer.appendChild(trashbin);

    elementContainer.appendChild(checkCircle);
    elementContainer.appendChild(elementTitle);
    elementContainer.appendChild(elementDetails);
    elementContainer.appendChild(trashbinContainer);

    return rightBottom.appendChild(elementContainer);
}

export {createElement};