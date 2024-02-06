const express = require('express')
const app = express()
const port = 3000
const url = `http://localhost:${port}`

app.get('/', (req, res) => {
  res.end('Hola David')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${url}`)
})
