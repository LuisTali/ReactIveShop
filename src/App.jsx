import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ItemListContainer from './components/layouts/itemListContainer/ItemListContainer.jsx'
import HomePage from './components/pages/home/HomePage.jsx';
import EndBuy from './components/pages/endBuy/EndBuy.jsx';
import FoodEdit from './components/pages/foodEdit/FoodEdit.jsx';
import Layout from './components/layouts/Layout.jsx';
import './App.css';


function App() {
  const [theme,setTheme] = useState(false); //themeFalse == darkMode; themeTrue == lightMode
  const [productsInCart,setProductsInCart] = useState([]); //Comparto los productos en el carrito con Navbar y ItemListContainer

  const greeting = 'Hola, bienvenido a ReactiveShop'
  
  //<div className={theme ? 'bodyLight' : 'bodyDark'}>
  return (
    <Router>
        <Routes>
          <Route element={
            <Layout theme={theme} setTheme={setTheme} productsInCart={productsInCart} setProductsInCart={setProductsInCart}/>
          }>
            <Route exact path='/' element={
              <HomePage greeting={greeting}/>
            }/>
            <Route path='/bebidas' element={
              <ItemListContainer theme={theme} type={'drinks'} productsInCart={productsInCart} setProductsInCart={setProductsInCart}/>
            }/> 
            <Route path='/comidas' element={
              <ItemListContainer theme={theme} type={'foods'} productsInCart={productsInCart} setProductsInCart={setProductsInCart}/>
            }/>
            <Route path='/comidas/:id' element={
              <FoodEdit theme={theme} productsInCart={productsInCart} setProductsInCart={setProductsInCart}/>
            }/>
            <Route path='/endBuy' element={
              <EndBuy theme={theme} productsInCart={productsInCart} setProductsInCart={setProductsInCart}/>
            }/>
            <Route path='/*' element={
              <HomePage greeting={'Oops, we could not find this page'}/>
            }/>
          </Route>
        </Routes>
    </Router>
  )
}

export default App
