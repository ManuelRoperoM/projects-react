import { useEffect, useRef, useState } from 'react'
import error from '../API/error.json'
import { searchMovies } from '../services/movie'

export function useMovies () {
  const [responseMovies, setResponseMovies] = useState([])
  const [mappedMovies, setMappedMovies] = useState([])
  const previousSearch = useRef('')
  const movies = responseMovies.Search
  useEffect(() => {
    const mapped = movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))
    setMappedMovies(mapped)
  }, [responseMovies])
  const getMovies = async ({ search }) => {
    if (search) {
      if (previousSearch.current !== search) {
        previousSearch.current = search
        return
      }
      previousSearch.current = search
      const responseMovies = await searchMovies({ search })
      setResponseMovies(responseMovies)
    } else {
      setResponseMovies(error)
    }
  }
  return { mappedMovies, getMovies }
}
