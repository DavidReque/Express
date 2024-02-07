const express = require('express')
const path = require('path')

const app = express()
const port = 3000
const url = `http://localhost:${port}`

// static
// app.use('/static', express.static('public'))
app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  if (req.url === '/') {
    res.statusCode = 200
    res.end('Hola David')
  }
})

// ruta
app.get('/user', (req, res) => {
  res.send('Hola ruta user')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${url}`)
})
