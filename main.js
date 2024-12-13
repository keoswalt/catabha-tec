// Mobile Navigation
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".nav-links");
const navLink = document.querySelectorAll(".nav-link")
const menuIcon = document.querySelector(".icon-hamburger");
const closeIcon = document.querySelector(".icon-close");

navToggle.addEventListener("click", () => {
    const isVisible = primaryNav.hasAttribute("data-visible");
    navToggle.setAttribute("aria-expanded", isVisible ? "false" : "true");
    primaryNav.toggleAttribute("data-visible");
    menuIcon.toggleAttribute("data-invisible");
    closeIcon.toggleAttribute("data-visible");
});

navLink.forEach(link => {
    link.addEventListener("click", () => {
        primaryNav.toggleAttribute("data-visible");
        menuIcon.toggleAttribute("data-invisible");
        closeIcon.toggleAttribute("data-visible");
        const expanded = navToggle.getAttribute("aria-expanded") === 'true' || false;
        navToggle.setAttribute("aria-expanded", !expanded);
    });
});


// Current Year

const yearOnPage = document.getElementById("currentYear")

const d = new Date();
let year = d.getFullYear();

yearOnPage.innerText = year;
