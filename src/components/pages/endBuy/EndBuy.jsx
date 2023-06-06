import React from "react";
import EndBuyItem from "./EndBuyItem.jsx";
import './EndBuy.css';

const EndBuy = ({productsInCart, setProductsInCart}) =>{
    const handleRemove = (value) =>{
        let newProducts = productsInCart.filter((product) => product.idCart != value)
        setProductsInCart(newProducts);
    }
    return <div className="cartList">
        <ul className="shoppingCartList">
        <div className="cartItem">
            <h4>Name</h4>
            <h4>Quantity</h4>
            <h4 id="price">Price</h4>
            <h4>Remove</h4>
        </div>
            {productsInCart.map((product)=><EndBuyItem {...product} handleRemove={handleRemove}/>)}
        </ul>
    </div>
}

export default EndBuy;