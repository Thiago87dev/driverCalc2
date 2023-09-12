const btnMobile = document.querySelector('[data-js="btn-mobile"]')

btnMobile.addEventListener('click', toggleMenu)

function toggleMenu(){
    const nav = document.querySelector('[data-js="menu-content"]')
    nav.classList.toggle('active')
}

const listMenu = document.querySelector('[data-js="list-menu"]')

listMenu.addEventListener('click', removeClass)

function removeClass(){
    const nav = document.querySelector('[data-js="menu-content"]')
    nav.classList.remove('active')
}