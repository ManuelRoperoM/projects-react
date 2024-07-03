import { ButtonCart } from './ButtonCart'

export function Products ({ productsShow }) {
  return (
    <main className='products'>
      {
productsShow.length > 0
  ? (
    <ul>
      {
productsShow.map(product => {
  return (
    <li className='product' key={product.id}>
      <img src={product.image} alt={product.title} />
      {
product.title.length > 18
  ? (
    <h3>{product.title.substring(0, 15)}...</h3>
    )
  : (
    <h3>{product.title}</h3>
    )
}
      <ButtonCart
        product={product}
      />
      <p>${product.price}</p>
    </li>
  )
})
}
    </ul>
    )
  : (
    <h2 className='no-products'> No se encontraron productos para los filtros</h2>
    )
}
    </main>
  )
}
