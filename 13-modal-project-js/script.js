console.log("good luck");
let infoBtn = document.querySelector(".info-btn");
let closeBtn = document.querySelector(".close-btn");

let titleDiv = document.querySelector(".title-div");
let infoDiv = document.querySelector(".info-div");

infoBtn.addEventListener("click", (e) => {
  titleDiv.classList.add("hide");
  infoDiv.classList.remove("hide");
});

closeBtn.addEventListener("click", (e) => {
  titleDiv.classList.remove("hide");
  infoDiv.classList.add("hide");
});
