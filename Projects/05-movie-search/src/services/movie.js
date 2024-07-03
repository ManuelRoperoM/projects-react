const API_KEY = '786e2003'

export const searchMovies = async ({ search }) => {
  if (search === '') return null
  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
    const json = await response.json()
    return json
  } catch (error) {
    throw new Error('Error inesperado', error)
  }
}
