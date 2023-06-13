import React from "react";
import EndBuyItem from "./EndBuyItem.jsx";
import Form from "../form/Form.jsx";
import './EndBuy.css';

const EndBuy = ({theme,productsInCart, setProductsInCart}) =>{
    const handleRemove = (value) =>{
        let newProducts = productsInCart.filter((product) => product.idCart != value)
        setProductsInCart(newProducts);
    }
    return <div className={theme ? 'cartList light bodyLight' : 'cartList dark bodyDark'}>
        {productsInCart.length > 0 && <ul className="shoppingCartList">
            <div className="cartItem">
                <h3>Name</h3>
                <h3>Quantity</h3>
                <h3 id="price">Price</h3>
                <h3>Remove</h3>
            </div>
            {productsInCart.map((product)=><EndBuyItem {...product} handleRemove={handleRemove}/>)}
        </ul>}
        {productsInCart.length == 0 && <h2>No tienes productos en el carrito</h2>}
        {productsInCart.length > 0 && <Form/>}
    </div>
}

export default EndBuy;