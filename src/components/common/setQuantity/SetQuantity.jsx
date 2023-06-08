import React from 'react';

const SetQuantity = ({count,increment,decrement,handleSubmit}) =>{
    return <div className="setQuantity">
        <button onClick={increment}>+</button>
        <div className="info">
            <h3>{count}</h3>
            <button onClick={handleSubmit}>añadir</button>
        </div>
        <button onClick={decrement}>-</button>
    </div>
} 

export default SetQuantity;