import { useState, useEffect } from 'react'
import { getImage } from '../service/fact'

// Custom Hook get image
export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState(null)
  // Get image by fact
  useEffect(() => {
    if (!fact) return
    getImage(fact).then(newUrl => setImageUrl(newUrl))
  }, [fact])

  return { imageUrl }
}
