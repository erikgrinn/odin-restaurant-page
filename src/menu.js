const menuDiv = document.createElement('div')

const menuSection = document.createElement('div');

const title = document.createElement('h1');
title.textContent = 'Menu';

const description = document.createElement('p');
description.textContent = 'this is our menu eat';

menuSection.appendChild(title);
menuSection.appendChild(description);

menuDiv.appendChild(menuSection);

export {menuDiv}