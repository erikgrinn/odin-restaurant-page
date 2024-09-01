import image1 from "./images/menu-dish-1.jpg";
import image2 from "./images/menu-dish-2.jpg";
import image3 from "./images/menu-dish-3.jpg";
import image4 from "./images/menu-dish-4.jpg";
import image5 from "./images/menu-dish-5.jpg";
import image6 from "./images/menu-dish-6.jpg";

const menuImage1 = document.createElement("img");
menuImage1.src = image1;
const menuImage2 = document.createElement("img");
menuImage2.src = image2;
const menuImage3 = document.createElement("img");
menuImage3.src = image3;
const menuImage4 = document.createElement("img");
menuImage4.src = image4;
const menuImage5 = document.createElement("img");
menuImage5.src = image5;
const menuImage6 = document.createElement("img");
menuImage6.src = image6;

const menuDiv = document.createElement('div')

const menuSection = document.createElement('div');

const title = document.createElement('h1');
title.textContent = 'Menu';

const description = document.createElement('p');
description.textContent = 'this is our menu eat';

menuSection.appendChild(title);
menuSection.appendChild(description);

menuDiv.appendChild(menuSection);

const menuGrid = document.createElement('div')
menuGrid.classList.add('gallery')

menuGrid.appendChild(menuImage1)
menuGrid.appendChild(menuImage2)
menuGrid.appendChild(menuImage3)
menuGrid.appendChild(menuImage4)
menuGrid.appendChild(menuImage5)
menuGrid.appendChild(menuImage6)

menuDiv.appendChild(menuGrid)


export {menuDiv}