import React from "react";

const CardWidgetPresentacional = ({productsInCart,handleRemove}) =>{
    return productsInCart.map((product)=> <li>
        <h3>{product.name}</h3>
        <b>${product.price}</b>
        <b>{product.quantity}</b>
        <button onClick={()=>handleRemove(product.idCart)}>remove</button>
    </li>)
}
export default CardWidgetPresentacional;