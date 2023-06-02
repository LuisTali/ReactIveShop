import React from "react";
import './Footer.css'
const Footer = ({theme}) =>{
    return <div className={theme ? 'footer light' : 'footer dark'}>
        <a href="https://github.com/LuisTali" target="_blank">
            <h2>Creado por Luis Taliercio</h2>
            <img src="github.png"/>
        </a>
    </div>
}
export default Footer;