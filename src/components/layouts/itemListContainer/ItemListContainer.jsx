import React,{useState} from 'react';
import { products } from '../../../productsMock.js';
import ItemListContainerPresentacional from './ItemListContainerPresentacional.jsx'
import './ItemListContainer.css'


const ItemListContainer = ({greeting, theme, productsInCart, setProductsInCart}) =>{

    const [items,setItems] = useState(products);

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
    
    return <div className= {theme ? 'itemListContainer light' : 'itemListContainer dark'}>
        <h2>
            {greeting}
        </h2>
        <h3>Fridges</h3>
        <div className='fridges'>
            <div className='fridge'>
                <h3>Coca Cola</h3>
                <div className='fridgeContainer'>
                    <ItemListContainerPresentacional items={items} handleAddFridges={handleAddFridges}/>
                </div>
                <div className='manija'/>
            </div>
            <div className='fridge'>
                <h3>Energizantes</h3>
                <div className='fridgeContainer'>
                    <article className='item'/>
                    <article className='item'/>
                    <article className='item'/>
                    <article className='item'/>
                    <article className='item'/>
                    <article className='item'/>
                    <article className='item'/>
                    <article className='item'/>
                    <article className='item'/>
                </div>
                <div className='manija'/>
            </div>
        </div>
    </div>
}

export default ItemListContainer;