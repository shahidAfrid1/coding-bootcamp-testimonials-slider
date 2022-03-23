const buttons = document.querySelectorAll('.button img')
const prevBtn = buttons[0]
const nextBtn = buttons[1]
const slide = document.querySelector('.slide-container')

let moveToLeft = true
let moveToRight = false
prevBtn.addEventListener('click', handlePrevTransition)
function handlePrevTransition(){
    if(!moveToRight) return
    slide.classList.add("right")
    slide.classList.remove("left")
    moveToRight =! moveToRight
    moveToLeft =! moveToLeft
}

nextBtn.addEventListener('click', handleNextTransition)

function handleNextTransition(){
    if(!moveToLeft) return
    slide.classList.add("left")
    slide.classList.remove("right")
    moveToRight =! moveToRight
    moveToLeft =! moveToLeft
}