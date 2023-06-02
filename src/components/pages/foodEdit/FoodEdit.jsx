import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import './FoodEdit.css';

const FoodEdit = ({theme,productsInCart,setProductsInCart}) =>{
    const {id} = useParams();
    const [product,setProduct] = useState({});

    useEffect(()=>{
        let food = productsInCart.find((product) => product.idCart == id);
        setProduct({...food,extras:[]});
    },[]);

    const handleChange = (e) =>{
        if(e.target.type == 'checkbox'){
            if(e.target.checked){
                let productUpdated = {...product};
                productUpdated.extras.push(e.target.name);
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
        console.log(productsInCart.length);
        for(const item of productsInCart){
            console.log(item.idCart);
            if(item.name == product.name && item.idCart < productsInCart.length - 1){
                let temporaryProduct = {...product,idCart:item.idCart};
                console.log(JSON.stringify(item));
                console.log(JSON.stringify(temporaryProduct));
                if(JSON.stringify(item) == JSON.stringify(temporaryProduct)){
                    console.log('identicos previos');
                    item.quantity++;
                    flag=true;
                    break;
                }
            }
            if(flag) break;
        }
        if(!flag){
            let newProductsInCart = [...productsInCart];
            newProductsInCart[product.idCart] = product;
            setProductsInCart(newProductsInCart);
        }else{
            let newProducts = [...productsInCart];
            newProducts.splice(product.idCart,1);
            setProductsInCart(newProducts);
        }
        console.log(product);
    }
    
    return(
        <div className={theme ? "foodEdit bodyLight" : "foodEdit bodyDark"}>
            {id}
            <h2>{product.name}</h2>
            <img src={product.imgsrc}/>
            <h3>${product.price}</h3>
            <div className="editInfo">
                <div className="inputGroup">
                  <label>Extra Medallon</label><input type="checkbox" name="extraMedallon" id="" onChange={(e)=>handleChange(e)}/>  
                </div>
                <div className="inputGroup">
                <label>Extra Bacon</label><input type="checkbox" name="extraBacon" id="" onChange={(e)=>handleChange(e)}/>
                </div>
                <div className="inputGroup">
                    <label>Extra Cheddar</label><input type="checkbox" name="extraCheddar" id="" onChange={(e)=>handleChange(e)}/>
                </div>
                <div className="inputGroup">
                    <label>Extra Tomate</label><input type="checkbox" name="extraTomate" id="" onChange={(e)=>handleChange(e)}/>  
                </div>
                <div className="inputGroup">
                    <label>Extra Lechuga</label><input type="checkbox" name="extraLechuga" id="" onChange={(e)=>handleChange(e)}/>    
                </div>
                <div className="selectGroup">
                    <label>Seleccione un aderezo</label>
                    <select name="aderezo" id="" placeholder="" onChange={(e)=>handleChange(e)}>
                        <option value='ketchup'>ketchup</option>
                        <option value='mayonesa'>mayonesa</option>
                        <option value='barbacoa'>barbacoa</option>
                        <option selected value='none'>sin aderezo</option>
                    </select>
                </div>
                <button onClick={handleSubmit}>Listo</button>
            </div>
        </div>
    );
}

export default FoodEdit;