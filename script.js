const btnMobile = document.getElementById('btn-mobile')

function toggleMenu(event){
    if(event.type == 'touchstart') event.preventDefault();
    
    const nav = document.getElementById('nav') //pegando a nav
    nav.classList.toggle('active') //toggle significa, add caso não tenha, e remova caso não tenha
    const active = nav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', active)
    if(active){
        event.currentTarget.setAttribute('aria-label', 'Fechar menu')
    }else{
        event.currentTarget.setAttribute('aria-label', 'Abrir menu')
    }
}

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)