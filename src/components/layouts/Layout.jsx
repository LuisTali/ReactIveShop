import {Outlet} from 'react-router-dom';
import Navbar from './navbar/Navbar.jsx';
import Footer from './footer/Footer.jsx';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext.jsx';
import { CartContext } from '../../context/CartContext.jsx';

const Layout = ({}) =>{
    const {theme,setTheme} = useContext(ThemeContext);
    const {productsInCart, setProductsInCart} = useContext(CartContext);
    return (
        <div>
            <Navbar theme={theme} setTheme={setTheme} productsInCart={productsInCart} setProductsInCart={setProductsInCart}/>
            <Outlet/>
            <Footer theme={theme}/>
        </div>
    )
}

export default Layout;