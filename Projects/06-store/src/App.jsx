import './styles/App.css'
import { useFilter } from './hooks/useFilters'
import { Filters } from './components/Filters'
import { Products } from './components/Products'
import { ShoppingCart } from './components/ShoppingCart'
import { CartProvider } from './contexts/cart'

function App () {
  const { price, setPrice, setCategory, productsShow } = useFilter()
  return (
    <CartProvider>
      <header> <h1>Online Shopping</h1> </header>
      <Filters price={price} setPrice={setPrice} setCategory={setCategory} />
      <ShoppingCart />
      <Products
        productsShow={productsShow}
      />
    </CartProvider>
  )
}

export default App
