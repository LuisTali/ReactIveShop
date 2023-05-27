import React,{useState,useEffect} from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CardWidgetPresentacional from './CardWidgetPresentacional.jsx';
import './CardWidget.css'

const CardWidget = ({theme, products, setProducts}) =>{
    const [showCart,setShowCart] = useState(false);
    const [cantItems,setCantItems] = useState(0);

    useEffect(()=>{
        let quantity = 0;
        for(const product of products){
            quantity += product.quantity;
        }
        setCantItems(quantity);
    },[products])

    const handleRemove = (value) =>{
        let newProducts = products.filter((product) => product.name != value)
        setProducts(newProducts);
    }

    return <div id='shoppingCart'>
        <ShoppingCartIcon style={{cursor:'pointer'}} onClick={()=>setShowCart(!showCart)}/>
        {cantItems}
        {showCart && <div className={theme ? 'listShoppingCart light' : 'listShoppingCart dark'}>
            <ul>
                {products.length > 0 ? 
                products.map((product)=><CardWidgetPresentacional {...product} handleRemove={handleRemove}/>) 
                : 'You dont have products in your cart'}
            </ul>
        </div>}
    </div>
}

export default CardWidget;