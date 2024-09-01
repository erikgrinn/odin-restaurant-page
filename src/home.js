import image1 from "./images/alien-dishes.jpg";
const homeImage = document.createElement("img");
homeImage.src = image1;

const homeDiv = document.createElement('div')

// Create and append hero section
const hero = document.createElement('div');
hero.id = 'mainTitle';
const heroTitle = document.createElement('h1');
heroTitle.textContent = 'Welcome to Delicious Eats';
const heroText = document.createElement('p');
heroText.textContent = 'Experience the best dining in town!';
hero.appendChild(heroTitle);
hero.appendChild(heroText);
homeDiv.appendChild(hero);

// Create and append about section
const about = document.createElement('section');
about.id = 'about';
const aboutTitle = document.createElement('h2');
aboutTitle.textContent = 'About Us';
const aboutText = document.createElement('p');
aboutText.textContent = 'Welcome to Delicious Eats, where we serve a variety of gourmet dishes prepared with the freshest ingredients. Our chefs are dedicated to creating a memorable dining experience for you and your family.';
about.appendChild(aboutTitle);
about.appendChild(aboutText);
homeDiv.appendChild(about);

// Create and append menu section
const menu = document.createElement('section');
menu.id = 'menu';
const menuTitle = document.createElement('h2');
menuTitle.textContent = 'Our Menu';
const menuText = document.createElement('p');
menuText.textContent = 'Explore our mouth-watering menu featuring a selection of appetizers, entrees, and desserts. From classic favorites to contemporary creations, there\'s something for everyone at Delicious Eats.';
menu.appendChild(menuTitle);
menu.appendChild(menuText);
homeDiv.appendChild(menu);

// Create and append contact section
const contact = document.createElement('section');
contact.id = 'contact';
const contactTitle = document.createElement('h2');
contactTitle.textContent = 'Contact Us';
const contactText = document.createElement('p');
contactText.innerHTML = '123 Foodie Street, Flavor Town, FT 45678<br>Email: contact@deliciouseats.com | Phone: (123) 456-7890';
contact.appendChild(contactTitle);
contact.appendChild(contactText);
homeDiv.appendChild(contact);

export {homeDiv, homeImage}



