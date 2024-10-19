let counter = document.querySelector('.count')
let increase = document.querySelector('#increase')
let reset = document.querySelector('#reset')
let decrease = document.querySelector('#decrease')
let custom = document.querySelector('#custom-add')
let count = 0;

function increament(value, custom = 1){
   return eval(Number(value)+Number(custom));
}

function decreament(value, custom = 1){
   return eval(Number(value) - Number(custom));
};

function resetfunc(){
    return 0
}

increase.addEventListener('click', e=>{
    if(custom.value){
        count = increament(count, custom.value)
        counter.textContent = count;
    }else{
        count = increament(count);
        counter.textContent = count;
    }

})

decrease.addEventListener('click', e=>{
     if (custom.value) {
       count = decreament(count, custom.value);
       counter.textContent = count;
     } else {
       count = decreament(count);
       counter.textContent = count;
     }
})

reset.addEventListener('click', e=>{
     count = resetfunc(count);
     counter.textContent = count;
})

