import React from "react";
import './Product.css'
const Product = ({name, imgsrc, handleAddFridges}) =>{

    return <article className='item' onClick={()=>handleAddFridges(name)}>
        {name}
        <img src={imgsrc}/>
    </article>;
}
export default Product;