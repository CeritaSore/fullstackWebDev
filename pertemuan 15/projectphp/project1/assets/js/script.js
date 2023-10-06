const getBody = document.querySelector("body");
const getNav = document.querySelector("nav");
const switching = document.querySelector(".switch");
const jumbotron = document.querySelector(".jumbotron");
const icon = document.querySelector(".bi-brightness-high");
const card = document.querySelector(".card-body");
const bordering = document.querySelector(".main");
const footTitle = document.querySelector(".col-md-6.footer-head");

switching.addEventListener("click", function () {
  getBody.classList.toggle("bg-dark");
  getNav.classList.toggle("bg-dark");
  getNav.classList.toggle("navbar-dark");
  jumbotron.classList.toggle("bg-dark");
  jumbotron.classList.toggle("text-light");
  card.classList.toggle("bg-dark");
  bordering.classList.toggle("bg-dark");
  if (icon.classList.contains("bi-brightness-high")) {
    icon.classList.remove("bi-brightness-high");
    icon.classList.add("bi-moon", "text-light");
  } else {
    icon.classList.remove("bi-moon", "text-light");
    icon.classList.add("bi-brightness-high");
  }
  if (bordering.classList.contains("bg-dark")) {
    bordering.classList.add("border-top", "border-bottom", "border-light");
  } else {
    bordering.classList.remove("border-top", "border-bottom", "border-light");
  }
  if (card.classList.contains("bg-dark")) {
    card.classList.add("border-light", "text-light");
  } else {
    card.classList.remove("border-light", "text-light");
  }
  footTitle.classList.toggle("text-light");
  lambang.classList.toggle("text-light");
});
