import React from 'react';

const SetQuantity = ({count,increment,decrement,handleSubmit}) =>{
    return <div className="setQuantity">
        <div className="info">
        <button onClick={increment}>+</button>
            <h3>{count}</h3>
        <button onClick={decrement}>-</button>
        </div>
            <button className='addBtn' onClick={handleSubmit}>añadir</button>
    </div>
} 

export default SetQuantity;