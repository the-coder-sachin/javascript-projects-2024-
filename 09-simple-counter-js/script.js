let counter = document.querySelector('.count')
let increase = document.querySelector('#increase')
let reset = document.querySelector('#reset')
let decrease = document.querySelector('#decrease')
let count = 0;

function increament(value){
    return value+1;
}

function decreament(value){
    return value-1;
};

function resetfunc(){
    return 0
}

increase.addEventListener('click', e=>{
    count = increament(count);
    counter.textContent = count;
})

decrease.addEventListener('click', e=>{
     count = decreament(count);
     counter.textContent = count;
})

reset.addEventListener('click', e=>{
     count = resetfunc(count);
     counter.textContent = count;
})

