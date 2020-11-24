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
_('.modal__close').addEventListener('click', () => {
  _('#uploadModal').style.display = 'none';
  _('#imgDrop').removeAttribute('src')
  _('#selectFileText').classList.remove('hide-text')
})

// preview selected image before upload
_('#foto').addEventListener('change', (e) => {
  // _('.drop-icon').style.display = 'none'
  _('#imgDrop').src = URL.createObjectURL(e.target.files[0])
  _('#imgDrop').onload = () => URL.revokeObjectURL(_('#imgDrop').src)
  _('#selectFileText').classList.add('hide-text')
  // console.log(e.target.value)
})

// upload img
_('#uploadImg').addEventListener('click', (e) => {
  e.preventDefault()

  // set alert if no image selected
  if (_('#foto').files.length === 0) {
    _('.modal__upload__select').classList.add('shake-warning')
    setTimeout(() => _('.modal__upload__select').classList.remove('shake-warning'), 500);
    // _('.modal-img-select').classList.remove('shake-warning')
  } else {
    const form_data = new FormData(_('#uploadImgForm'))
    form_data.forEach((val, key) => console.log(key, val))
    // console.log(form_data.get(File.name))
  }
})
