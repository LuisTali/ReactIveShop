import React,{ useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ItemListContainer from './components/layouts/itemListContainer/ItemListContainer.jsx'
import HomePage from './components/pages/home/HomePage.jsx';
import EndBuy from './components/pages/endBuy/EndBuy.jsx';
import FoodEdit from './components/pages/foodEdit/FoodEdit.jsx';
import Layout from './components/layouts/Layout.jsx';
import { menuRoutes } from './routes/menuRoutes.js';
import './App.css';
import CartContextProvider from './context/CartContext.jsx';
import ThemeContextProvider from './context/ThemeContext.jsx';
export const AppContext = React.createContext();


function App() {
  const [theme,setTheme] = useState(false); //themeFalse == darkMode; themeTrue == lightMode
  const [productsInCart,setProductsInCart] = useState([]); //Comparto los productos en el carrito con Navbar y ItemListContainer
  const greeting = 'Hola, bienvenido a ReactiveShop'
  
  //<div className={theme ? 'bodyLight' : 'bodyDark'}>
  return (
    <Router>
      <CartContextProvider>
      <ThemeContextProvider>
        <Routes>
          <Route element={ <Layout/> }>
            {menuRoutes.map(({id,path,Element})=>{
              return <Route key={id} path={path} element={<Element/>} />
            })}
            <Route path='/*' element={<HomePage/>}/>
          </Route>
        </Routes>
      </ThemeContextProvider> 
      </CartContextProvider>
    </Router>
  )
}

export default App
