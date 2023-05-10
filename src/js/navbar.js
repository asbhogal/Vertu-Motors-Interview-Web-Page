const navbarToggleOpen = document.querySelector(".header__hamburger-button");
const navbarToggleClosed = document.querySelector(
  ".header__mobile-menu__top__button"
);
const mobileMenu = document.getElementsByClassName("header__mobile-menu")[0];

navbarToggleOpen.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

navbarToggleClosed.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});
