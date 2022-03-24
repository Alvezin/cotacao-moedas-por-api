
const toggleSlideMobile = (selector) => {
    const slides = document.querySelectorAll(selector);
    let i = 0;
    setInterval(() => {
        slides[i].classList.remove('active')
        i++
        if (i >= slides.length){
            i = 0
        }
        slides[i].classList.add('active');
    }, 7000)
    
}

window.addEventListener('load', toggleSlideMobile('.boxMobile'))
