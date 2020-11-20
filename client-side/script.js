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

// preview selected image before upload
_('#foto').addEventListener('change', (e) => {
  // _('.drop-icon').style.display = 'none'
  _('#imgDrop').src = URL.createObjectURL(e.target.files[0])
  _('#imgDrop').onload = () => URL.revokeObjectURL(_('#imgDrop').src)
  // console.log(e.target.value)
})
