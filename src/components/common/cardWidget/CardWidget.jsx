import React,{useState,useEffect} from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CardWidgetPresentacional from './CardWidgetPresentacional.jsx';
import './CardWidget.css'

const CardWidget = ({theme, productsInCart, setProductsInCart}) =>{
    const [showCart,setShowCart] = useState(false);
    const [cantItems,setCantItems] = useState(0);

    useEffect(()=>{
        let quantity = 0;
        for(const product of productsInCart){
            quantity += product.quantity;
        }
        setCantItems(quantity);
    },[productsInCart])

    const handleRemove = (value) =>{
        let newProducts = productsInCart.filter((product) => product.name != value)
        setProductsInCart(newProducts);
    }

    return <div id='shoppingCart'>
        <ShoppingCartIcon style={{cursor:'pointer'}} onClick={()=>setShowCart(!showCart)}/>
        {cantItems}
        {showCart && <div className={theme ? 'listShoppingCart light' : 'listShoppingCart dark'}>
            <ul>
                {productsInCart.length > 0 ? 
                <CardWidgetPresentacional productsInCart={productsInCart} handleRemove={handleRemove}/>
                : 'You dont have products in your cart'}
            </ul>
        </div>}
    </div>
}

export default CardWidget;