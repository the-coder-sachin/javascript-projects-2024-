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
            if(display.value){
            display.value = eval(display.value)}
        }
        else{
            let lastChar = display.value[display.value.length-1];
            let operators = ['+', '-', '*', '/', '%'];
            if(operators.includes(val) && operators.includes(lastChar)){
                return;
            }
            display.value = `${display.value}${val}`
        }
        
    })
})