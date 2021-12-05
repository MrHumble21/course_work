

//nav btn handling


const nav_btn = document.getElementById('nav-toggler-btn')


nav_btn.addEventListener('click', ()=>{
    document.getElementById('nav-items').classList.toggle('enabled');
})