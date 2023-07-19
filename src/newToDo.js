    import { format, isAfter, isBefore, isEqual, parseISO, parse, differenceInDays, addDays} from "date-fns";
    import { headerMainTxtContainer, projectsObj, rightBottom, todoContainer } from ".";


    import Frame from './Frame.svg';

    let todayDate = format(new Date(), 'MM/dd/yyyy');


    let todayArray =  [];
    let pastArray = [];
    let futureArray = [];

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


                this.elementContainer.appendChild(this.checkCircle);
                this.elementContainer.appendChild(this.elementTitle);
                this.elementContainer.appendChild(this.elementDateContainer);
                this.elementContainer.appendChild(this.elementDetails);
                this.elementContainer.appendChild(this.trashbinContainer); 
                this.elementContainer.appendChild(this.elementDetailsTxt);

                let difference = differenceInDays(parse(todayDate,  'MM/dd/yyyy', new Date()), parse(this.elementDateContainer.innerText, 'MM/dd/yyyy', new Date()));

                if(headerMainTxtContainer.innerText in projectsObj){
                    projectsObj[headerMainTxtContainer.innerText].push(this.elementContainer);
                }

                if(isEqual(parse(this.elementDateContainer.innerText, 'MM/dd/yyyy', new Date()), parse(todayDate,  'MM/dd/yyyy', new Date())) ||  difference <= -1){
                    this.elementDateContainer.innerText = format(addDays(parse(this.elementDateContainer.innerText, 'MM/dd/yyyy', new Date()), 1), 'MM/dd/yyyy')
                    futureArray.push(this.elementContainer);
                }
                else if(isBefore(parse(this.elementDateContainer.innerText, 'MM/dd/yyyy', new Date()), parse(todayDate,  'MM/dd/yyyy', new Date())) && difference <= 1){
                    this.elementDateContainer.innerText = format(addDays(parse(this.elementDateContainer.innerText, 'MM/dd/yyyy', new Date()), 1), 'MM/dd/yyyy')
                    console.log(this.elementDateContainer.innerText);
                    todayArray.push(this.elementContainer);
                }
                else{
                    this.elementDateContainer.innerText = format(addDays(parse(this.elementDateContainer.innerText, 'MM/dd/yyyy', new Date()), 1), 'MM/dd/yyyy')
                    console.log(this.elementDateContainer.innerText);
                    pastArray.push(this.elementContainer);
                }
            }

            addTodo(){
                // console.log(todayArray);
                // console.log(pastArray);
                // console.log(futureArray);
                // console.log(todayDate);
                // return todoArray.forEach(element => {
                //     for(let i = 0; i <= todoArray.length ; i++){
                //         todoContainer.appendChild(element);
                //     }
                // })
                // return todoContainer.appendChild(todoArray[todoArray.indexOf(this.elementContainer)]);
            }

        }

    
    
    export { todo };
    export { todayArray };
    export { pastArray };
    export { futureArray };

    // export { todoArray };
