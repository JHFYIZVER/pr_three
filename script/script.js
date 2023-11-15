"use strict";

/* Aside */

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

const headerMenu = document.getElementById("header__menu")

document.addEventListener("DOMContentLoaded", () => {
  headerMenu.addEventListener("click", () => {
    document.getElementById("menu").classList.toggle("aside-active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("header__menu").addEventListener("click", () => {
    document.getElementById("header__menu").classList.toggle("cross-active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  headerMenu.addEventListener("click", () => {
    document.getElementById("content").classList.toggle("content-active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("content").addEventListener("click", () => {
    document.getElementById("content").classList.remove("content-active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("content").addEventListener("click", () => {
    document.getElementById("menu").classList.remove("aside-active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("content").addEventListener("click", () => {
    document.getElementById("header__menu").classList.remove("cross-active");
  });
});

/* Text read-more */

const readMore = document.getElementById("read-more");

document.addEventListener("DOMContentLoaded", () => {
  readMore.addEventListener("click", () => {
    document.getElementById("full-text").classList.toggle("full-text-active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  readMore.addEventListener("click", () => {
    document.getElementById("icon-read-more").classList.toggle("icon-read-more-active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  readMore.addEventListener("click", () => {
    document.getElementById("icon-read-more").classList.toggle("icon-read-more-active");
  });
});


readMore.addEventListener("click", () => {
  if (readMore.innerText === "Читать далее"){
    readMore.innerText = "Скрыть"
  } else {
    readMore.innerText = "Читать далее"
  };
})

/* Btn-show-all */

const showAll = document.getElementById("btn-show-all");


showAll.addEventListener("click", () => {
  if (showAll.innerText === "Показать все"){
    showAll.innerText = "Скрыть"
  } else {
    showAll.innerText = "Показать все"
  };
})

document.addEventListener("DOMContentLoaded", () => {
  showAll.addEventListener("click", () => {
    document.getElementById("brend-wrapper").classList.toggle("main__swiper-brend-wrapper-active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  showAll.addEventListener("click", () => {
    document.getElementById("show-all").classList.toggle("main__brand-show-all-active");
  });
});

/* Repair */

const showAllRepair = document.getElementById("btn-show-all-repair");

showAllRepair.addEventListener("click", () => {
  if (showAllRepair.innerText === "Показать все"){
    showAllRepair.innerText = "Скрыть"
  } else {
    showAllRepair.innerText = "Показать все"
  };
})


document.addEventListener("DOMContentLoaded", () => {
  showAllRepair.addEventListener("click", () => {
    document.getElementById("show-all-repair").classList.toggle("main__repair-show-all-active");
  });
});


document.addEventListener("DOMContentLoaded", () => {
  showAllRepair.addEventListener("click", () => {
    document.getElementById("repair-wrapper").classList.toggle("main__swiper-repair-wrapper-active");
  });
});

const brendItem = document.querySelectorAll(".swiper-brend-item");


for (let i = 0; i < brendItem.length; i++) {
  brendItem[i].addEventListener("click", () => {
    for (let j = 0; j < brendItem.length; j++) {
      brendItem[j].classList.remove("swiper-brend-item-active");
    }
    brendItem[i].classList.add("swiper-brend-item-active");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  showAllRepair.addEventListener("click", () => {
    document.getElementById("brend-wrapper").classList.toggle("brend-wrapper-active");
  });
});


/* Swiper */

const brendSwiper = new Swiper(".main__swiper-brend", {
  slidesPerView: "auto",
  spaceBetween: 16,
  observer: true,
  breakpoints: {
    768: {
      spaceBetween: 0,
      enabled: false,
    },
  },
  pagination: {
    el: ".brands__swiper-pagination",
    clickable: true,
    type: "bullets",
  },
});


const repairSwiper = new Swiper(".main__swiper-repair", {
  slidesPerView: "auto",
  spaceBetween: 16,
  observer: true,
  breakpoints: {
    768: {
      spaceBetween: 0,
      enabled: false,
    },
  },
  pagination: {
    el: ".repair__swiper-pagination",
    clickable: true,
    type: "bullets",
  },
});


