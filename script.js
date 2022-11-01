const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('header__top__nav')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})