import React, { useContext } from "react";
import FridgePresentacional from "./FridgePresentacional.jsx";
import './Fridge.css'
import { CartContext } from "../../../context/CartContext.jsx";

const Fridge = ({title,items,handleAdd}) =>{
    const {handleAddDrinks} = useContext(CartContext);
    return <div className='fridge'>
        <h3>{title}</h3>
        <div className='fridgeContainer'>
            <FridgePresentacional items={items} handleAdd={handleAddDrinks}/>
        </div>
        <div className='manija'/>
    </div>
}   

export default Fridge;