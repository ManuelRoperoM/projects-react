import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const [productsInCar, setProductsInCar] = useState([])
  const addToShoppingCart = (product) => {
    const productInCart = productsInCar.find(p => p.id === product.id)
    if (productInCart) return
    setProductsInCar(prevProducts => [...prevProducts, { ...product, quantity: 1 }])
  }
  const removeProductToShoppingCart = (product) => {
    const productsAfterRemove = productsInCar.filter((productCart) => productCart.id !== product.id)
    setProductsInCar(productsAfterRemove)
  }
  const updateProductQuantity = (productId, newQuantity) => {
    setProductsInCar(prevProducts =>
      prevProducts.map(p =>
        p.id === productId ? { ...p, quantity: newQuantity } : p
      )
    )
  }
  return (
    <CartContext.Provider value={{ productsInCar, addToShoppingCart, removeProductToShoppingCart, updateProductQuantity }}>
      {children}
    </CartContext.Provider>
  )
}
