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
    const [quantityCart,setQuantityCart] = useState(productsInCart.length);

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
        if(productsInCart.length > 0){ //Si carro no esta vacio

            
                let productAlready = productsInCart.find((product) => product.name == item.name);
                if(productAlready){ //Si hay un producto con el mismo nombre en el carro
                    productsInCart.map((product) => {
                        if(product.name === item.name) product.quantity += 1; 
                    })
                    //Entonces sumo 1 a cantidad de ese producto y actualizo el carrito
                    let newProducts = [...productsInCart];
                    setProductsInCart(newProducts)
                }else{
                    let newProduct = {idCart:quantityCart,...item,quantity:1}
                    setQuantityCart(quantityCart+1);
                    let newProducts = [...productsInCart];
                    newProducts.push(newProduct);
                    setProductsInCart(newProducts)
                } 
             
        }else{ //Si el carro esta vacio creo un item nuevo y lo pusheo al arreglo sin mas
            let newProducts = [];
            let newProduct = {idCart:quantityCart,...item,quantity:1}
            setQuantityCart(quantityCart+1);
            newProducts.push(newProduct);
            setProductsInCart(newProducts);
        }
    }
    
    return <div className= {theme ? 'itemListContainer bodyLight' : 'itemListContainer bodyDark'}>
        <h2>This is ReactIve Shop</h2>
        {type =='drinks' && 
        <div className='fridges'>
            <Fridge title={'Coca Cola'} items={sodas} handleAdd={handleAdd}/>
            <Fridge title={'Energizantes'} items={energyDrinks} handleAdd={handleAdd}/>
        </div>
        }
        {type == 'foods' && 
        <div className='foodContainers'>
            <FoodContainer items={foods} quantityCart={quantityCart} handleAdd={handleAdd}/>
        </div>
        }
    </div>
}

export default ItemListContainer;