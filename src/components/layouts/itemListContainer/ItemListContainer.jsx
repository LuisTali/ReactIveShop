import React from 'react';
import './ItemListContainer.css'

const ItemListContainer = ({greeting, theme, products, setProducts}) =>{
    
    const handleAdd = () =>{
        if(products.length > 0){
            let newProducts = [...products];
            newProducts.push(products[products.length - 1] + 1);
            setProducts(newProducts);
        }else{
            let newProducts = [];
            newProducts.push(1);
            setProducts(newProducts);
        }
    }
    
    return <div className= {theme ? 'itemListContainer light' : 'itemListContainer dark'}>
        <h2>
            {greeting}
        </h2>
        <button onClick={handleAdd}>Add Product</button>
    </div>
}

export default ItemListContainer;