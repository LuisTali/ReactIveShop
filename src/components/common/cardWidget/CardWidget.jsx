import React,{useState,useEffect, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CardWidgetPresentacional from './CardWidgetPresentacional.jsx';
import './CardWidget.css'
import { CartContext } from '../../../context/CartContext.jsx';

const CardWidget = ({theme}) =>{
    const navigate = useNavigate();    
    const {productsInCart,setProductsInCart, handleRemove} = useContext(CartContext);
    const [showCart,setShowCart] = useState(false);
    const [cantItems,setCantItems] = useState(0);

    useEffect(()=>{
        let quantity = 0;
        for(const product of productsInCart){
            quantity += product.quantity;
        }
        setCantItems(quantity);
    },[productsInCart])

    const handleEndShopClick = () =>{
        setShowCart(false);
        navigate('/endBuy');
    }

    return <div id='shoppingCart'>
        <ShoppingCartIcon style={{cursor:'pointer'}} onClick={()=>setShowCart(!showCart)}/>
        {cantItems}
        {showCart && <div className={theme ? 'listShoppingCart light' : 'listShoppingCart dark'}>
            <ul>
                {productsInCart.length > 0 ? <>
                <CardWidgetPresentacional productsInCart={productsInCart} handleRemove={handleRemove}/>
                <button id='endShop' onClick={()=>handleEndShopClick()}>Finalizar Compra</button>
                </>
                : 'You dont have products in your cart'}
            </ul>
            
        </div>}
    </div>
}

export default CardWidget;