import React, { useState,useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../../../productsMock.js";
import './FoodEdit.css';

const FoodEdit = ({theme,productsInCart,setProductsInCart}) =>{
    const {id} = useParams();
    const [product,setProduct] = useState({});
    const navigate = useNavigate();

    useEffect(()=>{
        //let food = productsInCart.find((product) => product.idCart == id);
        let food = products.find((product)=>product.id == id);
        setProduct({...food,extras:[]});
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
                setProduct(productUpdated);
            } 
        }else if(e.target.type == 'select-one'){
            const productUpdated = {...product,salsa:e.target.value}
            setProduct(productUpdated);
        }
    }

    const handleSubmit = () =>{
        let flag = false;
        if(!product.salsa){
            const productUpdated = {...product,salsa:'sin salsa'}
            setProduct(productUpdated);
        }
        let product1 = {idCart:productsInCart.length,...product,quantity:1};
        for(const item of productsInCart){
            if(item.name == product1.name){
                let temporaryProduct = {idCart:item.idCart,...product,quantity:item.quantity,};
                console.log(temporaryProduct);
                if(JSON.stringify(item) == JSON.stringify(temporaryProduct)){
                    item.quantity++;
                    flag=true;
                    break;
                }
                if(flag) break;
            }
        }
            if(!flag){
                let newProductsInCart = [...productsInCart];
                newProductsInCart.push(product1);
                setProductsInCart(newProductsInCart);
                navigate('/comidas');
            }else{
                let newProducts = [...productsInCart];
                setProductsInCart(newProducts);
                navigate('/comidas');
            }
        }
    
    return(
        <div className={theme ? "foodEdit bodyLight" : "foodEdit bodyDark"}>
            {id}
            <h2>{product.name}</h2>
            <img src={product.imgsrc}/>
            <h3>${product.price}</h3>
            <div className="editInfo">
                <div className="inputGroup">
                  <label>Extra Medallon $50</label>
                  <input className="checkbox" type="checkbox" name="ExtraMedallon" value={50} id="" onChange={(e)=>handleChange(e)}/>  
                </div>
                <div className="inputGroup">
                <label>Extra Bacon $40</label>
                <input className="checkbox" type="checkbox" name="ExtraBacon" value={40} id="" onChange={(e)=>handleChange(e)}/>
                </div>
                <div className="inputGroup">
                    <label>Extra Cheddar $30</label>
                    <input className="checkbox" type="checkbox" name="ExtraCheddar" value={30} id="" onChange={(e)=>handleChange(e)}/>
                </div>
                <div className="inputGroup">
                    <label>Extra Tomate $20</label>
                    <input className="checkbox" type="checkbox" name="ExtraTomate" value={20} id="" onChange={(e)=>handleChange(e)}/>  
                </div>
                <div className="inputGroup">
                    <label>Extra Lechuga $20</label>
                    <input className="checkbox" type="checkbox" name="ExtraLechuga" value={20} id="" onChange={(e)=>handleChange(e)}/>    
                </div>
                <div className="inputGroup">
                    <label>Extra Pepinillo $30</label>
                    <input className="checkbox" type="checkbox" name="ExtraPepinillo" value={30} id="" onChange={(e)=>handleChange(e)}/>    
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
            </div>
            <button className="addBurguer" onClick={handleSubmit}>Listo</button>
        </div>
    );
}

export default FoodEdit;