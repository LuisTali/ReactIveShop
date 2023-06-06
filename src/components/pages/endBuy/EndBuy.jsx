import React from "react";
import EndBuyItem from "./EndBuyItem.jsx";
import './EndBuy.css';

const EndBuy = ({productsInCart}) =>{
    console.log(productsInCart);
    return <div className="cartList">
        <ul className="shoppingCartList">
        <div className="cartItem">
            <h3>Name</h3>
            <h4>Quantity</h4>
            <h4 id="price">Price</h4>
        </div>
            {productsInCart.map((product)=><EndBuyItem {...product}/>)}
        </ul>
    </div>
}

export default EndBuy;