import React from "react";

const CardWidgetPresentacional = ({productsInCart,handleRemove}) =>{
    return productsInCart.map((product)=> <li key={product.idCart}>
        <h3>{product.name}</h3>
        <b>${product.price}</b>
        <b className="quantity">{product.quantity}</b>
        <button onClick={()=>handleRemove(product.idCart)}>remove</button>
    </li>)
}
export default CardWidgetPresentacional;