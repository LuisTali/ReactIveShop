import React, {useState} from "react";
import CardWidget from '../../common/CardWidget.jsx'
import './Navbar.css'

import FastfoodIcon from '@mui/icons-material/Fastfood';
import BathroomIcon from '@mui/icons-material/Bathroom';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Navbar = ({theme,setTheme,products,setProducts}) =>{
    const handleClick = () =>{
        console.log('click');
    }

    return <nav className={theme ? 'light' : 'dark'}>
        <a onClick={handleClick}><FastfoodIcon/>Comida</a>
        <a onClick={handleClick}><BathroomIcon/>Higiene</a>
        <a onClick={handleClick}><ElectricBoltIcon/>Tecnologia</a>
        <a onClick={handleClick}><CheckroomIcon/>Indumentaria</a>
        <a onClick={()=>setTheme(!theme)}><DarkModeIcon/>{theme ? 'DarkTheme' : 'LightTheme'}</a>
        <CardWidget theme={theme} products={products} setProducts={setProducts}/>
    </nav>
}
export default Navbar;