// const newDiv = document.createElement("div")
// const newContent = document.createTextNode("Hi there and greetings!");
// newDiv.appendChild(newContent)

// const currentDiv = document.getElementById('content')
// currentDiv.appendChild(newDiv)

// Create and append header
const header = document.createElement('header');
const headerTitle = document.createElement('h1');
headerTitle.textContent = 'Delicious Eats';
header.appendChild(headerTitle);
document.body.appendChild(header);

// Create and append navigation
const nav = document.createElement('nav');
const navLinks = ['About Us', 'Menu', 'Contact'];
const navIds = ['about', 'menu', 'contact'];
navLinks.forEach((text, index) => {
    const link = document.createElement('a');
    link.href = `#${navIds[index]}`;
    link.textContent = text;
    nav.appendChild(link);
});
document.body.appendChild(nav);

// Create and append hero section
const hero = document.createElement('section');
hero.id = 'hero';
const heroTitle = document.createElement('h1');
heroTitle.textContent = 'Welcome to Delicious Eats';
const heroText = document.createElement('p');
heroText.textContent = 'Experience the best dining in town!';
hero.appendChild(heroTitle);
hero.appendChild(heroText);
document.body.appendChild(hero);

// Create and append about section
const about = document.createElement('section');
about.id = 'about';
const aboutTitle = document.createElement('h2');
aboutTitle.textContent = 'About Us';
const aboutText = document.createElement('p');
aboutText.textContent = 'Welcome to Delicious Eats, where we serve a variety of gourmet dishes prepared with the freshest ingredients. Our chefs are dedicated to creating a memorable dining experience for you and your family.';
about.appendChild(aboutTitle);
about.appendChild(aboutText);
document.body.appendChild(about);

// Create and append menu section
const menu = document.createElement('section');
menu.id = 'menu';
const menuTitle = document.createElement('h2');
menuTitle.textContent = 'Our Menu';
const menuText = document.createElement('p');
menuText.textContent = 'Explore our mouth-watering menu featuring a selection of appetizers, entrees, and desserts. From classic favorites to contemporary creations, there\'s something for everyone at Delicious Eats.';
menu.appendChild(menuTitle);
menu.appendChild(menuText);
document.body.appendChild(menu);

// Create and append contact section
const contact = document.createElement('section');
contact.id = 'contact';
const contactTitle = document.createElement('h2');
contactTitle.textContent = 'Contact Us';
const contactText = document.createElement('p');
contactText.innerHTML = '123 Foodie Street, Flavor Town, FT 45678<br>Email: contact@deliciouseats.com | Phone: (123) 456-7890';
contact.appendChild(contactTitle);
contact.appendChild(contactText);
document.body.appendChild(contact);

// Create and append footer
const footer = document.createElement('footer');
const footerText = document.createElement('p');
footerText.textContent = '© 2024 Delicious Eats. All rights reserved.';
footer.appendChild(footerText);
document.body.appendChild(footer);