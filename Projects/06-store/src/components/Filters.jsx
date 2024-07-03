import { useId } from 'react'

export function Filters ({ price, setPrice, setCategory }) {
  const idFilterCategories = useId()
  const changePrice = (event) => {
    setPrice(event.target.value)
  }

  const changeCategorie = (event) => {
    setCategory(event.target.value)
  }
  return (
    <div className='filters'>
      <select className='selectCategories' id={idFilterCategories} onChange={changeCategorie}>
        <option value='all'>all</option>
        <option value="men's clothing" selected>Ropa Hombre</option>
        <option value="women's clothing">Ropa Mujer</option>
      </select>
      <div className='rangePrices'>
        <input type='range' name='prices' min='0' max='1000' onChange={changePrice} />
        <h4 className='priceValue'>$ {price}</h4>
      </div>
    </div>
  )
}
