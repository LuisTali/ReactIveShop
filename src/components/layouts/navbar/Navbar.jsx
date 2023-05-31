import React, {useState} from "react";
import CardWidget from '../../common/cardWidget/CardWidget.jsx'
import './Navbar.css'

import FastfoodIcon from '@mui/icons-material/Fastfood';
import BathroomIcon from '@mui/icons-material/Bathroom';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Navbar = ({theme,setTheme,productsInCart,setProductsInCart}) =>{
    const handleClick = () =>{
        console.log('click');
    }

    return <nav className={theme ? 'light' : 'dark'}>
        <img src="https://res.cloudinary.com/dvcmeanik/image/upload/v1684852170/iuruqdqub5i4mgjw3cfs.jpg"/>
        <a onClick={handleClick}><FastfoodIcon/>Comida</a>
        <a onClick={handleClick}><BathroomIcon/>Higiene</a>
        <a onClick={handleClick}><ElectricBoltIcon/>Tecnologia</a>
        <a onClick={handleClick}><CheckroomIcon/>Indumentaria</a>
        <a onClick={()=>setTheme(!theme)}><DarkModeIcon/>{theme ? 'DarkTheme' : 'LightTheme'}</a>
        <CardWidget theme={theme} productsInCart={productsInCart} setProductsInCart={setProductsInCart}/>
    </nav>
}
export default Navbar;