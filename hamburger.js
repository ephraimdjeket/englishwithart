const hamburgerBtn = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector("ul");

hamburgerBtn.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("hide");
  closeBtn.classList.toggle("hide");
  hamburgerBtn.classList.toggle("hamburger");
  navLinks.classList.toggle("hide");
});

closeBtn.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("hide");
  closeBtn.classList.toggle("hide");
  hamburgerBtn.classList.toggle("hamburger");
  hamburgerBtn.classList.toggle("clicked");
  closeBtn.classList.toggle("clicked");
  navLinks.classList.toggle("hide");
});
