const burgerButton = document.querySelector('.header__burger')
const navigation = document.querySelector('.header__nav')

burgerButton.addEventListener('click', () => {
  toggleBurger()
})

navigation.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('header__link') ||
    e.target.classList.contains('header__button')
  ) {
    if (e.target.classList.contains('active')) {
      e.preventDefault()
    }
    if (window.matchMedia('( max-width: 768px )').matches) {
      toggleBurger()
    }
  }
})

function toggleBurger() {
  if (burgerButton.classList.contains('active')) {
    navigation.style.transform = 'translateY(-200%)'
    document.body.style.overflow = ''
  } else {
    navigation.style.transform = 'translateY(0)'
    document.body.style.overflow = 'hidden'
  }
  burgerButton.classList.toggle('active')
}
