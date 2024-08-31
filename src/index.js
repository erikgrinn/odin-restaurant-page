import "./styles.css";
import { homeDiv } from "./home.js";
import { aboutDiv } from "./about.js";

document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.getElementById('content')
    const homeBtn = document.getElementById('homeBtn');
    const aboutBtn = document.getElementById('aboutBtn');

    contentDiv.appendChild(homeDiv)

    homeBtn.addEventListener('click', () => {
        contentDiv.innerHTML = ''
        contentDiv.appendChild(homeDiv)
        // contentDiv.appendChild(homeImage)
    })

    aboutBtn.addEventListener('click', () => {
        contentDiv.innerHTML = ''
        contentDiv.appendChild(aboutDiv)
    })
});
