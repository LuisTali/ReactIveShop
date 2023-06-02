import React,{useEffect, useState} from 'react';
import { products } from '../../../productsMock.js';
import Fridge from '../../common/fridge/Fridge.jsx';
import FoodContainer from '../../common/foodContainer/FoodContainer.jsx';
import './ItemListContainer.css'


const ItemListContainer = ({type, theme, productsInCart, setProductsInCart}) =>{

    const [items,setItems] = useState(products);
    const [sodas,setSodas] = useState([]);
    const [energyDrinks,setEnergyDrinks] = useState([]);
    const [foods,setFoods] = useState([]);

    useEffect(()=>{
        if(type == 'drinks'){
            let sodas = items.filter((item) => item.type == 'soda');
            let energyDrinks = items.filter((item) => item.type == 'energydrink');
            setSodas(sodas);
            setEnergyDrinks(energyDrinks);
        }else if(type = 'foods'){
            let foods = items.filter((item) => item.type == 'food');
            setFoods(foods);
        }
    },[type])

    const handleAdd = (item) =>{
        if(productsInCart.length > 0){
            let productAlready = productsInCart.find((product) => product.name == item.name);
            if(productAlready){
                productsInCart.map((product) => {
                    if(product.name === item.name) product.quantity += 1;
                })
                let newProducts = [...productsInCart]; //Forzar el reRender al setear como estado un nuevo objeto
                setProductsInCart(newProducts)
            }else{
                let newProduct = {idProduct:item.id,name:item.name,price:item.price,imgsrc:item.imgsrc,quantity:1}
                let newProducts = [...productsInCart];
                newProducts.push(newProduct);
                setProductsInCart(newProducts)
            }
        }else{
            let newProducts = [];
            let newProduct = {idProduct:item.id,name:item.name,price:item.price,imgsrc:item.imgsrc,quantity:1}
            newProducts.push(newProduct);
            setProductsInCart(newProducts);
        }
        console.log(productsInCart);
    }
    
    return <div className= {theme ? 'itemListContainer bodyLight' : 'itemListContainer bodyDark'}>
        <h2>This is ReactIve Shop</h2>
        {type=='drinks' && <div className='fridges'>
                                <Fridge title={'Coca Cola'} items={sodas} handleAdd={handleAdd}/>
                                <Fridge title={'Energizantes'} items={energyDrinks} handleAdd={handleAdd}/>
                            </div>
        }
        {type == 'foods' && <div className='foodContainers'>
                                <FoodContainer items={foods} handleAdd={handleAdd}/>
                            </div>
        }
    </div>
}

export default ItemListContainer;