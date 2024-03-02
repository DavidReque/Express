import express, { json } from 'express'
import { createMovieRouter } from './routes/movies.js'
import { corsMiddlewares } from './middlewares/cors.js'

export const createApp = ({ movieModel }) => {
  const app = express()
  app.use(json())
  app.disable('x-powered-by')

  app.use(corsMiddlewares())

  app.use('/movies', createMovieRouter({ movieModel }))

  const PORT = process.env.PORT ?? 1234

  app.listen(PORT, () => {
    console.log('Server')
  })
}
