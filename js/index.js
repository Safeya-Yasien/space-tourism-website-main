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

// crew

const crewControls = document.querySelector("[data-crew-controls]");

if (crewControls) {
  const crewRole = document.querySelector(".crew__role");
  const crewName = document.querySelector(".crew__name");
  const crewBio = document.querySelector(".crew__bio");
  const crewImage = document.querySelector(".crew__image");
  const crewControls = document.querySelectorAll("[data-crew-index]");

  fetch("data.json")
    .then((response) => response.json())
    .then(({ crew }) => {
      crewControls.forEach((bullet) => {
        bullet.addEventListener("click", () => {
          const index = Number(bullet.dataset.crewIndex);

          const member = crew[index];

          crewRole.textContent = member.role;
          crewName.textContent = member.name;
          crewBio.textContent = member.bio;
          crewImage.src = member.images.webp;

          crewControls.forEach((btn) => {
            btn.classList.remove("crew__bullet--active");
          });
          bullet.classList.add("crew__bullet--active");
        });
      });
    });
}
