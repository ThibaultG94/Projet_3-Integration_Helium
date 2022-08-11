const buildArrow = document.querySelector(".build");
const buildMenu = document.querySelector(".build-nav");
const clickBody = document.querySelector(".click-body");
const useArrow = document.querySelector(".use");
const useMenu = document.querySelector(".use-nav");
const resourcesArrow = document.querySelector(".resources");
const resourcesMenu = document.querySelector(".resources-nav");
const globeClick = document.querySelector(".globe");
const globeMenu = document.querySelector(".globe-nav");
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
