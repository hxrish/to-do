import exit from './exit.svg';

let detailChildContainer = document.createElement('div');
detailChildContainer.id = "detailChildContainer"

let detailChildContainerHeader = document.createElement('div');
detailChildContainerHeader.id = "detailChildContainerHeader";


let detailChildHeaderTitle = document.createElement('div');
detailChildHeaderTitle.id = "detailChildHeaderTitle";

detailChildHeaderTitle.innerText = 'Hallelujah';

let detailChildHeaderExit = document.createElement('div');
detailChildHeaderExit.id =  "detailChildHeaderExit";

let detailExitImg = new Image();
detailExitImg.id = "detailExitImg";
detailExitImg.src = exit;

detailChildHeaderExit.appendChild(detailExitImg);

detailChildContainerHeader.appendChild(detailChildHeaderTitle);
detailChildContainerHeader.appendChild(detailChildHeaderExit);

let detailChildContainerBody = document.createElement('div');
detailChildContainerBody.id = "detailChildContainerBody";

let detailBodyName = document.createElement('div');
detailBodyName.id = 'detailBodyName';
detailBodyName.innerText = 'NAME: YESSIR?';

let detailBodyDescription = document.createElement('div');
detailBodyDescription.id = 'detailBodyDescription';
detailBodyDescription.innerText = 'Description: Smoke weed everyday and go out for a walk, maybe have some fun and play around with dawgs'

let detailBodyDeadline = document.createElement('div');
detailBodyDeadline.id = 'detailBodyDeadline';
detailBodyDeadline.innerText = 'Deadline: 2020 MFFF'

detailChildContainerBody.appendChild(detailBodyName);

detailChildContainerBody.appendChild(detailBodyDescription);

detailChildContainerBody.appendChild(detailBodyDeadline);

detailChildContainer.appendChild(detailChildContainerHeader);

detailChildContainer.appendChild(detailChildContainerBody);

export { detailChildContainer }

export { detailExitImg };

export {detailBodyName};
export {detailBodyDescription};
export { detailBodyDeadline };
export { detailChildHeaderTitle };
