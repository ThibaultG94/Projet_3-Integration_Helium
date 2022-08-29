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
const linkAnim1 = document.querySelector(
  ".news__container-top-partnairs > a:nth-child(1)"
);
const linkAnim2 = document.querySelector(
  ".news__container-top-partnairs > a:nth-child(2)"
);
const linkAnim3 = document.querySelector(
  ".news__container-top-partnairs > a:nth-child(3)"
);
const linkAnim4 = document.querySelector(
  ".news__container-top-partnairs > a:nth-child(4)"
);
const linkAnim5 = document.querySelector(
  ".news__container-top-partnairs > a:nth-child(5)"
);
const linkAnim6 = document.querySelector(
  ".news__container-top-partnairs > a:nth-child(6)"
);
const imgAnim1 = document.querySelector(
  ".section-use__partnairs-logo > img:nth-child(1)"
);
const imgAnim2 = document.querySelector(
  ".section-use__partnairs-logo > img:nth-child(2)"
);
const imgAnim3 = document.querySelector(
  ".section-use__partnairs-logo > img:nth-child(3)"
);
const imgAnim4 = document.querySelector(
  ".section-use__partnairs-logo > img:nth-child(4)"
);
const imgAnim5 = document.querySelector(
  ".section-use__partnairs-logo > img:nth-child(5)"
);
const imgAnim6 = document.querySelector(
  ".section-use__partnairs-logo > img:nth-child(6)"
);
const imgAnim7 = document.querySelector(
  ".section-use__partnairs-logo > img:nth-child(7)"
);
const imgAnim8 = document.querySelector(
  ".section-use__partnairs-logo > img:nth-child(8)"
);
const imgAnim9 = document.querySelector(
  ".section-use__partnairs-logo > img:nth-child(9)"
);
const imgAnim10 = document.querySelector(
  ".section-use__partnairs-logo > img:nth-child(10)"
);

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

window.addEventListener("scroll", () => {
  let scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;
  console.log(scrollValue);
  if (scrollValue > 0.18) {
    linkAnim1.style.animation = "newsAnim 1.5s both";
    linkAnim2.style.animation = "newsAnim 1.5s both";
    linkAnim3.style.animation = "newsAnim 1.5s both";
    linkAnim4.style.animation = "newsAnim 1.5s both";
    linkAnim5.style.animation = "newsAnim 1.5s both";
    linkAnim6.style.animation = "newsAnim 1.5s both";
  }
  if (scrollValue > 0.73) {
    imgAnim1.style.animation = "useAnim 1.5s both";
    imgAnim2.style.animation = "useAnim 1.5s both";
    imgAnim3.style.animation = "useAnim 1.5s both";
    imgAnim4.style.animation = "useAnim 1.5s both";
    imgAnim5.style.animation = "useAnim 1.5s both";
    imgAnim6.style.animation = "useAnim 1.5s both";
    imgAnim7.style.animation = "useAnim 1.5s both";
    imgAnim8.style.animation = "useAnim 1.5s both";
    imgAnim9.style.animation = "useAnim 1.5s both";
    imgAnim10.style.animation = "useAnim 1.5s both";
  }
});
