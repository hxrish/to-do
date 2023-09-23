import { heroContainer, leftBottomProjects, projects, projectsArray, projectsChild, projectsObj } from ".";
import { popupContainer } from "./popup";


let projectDetail = JSON.parse(localStorage.getItem('projectDetail')) || [];


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

projectSubmitBtn.addEventListener('click', () => {
    let element = document.createElement('div');
    element.innerText = projectName.value;
    projectsObj[element.innerText] = [];
    // console.log(projectsObj);
    projectsChild(element);
    // projectsArray.push(element);
    projectName.value = '';
    heroContainer.removeChild(popupContainer);
    // console.log(projectsArray);
    // console.log(typeof(projectsArray));
}
)

projectCloseBtn.addEventListener('click', () => {
    projectName.value = '';
    heroContainer.removeChild(popupContainer);
})

// let sentByProject = false;


// export {sentByProject};
export {projectForm};
export { projectsObj };
export { projectDetail };



