import './index.css';
import logo from './Vector.svg';
import { pastContainer, presentContainer, futureContainer } from './timeline';
import { projectHeader } from './projects';
import { createElement, futureArray, pastArray, todayArray, todoArray } from './newToDo';
import { popupContainer } from './popup';
import { detailBodyDeadline, detailBodyDescription, detailBodyName, detailChildContainer, detailChildHeaderTitle, detailExitImg } from './detailChildContainer';


//Assign variables
let heroContainer = document.getElementById('mainContent');
let header = document.createElement('div');
header.id = "header";
let mainLogo = document.createElement('div');
mainLogo.id = "mainLogo";
let headerTxt = document.createElement('div');
headerTxt.id = "headerTxt";
let addAnything = document.createElement('div');
addAnything.id = "addAnything";
let accentCircle1 = document.createElement('div');
accentCircle1.id = "accentCircle1";
let accentCircle2 = document.createElement('div');
accentCircle2.id = "accentCircle2";
let accentCircle3 = document.createElement('div');
accentCircle3.id = "accentCircle3";
let bottomContainer = document.createElement('div');
bottomContainer.id = "bottomContainer";
let leftBottom = document.createElement('div');
leftBottom.id = "leftBottom";
let rightBottom = document.createElement('div');
rightBottom.id = "rightBottom";
let leftBottomTop = document.createElement('div');
leftBottomTop.id = "leftBottomTop";
let leftBottomDown = document.createElement('div');
leftBottomDown.id = "leftBottomDown";
let mainLogoImage = new Image();
mainLogoImage.src = logo;
mainLogoImage.id = "mainLogoImage";
let mainLogoContainer = document.createElement('div');
mainLogoContainer.id = 'mainLogoContainer';
let mainLogoTxtContainer = document.createElement('div');
mainLogoTxtContainer.id = 'mainLogoTxtContainer';

let todoContainer = document.createElement('div');
todoContainer.id = "todoContainer";

let projectsObj = {};

let projects = document.createElement('div');
projects.id = 'projects';
let projectsArray = [];



let headerMainTxtContainer = document.createElement('div');
headerMainTxtContainer.id = 'headerMainTxtContainer';

let addAnythingCircle = document.createElement('div');
addAnythingCircle.id = 'addAnythingCircle';


function heroContainerChild(div){
    return heroContainer.appendChild(div);
}

function headerChild(div){
    return header.appendChild(div);
}

function bottomContainerChild(div){
    return bottomContainer.appendChild(div);
}

function leftBottomChild(div){
    return leftBottom.appendChild(div);
}

function leftBottomTopChild(div){
    return leftBottomTop.appendChild(div);
}

function leftBottomDownChild(div){
    return leftBottomDown.appendChild(div);
}

function projectsChild(div){
    return projects.appendChild(div);
}

// function rightBottomChild(div){
//     return rightBottomChild.appendChild(div);
// }

heroContainerChild(header);
heroContainerChild(accentCircle1);
heroContainerChild(accentCircle2);
heroContainerChild(accentCircle3);
heroContainerChild(bottomContainer);
bottomContainerChild(leftBottom);
bottomContainerChild(rightBottom);
headerChild(mainLogo);
headerChild(headerTxt);
headerChild(addAnything);
leftBottomChild(leftBottomTop);
leftBottomChild(leftBottomDown);


mainLogoTxtContainer.innerText = "TODO";
mainLogo.appendChild(mainLogoTxtContainer);
mainLogoContainer.appendChild(mainLogoImage);
mainLogo.appendChild(mainLogoContainer);


headerMainTxtContainer.innerText = 'Today';
headerTxt.appendChild(headerMainTxtContainer);

addAnythingCircle.innerText = '+';
addAnything.appendChild(addAnythingCircle);

leftBottomTopChild(pastContainer);
leftBottomTopChild(presentContainer);
leftBottomTopChild(futureContainer);

pastContainer.addEventListener('click', () => {
    headerMainTxtContainer.innerText = '';
    headerMainTxtContainer.innerText = 'Past';
    todoContainer.innerHTML = '';

    pastArray.forEach(element => {
            for(let i = 0; i <= pastArray.length ; i++){
                todoContainer.appendChild(element);
            }
        })
})

presentContainer.addEventListener('click', () => {
    headerMainTxtContainer.innerText = '';
    headerMainTxtContainer.innerText = 'Present';

    todoContainer.innerHTML = '';

    todayArray.forEach(element => {
            for(let i = 0; i <= todayArray.length ; i++){
                todoContainer.appendChild(element);
            }
        })
})

futureContainer.addEventListener('click', () => {
    headerMainTxtContainer.innerText = '';
    headerMainTxtContainer.innerText = 'Future' ;

    todoContainer.innerHTML = '';

    futureArray.forEach(element => {
            for(let i = 0; i <= futureArray.length ; i++){
                todoContainer.appendChild(element);
            }
        })
})

