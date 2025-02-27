const input = document.querySelectorAll("#text2");

for (let i = 0; i < input.length; i++) {
    input[i].setAttribute("size", input[i].getAttribute("placeholder").length);
  
}