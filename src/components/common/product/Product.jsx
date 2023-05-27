import React from "react";
import './Product.css'
const Product = ({name, imgsrc, handleAddFridges, price}) =>{

    return <article className='item' onClick={()=>handleAddFridges(name,price)}>
        <b>${price}</b>
        <h4>{name}</h4>
        <img src={imgsrc}/>
    </article>;
}
export default Product;