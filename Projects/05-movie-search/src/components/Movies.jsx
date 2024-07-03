// import { useMovies } from '../hooks/useMovie'

function ListOfMovies ({ movies }) {
  return (
    <ul className='movies'>
      {
        movies.map(movie => (
          <li className='movie' key={movie.id}>
            <div className='movie-info'>
              <h3>{movie.title}</h3>
              <p>{movie.year}</p>
            </div>
            <img src={movie.poster} alt={`Poster de ${movie.tditle}`} />
          </li>
        ))
      }
    </ul>
  )
}

function NotFoundMovies () {
  return (
    <p> No se encontraron peliculas</p>
  )
}

export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0

  return (
    hasMovies
      ? <ListOfMovies movies={movies} />
      : <NotFoundMovies />
  )
}
