import Icon from '@mdi/react'
import { mdiCartVariant, mdiCartRemove } from '@mdi/js'
import { ButtonCart } from './ButtonCart'
import { useCart } from '../hooks/useCart'
import { useState, useEffect } from 'react'

export function ShoppingCart () {
  const { productsInCar } = useCart()
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [totalProducts, setTotalProducts] = useState(0)
  const toogleCart = () => {
    setIsCartOpen(!isCartOpen)
  }
  useEffect(() => {
    let total = 0
    productsInCar?.forEach(product => {
      total += product.price * product.quantity
    })
    setTotalProducts(total)
  }, [productsInCar])

  return (
    <>
      <button className={`cart-button ${isCartOpen ? 'open' : ''}`} onClick={toogleCart}>
        {
      !isCartOpen
        ? (
          <Icon className='icon-cart' path={mdiCartVariant} size={1} />
          )
        : (
          <Icon path={mdiCartRemove} size={1} />
          )
    }
      </button>
      <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
        <div className='content-cart'>
          <h2>ShoppingCart</h2>
          <ul>
            {
                productsInCar.length > 0
                  ? (
                      productsInCar.map((product) => {
                        return (
                          <li className='product-cart' key={product.id}>
                            <img src={product.image} alt={product.title} />
                            <h3>{product.title}</h3>
                            <ButtonCart
                              product={product}
                            />
                            <p>${product.price * product.quantity}</p>
                          </li>
                        )
                      }))
                  : (
                    <h3>vamos compraa !!</h3>
                    )
            }
          </ul>
          <footer>
            <p>Total: {totalProducts}</p>
          </footer>
        </div>
      </div>
    </>
  )
}
