import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/layouts/navbar/Navbar.jsx'
import ItemListContainer from './components/layouts/itemListContainer/ItemListContainer.jsx'
import Footer from './components/layouts/footer/Footer.jsx'
import HomePage from './components/pages/home/HomePage.jsx';
import EndBuy from './components/pages/endBuy/EndBuy.jsx';
import FoodEdit from './components/pages/foodEdit/FoodEdit.jsx';
import './App.css';


function App() {
  const [theme,setTheme] = useState(false); //themeFalse == darkMode; themeTrue == lightMode
  const [productsInCart,setProductsInCart] = useState([]); //Comparto los productos en el carrito con Navbar y ItemListContainer

  const greeting = 'Hola, bienvenido a ReactiveShop'
  
  //<div className={theme ? 'bodyLight' : 'bodyDark'}>
  return (
    <Router>
        <Navbar theme={theme} setTheme={setTheme} productsInCart={productsInCart} setProductsInCart={setProductsInCart}/>
        <Routes>
          <Route exact path='/home' element={<HomePage greeting={greeting}/>}/>
          <Route path='/bebidas' element={<ItemListContainer theme={theme} type={'drinks'} productsInCart={productsInCart} setProductsInCart={setProductsInCart}/>}/> 
          <Route path='/comidas' element={<ItemListContainer theme={theme} type={'foods'} productsInCart={productsInCart} setProductsInCart={setProductsInCart}/>}/>
          <Route path='/comidas/:id' element={<FoodEdit theme={theme} productsInCart={productsInCart} setProductsInCart={setProductsInCart}/>}/>
          <Route path='/endBuy' element={<EndBuy productsInCart={productsInCart} setProductsInCart={setProductsInCart}/>}/>
          <Route path='/*' element={<HomePage greeting={'Oops, we could not find this page'}/>}/>
        </Routes>
        <Footer theme={theme}/>
    </Router>
  )
}

export default App
