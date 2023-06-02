import React from "react";
import FridgePresentacional from "./FridgePresentacional.jsx";
import './Fridge.css'

const Fridge = ({title,items,handleAdd}) =>{
    return <div className='fridge'>
        <h3>{title}</h3>
        <div className='fridgeContainer'>
            <FridgePresentacional items={items} handleAdd={handleAdd}/>
        </div>
        <div className='manija'/>
    </div>
}   

export default Fridge;