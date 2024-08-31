const aboutDiv = document.createElement('div')

const aboutSection = document.createElement('div');

const title = document.createElement('h1');
title.textContent = 'About Us';

const description = document.createElement('p');
description.textContent = 'Welcome to Delicious Eats, where we serve a variety of gourmet dishes prepared with the freshest ingredients. Our chefs are dedicated to creating a memorable dining experience for you and your family.';

aboutSection.appendChild(title);
aboutSection.appendChild(description);

aboutDiv.appendChild(aboutSection);

export {aboutDiv}

