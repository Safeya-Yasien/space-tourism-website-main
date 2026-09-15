const navToggle = document.querySelector(".mobile-nav-toggle");
const navClose = document.querySelector(".mobile-nav__close");
const primaryNav = document.querySelector(".primary-nav");

navToggle.addEventListener("click", () => {
  primaryNav.setAttribute("data-visible", "true");
  navToggle.setAttribute("aria-expanded", "true");
});
navClose.addEventListener("click", () => {
  primaryNav.setAttribute("data-visible", "false");
  navToggle.setAttribute("aria-expanded", "false");
});
