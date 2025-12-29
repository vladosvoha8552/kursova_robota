function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    const burger = document.querySelector(".burger");

    menu.classList.toggle("show");
    burger.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");

    burger.addEventListener("click", () => {
        burger.classList.toggle("open");
    });
});
