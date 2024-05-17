export default () => {
  let activeSubmenu = null

  const body = document.body
  const header = document.querySelector('.header')
  const headerMenu = document.querySelector('.header__menu')
  const burgerBtn = document.querySelector('.hamburger-btn')
  const headerCatalog = document.querySelector('.header__catalog')

  if (!burgerBtn) return

  function closeMobileMenus() {
    headerCatalog?.classList.remove('_active')
    activeSubmenu?.classList.remove('_active')
    activeSubmenu = null
  }

  burgerBtn.addEventListener('click', () => {
    body.classList.toggle('menu-is-open')
    burgerBtn.classList.toggle('hamburger-btn--open')
    headerMenu.classList.toggle('_active')
    headerMenu.style.height = `calc(100dvh - ${header.offsetHeight}px)`

    if (!body.classList.contains('menu-is-open')) closeMobileMenus()
  })

  const itemWithSubitems = document.querySelectorAll('.header__menu .menu__sublist-wrapper')
  const mobileMenuFooter = document.querySelector('.mobile-menu__footer')

  itemWithSubitems.forEach(item => {
    if (window.innerWidth <= 1200) {
      const button = item.parentElement.querySelector('.menu__link')
      button.onclick = () => {
        item.style.top = `${header.offsetHeight}px`
        item.style.height = `calc(100dvh - ${header.offsetHeight}px)`

        activeSubmenu?.classList.remove('_active')
        item.classList.add('_active')
        activeSubmenu = item
      }


      const backButton = document.createElement('button')
      backButton.className = 'menu__back-button'
      backButton.innerHTML = `<span>${button.textContent.trim()}</span>`
      backButton.onclick = closeMobileMenus

      item.prepend(backButton)
      item.append(mobileMenuFooter.cloneNode(true))
    }
  })
}
