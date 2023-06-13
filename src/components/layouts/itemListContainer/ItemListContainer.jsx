import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../../productsMock.js';
import Fridge from '../../common/fridge/Fridge.jsx';
import FoodContainer from '../../common/foodContainer/FoodContainer.jsx';
import './ItemListContainer.css'


const ItemListContainer = ({theme, productsInCart, setProductsInCart}) =>{
    const {categoria} = useParams();
    const [items,setItems] = useState(products);
    const [sodas,setSodas] = useState([]);
    const [energyDrinks,setEnergyDrinks] = useState([]);
    const [foods,setFoods] = useState([]);
    const [quantityCart,setQuantityCart] = useState(productsInCart.length);

    useEffect(()=>{
        if(categoria == 'drinks'){
            let sodas = items.filter((item) => item.type == 'soda');
            let energyDrinks = items.filter((item) => item.type == 'energydrink');
            setSodas(sodas);
            setEnergyDrinks(energyDrinks);
        }else if(categoria == 'foods'){
            let foods = items.filter((item) => item.type == 'food');
            setFoods(foods);
        }
    },[categoria])

    const handleAdd = (item) =>{
        console.log(item);
        let totalPrice = item.quantity * item.price;
        if(productsInCart.length > 0){ //Si carro no esta vacio
            let productAlready = productsInCart.find((product) => product.name == item.name);
            if(productAlready){ //Si hay un producto con el mismo nombre en el carro
                productsInCart.map((product) => {
                    if(product.name === item.name){
                        product.quantity += item.quantity; 
                        product.price += totalPrice;
                    } 
                })
                //Entonces sumo 1 a cantidad de ese producto y actualizo el carrito
                let newProducts = [...productsInCart];
                setProductsInCart(newProducts)
            }else{
                let newProduct = {idCart:quantityCart,...item,price:totalPrice};
                setQuantityCart(quantityCart + item.quantity);
                let newProducts = [...productsInCart];
                newProducts.push(newProduct);
                setProductsInCart(newProducts)
            } 
        }else{ //Si el carro esta vacio creo un item nuevo y lo pusheo al arreglo sin mas
            let newProducts = [];
            let newProduct = {idCart:quantityCart,...item,quantity:item.quantity,price: totalPrice}
            setQuantityCart(quantityCart+1);
            newProducts.push(newProduct);
            setProductsInCart(newProducts);
        }
    }
    
    return <div className= {theme ? 'itemListContainer bodyLight' : 'itemListContainer bodyDark'}>
        <h2>This is ReactIve Shop</h2>
        {categoria =='drinks' && 
        <div className='fridges'>
            <Fridge title={'Coca Cola'} items={sodas} handleAdd={handleAdd}/>
            <Fridge title={'Energizantes'} items={energyDrinks} handleAdd={handleAdd}/>
        </div>
        }
        {categoria == 'foods' && 
        <div className='foodContainers'>
            <FoodContainer items={foods} quantityCart={quantityCart} handleAdd={handleAdd}/>
        </div>
        }
    </div>
}

export default ItemListContainer;