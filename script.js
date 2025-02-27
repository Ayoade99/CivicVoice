"use strict";


const barIcon = document.querySelector(".bar-icon").addEventListener("click", showLinks);

function showLinks () {
    
    const menuLinks = document.querySelector(".navbar-links");
    menuLinks.classList.toggle("show");
    
};