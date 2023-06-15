import React,{useContext, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../../productsMock.js';
import Fridge from '../../common/fridge/Fridge.jsx';
import FoodContainer from '../../common/foodContainer/FoodContainer.jsx';
import './ItemListContainer.css'
import { CartContext } from '../../../context/CartContext.jsx';
import { ThemeContext } from '../../../context/ThemeContext.jsx';


const ItemListContainer = () =>{
    const {categoria} = useParams();
    const {theme} = useContext(ThemeContext);
    const [items,setItems] = useState(products);
    const [sodas,setSodas] = useState([]);
    const [energyDrinks,setEnergyDrinks] = useState([]);
    const [foods,setFoods] = useState([]);

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

    return <div className= {theme ? 'itemListContainer bodyLight' : 'itemListContainer bodyDark'}>
        <h2>This is ReactIve Shop</h2>
        {categoria =='drinks' && 
        <div className='fridges'>
            <Fridge title={'Coca Cola'} items={sodas}/>
            <Fridge title={'Energizantes'} items={energyDrinks}/>
        </div>
        }
        {categoria == 'foods' && 
        <div className='foodContainers'>
            <FoodContainer items={foods} />
        </div>
        }
    </div>
}

export default ItemListContainer;