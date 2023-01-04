let button = document.querySelector(".menu");
let menu = document.querySelector(".menu-toggle");
let bar = document.getElementById("bar");
let bar2 = document.getElementById("bar2");
let bar3 = document.getElementById("bar3");

button.addEventListener("click", () => {
    menu.classList.toggle("active");
    bar.classList.toggle("active");
    bar2.classList.toggle("active");
    bar3.classList.toggle("active");
});