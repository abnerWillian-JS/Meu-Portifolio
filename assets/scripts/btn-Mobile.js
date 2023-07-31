const btn = document.querySelector('#btn_mobile')

function toggleMenu(){
    const nav = document.querySelector('#nav')
    nav.classList.toggle('active')
}

btn.addEventListener('click', toggleMenu)