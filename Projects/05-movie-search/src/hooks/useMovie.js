import { useEffect, useRef, useState } from 'react'
import error from '../API/error.json'
import { searchMovies } from '../services/movie'
import Search from '../API/movies.json'
export function useMovies () {
  const [responseMovies, setResponseMovies] = useState([])
  const [mappedMovies, setMappedMovies] = useState([])
  const previousSearch = useRef('')
  const movies = responseMovies.Search ? responseMovies.Search : Search.Search
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
      previousSearch.current = search
      const responseMovies = await searchMovies({ search })
      setResponseMovies(responseMovies)
    } else {
      setResponseMovies(error)
    }
  }
  return { mappedMovies, getMovies }
}
