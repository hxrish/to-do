import { formParent } from "./taskAddBody";
import { projectForm } from "./projectAddBody";

let popupContainer = document.createElement('div');
popupContainer.id = 'popupContainer';

let popup = document.createElement('div');
popup.id = 'popup';

let popupHeader = document.createElement('div');
popupHeader.id = 'popupHeader';

let popupBody = document.createElement('div');
popupBody.id = 'popupBody';

let taskHeaderContainer = document.createElement('div');
taskHeaderContainer.id = 'taskHeaderContainer';

taskHeaderContainer.innerText = 'Add a new task';

let projectHeaderContainer = document.createElement('div');
projectHeaderContainer.id = 'projectHeaderContainer';

projectHeaderContainer.innerText = 'Add a new header';

let taskAddBody = document.createElement('div');
taskAddBody.id = 'taskAddBody';

taskAddBody.appendChild(formParent);

let projectAddBody = document.createElement('div');
projectAddBody.id = 'projectAddBody';

projectAddBody.appendChild(projectForm);



function popupChild(div){
    return popup.appendChild(div);
}

function popupContainerChild(div){
    return popupContainer.appendChild(div);
}

function popupHeaderChild(div){
    return popupHeader.appendChild(div);
}

function popupBodyChild(div){
    return popupBody.appendChild(div);
}



popupChild(popupHeader)
popupChild(popupBody);

popupHeaderChild(taskHeaderContainer);
popupHeaderChild(projectHeaderContainer);


popupBodyChild(taskAddBody);


taskHeaderContainer.addEventListener('click', () => {
    if(popupBody.contains(taskAddBody)){
        return
    }

    popupBody.innerHTML = '';

    popupBody.appendChild(taskAddBody);
})

projectHeaderContainer.addEventListener('click', () => {
    if(popupBody.contains(projectAddBody)){
        return
    }

    popupBody.innerHTML = '';
    popupBody.appendChild(projectAddBody);
})

popupContainerChild(popup);



export { popupContainer }


