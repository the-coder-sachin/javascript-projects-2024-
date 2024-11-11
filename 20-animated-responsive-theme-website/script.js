const scrollBtn = document.getElementById('scroll-top');
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    // Show button when scrolled down 300px
    scrollBtn.style.opacity = "0.7";
  } else {
    scrollBtn.style.opacity = "0"; // Hide button when at the top
  }
});

scrollBtn.addEventListener('click', ()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll animation
    });
})


let darkTheme = false;

const themeBtn = document.querySelector('.theme')
const themeBall = document.querySelector('.ball')

themeBtn.addEventListener('click',()=>{
    document.querySelector('body').classList.toggle('dark')
    if(darkTheme){
        darkTheme = false;
        themeBall.style.transform = `translateX(0px)`;
    }else{
        themeBall.style.transform = `translateX(16px)`;
        darkTheme = true;
    }
})