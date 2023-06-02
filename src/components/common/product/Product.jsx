import React from "react";
import { useNavigate } from "react-router-dom";
import './Product.css'

const Product = ({id, name, imgsrc, handleAdd, price, category}) =>{
    const navigate = useNavigate();

    const handleAddItem = () =>{
        console.log(category);
        if(category == 'drinks'){
            let newItem = {id,name,imgsrc,price,typeof:'drink'};
            handleAdd(newItem);
        }else if(category == 'foods'){
            let newItem = {id,name,imgsrc,price,typeof:'foods'} 
            handleAdd(newItem);
            navigate(`/comida/${id}`);
        }
    }

    return <article key={id} className='item' onClick={()=>handleAddItem()}>
        <b>${price}</b>
        <h4>{name}</h4>
        <img src={imgsrc}/>
    </article>;
}
export default Product;