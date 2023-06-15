import React from "react";

const CardWidgetPresentacional = ({productsInCart,handleRemove}) =>{
    console.log(productsInCart);;
    return productsInCart.map((product)=> <li id={product.idCart}>
        <h3>{product.name}</h3>
        <b>${product.price}</b>
        <b>{product.quantity}</b>
        <button onClick={()=>handleRemove(product.idCart)}>remove</button>
    </li>)
}
export default CardWidgetPresentacional;