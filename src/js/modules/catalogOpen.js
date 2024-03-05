export default () => {
  const main = document.querySelector('.main')
  const header = document.querySelector('.header')
  const catalogButtons = document.querySelectorAll('.js-catalog, .catalog-menu__close')
  const headerCatalog = document.querySelector('.header__catalog')
  const mobileMenuFooter = document.querySelector('.mobile-menu__footer')

  if (!header) return
  let menuActive = false
  const isMobile = () => window.matchMedia('(max-width: 1100px)').matches

  let activeCatalog = null

  function closeMobileCatalog() {
    activeCatalog?.classList.remove('_active')
    activeCatalog = null
  }

  if (isMobile()) {
    const catalogMenuBody = document.querySelector('.catalog-menu__body')

    const backButton = document.createElement('button')
    backButton.className = 'menu__back-button'
    backButton.innerHTML = `<span>Каталог</span>`
    backButton.onclick = () => {
      headerCatalog.classList.remove('_active')
    }

    catalogMenuBody.prepend(backButton)
    catalogMenuBody.append(mobileMenuFooter.cloneNode(true))

    document.querySelectorAll('.menu-catalog__list-wrapper').forEach((item) => {
      item.style.height = `calc(100dvh - ${header.offsetHeight}px)`
      item.style.top = `${header.offsetHeight}px`

      const button = item.parentElement.querySelector('.menu-catalog__title')
      button.onclick = () => {
        item.classList.add('_active')
        activeCatalog = item
      }

      const backButton = document.createElement('button')
      backButton.className = 'menu__back-button'
      backButton.innerHTML = `<span>${button.textContent.trim()}</span>`
      backButton.onclick = closeMobileCatalog

      item.prepend(backButton)
      item.append(mobileMenuFooter.cloneNode(true))
    })
  }

  function openMobileCatalog() {
    headerCatalog.classList.add('_active')
    headerCatalog.style.height = `calc(100dvh - ${header.offsetHeight}px)`
    headerCatalog.style.top = `${header.offsetHeight}px`
  }

  function openCatalog() {
    if (isMobile()) return openMobileCatalog()

    header.classList.add('header--catalog-open')
    main.classList.add('main--mask')

    const paddingRight = window.innerWidth - document.body.offsetWidth + 'px'
    document.querySelectorAll('.fix-block').forEach(el => el.style.paddingRight = paddingRight)
    document.body.style.paddingRight = paddingRight
    document.body.classList.add('disable-scroll')

    menuActive = true
  }

  function closeCatalog() {
    if (isMobile()) return

    header.classList.remove('header--catalog-open')
    main.classList.remove('main--mask')

    document.querySelectorAll('.fix-block').forEach(el => el.style.paddingRight = '0px')
    document.body.style.paddingRight = '0px'
    document.body.classList.remove('disable-scroll')

    menuActive = false
  }

  catalogButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      menuActive ? closeCatalog() : openCatalog()
    })
  })

  main?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeCatalog()
  })
}
