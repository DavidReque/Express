import mysql from 'mysql2/promise'

const config = {
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: '9946',
  database: 'moviesdb'
}

const connection = await mysql.createConnection(config)

export class MovieModel {
  static async getAll ({ genre }) {
    // si se busca por genero
    if (genre) {
      const lowerCaseGenre = genre.toLowerCase()

      // obtener el genero id desde la tabla de la base de datos usando genrename
      const [genres] = await connection.query(
        'SELECT id, name FROM genre WHERE LOWER(name) = ?;', [lowerCaseGenre]
      )

      if (genres.length === 0) return []

      // id del primer resultado del genero
      const [{ id }] = genres

      // obtener todas las peliculas de la tabla
      const [movies] = await connection.query(
        `SELECT title, year, director, duration, poster, rate, BIN_TO_UUID(movie.id) id 
         FROM movie 
         JOIN movie_genres ON movie.id = movie_genres.movie_id 
         WHERE movie_genres.genre_id = ?;`, [id]
      )

      return movies
    }

    const [movies] = await connection.query(
      'SELECT title, year, director, duration, poster, rate, BIN_TO_UUID(id) FROM movie;'
    )

    return movies
  }

  static async getById ({ id }) {

  }

  static async create ({ input }) {

  }

  static async delete ({ id }) {

  }

  static async update ({ id, input }) {

  }
}
