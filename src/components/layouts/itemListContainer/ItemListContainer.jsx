import React from 'react';
import Product from '../../common/product/Product';
import './ItemListContainer.css'


const ItemListContainer = ({greeting, theme, products, setProducts}) =>{

    const handleAddFridges = (name,price) =>{
        if(products.length > 0){
            let productAlready = products.find((product) => product.name == name);
            if(productAlready){
                products.map((product) => {
                    if(product.name === name) product.quantity += 1;
                })
                let newProducts = [...products]; //Forzar el reRender al setear como estado un nuevo objeto
                setProducts(newProducts)
            }else{
                let newProduct = {name,price,quantity:1}
                let newProducts = [...products];
                newProducts.push(newProduct);
                setProducts(newProducts)
            }
        }else{
            let newProducts = [];
            let newProduct = {name,price,quantity:1}
            newProducts.push(newProduct);
            setProducts(newProducts);
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
                    <Product name={'Coca'} imgsrc={'https://www.nectar.net/productimages/COC005@2x.jpg'} handleAddFridges={handleAddFridges} price={300}/>
                    <Product name={'Sprite'} imgsrc={'https://files.ekmcdn.com/9ee6b7/images/icon-sprite-glass-bottles-24-x-330ml-374-p.jpg?v=c180985d-bcbb-43a2-afa2-475658939d3a'} handleAddFridges={handleAddFridges} price={300}/>
                    <Product name={'Fanta'} imgsrc={'https://www.renderhub.com/hovak/fanta-new-bottle/fanta-new-bottle-01.jpg'} handleAddFridges={handleAddFridges} price={300}/>
                    <Product name={'Coca Zero'} imgsrc={'https://www.tolchards.com/sites/default/files/styles/product_full/public/vintner/vintner-images/CC24ZERJ.jpg?itok=DTS1Xknx'} handleAddFridges={handleAddFridges} price={300}/>
                    <Product name={'Kin'} imgsrc={'https://i.redd.it/o1s5fi3ukz881.jpg'} handleAddFridges={handleAddFridges} price={200}/>
                    <Product name={'Aquarius'} imgsrc={'https://coca-colafemsa.com/wp-content/uploads/2020/02/15.png'} handleAddFridges={handleAddFridges} price={350}/>
                    <Product/>                    
                    <Product/>                    
                    <Product/>                    
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