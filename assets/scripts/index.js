const buildArrow = document.querySelector(".build");
const buildContainer = document.querySelector(".build-nav");
const buildBody = document.querySelectorAll("body > div:not(.build-nav)");

buildArrow.addEventListener("click", () => {
  buildContainer.classList.toggle("build-clicked");
});

// if (condition) {
// } else {
// }
buildBody.addEventListener("click", () => {
  buildContainer.classList.add("build-declicked");
});
