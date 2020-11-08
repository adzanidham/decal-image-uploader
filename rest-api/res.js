exports.ok = (values, res) => {
  let data = {
    'status': 200,
    'values': values
  }
  res.json(data)
  res.end()
}

exports.notFound = (values, res) => {
  let data = {
    'status': 404,
    'values': values
  }
  res.json(data)
  res.end()
}

