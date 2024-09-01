import "./styles.css";
import { homeDiv, homeImage } from "./home.js";
import { menuDiv } from "./menu.js"
import { aboutDiv } from "./about.js";

document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.getElementById('content')
    const homeBtn = document.getElementById('homeBtn');
    const menuBtn = document.getElementById('menuBtn');
    const aboutBtn = document.getElementById('aboutBtn');

    contentDiv.appendChild(homeDiv)
    contentDiv.appendChild(homeImage)
    homeBtn.style.boxShadow = 'var(--bottom-white-shadow)'
    aboutBtn.style.boxShadow = ''
    menuBtn.style.boxShadow = ''

    homeBtn.addEventListener('click', () => {
        homeBtn.style.boxShadow = 'var(--bottom-white-shadow)'
        menuBtn.style.boxShadow = ''
        aboutBtn.style.boxShadow = ''

        contentDiv.innerHTML = ''
        contentDiv.appendChild(homeDiv)
        contentDiv.appendChild(homeImage)
    })

    menuBtn.addEventListener('click', () => {
        homeBtn.style.boxShadow = ''
        menuBtn.style.boxShadow = 'var(--bottom-white-shadow)'
        aboutBtn.style.boxShadow = ''
        
        contentDiv.innerHTML = ''
        contentDiv.appendChild(menuDiv)
    })

    aboutBtn.addEventListener('click', () => {
        homeBtn.style.boxShadow = ''
        menuBtn.style.boxShadow = ''
        aboutBtn.style.boxShadow = 'var(--bottom-white-shadow)'

        contentDiv.innerHTML = ''
        contentDiv.appendChild(aboutDiv)
    })
});
