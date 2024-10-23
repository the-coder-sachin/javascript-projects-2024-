let btns = document.querySelectorAll('.qsn')

btns.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        btn.nextElementSibling.classList.toggle('hide')
        
    })
})