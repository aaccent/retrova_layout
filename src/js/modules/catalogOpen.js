export default () => {
  const main = document.querySelector('.main')
  const header = document.querySelector('.header')
  const catalogButtons = document.querySelectorAll('.js-catalog, .catalog-menu__close')

  if (!header) return
  let menuActive = false

  function openCatalog() {
    header.classList.add('header--catalog-open')
    main.classList.add('main--mask')

    const paddingRight = window.innerWidth - document.body.offsetWidth + 'px'
    document.querySelectorAll('.fix-block').forEach(el => el.style.paddingRight = paddingRight)
    document.body.style.paddingRight = paddingRight
    document.body.classList.add('disable-scroll')

    menuActive = true
  }

  function closeCatalog() {
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
