import { useEffect, useState, useRef } from 'react'

export function useSearch () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }
    if (search === '') {
      setError('Debes ingresar el nombre de una pelicula')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una pelicula con numero')
      return
    }

    if (search.length < 3) {
      setError('La busqueda debe tener mas de tres caracteres')
      return
    }

    setError(null)
  }, [search])
  return { search, setSearch, error }
}
