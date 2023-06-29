import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useCount } from "../../hooks/useCount.jsx";
import SetQuantity from '../setQuantity/SetQuantity.jsx';
import './Product.css'

const Product = ({id, name, imgsrc, handleAdd, price, category, stock}) =>{
    const {count,decrement,increment,reset} = useCount(1,stock);
    const [showQuantity,setShowQuantity] = useState(false);
    const navigate = useNavigate();

    const handleAddItem = () =>{
        if(category == 'drinks'){
            setShowQuantity(false);
            reset();
            let newItem = {id,name,imgsrc,price,typeof:'drink',stock:stock,quantity:count};
            handleAdd(newItem);
        }else if(category == 'foods'){
            navigate(`/comidas/${id}`);
        }
    }

    return <article className='item'>
        <b>${price}</b>
        <h4>{name}</h4>
        <img src={imgsrc}  onClick={()=>{category == 'drinks' ? setShowQuantity(!showQuantity) : handleAddItem() }}/>
        {showQuantity && <SetQuantity handleSubmit={handleAddItem} count={count} increment={increment} decrement={decrement}/>}
    </article>;
}
export default Product;