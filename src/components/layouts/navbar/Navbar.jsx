import React from "react";
import CardWidget from '../../common/CardWidget.jsx'
import './Navbar.css'

import FastfoodIcon from '@mui/icons-material/Fastfood';
import BathroomIcon from '@mui/icons-material/Bathroom';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import CheckroomIcon from '@mui/icons-material/Checkroom';

const Navbar = () =>{

    const handleClick = () =>{
        console.log('click');
    }

    return <nav>
        <a onClick={handleClick}><FastfoodIcon/>Comida</a>
        <a onClick={handleClick}><BathroomIcon/>Higiene</a>
        <a onClick={handleClick}><ElectricBoltIcon/>Tecnologia</a>
        <a onClick={handleClick}><CheckroomIcon/>Indumentaria</a>
        <CardWidget/>
    </nav>
}
export default Navbar;