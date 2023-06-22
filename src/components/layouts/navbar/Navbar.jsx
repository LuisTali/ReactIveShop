import React, {useState} from "react";
import { useNavigate, Link} from "react-router-dom";
import CardWidget from '../../common/cardWidget/CardWidget.jsx'
import './Navbar.css'
import { menuNavigate } from "../../../routes/menuNavigate.js";
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const Navbar = ({theme,setTheme,productsInCart,setProductsInCart}) =>{
    const navigate = useNavigate();
    const [dropdown,setDropdown] = useState(false);


    return <>
        <nav className={theme ? 'mobile light' : 'mobile dark'} >
            <img onClick={()=>navigate('/')} src="https://res.cloudinary.com/dvcmeanik/image/upload/v1684852170/iuruqdqub5i4mgjw3cfs.jpg"/>
            <ul className={dropdown ? "navList mobile show" : 'navList mobile'}>
                {menuNavigate.map(({id,path,title,Icon})=>{
                    return <li key={id}><Link to={path} className={theme ? 'light' : 'dark'}><Icon/>{title}</Link></li>
                })}
                <li><a onClick={()=>setTheme(!theme)} className={theme ? 'light' : 'dark'}><DarkModeIcon />{theme ? 'DarkTheme' : 'LightTheme'}</a></li>
            </ul>
            {dropdown ? <div  className="arrowMobile" onClick={()=>setDropdown(!dropdown)}>Cerrar<ArrowDropUpIcon/></div> : <div className="arrowMobile" onClick={()=>setDropdown(!dropdown)}>Menu<ArrowDropDownIcon /></div>
            }
            <CardWidget theme={theme} productsInCart={productsInCart} setProductsInCart={setProductsInCart}/>
        </nav>
    </> 
}
export default Navbar;