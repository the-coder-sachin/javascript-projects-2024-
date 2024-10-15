console.log(`hello india`);
let hourHand = document.querySelector('#hour')
let minuteHand = document.querySelector('#minute')
let secondHand = document.querySelector('#second')

function displayTime(){
    let date = new Date();
    console.log(`function runnning`);
    

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hourRotation = 30 * hh + mm/2 + ss/120;
    let minuteRotation = 6 * mm + ss/10;
    let secondRotation = 6 * ss;

    hourHand.style.transform = `rotate(${hourRotation}deg)`
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`
    secondHand.style.transform = `rotate(${secondRotation}deg)`
};
setInterval(displayTime,1000)