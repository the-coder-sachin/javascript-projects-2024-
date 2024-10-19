let verticalMenu = document.querySelector(".menu");
let navToggleBtn = document.querySelector(".nav-toggle");
let content = document.querySelector(".content");
let isVerticalMEnuVisible = false;
navToggleBtn.addEventListener("click", (e) => {
  if (!isVerticalMEnuVisible) {
    verticalMenu.style.display = `flex`;
    isVerticalMEnuVisible = true;
    content.style.width = `calc(100% - 100px)`;
  } else {
    isVerticalMEnuVisible = false;
    verticalMenu.style.display = "none";
    content.style.width = `calc(100%)`;
  }
});
