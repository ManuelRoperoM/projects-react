import { products } from '../mocks/products.json'
import { useEffect, useState } from 'react'

export const useFilter = () => {
  const [price, setPrice] = useState(0)
  const [category, setCategory] = useState('all')
  const [productsShow, setProductsShow] = useState(products)
  useEffect(() => {
    let productsFilter = products
    if (category !== 'all') {
      productsFilter = products.filter((product) => product.category === category)
    }
    productsFilter = productsFilter.filter((product) => product.price > price)
    setProductsShow(productsFilter)
  }, [price, category])

  return { price, setPrice, setCategory, productsShow }
}
