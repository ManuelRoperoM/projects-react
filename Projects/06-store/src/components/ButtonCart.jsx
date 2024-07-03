import Icon from '@mdi/react'
import { mdiCartPlus, mdiCartArrowUp } from '@mdi/js'
import { useCart } from '../hooks/useCart'

export function ButtonCart ({ product }) {
  const { productsInCar, addToShoppingCart, removeProductToShoppingCart, updateProductQuantity } = useCart()
  const handleRemoveCart = (product) => {
    removeProductToShoppingCart(product)
  }
  const handleAddCart = (product) => {
    addToShoppingCart(product)
  }
  const checkProductInCart = (product) => {
    return productsInCar.find(p => p.id === product.id)
  }
  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10)
    console.log('cantidad a actualizar: ', event.target.value)
    updateProductQuantity(product.id, newQuantity)
  }

  const isProductInCart = checkProductInCart(product)
  return (
    <>
      {
        isProductInCart
          ? (
            <>
              <div className='product-actions'>
                <button className='removeCart' onClick={() => handleRemoveCart(product)}>
                  <Icon path={mdiCartArrowUp} size={1} />
                </button>
                <input
                  className='input-units' type='number' min='1' value={product.quantity} onChange={handleQuantityChange}
                />
              </div>
            </>
            )
          : (
            <button className='addCart' onClick={() => handleAddCart(product)}>
              <Icon path={mdiCartPlus} size={1} />
            </button>
            )
}
    </>
  )
}
