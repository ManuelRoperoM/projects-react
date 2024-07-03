import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

export function App () {
  const { fact, refreshRandomFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const refreshFact = async () => {
    refreshRandomFact()
  }

  return (
    <main>
      <h1>APP de gatitos</h1>
      <section>
        {fact != null ? <p> {fact} </p> : <p> </p>}
        {imageUrl && <img src={`${imageUrl}`} alt='cat-image' />}
      </section>
      <button onClick={refreshFact}>
        Generate fact
      </button>
    </main>
  )
}
