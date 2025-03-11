"use strict";

const input = document.querySelectorAll("#text2");

for (let i = 0; i < input.length; i++) {
    input[i].setAttribute("size", input[i].getAttribute("placeholder").length);
  
}

const barIcon = document.querySelector(".bar-icon").addEventListener("click", showDashboard);


function showDashboard() {
    
    const dashboard = document.querySelector(".whole");
    dashboard.classList.toggle("show");
}