"use strict";

const navItem = document.querySelectorAll(".aside-nav-item");

for (let i = 0; i < navItem.length; i++) {
  navItem[i].addEventListener("click", () => {
    for (let j = 0; j < navItem.length; j++) {
      navItem[j].classList.remove("active-item");
    }
    navItem[i].classList.add("active-item");
  });
}

const link = document.querySelectorAll(".item-link");

for (let i = 0; i < link.length; i++) {
  link[i].addEventListener("click", () => {
    for (let j = 0; j < link.length; j++) {
      link[j].classList.remove("active-link");
    }
    link[i].classList.add("active-link");
  });
}

const buttonLanguage = document.querySelectorAll(".button-language");

for (let i = 0; i < buttonLanguage.length; i++) {
  buttonLanguage[i].addEventListener("click", () => {
    for (let j = 0; j < buttonLanguage.length; j++) {
      buttonLanguage[j].classList.remove("active-button");
    }
    buttonLanguage[i].classList.add("active-button");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("header__menu").addEventListener("click", () => {
   document.getElementById("menu").classList.toggle("aside-active");
  });
});


document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("header__menu").addEventListener("click", () => {
   document.getElementById("header__menu").classList.toggle("cross-active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("header__menu").addEventListener("click", () => {
   document.getElementById("content").classList.toggle("content-active");
  });
});


