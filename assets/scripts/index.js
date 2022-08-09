const buildArrow = document.querySelector(".build");
const buildContainer = document.querySelector(".build-nav");
const clickBody = document.querySelector("body");
const useArrow = document.querySelector(".use");
const useContainer = document.querySelector(".use-nav");

buildArrow.addEventListener("click", () => {
  buildContainer.classList.toggle("build-clicked");
});

clickBody.addEventListener("click", (e) => {
  if (e.target.contains(buildArrow)) {
    buildContainer.classList.remove("build-clicked");
  }
});

useArrow.addEventListener("click", () => {
  useContainer.classList.toggle("use-clicked");
});

clickBody.addEventListener("click", (e) => {
  if (e.target.contains(useArrow)) {
    useContainer.classList.remove("use-clicked");
  }
});
