import React, { useState } from "react";

const EndBuyItem = ({idCart,name,quantity,price,extras,salsa,type,handleRemove}) =>{
    console.log(idCart);
    const [show,setShow] = useState(false);
    if(salsa == undefined && type == 'food') salsa = 'sin aderezo';
    return <li>
            <div className="cartItem" onClick={()=>setShow(!show)}>
                <h4 className="name">{name}</h4>
                <h4>{quantity}</h4>
                <h4 id="price">${price}</h4>
                <h4><button className='removeBtn' onClick={(e)=>{handleRemove(idCart)}}>-</button></h4>
            </div>
        <div className={show ? 'showInfo' : 'notShow'}>
            {extras && extras.map((extra) => <h5>{extra}</h5>)}
            {salsa && <h5>Aderezo: {salsa}</h5>}
        </div>
    </li>
}
export default EndBuyItem;