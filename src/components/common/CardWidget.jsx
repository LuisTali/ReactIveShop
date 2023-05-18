import React,{useState} from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CardWidget.css'

const CardWidget = () =>{
    const [items,setItems] = useState(0);
    
    return <div id='shoppingCart'>
        <ShoppingCartIcon/>3
    </div>
}

export default CardWidget;