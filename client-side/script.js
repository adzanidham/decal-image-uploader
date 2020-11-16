function _(el) {
  return document.querySelector(el)
}

// set single gallery
_('.footer__menu--single').addEventListener('click', () => {
  _('#imgGallery').classList.replace(_('#imgGallery').className, 'image__gallery--single')
})

// set grid gallery
_('.footer__menu--grid').addEventListener('click', () => {
  _('#imgGallery').classList.replace(_('#imgGallery').className, 'image__gallery--grid')
})
