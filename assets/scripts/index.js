const buildArrow = document.querySelector(".navbar__element--build");
const buildMenu = document.querySelector(".navbar__menu--build");
const clickBody = document.querySelector(".click-body");
const useArrow = document.querySelector(".navbar__element--use");
const useMenu = document.querySelector(".navbar__menu--use");
const resourcesArrow = document.querySelector(".navbar__element--resources");
const resourcesMenu = document.querySelector(".navbar__menu--resources");
const globeClick = document.querySelector(".navbar__globe");
const globeMenu = document.querySelector(".navbar__globe-menu");
const clickNav = document.querySelector("nav");

buildArrow.addEventListener("click", () => {
  useMenu.classList.remove("clicked");
  resourcesMenu.classList.remove("clicked");
  globeMenu.classList.remove("clicked");
  buildMenu.classList.toggle("clicked");
});

clickBody.addEventListener("click", (e) => {
  buildMenu.classList.remove("clicked");
});

clickNav.addEventListener("click", (e) => {
  if (e.target.contains(buildArrow)) {
    buildMenu.classList.remove("clicked");
  }
});

useArrow.addEventListener("click", () => {
  buildMenu.classList.remove("clicked");
  resourcesMenu.classList.remove("clicked");
  globeMenu.classList.remove("clicked");
  useMenu.classList.toggle("clicked");
});

clickBody.addEventListener("click", (e) => {
  useMenu.classList.remove("clicked");
});

clickNav.addEventListener("click", (e) => {
  if (e.target.contains(useArrow)) {
    useMenu.classList.remove("clicked");
  }
});

resourcesArrow.addEventListener("click", () => {
  buildMenu.classList.remove("clicked");
  useMenu.classList.remove("clicked");
  globeMenu.classList.remove("clicked");
  resourcesMenu.classList.toggle("clicked");
});

clickBody.addEventListener("click", (e) => {
  resourcesMenu.classList.remove("clicked");
});

clickNav.addEventListener("click", (e) => {
  if (e.target.contains(resourcesArrow)) {
    resourcesMenu.classList.remove("clicked");
  }
});

globeClick.addEventListener("click", () => {
  buildMenu.classList.remove("clicked");
  useMenu.classList.remove("clicked");
  resourcesMenu.classList.remove("clicked");
  globeMenu.classList.toggle("clicked");
});

clickBody.addEventListener("click", (e) => {
  globeMenu.classList.remove("clicked");
});

clickNav.addEventListener("click", (e) => {
  if (e.target.contains(globeClick)) {
    globeMenu.classList.remove("clicked");
  }
});
