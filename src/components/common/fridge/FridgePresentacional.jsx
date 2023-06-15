import React from "react";
import Product from '../../common/product/Product';

const FridgePresentacional = ({items,handleAdd}) =>{
    return items.map((product) =>{ return <Product key={product.id} {...product} handleAdd={handleAdd} category='drinks'/>
    })
}

export default FridgePresentacional;