import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CardWidgetPresentacional from './CardWidgetPresentacional.jsx';
import './CardWidget.css'

const CardWidget = ({theme, productsInCart, setProductsInCart}) =>{
    const navigate = useNavigate();    
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
        let newProducts = productsInCart.filter((product) => product.idCart != value)
        setProductsInCart(newProducts);
    }

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