const response = require('./res'),
  Data = require('./model')

exports.index = (req, res) => {
  response.ok('Hello from decal-image-uploader api', res)
}

exports.getImages = async (req, res) => {
  try {
    const images = await Data.selectAll()
    if (images.length > 0) return response.ok(images, res)
    else response.notFound('Images data not found')
  } catch (error) {
    console.log(error)
  }
}

exports.postImage = async (req, res) => {
  const image = req.file.filename,
    description = req.body.description

  try {
    await Data.insertImg(image, description)
    response.ok('Upload image success', res)
  } catch (error) {
    console.log(error)
  }
}
