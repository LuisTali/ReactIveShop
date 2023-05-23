import React from "react";

const CardWidgetPresentacional = ({product,handleRemove}) =>{
    return <li><h3>{product}</h3><button onClick={()=>handleRemove(product)}>remove</button></li>
}
export default CardWidgetPresentacional;