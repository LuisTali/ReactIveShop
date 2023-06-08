import {Outlet} from 'react-router-dom';
import Navbar from './navbar/Navbar.jsx';
import Footer from './footer/Footer.jsx';

const Layout = ({theme, setTheme, productsInCart, setProductsInCart}) =>{
    return (
        <div>
            <Navbar theme={theme} setTheme={setTheme} productsInCart={productsInCart} setProductsInCart={setProductsInCart}/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Layout;