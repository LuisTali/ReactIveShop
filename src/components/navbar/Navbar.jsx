import React from "react";
import CardWidget from '../../common/CardWidget.jsx'
import './Navbar.css'

import FastfoodIcon from '@mui/icons-material/Fastfood';
import BathroomIcon from '@mui/icons-material/Bathroom';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import CheckroomIcon from '@mui/icons-material/Checkroom';

const Navbar = () =>{
    return <nav>
        <a><FastfoodIcon/>Comida</a>
        <a><BathroomIcon/>Higiene</a>
        <a><ElectricBoltIcon/>Tecnologia</a>
        <a><CheckroomIcon/>Indumentaria</a>
        <CardWidget/>
    </nav>
}
export default Navbar;