const buildArrow = document.querySelector(".build");
const buildContainer = document.querySelector(".build-nav");

buildArrow.addEventListener("click", () => {
  buildArrow.classList.toggle("build-clicked");
  console.log(buildContainer);
});
