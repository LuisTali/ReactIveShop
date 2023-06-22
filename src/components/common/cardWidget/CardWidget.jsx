import React,{useState,useEffect, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CardWidgetPresentacional from './CardWidgetPresentacional.jsx';
import './CardWidget.css'
import { CartContext } from '../../../context/CartContext.jsx';
import Swal from 'sweetalert2'

const CardWidget = ({theme}) =>{
    const navigate = useNavigate();    
    const {productsInCart,setProductsInCart, handleRemove, quantityCart} = useContext(CartContext);
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

    const deleteProduct = (id) =>{
        Swal.fire({
            title: 'Desea eliminar el producto del carro?',
            showDenyButton: true,
            confirmButtonText: 'Eliminar',
            denyButtonText: `No Eliminar`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                handleRemove(id);
                Swal.fire('Eliminado!', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('No eliminado!', '', 'error')
            }
          })
    }

    return <div id='shoppingCart'>
        <ShoppingCartIcon style={{cursor:'pointer'}} onClick={()=>setShowCart(!showCart)}/>
        {quantityCart}
        {showCart && <div className={theme ? 'listShoppingCart light' : 'listShoppingCart dark'}>
            <ul>
                {productsInCart.length > 0 ? <>
                <CardWidgetPresentacional productsInCart={productsInCart} handleRemove={deleteProduct}/>
                <button id='endShop' onClick={()=>handleEndShopClick()}>Finalizar Compra</button>
                </>
                : 'You dont have products in your cart'}
            </ul>
            
        </div>}
    </div>
}

export default CardWidget;