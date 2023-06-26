import './index.css';
import logo from './Vector.svg';


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