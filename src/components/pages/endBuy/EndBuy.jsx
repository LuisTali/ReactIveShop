import React, { useEffect, useState } from "react";
import EndBuyItem from "./EndBuyItem.jsx";
import Form from "../form/Form.jsx";
import './EndBuy.css';

const EndBuy = ({theme,productsInCart, setProductsInCart}) =>{
    const [formAvailable,setFormAvailable] = useState(false);
    const [message,setMessage] = useState('');

    const handleRemove = (value) =>{
        let newProducts = productsInCart.filter((product) => product.idCart != value)
        setProductsInCart(newProducts);
    }
    const handleConfirm = () =>{
        let auxmessage = `<div><ul>${productsInCart.map((product) =>{
            return (
                `<li><h3>Name: ${product.name}</h3><h3>Quantity: ${product.quantity}</h3><h3>Price: $${product.price}</h3></li>`    
            )} 
        )}</ul></div>`;
        setMessage(auxmessage);
        console.log(auxmessage);
        setFormAvailable(true);
    }
    useEffect(()=>{
        if(productsInCart.length == 0) setFormAvailable(false);
    },[productsInCart]);

    if(formAvailable) return <Form theme={theme} message={message} productsInCart={productsInCart} setFormAvailable={setFormAvailable} setProductsInCart={setProductsInCart}/>
    else return <div className={theme ? 'cartList light bodyLight' : 'cartList dark bodyDark'}>
        {productsInCart.length > 0 && <ul className="shoppingCartList">
            <div className="cartItem">
                <h3>Name</h3>
                <h3>Quantity</h3>
                <h3 id="price">Price</h3>
                <h3>Remove</h3>
            </div>
            {productsInCart.map((product)=><EndBuyItem {...product} handleRemove={handleRemove}/>)}
        </ul>}
        {productsInCart.length > 0 && <button className='confirmBtn' onClick={()=>handleConfirm()}>confirmar</button>}
        {productsInCart.length == 0 && <h2>No tienes productos en el carrito</h2>}
    </div>
}

export default EndBuy;