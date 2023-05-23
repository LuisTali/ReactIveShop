import React,{useState} from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CardWidget.css'

const CardWidget = ({theme, products, setProducts}) =>{
    const [showCart,setShowCart] = useState(false);
    
    const handleRemove = (value) =>{
        let newProducts = products.filter((product) => product != value)
        setProducts(newProducts);
    }

    return <div id='shoppingCart'>
        <ShoppingCartIcon style={{cursor:'pointer'}} onClick={()=>setShowCart(!showCart)}/>
        {products.length}
        {showCart && <div className={theme ? 'listShoppingCart light' : 'listShoppingCart dark'}>
            <ul>
                {products.length > 0 ? 
                products.map((product)=><li><h3>{product}</h3><button onClick={()=>handleRemove(product)}>remove</button></li>) 
                : 'You dont have products in your cart'}
            </ul>
        </div>}
    </div>
}

export default CardWidget;