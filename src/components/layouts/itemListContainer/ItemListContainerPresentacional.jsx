import React from "react";
import Product from '../../common/product/Product';

const ItemListContainerPresentacional = ({items,handleAddFridges}) =>{
    return items.map((product) =>{ return <Product {...product} handleAddFridges={handleAddFridges}/>
    })
}

export default ItemListContainerPresentacional;