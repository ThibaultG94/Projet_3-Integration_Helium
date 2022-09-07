const menuBurger = document.querySelector(".menuwhite");
const menuSmartphone = document.querySelector(".navbar__smartphone--menu");
const closeMenu = document.querySelector(".cross");
const buildResponse = document.querySelector(".build__responsive");
const useResponse = document.querySelector(".use__responsive");
const resourcesResponse = document.querySelector(".resources__responsive");
const buildResponseMenu = document.querySelector(".build__responsive--menu");
const useResponseMenu = document.querySelector(".use__responsive--menu");
const resourcesResponseMenu = document.querySelector(
  ".resources__responsive--menu"
);

menuBurger.addEventListener("click", () => {
  menuSmartphone.classList.add("clicked__menu--open");
  menuSmartphone.classList.remove("clicked__menu--close");
});

closeMenu.addEventListener("click", () => {
  menuSmartphone.classList.add("clicked__menu--close");
  menuSmartphone.classList.remove("clicked__menu--responsive");
});

buildResponse.addEventListener("click", () => {
  buildResponseMenu.classList.toggle("response_clicked");
});

useResponse.addEventListener("click", () => {
  useResponseMenu.classList.toggle("response_clicked");
});

resourcesResponse.addEventListener("click", () => {
  resourcesResponseMenu.classList.toggle("response_clicked2");
});
