import React, { useState,useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCount } from '../../hooks/useCount.jsx';
import SetQuantity from "../../common/setQuantity/SetQuantity.jsx";
import './FoodEdit.css';
import { CartContext } from "../../../context/CartContext.jsx";
import { ThemeContext } from "../../../context/ThemeContext.jsx";
import { db } from "../../../firebaseConfig.js";
import {collection,documentId,getDocs,query,where} from "firebase/firestore";

const FoodEdit = () =>{
    const {id} = useParams();
    const {count,decrement,increment,reset} = useCount(1,15);
    const [product,setProduct] = useState({});
    const {handleAddFoods} = useContext(CartContext);
    const {theme} = useContext(ThemeContext);

    useEffect(()=>{
        let itemsCollection = collection(db, "productos");
        let queryFood = query(itemsCollection,where(documentId(),"==",id));
        getDocs(queryFood)
        .then((res)=>{
            let burguerFind = res.docs.map((product)=>{
                return {
                    ...product.data(),
                    id: product.id
                }
            })
            setProduct({...burguerFind[0],extras:[]});
        })
        .catch((err)=>console.log(err));
    },[]);

    const handleChange = (e) =>{
        if(e.target.type == 'checkbox'){
            if(e.target.checked){
                let productUpdated = {...product};
                productUpdated.extras.push(e.target.name);
                productUpdated.price += Number(e.target.value);
                setProduct(productUpdated);
            } 
            else{
                let indexExtra = product.extras.indexOf((extra)=>extra == e.target.name);
                let productUpdated = {...product};
                productUpdated.extras.splice(indexExtra,1)
                productUpdated.price -= Number(e.target.value);
                setProduct(productUpdated);
            } 
        }else if(e.target.type == 'select-one'){
            const productUpdated = {...product,salsa:e.target.value}
            setProduct(productUpdated);
        }
    }

    return(
        <div className={theme ? "foodEdit bodyLight" : "foodEdit bodyDark"}>
            {id}
            <h2>{product.name}</h2>
            <img src={product.imgsrc}/>
            <h3>${count * product.price}</h3>
            <div className="editInfo">
                <div className="inputGroup">
                  <label>Extra Medallon $50</label>
                  <input className="checkbox" type="checkbox" name="ExtraMedallon" value={50} id="" onChange={(e)=>handleChange(e)}/>  
                </div>
                <div className="inputGroup">
                    <label>Extra Cheddar $30</label>
                    <input className="checkbox" type="checkbox" name="ExtraCheddar" value={30} id="" onChange={(e)=>handleChange(e)}/>
                </div>
                <div className="inputGroup">
                    <label>Extra Pepinillo $30</label>
                    <input className="checkbox" type="checkbox" name="ExtraPepinillo" value={30} id="" onChange={(e)=>handleChange(e)}/>    
                </div>
                <div className="inputGroup">
                    <label>Extra Lechuga $20</label>
                    <input className="checkbox" type="checkbox" name="ExtraLechuga" value={20} id="" onChange={(e)=>handleChange(e)}/>    
                </div>
                <div className="inputGroup">
                <label>Extra Bacon $40</label>
                <input className="checkbox" type="checkbox" name="ExtraBacon" value={40} id="" onChange={(e)=>handleChange(e)}/>
                </div>
                <div className="inputGroup">
                    <label>Extra Tomate $20</label>
                    <input className="checkbox" type="checkbox" name="ExtraTomate" value={20} id="" onChange={(e)=>handleChange(e)}/>  
                </div>
                <div className="selectGroup">
                    <label>Seleccione un aderezo</label>
                    <select name="aderezo" id="" placeholder="" onChange={(e)=>handleChange(e)}>
                        <option value='sin salsa'>sin aderezo</option>
                        <option value='ketchup'>ketchup</option>
                        <option value='mayonesa'>mayonesa</option>
                        <option value='barbacoa'>barbacoa</option>
                    </select>
                </div>
            <SetQuantity count={count} product={product} increment={increment} decrement={decrement} handleSubmit={handleAddFoods}/>    
            </div>
        </div>
    );
}

export default FoodEdit;