const multer = require('multer'),
  path = require('path'),
  fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './public/uploaded-img')
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  }),
  uploadImg = multer({ storage: fileStorageEngine })

module.exports = app => {
  const image = require('./controller')

  app.route('/')
    .get(image.index)

  app.route('/api/image')
    .get(image.getImages)
    .post(uploadImg.single('image'), image.postImage)
}
