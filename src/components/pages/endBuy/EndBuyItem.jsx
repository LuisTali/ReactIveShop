import React, { useState } from "react";

const EndBuyItem = ({name,quantity,price,extras}) =>{

    const [show,setShow] = useState(false);

    return <li>
        <div className="cartItem" onClick={()=>setShow(!show)}>
            <h3>{name}</h3>
            <h4>{quantity}</h4>
            <h4 id="price">${price}</h4>
        </div>
        <div className={show ? 'showInfo' : 'notShow'}>
            {extras && extras.map((extra) => <h5>{extra}</h5>)}
        </div>
    </li>
}
export default EndBuyItem;