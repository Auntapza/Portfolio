let btn = document.querySelector(".hamberger"),
    nav = document.getElementsByTagName("aside")[0],
    hamBar = document.querySelectorAll(".bar");

btn.addEventListener("click", () => {
    nav.classList.toggle("active");
    hamBar.forEach(bars => {
        bars.classList.toggle("active");
    });
})