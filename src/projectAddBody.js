import { heroContainer, leftBottomProjects } from ".";
import { popupContainer } from "./popup";

let projectObject = {};

let projectForm = document.createElement('form');
projectForm.id = "projectForm";

let projectNameContainer = document.createElement('div');
projectNameContainer.id = "projectNameContainer";

let projectName = document.createElement('input');
projectName.id = "projectName";

let projectButtonContainer = document.createElement('div');
projectButtonContainer.id = "projectButtonContainer";

let projectSubmitBtn = document.createElement('button');
projectSubmitBtn.id = "projectSubmitBtn";
projectSubmitBtn.type = 'button';
projectSubmitBtn.innerText = 'Submit';

let projectCloseBtn = document.createElement('button');
projectCloseBtn.id = "projectCloseBtn";
projectCloseBtn.type = 'button';
projectCloseBtn.innerText = 'Close';



projectNameContainer.appendChild(projectName);
projectButtonContainer.appendChild(projectSubmitBtn);
projectButtonContainer.appendChild(projectCloseBtn);

projectForm.appendChild(projectNameContainer);
projectForm.appendChild(projectButtonContainer);

projectCloseBtn.addEventListener('click', () => {
    projectObject.projectName.value = [];

    console.log(projectObject);

    heroContainer.removeChild(popupContainer);
})

export {projectForm}


