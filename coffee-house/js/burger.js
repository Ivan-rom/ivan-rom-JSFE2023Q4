const burgerButton = document.querySelector('.header__burger')
const navigation = document.querySelector('.header__nav')
const headerLinks = document.querySelectorAll('.header__link')

burgerButton.addEventListener('click', () => {
  if (burgerButton.classList.contains('active')) {
    navigation.style.transform = 'translateY(-200%)'
  } else {
    navigation.style.transform = 'translateY(0)'
  }
  burgerButton.classList.toggle('active')
})

headerLinks.forEach((link) =>
  link.addEventListener('click', () => {
    navigation.style.transform = 'translateY(-200%)'
    burgerButton.classList.toggle('active')
  })
)
