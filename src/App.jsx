import { useState } from 'react'
import Navbar from './components/layouts/navbar/Navbar.jsx'
import ItemListContainer from './components/layouts/itemListContainer/ItemListContainer.jsx'
import Footer from './components/layouts/footer/Footer.jsx'

import './App.css'

function App() {
  const [theme,setTheme] = useState(false); //themeFalse == darkMode; themeTrue == lightMode
  const [productsInCart,setProductsInCart] = useState([]); //Comparto los productos en el carrito con Navbar y ItemListContainer

  const greeting = 'Hola, bienvenido a mi tienda virtual ReactiveShop'

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} productsInCart={productsInCart} setProductsInCart={setProductsInCart}/>
      <ItemListContainer theme={theme} greeting={greeting} productsInCart={productsInCart} setProductsInCart={setProductsInCart}/>
      <Footer theme={theme}/>
    </>
  )
}

export default App
