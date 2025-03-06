"use strict";


const barIcon = document.querySelector(".bar-icon").addEventListener("click", showLinks);

function showLinks () {
    
    const menuLinks = document.querySelector(".navbar-links");
    const button = document.querySelector(".btn");
    button.classList.toggle("show");
    menuLinks.classList.toggle("show");

    
};