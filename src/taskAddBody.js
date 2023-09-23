import { headerMainTxtContainer, heroContainer, projectsObj } from ".";
import { futureArray, todo } from "./newToDo";
import { popupContainer } from "./popup";

let localDetail = JSON.parse(localStorage.getItem('localDetail')) || [];


const addDetails = (taskTitle, taskDescription, taskDate) => {
    localDetail.push({
      taskTitle,
      taskDescription,
      taskDate,
    });
  
    localStorage.setItem("localDetail", JSON.stringify(localDetail));
  
    return { taskTitle, taskDescription, taskDate };
  };

let formParent = document.createElement('form');
formParent.id = 'formParent';


let titleContainer = document.createElement('div');
titleContainer.id = 'titleContainer';

let descriptionContainer = document.createElement('div');
descriptionContainer.id = 'descriptionContainer';

let dateContainer = document.createElement('div');
dateContainer.id = 'dateContainer';

let buttonContainer = document.createElement('div');
buttonContainer.id = "buttonContainer";

let titleLegend = document.createElement('legend');
titleLegend.id = "titleLegend";
titleLegend.for = 'taskTitle';
titleLegend.innerText = 'Title';
let taskTitle = document.createElement('input');
taskTitle.id = 'taskTitle';
taskTitle.name = 'taskTitle';
taskTitle.maxLength = '30';


let descriptionLegend = document.createElement('legend');
descriptionLegend.for = 'taskDescription';
descriptionLegend.id = "descriptionLegend";
descriptionLegend.innerText = 'Description';
let taskDescription= document.createElement('textarea');
taskDescription.id = 'taskDescription';
taskDescription.name = 'taskDescription';
taskDescription.maxLength = '80';

let dateLegend = document.createElement('legend');
dateLegend.for = 'taskDate';
dateLegend.id = "dateLegend";
dateLegend.innerText = 'Deadline';
let taskDate = document.createElement('input');
taskDate.type = 'date';
taskDate.id = 'taskDate';
taskDate.name = 'taskDate';

let submitBtn = document.createElement('button');
submitBtn.id = "submitBtn";
submitBtn.type = 'button';
submitBtn.innerText = 'Submit';

let closeBtn = document.createElement('button');
closeBtn.id = "closeBtn";
closeBtn.type = 'button';
closeBtn.innerText = 'Close';







titleLegend.appendChild(taskTitle);
descriptionLegend.appendChild(taskDescription);
dateLegend.appendChild(taskDate)

titleContainer.appendChild(titleLegend);
descriptionContainer.appendChild(descriptionLegend);
dateContainer.appendChild(dateLegend);
buttonContainer.appendChild(submitBtn);
buttonContainer.appendChild(closeBtn);

function formParentChild(div){
    return formParent.appendChild(div);
}

formParentChild(titleContainer);
formParentChild(descriptionContainer);
formParentChild(dateContainer);
formParentChild(buttonContainer);

closeBtn.addEventListener('click', () => {

    heroContainer.removeChild(popupContainer);

})

submitBtn.addEventListener('click', () => {

  if(headerMainTxtContainer.innerText in projectsObj && taskDate.value != ''){
    // const projectAddDetail = addProjectDetails(
    //   taskTitle.value, 
    //   taskDescription.value,
    //   taskDate.value
    // )

    // for(let i = 0; i < projectsObj.length ; i++){
    // new todo(projectsObj[headerMainTxtContainer.innerText][i].projectTitle, projectsObj[headerMainTxtContainer.innerText][i].projectDescription, projectsObj[headerMainTxtContainer.innerText][i].projectDate);
    // }
}

  

    if(taskDate.value != ''){
       
   
    // console.log(taskDescription.value);

    

    const newDetails = addDetails(
        taskTitle.value,
        taskDescription.value,
        taskDate.value
      );
    


        // new todo(localDetail[i].taskTitle, localDetail[i].taskDescription, localDetail[i].taskDate);
      
    
    let element = new todo(taskTitle.value, taskDescription.value, taskDate.value);
    heroContainer.removeChild(popupContainer);
    // element.addTodo();
    }
    return
})


export { formParent }
export { popupContainer }
export {localDetail}