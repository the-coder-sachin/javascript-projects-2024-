let navMenuBtn = document.querySelector('.nav-menu')
let navUl = document.querySelector('.nav-ul')
let toggleVerticalMenu = false;


navMenuBtn.addEventListener('click', e=>{
    
    if(!toggleVerticalMenu){
        toggleVerticalMenu = true;
        navUl.style.visibility = `visible`
        navMenuBtn.innerHTML = `<svg fill="black" class="cursor-pointer nav-cross" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>`;
    }else{
        toggleVerticalMenu = false;
        navUl.style.visibility = `hidden`
        navMenuBtn.innerHTML = `<svg fill="black" class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" height="24px"
                viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>`;
    }
})