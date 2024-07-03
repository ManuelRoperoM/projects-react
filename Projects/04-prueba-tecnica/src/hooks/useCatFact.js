import { useEffect, useState } from 'react'
import { fetchRandomFact } from '../service/fact'

// Custom Hook get random fact (fetch)
export function useCatFact () {
  const [fact, setFact] = useState(null)
  // Get cat fact
  const refreshRandomFact = () => {
    fetchRandomFact().then(newFact => setFact(newFact))
  }

  useEffect(refreshRandomFact, [])

  return { fact, refreshRandomFact }
}
