let main = document.getElementsByTagName('main');
let slide = document.querySelector(".slide");
let animationBtn = document.querySelector('.animation-btn');
let slideShowBtn = document.querySelector('.pause-btn');
let slideshowRangeBtn = document.querySelector(".slideshowRange");
let isAnimationON = false;
let isSlideshowRunning = false;
let slideinterval;
let animationSlider = document.querySelector(".animation-slider");
let index = 0;

// loading data on first render function
runSlideShow(sliderData[index]);



// functions 
function runSlideShow(data) {
  slide.innerHTML = `<img src=${data.img} alt="profile">
            <p>${data.content}</p>
            <h1>${data.name}...</h1>`;
  index++;
}
function startInterval(delay = 2000) {
  slideinterval = setInterval(() => {
    if (sliderData[index]) {
      runSlideShow(sliderData[index]);
    } else {
      index = 0;
      runSlideShow(sliderData[index]);
    }
  }, delay);
}
function animationSpeedFunc(e){
    let duration = (51 - e.target.value) * 0.1;
    slide.style.animation = `myAnimation ${duration}s cubic-bezier(1, 0.23, 0, 0.85) 0s infinite forwards`;
    isAnimationON = true;
    animationBtn.textContent = `stop animation`;
}
function slideshowSpeedFunc(e){
     let delay = (51 - e.target.value) * 100;
     slideShowBtn.textContent = `stop slideshow`;
     isSlideshowRunning = true;
     clearInterval(slideinterval);
     startInterval(delay);
}
function animationBtnFunc(){
    if (!isAnimationON) {
      isAnimationON = true;
      slide.classList.add("animation");
      animationBtn.textContent = `remove animation`;
    } else {
      animationBtn.textContent = `add animation`;
      isAnimationON = false;
      slide.style.animation = ``;
      slide.classList.remove("animation");
    }
}
function slideShowFunc(){
     if (!isSlideshowRunning) {
       isSlideshowRunning = true;
       slideShowBtn.textContent = `stop slideshow`;
       startInterval();
    } else {
       clearInterval(slideinterval);
       slideShowBtn.textContent = `start slideshow`;
       isSlideshowRunning = false;
     }
}



animationSlider.addEventListener('change', e=>{
    animationSpeedFunc(e)
})


animationBtn.addEventListener('click', e=>{
    animationBtnFunc()
})


slideShowBtn.addEventListener('click', e=>{
   slideShowFunc()
})

slideshowRangeBtn.addEventListener('change', e=>{
    slideshowSpeedFunc(e)
})




