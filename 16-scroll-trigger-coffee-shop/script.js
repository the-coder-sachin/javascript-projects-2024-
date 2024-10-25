let navbar = document.querySelector('#navbar')
let links = document.querySelectorAll('.link');


links.forEach(link=>{
    link.addEventListener('click', e=>{
        e.preventDefault()
        
        let id = link.attributes.href.value.slice(1);
        console.log(`testing ${id}`);
        let element = document.getElementById(id);
        element.scrollIntoView({behavior:'smooth'})
    })
    
})



window.addEventListener('scroll', e=>{
    if(scrollY >=80){
      console.log(`navbar touched`);
      navbar.style.backgroundColor = `#000`
      navbar.style.height = `80px`
    }else{
        navbar.style.height = `100px`
        navbar.style.backgroundColor = `#00000041`;
    }
})