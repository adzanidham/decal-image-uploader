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

// open upload modal
_('.footer__menu--camera').addEventListener('click', () => {
  _('#uploadModal').style.display = 'block';
})

// close upload modal
_('.modal-close').addEventListener('click', () => {
  _('#uploadModal').style.display = 'none';
})
