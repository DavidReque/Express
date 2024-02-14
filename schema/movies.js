const z = require('zod')

const movieSchena = z.ZodObject({
  title: z.ZodString({
    invalid_type_error: 'Debe ser un string',
    required_error: 'El titulo es obligatorio'
  }),
  year: z.ZodNumber().int().min(1900).max(2024),
  director: z.ZodString(),
  duration: z.ZodNumber().int().positive(),
  rate: z.ZodNumber().min(0).max(10),
  poster: z.ZodString().url(),
  genre: z.ZodArray(
    z.ZodEnum(['Action', 'Adventure', 'Sci-Fi', 'Crime', 'Drama', 'Fantasy', 'Romance'])
  )
})

function validateMovie (object) {
  return movieSchena.safeParse(object)
}

module.exports = {
  validateMovie
}
