const express = require('express'),
  body_parser = require('body-parser'),
  path = require('path'),
  public = path.join(__dirname, 'public'),
  routes = require('./routes'),
  port = process.env.PORT || 3000,
  app = express()

app.use(body_parser.urlencoded({ extended: true }))
app.use(body_parser.json())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})
app.use(express.static(public))

routes(app)

app.listen(port, () => console.log(`Server berjalan di port ${port}`))

