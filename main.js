let burgerBar = document.querySelector(".burger");
let navigationBar = document.querySelector(".navigation-bar");


burgerBar.addEventListener("click", () => {

    navigationBar.classList.toggle("active");
})