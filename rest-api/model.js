const connection = require('./connection')

exports.selectAll = () => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM uploaded_image'
    connection.query(query, (error, rows, fields) => {
      if (error) return console.log(error)
      else resolve(rows)
    })
  })
}

exports.insertImg = (image, description) => {
  return new Promise((resolve, reject) => {
    const query = `INSERT INTO uploaded_image (img_name, description) VALUES (?,?)`
    connection.query(query, [image, description], (error, rows, fields) => {
      if (error) return console.log(error)
      resolve(rows)
    })
  })
}
