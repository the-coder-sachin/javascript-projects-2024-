let display = document.querySelector('#display');
let btns = document.querySelectorAll('.btn');

btns.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        let val = btn.getAttribute('value')
        if(val === 'AC'){
            display.value = ``
        }else if(val === 'DEL'){
            let str = display.value;
            display.value = str.slice(0, str.length-1)
        }else if(val === '='){
            display.value = eval(display.value)
        }
        else{
            display.value = `${display.value}${val}`
        }
        
    })
})