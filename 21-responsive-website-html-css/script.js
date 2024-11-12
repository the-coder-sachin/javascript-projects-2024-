const navMenuBtn = document.querySelector('.open-menu');
const navMenuCloseBtn = document.querySelector('.close-menu');

navMenuBtn.addEventListener('click', ()=>{
    document.querySelector('.nav-links').style.display = 'flex';
});

navMenuCloseBtn.addEventListener('click', ()=>{
    document.querySelector('.nav-links').style.display = 'none';
})