let hour = document.querySelector('#hour')
let minute = document.querySelector('#minute')
let second = document.querySelector('#second')
let amPm = document.querySelector('#am-pm')
let themeBtn = document.querySelector('#themeBtn')
let body = document.querySelector('body')
let themeMode = 'light';

themeBtn.addEventListener('click', ()=>{
    if(themeMode == 'light'){
        themeMode = `dark`
        body.style.backgroundColor = `var(--dark-bg-color)`;
        body.style.color = `var(--dark-color)`;
        themeBtn.style.filter = `invert()`;
        themeBtn.textContent = `theme: ${themeMode}`
    }else{
        themeBtn.style.filter = ``;
        body.style.backgroundColor = `var(--light-bg-color)`;
        body.style.color = `var(--light-color)`;
        themeMode = `light`
        themeBtn.textContent = `theme: ${themeMode}`
    }
})



function runClock (){
   setInterval(() => {
    let time = new Date;
    let currentSecond = time.getSeconds();
    if(currentSecond<10){
        second.textContent = `0${currentSecond}`
    }else{
        second.textContent = currentSecond
    }
    let currentMinute = time.getMinutes();
    if (currentMinute < 10) {
      minute.textContent = `0${currentMinute}`;
    } else {
      minute.textContent = currentMinute;
    }
    let currentHour = time.getHours();
    if(currentHour>12){
        currentHour = currentHour - 12;
        amPm.textContent = `PM`
        if (currentHour < 10) {
          hour.textContent = `0${currentHour}`;
        } else {
          hour.textContent = currentHour;
        }
    }else{
        amPm.textContent = `AM`
    }
   }, 1000);
   
}

runClock()
