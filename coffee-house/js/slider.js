// slider width constant
const WIDTH = 1152

// get all required elements
const buttons = document.querySelectorAll('.slider__button')
const slider = document.querySelector('.slider__items')
const indicators = document.querySelectorAll('.slider__indicator')

//create required variables
let touchStart = 0
let currentStep = 0
let milliseconds = 0
let percent = 0

// set initial indicator
let currentIndicator = indicators[currentStep]

// create interval for automatic switch slide
let interval = setInterval(() => intervalFn(), 1)

// add event listeners
buttons.forEach((button) => {
  button.addEventListener('click', clickEvent)
})

slider.addEventListener('touchstart', touchStartEvent)

slider.addEventListener('mouseout', () => {
  interval = setInterval(() => intervalFn(), 1)
})

slider.addEventListener('mouseover', () => {
  clearInterval(interval)
})

slider.addEventListener('transitionend', () => {
  buttons.forEach((button) => {
    button.addEventListener('click', clickEvent)
  })
  slider.addEventListener('touchstart', touchStartEvent)
})

// event functions
function clickEvent({ target }) {
  buttons.forEach((button) => {
    button.removeEventListener('click', clickEvent)
  })
  slider.removeEventListener('touchstart', touchStartEvent)

  milliseconds = 0
  percent = 0
  currentIndicator.children[0].style.width = `${percent}%`

  clearInterval(interval)

  changeStepFn(target.classList.contains('slider__button-prev'))

  changeIndicatorFn()
  moveSlider()

  interval = setInterval(() => intervalFn(), 1)
}

function touchEndEvent({ changedTouches }) {
  slider.removeEventListener('touchend', touchEndEvent)
  slider.removeEventListener('touchcancel', touchCancelEvent)

  const difference = changedTouches[0].pageX - touchStart

  if (Math.abs(difference) > 10) {
    milliseconds = 0
    percent = 0
    currentIndicator.children[0].style.width = `${percent}%`

    changeStepFn(difference > 0)

    changeIndicatorFn()
    moveSlider()
  }

  interval = setInterval(() => intervalFn(), 1)
}

function touchCancelEvent() {
  slider.removeEventListener('touchend', touchEndEvent)
  slider.removeEventListener('touchcancel', touchCancelEvent)

  interval = setInterval(() => intervalFn(), 1)
}

function touchStartEvent(e) {
  buttons.forEach((button) => {
    button.removeEventListener('click', clickEvent)
  })
  slider.removeEventListener('touchstart', touchStartEvent)

  clearInterval(interval)

  touchStart = e.touches[0].pageX

  slider.addEventListener('touchend', touchEndEvent)
  slider.addEventListener('touchcancel', touchCancelEvent)
}

// technical functions
function moveSlider() {
  slider.style.transform = `translateX(-${WIDTH * currentStep}px)`
}

function changeIndicatorFn() {
  currentIndicator = indicators[currentStep]
}

function changeStepFn(back = false) {
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

    changeStepFn()
    changeIndicatorFn()
    moveSlider()
  }
}
