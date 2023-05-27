import { useState } from 'react'
import Navbar from './components/layouts/navbar/Navbar.jsx'
import ItemListContainer from './components/layouts/itemListContainer/ItemListContainer.jsx'
import Footer from './components/layouts/footer/Footer.jsx'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [theme,setTheme] = useState(false);
  const [products,setProducts] = useState([]);

  const greeting = 'Hola, bienvenido a mi tienda virtual ReactiveShop'

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} products={products} setProducts={setProducts}/>
      <ItemListContainer theme={theme} greeting={greeting} products={products} setProducts={setProducts}/>
      <Footer theme={theme}/>
    </>
  )
}

export default App
