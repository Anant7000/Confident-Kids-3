addEventListener('scroll', () => {
    // console.log(Math.ceil(scrollY))
    let x = document.querySelectorAll('.nav-item')

    if (Math.ceil(scrollY) > 700 && Math.ceil(scrollY) < 2700) {
        x[0].classList.remove('active')
        x[2].classList.remove('active')
        x[1].classList.add('active')
    } else if (Math.ceil(scrollY) > 2700) {
        x[0].classList.remove('active')
        x[1].classList.remove('active')
        x[2].classList.add('active')
    } else {
        x[2].classList.remove('active')
        x[1].classList.remove('active')
        x[0].classList.add('active')
    }
})
