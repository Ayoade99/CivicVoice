"use strict";

const barIcon = document.querySelector(".bar-icon").addEventListener("click", showDashboard);


function showDashboard() {
    
    const dashboard = document.querySelector(".whole");
    dashboard.classList.toggle("show");
}