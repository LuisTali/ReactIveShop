import React, {useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import CardWidget from '../../common/cardWidget/CardWidget.jsx'
import './Navbar.css'

import LunchDiningIcon from '@mui/icons-material/LunchDining';
import BathroomIcon from '@mui/icons-material/Bathroom';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';

const Navbar = ({theme,setTheme,productsInCart,setProductsInCart}) =>{
    const navigate = useNavigate();

    const handleClick = () =>{
        console.log('click');
    }

    return <nav className={theme ? 'light' : 'dark'}>
        <img src="https://res.cloudinary.com/dvcmeanik/image/upload/v1684852170/iuruqdqub5i4mgjw3cfs.jpg"/>
        
        <Link to='/bebidas' className={theme ? 'light' : 'dark'}><LocalDrinkIcon/>Bebidas</Link>
        <Link to='/comidas' className={theme ? 'light' : 'dark'}><LunchDiningIcon/>Comidas</Link>
        <a onClick={handleClick}><BathroomIcon/>Higiene</a>
        <a onClick={handleClick}><ElectricBoltIcon/>Tecnologia</a>
        <a onClick={handleClick}><CheckroomIcon/>Indumentaria</a>
        <a onClick={()=>setTheme(!theme)}><DarkModeIcon/>{theme ? 'DarkTheme' : 'LightTheme'}</a>
        <CardWidget theme={theme} productsInCart={productsInCart} setProductsInCart={setProductsInCart}/>
    </nav>
}
export default Navbar;