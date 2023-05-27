import React from "react";

const CardWidgetPresentacional = ({name,price,quantity,handleRemove}) =>{
    return <li>
        <h3>{name}</h3>
        <b>{price}</b>
        <b>{quantity}</b>
        <button onClick={()=>handleRemove(name)}>remove</button>
    </li>
}
export default CardWidgetPresentacional;