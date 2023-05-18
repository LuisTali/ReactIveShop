import { useState } from 'react'
import Navbar from './components/navbar/Navbar.jsx'
import ItemListContainer from './components/itemListContainer/ItemListContainer.jsx'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const greeting = 'Hola, bienvenido a mi tienda virtual ReactiveShop'

  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={greeting}/>
    </>
  )
}

export default App
