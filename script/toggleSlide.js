const btnFront = document.getElementById('btn-front');
const btnBack = document.getElementById('btn-back');

const slideBox = document.getElementById('slide-box').children;

console.log(slideBox)


btnFront.addEventListener('click', () =>{
    for (elemento in slideBox){
        if (slideBox[elemento].nextElementSibling === null){
            slideBox[elemento].classList.remove('active');
            slideBox[0].classList.add('active');
            break
        } else if(slideBox[elemento].classList.contains('active')){
            slideBox[elemento].classList.remove('active')
            slideBox[elemento].nextElementSibling.classList.add('active');
            break
        }
    }
})

btnBack.addEventListener('click', () =>{
    for (elemento in slideBox){
        if (slideBox[0].classList.contains('active')){

            slideBox[0].classList.remove('active')
            slideBox[slideBox.length - 1].classList.add('active')
            break
        } else if (slideBox[elemento].classList.contains('active')){
            slideBox[elemento].previousElementSibling.classList.add('active')

            slideBox[elemento].classList.remove('active');
            break
        }
    }
})



