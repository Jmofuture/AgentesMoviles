const ham = document.querySelector(".ham");
const menu = document.querySelector(".menu");

ham.addEventListener("click", () => {
    menu.classList.toggle("active");
});