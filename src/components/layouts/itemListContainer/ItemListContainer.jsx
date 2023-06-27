import React,{useContext, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Fridge from '../../common/fridge/Fridge.jsx';
import FoodContainer from '../../common/foodContainer/FoodContainer.jsx';
import './ItemListContainer.css'
import { CartContext } from '../../../context/CartContext.jsx';
import { ThemeContext } from '../../../context/ThemeContext.jsx';
import {db} from '../../../firebaseConfig.js';
import {collection,getDocs,query,where} from "firebase/firestore";

const ItemListContainer = () =>{
    const {categoria} = useParams();
    const {theme} = useContext(ThemeContext);
    const [items,setItems] = useState([]);
    const [sodas,setSodas] = useState([]);
    const [energyDrinks,setEnergyDrinks] = useState([]);
    const [foods,setFoods] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        let itemsCollection = collection(db, "productos");
        if(!categoria){
            getDocs(itemsCollection)
            .then((res)=>{
            let productsDocs = res.docs.map((item)=>{
                return {
                    ...item.data(),
                    id: item.id
                }
            })
            let sodas = productsDocs.filter((item)=>item.type == 'soda');
            let energy = productsDocs.filter((item)=>item.type == 'energydrink');
            let foods = productsDocs.filter((item)=>item.type == 'food');
            setEnergyDrinks(energy);
            setSodas(sodas);
            setFoods(foods);
            setLoading(false);
            })
            .catch((err)=>console.log(err));
        }else{
            if(categoria == 'drinks'){

                let itemsCollection = collection(db,"productos");

                let querySoda = query(itemsCollection,where("type","==","soda"));

                let queryEnergy = query(itemsCollection,where("type","==","energydrink"));

                getDocs(querySoda)
                .then((res)=>{
                    let sodasDocs = res.docs.map((item)=>{
                        return{
                            ...item.data(),
                            id:item.id
                        }
                    })
                    setSodas(sodasDocs);
                })
                .catch((err)=>console.log(err));

                getDocs(queryEnergy)
                .then((res)=>{
                    let energyDocs = res.docs.map((item)=>{
                        return{
                            ...item.data(),
                            id:item.id
                        }
                    })
                    setEnergyDrinks(energyDocs);
                })
                .catch((err)=>console.log(err));

                    setLoading(false);

            }else if(categoria == 'foods'){
                let queryFoods = query(itemsCollection,where("type","==","food"));
                getDocs(queryFoods)
                .then((res)=>{
                    let foodsDocs = res.docs.map((item)=>{
                        return{
                            ...item.data(),
                            id:item.id
                        }
                    })
                    setFoods(foodsDocs);
                    setLoading(false);
                })
                .catch((err)=>console.log(err));
            }
        }
    },[categoria]);

    if(loading){
        return <div className= {theme ? 'itemListContainer bodyLight' : 'itemListContainer bodyDark'}>
        <h2>This is ReactIve Shop</h2>
        <h3>Loading...</h3>
        </div>
    }
    if(!categoria){
        return <div className= {theme ? 'itemListContainer bodyLight' : 'itemListContainer bodyDark'}>
            <div className='fridges'>
                <Fridge title={'Coca Cola'} items={sodas}/>
                <Fridge title={'Energizantes'} items={energyDrinks}/>
            </div>
            <div className='foodContainers'>
                <FoodContainer items={foods} />
            </div>
        </div>
    }
    return <div className= {theme ? 'itemListContainer bodyLight' : 'itemListContainer bodyDark'}>
        <h2>This is ReactIve Shop</h2>
        {categoria == 'drinks' && 
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