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
          crewImage.alt = member.name;

          crewControls.forEach((btn) => {
            btn.classList.toggle("crew__bullet--active", btn === bullet);
            btn.setAttribute("aria-pressed", btn === bullet);
          });
        });
      });
    });
}

// destination
const tabsControls = document.querySelector("[data-destination-tabs-controls]");

if (tabsControls) {
  const destinationName = document.querySelector(".destination__planet-name");
  const destinationDescription = document.querySelector(
    ".destination__description",
  );

  const [distanceValue, travelValue] = document.querySelectorAll(
    ".destination__stat-value",
  );

  const destinationImage = document.querySelector(".destination__image");

  const tabControl = document.querySelectorAll("[data-tab-index]");

  fetch("data.json")
    .then((res) => res.json())
    .then(({ destinations }) => {
      tabControl.forEach((tab) => {
        tab.addEventListener("click", () => {
          const index = Number(tab.dataset.tabIndex);
          const destination = destinations[index];

          destinationName.textContent = destination.name;
          destinationDescription.textContent = destination.description;
          distanceValue.textContent = destination.distance;
          travelValue.textContent = destination.travel;
          destinationImage.src = destination.images.webp;
          destinationImage.alt = destination.name;

          tabControl.forEach((destination) => {
            destination.classList.toggle(
              "destination__tab--active",
              destination === tab,
            );
            destination.setAttribute("aria-pressed", destination === tab);
          });
        });
      });
    });
}

// technology
const technologyBulletsControls = document.querySelector(
  "[data-tech-bullets-controls]",
);

if (technologyBulletsControls) {
  const technologyName = document.querySelector(".technology__technology-name");
  const technologyDescription = document.querySelector(
    ".technology__description",
  );
  const technologyImage = document.querySelector(".technology__image");

  const technologyBullet = document.querySelectorAll(
    "[data-tech-bullet-index]",
  );

  fetch("data.json")
    .then((res) => res.json())
    .then(({ technology }) => {
      technologyBullet.forEach((bullet, index) => {
        bullet.setAttribute("aria-label", technology[index].name);
        bullet.addEventListener("click", () => {
          const index = Number(bullet.dataset.techBulletIndex);
          const tech = technology[index];

          technologyName.textContent = tech.name;
          technologyDescription.textContent = tech.description;
          technologyImage.src = tech.images.landscape;
          technologyImage.alt = tech.name;

          technologyBullet.forEach((btn) => {
            btn.classList.toggle("technology__bullet--active", btn === bullet);
            btn.setAttribute("aria-pressed", btn === bullet);
          });
        });
      });
    });
}
