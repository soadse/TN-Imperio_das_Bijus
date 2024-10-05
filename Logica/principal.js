let menuOpen = window.document.querySelector('.menuOpen')
let menuClose = window.document.querySelector('.menuClose')
let inicio = window.document.querySelector('.inicio')
let menu01 = window.document.querySelector('.menu01')
let menu02 = window.document.querySelector('.menu02')
let menu03 = window.document.querySelector('.menu03')
let menu04 = window.document.querySelector('.menu04')
let voltarMenu = window.document.querySelector('.voltarMenu')


function abreMenu(){
    menuOpen.style.display = 'none'
    menuClose.style.display = 'flex'
    inicio.style.display = 'flex'
    menu01.style.display = 'flex'
    menu02.style.display = 'flex'
    menu03.style.display = 'flex'
    menu04.style.display = 'flex'
    voltarMenu.style.display = 'flex'
}
function fechaMenu(){
    menuOpen.style.display = 'flex'
    menuClose.style.display = 'none'
    inicio.style.display = 'none'
    menu01.style.display = 'none'
    menu02.style.display = 'none'
    menu03.style.display = 'none'
    menu04.style.display = 'none'
    voltarMenu.style.display = 'none'
}

