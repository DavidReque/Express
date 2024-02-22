import express, { json } from 'express'
import { moviesRouter } from './routes/movies.js'
import { corsMiddlewares } from './middlewares/cors.js'

const app = express()
app.use(json())
app.disable('x-powered-by')

app.use(corsMiddlewares())

app.use('/movies', moviesRouter)

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log('Server')
})
