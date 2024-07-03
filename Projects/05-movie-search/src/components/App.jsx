import './App.css'
import { Movies } from './Movies'
import { useSearch } from '../hooks/useSearch'
import { useMovies } from '../hooks/useMovie'

function App () {
  const { search, setSearch, error } = useSearch()
  const { mappedMovies, getMovies } = useMovies()
  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    if (newQuery.startsWith(' ')) return
    setSearch(event.target.value)
  }

  return (
    <div className='page'>
      <header>
        <h1>MyMovies</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} name='search' placeholder='Avengers' />
          <button type='sumbit'>Search</button>
        </form>
        {error && <p className='error'> {error} </p>}
      </header>
      <main>
        <Movies movies={mappedMovies} />
      </main>
    </div>
  )
}

export default App
