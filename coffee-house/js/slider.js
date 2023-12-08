const WIDTH = 1152

const buttons = document.querySelectorAll('.slider__button')
const slider = document.querySelector('.slider__items')
const indicators = document.querySelectorAll('.slider__indicator')

let touchStart = 0
let currentStep = 0
let milliseconds = 0
let percent = 0

let currentIndicator = indicators[currentStep]

let interval = setInterval(() => intervalFn(), 1)

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    milliseconds = 0
    percent = 0
    currentIndicator.children[0].style.width = `${percent}%`

    clearInterval(interval)

    changeStep(button.classList.contains('slider__button-prev'))

    changeIndicator()
    moveSlider()

    interval = setInterval(() => intervalFn(), 1)
  })
})

slider.addEventListener('touchstart', (e) => {
  clearInterval(interval)

  touchStart = e.touches[0].pageX

  slider.addEventListener('touchend', touchEnd)
  slider.addEventListener('touchcancel', touchCancel)
})

slider.addEventListener('mouseout', () => {
  interval = setInterval(() => intervalFn(), 1)
})

slider.addEventListener('mouseover', () => {
  clearInterval(interval)
})

function touchEnd({ changedTouches }) {
  slider.removeEventListener('touchend', touchEnd)
  slider.removeEventListener('touchcancel', touchCancel)

  const difference = changedTouches[0].pageX - touchStart

  if (Math.abs(difference) > 10) {
    milliseconds = 0
    percent = 0
    currentIndicator.children[0].style.width = `${percent}%`

    changeStep(difference > 0)

    changeIndicator()
    moveSlider()
  }

  interval = setInterval(() => intervalFn(), 1)
}

function touchCancel() {
  slider.removeEventListener('touchend', touchEnd)
  slider.removeEventListener('touchcancel', touchCancel)

  interval = setInterval(() => intervalFn(), 1)
}

function moveSlider() {
  slider.style.transform = `translateX(-${WIDTH * currentStep}px)`
}

function changeIndicator() {
  currentIndicator = indicators[currentStep]
}

function changeStep(back = false) {
  if (back) {
    currentStep--
    if (currentStep < 0) currentStep = 2
  } else {
    currentStep++
    if (currentStep > 2) currentStep = 0
  }
}

function intervalFn() {
  milliseconds++

  percent = Math.floor(milliseconds / 30)

  currentIndicator.children[0].style.width = `${percent * 0.4}px`

  if (percent === 100) {
    percent = 0
    milliseconds = 0
    currentIndicator.children[0].style.width = percent

    changeStep()
    changeIndicator()
    moveSlider()
  }
}
