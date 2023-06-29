import { format } from "date-fns";
import { rightBottom, todoContainer } from ".";


import Frame from './Frame.svg';


let todoArray =  [];

    class todo {
        constructor(title, description, date) {
            this.elementContainer = document.createElement('div'
            );  
            this.elementContainer.classList.add('elementContainer');

            this.checkCircle = document.createElement('input');
            this.checkCircle.type = 'checkbox';
            this.checkCircle.classList.add('checkCircle');

            this.elementTitle = document.createElement('div');
            this.elementTitle.classList.add('elementTitle');

            this.elementDetails = document.createElement('div');
            this.elementDetails.classList.add("elementDetails");
            this.elementDetails.innerText = 'Details';


            this.elementDetailsTxt = document.createElement('div');
            this.elementDetailsTxt.classList.add("elementDetailsTxt");
            this.elementDetailsTxt.innerText = description;
            
            this.elementDateContainer = document.createElement('div');
            this.elementDateContainer.classList.add('elementDateContainer');
            this.elementDateContainer.innerText = format(new Date(date), 'MM/dd/yyyy');

            this.trashbinContainer = document.createElement('div');
            this.trashbinContainer.id = 'trashbinContainer';


            this.trashbin = new Image();
            this.trashbin.id = 'trashbin';
           this.trashbin.src = Frame;

            this.trashbinContainer.appendChild(this.trashbin);

            this.elementTitle.innerText = title;

            todoArray.push(this.elementContainer);

            this.elementContainer.appendChild(this.checkCircle);
            this.elementContainer.appendChild(this.elementTitle);
            this.elementContainer.appendChild(this.elementDateContainer);
            this.elementContainer.appendChild(this.elementDetails);
            this.elementContainer.appendChild(this.trashbinContainer); 
            this.elementContainer.appendChild(this.elementDetailsTxt);
        }

        addTodo(){
            return todoContainer.appendChild(this.elementContainer);
        }

    }

   
   
   

export { todo };

export { todoArray };
