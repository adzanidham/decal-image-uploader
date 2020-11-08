function _(el) {
  return document.getElementById(el)
}

_('upload_btn').addEventListener('click', function (e) {
  e.preventDefault()
  // console.log('hi')
  const form_data = new FormData(_('upload_form'))
  // form_data.forEach((val, key) => console.log(key, val))
  // postImage(form_data)
  let ajax = new XMLHttpRequest()
  ajax.upload.addEventListener('progress', progressHandler, false)
  ajax.addEventListener('load', completeHandler, false)
  ajax.addEventListener('error', errorHandler, false)
  ajax.addEventListener('abort', abortHandler, false)
  ajax.open('POST', 'http://localhost:3000/api/image')
  ajax.send(form_data)
})

// function postImage(form_data) {
//   let ajax = new XMLHttpRequest()
//   ajax.upload.addEventListener('progress', progressHandler, false)
//   ajax.addEventListener('load', completeHandler, false)
//   ajax.addEventListener('error', errorHandler, false)
//   ajax.addEventListener('abort', abortHandler, false)
//   ajax.open('POST', 'http://localhost:3000/api/image')
//   ajax.send(form_data)
// }

function progressHandler(e) {
  _('loaded_n_total').innerHTML = `Uploaded ${e.loaded} bytes of ${e.total}`

  let percent = (e.loaded / e.total) * 100
  let progress = Math.round(percent)
  _('progres_bar').value = progress
  _('upload_status').innerHTML = `${progress}% uploaded...`
}

function completeHandler(e) {
  _('upload_status').innerHTML = `File uploaded successfully`
}

function errorHandler(e) {
  _('upload_status').innerHTML = `File uploaded failed`
}

function abortHandler(e) {
  _('upload_status').innerHTML = `File uploaded aborted`
}

function getImageGallery() {
  fetch('http://localhost:3000/api/image')
    .then(res => res.json())
    .then(res => updateUI(res.values))
  // .then(res => console.log(res.values))
}

function updateUI(images) {
  let cards = ''
  images.forEach(image => cards += tampilCards(image))
  _('gallery').innerHTML = cards
}

function tampilCards(image) {
  return `<img src="http://localhost:3000/uploaded-img/${image.img_name}" alt="${image.description}" width="100">`
}

getImageGallery()
