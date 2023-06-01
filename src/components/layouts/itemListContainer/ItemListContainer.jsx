import React,{useEffect, useState} from 'react';
import { products } from '../../../productsMock.js';
import Fridge from '../../common/fridge/Fridge.jsx';
import './ItemListContainer.css'


const ItemListContainer = ({greeting, theme, productsInCart, setProductsInCart}) =>{

    const [items,setItems] = useState(products);
    const [sodas,setSodas] = useState([]);
    const [energyDrinks,setEnergyDrinks] = useState([]);

    useEffect(()=>{
        let sodas = items.filter((item) => item.type == 'soda');
        let energyDrinks = items.filter((item) => item.type == 'energydrink');
        setSodas(sodas);
        setEnergyDrinks(energyDrinks);
    },[])

    const handleAddFridges = (name,price) =>{
        if(productsInCart.length > 0){
            let productAlready = productsInCart.find((product) => product.name == name);
            if(productAlready){
                productsInCart.map((product) => {
                    if(product.name === name) product.quantity += 1;
                })
                let newProducts = [...productsInCart]; //Forzar el reRender al setear como estado un nuevo objeto
                setProductsInCart(newProducts)
            }else{
                let newProduct = {name,price,quantity:1}
                let newProducts = [...productsInCart];
                newProducts.push(newProduct);
                setProductsInCart(newProducts)
            }
        }else{
            let newProducts = [];
            let newProduct = {name,price,quantity:1}
            newProducts.push(newProduct);
            setProductsInCart(newProducts);
        }
    }
    
    return <div className= {theme ? 'itemListContainer' : 'itemListContainer'}>
        <h2>
            {greeting}
        </h2>
        <h3>Fridges</h3>
        <div className='fridges'>
            <Fridge title={'Coca Cola'} items={sodas} handleAddFridges={handleAddFridges}/>
            <Fridge title={'Energizantes'} items={energyDrinks} handleAddFridges={handleAddFridges}/>
        </div>
    </div>
}

export default ItemListContainer;