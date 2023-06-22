import React from 'react';
import {useNavigate} from 'react-router-dom';

const SetQuantity = ({count,product,increment,decrement,handleSubmit}) =>{
    const navigate = useNavigate();
    
    const handleAdd = () =>{
        handleSubmit(product,count); 
        if(product.type && product.type == 'food'){
            navigate('/categorias/foods');
        }
    }
    return <div className="setQuantity">
        <div className="info">
        <button onClick={increment}>+</button>
            <h3>{count}</h3>
        <button onClick={decrement}>-</button>
        </div>
            <button className='addBtn' onClick={()=>handleAdd()}>añadir</button>
    </div>
} 

export default SetQuantity;