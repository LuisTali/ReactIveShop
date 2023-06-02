import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import './FoodEdit.css';

const FoodEdit = ({theme,productsInCart,setProductsInCart}) =>{
    const {id} = useParams();
    const [product,setProduct] = useState({});

    useEffect(()=>{
        const food = productsInCart.find((product) => product.idProduct == id);
        console.log(food);
        setProduct(food);
    },[]);
    
    return(
        <div className={theme ? "foodEdit bodyLight" : "foodEdit bodyDark"}>
            {id}
            <h2>{product.name}</h2>
            <img src={product.imgsrc}/>
            <h3>${product.price}</h3>
        </div>
    );
}

export default FoodEdit;