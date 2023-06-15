import React, { useState } from "react";

const EndBuyItem = ({idCart,name,quantity,price,extras,salsa,type,handleRemove,formAvailable}) =>{
    const [show,setShow] = useState(false);
    if(salsa == undefined && type == 'food') salsa = 'sin aderezo';

    return <li>
            <div className="cartItem" >
                <h3 className="name" onClick={()=>setShow(!show)}>{name}</h3>
                <h3>{quantity}</h3>
                <h3 id="price">${price}</h3>
                <h3><button className='removeBtn' onClick={(e)=>{handleRemove(idCart)}}>-</button></h3>
            </div>
        <div className={show ? 'showInfo' : 'notShow'}>
            {extras && extras.map((extra) => <h5>{extra}</h5>)}
            {salsa && <h5>Aderezo: {salsa}</h5>}
        </div>
    </li>
}
export default EndBuyItem;