projects.addEventListener('click', () => {
    if(headerMainTxtContainer.innerText in projectsObj){
        projectsObj[headerMainTxtContainer.innerText].forEach(element => {
            for(let i = 0; i <= projectsObj[headerMainTxtContainer.innerText].length ; i++){
                todoContainer.appendChild(element);
            }
        })
    }
})


// let leftBottomProjects = document.createElement('div'); 
// leftBottomProjects.Id("leftBottomProjects");


leftBottomDownChild(projectHeader);
leftBottomDownChild(projects);
// leftBottomChild(leftBottomProjects);

addAnythingCircle.addEventListener('click', () => {
    heroContainer.appendChild(popupContainer);
})

let detailContainer = document.createElement('div');
detailContainer.id = "detailContainer";


rightBottom.appendChild(todoContainer);
// rightBottom.style.display = 'block';
// rightBottom.style.padding = '0';

// detailContainer.appendChild(detailChildContainer)


// rightBottom.appendChild(detailContainer);
   
document.addEventListener('click', (e) => {
    if (e.target.matches('div.elementDetails')){
        // let elementIndex = todoArray.indexOf(e.target.parentNode);
        let parentContainer = e.target.parentNode;
        // // console.log(todoArray);
        // parentContainer.querySelector('.elementTitle').innerText;
        // rightBottom.style.display = 'relative';
        // rightBottom.style.padding = '0'; 
        detailChildHeaderTitle.innerText = 'Task Details';
        detailBodyName.innerText = 'NAME: ' + parentContainer.querySelector('.elementTitle').innerText;
        console.log(parentContainer);      
        detailBodyDescription.innerText = 'Description: ' + parentContainer.querySelector('.elementDetailsTxt').innerText;
        detailBodyDeadline.innerText = `Deadline: ` + parentContainer.querySelector('.elementDateContainer').innerText;
        detailContainer.appendChild(detailChildContainer)

        todoContainer.appendChild(detailContainer);
    }
    
    else if(e.target.matches("img#trashbin")){
        let parentContainer = e.target.parentNode.parentNode;
        console.log(parentContainer);

        if(Object.keys(projectsObj).length > 0){
        for(let i = 0; i<= Object.keys(projectsObj).length; i++){
            if (projectsObj[Object.keys(projectsObj)[i]].includes(parentContainer)){
                console.log('hi');
                delete projectsObj[Object.keys(projectsObj)[i]];
            }
        }
    }

        if(pastArray.includes(parentContainer)){
            console.log('past');
            pastArray.splice(pastArray.indexOf(parentContainer), 1);
        }
        else if(todayArray.includes(parentContainer)){
            console.log('present')
            let a = todayArray.indexOf(parentContainer);
            console.log(todayArray[a]);
            todayArray.splice(todayArray.indexOf(parentContainer), 1);
        }
        else if(futureArray.includes(parentContainer)){
            console.log('future');
            futureArray.splice(futureArray.indexOf(parentContainer), 1)
        }

        // todoArray.splice(todoArray.indexOf(parentContainer), 1);
        todoContainer.removeChild(parentContainer);
    }

    else if(e.target.matches("input.checkCircle")){
      if(e.target.checked){
        let parentContainer = e.target.parentNode;
        let grandparentContainer = e.target.parentNode.parentNode;
        let lastChild = grandparentContainer.lastChild;
        // parentContainer.querySelector('.elementTitle').style.transition = 'ease-in-out 0.3s';
        parentContainer.querySelector('.elementTitle').style.textDecoration = 'line-through';
        parentContainer.querySelector('.elementDateContainer').style.textDecoration = 'line-through';
        lastChild.after(parentContainer);

        
      }
      else if(!e.target.checked){
        let grandparentContainer = e.target.parentNode.parentNode;
        let firstChild = grandparentContainer.firstChild;
        let parentContainer = e.target.parentNode;
        parentContainer.querySelector('.elementTitle').style.textDecoration = 'none';
        parentContainer.querySelector('.elementDateContainer').style.textDecoration = 'none';
        firstChild.after(parentContainer);
      }

    }
})

detailExitImg.addEventListener('click', () => {
    detailContainer.removeChild(detailChildContainer);
    todoContainer.removeChild(detailContainer);

})

projects.addEventListener('click', (e) => {
    headerMainTxtContainer.innerText = e.target.innerText;
})

window.addEventListener('click', () => {
    console.log(projectsObj);
})


export {rightBottom};
export {heroContainer};
export { todoContainer };
// export { leftBottomProjects };
export {projectsChild};
export {projectsArray};

export {projectsObj};

export { headerMainTxtContainer };