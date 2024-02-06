const express = require('express')
const app = express()
const port = 3000
const url = `http://localhost:${port}`

app.get('/', (req, res) => {
  res.send('Hola David')
})

// ruta
app.get('/user', (req, res) => {
  res.send('Hola ruta user')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${url}`)
})
