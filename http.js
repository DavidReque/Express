const express = require('express')
const path = require('path')

const app = express()
const port = 3000
const url = `http://localhost:${port}`

app.disable('x-powered-by')

app.use(express.json())

// app.use((req, res, next) => {
//   if (req.method !== 'POST') return next()
//   if (req.headers['content-type'] !== 'application/json') return next()

//   // solo llegan request que son POST y que tienen el header Content-Type: application/json
//   let body = ''

//   // escuchar el evento data
//   req.on('data', chunk => {
//     body += chunk.toString()
//   })

//   req.on('end', () => {
//     const data = JSON.parse(body)
//     data.timestamp = Date.now()
//     // mutar la request y meter la información en el req.body
//     req.body = data
//     next()
//   })
// })

// static
// app.use('/static', express.static('public'))
app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.send('<h1>Mi pagina</h1>')
})

// ruta
app.get('/user', (req, res) => {
  res.send('Hola ruta user')
})

app.post('/pokemon', (req, res) => {
  // req.body deberíamos guardar en bbdd
  res.status(201).json(req.body)
})

app.use((req, res) => {
  res.status(404).send('<h1>404</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${url}`)
})
