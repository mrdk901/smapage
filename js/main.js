var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  document.querySelector(".header-front").classList.toggle("nav-opened");
}, false);