const options = document.querySelectorAll('.ability section')
const next = document.querySelector('.next')
const back = document.querySelector('.arrow2')

let secIndex = 0

//carouselNext
function carouselNext() {
    options[secIndex].classList.remove('option')
    secIndex++

    const max = options.length

    if (secIndex >= max) {
        secIndex = 0
    }

 options[secIndex].classList.add('option')
}

next.addEventListener('click', () => carouselNext())

setInterval (carouselNext, 3000)

//carouselBack
function carouselBack() {
    options[secIndex].classList.remove('option')
    secIndex--

    if (secIndex < 0) {
        secIndex = 2
    }

 options[secIndex].classList.add('option')
}

back.addEventListener('click', () => carouselBack())