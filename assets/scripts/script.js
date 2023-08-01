const dataAnimate = document.querySelectorAll('[data-animate]')

function scrollAnimate() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 5)

    dataAnimate.forEach(element => {
        if (windowTop > element.offsetTop) {
            element.classList.add('animation')
        }else{
            element.classList.remove('animation')
        }
    })
}
scrollAnimate()
window.addEventListener('scroll', scrollAnimate)