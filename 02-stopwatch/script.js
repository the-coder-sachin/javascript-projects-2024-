let milisecond = document.querySelector('#milisecond')
let minute = document.querySelector('#minute')
let second = document.querySelector('#second')
let startBtn = document.querySelector('#start')
let stopBtn = document.querySelector('#stop')
let resetBtn = document.querySelector('#reset')
let secondVal = 0 ;
let milisecondVal = 0 ;
let minuteVal = 0;
let minuteInterval = null;
let secondInterval = null;
let miliSecondInterval = null;
let isTopwatchRunning = false;


function startStopwatch(){
    isTopwatchRunning = true;
     minuteInterval = setInterval(() => {
      if (minuteVal < 60) {
        if (minuteVal < 10) {
          minute.textContent = `0${minuteVal}`;
        } else {
          minute.textContent = minuteVal;
        }
        minuteVal++;
      } else {
        minuteVal = 0;
      }
    }, 60000);
     secondInterval = setInterval(() => {
      if (secondVal < 60) {
        if (secondVal < 10) {
          second.textContent = `0${secondVal}`;
        } else {
          second.textContent = secondVal;
        }
        secondVal++;
      } else {
        secondVal = 0;
      }
    }, 1000);
     miliSecondInterval = setInterval(() => {
      if (milisecondVal < 100) {
        if (milisecondVal < 10) {
          milisecond.textContent = `0${milisecondVal}`;
        } else {
          milisecond.textContent = milisecondVal;
        }
        milisecondVal++;
      } else {
        milisecondVal = 0;
      }
    }, 10);
}

function pauseStopwatch(){
    clearInterval(minuteInterval)
    clearInterval(secondInterval)
    clearInterval(miliSecondInterval)
}

function resetStopwatch(){
    milisecondVal = 0;
    secondVal = 0;
    minuteVal = 0;
    minute.textContent = `00`;
    second.textContent =`00`;
    milisecond.textContent = `00`; 
}

startBtn.addEventListener('click', ()=>{
    startStopwatch()
});

stopBtn.addEventListener('click', ()=>{
    pauseStopwatch()
});

resetBtn.addEventListener('click', ()=>{
    resetStopwatch()
})